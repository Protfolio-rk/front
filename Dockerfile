FROM node:20-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS builder

WORKDIR /home/node/app
COPY package*.json ./

COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm run build

FROM base AS runtime

ENV NODE_ENV=production
ENV HOST=
ENV PORT=4321
ENV GRAPHQL_HOST=
ENV APP_DOMAIN=

WORKDIR /home/node/app
COPY package*.json  ./
COPY pnpm-lock.yaml ./

RUN pnpm install --prod --frozen-lockfile
COPY --from=builder /home/node/app/dist ./dist

EXPOSE ${PORT}

CMD ["node", "./dist/server/entry.mjs"]
