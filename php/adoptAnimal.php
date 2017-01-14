<?php
    // Create connection
    $con = mysqli_connect( 'aa1s0dvzo1z36gg.cn7hlcsjbshk.us-east-1.rds.amazonaws.com:3306', 'franciscocuevas', 'supersecretpassword', 'ebdb', 3306 );
    
    // Check connection
    if ( mysqli_connect_errno() ) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    if ( $_GET['id'] == "null" || $_GET['id'] == "" ) {
	    exit( "Invalid value for id" );
	} else {
	    $id = "\"".$_GET['id']."\"";
	}
	if ( $_GET['status'] == "null" || $_GET['status'] == "" ) {
	    exit ( "Invalid value for status" );
	} else {
	    $status = "\"".$_GET['status']."\"";
	}
	if ( $_GET['rescuerID'] == "null" || $_GET['rescuerID'] == "" ) {
	    exit( "Invalid value for rescuerID" );
	} else {
	    $rescuerID = "\"".$_GET['rescuerID']."\"";
	}
	if ( $_GET['monthRescued'] == "null" || $_GET['monthRescued'] == "" ) {
	    exit( "Invalid value for monthRescued" );
	} else {
	    $monthRescued = "\"".$_GET['monthRescued']."\"";
	}
	if ( $_GET['yearRescued'] == "null" || $_GET['yearRescued'] == "" ) {
	    exit( "Invalid value for yearRescued" );
	} else {
	    $yearRescued = "\"".$_GET['yearRescued']."\"";
	}

	$sql = "UPDATE Animal SET status=".$status.", rescuerID=".$rescuerID.", monthRescued=".$monthRescued.", yearRescued=".$yearRescued." WHERE id=".$id."";

	if ( mysqli_query( $con, $sql ) === TRUE ) {
		echo "{ \"message\":\"Record updated successfully\" }";
	} else {
		echo "{ \"message\":\"Error updating record: ".$sql." ".mysqli_error( $con )."\" }";
	}

	mysqli_close( $con );
?>