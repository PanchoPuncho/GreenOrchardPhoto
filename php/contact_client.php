<?php
   // check if fields passed are empty
   if ( empty($_POST['name']) ) {
      echo "No name provided!";
      return false;
   } else if ( empty($_POST['email']) ) {
      echo "No email provided!";
      return false;
   } else if ( empty($_POST['phone']) ) {
      echo "No phone provided!";
      return false;
   } else if ( empty($_POST['message']) ) {
      echo "No message provided!";
      return false;
   } else if ( !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ) {
      echo "Invalid email provided: ";
   	return false;
   }

   // parameters
   $name = $_POST['name'];
   $email_address = $_POST['email'];
   $phone = $_POST['phone'];
   $message = $_POST['message'];
   	
   // create email body and send it	
   $to = $email_address;
   $email_subject = "$name - Thank You For Contacting Green Orchard Productions!";
   $email_body = "We have recieved your email and will be responding as soon as possible.\n\n"."The details of your contact request are below:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
   $headers = "From: noreply@greenorchardphoto.com\n";
   $headers .= "Reply-To: noreply@greenorchardphoto.com";
   mail($to,$email_subject,$email_body,$headers,"-r noreply@greenorchardphoto.com");
   return true;
?>