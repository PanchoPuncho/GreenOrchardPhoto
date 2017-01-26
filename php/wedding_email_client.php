<?php
   // check if fields passed are empty
   if ( empty($_GET['numHours']) ) {
      echo "No numHours provided!";
      return 400;
   } else if ( empty($_GET['numShooters']) ) {
      echo "No numShooters provided!";
      return 400;
   } else if ( empty($_GET['numHard']) ) {
      echo "No numHard provided!";
      return 400;
   } else if ( empty($_GET['numSoft']) ) {
      echo "No numSoft provided!";
      return 400;
   } else if ( empty($_GET['numLarge']) ) {
      echo "No numLarge provided!";
      return 400;
   } else if ( empty($_GET['numSmall']) ) {
      echo "No numSmall provided!";
      return 400;
   } else if ( empty($_GET['engSess']) ) {
      echo "No engSess provided!";
      return 400;
   } else if ( empty($_GET['matSess']) ) {
      echo "No matSess provided!";
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

   $numHours   = $_GET['numHours'];
   $numShooters = $_GET['numShooters'];
   $numHard    = $_GET['numHard'];
   $numSoft    = $_GET['numSoft'];
   $numLarge   = $_GET['numLarge'];
   $numSmall   = $_GET['numSmall'];
   $engSess    = $_GET['engSess'];
   $matSess    = $_GET['matSess'];
   $price      = $_GET['price'];
   $name       = $_GET['name'];
   $email      = $_GET['email'];
   $phone      = $_GET['phone'];
   $message    = $_GET['message'];
      
   // create email body and send it 
   $to = $email;
   $email_subject = "Thank You For Contacting Green Orchard Productions!";
   $email_body = "$name,\n\nWe have recieved your email and will be responding as soon as possible. The details of your request are below:\n\nNumber of hours: $numHours\nNumber of photographers: $numShooters\nNumber of Hard Albums: $numHard\nNumber of Soft Albums: $numSoft\nNumber of 24x36 prints: $numLarge\nNumber of 18x24 prints: $numSmall\nEngagement session: $engSess\nMaternity session: $matSess\nPrice: \$$price.00\nName: $name\nEmail: $email\nPhone: $phone\nMessage:\n$message";
   $headers = "From: noreply@greenorchardphoto.com\n";
   $headers .= "Reply-To: noreply@greenorchardphoto.com";
   mail($to,$email_subject,$email_body,$headers,"-r noreply@greenorchardphoto.com");
   return true;
?>