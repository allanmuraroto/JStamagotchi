var fome = 100;
var higiene = 100;
var sono = 100;
var diversao = 100;
var social = 100;

function Loop(time = 2)
{
    var total = fome+higiene+sono+social+diversao+social;

    if(fome <= 0|| higiene <= 0|| sono <= 0|| diversao <= 0|| social <= 0)
    {
        document.getElementById('pet').src="img/preto.jpg";
        document.getElementById('pet').innerHTML = "Você deixou seu pet morrer, atualize a página";
    }else if(total > 400){
        document.getElementById('pet').src="img/azul.jpg"
    }else if(total > 300){
        document.getElementById('pet').src="img/verde.jpg"
    }else if(total > 200){
        document.getElementById('pet').src="img/cinza.jpg"
    }else if(total > 100){
        document.getElementById('pet').src="img/amarelo.jpg"
    }else if(total > 50){
        document.getElementById('pet').src="img/vermelho.jpg"
    }


    fome = fome - parseInt(time);
    higiene = higiene - parseInt(time);
    sono = sono - parseInt(time);
    diversao = diversao - parseInt(time);
    social = social - parseInt(time);

    document.getElementById('fome').innerHTML = fome + '%';
    document.getElementById('higiene').innerHTML = higiene + '%';
    document.getElementById('sono').innerHTML = sono + '%';
    document.getElementById('diversao').innerHTML = diversao + '%';
    document.getElementById('social').innerHTML = social + '%';
    
}

function start()
{
    var temporizador = setInterval(Loop, 1000)
}

function Comer()
{
    fome = 100;
    document.getElementById('fome').innerHtml = fome + '%';
    document.getElementById('fome').style.width = fome + 'px';
}

function Banho()
{
    higiene = 100;
    document.getElementById('higiene').innerHtml = higiene + '%';
    document.getElementById('higiene').style.width = higiene + 'px';
}

function Dormir()
{
    sono = 100;
    document.getElementById('sono').innerHtml = sono + '%';
    document.getElementById('sono').style.width = sono + 'px';
}

function Brincar()
{
    diversao = 100;
    document.getElementById('diversao').innerHtml = diversao + '%';
    document.getElementById('diversao').style.width = diversao + 'px';
}

function Conversar()
{
    social = 100;
    document.getElementById('social').innerHtml = social + '%';
    document.getElementById('social').style.width = social + 'px';
}


start()