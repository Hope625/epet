<?php
    include 'connect.php';
    $sql = 'select * from salegoods';
    $result = $mydb->getdata($sql);
    echo json_encode($result);
?>