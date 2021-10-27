INSERT INTO department (department_name)
VALUES ("Police Administration"),
        ("Community Safety"),
        ("Homicide"),
        ("Traffic"),
        ("Criminal Investigation"),
        ("Maintenance");

        
INSERT INTO roles (id, title, salary, department_id)
VALUES (405, "Administrator", 58000, 1),
        (277, "Lieutenant", 85000, 2),
        (666, "Homicide Detective", 79490, 3),
        (695, "Criminal Investigator", 75000, 5),
        (244, "Traffic Officer", 60000, 4),
        (483, "Bounty Hunter", 65000, 5),
        (562, "Forensics", 70000, 3),
        (106, "Custodian", 45000, 6);

INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (1, "Jayla", "Newton", 277),
        (2, "Fabio", "Reyes", 405),
        (3, "Lucifer", "Morningstar", 666),
        (4, "Chloe", "Decker", 666),
        (5, "Dan", "Espinoza", 244),
        (6, "Mazikeen", "Smith", 483),
        (7, "Ella", "Lopez", 562),
        (8, "Trixie", "Espinoza", 405),
        (9, "Linda", "Martin", 244),
        (10, "Sinner", "Man", 106),
        (11, "Charlotte", "Richards", 483),
        (12, "Marcus", "Pierce", 106),
        (13, "Father", "Kinley", 562),
        (14, "God", "Himself", 695),
        (15, "Amen", "Adiel", 695);



