<?php
    // Create connection
    $con =  mysqli_connect( "localhost", "greenorc_user", "#uper#ecretpa##word123", "greenorc_database" );
    
    // Check connection
    if ( mysqli_connect_errno() ) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    if ( $_GET['user'] == "null" || $_GET['user'] == "" ) {
        exit( "Invalid value for user" );
    } else {
        $user = "\"".$_GET['user']."\"";
    }
    if ( $_GET['pass'] == "null" || $_GET['pass'] == "" ) {
        exit( "Invalid value for pass" );
    } else {
        $pass = "\"".$_GET['pass']."\"";
    }

    $sql = "SELECT * FROM Admin WHERE user=".$user." AND pass=".$pass;
    $result = mysqli_query( $con, $sql );

    echo "{ \"numAdmins\":\"".mysqli_num_rows( $result )."\" }";

    mysqli_close( $con );
?>
