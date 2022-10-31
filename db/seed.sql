INSERT INTO manufacturer (name)
VALUES
    ('Toyota'),
    ('BMW');

INSERT INTO model (year, name, trim, package, manufacturer_id)
VALUES
    (1992, 'Paseo', NULL, NULL, 1),
    (2004, '330', 'ci', 'Premium', 2),
    (2004, '330', 'i', 'Sports', 2),
    (2016, '228', 'xi', 'Sports', 2);

INSERT INTO specs (color, transmission, bought, start_mile, sold, end_mileage, model_id)
VALUES
    ('black', 'manual', 1500, 152000, 600, 174000, 1),
    ('black', 'manual', 6000, 133000, 3500, 135000, 2),
    ('metalic-blue', 'manual', 5500, 122000, 3300, 144000, 3),
    ('blue', 'automatic', 22000, 22000, NULL, NULL, 4);