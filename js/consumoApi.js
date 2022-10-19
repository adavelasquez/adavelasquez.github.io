const direccion = "https://api.unidadeditorial.es/sports/v1/classifications/current/?site=2&type=10&tournament=0152"; // no deja acceder por error de cors, se copio la informacion en data.json 

// crear async
async function obtenerDatos(){
    const response = await fetch("./js/data.json")
    const data = await response.json();
    const equipos = data.data[0].rank;

    for(let i = 0 ; i < equipos.length; i++){
        let imgEquipo = document.createElement("img");
        let imageUrl = equipos[i].imageUrlSizes.L;
        imgEquipo.setAttribute("src", imageUrl);
        document.getElementById("equipos").appendChild(imgEquipo);
    }

}

obtenerDatos();