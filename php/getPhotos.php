<?php
    // Create connection
    $con =  mysqli_connect( "localhost", "greenorc_user", "#uper#ecretpa##word123", "greenorc_database" );
    
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