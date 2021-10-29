INSERT INTO department (department_name)
VALUES ("Police Administration"),
        ("Community Safety"),
        ("Homicide"),
        ("Traffic"),
        ("Criminal Investigation"),
        ("Maintenance");

        
INSERT INTO roles (title, salary, department_id)
VALUES ("Administrator", 58000, 1),
        ("Lieutenant", 85000, 2),
        ("Homicide Detective", 79490, 3),
        ("Criminal Investigator", 75000, 5),
        ("Traffic Officer", 60000, 4),
        ("Bounty Hunter", 65000, 5),
        ("Forensics", 70000, 3),
        ("Custodian", 45000, 6);

INSERT INTO employees (first_name, last_name, role_id)
VALUES ("Jayla", "Newton", 2),
        ("Fabio", "Reyes", 1),
        ("Lucifer", "Morningstar", 3),
        ("Chloe", "Decker", 3),
        ("Dan", "Espinoza", 4),
        ("Mazikeen", "Smith", 5),
        ("Ella", "Lopez", 3),
        ("Trixie", "Espinoza", 1),
        ("Linda", "Martin", 4),
        ("Sinner", "Man", 6),
        ("Charlotte", "Richards", 5),
        ("Marcus", "Pierce", 6),
        ("Father", "Kinley", 3),
        ("God", "Himself", 5),
        ("Amen", "Adiel", 5);

UPDATE employees
SET manager_id = 1
WHERE id IN (2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15);


