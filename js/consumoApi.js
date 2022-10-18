const direccion = "https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?s=Soccer&c=Spain";

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