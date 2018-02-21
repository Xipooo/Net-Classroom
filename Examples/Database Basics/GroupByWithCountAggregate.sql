USE wozudemo;

SELECT students.id, students.firstname, students.lastName, COUNT(phones.PhoneNumber)
FROM students 
	INNER JOIN students_phones 
		ON students.id = students_phones.studentsid
	INNER JOIN phones
		ON students_phones.PhoneId = phones.id
WHERE students.firstName LIKE 'S%'
GROUP BY students.id, students.firstname, students.lastName