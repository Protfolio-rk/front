import { gql } from "@apollo/client/index.js";
import { type QueryFunction, client } from ".";
import type { MessageRequestArgs, id } from "@/types";
import type { gqlResponse } from "@/types/graphql";

const POST_MESSAGE = gql(`
  mutation CreateMessage($msg: mutationMessageInput!) {
    createMessage(data: $msg) {
        id
    }
  }
`);

export const postMessage: QueryFunction<
  id,
  { msg: MessageRequestArgs }
> = async ({ msg }) => {
  const res = await client
    .mutate<gqlResponse<"createMessage", id>>({ mutation: POST_MESSAGE, variables: { msg } });
  return res.data?.createMessage;
};
