CREATE PROCEDURE get_category_id(
    IN t VARCHAR(255),
    IN tg VARCHAR(255),
    OUT out_id INT)
BEGIN
    SET out_id := (SELECT id FROM categories WHERE title = t AND tg_chat_id = tg);
END;

CREATE PROCEDURE get_taste_id(
    IN t VARCHAR(255))
BEGIN
    SELECT id FROM tastes WHERE title = t;
END;