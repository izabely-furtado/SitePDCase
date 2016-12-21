try {
	Typekit.load();
} catch (e) {
}

function ativa() {
	var div = document.getElementById('div')
	/* se conteÃºdo estÃ¡ escondido, mostra e troca o valor do botÃ£o para: esconde */
	if (div.style.display == 'none') {
		/*document.getElementById("botao").value='esconde' */
		div.style.display = 'block'
	} else {
		/* se conteÃºdo estÃ¡ a mostra, esconde o conteÃºdo e troca o valor do botÃ£o para: mostra */
		div.style.display = 'none'
		/*document.getElementById("botao").value='mostra' */
	}
}