let display = document.getElementById('display');

let displayStatus = {
	ligado: true
}
//Iniciar com o valor igual a 0.
display.value = "0";
operadores = "+-/*"


function botaoNumerico(botao) {
	
	if(displayStatus.ligado) {
		if(display.value == "0") {
			display.value = botao.innerHTML;
		} else {
			display.value += botao.innerHTML;
		}
	}
}

function botaoOperador(botao) {
	if(displayStatus.ligado) {

		if(display.value.substr(-1) == "+"|| display.value.substr(-1) == "-"||
		display.value.substr(-1) == "/"|| display.value.substr(-1) == "x"){
			display.value = display.value.slice(0, -1);
			display.value += "" + botao.innerHTML + "";
		} 
		else{
			display.value += "" + botao.innerHTML + "";
		}
		
	}	
}

function temPonto(){
	let existePonto = false;
	for(let i = display.value.length - 1; display.value[i] != "+" && display.value[i] != "-" &&
	display.value[i] != "/" && display.value[i] != "x" && i >= 0; i--){
		if (display.value[i] == "."){
			existePonto = true;

		}
	}
	return existePonto;
}
function adicionaPonto(botao) {
	if(displayStatus.ligado){
		let existePonto = temPonto()
		if (!existePonto) {
			display.value += "" + botao.innerHTML + "";
		} 
		/*
		if(display.value.substr(-1) == "."){
			display.value = display.value.slice(0, -1);
			display.value += "" + botao.innerHTML + "";
		} 	
		else{
			display.value += "" + botao.innerHTML + "";
		}
		*/
	}
	

	
}

function botaoIgual() {
	if(displayStatus.ligado) {
		let resultado = eval(display.value.replace(/[x]/g, "*"));
		display.value = resultado;
	}
}

function botaoLigaDesliga() {
	display.value = " ";
	if(displayStatus.ligado) {
		displayStatus.ligado = false;
	} else {
		displayStatus.ligado = true;
		display.value = "0";
	}
}
function resete(){
	if(displayStatus.ligado) {
		display.value ="0";
	}

}

function apagar(){
	if(displayStatus.ligado) {
		display.value = display.value.slice(0, -1);
		if (display.value == "") {
			display.value = "0"
		}
	}
}

function raiz(){
	if(displayStatus.ligado) {
		display.value = Math.sqrt(display.value);
	}	
}

function elevaQuadrado(){
	if(displayStatus.ligado) {
		display.value = Math.pow(display.value, 2);
	}	
}
function umsobreX(){
	if(displayStatus.ligado) {
		display.value = 1 / display.value;
	}	
}

function porcentagem(){
	if(displayStatus.ligado) {
		display.value = display.value * (display.value / 100) ;
	}
}
function maisouMenos(){
	if(displayStatus.ligado) {
		if(display.value < 0){
			display.value = display.value * (-1);
		}
		else if(display.value > 0){
			display.value = display.value * (-1);
		}
	}
}