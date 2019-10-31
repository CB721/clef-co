USE oxn711nfcpjgwcr2;

CREATE TABLE products
(
	id INT NOT NULL UNIQUE 
	AUTO_INCREMENT
	, product_name VARCHAR
	(255) NOT NULL
	, price DECIMAL
	(10, 2) NOT NULL
	, cost DECIMAL
	(10, 2) NOT NULL
	, image_link VARCHAR
	(255) NOT NULL
	, product_description MEDIUMTEXT NOT NULL
	, instrument_type VARCHAR
	(255) NOT NULL
	, quantity SMALLINT
	, hardware BOOLEAN NOT NULL
	, software BOOLEAN NOT NULL
	, PRIMARY KEY
	(id)
);

	SELECT *
	FROM oxn711nfcpjgwcr2.products;
	SELECT *
	FROM oxn711nfcpjgwcr2.products
	WHERE id = 3;
	--  example queries for product filter
	SELECT *
	FROM oxn711nfcpjgwcr2.products
	WHERE instrument_type = "amp" OR instrument_type = "guitar" OR instrument_type = "bass";
	SELECT *
	FROM oxn711nfcpjgwcr2.products
	WHERE hardware = false;

	CREATE TABLE discounts 
(
	-- product id;
	-- percentage discounted;
	-- id
	-- start date
	-- end date
);
	CREATE TABLE bundles 
(
	-- type
	-- product id
);
	CREATE TABLE cartItems
(
	-- productID
	-- quantity - default 1
	-- datetime added
	-- cartID
	-- id
);
	CREATE TABLE cart
(
	-- id
	-- cartItems id (string of cartItem ids?)
	-- datetime added
	-- datetime checked out
	-- user id
);
	CREATE TABLE users
	(
		id INT NOT NULL UNIQUE AUTO_INCREMENT
		, first_name VARCHAR(255) NOT NULL
		, last_name VARCHAR(255) NOT NULL
		, user_password VARCHAR(255) NOT NULL
		, email VARCHAR(255) NOT NULL
		, phone VARCHAR(255)
		, street_address VARCHAR(255)
		, secondary_address VARCHAR(255)
		, city VARCHAR(255)
		, user_state VARCHAR(255)
		, zip_code VARCHAR(255)
		, last_visit DATETIME
		, joined_date DATE NOT NULL
		, PRIMARY KEY (id)
	);