USE wozudemo;

SELECT students.firstName, students.lastName, phones.PhoneNumber
FROM students 
	INNER JOIN students_phones 
		ON students.id = students_phones.studentsid
	INNER JOIN phones
		ON students_phones.PhoneId = phones.id