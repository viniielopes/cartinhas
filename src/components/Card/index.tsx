import { DIDACT_FONT } from "@/app/fonts";
import { GetPlayerInfoRes } from "@/queries/useGetPlayerInfo/types";

type CardProps = {
  data?: GetPlayerInfoRes;
  isLoading: boolean;
};

export const Card = ({ data, isLoading }: CardProps) => {
  const { notaTop, lane, playerName, tier, vi2, farmLaner, partLane, danoTop } =
    data || {};

  return (
    <div className={`container-card ${DIDACT_FONT.className}`}>
      <div className={`card ${data && !isLoading ? "rotate-card" : ""}`}>
        <div className="card-back"></div>
        <div className="card-front">
          <div className="carta-header">
            <h1 id="nota-total">{notaTop}</h1>
            <h1 id="lane">{lane}</h1>
          </div>

          <div className="container-campos">
            <h1 className="nome" id="nick">
              {playerName}
            </h1>
            <h1 className="elo" id="elo">
              {tier}
            </h1>

            <div className="container-notas">
              <div className="notas-titulos">
                <p>Visão:</p>

                <p>Dano/Min:</p>

                <p>Participação:</p>

                <p>Farm:</p>
              </div>

              <div className="container-valores">
                <p className="valor" id="visao">
                  {vi2}
                </p>

                <p className="valor" id="dano">
                  {danoTop}
                </p>

                <p className="valor" id="participacao">
                  {partLane}
                </p>

                <p className="valor" id="farm">
                  {farmLaner}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
