-- Database Schema for Tacticus Clan Management
-- Challenge: "Gerenciador Lite" (CodeCraftGenz)

CREATE TABLE IF NOT EXISTS membros (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nick TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL,
    patente TEXT,
    data_ingresso TEXT,
    status TEXT -- Mantive o status pois estava na instrução original, mas adicionei os novos campos.
);

-- Seed Data (5 initial members from Warhammer Lore)
INSERT INTO membros (nick, email, patente, data_ingresso, status) VALUES 
('Loken', 'loken@clan.warhammer.br', 'Capitão (10th Company)', '2024-01-10', 'Ativo'),
('Sigismund', 'sigismund@clan.warhammer.br', 'First Captain', '2024-02-15', 'Em Missão'),
('Abaddon', 'ezekyle@clan.warhammer.br', 'First Captain', '2023-12-01', 'Inativo'),
('Garro', 'garro@clan.warhammer.br', 'Battle-Brother', '2024-03-20', 'Ativo'),
('Torgaddon', 'torgaddon@clan.warhammer.br', 'Capitão (2nd Company)', '2024-02-28', 'Em Missão');
