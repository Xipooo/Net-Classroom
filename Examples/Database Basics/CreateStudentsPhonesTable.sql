USE wozudemo;

CREATE TABLE students_phones (
	StudentsId INT NOT NULL,
    PhoneId INT NOT NULL,
    CONSTRAINT PK_Students_Phones PRIMARY KEY (StudentsId, PhoneId)
);