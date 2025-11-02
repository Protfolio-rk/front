import { gql } from "@apollo/client/index.js";
import { client, type QueryFunction } from ".";
import type { Experience, ExperienceBase, ListResponse } from "@/types";
import type { gqlResponse } from "@/types/graphql";

const GET_EXPERIENCE_LIST = gql(`
  query Experiences($page: Int) {
    Experiences(page: $page) {
      docs {
        id
        job
        company
        stack
        start_date
        end_date
      }
      page
      totalPages
      prevPage
    }
  }
`);

const GET_FULL_EXPERIENCE = gql(`
  query Experience($id: String!) {
    Experience(id: $id) {
      id
      job
      company
      description
      resume
      keywords {
        name
      }
      start_date
      end_date
      stack
      type
    }
  }
`);

export const getExperienceList: QueryFunction<
  ListResponse<ExperienceBase>,
  { page?: number }
> = async ({ page }) => {
  const res = await client.query<
    gqlResponse<"Experiences", ListResponse<ExperienceBase>>
  >({ query: GET_EXPERIENCE_LIST, variables: { page: page ?? 1 } });

  return res.data.Experiences;
};

export const getFullExperience: QueryFunction<
  Experience,
  { id: string }
> = async ({ id }) => {
  const res = await client.query<gqlResponse<"Experience", Experience>>({
    query: GET_FULL_EXPERIENCE,
    variables: { id }
  });

  return res.data.Experience;
};
