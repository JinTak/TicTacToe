$(document).ready(function(){

    $clickCounter = 0;
    $x = "X";
    $o = "O";

    // Set Marker
    $('.data').click(function(){

        if($(this).html() == ""){
            if($clickCounter % 2 == 0){
                $(this).html($x);
                $('#playerTurn').html("Player 2's Turn");
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
                    $('#playerTurn').html('Player 1 Wins!');
                    $('#gameOver').html("GAME OVER!");
                    // $('.data').html(""); 
                    // $('.data').removeClass('background-blue');
                    // $('.data').removeClass('background-pink');
                    // $clickCounter = 0; 

                }
                if($('#1').html() != "" && $('#2').html() != "" && $('#3').html() != "" && $('#4').html() != "" && $('#5').html() != "" && $('#6').html() != "" && $('#7').html() != ""&& $('#8').html() != ""&& $('#9').html() != ""){
                    $('#playerTurn').remove();
                    $('#gameOver').html("CAT'S GAME!");
                }
                $clickCounter++;
            } else {
                $(this).html($o);
                $('#playerTurn').html("Player 1's Turn");
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
                    $('#playerTurn').html('Player 2 Wins!');
                    $('#gameOver').html("GAME OVER!");
                    // $('.data').html(""); 
                    // $('.data').removeClass('background-blue');
                    // $('.data').removeClass('background-pink');
                    // $clickCounter = 0; 
                }
                if($('#1').html() != "" && $('#2').html() != "" && $('#3').html() != "" && $('#4').html() != "" && $('#5').html() != "" && $('#6').html() != "" && $('#7').html() != ""&& $('#8').html() != ""&& $('#9').html() != ""){
                    $('#playerTurn').remove();
                    $('#gameOver').html("CAT'S GAME!");
                }
                $clickCounter++;
            }
        }
    });

    

    // Clear Board Function
    $('#clear').click(function(){
        $('.data').html(""); 
        $('.data').removeClass('background-blue');
        $('.data').removeClass('background-pink');
        $('#playerTurn').html("");
        $('#gameOver').html("");
        $('#playerTurn').html("Player 1's Turn");
        $clickCounter = 0; 
    });
});
