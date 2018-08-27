<?php
    include 'connect.php';
    $username = isset($_GET['username']) ? $_GET['username'] : null; 
    $sql = "select * from user where username = '$username'";
    $result = $mydb->query($sql);
    // echo json_encode($result);
    if($result->num_rows>0){
        echo "no";
    }else{
        echo "yes";
    }
?>