function getAggregation(sheet, accountItems) {
  const range = sheet.getRange(2, 1, 100, 3 + accountItems.length);
  const rows = range.getValues();
  return rows
    .filter(columns => columns[0])
    .map(columns => ({
      // bom: columns[1],
      // eom: columns[2],
      month: Utilities.formatDate(columns[1], "JST", "yyyy-MM"),
      data: accountItems.map((item, index) => ({
        accountItem: accountItems[index],
        amount: columns[3 + index]
      }))
    }))
}
