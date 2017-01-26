<?php
   // check if fields passed are empty
   if ( empty($_GET['event']) ) {
      echo "No event provided!";
      return 400;
   } else if ( empty($_GET['hours']) ) {
      echo "No hours provided!";
      return 400;
   } else if ( empty($_GET['numPhotos']) ) {
      echo "No numPhotos provided!";
      return 400;
   } else if ( empty($_GET['price']) ) {
      echo "No price provided!";
      return 400;
   }  else if ( empty($_GET['name']) ) {
      echo "No name provided!";
      return 400;
   }  else if ( empty($_GET['email']) ) {
      echo "No email provided!";
      return 400;
   } else if ( empty($_GET['phone']) ) {
      echo "No phone provided!";
      return 400;
   } else if ( empty($_GET['message']) ) {
      echo "No message provided!";
      return 400;
   } else if ( !filter_var($_GET['email'], FILTER_VALIDATE_EMAIL) ) {
      echo "Invalid email provided: ";
      return 400;
   }

   // parameters
   $event      = $_GET['event'];
   $hours      = $_GET['hours'];
   $numPhotos  = $_GET['numPhotos'];
   $price      = $_GET['price'];
   $name       = $_GET['name'];
   $email      = $_GET['email'];
   $phone      = $_GET['phone'];
   $message    = $_GET['message'];
      
   // create email body and send it 
   $to = $email;
   $email_subject = "Thank You For Contacting Green Orchard Productions!";
   $email_body = "$name,\n\nWe have recieved your email and will be responding as soon as possible. The details of your request are below:\n\nEvent: $event\nHours: $hours\nNumPhotos: $numPhotos\nPrice: \$$price.00\nName: $name\nEmail: $email\nPhone: $phone\nMessage:\n\t$message";
   $headers = "From: noreply@greenorchardphoto.com\n";
   $headers .= "Reply-To: noreply@greenorchardphoto.com";
   mail($to,$email_subject,$email_body,$headers,"-r noreply@greenorchardphoto.com");
   return true;
?>