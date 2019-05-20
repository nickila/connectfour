$(document).ready(function () {
    var usedArr = [];
    var redArr = [];
    var blackArr = [];
    var black = 'rgba(0, 0, 0, 0.5)';
    var red = 'rgba(255, 120, 120)';
    var player = black;
    var rowA = 1;
    var rowB = 1;
    var rowC = 1;
    var rowD = 1;
    var rowE = 1;
    var rowF = 1;
    var rowG = 1;
    var consecNums;
    count = 1;


    function drop(columnLetter, rowNumber) {
        $('td').removeClass('animate-red');
        $('td').removeClass('animate-black');
        var num = rowNumber;
        var dropArr = [];
        var index = 0;
        var diff = (num + 7) - ((num + 7) % 7);
        //console.log(diff)
        for (i = diff - 1; i > num - 1; i--) {
            dropArr.push(i)
        }
        if (player === black) {
            var intervalBlack = setInterval(function () {
                $("#" + columnLetter + (dropArr[index++])).removeClass('animate-red').addClass("animate-black");
                if (index === dropArr.length) {
                    clearInterval(intervalBlack)
                    $("#" + columnLetter + rowNumber).css("backgroundColor", black);

                }
            }, 25)

        }
        if (player === red) {
            var intervalRed = setInterval(function () {
                $("#" + columnLetter + (dropArr[index++])).removeClass("animate-black").addClass("animate-red");
                if (index === dropArr.length) {
                    clearInterval(intervalRed)
                    $("#" + columnLetter + rowNumber).css("backgroundColor", red);

                }
            }, 25)

            // setTimeout(function () {
            //     $("#" + columnLetter + rowNumber).css("backgroundColor", 'red');
            // }, 0);
        }


        usedArr.push(parseInt($("#" + columnLetter + rowNumber).attr("value")));
        if (player === black) {
            blackArr.push(parseInt($("#" + columnLetter + rowNumber).attr("value")))
            checkHorizontal(blackArr);
            if (consecNums === 4) {
                $("#message").html("BLACK WINS")
                return;
            }
            checkVertical(blackArr);
            if (consecNums === 4) {
                $("#message").html("BLACK WINS")
                return;
            }
            checkDiagonalL(blackArr);
            if (consecNums === 4) {
                $("#message").html("BLACK WINS")
                return;
            }
            checkDiagonalR(blackArr);
            if (consecNums === 4) {
                $("#message").html("BLACK WINS")
                return;
            }
            return;
        }
        else if (player === red) {
            redArr.push(parseInt($("#" + columnLetter + rowNumber).attr("value")))
            checkHorizontal(redArr);
            if (consecNums === 4) {
                $("#message").html("RED WINS")
                return;
            }

            checkVertical(redArr);
            if (consecNums === 4) {
                $("#message").html("RED WINS")
                return;
            }

            checkDiagonalL(redArr);
            if (consecNums === 4) {
                $("#message").html("RED WINS")
                return;
            }
            checkDiagonalR(redArr);
            if (consecNums === 4) {
                $("#message").html("RED WINS")
                return;
            }


            return;
        }
    }
    var colLetter;

    $('td').mouseover(function () {
        console.log(colLetter)
        colLetter = $(this).attr('class');
        $('.' + colLetter).addClass('bright');
        if (player === red) {
            $('#' + colLetter).addClass('red');
        } else if (player === black) {
            $('#' + colLetter).addClass('black')
        }
    });
    $('td').mouseout(function () {
        $('.' + colLetter).removeClass('bright');
        $('#' + colLetter).removeClass('black');
        $('#' + colLetter).removeClass('red');


    })
    $('td').click(function () {
        $('.' + colLetter).addClass('bright');
        $('#' + colLetter).removeClass('black');
        $('#' + colLetter).removeClass('red');

    })
    $("td").click(function () {
        var col = $(this).attr('col');
        switch (col) {
            case 'A':
                drop("A", rowA)
                rowA++;
                break;
            case 'B':
                drop("B", rowB)
                rowB++;
                break;
            case 'C':
                drop("C", rowC)
                rowC++;
                break;
            case 'D':
                drop("D", rowD)
                rowD++;
                break;
            case 'E':
                drop("E", rowE)
                rowE++;
                break;
            case 'F':
                drop("F", rowF)
                rowF++;
                break;
            case 'G':
                drop("G", rowG)
                rowG++;
                break;
        }

        player === black ? player = red : player = black;
    })

    function checkHorizontal(arr) {
        consecNums = 1;
        for (i = 0; i < arr.length; i++) {
            if (arr.includes(arr[i] + 7) && arr.includes(arr[i] + 14) && arr.includes(arr[i] + 21)) {
                consecNums = 4;
            }
        }
    }

    function checkVertical(arr) {
        arr.sort(function (a, b) { return a - b });
        consecNums = 1;

        for (i = 0; i < arr.length; i++) {
            if (arr.includes(arr[i] + 1) && arr.includes(arr[i] + 2) && arr.includes(arr[i] + 3)) {
                consecNums = 4;
            }
        }

    }

    function checkDiagonalL(arr) {
        consecNums = 1;
        for (i = 0; i < arr.length; i++) {
            if (arr.includes(arr[i] + 8) && arr.includes(arr[i] + 16) && arr.includes(arr[i] + 24)) {
                consecNums = 4;
            }
        }
    }

    function checkDiagonalR(arr) {
        consecNums = 1;
        for (i = 0; i < arr.length; i++) {
            if (arr.includes(arr[i] + 6) && arr.includes(arr[i] + 12) && arr.includes(arr[i] + 18)) {
                consecNums = 4;
            }
        }
    }
})

// If player clicks a column it will color the bottom row of that column
// How do I determine if all td in one column are the same color
// columns A 1-6, B 7-12, C 13-18, D 19-24, E 25-30, F 31-36, G 37-42
// every time a spot is chosen from column A
