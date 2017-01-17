<?php
    $deleteOK = 1;

    if ( $_GET['file'] == "null" || $_GET['file'] == "" ) {
        exit( "Invalid value for file" );
    } else {
        $file = "/var/app/current/".$_GET['file'];
    }
    echo "FILE: ".$file;

    $imageFileType = pathinfo( $file,PATHINFO_EXTENSION );

    // Check if file already exists
    if ( file_exists( $file ) ) {
        echo "PASSED - file exists<br>";
    } else {
        echo "FAILED - file does not exist<br>";
        $deleteOK = 0;
    }

    // Allow certain file formats
    if(strtolower( $imageFileType ) != "jpg" && strtolower( $imageFileType ) != "png" && strtolower( $imageFileType ) != "jpeg" && strtolower( $imageFileType ) != "gif" ) {
        echo "FAILED - only JPG, JPEG, PNG & GIF files can be deleted<br>";
        $deleteOK = 0;
    } else {
        echo "PASSED - valid image type for deletion<br>";
    }

    // Check if $deleteOK is set to 0
    if ( $deleteOK == 0 ) {
        echo "...your file did not pass the conditionals and was not deleted...<br>";
    } else {
        // everything is ok, try to upload file
        if ( unlink( $file ) ) {
            echo "PASSED - The file ".$file. " has been deleted<br>";
        } else {
            echo "FAILED - Sorry, there was an error deleting your file<br>";
        }
    }
?>