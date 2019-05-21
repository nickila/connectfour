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
    var consecNums = false;
    var gameover = false;
    var redScore = 0;
    var blackScore = 0;

    $("#black-score").html(blackScore);
    $("#red-score").html(redScore);


    $("#new-game").click(function () {
        $("td").removeClass("black-square red-square");
        gameover = false;
        console.log(gameover)
        player = black
    })
    function drop(columnLetter, rowNumber) {
        var num = rowNumber;
        var dropArr = [];
        var index = 0;
        var diff = (num + 7) - ((num + 7) % 7);
        for (i = diff - 1; i > num - 1; i--) {
            dropArr.push(i)
        }
        if (player === black) {
            var intervalBlack = setInterval(function () {
                $("#" + columnLetter + (dropArr[index++])).removeClass('animate-red').addClass("animate-black");
                if (index === dropArr.length) {
                    clearInterval(intervalBlack)
                    $("#" + columnLetter + rowNumber).addClass("black-square");
                    $('td').removeClass('animate-red animate-black');
                    usedArr.push(parseInt($("#" + columnLetter + rowNumber).attr("value")));
                    blackArr.push(parseInt($("#" + columnLetter + rowNumber).attr("value")))
                    setInterval(function () {
                        checkHorizontal(blackArr);
                        if (consecNums) {
                            $("#message").html("BLACK WINS");
                            gameover = true;
                            blackScore++
                            return;
                        }
                        checkVertical(blackArr);
                        if (consecNums) {
                            $("#message").html("BLACK WINS");
                            gameover = true;
                            blackScore++
                            return;
                        }
                        checkDiagonalL(blackArr);
                        if (consecNums) {
                            $("#message").html("BLACK WINS");
                            gameover = true;
                            blackScore++
                            return;
                        }
                        checkDiagonalR(blackArr);
                        if (consecNums) {
                            $("#message").html("BLACK WINS");
                            gameover = true;
                            blackScore++
                            return;
                        }
                    }, 700)
                    return;
                }
            }, 25)
        }
        if (player === red) {
            var intervalRed = setInterval(function () {
                $("#" + columnLetter + (dropArr[index++])).removeClass("animate-black").addClass("animate-red");
                if (index === dropArr.length) {
                    clearInterval(intervalRed)
                    $("#" + columnLetter + rowNumber).addClass("red-square");
                    $('td').removeClass('animate-red animate-black');
                    redArr.push(parseInt($("#" + columnLetter + rowNumber).attr("value")))
                    setInterval(function () {
                        checkHorizontal(redArr);
                        if (consecNums) {
                            $("#message").html("RED WINS");
                            gameover = true;
                            redScore++;
                            return;
                        }
                        checkVertical(redArr);
                        if (consecNums) {
                            $("#message").html("RED WINS");
                            gameover = true;
                            redScore++;
                            return;
                        }
                        checkDiagonalL(redArr);
                        if (consecNums) {
                            $("#message").html("RED WINS");
                            gameover = true;
                            redScore++;
                            return;
                        }
                        checkDiagonalR(redArr);
                        if (consecNums) {
                            $("#message").html("RED WINS");
                            gameover = true;
                            redScore++;
                            return;
                        }
                    }, 700)
                    return;
                }
            }, 25)
        }
    }
    var colLetter;

    $('td').mouseover(function () {
        if (gameover === false) {
            console.log(colLetter)
            colLetter = $(this).attr('class');
            $('.' + colLetter).addClass('bright');
            if (player === red) {
                $('#' + colLetter).addClass('red');
            } else if (player === black) {
                $('#' + colLetter).addClass('black')
            }
        } else if (gameover) {
            $('#' + colLetter).removeClass('red black');
            $('td').removeClass('bright');

        }
    });
    $('td').mouseout(function () {
        if (gameover === false) {
            $('.' + colLetter).removeClass('bright');
            $('#' + colLetter).removeClass('black');
            $('#' + colLetter).removeClass('red');

        }
    })
    $('td').click(function () {
        if (gameover === false) {
            $('.' + colLetter).addClass('bright');
            $('#' + colLetter).removeClass('black');
            $('#' + colLetter).removeClass('red');
        }

    })
    $("td").click(function () {
        if (gameover === false) {
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
        }

        player === black ? player = red : player = black;

    })

    function checkHorizontal(arr) {
        consecNums = false;
        for (i = 0; i < arr.length; i++) {
            if (arr.includes(arr[i] + 7) && arr.includes(arr[i] + 14) && arr.includes(arr[i] + 21)) {

                consecNums = true;
            }
        }
    }

    function checkVertical(arr) {
        arr.sort(function (a, b) { return a - b });
        consecNums = false;

        for (i = 0; i < arr.length; i++) {
            if (arr.includes(arr[i] + 1) && arr.includes(arr[i] + 2) && arr.includes(arr[i] + 3)) {
                consecNums = true;
            }
        }

    }

    function checkDiagonalL(arr) {
        consecNums = false;
        for (i = 0; i < arr.length; i++) {
            if (arr.includes(arr[i] + 8) && arr.includes(arr[i] + 16) && arr.includes(arr[i] + 24)) {
                consecNums = true;
            }
        }
    }

    function checkDiagonalR(arr) {
        consecNums = false;
        for (i = 0; i < arr.length; i++) {
            if (arr.includes(arr[i] + 6) && arr.includes(arr[i] + 12) && arr.includes(arr[i] + 18)) {
                consecNums = true;
            }
        }
    }

})


// If player clicks a column it will color the bottom row of that column
// How do I determine if all td in one column are the same color
// columns A 1-6, B 7-12, C 13-18, D 19-24, E 25-30, F 31-36, G 37-42
// every time a spot is chosen from column A
