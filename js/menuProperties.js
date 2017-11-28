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

function carregaMenuNovo() {
    document.getElementById("menu").innerHTML = "<div id='dl-menu' class='dl-menuwrapper'>" +
					"<button class='dl-trigger'>Open Menu</button>" +
					"<ul class='dl-menu'>" +
							"<li>" +
								"<a href='./empresa.html'>Empresa</a>" +
								"<ul class='dl-submenu'>" +
									"<li><a href='empresa.html'>Empresa</a></li>" +
									"<li>" +
										"<a href='mpsBR.html'>Missão</a>" +
										"<ul class='dl-submenu'>" +
											"<li><a href='#'>Fornecer soluções de alto valor agregado que contribuam para a competitividade dos nossos clientes em segmentos empresariais onde seja possível aliar o conhecimento de negócio, valorizando-o acima da tecnologia.</a></li>" +
										"</ul>" +
									"</li>" +
									"<li>" +
										"<a href='fabricaSoftware.html'>Valores</a>" +
										"<ul class='dl-submenu'>" +
											"<li><a href='#'>Compromisso com princípios éticos e legais.</a></li>" +
											"<li><a href='#'>Respeito pela individualidade e diversidade das pessoas.</a></li>" +
											"<li><a href='#'>Compromisso com os clientes e responsabilidades assumidas.</a></li>" +
											"<li><a href='#'>Incentivo à inovação e ao empreendedorismo interno.</a></li>" +
											"<li><a href='#'>Transparência e eficiência operacional.</a></li>" +
											"<li><a href='#'>Responsabilidade social.</a></li>" +
										"</ul>" +
									"</li>" +
									"<li>" +
									"<a href='gestaoProcessos.html'>Negócios</a>" +
									"<ul class='dl-submenu'>" +
											"<li><a href='#'>Nossos produtos e serviços atendem de forma completa e eficiente as necessidades tecnológicas específicas de cada empresa. Conhecimento técnico alinhado a eficiência na prestação de serviços.</a></li>" +
										"</ul>" +
									"</li>" +
								"</ul>" +

							"</li>" +
							"<li>" +
								"<a href='./clientes.html'>Clientes</a>" +

							"</li>" +
							"<li>" +
								"<a href='./contato.html'>Contato</a>" +

							"</li>" +
							"<li>" +
								"<a href='servicos.html'>Serviços</a>" +
								"<ul class='dl-submenu'>" +
									"<li><a href='servicos.html'>Serviços</a></li>" +
									"<li><a href='consultoria.html'>Consultoria</a></li>" +
									"<li><a href='mpsBR.html'>MPS BR</a></li>" +
									"<li><a href='fabricaSoftware.html'>Fábrica de Software</a></li>" +
									"<li><a href='gestaoProcessos.html'>Gestão de Processos</a></li>" +
									"<li><a href='pdMobile.html'>Mobile</a></li>" +
								"</ul>" +
							"</li>" +
							"<li>" +
								"<a href='produtos.html'>Produtos</a>" +
								"<ul class='dl-submenu'>" +
									"<li><a href='produtos.html'>Produtos</a></li>" +
									"<li><a href='portalCredito.html'>Portal de Crédito</a></li>" +
									"<li><a href='pdSRC.html'>PD SRC</a></li>" +
									"<li><a href='pdBank.html'>PD BANK</a></li>" +
									"<li><a href='pdGAR.html'>PD GAR</a></li>" +
									"<li><a href='pdCTA.html'>PD CTA</a></li>" +
									"<li><a href='pdPositivo.html'>PD Positivo</a></li>" +
								"</ul>" +
							"</li>" +
						"</ul>" +
				"</div>";

}
/*
 * function carregaRodape() { document.getElementById("rodape").innerHTML = "<div
 * id='footer' class='group'>" + "<p class='lion'>" + " <img style='padding:
 * 10px;' src='./images/logo_MPS_BR2.png' alt='Nine Lion' />" + "</p>" + "<p class='copyright'>&copy;
 * Copyright 2016 Izabely Furtado</p>" + "<p class='built-on'>" + "
 * Construído em <a href='http://www.pdcase.com' target='_blank'>PD Case</a>" + "</p>" + "</div>"; }
 */
function carregaRodape() {
	document.getElementById("rodape").innerHTML = 
"		<footer>" +
"			<div class='container-fluid footer-primary'>" +
"			    <div class='container'>" +
"			      <div class='row'>" +
"			        <div class='col-md-2' ><div class='logo-footer'><a href='./index.html'><img src='./images/logo-footer.png' class='img-responsive' /></a></div></div>" +
"			        <div class='col-md-7' style=' text-align:center;'>" +
"			          <p class='footer-address'><span class='text'>Alameda Oscar Niemeyer, nº 891 - Sala 708 - Vila da Serra - Belo Horizonte / Nova Lima - MG - CEP 34006-065</span><br /><a href='tel:(31) 3505-1940'>PDCASE ATENDE <span class='footer-tel'> (31) 3505-1940</span></a></p>" +
"			        </div>" +
"			        " +
"			      </div>" +
"			    </div>" +
"			 </div>" +
"			 <div class='container-fluid footer-secondary' >" +
"			 	<div class='container'>" +
"			 		<div class='row'>" +
	"				    <div class='col-md-6' style='text-align:center; '>" +
	"				      <span class='text' style='color:#31302b;'>©COPYRIGHT 2017 - PD Case INFORMÁTICA - TODOS OS DIREITOS RESERVADOS </span><br />" +
	"				      <span class='text' style='color:#31302b;'>Construído em <a href='http://www.pdcase.com' target='_blank'>PD Case</a> por Izabely Furtado</span>" + "" +
			"           </div>" +
"					</div>" +
"				</div>" +
"			  </div>" +
"		</footer>";
}

function carregaCSS() {
	document.getElementById("css").innerHTML = 
		"<link rel='stylesheet' href='http://www.stylodesign.co.uk/templates/stylodesign/css/normalize.css' type='text/css' media='screen,projection' />" + 
		"<link rel='stylesheet' href='./css/styles.php.css'    type='text/css' media='screen,projection' />" + 
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

/* !-- Google Analytics -- */
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
	
	
/* !-- Navegação do Slide -- */
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
	carregaMenuNovo();
	carregaRodape();
}