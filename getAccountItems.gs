function getAccountItems(sheet) {
  const range = sheet.getRange('A2:A');
  const rows = range.getValues()
  return rows
    .map(columns => columns[0])
    .filter(column => column)
}
