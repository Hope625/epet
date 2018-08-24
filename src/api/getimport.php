<?php
    include 'connect.php';
    $sql = "select * from goods where type = 'zhuliangjinkou'";
    $result = $mydb->getdata($sql);
    echo json_encode($result); 
?>