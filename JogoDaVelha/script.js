var jogadas = 1
var matriz_jogo = Array(3);

matriz_jogo['a'] = new Array(3).fill(0);
matriz_jogo['b'] = new Array(3).fill(0);
matriz_jogo['c'] = new Array(3).fill(0);


$(document).ready(function(){
    $('#play_game').click(function(){
        if($('#nomePlayer1').val()==''){
            alert('Nome do jogador 1 não foi preenchido');
            return false;
        }
        if($('#nomePlayer2').val()==''){
            alert('Nome do jogador 2 não foi preenchido');
            return false;
        }
        $('#nome_jogador1').html($('#nomePlayer1').val());
        $('#nome_jogador2').html($('#nomePlayer2').val());
        hide("pagina_inicial");
        show("tabuleiro");
    });

    $('.jogada').click(function(){
        var id_campo_clicado = this.id;
        $('#'+id_campo_clicado).off();
        clique(id_campo_clicado);
    });

    function clique(id){
        var icone = '';
        var ponto = 0;
        if((jogadas % 2) == 1){
            icone = 'url("x.png")';
            ponto = -1;
        } else {
            icone = 'url("zero.png")';
            ponto = 1;
        }
        jogadas++;
        $('#'+id).css('background-image',icone);
        var linha_coluna = id.split('-');
        matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;
        verifica_combinacao();
    }
    var empate = true;
    function verifica_combinacao(){
        //verifica as linhas horizontais
        var pontos = 0;
        for (let i = 1; i <= 3; i++) {
            pontos = pontos + matriz_jogo['a'][i];
        }
        ganhador(pontos);
        pontos = 0;
        for (let i = 1; i <= 3; i++) {
            pontos = pontos + matriz_jogo['b'][i];
        }
        ganhador(pontos);
        pontos = 0;
        for (let i = 1; i <= 3; i++) {
            pontos = pontos + matriz_jogo['c'][i];
        }
        ganhador(pontos);
        //verifica as linhas verticais
        for (let l = 1; l <= 3; l++) {
            pontos = 0;
            pontos += matriz_jogo['a'][l];
            pontos += matriz_jogo['b'][l];
            pontos += matriz_jogo['c'][l];
            ganhador(pontos);
        }
        //verificar as linhas diagonais
        pontos = 0;
        pontos = matriz_jogo['a'][1] + matriz_jogo['b'][2] + matriz_jogo['c'][3];
        ganhador(pontos);
        pontos = 0;
        pontos = matriz_jogo['a'][3] + matriz_jogo['b'][2] + matriz_jogo['c'][1];
        ganhador(pontos);
        if(jogadas == 10 && empate){
            alert("Empate!");
            $('.jogada').off();
        }
    }
    function ganhador(pontos){
        if(pontos == -3){
            var jogador_1 = $('#nomePlayer1').val();
            alert(jogador_1 + ' é o vencedor');
            empate = false;
            $('.jogada').off();
        } else if(pontos == 3){
            var jogador_2 = $('#nomePlayer2').val();
            alert(jogador_2 + ' é o vencedor');
            empate = false;
            $('.jogada').off();
        }
    }
});

function hide(id){
    let item = document.getElementById(id);
    item.classList.add("d-none");
}

function show(id){
    let item = document.getElementById(id);
    item.classList.remove("d-none");
}

function restart(){
    window.location.reload();
}