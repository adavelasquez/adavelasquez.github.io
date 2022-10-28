const API_KEY = "e1dd3c21162e5dceeac6783c306e1352cdf7a0bb88fc6ba64605e3805172b78f";
const direccion = `https://apiv2.allsportsapi.com/football/?met=Countries&APIkey=${API_KEY}`; // no deja acceder por error de Cors, se copio la informacion en data.json 

// crear async
async function obtenerDatos(){
    const response = await fetch(direccion);
    const data = await response.json();
    const equipos = data.result;
    for(let i = 0 ; i < equipos.length; i++){
        let imgEquipo = document.createElement("img");
        br = document.createElement("span");
        br.innerHTML = "<br/>";
        let imageUrl = equipos[i].country_logo;
        imgEquipo.setAttribute("src", imageUrl);
        document.getElementById("equipos").appendChild(imgEquipo);
        document.getElementById("equipos").appendChild(br);
        

    }

}

obtenerDatos();