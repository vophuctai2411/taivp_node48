-- session 3:
-- khoa chinh, khoa ngoai
-- relationship giua cac TABLE

-- tao table users

create table users (
	user_id INT PRIMARY KEY auto_increment,
	email varchar(255) not null,
	full_name varchar(255) not null,
	age int
)

-- tao data 
INSERT INTO users (email, full_name, age) VALUES
('john.doe@example.com', 'John Doe', 28),
('jane.smith@example.com', 'Jane Smith', 34),
('alice.jones@example.com', 'Alice Jones', 25),
('bob.brown@example.com', 'Bob Brown', 40),
('charlie.white@example.com', 'Charlie White', 22),
('david.wilson@example.com', 'David Wilson', 31),
('emily.taylor@example.com', 'Emily Taylor', 27),
('frank.martin@example.com', 'Frank Martin', 35),
('grace.anderson@example.com', 'Grace Anderson', 29),
('henry.moore@example.com', 'Henry Moore', 45),
('isabel.jackson@example.com', 'Isabel Jackson', 38),
('jackson.lee@example.com', 'Jackson Lee', 33),
('katherine.harris@example.com', 'Katherine Harris', 26),
('luke.clark@example.com', 'Luke Clark', 24),
('maria.lee@example.com', 'Maria Lee', 30),
('nathan.davis@example.com', 'Nathan Davis', 39),
('olivia.martinez@example.com', 'Olivia Martinez', 32),
('peter.taylor@example.com', 'Peter Taylor', 41),
('quinn.baker@example.com', 'Quinn Baker', 23),
('rachel.moore@example.com', 'Rachel Moore', 36);

delete from users where user_id=3


create table products (
	product_id INT PRIMARY KEY AUTO_INCREMENT,
	product_name varchar(255) not null,
	price double,
	description text
)

create table orders (
	order_id int primary key auto_increment,
	user_id int,
	foreign key (user_id) REFERENCES users(user_id),
	
	product_id int,
	foreign key (product_id) REFERENCES products(product_id)
)

create table videos(
	video_id int primary key auto_increment,
	video_name varchar(255) not null,
	duration int,
	
	user_id int,
	foreign key (user_id) REFERENCES users(user_id)
)

INSERT INTO videos (video_name, duration, user_id) VALUES
('How to Cook Pasta', 300, 1),
('Travel Vlog: Paris', 600, 2),
('Fitness Routine for Beginners', 420, 2),
('Understanding AI and Machine Learning', 540, 4),
('Photography Tips and Tricks', 360, 5),
('Yoga for Relaxation', 480, 6),
('Building a Personal Website', 720, 7),
('Top 10 Movies of 2023', 390, 8),
('Quick and Easy Dinner Recipes', 300, 9),
('Digital Marketing 101', 540, 10),
('Mental Health Awareness', 450, 11),
('Sustainable Living Tips', 600, 12),
('Guitar Lessons for Beginners', 360, 13),
('Exploring the World of Space', 480, 14),
('How to Make a Budget Plan', 420, 15),
('Creative Writing: A Beginner\'s Guide', 550, 16),
('Top 5 Books You Should Read', 480, 17),
('Interior Design Ideas for Small Spaces', 650, 18),
('DIY Home Renovation Tips', 720, 19),
('Mastering Public Speaking', 600, 20);

select * from users join videos on users.user_id=videos.user_id;