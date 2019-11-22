INSERT INTO oxn711nfcpjgwcr2.cart
(
    user_id,
    created_at,
    checked_out_at,
    checked_out
)
VALUES
(
    3,
    "2019-11-09T09:32:12",
    "2019-11-09T09:41:45",
    TRUE
);

INSERT INTO oxn711nfcpjgwcr2.cartItems
(
    quantity,
    product_id,
    cart_id
)
VALUES
(
    1,
    4,
    1
);

user.id = cart.user_id
cartItems.cart_id = cart.id