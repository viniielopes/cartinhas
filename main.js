const fetchPlayer = async (player)=> {
    const res = await fetch(`http://localhost:3000/?search=${player}`);
    const data = await res.json();

    return data;
}

const btnEnviar = document.getElementById('enviar');

btnEnviar.addEventListener('click', async ()=>{
    const campoNome = document.getElementById("nome")
    const nome = campoNome.value;
    console.log(nome);
    if(nome){
        const playerData = await fetchPlayer(nome);
        const campoCarta = document.querySelector(".carta");
        
        campoCarta.innerText = `Farm : ${playerData.farmLaner}
        Ward/min, ${playerData.vi2}
        Participação, ${playerData.partLane}
        Dano/Min, ${playerData.danoTop}
        Nota total, ${playerData.notaTop}`
    }
})

