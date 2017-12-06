$(document).ready(function(){

    $clickCounter = 0;
    $x = "X";
    $o = "O";

    // Set Marker
    $('.data').click(function(){
        if($clickCounter % 2 == 0){
            $(this).html($x);
            $clickCounter++;
        } else {
            $(this).html($o);
            $clickCounter++;
        }
        
    });

    // Clear Board Function
    $('#clear').click(function(){
        $('.data').html("");   
    });
});