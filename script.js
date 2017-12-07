$(document).ready(function(){

    $clickCounter = 0;
    $x = "X";
    $o = "O";

  
    

    // Set Marker
    $('.data').click(function(){

       


        if($(this).html() == ""){
            if($clickCounter % 2 == 0){
                $(this).html($x);
                if(($('#1').html() == $x && $('#2').html() == $x && $('#3').html() == $x) 
                    || ($('#4').html() == $x && $('#5').html() == $x && $('#6').html() == $x) 
                    || ($('#7').html() == $x && $('#8').html() == $x && $('#9').html() == $x) 
                    || ($('#1').html() == $x && $('#2').html() == $x && $('#3').html() == $x) 
                    || ($('#4').html() == $x && $('#5').html() == $x && $('#6').html() == $x) 
                    || ($('#7').html() == $x && $('#8').html() == $x && $('#9').html() == $x) 
                        
                    ){

                    alert('Player X Wins!');
                }
                $clickCounter++;
            } else {
                $(this).html($o);
                if (1<0){
                    alert('Player O Wins!');
                }
                $clickCounter++;
            }
        }
    });

    

    // Clear Board Function
    $('#clear').click(function(){
        $('.data').html("");   
    });
});