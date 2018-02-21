USE wozudemo;

SELECT id, firstName, lastName, courseId
FROM students
WHERE couseId = 1 OR firstName LIKE 'M%';