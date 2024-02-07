<?php
//This is a short PoC file used in pen testing engagements, based on Mittre Caldera.
//<!---- Simple PoC PHP file used to parse commands in a "proxy" fashion, when using a front domain for collecting / sending commands via HTTP(S) calls to a Caldera beacon in engagements-->
//deploy a beacon on a proxy machine
//use this to send file related operations towards a controlled domain
//deploy a beacon on the target machine
//exfiltrate using http commands... (masks actions)
//aid :: file name
// f_op :: type of file operation to perform (SAVE, DELETE, etc...)
// file :: self explanatory, the file name...
// short attack path: C2 -> jump box -> jump site -> target


header ('Access-Control-Allow-Origin: http://your.website.goes.here.../');

$f_name =$_GET['aid'];
$f_op = $_GET['opid'];
$file = $f_name.'.txt';

//verify current beacon existance or....
// Write the contents back to the file or any other operation
if ($f_op == 'save') {
    
    $current = file_get_contents($file);
    $current .= $f_name;
    file_put_contents($file, $current);
}
elseif ($f_op == 'load_op') {
      $files = glob("*.txt");
      $reports = '';
       
      foreach($files as $file) {
            $r_tmp = strtok($file,".");
            $reports = $reports.':'.$r_tmp;
       }
      
        echo $reports;
}
 
?>%  
