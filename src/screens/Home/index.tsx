"use client";

import { Card } from "@/components/Card";
import { useGetPlayerInfo } from "@/queries/useGetPlayerInfo";
import { ChangeEventHandler, useState } from "react";
import "react-toastify/dist/ReactToastify.min.css";

export default function HomeScreen() {
  const [playerName, setPlayerName] = useState("");

  const { data, isFetching, refetch } = useGetPlayerInfo(
    { playerName: playerName },
    { enabled: false }
  );

  const onChangeName: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPlayerName(e.target.value);
  };

  const onClickSearchPlayer = () => {
    refetch();
  };

  return (
    <section className="container-cartinha">
      <div className="centralizar">
        <h1 className="titulo">League of cards </h1>
        <h2 className="buscar">Gere sua carta:</h2>
      </div>

      <div className="container-inputs">
        <label className="label-regiao">
          <input
            className="input"
            list="RG"
            type="text"
            placeholder="Região"
            defaultValue="Brazil"
          />
        </label>
        <datalist className="RG" id="RG">
          <option value="North america"></option>
          <option value="Europa West"></option>
          <option value="Europa Nordic & East"></option>
          <option value="Oceania"></option>
          <option value="Korea"></option>
          <option value="Japan"></option>
          <option value="Brazil"></option>
          <option value="LAS"></option>
          <option value="LAN"></option>
          <option value="Russian"></option>
          <option value="Turkiye"></option>
          <option value="Singapore"></option>
          <option value="Philippines"></option>
          <option value="Taiwan"></option>
          <option value="Vietnam"></option>
          <option value="Thailand"></option>
        </datalist>
        <input
          className="input nome"
          type="text"
          placeholder="Nome de invocador"
          id="nome"
          name="toggle"
          onChange={onChangeName}
        />
      </div>

      <Card data={data} isLoading={isFetching} />

      <div className="container-button">
        {isFetching ? (
          <div className="loader"></div>
        ) : (
          <button
            className="button-enviar"
            id="enviar"
            onClick={onClickSearchPlayer}
          >
            Enviar
          </button>
        )}
      </div>

      {/* <!-- <footer> -->
        <!--     <h3 className="rodape">© Copyright 2013-2023 www.leagueofgraphs.com. All rights reserved. -->
          <!--         LeagueOfGraphs.com isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games -->
          <!--         or -->
          <!--         anyone officially involved in producing or managing League of Legends. League of Legends and Riot Games -->
          <!--         are -->
          <!--         trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc. Also -->
          <!--         available -->
          <!--         on -->
          <!--         Android. -->
          <!--     </h3> -->
        <!---->
        <!-- </footer> --> */}
    </section>
  );
}
