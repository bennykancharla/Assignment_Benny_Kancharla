
SELECT
 subject_student_mapping.customerId,
  customers.name,
   GROUP_CONCAT(subjects.subjectName) AS subjects
    FROM
     subject_student_mapping INNER JOIN customers ON subject_student_mapping.customerId = customers.customerId 
     INNER JOIN subjects ON subject_student_mapping.subjectId = subjects.subjectId 
     GROUP BY subject_student_mapping.customerId
      ORDER BY subject_student_mapping.customerId;
