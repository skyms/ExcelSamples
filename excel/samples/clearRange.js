var ctx = new Excel.ExcelClientContext();
ctx.workbook.worksheets.getItem("Sheet1").getRange("A1:C1").clear(Excel.ClearApplyTo.contents);
ctx.executeAsync().then();