<?php
    // Create connection
    $con =  mysqli_connect( 'aa1s0dvzo1z36gg.cn7hlcsjbshk.us-east-1.rds.amazonaws.com:3306', 'franciscocuevas', 'supersecretpassword', 'ebdb', 3306 );
    
    // Check connection
    if ( mysqli_connect_errno() ) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    $sql = "SELECT * FROM Picture";

    $result = mysqli_query( $con, $sql );

    $numResults = mysqli_num_rows( $result );
    $counter = 0;

    echo "{ \"photos\":[";
    while ( $row = mysqli_fetch_array( $result ) ) {
        if ( ++$counter == $numResults ) {
            echo "{\"id\":\"".$row["id"]."\",\"photo\":\"".$row["photo"]."\",\"cat\":\"".$row["cat"]."\"} ";
        } else {
            echo " {\"id\":\"".$row["id"]."\",\"photo\":\"".$row["photo"]."\",\"cat\":\"".$row["cat"]."\"}, ";
        }
    }
    echo "] }";

    mysqli_close( $con );
?>