window.addEventListener('load', function() {
	//stran nalozena
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (var i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
			
			if(cas==0)
			{
				alert("Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!");
				cas--;
			}
			else
			{
				cas--;
				casovnik.innerHTML = cas;
			}
			
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
	
	var prijavi=function(event)
	{
		//alert(123);
		var uporabnik = document.querySelector("#uporabnisko_ime").value;
		document.querySelector(".pokrivalo").style.visibility = "hidden";
		document.querySelector(".pokrivalo").style.display = "none";
		document.getElementById("uporabnik").innerHTML = uporabnik;
	}
	document.querySelector("#prijavniGumb").addEventListener("click",prijavi);
	
	
	var dodajOpomnik=function(event)
	{
		var cas = document.querySelector("#cas_opomnika").value;
		var opomnik = document.querySelector("#naziv_opomnika").value;
		document.getElementById("opomniki").innerHTML += "<div class='opomnik senca rob' ><div class='naziv_opomnika'>"+opomnik+"</div><div class='cas_opomnika'> Opomnik čez <span>"+cas+"</span> sekund.</div></div>";
	}
	document.querySelector("#dodajGumb").addEventListener("click",dodajOpomnik);
	
	
});