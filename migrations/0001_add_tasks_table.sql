-- Migration number: 0001    2025-06-19T18:13:02.648Z
CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name TEXT NOT NULL,
    slug TEXT NOT NULL,
    description TEXT NOT NULL,
    cijena REAL NOT NULL,
    materijal TEXT NOT NULL,
    boja TEXT NOT NULL,
    kategorija TEXT NOT NULL,
    dostupna_kolicina INTEGER NOT NULL DEFAULT 0,
    slika_url TEXT
);
