/**
 * ============================================================
 *  Quantum ML Workshop 2026 — Google Apps Script
 *  Paste this entire file into Google Apps Script editor,
 *  then deploy as a Web App (see instructions below).
 * ============================================================
 *
 *  HOW TO DEPLOY:
 *  1. Open your Google Sheet (name it "Workshop Registrations")
 *  2. Click Extensions → Apps Script
 *  3. Delete any existing code and paste this entire file
 *  4. Click Save (Ctrl+S)
 *  5. Click Deploy → New Deployment
 *     - Type: Web App
 *     - Execute as: Me
 *     - Who has access: Anyone
 *  6. Click Deploy, authorize the script
 *  7. Copy the Web App URL
 *  8. Paste the URL into js/main.js where it says:
 *       const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
 *
 *  SHEETS CREATED AUTOMATICALLY:
 *  - "Registrations" — all form submissions
 *  - "Invitations"   — for manually sending/tracking invites
 * ============================================================
 */

const SHEET_REGISTRATIONS = 'Registrations';
const SHEET_COMMENTS      = 'Comments';
const SHEET_INVITATIONS   = 'Invitations';

// ── Bootstrap: create sheets and headers on first run ──────
function setup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // Registrations sheet
  let regSheet = ss.getSheetByName(SHEET_REGISTRATIONS);
  if (!regSheet) {
    regSheet = ss.insertSheet(SHEET_REGISTRATIONS);
    regSheet.appendRow([
      'Timestamp',
      'First Name',
      'Last Name',
      'Email',
      'Institution',
      'Department',
      'Role',
      'Research Interests',
    ]);
    regSheet.getRange(1, 1, 1, 8).setFontWeight('bold').setBackground('#6c63ff').setFontColor('#ffffff');
    regSheet.setFrozenRows(1);
  }

  // Comments sheet
  let comSheet = ss.getSheetByName(SHEET_COMMENTS);
  if (!comSheet) {
    comSheet = ss.insertSheet(SHEET_COMMENTS);
    comSheet.appendRow(['Timestamp', 'First Name', 'Last Name', 'Email', 'Message']);
    comSheet.getRange(1, 1, 1, 5).setFontWeight('bold').setBackground('#0d9488').setFontColor('#ffffff');
    comSheet.setFrozenRows(1);
  }

  // Invitations sheet
  let invSheet = ss.getSheetByName(SHEET_INVITATIONS);
  if (!invSheet) {
    invSheet = ss.insertSheet(SHEET_INVITATIONS);
    invSheet.appendRow([
      'Name',
      'Email',
      'Role',
      'Institution',
      'Invited By',
      'Status',          // Pending / Sent / Accepted / Declined
      'Sent Date',
      'Response Date',
      'Notes',
    ]);
    invSheet.getRange(1, 1, 1, 9).setFontWeight('bold').setBackground('#0891b2').setFontColor('#ffffff');
    invSheet.setFrozenRows(1);
  }

  SpreadsheetApp.getUi().alert('Setup complete! Sheets are ready.');
}

// ── Handle POST from the registration form ─────────────────
function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_REGISTRATIONS);

    // Auto-create sheet if missing
    if (!sheet) {
      setup();
      sheet = ss.getSheetByName(SHEET_REGISTRATIONS);
    }

    // Parse incoming JSON (sent as FormData field 'payload')
    const data = JSON.parse(e.parameter.payload);

    // Route comments to a separate sheet
    if (data.formType === 'comment') {
      let comSheet = ss.getSheetByName(SHEET_COMMENTS);
      if (!comSheet) { setup(); comSheet = ss.getSheetByName(SHEET_COMMENTS); }
      comSheet.appendRow([
        new Date().toISOString(),
        data.firstName || '',
        data.lastName  || '',
        data.email     || '',
        data.message   || '',
      ]);
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'success' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const row = [
      new Date().toISOString(),
      data.firstName   || '',
      data.lastName    || '',
      data.email       || '',
      data.institution || '',
      data.department  || '',
      data.role        || '',
      data.interests   || '',
    ];

    sheet.appendRow(row);

    // Optional: send confirmation email to registrant
    if (data.email) {
      sendConfirmationEmail(data);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ── Handle GET (health check) ──────────────────────────────
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', workshop: 'Quantum ML Workshop 2026' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ── Send confirmation email to registrant ─────────────────
function sendConfirmationEmail(data) {
  const name = `${data.firstName || ''} ${data.lastName || ''}`.trim() || 'Participant';

  const subject = `Registration Confirmed — Quantum ML Workshop 2026`;

  const body = `
Dear ${name},

Thank you for registering for the Quantum ML Workshop 2026!

We have received your registration and will confirm your spot within 2 business days.

─────────────────────────────
Event Details
─────────────────────────────
Date:     April 17, 2026
Time:     10:00 AM – 4:30 PM (EDT)
Location: Polytechnique Montréal
          2900 Édouard-Montpetit Blvd, Montréal, QC H3T 1J4

─────────────────────────────
Your Registration
─────────────────────────────
Name:        ${name}
Email:       ${data.email}
Institution: ${data.institution || 'N/A'}

We look forward to seeing you on April 17!

Best regards,
The Quantum ML Workshop 2026 Team
Polytechnique Montréal
  `.trim();

  try {
    GmailApp.sendEmail(data.email, subject, body);
  } catch (err) {
    // Email sending is optional — log but don't fail
    console.log('Could not send confirmation email: ' + err.message);
  }
}

// ── Utility: export registrations as CSV ──────────────────
function exportRegistrationsAsEmail() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_REGISTRATIONS);
  if (!sheet) { Logger.log('No registrations sheet found.'); return; }

  const data = sheet.getDataRange().getValues();
  const csv = data.map(row =>
    row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')
  ).join('\n');

  const blob = Utilities.newBlob(csv, 'text/csv', 'workshop_registrations.csv');
  const email = Session.getActiveUser().getEmail();
  GmailApp.sendEmail(email, 'Workshop Registrations Export', 'See attached CSV.', { attachments: [blob] });
  SpreadsheetApp.getUi().alert('CSV sent to ' + email);
}

// ── Menu in Google Sheets ─────────────────────────────────
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Workshop Tools')
    .addItem('Setup Sheets', 'setup')
    .addSeparator()
    .addItem('Export Registrations (CSV via email)', 'exportRegistrationsAsEmail')
    .addToUi();
}
