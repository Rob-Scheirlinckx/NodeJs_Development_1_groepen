const groep = () => {
    let datum = 99999999999999999
    console.log("Geef je geboortedatum in (JJJJMMDD): " + datum);
    let groep = datum%7+1;
    console.log("Je bent toegewezen aan groep " + groep);
}

groep();