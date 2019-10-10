USE oxn711nfcpjgwcr2;

CREATE TABLE products
(
	id INT NOT NULL AUTO_INCREMENT
	, product_name VARCHAR(255) NOT NULL
	, price DECIMAL(10, 2) NOT NULL
	, cost DECIMAL(10, 2) NOT NULL
	, image_link VARCHAR(255) NOT NULL
	, product_description VARCHAR(255)NOT NULL
	, instrument_type VARCHAR(255) NOT NULL
	, quantity SMALLINT
	, hardware BOOLEAN NOT NULL
	, software BOOLEAN NOT NULL
	, PRIMARY KEY (id)
);

SELECT * FROM oxn711nfcpjgwcr2.products;