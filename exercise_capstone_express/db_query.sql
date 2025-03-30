create DATABASE capstone_express;
use capstone_express;

CREATE TABLE nguoi_dung (
    nguoi_dung_id INT PRIMARY KEY auto_increment,
    email VARCHAR(255) UNIQUE NOT NULL,
    mat_khau VARCHAR(255) NOT NULL,
    ho_ten VARCHAR(255),
    tuoi INT,
    anh_dai_dien VARCHAR(255)
);

CREATE TABLE hinh_anh (
    hinh_id INT PRIMARY KEY auto_increment,
    ten_hinh VARCHAR(255),
    duong_dan VARCHAR(255),
    mo_ta VARCHAR(255),
    nguoi_dung_id INT,
    FOREIGN KEY (nguoi_dung_id) REFERENCES nguoi_dung(nguoi_dung_id) ON DELETE CASCADE
);

CREATE TABLE binh_luan (
    binh_luan_id INT PRIMARY KEY auto_increment,
    nguoi_dung_id INT,
    hinh_id INT,
    ngay_binh_luan DATE,
    noi_dung VARCHAR(500),
    FOREIGN KEY (nguoi_dung_id) REFERENCES nguoi_dung(nguoi_dung_id) ON DELETE CASCADE,
    FOREIGN KEY (hinh_id) REFERENCES hinh_anh(hinh_id) ON DELETE CASCADE
);

CREATE TABLE luu_anh (
    nguoi_dung_id INT,
    hinh_id INT,
    ngay_luu DATE,
    PRIMARY KEY (nguoi_dung_id, hinh_id),
    FOREIGN KEY (nguoi_dung_id) REFERENCES nguoi_dung(nguoi_dung_id) ON DELETE CASCADE,
    FOREIGN KEY (hinh_id) REFERENCES hinh_anh(hinh_id) ON DELETE CASCADE
);


-- Insert sample users
INSERT INTO nguoi_dung (email, mat_khau, ho_ten, tuoi, anh_dai_dien) VALUES
('user1@example.com', 'password123', 'Nguyen Van A', 25, 'avatar1.jpg'),
('user2@example.com', 'password456', 'Tran Thi B', 30, 'avatar2.jpg'),
('user3@example.com', 'password789', 'Le Van C', 22, 'avatar3.jpg');

-- Insert sample images
INSERT INTO hinh_anh (ten_hinh, duong_dan, mo_ta, nguoi_dung_id) VALUES
('image1.jpg', '/images/image1.jpg', 'Beautiful landscape', 1),
('image2.jpg', '/images/image2.jpg', 'City skyline at night', 2),
('image3.jpg', '/images/image3.jpg', 'Sunset over the ocean', 3),
('image4.jpg', '/images/image4.jpg', 'Mountain view', 1);

-- Insert sample comments
INSERT INTO binh_luan ( nguoi_dung_id, hinh_id, ngay_binh_luan, noi_dung) VALUES
(1, 2, '2024-03-01', 'Wow, amazing view!'),
(2, 3, '2024-03-02', 'I love this place!'),
(3, 1, '2024-03-03', 'Where was this taken?'),
(1, 3, '2024-03-04', 'Such a peaceful sunset.');

-- Insert sample saved images (many-to-many relationship)
INSERT INTO luu_anh (nguoi_dung_id, hinh_id, ngay_luu) VALUES
(1, 2, '2024-03-05'),
(2, 3, '2024-03-06'),
(3, 1, '2024-03-07'),
(1, 4, '2024-03-08'),
(2, 1, '2024-03-09');
