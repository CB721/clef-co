SELECT 
oxn711nfcpjgwcr2.review.review,
oxn711nfcpjgwcr2.review.created_at,
oxn711nfcpjgwcr2.review.user_id,
oxn711nfcpjgwcr2.users.first_name,
oxn711nfcpjgwcr2.review.product_id,
oxn711nfcpjgwcr2.products.product_name,
oxn711nfcpjgwcr2.products.product_description,
AVG(oxn711nfcpjgwcr2.review.rating)
FROM oxn711nfcpjgwcr2.review
LEFT JOIN oxn711nfcpjgwcr2.users on oxn711nfcpjgwcr2.review.user_id = oxn711nfcpjgwcr2.users.id
LEFT JOIN oxn711nfcpjgwcr2.products on oxn711nfcpjgwcr2.review.product_id = oxn711nfcpjgwcr2.products.id
WHERE oxn711nfcpjgwcr2.review.product_id = 10;

SELECT 
oxn711nfcpjgwcr2.review.review,
oxn711nfcpjgwcr2.review.rating,
oxn711nfcpjgwcr2.review.created_at,
oxn711nfcpjgwcr2.review.user_id,
oxn711nfcpjgwcr2.users.first_name,
oxn711nfcpjgwcr2.review.product_id,
oxn711nfcpjgwcr2.products.product_name,
oxn711nfcpjgwcr2.products.product_description
FROM oxn711nfcpjgwcr2.review
LEFT JOIN oxn711nfcpjgwcr2.users on oxn711nfcpjgwcr2.review.user_id = oxn711nfcpjgwcr2.users.id
LEFT JOIN oxn711nfcpjgwcr2.products on oxn711nfcpjgwcr2.review.product_id = oxn711nfcpjgwcr2.products.id
WHERE oxn711nfcpjgwcr2.review.product_id = 10;