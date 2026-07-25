/* FevoStable — Live Event Storage config.
 * Fill these two values after deploying the Apps Script (see docs/EVENTS_SETUP.md),
 * then everything (Activity / Offers / Recent Sales / Volume) goes live for every visitor.
 * Loaded globally; the marketplace reads window.FEVO_EVENTS. */
window.FEVO_EVENTS = {
  // Apps Script Web App URL (ends with /exec). Leave "" to keep the feed in its empty state.
  appsScriptUrl: "https://script.google.com/macros/s/AKfycbzFPJ3191TeboPAiwznN2K0RV2jvfGKVkQf8Ll0NKDO6t-GGgDYAsDcxD8EBPB0G9Jt/exec",
  // The Google Sheet ID (for your reference only; the Web App already targets it).
  sheetId: "",
  // How often the live feeds poll the sheet, in milliseconds.
  refreshMs: 5000
};
