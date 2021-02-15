function doGet(e) {
  const { id, resource } = e.parameter;
  const sheets = openSheets(id);

  if (resource == "aggregation") return responseJson(makeAggregation(sheets))

  return null
}

function makeAggregation(sheets) {
  const accountItems = getAccountItems(sheets[2]);
  return getAggregation(sheets[1], accountItems);
}

function testDoGet() {
  doGet({
    parameter: { id: "", resource: "aggregation" }
  })
}