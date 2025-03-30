create database node48_test
use node48_test

create table product(
name VARCHAR(100) NOT NULL,
image VARCHAR(255),
price double,
rate int
)

INSERT INTO product (name, image, price, rate) VALUES
('Wireless Mouse', 'images/wireless_mouse.jpg', 29.99, 4),
('Bluetooth Headphones', 'images/bluetooth_headphones.jpg', 79.99, 5),
('Smartphone Case', 'images/smartphone_case.jpg', 15.49, 4),
('Laptop Stand', 'images/laptop_stand.jpg', 35.00, 3),
('4K LED TV', 'images/4k_led_tv.jpg', 499.99, 5),
('Smartwatch', 'images/smartwatch.jpg', 129.99, 4),
('Wireless Earbuds', 'images/wireless_earbuds.jpg', 59.99, 4),
('USB-C Cable', 'images/usb_c_cable.jpg', 9.99, 5),
('Portable Charger', 'images/portable_charger.jpg', 25.00, 4),
('Gaming Mouse', 'images/gaming_mouse.jpg', 49.99, 5),
('Bluetooth Speaker', 'images/bluetooth_speaker.jpg', 89.99, 4),
('Laptop Sleeve', 'images/laptop_sleeve.jpg', 19.99, 3),
('External Hard Drive', 'images/external_hard_drive.jpg', 89.00, 4),
('Smartphone', 'images/smartphone.jpg', 899.99, 5),
('Gaming Keyboard', 'images/gaming_keyboard.jpg', 79.99, 4),
('Webcam', 'images/webcam.jpg', 45.00, 3),
('Electric Kettle', 'images/electric_kettle.jpg', 30.99, 4),
('Cordless Drill', 'images/cordless_drill.jpg', 99.99, 4),
('Digital Camera', 'images/digital_camera.jpg', 399.99, 5),
('Virtual Reality Headset', 'images/vr_headset.jpg', 199.99, 5);


select * from product
select name as "tên sản phẩm" from product

create table users(
full_name varchar(255) not null,
email varchar(255) not null,
phone varchar(20),
address varchar(255),
age int
)

INSERT INTO users (full_name, email, phone, address, age) VALUES
('John Doe', 'john.doe@example.com', '123-456-7890', '123 Elm St, Springfield, IL', 28),
('Jane Smith', 'jane.smith@example.com', '987-654-3210', '456 Oak St, Lincoln, NE', 34),
('Michael Johnson', 'michael.johnson@example.com', '555-012-3456', '789 Pine Ave, Denver, CO', 42),
('Emily Davis', 'emily.davis@example.com', '555-654-9870', '321 Maple Rd, Austin, TX', 25),
('David Lee', 'david.lee@example.com', '555-555-5555', '101 Birch Blvd, Seattle, WA', 39),
('Sophia Brown', 'sophia.brown@example.com', '555-123-9876', '202 Cedar Ln, Miami, FL', 31),
('James Wilson', 'james.wilson@example.com', '555-222-3333', '303 Pine St, Chicago, IL', 45),
('Olivia Martinez', 'olivia.martinez@example.com', '555-444-5555', '404 Oak Dr, Phoenix, AZ', 29),
('Daniel Clark', 'daniel.clark@example.com', '555-666-7777', '505 Elm Rd, Boston, MA', 36),
('Ava Moore', 'ava.moore@example.com', '555-888-9999', '606 Birch Ave, San Francisco, CA', 26),
('William Harris', 'william.harris@example.com', '555-234-5678', '707 Maple Ln, New York, NY', 48),
('Lily Garcia', 'lily.garcia@example.com', '555-432-8765', '808 Pine Blvd, Los Angeles, CA', 33),
('Benjamin Taylor', 'benjamin.taylor@example.com', '555-876-5432', '909 Oak Rd, Dallas, TX', 40),
('Chloe Walker', 'chloe.walker@example.com', '555-111-2222', '1010 Cedar Ave, Portland, OR', 22),
('Elijah Robinson', 'elijah.robinson@example.com', '555-333-4444', '1111 Birch Ln, Columbus, OH', 38),
('Charlotte Lewis', 'charlotte.lewis@example.com', '555-555-4444', '1212 Maple Rd, Nashville, TN', 29),
('Henry Young', 'henry.young@example.com', '555-777-8888', '1313 Pine Ave, San Diego, CA', 41),
('Amelia Scott', 'amelia.scott@example.com', '555-999-0000', '1414 Oak Dr, Charlotte, NC', 30),
('Jack Anderson', 'jack.anderson@example.com', '555-222-0000', '1515 Elm St, Kansas City, MO', 35),
('Mia King', 'mia.king@example.com', '555-666-1234', '1616 Cedar Rd, Atlanta, GA', 27);

-- query = filter data
-- cau 1 liet ke nhung nguoi co tuoi tu 25 den 30
select * from users
where age BETWEEN 25 and 30


select * from users
where 25<=age and age<=30
order by age asc

-- tim nhung nguoi co ten la John
select * from users where full_name LIKE "%John%"


-- nhung nguoi co tuoi cao nhat
select * from users where age = (select max(age) from users)

select * from users where age=(select age from users order by age desc limit 1)

select count(*) as tongsouser from users

update users set age = 30 where full_name="John Doe"
update users set age=30 where full_name in ("John Doe", "Jane Smith")


alter table users
add column gender int default 1


alter table users
modify column full_name VARCHAR(100) not null