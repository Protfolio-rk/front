import { gql } from "@apollo/client/index.js";
import { type QueryFunction, client } from ".";
import type { gqlResponse } from "@/types/graphql";
import type { Education, EducationBase, ListResponse } from "@/types";

const GET_EDUCATION_LIST = gql(`
  query Educations($page: Int) {
    Educations(page: $page) {
      docs {
        id
        title
        type
        from
      }
      page
      totalPages
      prevPage
    }
  }
`);

const GET_FULL_EDUCATION = gql(`
  query Education($id: String!) {
    Education(id: $id) {
      id
      title
      from
      type
      description
      start_date
      end_date
      keywords {
        name
      }
      resume
   }
  }
`);

export const getEducationList: QueryFunction<
  ListResponse<EducationBase>,
  { page?: number }
> = async ({ page }) => {
  const res = await client.query<
    gqlResponse<"Educations", ListResponse<EducationBase>>
  >({ query: GET_EDUCATION_LIST, variables: { page: page ?? 1 } });

  return res.data.Educations;
};

export const getFullEducation: QueryFunction<
  Education,
  { id: string }
> = async ({ id }) => {
  const res = await client.query<gqlResponse<"Education", Education>>({
    query: GET_FULL_EDUCATION,
    variables: { id },
  });

  return res.data.Education;
};
