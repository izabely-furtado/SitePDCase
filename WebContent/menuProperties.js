/**
 * 
 */

/*
 * var person = { firstname : "John", lastname : "Doe", age : 50, eyecolor :
 * "blue" };
 * 
 * function teste() { document.getElementById("teste").innerHTML =
 * person.firstname + " is " + person.age + " years old."; }
 * 
 * function teste2() { document.getElementById("teste2").innerHTML = "<h2>Fale
 * Conosco</h2>" + "<br /> <span style='font-weight: bold'>BELO HORIZONTE –
 * MG</span>" + "<br /> <span style='font-weight: bold'>Telefone:</span><span>" + "
 * 31 3505.1940 </span><br /> <span style='font-weight: bold'>Endereço:</span>" + "<span>Alameda
 * da Serra, 891 – sala 708</span><br />Vila da Serra – CEP 34000-000</span>"; }
 * 
 */
function carregaMenu() {
	document.getElementById("menu").innerHTML = 
		"<ul class='nav'>" +
	
		"	<li><a onClick='ativa()' id='emp'  class='about' href='./empresa.html'>Empresa</a></li>   " +
 		"	<li><a onClick='ativa()' id='serv' class='about' href='./servicos.html'>Serviços</a></li> " +
		"	<li><a onClick='ativa()' id='prod' class='about' href='./produtos.html'>Produtos</a></li> " +
		"	<li><a onClick='ativa()' id='cli'  class='about' href='./clientes.html'>Clientes</a></li> " +
		"	<li><a onClick='ativa()' id='cont'  class='about' href='./contato.html'>Contato</a></li> " +
		"	<li class='share twitter'><a title='Follow Me on Twitter' href='https://twitter.com/PDCase' target='_blank'>Follow Me On Twitter</a></li>" +
		"	<li class='share dribbble'><a title='Follow Me on Dribbble'	href='https://www.facebook.com/PD-Case-Inform%C3%A1tica-190166917694155/' target='_blank'>Follow Me On Facebook</a></li>" +
		"	<li class='share xbox last'><a rel='lightbox' title='Game With Me on Xbox Live'>Faça o seu Login</a></li>" +
		
		"</ul>";
}

function carregaRodape() {
	document.getElementById("rodape").innerHTML = 
	"<div id='footer' class='group'>" +
	"<p class='lion'>" +
	"	<img style='padding: 40px;' src='./images/logo_MPS_BR2.png' alt='Nine Lion' />" +
	"</p>" +
	"<p class='copyright'>&copy; Copyright 2016 Izabely Furtado</p>" +
	"<p class='built-on'>" + 
	"	Construído em <a href='http://www.pdcase.com' target='_blank'>PD CASE</a>" +
	"</p>" + 
	"</div>" + 
	
	"<footer id='footer' role='contentinfo' style='color:black'>" +
	"<span class='rodape'>&copy;Copyright 2013 - PD Case Informática - Todos os direitos reservados</span>"
	"<p class='powered-by'></p>"
	"</footer>"
}

function carregaCSS() {
	document.getElementById("css").innerHTML = 
		"<link rel='stylesheet' href='http://www.stylodesign.co.uk/templates/stylodesign/css/normalize.css' type='text/css' media='screen,projection' />" + 
		"<link rel='stylesheet' href='http://www.stylodesign.co.uk/templates/stylodesign/css/styles.php'    type='text/css' media='screen,projection' />" + 
		"<link rel='stylesheet' type='text/css' href='./css/layout2.css' 		media='screen' />" + 
		"<link rel='stylesheet' type='text/css' href='./css/pdbank.css'  		media='screen' />" + 
		"<link rel='stylesheet' type='text/css' href='./css/links.css'   		media='screen' />" + 
		"<link type='text/css' rel='stylesheet' href='./css/magento.css' 		media='all' />"    + 
		"<link rel='stylesheet' type='text/css' href='./css/global.css' 		media='screen' />" + 
		"<link type='text/css' rel='stylesheet' href='./css/magento3.css'		media='all' />"    + 
		"<link type='text/css' rel='stylesheet' href='./css/magento2.css'		media='all' />"    + 
		"<link rel='stylesheet' type='text/css' href='./css/lightboxValores.css'media='screen' />" + 
		"<link rel='stylesheet' type='text/css' href='./css/global.css'			media='screen' />" +
		"<link rel='stylesheet' type='text/css' href='./css/consultoria.css'	media='screen' />";
			
}

/*!-- Google Analytics --*/
var _gaq = _gaq || [];
	_gaq.push([ '_setAccount', 'UA-17278639-1' ]);
	_gaq.push([ '_trackPageview' ]);

	(function() {
		var ga = document.createElement('script');
		ga.type = 'text/javascript';
		ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl'
				: 'http://www')
				+ '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(ga, s);
	})();
/*-- ------------------ --*/
	
	
/*!-- Navegação do Slide  --*/
(function() {

		var menu = $('.menu-navigation-dark');

		menu.slicknav();

		// Mark the clicked item as selected

		menu.on('click', 'a', function() {
			var a = $(this);

			a.siblings().removeClass('selected');
			a.addClass('selected');
		});
	});
/*-- ------------------ --*/


/*
 *  
 */
window.onload = function() {
	carregaMenu();
	carregaRodape();
	teste();
	teste2();
}