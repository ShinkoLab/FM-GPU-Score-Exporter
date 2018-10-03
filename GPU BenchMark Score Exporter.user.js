var table = document.getElementById('productTable');
//console.log(table);

var rawtr = table.rows;
//console.log(rawtr);

var trlength = rawtr.length
//console.log(trlength);

var pArrAll = new Array();
for (var i = 0; i < trlength; i++) {
  Rank = rawtr[i].cells[0].innerText;
  pdName = rawtr[i].cells[1].childNodes[1].innerText;
  //TODO:ReadRanting pdRant =
  //pdDX = rawtr[i].cells[1].childNodes[5].innerText;
  //pdPrice = rawtr[i].cells[2].childNodes[1].innerText;
  pdScoreRaw = rawtr[i].cells[3].childNodes[1].innerText;
  pdScore = pdScoreRaw.replace(/\r?\n/g, "");
  //pdVfM = rawtr[i].cells[4].childNodes[1].innerText;
  pdPopRaw = rawtr[i].cells[5].childNodes[1].innerText;
  pdPop = pdPopRaw.replace(/\r?\n/g, "");

  //console.log(Rank);
  //console.log(pdName);
  //console.log(pdDX);
  //console.log(pdPrice);
  //console.log(pdScore);
  //console.log(pdVfM);
  //console.log(pdPop);

  var pArr = new Array();
  pArr.push(Rank);
  pArr.push(pdName);
  pArr.push(pdScore);
  pArr.push(pdPop);
  //console.log(pArr);
  pArrAll.push(pArr);
};

console.log(pArrAll);

//Create CSV Format and Export by @ooooooo_q
var downloadCsv = (function() {

  var tableToCsvString = function(table) {
    var str = '\uFEFF';
    for (var i = 0, imax = table.length - 1; i <= imax; ++i) {
      var row = table[i];
      for (var j = 0, jmax = row.length - 1; j <= jmax; ++j) {
        str += '"' + row[j].replace('"', '""') + '"';
        if (j !== jmax) {
          str += ',';
        }
      }
      str += '\n';
    }
    return str;
  };

  var createDataUriFromString = function(str) {
    return 'data:text/csv,' + encodeURIComponent(str);
  }

  var downloadDataUri = function(uri, filename) {
    var link = document.createElement('a');
    link.download = filename;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return function(table, filename) {
    if (!filename) {
      filename = 'output.csv';
    }
    var uri = createDataUriFromString(tableToCsvString(table));
    downloadDataUri(uri, filename);
  };

})();

downloadCsv(pArrAll);
