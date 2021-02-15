function openSheets(id) {
  const spreadsheet = SpreadsheetApp.openById(id);
  return spreadsheet.getSheets();
}
