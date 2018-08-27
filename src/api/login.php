<?php
    include 'connect.php';
    $username = isset($_POST['username']) ? $_POST['username'] : null;
    $password = isset($_POST['password']) ? $_POST['password'] : null;
    $sql = "select * from user where username = '$username' and password ='$password'";
    $result = $mydb->query($sql);
    if($result->num_rows>0){
        echo "yes";
    }else{
        echo "no";
    }
?>