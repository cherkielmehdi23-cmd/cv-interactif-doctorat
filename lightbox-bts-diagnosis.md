# Diagnostic de l’aperçu BTS

La capture fournie montre la lightbox ouverte sur **« Brevet de technicien supérieur — Gestion des entreprises »**. Les commandes de zoom sont présentes et le conteneur de lightbox est correct, mais l’image du diplôme est affichée tournée d’un quart de tour dans le sens horaire. Le défaut concerne donc l’asset prévisualisé, et non le cadrage ou les contrôles de zoom de la lightbox.

Les quatre zones de la capture confirment que le contenu du diplôme est latéralement orienté sur toute sa surface. La correction doit consister à publier une copie publique tournée de 90° vers la gauche par rapport à l’asset actuellement servi pour `ACA-04-BTS-DIPLOMA`, puis à réviser le lien de prévisualisation et de téléchargement dans le catalogue de preuves.

La copie locale `safe-aca-04-bts-diploma.jpg` et celle téléchargée depuis `/manus-storage/safe-aca-04-bts-diploma_21121c5c.jpg` sont désormais identiques (même empreinte SHA-256) et lisibles dans le bon sens. La capture utilisateur peut donc provenir d’une référence ou d’un cache antérieur. La correction retenue consiste à publier la même copie sous un nouveau nom de fichier et à relier explicitement la galerie et la lightbox à cette nouvelle URL, afin de forcer le chargement du bon aperçu.

## Vérification de l’ensemble académique

La vérification de la lightbox au zoom initial confirme que les aperçus `ACA-01` à `ACA-07` sont lisibles dans le bon sens. L’aperçu `ACA-08-BAC-RECORD` (relevé de notes du baccalauréat) demeure inversé de 180°. Il doit recevoir le même correctif de publication sous une nouvelle URL que la pièce BTS, avant la validation finale de l’ensemble académique.

La copie `ACA-08` redressée a été contrôlée dans la lightbox : le titre, le relevé et les signatures sont désormais orientés normalement, avec les zones personnelles toujours floutées. Les huit aperçus académiques peuvent donc être consultés au zoom initial dans le bon sens. Le registre est désormais rendu sous forme de groupes annuels, tout en conservant ses filtres.
