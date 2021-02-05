const groepV1 = (datum) => {
    console.log("************************************** GroepenV1 **************************************")
    console.log("Geef je geboortedatum in (JJJJMMDD): " + datum);
    let groep = datum%7+1;
    console.log("Je bent toegewezen aan groep " + groep);
    console.log("***************************************************************************************")
}

groepV1(20201010);


const groepV2 = () => {
    const readline = require("readline");
    const r_datum = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    r_datum.question("Geef je geboortedatum in (JJJJMMDD): ", function(gbDatum) {
        console.log("************************************** GroepenV2 **************************************")
        let groep = gbDatum%7+1;
        console.log("Je bent toegewezen aan groep " + groep);
        console.log("***************************************************************************************")
        r_datum.close();
    })
}

groepV2();
