$(document).ready(function(){
    // Global variables
    $clickCounter = 0;
    $x = "X";
    $o = "O";

    // Setting 'x' or 'o'
    $('.data').click(function playGame(){

        if($(this).html() == ""){
            if($clickCounter % 2 == 0){
                $(this).html($x).addClass("yellow");
                $('#playerTurn').html("Player <span class='purple'>2</span>'s Turn");
                // $(this).addClass('background-blue');
                if(     
                    // Rows
                    ($('#1').html() == $x && $('#2').html() == $x && $('#3').html() == $x) || 
                    ($('#4').html() == $x && $('#5').html() == $x && $('#6').html() == $x) || 
                    ($('#7').html() == $x && $('#8').html() == $x && $('#9').html() == $x) ||

                    // Columns
                    ($('#1').html() == $x && $('#4').html() == $x && $('#7').html() == $x) || 
                    ($('#2').html() == $x && $('#5').html() == $x && $('#8').html() == $x) || 
                    ($('#3').html() == $x && $('#6').html() == $x && $('#9').html() == $x) ||

                    //Diagonals
                    ($('#1').html() == $x && $('#5').html() == $x && $('#9').html() == $x) || 
                    ($('#3').html() == $x && $('#5').html() == $x && $('#7').html() == $x) 
                        
                    ){
                    $('#playerTurn').html('Player 1 Wins!').addClass('winner');;
                    $('#gameOver').html("GAME OVER!");
                    // $('.data').off("click");
                    }
                if($('#1').html() != "" && $('#2').html() != "" && $('#3').html() != "" && $('#4').html() != "" && $('#5').html() != "" && $('#6').html() != "" && $('#7').html() != ""&& $('#8').html() != ""&& $('#9').html() != ""){
                    $('#playerTurn').hide();
                    $('#gameOver').html("CAT'S GAME!");
                    // $('.data').off("click");
                }
                $clickCounter++;
            } else {
                $(this).html($o).addClass("purple");
                $('#playerTurn').html("Player <span class='yellow'>1</span>'s Turn");
                // $(this).addClass('background-pink');
                if (
                    // Rows
                    ($('#1').html() == $o && $('#2').html() == $o && $('#3').html() == $o) || 
                    ($('#4').html() == $o && $('#5').html() == $o && $('#6').html() == $o) || 
                    ($('#7').html() == $o && $('#8').html() == $o && $('#9').html() == $o) ||

                    // Columns
                    ($('#1').html() == $o && $('#4').html() == $o && $('#7').html() == $o) || 
                    ($('#2').html() == $o && $('#5').html() == $o && $('#8').html() == $o) || 
                    ($('#3').html() == $o && $('#6').html() == $o && $('#9').html() == $o) ||

                    // Diagonal
                    ($('#1').html() == $o && $('#5').html() == $o && $('#9').html() == $o) || 
                    ($('#3').html() == $o && $('#5').html() == $o && $('#7').html() == $o)  
                ){
                    $('#playerTurn').html('Player 2 Wins!').addClass('winner');
                    $('#gameOver').html("GAME OVER!");
                    // $('.data').off("click");
                }
                if($('#1').html() != "" && $('#2').html() != "" && $('#3').html() != "" && $('#4').html() != "" && $('#5').html() != "" && $('#6').html() != "" && $('#7').html() != ""&& $('#8').html() != ""&& $('#9').html() != ""){
                    $('#playerTurn').hide();
                    $('#gameOver').html("CAT'S GAME!");
                    // $('.data').off("click");
                }
                $clickCounter++;
            }
        }
    });

    

    // Clear Board Function
    $('#clear').click(function(){
        
        $('.data').html(""); 
        $('.data').removeClass('purple yellow blue');
        $('#playerTurn').html("");
        $('#playerTurn').show();
        $('#playerTurn').removeClass("winner");
        $('#gameOver').html("");
        $('#playerTurn').html("Player <span class='yellow'>1</span>'s Turn");
        $clickCounter = 0; 
    });
});
