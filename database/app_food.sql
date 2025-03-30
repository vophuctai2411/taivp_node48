create database app_food
use app_food

create table users (
 user_id int primary key auto_increment,
 full_name varchar(255) not null,
 email varchar(255) not null,
 password varchar(255) not null
)

create table restaurants (
	res_id int primary key auto_increment,
	res_name varchar(255) not null,
	image varchar(255) not null,
	description varchar(255) not null
)

CREATE TABLE like_res (
    user_id INT,
    res_id INT,
    date_like DATETIME,
    
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (res_id) REFERENCES restaurants(res_id)
);

create table rate_res(
	rate_res_id INT primary key auto_increment,
	user_id INT,
	foreign key(user_id) REFERENCES users(user_id),
	res_id INT,
	FOREIGN key(res_id) REFERENCES restaurants(res_id),
	amount int,
	date_rate date
)

create table food_type(
	type_id int primary key auto_increment,
	type_name VARCHAR(255)
)

create table food(
	food_id int primary key auto_increment,
	food_name varchar(255),
	price double,
	image varchar(255),
	description text,
	type_id int,
	FOREIGN key(type_id) REFERENCES food_type(type_id)
)

CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    food_id INT,
    amount INT,
    code VARCHAR(255),
    arr_sub_id VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (food_id) REFERENCES food(food_id)
);

INSERT INTO users (full_name, email, password) VALUES
('John Doe', 'john.doe@example.com', 'password123'),
('Jane Smith', 'jane.smith@example.com', 'securepassword456'),
('Alice Johnson', 'alice.johnson@example.com', 'alicepass789'),
('Bob Brown', 'bob.brown@example.com', 'bobbrown321'),
('Charlie White', 'charlie.white@example.com', 'charliepass999'),
('David Williams', 'david.williams@example.com', 'davidd1234'),
('Emily Davis', 'emily.davis@example.com', 'emilyd5678'),
('Frank Miller', 'frank.miller@example.com', 'frankmiller890'),
('Grace Wilson', 'grace.wilson@example.com', 'gracepw123'),
('Henry Moore', 'henry.moore@example.com', 'henrymoore998'),
('Isabel Taylor', 'isabel.taylor@example.com', 'isabelpass2021'),
('Jackson Harris', 'jackson.harris@example.com', 'jacksonharris123'),
('Katherine Clark', 'katherine.clark@example.com', 'katherineclark456'),
('Lucas Lewis', 'lucas.lewis@example.com', 'lucaspass789'),
('Maria Martinez', 'maria.martinez@example.com', 'mariamartinez456'),
('Nathan Walker', 'nathan.walker@example.com', 'nathanwalker876'),
('Olivia Hall', 'olivia.hall@example.com', 'oliviahall543'),
('Peter Allen', 'peter.allen@example.com', 'peterallen222'),
('Quinn Young', 'quinn.young@example.com', 'quinnyoung999'),
('Rachel Scott', 'rachel.scott@example.com', 'rachelpass999');

INSERT INTO restaurants (res_name, image, description) VALUES
('The Food Palace', 'food_palace.jpg', 'A luxurious dining experience with a variety of cuisines.'),
('Sushi World', 'sushi_world.jpg', 'Authentic Japanese sushi with fresh ingredients.'),
('Pizza Heaven', 'pizza_heaven.jpg', 'Delicious wood-fired pizzas and Italian delicacies.'),
('Café del Sol', 'cafe_del_sol.jpg', 'A cozy café offering organic coffee and light bites.'),
('BBQ Haven', 'bbq_haven.jpg', 'Mouthwatering barbecue and grilled meats.'),
('The Green Garden', 'green_garden.jpg', 'A vegetarian and vegan paradise with fresh greens.'),
('Taco Time', 'taco_time.jpg', 'Mexican street food with the best tacos in town.'),
('Burger King', 'burger_king.jpg', 'Classic American burgers and fries in a fast-casual setting.'),
('Pasta la Vista', 'pasta_la_vista.jpg', 'Delicious pasta dishes with a twist of flavor.'),
('Spicy Affair', 'spicy_affair.jpg', 'A spice lover’s paradise with fiery Indian curries.'),
('Choco Bliss', 'choco_bliss.jpg', 'Indulge in the finest chocolates and desserts.'),
('The Vegan Bistro', 'vegan_bistro.jpg', 'Creative and flavorful vegan dishes for everyone.'),
('Seafood Galore', 'seafood_galore.jpg', 'Fresh seafood and coastal delicacies right at your table.'),
('Sweets & Treats', 'sweets_treats.jpg', 'Freshly baked goods and mouthwatering pastries.'),
('Ramen House', 'ramen_house.jpg', 'Traditional ramen bowls served with rich broths.'),
('Kebab Corner', 'kebab_corner.jpg', 'Delicious and juicy kebabs served with fresh sides.'),
('Steakhouse Prime', 'steakhouse_prime.jpg', 'Premium steaks and hearty sides for meat lovers.'),
('Dim Sum Delight', 'dim_sum_delight.jpg', 'Authentic dim sum and Cantonese dishes.'),
('Wine & Dine', 'wine_dine.jpg', 'A sophisticated venue offering wine pairings with fine dining.'),
('Mamma Mia’s', 'mamma_mias.jpg', 'Homestyle Italian cooking with fresh ingredients.');

INSERT INTO like_res (user_id, res_id, date_like) VALUES
(1, 5, '2025-01-10 08:30:00'),
(2, 5, '2025-01-10 09:00:00'),
(3, 5, '2025-01-10 09:30:00'),
(4, 5, '2025-01-10 10:00:00'),
(1, 8, '2025-01-10 10:30:00'),
(2, 8, '2025-01-10 11:00:00'),
(5, 8, '2025-01-10 11:30:00'),
(6, 8, '2025-01-10 12:00:00'),
(7, 10, '2025-01-10 12:30:00'),
(8, 10, '2025-01-10 13:00:00'),
(9, 10, '2025-01-10 13:30:00'),
(3, 15, '2025-01-10 14:00:00'),
(5, 15, '2025-01-10 14:30:00'),
(4, 15, '2025-01-10 15:00:00'),
(6, 15, '2025-01-10 15:30:00'),
(7, 18, '2025-01-10 16:00:00'),
(9, 18, '2025-01-10 16:30:00'),
(8, 18, '2025-01-10 17:00:00'),
(10, 18, '2025-01-10 17:30:00'),
(11, 18, '2025-01-10 18:00:00');

INSERT INTO food_type (type_name)
VALUES
('Italian'),
('Chinese'),
('Indian'),
('Mexican'),
('American'),
('Japanese'),
('Mediterranean'),
('Thai'),
('French'),
('Greek'),
('Spanish'),
('Vietnamese'),
('Korean'),
('Turkish'),
('Lebanese'),
('Egyptian'),
('Moroccan'),
('Brazilian'),
('Cajun'),
('Caribbean');


INSERT INTO rate_res (user_id, res_id, amount, date_rate)
VALUES
(1, 1, 5, '2025-01-01'),
(2, 2, 4, '2025-01-02'),
(3, 3, 3, '2025-01-03'),
(4, 4, 5, '2025-01-04'),
(5, 5, 2, '2025-01-05'),
(6, 6, 4, '2025-01-06'),
(7, 7, 5, '2025-01-07'),
(8, 8, 3, '2025-01-08'),
(9, 9, 1, '2025-01-09'),
(10, 10, 4, '2025-01-10'),
(11, 11, 5, '2025-01-11'),
(12, 12, 2, '2025-01-12'),
(13, 13, 3, '2025-01-13'),
(14, 14, 4, '2025-01-14'),
(15, 15, 5, '2025-01-15'),
(16, 16, 2, '2025-01-16'),
(17, 17, 4, '2025-01-17'),
(18, 18, 3, '2025-01-18'),
(19, 19, 5, '2025-01-19'),
(20, 20, 4, '2025-01-20'),
(1, 3, 5, '2025-01-21'),
(2, 4, 3, '2025-01-22'),
(3, 6, 4, '2025-01-23'),
(4, 7, 2, '2025-01-24'),
(5, 10, 4, '2025-01-25'),
(6, 12, 3, '2025-01-26'),
(7, 14, 5, '2025-01-27'),
(8, 15, 4, '2025-01-28'),
(9, 18, 1, '2025-01-29'),
(10, 19, 3, '2025-01-30');


INSERT INTO food (food_name, price, image, description, type_id)
VALUES
('Spaghetti Carbonara', 12.99, 'images/spaghetti_carbonara.jpg', 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.', 1),
('Pizza Margherita', 10.99, 'images/pizza_margherita.jpg', 'A simple yet delicious pizza with tomato, mozzarella, and basil.', 1),
('Kung Pao Chicken', 14.50, 'images/kung_pao_chicken.jpg', 'A spicy Chinese stir-fry with chicken, peanuts, and chili peppers.', 2),
('Sweet and Sour Pork', 13.75, 'images/sweet_sour_pork.jpg', 'Crispy pork in a tangy sweet and sour sauce, with bell peppers and pineapple.', 2),
('Butter Chicken', 16.99, 'images/butter_chicken.jpg', 'A rich and creamy Indian chicken curry made with a blend of spices and tomatoes.', 3),
('Tandoori Chicken', 14.99, 'images/tandoori_chicken.jpg', 'Chicken marinated in yogurt and spices, then roasted in a tandoor oven.', 3),
('Tacos', 9.99, 'images/tacos.jpg', 'Soft corn tortillas filled with your choice of meat, topped with fresh salsa and cilantro.', 4),
('Quesadilla', 11.50, 'images/quesadilla.jpg', 'A grilled tortilla filled with cheese, beans, and your choice of protein.', 4),
('Cheeseburger', 10.00, 'images/cheeseburger.jpg', 'A juicy beef patty with melted cheese, lettuce, tomato, and pickles on a soft bun.', 5),
('Fried Chicken', 12.99, 'images/fried_chicken.jpg', 'Crispy fried chicken seasoned with southern spices and served with a side of gravy.', 5),
('Sushi Roll', 18.50, 'images/sushi_roll.jpg', 'A variety of fresh fish, avocado, and vegetables wrapped in seasoned rice and seaweed.', 6),
('Ramen', 13.99, 'images/ramen.jpg', 'Japanese noodles in a flavorful broth, topped with sliced pork, eggs, and green onions.', 6),
('Falafel', 10.99, 'images/falafel.jpg', 'Crispy fried chickpea balls served in pita bread with hummus and fresh vegetables.', 7),
('Hummus and Pita', 8.99, 'images/hummus_pita.jpg', 'A smooth chickpea dip served with warm pita bread.', 7),
('Pad Thai', 14.25, 'images/pad_thai.jpg', 'Stir-fried rice noodles with shrimp, peanuts, egg, and a tangy tamarind sauce.', 8),
('Green Curry', 13.50, 'images/green_curry.jpg', 'A spicy and aromatic Thai curry made with green chilies, coconut milk, and fresh herbs.', 8),
('Croissant', 4.99, 'images/croissant.jpg', 'A buttery and flaky French pastry, perfect for breakfast or a snack.', 9),
('Coq au Vin', 19.99, 'images/coq_au_vin.jpg', 'A classic French dish of chicken slowly braised in red wine with mushrooms and onions.', 9),
('Paella', 17.00, 'images/paella.jpg', 'A traditional Spanish rice dish with saffron, seafood, and a variety of vegetables.', 10),
('Churros', 5.50, 'images/churros.jpg', 'Fried dough pastry coated in cinnamon sugar, often served with chocolate dipping sauce.', 10);

INSERT INTO orders (user_id, food_id, amount, code, arr_sub_id)
VALUES
(1, 1, 2, 'ORD1001', 'SUB001'),
(2, 3, 1, 'ORD1002', 'SUB002'),
(3, 5, 4, 'ORD1003', 'SUB003'),
(4, 7, 3, 'ORD1004', 'SUB004'),
(5, 9, 2, 'ORD1005', 'SUB005'),
(6, 2, 5, 'ORD1006', 'SUB006'),
(7, 4, 3, 'ORD1007', 'SUB007'),
(8, 6, 2, 'ORD1008', 'SUB008'),
(9, 8, 1, 'ORD1009', 'SUB009'),
(10, 10, 6, 'ORD1010', 'SUB010'),
(1, 5, 1, 'ORD1011', 'SUB011'),
(2, 8, 2, 'ORD1012', 'SUB012'),
(3, 10, 4, 'ORD1013', 'SUB013'),
(4, 6, 3, 'ORD1014', 'SUB014'),
(5, 1, 2, 'ORD1015', 'SUB015'),
(6, 4, 5, 'ORD1016', 'SUB016'),
(7, 7, 1, 'ORD1017', 'SUB017'),
(8, 3, 3, 'ORD1018', 'SUB018'),
(9, 2, 2, 'ORD1019', 'SUB019'),
(10, 9, 4, 'ORD1020', 'SUB020');

-- cau 1: Tim 5 nguoi like nha hang nhieu nhat
select u.user_id, u.full_name, count(u.user_id) as "Tong so luot like" from users as u join like_res as lr on u.user_id=lr.user_id
group by u.user_id, u.full_name
order by count(u.user_id) desc
limit 5

-- cau 2: Tim 2 nha hang co luot like nhieu nhat
select res.res_id, res.res_name, count(lr.res_id) as 'so luot like' from restaurants as res join like_res as lr on res.res_id=lr.res_id
group by res.res_id, res.res_name
order by count(res.res_id) desc
limit 2

-- cau 3: Tim nguoi dat hang nhieu nhat
select u.user_id, u.full_name, count(u.user_id) as "So lan dat hang" from users as u join orders as o on u.user_id=o.user_id
group by u.user_id, u.full_name
order by count(u.user_id)
limit 1

-- cau 4: Tim nguoi khong hoat dong (khong dat hang, khong like, khong danh gia)
delete from orders where user_id=16
delete from rate_res where user_id=16
delete from orders where user_id=17
delete from rate_res where user_id=17

select * from users as u 
left join like_res as lr on u.user_id=lr.user_id
left join rate_res as rr on u.user_id=rr.user_id
left join orders as o on u.user_id=o.user_id
where lr.user_id is null and rr.user_id is null and o.user_id is null
