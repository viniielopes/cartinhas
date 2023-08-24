import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { cardsAPI } from "@/api/axios";
import { GetPlayerInfoParams, GetPlayerInfoRes } from "./types";

const prefix = "cards";

export const useGetPlayerInfo = (
  { playerName }: GetPlayerInfoParams,
  options?: UseQueryOptions<GetPlayerInfoRes, unknown>
) => {
  return useQuery<GetPlayerInfoRes, unknown>(
    [prefix, playerName],
    () =>
      cardsAPI
        .get<GetPlayerInfoRes>(`/?search=${playerName}`)
        .then((data) => data.data),
    { ...options }
  );
};
