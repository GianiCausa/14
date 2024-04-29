const ObtenerDigimonPromesas = () =>{

    return new Promise(function(resolve , reject){
        fetch ('https://digimon-api.vercel.app/api/digimon')
            .then(function(digimones){
                if(!digimones.ok){
                    throw new Error("Error");
                }
                return digimones.json();
            })
            .then(function(data){
                resolve(data);
            })
            .catch(function(error){
                reject(error);
            })
    });
}

function generarSaludo(){
    console.log("Hola");
}

ObtenerDigimonPromesas()
    .then((digimones)=>{
        digimones.map((digimon)=>{
            console.log(digimon);
        })
    }).catch((error)=>{
        console.log('El error es: ${error}');
    })

    generarSaludo();