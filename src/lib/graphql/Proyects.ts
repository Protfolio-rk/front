import { gql } from "@apollo/client/index.js";
import { type QueryFunction, client } from ".";
import type { ListResponse, Proyect, ProyectBase } from "@/types";
import type { gqlResponse } from "@/types/graphql";

const GET_PROYECTS_LIST = gql(`
  query Proyects($page: Int) {
    Proyects(page: $page) {
      docs {
        id
        name
        stack
      }
      page
      totalPages
      prevPage
    }
  }
`);
const GET_FULL_PROYECT = gql(`
  query Proyect($id: String!) {
    Proyect(id: $id) {
      id
      description
      Repository
      name
      stack
      resume
      keywords {
        name
      }
      ScreenShots {
        alt
        url
        filename
        sizes {
          card {
            url
            filename
          }
          thumbnail {
            url
            filename
          }
        }
      }
    }
  }
`);

export const getProtyectsList: QueryFunction<
  ListResponse<ProyectBase>,
  { page?: number }
> = async ({ page }) => {
  const res = await client.query<
    gqlResponse<"Proyects", ListResponse<ProyectBase>>
  >({ query: GET_PROYECTS_LIST, variables: { page: page ?? 1 } });

  return res.data.Proyects;
};

export const getFullProyect: QueryFunction<Proyect, { id: string }> = async ({
  id,
}) => {
  const res = await client.query<gqlResponse<"Proyect", Proyect>>({
    query: GET_FULL_PROYECT,
    variables: { id },
  });

  return res.data.Proyect;
};
