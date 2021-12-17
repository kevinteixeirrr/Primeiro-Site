var janela1
var janela2
var janela3
var janela4 
var janela5
			
function abrej() {
	var janela1 = open( "Iogurte.html", "_blank" , "width=375,height=475, top=300, left=990") 
			}
function abrej2() {
	var janela2 = open( "IogurtezeroLac.html", "_blank" , "width=375,height=475, top=300, left=990") 
			}
function abrej3() {
	var janela3 = open(  "BalasDeGengibreEMel.html", "_blank" , "width=375,height=475, top=300, left=990") 
			}
function abrej4() {
	var janela4 = open(  "BalasdeMeleAnis.html", "_blank" , "width=375,height=475, top=300, left=990") 
			}
function abrej5() {
	var janela5 = open(  "BarraDeCerealDeMelEGranola.html", "_blank" ,"width=375,height=475, top=300, left=990") 
}


var tabModelos = [
	["", "Vazio", 0],
	["Flores Silvestres", "MelSilvestre100",20.00 ],
	["Eucalipto", "MelEucalipto100", 35.00],
	["Mel laranjeira", "MelLaranja100", 40.00],
	["Extrato", "Propol100", 16.00],
	["Spray", "Spray100", 8.00], ];
		function Mostra(tp, ind) {
		var titulo = document.getElementById("titDes");
		var foto = document.getElementById("imgDes");
		var prec = document.getElementById("prcDes");
		var tipo = ["", "450g","750g","30ml",];
			titulo.innerHTML = "<h3>" 
			+ tabModelos[ind][0]+"<br>"+ tipo[tp] + "</h3><br/>";
			foto.src = "Imagens/" + tabModelos[ind][1] + ".jpg";
			prec.innerHTML = "<br/>Preço: R$ <b><span class='preco'>" +
			tabModelos[ind][2] + ",00</span><b><br>";
}

var numero2
var numero
function verificar1(campo){
	var numero2=campo.value
	if(numero2.length < 8 )
		alert("Celular tem de ter 9 dígitos!")
	
}

function verificar2(campo){
	var numero=campo.value
	if (numero.length<9)
		alert("Telefone tem de ter 8 dígitos") 
			
}

