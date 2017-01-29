-- DROP FOREIGN KEYs
-- ALTER TABLE Animal DROP column chair;
-- End DROP FOREIGN KEYs

-- Empty TABLEs
DELETE FROM Picture;
DELETE FROM Admin;

-- DELETE TABLEs
DROP TABLE Picture;
DROP TABLE Admin;

-- CREATE TABLEs with PRIMARY KEY and restrictions
CREATE TABLE Admin (
    id      char(6)     NOT NULL,
    user    varchar(32) NOT NULL,
    pass    varchar(13) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE Picture (
    id          char(36)     NOT NULL,
    photo       varchar(64) NOT NULL,
    cat         varchar(10) NOT NULL,
    ts          TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

-- Insert data
INSERT INTO Admin VALUE ('000000', 'user', 'pass');
INSERT INTO Picture VALUES ('acaa4db6-cc78-4a8e-a727-dbb73516b2aa', 'img/gop/uploads/wedding1.jpg', 'WEDD', (SELECT now()));
INSERT INTO Picture VALUES ('acaa4db6-cc78-4a8e-a727-dbb73516b2ab', 'img/gop/uploads/scenery1.jpg', 'SCEN', (SELECT now()));
INSERT INTO Picture VALUES ('acaa4db6-cc78-4a8e-a727-dbb73516b2ac', 'img/gop/uploads/auto1.jpg', 'AUTO', (SELECT now()));
INSERT INTO Picture VALUES ('acaa4db6-cc78-4a8e-a727-dbb73516b2ad', 'img/gop/uploads/graphic1.jpg', 'GRPH', (SELECT now()));
INSERT INTO Picture VALUES ('acaa4db6-cc78-4a8e-a727-dbb73516b2ae', 'img/gop/uploads/wedding2.jpg', 'WEDD', (SELECT now()));
INSERT INTO Picture VALUES ('acaa4db6-cc78-4a8e-a727-dbb73516b2af', 'img/gop/uploads/scenery2.jpg', 'SCEN', (SELECT now()));
INSERT INTO Picture VALUES ('acaa4db6-cc78-4a8e-a727-dbb73516b2ag', 'img/gop/uploads/auto2.jpg', 'AUTO', (SELECT now()));
INSERT INTO Picture VALUES ('acaa4db6-cc78-4a8e-a727-dbb73516b2ah', 'img/gop/uploads/graphic2.jpeg', 'GRPH', (SELECT now()));
INSERT INTO Picture VALUES ('acaa4db6-cc78-4a8e-a727-dbb73516b2ai', 'img/gop/uploads/wedding3.jpg', 'WEDD', (SELECT now()));
INSERT INTO Picture VALUES ('acaa4db6-cc78-4a8e-a727-dbb73516b2aj', 'img/gop/uploads/scenery3.jpg', 'SCEN', (SELECT now()));
INSERT INTO Picture VALUES ('acaa4db6-cc78-4a8e-a727-dbb73516b2ak', 'img/gop/uploads/auto3.jpg', 'AUTO', (SELECT now()));
INSERT INTO Picture VALUES ('acaa4db6-cc78-4a8e-a727-dbb73516b2al', 'img/gop/uploads/graphic3.jpg', 'GRPH', (SELECT now()));
INSERT INTO Picture VALUES ('acaa4db6-cc78-4a8e-a727-dbb73516b2am', 'img/gop/uploads/wedding4.jpg', 'WEDD', (SELECT now()));
INSERT INTO Picture VALUES ('acaa4db6-cc78-4a8e-a727-dbb73516b2an', 'img/gop/uploads/scenery4.jpg', 'SCEN', (SELECT now()));
INSERT INTO Picture VALUES ('acaa4db6-cc78-4a8e-a727-dbb73516b2ao', 'img/gop/uploads/auto4.jpg', 'AUTO', (SELECT now()));
INSERT INTO Picture VALUES ('acaa4db6-cc78-4a8e-a727-dbb73516b2ap', 'img/gop/uploads/graphic4.jpg', 'GRPH', (SELECT now()));
INSERT INTO Picture VALUES ('acaa4db6-cc78-4a8e-a727-dbb73516b2aq', 'img/gop/uploads/wedding5.jpg', 'WEDD', (SELECT now()));
INSERT INTO Picture VALUES ('acaa4db6-cc78-4a8e-a727-dbb73516b2ar', 'img/gop/uploads/auto5.jpg', 'AUTO', (SELECT now()));
INSERT INTO Picture VALUES ('acaa4db6-cc78-4a8e-a727-dbb73516b2as', 'img/gop/uploads/graphic5.jpg', 'GRPH', (SELECT now()));
INSERT INTO Picture VALUES ('acaa4db6-cc78-4a8e-a727-dbb73516b2at', 'img/gop/uploads/auto6.jpg', 'AUTO', (SELECT now()));
INSERT INTO Picture VALUES ('acaa4db6-cc78-4a8e-a727-dbb73516b2au', 'img/gop/uploads/graphic6.jpg', 'GRPH', (SELECT now()));



--------------------------------------------------------------------------------

-- Update data
update Animal set status='ADOPTED', rescuerID='000000', monthRescued='July', yearRescued='2016' where id='000002';
update Animal set name='', writeUp='', species='', breed='', sex='', monthBorn='', yearBorn='', size='', monthFound='', yearFound='', fixed='', status='', rescuerID='', monthRescued='', yearRescued='', age='', years='', photos='' where id='000000';
-- Update data

-- SELECT data examples
SELECT * FROM Animal order by name;                                             -- SELECT all animals
SELECT * FROM Animal where status!='ADOPTED' order by name;                     -- SELECT all animals that are not adopted
SELECT * FROM Animal where status='ADOPTED' order by name;                      -- SELECT all animals that are adopted
SELECT * FROM Webuser order by Webuser.id;                                      -- SELECT all web users
-- SELECT data examples


--------------------------------------------------------------------------------

-- Add FOREIGN KEYs
ALTER TABLE Animal add FOREIGN KEY (rescuerID) REFERENCES Webuser(id);
ALTER TABLE Picture add FOREIGN KEY (animalID) REFERENCES Animal(id);
-- Add FOREIGN KEYs

DELETE FROM Animal where id='000008';
DELETE FROM Picture where id='000015' or id='000016' or id='000017' or id='000018' or id='000019' or id='000020' or id='000021';
SELECT * FROM Picture;

DELETE FROM Webuser where id!='000000';
SELECT * FROM Webuser;

# Clear testing
DELETE FROM Picture where id='111111';
DELETE FROM Animal where id='111111';
DELETE FROM Webuser where id='111111';




ALTER TABLE Webuser ADD ts TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;





















