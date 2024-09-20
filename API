CREATE DATABASE crowdfunding_db;

USE crowdfunding_db;
CREATE TABLE FUNDRAISER (
    FUNDRAISER_ID INT AUTO_INCREMENT PRIMARY KEY,
    ORGANIZER VARCHAR(150) NOT NULL,
    CAPTION VARCHAR(200) NOT NULL,
    TARGET_FUNDING DECIMAL(10, 2) NOT NULL,
    CURRENT_FUNDING DECIMAL(10, 2) NOT NULL DEFAULT 0,
    CITY VARCHAR(150),
    ACTIVE TEXT,
    CATEGORY_ID INT,
    FOREIGN KEY (CATEGORY_ID) REFERENCES CATEGORY(CATEGORY_ID)
);

CREATE TABLE CATEGORY (
    CATEGORY_ID INT AUTO_INCREMENT PRIMARY KEY,
    NAME VARCHAR(100) NOT NULL
);

INSERT INTO FUNDRAISER (ORGANIZER, CAPTION, TARGET_FUNDING, CURRENT_FUNDING, CITY, ACTIVE, CATEGORY_ID)
VALUES 

('Leo', 'Medical Bills for Injured Athlete', 12000.00, 4000.00, 'Sydney', 'Leo was injured during the game and faced high medical costs.', 1),
('David', 'Arts Program for Youth', 5000.00, 800.00, 'Melbourne', 'Provide art education opportunities for adolescents at risk.', 4),
('Emma', 'Scholarship for Underprivileged Kids', 10000.00, 3000.00, 'Canberra', 'Scholarship to children from low-income families to help them access better educational resources', 4),
('Mike', 'Help Local Homeless', 6000.00, 1500.00, 'Darwin', 'Provide basic daily necessities for homeless people, including food and temporary shelter', 2),
('Edith', 'Animal Shelter Fundraiser', 7000.00, 2000.00, 'Sydney', 'Animal shelters need funds to provide food, medical care, and shelter to stray animals', 3),
('Kevin', 'Community Garden Project', 4000.00, 1000.00, 'Melbourne', 'Create a community garden that provides a space for residents to grow vegetables and communicate.', 2),
('Erin', 'Disaster Relief Fund', 25000.00, 7000.00, 'Brisbane', 'Help families recently affected by natural disasters.', 2),
('Tom','Short-Term Child Counseling','8000','2000','Darwin','Short-term counseling services for children who need psychological support','1');

INSERT INTO CATEGORY (NAME) VALUES ('Health'), ('Environment'), ('Community Support'),('Education');

