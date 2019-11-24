SELECT * FROM oxn711nfcpjgwcr2.products WHERE product_name LIKE '%mic%';

SELECT 
oxn711nfcpjgwcr2.orders.created_at,
oxn711nfcpjgwcr2.orders.checked_out_at,
oxn711nfcpjgwcr2.orders.user_id, 
oxn711nfcpjgwcr2.orderItems.order_id, 
oxn711nfcpjgwcr2.orderItems.product_id,
oxn711nfcpjgwcr2.products.product_name,
oxn711nfcpjgwcr2.products.price,
oxn711nfcpjgwcr2.products.image_link,
oxn711nfcpjgwcr2.products.product_description,
oxn711nfcpjgwcr2.products.instrument_type
FROM oxn711nfcpjgwcr2.orders 
LEFT JOIN oxn711nfcpjgwcr2.orderItems on oxn711nfcpjgwcr2.orders.id = oxn711nfcpjgwcr2.orderItems.order_id 
LEFT JOIN oxn711nfcpjgwcr2.products on oxn711nfcpjgwcr2.orderItems.product_id = oxn711nfcpjgwcr2.products.id
WHERE oxn711nfcpjgwcr2.orders.user_id = 3 AND oxn711nfcpjgwcr2.products.product_name LIKE '%mic%';