<?php 
function isPalindrom($string) {
    $newString = '';
    $counter = strlen($string) -1;
    while ($counter >= 0) {
     $newString .= $string[$counter];
     $counter -= 1;
    }
    return $string == $newString;
   }
$str = 'kasurrusa';
$hasil = isPalindrom($str);

if($hasil){
 echo("Yes");
}else{
 echo("no");
}


?>