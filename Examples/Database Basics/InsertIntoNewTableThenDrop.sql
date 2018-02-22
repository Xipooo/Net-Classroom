USE wozudemo;

CREATE TABLE temp_PhoneCount (
	Id INT PRIMARY KEY UNIQUE NOT NULL AUTO_INCREMENT,
    FirstName VARCHAR(45) NOT NULL,
    LastName VARCHAR(45) NOT NULL,
    PhoneAmount INT NOT NULL
);

INSERT INTO temp_PhoneCount (FirstName, LastName, PhoneAmount)
SELECT students.firstname, students.lastName, COUNT(phones.PhoneNumber)
FROM students 
	INNER JOIN students_phones 
		ON students.id = students_phones.studentsid
	INNER JOIN phones
		ON students_phones.PhoneId = phones.id
GROUP BY students.id, students.firstname, students.lastName;

UPDATE temp_PhoneCount
SET PhoneAmount = PhoneAmount + 1
WHERE PhoneAmount > 0 AND Id > 0;

SELECT FirstName, LastName, PhoneAmount
FROM temp_PhoneCount;

DROP TABLE temp_PhoneCount;