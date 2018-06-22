window.addEventListener( 'load', function()
{
	document.getElementById("formular01").onsubmit = Valider;
});                    

function Valider()
{
	var AntalFejl = 0;
	var FejlBesked1 = "";
	var FejlBesked2 = "";
	var FejlBesked3 = "";
	
	console.log(document.getElementById( 'navn' ).value);
	if( document.getElementById( 'navn' ).value == "" )
	{	
		AntalFejl += 1;
		FejlBesked1 = "Skriv dit navn!";
	}
	else
	{
		var regexpbogstaver = /^[a-zA-Z ]+$/;
		if( !regexpbogstaver.test( document.getElementById('InputNavn').value ) )
		{
			AntalFejl += 1;
			FejlBesked1 = "Du skal skrive dit navn!";
		}
	}
	
	if( document.getElementById( 'email' ).value == "" )
	{
		AntalFejl += 1;
		FejlBesked2 = "Skriv dit email!";
	}
	else
	{
		var regexptal = /^[0-9]+$/;
		if( !regexptal.test( document.getElementById('email').value ) )
		{
			AntalFejl += 1;
			FejlBesked2 += "Postnummer må kun indeholde tal!";
		}
	}
	
	if( document.getElementById( 'besked' ).value == "" )
	{
		AntalFejl += 1;
		FejlBesked3 = "skriv din besked!";
	}
	else
	{
		var regexpmail = /^[A-Za-zÆØÅæøå0-9_.]+[@]{1}[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		if( !regexpmail.test( document.getElementById('InputMail').value ) )
		{
			AntalFejl += 1;
			FejlBesked3 = "Mail er ikke gyldig!";
		}
	}
	
	if( AntalFejl == 0 )
	{
		return true;
	}
	else
	{
		document.getElementById( 'FejlBesked1' ).innerHTML = FejlBesked1;
		document.getElementById( 'FejlBesked2' ).innerHTML = FejlBesked2;
		document.getElementById( 'FejlBesked3' ).innerHTML = FejlBesked3;
		return false;
	}
}