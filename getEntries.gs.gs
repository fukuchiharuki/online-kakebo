function getEntries(sheet) {
  const range = sheet.getRange('A2:F');
  const rows = range.getValues()
  return rows
    .filter(columns => columns[0])
    .filter(termFilter)
    .sort(dateOrder)
    .map(columns => ({
      timestamp: Utilities.formatDate(columns[0], "JST", "yyyy-MM-dd'T'HH:mm:ss"),
      date: Utilities.formatDate(columns[1], "JST", "yyyy-MM-dd"),
      amount: columns[2],
      accountItem: columns[3],
      note: columns[4],
      agent: columns[5],
    }))
}

function termFilter(it) {
  const date = new Date(it[1])
  const min = new Date()
  min.setMonth(min.getMonth() - 6)
  return date.getTime() > min.getTime()
} 

function dateOrder(a, b) {
  const a1 = new Date(a[1]).getTime()
  const b1 = new Date(b[1]).getTime()
  const diff1 = b1 - a1 
  if (diff1 != 0) return diff1
  const a0 = new Date(a[0]).getTime()
  const b0 = new Date(b[0]).getTime()
  return b0 - a0
}
