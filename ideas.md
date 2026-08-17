# Refonte visuelle — Research IDE

## Trois directions envisagées

### 1. Research IDE

**Très brève introduction :** Le dossier devient une interface de développement haut de gamme : explorateur de fichiers, onglets, zones de code, états de preuve et command bar. Le ton reste institutionnel, mais l’expérience paraît contemporaine et technique.

**Probabilité :** 0,04

### 2. Journal scientifique néo-brutaliste

**Très brève introduction :** Une mise en page typographique très contrastée, faite de grandes références, encadrés et impression de publication de laboratoire.

**Probabilité :** 0,08

### 3. Console de recherche immersive

**Très brève introduction :** Une interface très sombre, dense et cinématique, axée sur les données, les graphes et des interactions exploratoires.

**Probabilité :** 0,03

---

## Direction retenue : Research IDE

### Mouvement de design

Un croisement entre une **interface d’IDE contemporain**, un portail de documentation open source et une console de recherche. La nouvelle direction ne cherche pas à imiter un terminal décoratif : elle applique les conventions utiles des outils de développement à la lecture académique.

### Principes fondamentaux

1. Les rubriques fonctionnent comme des fichiers ou modules, avec une navigation de type explorateur et des états immédiatement lisibles.
2. Chaque preuve devient une entrée de documentation avec identifiant, statut, source, aperçu et accès.
3. L’interface est sombre et structurée, mais le texte long est posé dans des surfaces profondes à contraste élevé pour préserver la lecture.
4. Les éléments visuels servent la navigation : pas de décoration de code fictif, pas de fragments techniques sans rôle documentaire.

### Philosophie de couleur

Le **noir graphite** donne la base d’un outil de travail, le **bleu nuit** organise les panneaux, le **cyan électrique #28D7C8** signale les liens et preuves disponibles, et un **orange ambré** isole les éléments à vérifier. Les statuts privés restent discrets et verrouillés.

### Paradigme de mise en page

Une fenêtre d’application : barre supérieure compacte, explorateur latéral dense, zone de travail centrale et panneaux de métadonnées. Les pages ne ressemblent plus à des sections de brochure ; elles deviennent des vues de documentation.

### Éléments signatures

1. Des barres de fenêtre avec points de contrôle et identifiants de fichiers.
2. Des badges de statut inspirés de l’état d’un dépôt : `VERIFIED`, `CONTROLLED`, `REVIEW` et `PRIVATE`.
3. Des en-têtes de page annotés comme des fichiers de configuration : `// academic-record.md`, `// internships.log`.

### Philosophie d’interaction

Les parcours sont explorés comme une base de connaissances : ouvrir une pièce, développer une source, changer de langue, parcourir les pages. Les interactions sont fonctionnelles, courtes et accessibles au clavier.

### Animation

Les apparitions reposent sur des fondus et translations de 120 à 180 ms. Les commandes, onglets et badges répondent avec une précision de logiciel professionnel. Les mouvements sont désactivés si le système le demande.

### Système typographique

Les titres, identifiants et états utilisent une pile **monospace technique** ; les paragraphes emploient une sans-serif lisible pour ne pas fatiguer. L’arabe utilise Noto Sans Arabic et conserve une structure RTL explicite.

### Essence de marque

**Un dossier doctoral présenté comme une documentation de recherche vérifiable, pour des comités qui évaluent autant la méthode que le parcours.**

Personnalité : **technique**, **rigoureuse**, **contemporaine**.

### Voix de marque

Les formulations ressemblent à une documentation de projet, jamais à une publicité.

Exemples : « Ouvrir les sources et le statut de vérification. »

Exemples : « 9 stages indexés ; justificatifs à compléter. »

### Wordmark et logo

Le monogramme devient une balise de système placée dans un bloc carré, accompagnée du repère `cem/research-profile`. Il reste discret, net et immédiatement identifiable.

### Couleur signature

**Cyan de validation — #28D7C8**, réservé aux actions disponibles et aux sources visualisables.

## Style Decisions

- Les aperçus de pièces sont toujours encadrés comme des fichiers consultables avec une provenance, jamais comme des illustrations de papier décoratives.
- Le monospace porte les chemins, titres, identifiants, compteurs et statuts ; les paragraphes explicatifs restent en sans-serif lisible.
- Les statuts visibles utilisent un vocabulaire fermé et constant : `VERIFIED`, `CONTROLLED`, `REVIEW` et `PRIVATE`.
- Les en-têtes utilisent des chemins d’archive réels et des identifiants de fichier ; aucun décor de code factice ne précède les titres.
- Chaque module affiche une surface de prévisualisation différente, avec un nom de fichier, un type, un statut d’accès et une provenance contextualisée.
- Les compteurs et métriques restent dans des panneaux graphite du workspace ; le cyan ne signale que les actions ou sources disponibles.
