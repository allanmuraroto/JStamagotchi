/* alert('jacaré com fome'); */

var fome = 100;
var higiene = 100;
var sono = 100;
var diversao = 100;
var social = 100;

function Loop(time = 2)
{
    var total = fome+higiene+sono+social+diversao+social;

    if(fome <= 0|| higiente <= 0|| sono <= 0|| diversao <= 0|| social <= 0)
    {
        document.getElementById('pet').src="img/preto.jpg";
        document.getElementById('pet').innerHTML = "Você deixou seu pet morrer, atualize a página";
    }else if(total > 400){
        document.getElementById('pet').src="img/azul.jpg"
    }


}