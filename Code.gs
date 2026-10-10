function doGet(e) {
  var action = e.parameter.action;
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  if (action === "read") {
    var data = sheet.getDataRange().getValues();
    var result = [];
    // Abaikan baris header (index 0)
    for (var i = 1; i < data.length; i++) {
      if (data[i][0] !== "") {
        result.push({
          nisn: data[i][0],
          nama: data[i][1],
          kelas: data[i][2],
          skorPG: data[i][3],
          selesai: data[i][4]
        });
      }
    }
    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var action = e.parameter.action;
  
  // Jika aksi Reset Data
  if (action === "reset") {
    sheet.clearContents();
    sheet.appendRow(["NISN", "Nama", "Kelas", "Skor PG", "Selesai"]);
    return ContentService.createTextOutput("Reset Success");
  }

  // Jika kirim nilai dari Website A
  var contents = JSON.parse(e.postData.contents);
  var nisn = contents.nisn;
  var nama = contents.nama;
  var kelas = contents.kelas;
  var skorPG = contents.skorPG;
  var selesai = contents.selesai;
  
  var data = sheet.getDataRange().getValues();
  var foundRow = -1;
  
  for (var i = 1; i < data.length; i++) {
    if (data[i][0].toString() === nisn.toString()) {
      foundRow = i + 1;
      break;
    }
  }
  
  if (foundRow > 0) {
    sheet.getRange(foundRow, 4).setValue(skorPG);
    sheet.getRange(foundRow, 5).setValue(selesai);
  } else {
    sheet.appendRow([nisn, nama, kelas, skorPG, selesai]);
  }
  
  return ContentService.createTextOutput("Success");
}
