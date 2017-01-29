<?php
    // Create connection
    $con = mysqli_connect( "localhost", "greenorc_user", "#uper#ecretpa##word123", "greenorc_database" );
    
    // Check connection
    if ( mysqli_connect_errno() ) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    if ( $_GET['id'] == "null" || $_GET['id'] == "" ) {
	    exit( "Invalid value for id" );
	} else {
	    $id = "\"".$_GET['id']."\"";
	}

	$sql = "DELETE FROM Picture WHERE id=".$id;

	if ( mysqli_query( $con, $sql ) === TRUE ) {
		echo "{ \"message\":\"Record updated successfully\" }";
	} else {
		echo "{ \"message\":\"Error updating record: ".$sql." ".mysqli_error( $con )."\" }";
	}

	mysqli_close( $con );
?>