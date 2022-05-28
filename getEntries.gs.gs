function getEntries(sheet) {
  const range = sheet.getRange('A2:F');
  const rows = range.getValues()
  return rows
    .filter(columns => columns[0])
    .sort(dateOrder)
    .slice(0, 20)
    .map(columns => ({
      timestamp: Utilities.formatDate(columns[0], "JST", "yyyy-MM-dd'T'HH:mm:ss"),
      date: Utilities.formatDate(columns[1], "JST", "yyyy-MM-dd"),
      amount: columns[2],
      accountItem: columns[3],
      note: columns[4],
      agent: columns[5],
    }))
}

function dateOrder(a, b) {
  const a0 = new Date(a[0]).getTime()
  const b0 = new Date(b[0]).getTime()
  const diff0 = b0 - a0 
  if (diff0 != 0) return diff0
  const a1 = new Date(a[1]).getTime()
  const b1 = new Date(b[1]).getTime()
  return b1 - a1
}
