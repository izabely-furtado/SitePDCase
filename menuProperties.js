
function carregaRodape() {
	document.getElementById("rodape").innerHTML =
"		<footer style='background-color:black;'>" +
"			<div class='container-fluid footer-primary' style='background-color:black;'>" +
"			    <div class=''>" +
"			      <div class='row' style='padding-top:10px; padding-bottom:-0px !important;'>" +
"			        <div class='col-md-2' ><div class='logo-footer'><a href='./index.html'><center><img src='./images/logo-footer.png' class='img-responsive' /></center></a></div></div>" +
"			        <div class='col-md-7' style=' text-align:center;'>" +
"			          <p class='footer-address'><span class='text' style='color:white' >Alameda Oscar Niemeyer, nº 891 - Sala 708 - Vila da Serra - Belo Horizonte / Nova Lima - MG - CEP 34006-065</span><br /><a href='tel:(31) 3505-1940'>PDCASE ATENDE <span class='footer-tel'> (31) 3505-1940</span></a></p>" +
"			        </div>" +
"			        " +
"			      </div>" +
"			    </div>" +
"			 </div>" +
"			 <div class='container-fluid footer-secondary' style='background-color:gold;'>" +
"			 	<div class=''>" +
"			 		<div class='row' style='padding-top:10px; padding-bottom:10px'>" +
	"				    <div class='col-md-6' style='text-align:center; '>" +
	"				      <span class='text' style='color:#31302b;'>©COPYRIGHT 2017 - PD Case INFORMÁTICA - TODOS OS DIREITOS RESERVADOS </span><br />" +
	"				      <span class='text' style='color:#31302b;'>Construído em <a href='http://www.pdcase.com' target='_blank'>PD Case</a> por Izabely Furtado<br /></span>" + "" +
			"           </div>" +
"					</div>" +
"				</div>" +
"			  </div>" +
"		</footer>";
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
	window.onload = function () {
	    carregaRodape();
	}