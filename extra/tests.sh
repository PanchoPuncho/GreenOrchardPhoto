#!/bin/bash

typeset pre='http://goproductions.us-east-1.elasticbeanstalk.com/php';
typeset getPhotos=${pre}'/getPhotos.php'
typeset addPhoto=${pre}'/addPhoto.php?id=111111&photo=uploads/FrankPup.jpg&cat=wedding';

# RunTests
curl -X GET ${getPhotos}
echo ""
echo ""
curl -X POST ${addPhoto}
echo ""
echo ""
echo "DONE! Go clear the testing."
exit 0

##### New functionality
# Timestamps!
# Check for admin user on super_secret.php!
# Fix adopter issue!
# Check for existing user 						// instead of creating a new user for each form
# Email the admin								// notifications
# Email the user 								// confirmation

##### Future functionality
#delete picture from animal 					// if incorrect picture
#delete animal from database 					// if animal dies or gets sent to another shelter 
#implement payment option 						// for donations

