const ObtenerDigimonAsyncAwait = async() =>{
    try{
        const response = await fetch('https://digimon-api.vercel.app/api/digimon');

        if (!response.ok){
            throw new Error('Hubo un problema al obtener los datos de digimon');
        }

        const data = await response.json();
        return data;
    }   catch (error){
        throw error;
    }
}

(async function(){
    try{
        const data = await ObtenerDigimonAsyncAwait();
        console.log('Datos de digimon obtenidos con exito', data);
    }   catch (error){
        console.error('Error al obtener datos de digimon: ', error);
    }
})();