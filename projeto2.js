function verificar(){
nomelivro=document.getElementById('nome').value;
if(nomelivro.trim()==0){
    document.getElementById('permissão').innerText=`digite algo ...com letras`
}  else{
	document.getElementById('permissão').innerText=`vc está pedindo o livro ${nomelivro}`
}
}
 

function changeBackgroundImage(bgImage) {
	  document.body.style.backgroundImage = "url(" + bgImage + ")";
	}
	function escolhas(){
	var d=document.getElementById('ll').value;
switch(d){
case "1": document.getElementById('mostrar').innerText='[TERROR]\nHorror em Amityville (Jay Anson) |  O Desfiladeiro do Medo (Clive Barker)| As Ruínas (Scott Smith)| O Chamado de Cthulhu (H.P Lovecraft)| A Profecia (David Seltzer) | O Bebê de Rosemary (Ira Levin) | O Exorcista (William Peter Blatty) | A Coisa (Stephen King) | O Iluminado (Stephen King) | Histórias Extraordinárias (Edgar Allan Poe) | Os Mortos Vivos (Peter Straub) | O Cemitério (Stephen King) | Evangelho de Sangue (Clive Barker) | O Colecionador (John Fowler)';
break;
case "2": document.getElementById('mostrar').innerText='[Mistério]\n A Garota no Trem, Paula Hawkins | A Mulher na Janela, A. J. Finn | A Outra Face, Sheldon Sidney| Assassinatos na Rua Morgue,Edgar Allan Poe | Joyland, Stephen King | Morte no Nilo, Agatha Christie | Sherlock Holmes – Um Estudo Em Vermelho, Sir Arthur Conan Doyle';
break;
case "3": document.getElementById('mostrar').innerText='[Programação]\nPadrões de Projetos | O Programador Apaixonado | Algoritmos e estruturas de dados | Código Limpo | Como Ser um Programador Melhor: um manual para programadores que se importam com código | Expressões Regulares: Uma abordagem divertida | Domain Driven Design: Atacando as complexidades no coração do software | Java®: Como programar | Javascript e Jquery: desenvolvimento de interfaces web interativas';
break;
case "4": document.getElementById('mostrar').innerText='[Ficção Científica]\n As Crônicas Marcianas, de Ray Bradbury |Eu, Robô, de Isaac Asimov | Saga Uma Odisseia no Espaço, de Arthur C | Saga O Guia do Mochileiro das Galáxias, de Douglas Adams | Encontro com Rama, de Arthur C | Contos de Philip K | Vinte Mil Léguas Submarinas, de Julio Verne';
break;
}	
	
} 