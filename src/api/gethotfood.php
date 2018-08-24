<?php
    include "connect.php";
    $sql ='select * from goods where type = "remenmaoliang"';
    $result = $mydb->getdata($sql);
    echo json_encode($result); 
?>