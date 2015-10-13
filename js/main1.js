// create an array 4 x 4 //


var $greenRow =

`<span class="greenText">G</span> .
<span class="greenText">G</span> .
<span class="greenText">G</span> .
<span class="greenText">G</span> .
<span class="greenText">G</span> .
<span class="greenText">G</span> .
<span class="greenText">G</span> .
<span class="greenText">G</span>
`.split(".");


var $myGame = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
];

function turnBlack(x, y) {
  $myGame[y][x] = "<span class='blackText'>B</span>";
  var message = ("<p>Changing " + x + ":" + y + " to Black</p>");
  var underline = (("<p>" + Array(message.length).join("-") + ("</p>")));
  $(".game").append(underline + message + underline);

}

function turnWhite(x, y) {
  $myGame[y][x] = "<span class='whiteText'>W</span>";
  var message = ("<p>Changing " + x + ":" + y + " to White</p>");
  var underline = (("<p>" + Array(message.length).join("-") + ("</p>")));
  $(".game").append(underline + message + underline);
}


function setUpGreen() {
  $.each(testObject, function(key, value) {
    console.log(value.colour);
  });
}

function testing() {
  $.each(testObject, function(key, value) {
    console.log(key, value);
    $.each(value, function(i) {
      console.log(i + ": " + value[i]);
    });
  });
}

function drawGrid() {
  var openTable = `<table>`;
  var closeTable = `</table>`;
  var htmlString = "";
  $.each($hashArray, function(i, cell) {
    htmlString += testObject[cell].HTMLsnippet
  });
  var myHtml = openTable + htmlString + closeTable;
  // console.log(myHtml);
  $(".injectTable").html(myHtml);
}

// NOW OBSOLEte
function setGreen() {
  $.each($myGame, function(i, l) {
    $myGame[i] = $greenRow.slice();
  });
}


// c
function writeGreen() {
  $.each($myGame, function(i, l) {
    $(".game").append("<p>Row " + i + ": " + l + "</p>");
  });
  console.log($myGame);

}

function printRow() {
  var htmlText = "";
  var htmlString = "";
  var trString, endtrString;
  var trString = "<tr>";
  var endtrString = "</tr>";
   htmlText += trString;

  $.each($myGame, function(i, row) {

    $row = $(row);

      $.each($row, function(j, value) {

        var text = "<td> " + value + " </td>";

        htmlText += text;
        // console.log(htmlText);
      });

        htmlText +=  endtrString;
        // console.log(htmlText);

  });

  htmlString = htmlText;
  $(".inHere").append(htmlString);
  // console.log(htmlString);

};


// function printRow() {
//   var htmlCell = "";
//   var htmlString = "";
//   var trString, endtrString;
//   var trString = "<tr>";
//   var endtrString = "</tr>";
//   $.each($myGame, function(i, row) {
//     $row = $(row);
//       $.each($row, function(j, value) {
//
//         var text = "<td> " + value + " </td>";
//         htmlCell += text;
//       });
//       htmlCell = trString + htmlCell + endtrString;
//       htmlString = htmlCell;
//   });
//   // $(".inHere").append(htmlString);
// };
//


function setColors() {
  $("td:contains('W')").addClass("whiteBox");
  $("td:contains('G')").addClass("greenBox");
  $("td:contains('B')").addClass("blackBox");
}

setGreen();

// writeGreen();
turnBlack(3, 3);
turnBlack(4, 4);

// writeGreen();
turnWhite(4, 3);
turnWhite(3, 4);

// writeGreen();

printRow();

setColors();

//
// $("td:contains('W')").css("background-color", "white").css("color", "white");
// $("td:contains('B')").css("background-color", "black").css("color", "black");
// $("td:contains('G')").css("background-color", "green").css("color", "green");
