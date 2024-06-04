CREATE Database CHAPTER09;

USE CHAPTER09;

CREATE TABLE Sensor (
  Record INT,
  SensorValue INT
 );

INSERT INTO Sensor Values (1, 50);
INSERT INTO Sensor Values (2, 52);
INSERT INTO Sensor Values (3, 54);
INSERT INTO Sensor Values (4, 50);
INSERT INTO Sensor Values (5, 52);
INSERT INTO Sensor Values (6, 56);
INSERT INTO Sensor Values (8, 58);
INSERT INTO Sensor Values (9, 60);
INSERT INTO Sensor Values (10, 60);
INSERT INTO Sensor Values (11, 50);
INSERT INTO Sensor Values (12, 52);
INSERT INTO Sensor Values (13, 54);
INSERT INTO Sensor Values (14, 50);
INSERT INTO Sensor Values (15, 52);
INSERT INTO Sensor Values (16, 56);
INSERT INTO Sensor Values (17, 56);
INSERT INTO Sensor Values (18, 58);
INSERT INTO Sensor Values (19, 60);
INSERT INTO Sensor Values (20, 60);
INSERT INTO Sensor Values (21, 50);
INSERT INTO Sensor Values (22, 52);
INSERT INTO Sensor Values (23, 54);
INSERT INTO Sensor Values (24, 58);
INSERT INTO Sensor Values (25, 52);
INSERT INTO Sensor Values (27, 56);
INSERT INTO Sensor Values (27, 56);
INSERT INTO Sensor Values (31, 50);
INSERT INTO Sensor Values (27, 156);
INSERT INTO Sensor Values (29, 60);
INSERT INTO Sensor Values (30, 60);
INSERT INTO Sensor Values (31, 50);
INSERT INTO Sensor Values (32, 52);
INSERT INTO Sensor Values (31, -2);
INSERT INTO Sensor Values (33, 54);
INSERT INTO Sensor Values (34, 50);
INSERT INTO Sensor Values (35, 52);
INSERT INTO Sensor Values (36, -3);
INSERT INTO Sensor Values (36, 56);
INSERT INTO Sensor Values (36, 56);
INSERT INTO Sensor Values (38, 58);
INSERT INTO Sensor Values (39, 60);
INSERT INTO Sensor Values (40, null);
INSERT INTO Sensor Values (41, 50);
INSERT INTO Sensor Values (42, 52);
INSERT INTO Sensor Values (43, 101);
INSERT INTO Sensor Values (44, 50);
INSERT INTO Sensor Values (45, 52);
INSERT INTO Sensor Values (46, null);
INSERT INTO Sensor Values (47, 56);
INSERT INTO Sensor Values (48, 58);
INSERT INTO Sensor Values (49, 160);
INSERT INTO Sensor Values (50, 60);
INSERT INTO Sensor Values (51, 50);
INSERT INTO Sensor Values (52, 52);
INSERT INTO Sensor Values (53, 54);
INSERT INTO Sensor Values (54, null);
INSERT INTO Sensor Values (55, 52);
INSERT INTO Sensor Values (56, 56);
INSERT INTO Sensor Values (57, 56);
INSERT INTO Sensor Values (58, 58);
INSERT INTO Sensor Values (59, 60);
INSERT INTO Sensor Values (60, 60);

CREATE TABLE Customers (
  CustomerID INT,
  Firstname VARCHAR(64),
  Lastname VARCHAR(64),
  AGE INT,
  Address VARCHAR(64),
  City VARCHAR(64),
  State VARCHAR(64),
  Zip VARCHAR(64),
  BIRTHDAY DATE
);

INSERT INTO Customers VALUES (1, 'Jim', 'Johnson', 30, '123 Main Street', 'Prescott', 'AZ', '86303', '1989-02-01');
INSERT INTO Customers VALUES (2, 'Janet', 'Johnson', 20, '123 Main Street', 'Prescott', 'AZ', '86305', '1999-01-13');
INSERT INTO Customers VALUES (3, 'Betty', 'Davis', 40, '4233 Miller Avenue', 'Prescott', 'AZ', '86303', '1984-09-21');
INSERT INTO Customers VALUES (1, ' Gerald', 'Lawson', 10, '533 1st Avenue', 'Prescott', 'AZ', '86305', '2009-01-01');
INSERT INTO Customers VALUES (4, 'Jim', 'Johnson', 30, '123 Main Street', 'Prescott', 'AZ', '86303', '1989-02-01');
INSERT INTO Customers VALUES (5, 'Billy', 'Smith', 30, ' 23 Avenue A', 'Prescott', 'AZ', '86305', '1989-01-01');
INSERT INTO Customers VALUES (6, 'Anna', 'Willis', 20, '332 Gatner Ave ', 'Prescott', 'AZ', '86305', '1999-01-01');
INSERT INTO Customers VALUES (7, 'Billy', 'Davis', 50, '4233 Miller Avenue', 'Prescott', 'AZ', '86303-0001', '1969-09-21');
INSERT INTO Customers VALUES (8, ' Alana ', 'Law', 20, '432 1st Avenue', 'Prescott', 'AZ', '86305', '1999-01-01');
INSERT INTO Customers VALUES (1, 'Jim', 'Johnson', 30, '123 Main Street', 'Prescott', 'AZ', '86303', '1989-02-01');