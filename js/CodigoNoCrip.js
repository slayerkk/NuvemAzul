
games = shuffleArray(games);
function shuffleArray(arr) {
    // Loop em todos os elementos
for (let i = arr.length - 1; i > 0; i--) {
        // Escolhendo elemento aleatório
    const j = Math.floor(Math.random() * (i + 1));
    // Reposicionando elemento
    [arr[i], arr[j]] = [arr[j], arr[i]];
}
// Retornando array com aleatoriedade
return arr;
}

function index() {
    var numero = 0;
    var vari = 0;
    var vari2 = 0;
    var vari3 = 0;
    games.forEach((game) => {
        if (game.Nome != "" && game.Dataupload != "") {

            var dataInicio = new Date(game.Dataupload);
            var dataFim = new Date(Date.now());
            var diffMilissegundos = dataFim - dataInicio;
            var diffSegundos = diffMilissegundos / 1000;
            var diffMinutos = diffSegundos / 60;
            var diffHoras = diffMinutos / 60;
            var diffDias = diffHoras / 24;
            var diffMeses = diffDias / 30;
            var diffAnos = diffMeses /12;
            var calc;

            if(Math.round(diffDias) > "31" ){
                if(Math.round(diffMeses) == "1" ){
                    // alert(diffMeses)
                    calc = Math.round(diffMeses) + " mes"; 
                }
                else{
                    if(Math.round(diffMeses) >= 12){
                        if(Math.round(diffAnos) == 1){
                        calc = Math.round(diffAnos) + " ano"; 
                    }else{
                        calc = Math.round(diffAnos) + " anos"; 
                        
                    }
                    }
                    else{
                        calc = Math.round(diffMeses) + " meses"; 
                    }
                }
            }
            else{
                if(Math.round(diffDias) == 1){
                    calc = Math.round(diffDias) + " dia"; 
                }
                else{
                    calc = Math.round(diffDias) + " dias"; 
                }
            }
            

            var info = "<div class='container'>" +
                " <a id='cubeLink' href='gameinfo.html?gid=" +game.id+"'>" +
                "<img id='cube' src='https://ia903401.us.archive.org/3/items/red_dead_redeption2-unofficial_ost-2019/Cover_thumb.jpg?cnt=0' alt='image-equilibrium' border='0'>" +
                "</a>" +
                "<a href='gameinfo.html?gid=" +game.id+"' id='header'>" + game.Nome + "</a>" +
                "<p id='description'>" + game.brebedesc + "</p>" +
                "<div id='InfoDays'>" +
                "<div id='InfoTime'>" +
                "<svg width='17' height='17' xmlns='http://www.w3.org/2000/svg'>" +
                "<path d='M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z' fill='#8BACD9' />" +
                "</svg>" +
                "<p id='days'>Postado há " + calc +"</p>" +
                "</div>" +
                "</div>" +
                "<div id='line'></div>" +
                "<a href='gameinfo.html?gid=" +game.id+"' class='DownButton'>" +
                "Download" +
                "</a>" +
                "</div>";

            if(vari != 20 ){
                $('#loadAllGames').append(info);
                vari = vari + 1;
                 
            }

            if(vari2 != 20){
                if (game.plataforma == "PC") {
                    $('#LoadPcGame').append(info);
                    vari2 = vari2 +1;
                }
            }

            if(vari3 != 20){
                if (game.plataforma == "MOBILE") {
                    $('#LoadAndroidGame').append(info);
                    vari3 = vari3 +1;
                }
          }

          if (vari == 20 && vari2 == 20 && vari3==20){
            return false;
          }
    }});
}

function loadgames(data) {
    var gameplat = data;
    
   var numero = 0;
    games.forEach((game) => {
        if (numero == 20) {
            return false;
          }
        if (game.Nome != "" && game.Dataupload != "") {
            if (game.plataforma == gameplat) {

                var dataInicio = new Date(game.Dataupload);
                var dataFim = new Date(Date.now());
                var diffMilissegundos = dataFim - dataInicio;
                var diffSegundos = diffMilissegundos / 1000;
                var diffMinutos = diffSegundos / 60;
                var diffHoras = diffMinutos / 60;
                var diffDias = diffHoras / 24;
                var diffMeses = diffDias / 30;
                var diffAnos = diffMeses /12;
                var calc;
            
                if(Math.round(diffDias) > "31" ){
                    if(Math.round(diffMeses) == "1" ){
                        // alert(diffMeses)
                        calc = Math.round(diffMeses) + " mes"; 
                    }
                    else{
                        if(Math.round(diffMeses) >= 12){
                            if(Math.round(diffAnos) == 1){
                            calc = Math.round(diffAnos) + " ano"; 
                        }else{
                            calc = Math.round(diffAnos) + " anos"; 
                            
                        }
                        }
                        else{
                            calc = Math.round(diffMeses) + " meses"; 
                        }
                    }
                }
                else{
                    if(Math.round(diffDias) == 1){
                        calc = Math.round(diffDias) + " dia"; 
                    }
                    else{
                        calc = Math.round(diffDias) + " dias"; 
                    }
                }

                var info = "<div class='container'>" +
                    " <a id='cubeLink' href='gameinfo.html?gid=" +game.id+"'>" +
                    "<img id='cube' src='imagens/teste.jpg' alt='image-equilibrium' border='0'>" +
                    "</a>" +
                    "<a href='gameinfo.html?gid=" +game.id+"' id='header'>" + game.Nome + "</a>" +
                    "<p id='description'>" + game.brebedesc + "</p>" +
                    "<div id='InfoDays'>" +
                    "<div id='InfoTime'>" +
                    "<svg width='17' height='17' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path d='M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z' fill='#8BACD9' />" +
                    "</svg>" +
                    "<p id='days'>Postado há " + calc + "</p>" +
                    "</div>" +
                    "</div>" +
                    "<div id='line'></div>" +
                    "<a href='gameinfo.html?gid=" +game.id+"' class='DownButton'>" +
                    "Download" +
                    "</a>" +
                    "</div>";
                    $('#load').append(info);
            }
        }

    });
}

function loadInfo(data){
    const found = games.find(x => x.id === data);
    
    if(found == null){
        window.location.href = "index.html";
    }
    document.getElementById('gameName').innerHTML = found.Nome;
    document.getElementById('gameInfo').innerHTML = found.desc;
    document.getElementById('reqmin').innerHTML = found.RequesitosMinimos;
    document.getElementById('reqrecu').innerHTML = found.RequesitosRecomendados;

    if(found.mediafire != ""){
       var mediafire = "<a href='"+found.mediafire+"' class='DownloadBT MediaFire' style='vertical-align:middle'><span class='mf'>Download </span></a>"
        $('#downloadlink').append(mediafire);
    }
    if(found.drive != ""){
        var drive = "<a href='"+found.drive+"' class='DownloadBT Google' style='vertical-align:middle'><span class='gd'>Download </span></a>"
        $('#downloadlink').append(drive);

    }
    if(found.mega != ""){
        var mega = "<a href='"+found.mega+"' class='DownloadBT Mega' style='vertical-align:middle'><span class='mg'>Download </span></a>"
        $('#downloadlink').append(mega);

    }
    var numero = 0;
    games.forEach((game) => {
        if (numero == 20) {
            return false;
          }
        if (game.Nome != "" && game.Dataupload != "") {

            var dataInicio = new Date(game.Dataupload);
            var dataFim = new Date(Date.now());
            var diffMilissegundos = dataFim - dataInicio;
            var diffSegundos = diffMilissegundos / 1000;
            var diffMinutos = diffSegundos / 60;
            var diffHoras = diffMinutos / 60;
            var diffDias = diffHoras / 24;
            var diffMeses = diffDias / 30;
            var diffAnos = diffMeses /12;
            var calc;

            if(Math.round(diffDias) > "31" ){
                if(Math.round(diffMeses) == "1" ){
                    // alert(diffMeses)
                    calc = Math.round(diffMeses) + " mes"; 
                }
                else{
                    if(Math.round(diffMeses) >= 12){
                        if(Math.round(diffAnos) == 1){
                        calc = Math.round(diffAnos) + " ano"; 
                    }else{
                        calc = Math.round(diffAnos) + " anos"; 
                        
                    }
                    }
                    else{
                        calc = Math.round(diffMeses) + " meses"; 
                    }
                }
            }
            else{
                if(Math.round(diffDias) == 1){
                    calc = Math.round(diffDias) + " dia"; 
                }
                else{
                    calc = Math.round(diffDias) + " dias"; 
                }
            }
            

            var info = "<div class='container'>" +
                " <a id='cubeLink' href='gameinfo.html?gid=" +game.id+"'>" +
                "<img id='cube' src='https://ia903401.us.archive.org/3/items/red_dead_redeption2-unofficial_ost-2019/Cover_thumb.jpg?cnt=0' alt='image-equilibrium' border='0'>" +
                "</a>" +
                "<a href='gameinfo.html?gid=" +game.id+"' id='header'>" + game.Nome + "</a>" +
                "<p id='description'>" + game.brebedesc + "</p>" +
                "<div id='InfoDays'>" +
                "<div id='InfoTime'>" +
                "<svg width='17' height='17' xmlns='http://www.w3.org/2000/svg'>" +
                "<path d='M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z' fill='#8BACD9' />" +
                "</svg>" +
                "<p id='days'>Postado há " + calc +"</p>" +
                "</div>" +
                "</div>" +
                "<div id='line'></div>" +
                "<a href='gameinfo.html?gid=" +game.id+"' class='DownButton'>" +
                "Download" +
                "</a>" +
                "</div>";

            $('#loadsGames').append(info);
        }
        numero = numero +1;
        
    });
    // alert(found.RequesitosMinimos);

    
}



if (document.addEventListener) {
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    return false;
});
} else { //Versões antigas do IE
document.attachEvent("oncontextmenu", function(e) {
    e = e || window.event;
    e.returnValue = false;
    return false;
});
}

//https://obfuscator.io/#output
