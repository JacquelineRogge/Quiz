DROP TABLE IF EXISTS QuizQuestion;
DROP TABLE IF EXISTS Options;
DROP TABLE IF EXISTS Quiz;
DROP TABLE IF EXISTS Question;

CREATE TABLE Quiz(
QuizID int AUTO_INCREMENT PRIMARY KEY,
Titre varchar(50)
);

CREATE TABLE Question(
QuestionID int AUTO_INCREMENT PRIMARY KEY,
Enonce varchar(400),
Difficulte varchar(50)
);

CREATE TABLE Options(
OptionID int AUTO_INCREMENT PRIMARY KEY,
texte varchar(255),
EstVrai BIT NOT NULL,
QuestionID int,
FOREIGN KEY (QuestionID) REFERENCES Question(QuestionID)
);
CREATE TABLE QuizQuestion(
QuestionID int,
QuizID int,
SelectedOptionID int,
PRIMARY KEY (QuestionID, QuizID),
FOREIGN KEY (QuestionID) REFERENCES Question(QuestionID),
FOREIGN KEY (QuizID) REFERENCES Quiz(QuizID)
);



INSERT INTO Question(Enonce, Difficulte)
VALUES('De quel forme est la planéte terre?', 'Facile'),('Quel est le plus grand océan?', 'Moyen'),('Quelle est la capitale de la Mozambique?', 'Difficile'),
('La définition de tuer est: mettre à mort!', 'Facile'),('Que donne 4*(2-3)?', 'Moyen'),('Qu''est-ce qu''un Reblochon?', 'Difficile'),
('Qu''est-ce qu''une fourmis?', 'Facile'),('Qui est l''auteur de la trilogie des fourmis?', 'Moyen'),('Qui a gagné Drag Race Canada?', 'Difficile'),
('La soie dentaire est-elle bonne pour la santé des gencives?', 'Facile'),('Une couronne dentaire est une procédure visant à ...?', 'Moyen'),('Le nom du dentiste Président(e) de l''ordre des dentistes du Québec?', 'Difficile'),
('Le panneau de signalisation stop veux dire?', 'Facile'),('Le panneaux de signalisation triangle rouge et blanc qui pointe vers le bas veux dire ...?', 'Moyen'),('Dans un carrefour giratoire qui a priorité?', 'Difficile'),
('Jujiro Matsuda a fondé Tesla?', 'Facile'),('Qui est le fondateur de GM', 'Moyen'),('Quel est le modéle de la voiture emblématique de James Bond?', 'Difficile'),
('Combien de doigts un être humain possède?', 'Facile'),('Quel est l''organe le plus gros/long du corps humain?', 'Moyen'),('Qu''est-ce que le pemphigoéde bulbeux?', 'Difficile'),
('L''industrie du jeux vidéo est une industrie de plusieurs millards de dollards?', 'Facile'),('World of Warcraft a été lancé en quelle année?', 'Moyen'),('Ou est basé la compagnie responsable de Path of Exile?', 'Difficile'),
('L''eau est non essentielle à la survie de l''être humain?', 'Facile'),('Lequel des poissons suivant n''est pas un poisson d''eau douce?', 'Moyen'),('La planète est recouverte à combien de pourcent d''eau?', 'Difficile'),
('Le soccer se joue sur la glace?', 'Facile'),('Quel est le meilleur niveau d''intensité cardiaque pour bréler des graisses?', 'Moyen'),('Première équipe a avoir gravi l''Everest?', 'Difficile');

INSERT INTO Options(texte, EstVrai, QuestionID)
VALUES('Octagonal', 0, 1),('Sphérique',1, 1),('Cubique', 0, 1),
('L''océan Pacifique',1, 2),('L''océan Atlantique', 0, 2),('L''océan Indien', 0, 2),('L''océan Arctique', 0, 2),
('Bagota', 0, 3),('Pretoria', 0, 3),('Maputo', 1, 3),('Oslo', 0, 3),
('Vrai', 1, 4),('Faux', 0, 4),
('-4', 1, 5),('5', 0, 5),('0', 0, 5),('infini', 0, 5),
('Une personne imbécile', 0, 6),('Un fromage', 1, 6),('Un outil de meuniserie', 0, 6),
('Une araignée', 0, 7),('Un insecte', 1, 7),('Un mille pattes', 0, 7),
('Olivier Norek', 0, 8),('Albert Camus', 0, 8),('Bernard Webber', 1, 8),
('Priyanka', 1, 9),('Rita Baga', 0, 9),('Scarlett Bobo', 0, 9),
('Vrai', 1, 10),('Faux', 0, 10),
('Controler le parodonte', 1, 11),('Recouvrir la partie visible de la dent avec de la porcelaine', 0, 11),('Remplacer une dent manquante', 0, 11),
('Dr Barry Dolman', 0, 12),('Dre Christine Labrecque', 0, 12),('Dr Guy Lafrance', 1, 12),
('Arrêter seulement si on pieton traverse', 0, 13),('Ralentir puis continuer',0, 13),('Arrêt obligatoire avec immobilisation du véhicule', 1, 13),
('Cedez le passage aux véhicules dans l''autre voie',1, 14),('Deversement de produit toxic possible', 0, 14),('Feux d''arret bientét', 0, 14),('Traverse de piéton', 0, 14),
('La voiture qui n''est pas encore engagée', 0, 15),('Les voitures déjà engagée', 1, 15),('Les vélos', 0, 15),('Les piétons', 0, 15),
('Vrai', 0, 16),('Faux', 1, 16),
('Louis Chevrollet', 0, 17),('Jujiro Matsuda', 0, 17),('William Crapo Durant', 1, 17),('Kiichiro Toyoda', 0, 17),
('Bentley A500', 0, 18),('Aston Martin DB5', 1, 18),('Citroén 2CV', 0, 18),
('8', 0, 19),('10', 1, 19),('12', 0, 19),
('La peau', 1, 20),('L''intestin gréle', 0, 20),('le système nerveux', 0, 20),
('Une maladie auto-immue qui s''attaque aux muqueses', 1, 21),('Une maladie qui créé des bulles de liquide dans la région céphalo-rachidienne', 0, 21),('Des excroissances de peau au niveau des partie génitale', 0, 21),
('Vrai', 1, 22),('Faux', 0, 22),
('2004', 1, 23),('2003', 0, 23),('2005', 0, 23),
('Thaéland', 0, 24),('Australie', 0, 24),('Nouvelle-Zélande', 1, 24),
('Vrai', 0, 25),('Faux', 1, 25),
('Le Barbus', 0, 26),('Le Discus', 0, 26),('Le poisson Lion', 1, 26),
('72%', 1, 27),('85%', 0, 27),('89,2%', 0, 27),
('Vrai', 0, 28),('Faux', 1, 28),
('100 à 120 BPM', 0, 29),('160 à 180 BPM', 0, 29),('130 à 140 BMP', 1, 29),
('George Mallory, Green Boots le sherpa Green Boots ', 0, 30),('John Hunt, Edmund Hillary et le Sherpa Tensing Norgay', 1, 30),('Raymond Lambert, Reinhold Messner et le sherpa Nirmal Purja', 0, 30);
