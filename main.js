
// první úkol

let button = document.getElementById("button");


const parsedate = (day, month, year) => {
    
    let datum = document.getElementById("input").value;

    let output = document.getElementById("output");

    day = datum.slice(0,2);

    month =  datum.slice(3,6);

    year = datum.slice(6,10);

    if (!datum.match(/^.{2}\..{2}\.\d{4}$/)) {
        output.textContent = "Formát data musí být DD.MM.RRRR Nezapomeň na tečky!";
    } else if (month > 12 || month < 1) {
        output.textContent = "Měsíc musí být číslo 1 až 12, ";
    } else if (day > 31 || day < 1) {
        output.textContent = "Den musí být číslo 1 až 31, ";
    } else if (isNaN(day) || isNaN(month) || isNaN(year)) {
        output.textContent = "Den, rok a měsíc musí být číslo.";
    } else {
        output.textContent = "Den: " + day + " Měsíc: " + month + " Rok: " + year;
    } 
};


// druhý úkol

let klikatko = document.getElementById("klikatko");

let sekce = document.getElementById("sekce");

klikatko.addEventListener("click", naformatuj);

function naformatuj() {
    let den = document.getElementById("den").value;
    let mesic = document.getElementById("mesic").value;
    let rok = document.getElementById("rok").value;

    if (den.length === 1) {
        den = "0" + den;
    }

    if (mesic.length === 1) {
        mesic = "0" + mesic;
    }

    sekce.innerHTML = den + "." + mesic + "." + rok; 
}


// třetí úkol 


let turbozaokrouhlovac = document.getElementById("turbozaokrouhlovac");

let vysledek = document.getElementById("vysledek");

turbozaokrouhlovac.addEventListener("click", round)

function round() {

    let cislo = Math.random() * 200 - 100;

    let float = cislo - Math.trunc(cislo);


    if (float < 0.5) {
        vysledek.innerText = "Tvoje náhodné číslo bylo: " + cislo + ". Zaokrouhlili jsme ho na: " + Math.trunc(cislo); 
    
    } else if (float = 0.5 && cislo % 2 !== 0) {
        vysledek.innerText = "Tvoje náhodné číslo bylo: " + cislo + ". Zaokrouhlili jsme ho na: " + (Math.trunc(cislo) + 1); 
    } else if (float = 0.5 && cislo % 2 === 0) {
        vysledek.innerText = "Tvoje náhodné číslo bylo: " + cislo + ". Zaokrouhlili jsme ho na: " + Math.trunc(cislo); 
    } else if (float > 0.5) {
        vysledek.innerText = "Tvoje náhodné číslo bylo: " + cislo + ". Zaokrouhlili jsme ho na: " + (Math.trunc(cislo) + 1); 
    } 


    if (cislo < 0 && float < -0.5)  {
        vysledek.innerText = "Tvoje náhodné číslo bylo: " + cislo + ". Zaokrouhlili jsme ho na: " + (Math.trunc(cislo) - 1);
    } else if ((cislo < 0) && (float == -0.5) && (Math.trunc(cislo) % 2 !== 0))  {
        vysledek.innerText = "Tvoje náhodné číslo bylo: " + cislo + ". Zaokrouhlili jsme ho na: " + (Math.trunc(cislo) - 1); 
    } else if ((cislo < 0) && (float == -0.5) && (Math.trunc(cislo) % 2 == 0)) {
        vysledek.innerText = "Tvoje náhodné číslo bylo: " + cislo + ". Zaokrouhlili jsme ho na: " + Math.trunc(cislo); 
    } else if (cislo < 0 && float > -0.5) {
        vysledek.innerText = "Tvoje náhodné číslo bylo: " + cislo + ". Zaokrouhlili jsme ho na: " + Math.trunc(cislo); 
    }
}


