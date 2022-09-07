INSERT INTO manufacturer (name)
VALUES
    ('Toyota'),
    ('BMW');

INSERT INTO model (year, name, trim, price, start_mile, manufacturer_id)
VALUES
    (1992, 'Paseo', NULL, 1500, 152000, 1),
    (2004, '330', 'ci', 6000, 133000, 2),
    (2004, '330', 'i', 5500, 122000, 2),
    (2016, '228', 'xi', 22000, 22000, 2);

INSERT INTO specs (color, transmission, end_mileage, model_id)
VALUES
    ('black', 'manual', 600, 174000, 1),
    ('black', 'manual', 3500, 135000, 2),
    ('metalic-blue', 'manual', 3300, 144000, 3),
    ('blue', 'automatic', NULL, NULL, 4);