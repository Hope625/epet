<?php
    include 'connect.php';
    $phone = isset($_GET['phone']) ? $_GET['phone'] : null; 
    $sql = "select * from user where phone = '$phone'";
    $result = $mydb->query($sql);
    if($result->num_rows>0){
        echo "no";
    }else{
        echo "yes";
    }
?>