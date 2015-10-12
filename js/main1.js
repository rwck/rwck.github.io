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

//
// function setUpGreen() {
//   $.each(testObject, function(key, value) {
//     console.log(value);
//   });
// }

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


//     $.each(value), function(i, j) {
//       console.log(i, j);
//     }});
// }

function drawGrid() {
  var openTable = `<table>`;
  var closeTable = `</table>`;
  var htmlString = "";
  var newRow = "";
  var endOfRow = "";
  var bigStringArray = []
  $.each(testObject, function(key, value) {
    if (parseInt(value.x) === 0) {
      value.HTMLsnippet.unshift("<tr>");
    }
    // console.log(newRow);
    if (parseInt(value.x) + 1 === Math.sqrt(value.square)) {
      value.HTMLsnippet.push("</tr>");
    }
    bigStringArray.push(value.HTMLsnippet);
    console.log(bigStringArray);
    // htmlString += value.HTMLsnippet.join("");
    // console.log(htmlString);

    // blob += newRow + value.HTMLsnippet + endOfRow;
    // console.log(blob);
    // console.log(value.HTMLsnippet);
    // // htmlString += newRow + value.HTMLsnippet + endOfRow;
    // // htmlString += endOfRow;
    // //  + value.HTMLsnippet;
    // console.log(htmlString);
    // // console.log(htmlString);
  });
  // console.log(htmlString);

  var myHtml = openTable + htmlString + closeTable;
  console.log(bigStringArray);
  var bigStringString = "<table> " + bigStringArray.join("") + "</table";
  console.log(bigStringString);


  // console.log(myHtml);
  $(".injectTable").html(bigStringString);
  // console.log(myHtml);
}




// Object.keys(obj).length


function setGreen() {
  $.each($myGame, function(i, l) {
    $myGame[i] = $greenRow.slice();
    // console.log($myGame[i]);
  });
  // console.log($myGame);
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
