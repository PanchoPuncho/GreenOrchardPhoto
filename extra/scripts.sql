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
    id          char(6)     NOT NULL,
    photo       varchar(64) NOT NULL,
    cat         varchar(10) NOT NULL,
    ts          TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

-- Insert data
INSERT INTO Admin VALUE ('000000', 'user', 'pass');
INSERT INTO Picture VALUES ('000000', 'img/gop/uploads/wedding1.jpg', 'wedding', (SELECT now()));
INSERT INTO Picture VALUES ('000001', 'img/gop/uploads/scenery1.jpg', 'scenery', (SELECT now()));
INSERT INTO Picture VALUES ('000002', 'img/gop/uploads/auto1.jpg', 'auto', (SELECT now()));
INSERT INTO Picture VALUES ('000015', 'img/gop/uploads/graphic1.jpg', 'graphic', (SELECT now()));
INSERT INTO Picture VALUES ('000003', 'img/gop/uploads/wedding2.jpg', 'wedding', (SELECT now()));
INSERT INTO Picture VALUES ('000004', 'img/gop/uploads/scenery2.jpg', 'scenery', (SELECT now()));
INSERT INTO Picture VALUES ('000005', 'img/gop/uploads/auto2.jpg', 'auto', (SELECT now()));
INSERT INTO Picture VALUES ('000016', 'img/gop/uploads/graphic2.jpeg', 'graphic', (SELECT now()));
INSERT INTO Picture VALUES ('000006', 'img/gop/uploads/wedding3.jpg', 'wedding', (SELECT now()));
INSERT INTO Picture VALUES ('000007', 'img/gop/uploads/scenery3.jpg', 'scenery', (SELECT now()));
INSERT INTO Picture VALUES ('000008', 'img/gop/uploads/auto3.jpg', 'auto', (SELECT now()));
INSERT INTO Picture VALUES ('000017', 'img/gop/uploads/graphic3.jpg', 'graphic', (SELECT now()));
INSERT INTO Picture VALUES ('000009', 'img/gop/uploads/wedding4.jpg', 'wedding', (SELECT now()));
INSERT INTO Picture VALUES ('000010', 'img/gop/uploads/scenery4.jpg', 'scenery', (SELECT now()));
INSERT INTO Picture VALUES ('000011', 'img/gop/uploads/auto4.jpg', 'auto', (SELECT now()));
INSERT INTO Picture VALUES ('000018', 'img/gop/uploads/graphic4.jpg', 'graphic', (SELECT now()));
INSERT INTO Picture VALUES ('000012', 'img/gop/uploads/wedding5.jpg', 'wedding', (SELECT now()));
INSERT INTO Picture VALUES ('000013', 'img/gop/uploads/auto5.jpg', 'auto', (SELECT now()));
INSERT INTO Picture VALUES ('000019', 'img/gop/uploads/graphic5.jpg', 'graphic', (SELECT now()));
INSERT INTO Picture VALUES ('000014', 'img/gop/uploads/auto6.jpg', 'auto', (SELECT now()));
INSERT INTO Picture VALUES ('000020', 'img/gop/uploads/graphic6.jpg', 'graphic', (SELECT now()));



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





















