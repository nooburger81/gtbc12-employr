INSERT INTO department (id, name) VALUES (1, 'Gaming Technologies');
INSERT INTO department (id, name) VALUES (2, 'Burnt Sales');
INSERT INTO department (id, name) VALUES (3, 'Gimmie Mulligans');
INSERT INTO department (id, name) VALUES (4, 'Pie Chart Room');
INSERT INTO department (id, name) VALUES (5, 'Seminars');


INSERT INTO role (title, salary, departmentID) VALUES ("Lead Bullshister", 150000, 1);
INSERT INTO role (title, salary, departmentID) VALUES ("Elden Mgr", 138500, 2);
INSERT INTO role (title, salary, departmentID) VALUES ("Internet Jockey.", 112000, 2);
INSERT INTO role (title, salary, departmentID) VALUES ("Yesterday's Jam", 143000, 2);
INSERT INTO role (title, salary, departmentID) VALUES ("Piggybacker", 169000, 3);
INSERT INTO role (title, salary, departmentID) VALUES ("Lead Jack Ass", 125000, 1);
INSERT INTO role (title, salary, departmentID) VALUES ("Sr Twice Baked Potato", 138000, 3);
INSERT INTO role (title, salary, departmentID) VALUES ("Your Dad's Job", 122000, 3);
INSERT INTO role (title, salary, departmentID) VALUES ("Not Dogsitting", 145000, 4);
INSERT INTO role (title, salary, departmentID) VALUES ("Real World Contenstant", 145000, 5);

INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('John', 'Trane', 1, null);
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Brigham', 'Young', 2, 1);
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('William', 'Troy', 4, 3);
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Marylin', 'King', 4, 3);
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Charlie', 'Tuna', 6, null);
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Sarah', 'Jeremy', 7, 6);
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Henry', 'Rollins', 8, 6);
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Clark', 'Griswold', 9, null);
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Carmen', 'Electra', 10, null);
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Duke', 'Ellington', 2, 1);
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Thomas', 'Keller', 11, null);
INSERT INTO employees (firstName, lastName, roleID, managerID) VALUES ('Juan', 'Tater', 7, 6);
