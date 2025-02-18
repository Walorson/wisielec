//////////////////////SKRYPT DO WISIELCA//////////////////////
var nr_kategorii = Math.floor(Math.random()*13);

	var kategoria = new Array("Zwierzęta","Meble","Pojazdy","Rośliny","Drzewa","Przedmioty Codziennego Użytku","Kosmos","Państwa","Owoce","Warzywa","Sport","Części Ciała","Sprzęt Elektroniczny");
	
function wypisz_kategorie() {
	document.getElementById("kategoria").innerHTML = "Kategoria: "+kategoria[nr_kategorii];
}
////LOSOWANIE WYRAZU////
switch(nr_kategorii) {
	
case 0: { //Zwierzęta
		var wyraz = new Array("Żyrafa","Hipopotam","Kaczka","Chomik","Jaszczurka","Wiewiórka","Pies","Kot","Wielbłąd","Tygrys","Lampart","Niedźwiedź","Panda","Koala","Jaguar","Papuga","Pingwin","Pantera","Królik","Dorsz");
		var nr_wyrazu = Math.floor(Math.random()*20);
		
		var haslo = wyraz[nr_wyrazu];
	} break;
case 1: { //Meble
	var wyraz = new Array("Szafka","Krzesło","Komoda","łóżko","biurko","Stół","Półka","Taboret","Fotel","Kanapa","Lustro","Meblościanka","Parawan","Lampa","Leżak");
	var nr_wyrazu = Math.floor(Math.random()*15);
	
	var haslo = wyraz[nr_wyrazu];
} break;
case 2: { //Pojazdy
	var wyraz = new Array("Samochód","Helikopter","Samolot","Odrzutowiec","Rower","Statek","Hulajnoga","Motor","Skuter","Pociąg","Koparka","Traktor","Śmieciarka","Autobus","Karetka");
	var nr_wyrazu = Math.floor(Math.random()*15);
	
	var haslo = wyraz[nr_wyrazu];
} break;
case 3: { //Rośliny
	var wyraz = new Array("Trawa","Drzewo","Pokrzywa","Tulipan","Róża","Fiołek","Stokrotka","Mech","Przebiśnieg","Paproć","Eukaliptus","Słonecznik","Goździk","Rzeżucha","Koniczyna");
	var nr_wyrazu = Math.floor(Math.random()*15);
	
	var haslo = wyraz[nr_wyrazu];
} break;
case 4: { //Drzewa
	var wyraz = new Array("Dąb","Brzoza","Świerk","Jodła","Sosna","Modrzew","Akacja","Jabłoń","Grusza","Wiśnia","Orzech","Bananowiec","Wierzba","Buk","Jesion","Topola","Kasztanowiec");
	var nr_wyrazu = Math.floor(Math.random()*17);
	
	var haslo = wyraz[nr_wyrazu];
} break;
case 5: { //Przedmioty codziennego użytku
	var wyraz = new Array("Papier Toaletowy","Mydło","Perfum","Golarka","Szczoteczka do zębów","Kartka","Telefon","Szampon","Zapalniczka","Miska","Czajnik","Prysznic","Toaleta","Portfel","Zegarek");
	var nr_wyrazu = Math.floor(Math.random()*15);
	
	var haslo = wyraz[nr_wyrazu];
} break;
case 6: { //Kosmos
	var wyraz = new Array("Merkury","Wenus","Mars","Ziemia","Jowisz","Saturn","Uran","Neptun","Słońce","Pluton","Galaktyka","Meteoryt","Księżyc","Kometa","Mgławica");
	var nr_wyrazu = Math.floor(Math.random()*15);
	
	var haslo = wyraz[nr_wyrazu];
} break;
case 7: { //Państwa
	var wyraz = new Array("Polska","Niemcy","Francja","Hiszpania","Portugalia","Ukraina","Białoruś","Grecja","Włochy","Chorwacja","Słowacja","Czechy","Węgry","Serbia","Macedonia","Rumunia","Bułgaria","Austria","Szwajcaria","Wielka Brytania","Stany Zjednoczone","Kanada","Meksyk","Panama","Gwatemala");
	var nr_wyrazu = Math.floor(Math.random()*25);
	
	var haslo = wyraz[nr_wyrazu];
} break;
case 8: { //Owoce
	var wyraz = new Array("Jabłko","Gruszka","Wiśnia","Truskawka","Malina","Banan","Arbuz","Brzoskwinia","Cytryna","Winogrono","Pomarańcza","Ananas","Aronia","Jagoda","Mango","Czereśnia","Śliwka","Borówka","Porzeczka","Granat");
	var nr_wyrazu = Math.floor(Math.random()*20);
	
	var haslo = wyraz[nr_wyrazu];
} break;
case 9: { //Warzywa
	var wyraz = new Array("Ziemniak","Pomidor","Marchewka","Kukurydza","Ogórek","Pietruszka","Cebula","Kapusta","Sałata","Burak","Pietruszka","Groch","Seler","Chrzan","Papryka","Bakłażan","Dynia","Rzodkiewka","Szparag","Czosnek");
	var nr_wyrazu = Math.floor(Math.random()*20);
	
	var haslo = wyraz[nr_wyrazu];
} break;
case 10: { //Sport
	var wyraz = new Array("Piłka Nożna","Piłka Ręczna","Siatkówka","Koszykówka","Tenis","badminton","narciarstwo","hokej","dwa ognie","łyżwiarstwo");
	var nr_wyrazu = Math.floor(Math.random()*10);

	var haslo = wyraz[nr_wyrazu];
} break;
case 11: { //Części ciała
	var wyraz = new Array("Głowa","Dłoń","Stopa","Szyja","Brzuch","Plecy","Kolano","Łokieć","Nadgarstek","Pięta");
	var nr_wyrazu = Math.floor(Math.random()*10);

	var haslo = wyraz[nr_wyrazu];
} break;
case 12: { //Sprzęt Elektroniczny
	var wyraz = new Array("Komputer","Kamera","Mikrofon","Monitor","Słuchawki","Drukarka","Klawiatura","Myszka","Telefon","Skaner");
	var nr_wyrazu = Math.floor(Math.random()*10);

	var haslo = wyraz[nr_wyrazu];
} break;
}
//////////////////////////////////////////
haslo = haslo.toUpperCase();

var dlugosc = haslo.length;
var ile_skuch = 0;

var haslo1 = "";

for (i=0; i<dlugosc; i++)
{
	if (haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
	else haslo1 = haslo1 + "-";
}

function wypisz_haslo()
{
	document.getElementById("plansza").innerHTML = haslo1;
}

window.onload = start;

var litery = new Array("A", "Ą","B","C","Ć","D","E","Ę","F","G","H","I","J","K","L","Ł","M","N","Ń","O","Ó","P","Q","R","S","Ś","T","U","V","W","X","Y","Z","Ź","Ż");

function start()
{
	
	var tresc_diva ="";
	
	for (i=0; i<=34; i++)
	{
		var element = "lit" + i;
		tresc_diva = tresc_diva + '<div class="litera" onclick="sprawdz('+i+')" id="'+element+'">'+litery[i]+'</div>';
		if ((i+1) % 7 ==0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
	}
	
	document.getElementById("alfabet").innerHTML = tresc_diva;
	
	wypisz_kategorie()
	wypisz_haslo();
}

String.prototype.ustawZnak = function(miejsce, znak)
{
	if (miejsce > this.length - 1) return this.toString();
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
}


function sprawdz(nr)
{
	
	var trafiona = false;
	
	for(i=0; i<dlugosc; i++)
	{
		if (haslo.charAt(i) == litery[nr]) 
		{
			haslo1 = haslo1.ustawZnak(i,litery[nr]);
			trafiona = true;
		}
	}
	
	if(trafiona == true)
	{
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";
		
		wypisz_haslo();
	}
	else
	{
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";	
		document.getElementById(element).setAttribute("onclick",";");		
		
		//skucha 
		ile_skuch++;
		var obraz = "img/s"+ ile_skuch + ".jpg";
		document.getElementById("szubienica").innerHTML = '<img src="'+obraz+'" alt="" />';
	}
	
	//wygrana
	if (haslo == haslo1)
	document.getElementById("alfabet").innerHTML  = "Tak jest! Podano prawidłowe hasło: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
	
	//przegrana
	if (ile_skuch>=9)
	document.getElementById("alfabet").innerHTML  = "Przegrana! Prawidłowe hasło: "+haslo+'<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';
}