var tailles = document.getElementsByClassName('taille');
for (var i = 0; i < tailles.length; ++i) {
    var item = tailles[i];  
    var taille = item.getAttribute('taille');
    item.style.width = (parseInt(taille) * 4) + 'px';
};
race();

function race() {
    let gold = "";
    let silver = "";
    let bronze = "";
    for (var i = 0; i < tailles.length; ++i) {
        var randomNumber = Math.random() * 50;
        var item = tailles[i];  
        var width = item.style.width;
        var currentWidth = width.substr(0,width.length-1);
        var windowWidth = window.innerWidth;
        if (windowWidth > 1000){
            
        }
        currentWidth = currentWidth.substr(0,currentWidth.length-1);
        if(parseInt(currentWidth) < 1000){
            item.style.width = (parseInt(width) + randomNumber) + 'px';
        } else {
            if(gold == ""){
                gold = item;
                gold.classList.add("gold");
            } else if (silver == "") {
                silver = item;
                silver.classList.remove("gold");
                silver.classList.add("silver");
            } else if (bronze == "") {
                bronze = item;
                bronze.classList.remove("silver");
                bronze.classList.add("bronze");
            }
        }
    }
    if(bronze == ""){
        setTimeout(race, 100);
    }else{
        for (var i = 0; i < tailles.length; ++i) {
            var item = tailles[i];  
            item.classList.add("end");
        };
        setTimeout(function() {
            var scoreboard = document.getElementById('scoreboard');
            scoreboard.style.width = '30%';
            var raceContainer = document.getElementById('taille_container');
            raceContainer.style.width = '70%';
        }, 500);
        setTimeout(function(){
            var podium_container = document.getElementById('podium_container');
            podium_container.style.marginRight = 0;
            var gold_podium = document.getElementById('gold_podium');
            gold_podium.style.height = '200px';
            var silver_podium = document.getElementById('silver_podium');
            silver_podium.style.height = '160px';
            var bronze_podium = document.getElementById('bronze_podium');
            bronze_podium.style.height = '120px';

            var gold_winner = document.getElementById('gold_winner');
            gold_winner.innerHTML = gold.getAttribute('name');
            var silver_winner = document.getElementById('silver_winner');
            silver_winner.innerHTML = silver.getAttribute('name');
            var bronze_winner = document.getElementById('bronze_winner');
            bronze_winner.innerHTML = bronze.getAttribute('name');
        }, 1000);
        setTimeout(function(){
            var silver_winner = document.getElementById('silver_winner');
            var bronze_winner = document.getElementById('bronze_winner');
            var gold_winner = document.getElementById('gold_winner');
            gold_winner.style.marginTop = 0;
            silver_winner.style.marginTop = 0;
            bronze_winner.style.marginTop = 0;

            for (var i = 0; i < tailles.length; ++i) {
                var item = tailles[i];
                var ItemName = item.getAttribute('name');
                var ItemSize = item.style.width;
                ItemSize = ItemSize.substr(0,ItemSize.length-1);
                ItemSize = ItemSize.substr(0,ItemSize.length-1);
                addElement(ItemName, ItemSize);
            }
        }, 1500);
    }
};

function addElement (nameB2, Size) {
    // crée un nouvel élément div
    var newDiv = document.createElement("p");
    // et lui donne un peu de contenu
    var newContent = document.createTextNode(nameB2 + ' : ' + Size);
    // ajoute le nœud texte au nouveau div créé
    newDiv.appendChild(newContent);

    var currentDiv = document.getElementById('rank');
    currentDiv.appendChild(newDiv);
    
    // ajoute le nouvel élément créé et son contenu dans le DOM
  }