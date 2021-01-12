<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <?php 

    $fréros =  ['Peyo', 'Brice', 'Samuel', 'Romain', 'Etienne', 'Léo', 'Julien', 'Clovis', 'Emmeryck', 'Thomas S', 'Thomas V', 'Tom', 'Noah', 'Valentin', 'Quentin', 'Vincent'];
    $classement = [];

    // ON ATTRIBUE UNE VALEUR RANDOM
    foreach($fréros as $fréro) {
        $classement[] = ['name' => $fréro, 'bite' => rand(2, 20)];
    };

    ?>
    <div id="scoreboard">
        <div class="title">
        <h1>SCOREBOARD</h1>
        <h3>WORLD CHAMPIONSHIP</h3>
        </div>
        <section id="podium_container">
            <div id="silver_podium" class="podium"><p id="silver_winner"></p></div>
            <div id="gold_podium" class="podium"><p id="gold_winner"></p></div>
            <div id="bronze_podium" class="podium"><p id="bronze_winner"></p></div>
        </section>
        <div id="rank">

        </div>
    </div>
    <div id='taille_container'>
    <?php

    // ON DISPLAY UNE DIV POUR CHAQUE ELEVE
    foreach($classement as $B2){
        ?>
            <div class="b2_container taille" taille="5" name="<?= $B2['name'] ?>">
                <p><?= $B2['name'] ?></p>
                <p class="taille_value"><?= $B2['bite'] ?> cm</p>
                <div class="gland"></div>
            </div>
        <?php
    }
    ?>
    </div>
    <script src="script.js"></script>
</body>
</html>