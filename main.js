const fetchPlayer = async (player) => {
    const res = await fetch(`http://localhost:3001/?search=${player}`);
    const data = await res.json();

    return data;
}

const btnEnviar = document.getElementById('enviar');

btnEnviar.addEventListener('click', async () => {
    const campoNome = document.getElementById("nome")
    const nome = campoNome.value;
    console.log(nome);
    if (nome) {
        const { farmLaner, vi2, partLane, danoTop, notaTop, lane, tier, playerName } = await fetchPlayer(nome);
        // const campoCarta = document.querySelector(".carta");
        const campoNick = document.querySelector("#nick");
        const campoNotaTotal = document.querySelector("#nota-total");
        const campoElo = document.querySelector("#elo");
        const campoLane = document.querySelector("#lane");
        const campoVisao = document.querySelector("#visao");
        const campoDano = document.querySelector("#dano");
        const campoParticipacao = document.querySelector("#participacao");
        const campoFarm = document.querySelector("#farm");

        campoNick.innerText = playerName;
        campoLane.innerText = lane;
        campoElo.innerText = tier;
        campoNotaTotal.innerText = notaTop;
        campoVisao.innerText = vi2;
        campoDano.innerText = danoTop;
        campoParticipacao.innerText = partLane;
        campoFarm.innerText = farmLaner;
    }
})

