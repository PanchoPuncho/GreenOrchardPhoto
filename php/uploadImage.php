<?php
    $target_dir = "../img/gop/uploads/";
    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
    $uploadOk = 1;
    $imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
    // Check if image file is a actual image or fake image
    if(isset($_POST["submit"])) {
        $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
        if($check !== false) {
            echo "PASSED - file is an image - " . $check["mime"] . "<br>";
            $uploadOk = 1;
        } else {
            echo "FAILED - file is not an image<br>";
            $uploadOk = 0;
        }
    } else {
        echo "FAILED - isset returned false<br>";
    }

    // Check if file already exists
    if (file_exists($target_file)) {
        echo "FAILED - file already exists<br>";
        $uploadOk = 0;
    } else {
        echo "PASSED - file does not exist<br>";
    }

    // Check file size
    if ($_FILES["fileToUpload"]["size"] > 5000000) {
        echo "FAILED - file size<br>";
        $uploadOk = 0;
    } else {
        echo "PASSED - file size<br>";
    }

    // Allow certain file formats
    if(strtolower($imageFileType) != "jpg" && strtolower($imageFileType) != "png" && strtolower($imageFileType) != "jpeg" && strtolower($imageFileType) != "gif" ) {
        echo "FAILED - only JPG, JPEG, PNG & GIF files are allowed<br>";
        $uploadOk = 0;
    } else {
        echo "PASSED - valid image type<br>";
    }

    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
        echo "...your file did not pass the conditionals and was not uploaded...<br>";
    } else {
        // everything is ok, try to upload file
        if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
            echo "PASSED - The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded<br>";
        } else {
            echo "FAILED - Sorry, there was an error uploading your file<br>";
        }
    }
?>