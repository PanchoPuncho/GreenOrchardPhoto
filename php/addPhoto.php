<?php
    // Create connection
    $con =  mysqli_connect( 'aa1s0dvzo1z36gg.cn7hlcsjbshk.us-east-1.rds.amazonaws.com:3306', 'franciscocuevas', 'supersecretpassword', 'ebdb', 3306 );

    // Check connection
    if ( mysqli_connect_errno() ) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    if ( $_GET['id'] == "null" || $_GET['id'] == "" ) {
        exit( "Invalid value for id" );
    } else {
        $id = "\"".$_GET['id']."\"";
    }
    if ( $_GET['photo'] == "null" || $_GET['photo'] == "" ) { 
        exit( "Invalid value for photo" );
    } else {
        $photo = "\"".$_GET['photo']."\"";
    }
    if ( $_GET['cat'] == "null" || $_GET['cat'] == "" ) { 
        exit( "Invalid value for cat" );
    } else {
        $cat = "\"".$_GET['cat']."\"";
    }

    $sql = "INSERT INTO Picture VALUES (".$id.", ".$photo.", ".$cat.", 0, (select now()))";

    if ( mysqli_query( $con, $sql ) === TRUE ) {
        echo "{ \"message\":\"New record created successfully\" }";
    } else {
        echo "{ \"message\":\"Error: ".$sql." ".mysqli_error( $con )."\" }";
    }

    mysqli_close( $con );
?>