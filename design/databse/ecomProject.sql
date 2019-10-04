

CREATE DATABASE ecomProject;

use ecomProject;

show tables;

CREATE TABLE products(
  product_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(255) NOT NULL,
  product_category VARCHAR(255) NOT NULL,
  product_description VARCHAR(255) NOT NULL,
  product_image VARCHAR(255) NOT NULL,
  primary key(product_id)
);

INSERT INTO products(product_name, product_category, product_description, product_image)
VALUES
("Roush Supercharger","Performance","Increase the power of your Roush R2300 Aluminator Phase 1 supercharger to an impressive 675 horsepower and 585 lb-ft of torque with a Phase 1 to Phase 3 Supercharger Upgrade Kit.","https://treperformance.com/images/M143855297.jpg"),
("Comp Cam Shaft","Performance", "If you're looking to get serious upper RPM gains, but don't want to add springs, a set of Comp Cams Stage 3 NSR camshafts are the perfect addition to your muscle car", "http://www.onallcylinders.com/wp-content/uploads/2014/02/camshaft.jpg"),
("Borla ATAK exhaust", "Performance", "A Borla ATAK catback system will significantly increase exhaust flow over the restrictive stock exhaust system for a dramatic increase in horsepower and an aggressive muscle car sound that is not for the faint of heart.", "https://www.kpmmotorsport.com.au/wp-content/uploads/2017/06/Mustang_Exhaust_GT.jpg"),
("C&L Street Cold Air Intake", "Performance", "Take full advantage of your new C&L Street Cold Air Intake. When you order this combo, you aren't just getting a tuner - you are getting the tuner and 2 Custom V2 Tunes that are written specifically for your muscle car", "https://turn5.scene7.com/is/image/Turn5/397687?$prodpg640x480$"),
("Centerforce Clutch", "Performance", "Centerforce's Dual Friction Series Clutches feature a patented Dual Friction Disc Design. The pressure plate side of the disc has a full face for drivability and longevity.", "https://turn5.scene7.com/is/image/Turn5/389897?$prodpg640x480$"),
("Mishimoto Intercooler", "Performance", "Turbos and superchargers are great for making more power, but they are also known to create a lot of heat which can cause detonation.", "https://www.stage3motorsports.com/assets/images/15-18_f150_raptor_3-5l_2-7l_ecboboost_mishimoto_intercooler_kit_002.jpg"),
("Hellcat Style Wheels", "Exterior", "This standard combo kit features four 20x9 Bronze Hellcat Style Wheels and four 245/45R20 Mickey Thompson Street Comp Tires.", "https://cdn1.bigcommerce.com/server3000/1gfd17pa/products/244414/images/344908/V1180BZ_Hellcat_Qtr_preview__28635.1514390687.1280.1280__92269.1551510323.1280.1280.jpg?c=2"),
("Raxiom Tail Lights", "Exterior", "These tail lights feature built-in modern LED technology that is used for both the reverse lights and running light rings to dramatically transform the appearance.", "https://i.redd.it/lcrkak1qgq801.jpg"),
("Anderson Hood", "Exterior", "Anderson Composites 4-Inch Type-CJ Cowl Hood - Carbon Fiber, you will get a much-needed upgrade on your fifth-gen Ford Mustang.", "https://www.cjponyparts.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/h/d/hd166_2.2591.jpg"),
("Eibach Sportline Springs", "Performance", "Give your Mustang the sports car type handling it deserves with an Eibach Sportline Spring Kit.", "https://cfc7329ad537523a5de1-b21544d490ba797ec9de9d17e947de3d.ssl.cf1.rackcdn.com/eib-41035_0a8f328d.jpg"),
("Boss Cold Air Intake", "Performance", "Bolt on up to 61 RWHP and 43 ft.-lbs. of torque to your 2011-2014 5.0 GT Mustang with a Ford Racing BOSS 302 Manifold.", "https://turn5.scene7.com/is/image/Turn5/50179?$prodpg640x480$"),
("Brembo Brakes", "Performance", "Upgrade your Brembo equipped muscle cars front brakes to the massive 6-piston calipers found in the Brembo Gran Turismo Brake Kit and get the confidence you need to dive into the most challenging corners", "https://www.carid.com/images/brembo/page/brembo-drilled-brake-disc.jpg");    

CREATE TABLE contacts(
	contact_id INT AUTO_INCREMENT NOT NULL,
    fname VARCHAR(100) NOT NULL,
    lname VARCHAR(100) NOT NULL,
    state CHAR(2) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone_number VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    primary key(contact_id)
);

INSERT INTO contacts(fname, lname, email, message)
VALUES ('Reginald', 'Harris', 'regharris@gmail.com','I buy all my parts from PoweR LaB and I love my build, my mustang is now 1000hp!'),
('Walter', 'Marikwa', 'wmarikwa@gmail.com', 'Joining The PoWeR club is one of the best choices ive made, I have plenty of car buds now!'),
('Jessica', 'Miranda', 'jmiranda@hotmail.com', 'Ive love my new exterior mods from PoWer LaB they completely transfor my Camaro '),
('Stephen', 'Bonner', 'sbonner67@gmail.com', 'PoWeR LaB is where i get all my parts, Ive never had ana issue at all'),
('Robert', 'Whitaker', 'rw13@yahoo.com', 'I built several cars using PoWer LaB parts, whenever I want to build a car I shop there'),
('Kelvin', 'Gastelum', 'kg185@gmail.com', 'PoWeR LaB has the best customer service whenever I have a need'),
('Andre', 'Torealba', 'at@hotmail.com','With PoWeR LaB I get all my parts on time and perfectly wrapped'),
('Kevin', 'Durant', 'kd@gmail.com','PoWeR LaBs website is easy to navigate and very engaging'),
('Argentina', 'Harris', 'arharris@gmail.com','Whenever I have needs for my Hellcat I shop PoWeR LaB');

CREATE TABLE price(
price_id INT NOT NULL AUTO_INCREMENT, 
price DECIMAL(6,2) NOT NULL,
currency VARCHAR(100) NOT NULL,
product_id INT NOT NULL,
primary key(price_id),
CONSTRAINT product_id
FOREIGN KEY (product_id) REFERENCES products(product_id)
ON DELETE NO ACTION
ON UPDATE NO ACTION
);

INSERT INTO price(price, currency, product_id)
VALUES (4500.00, "USD",1),
(1429.00, "USD",2),
(1500.00, "USD",3),
(850.00, "USD",4),
(650.00, "USD",5),
(1500.00, "USD",6),
(1500.00, "USD",7),
(400.00, "USD",8),
(1500.00, "USD",9),
(295.00, "USD",10),
(650.00, "USD",11),
(4600.00, "USD",12);



-- SELECT * FROM products;
-- SELECT * FROM price;
-- SELECT * FROM contacts;


-- SELECT products.*, price.price FROM products INNER JOIN price ON products.product_id = price.product_id WHERE price.price < 500;

