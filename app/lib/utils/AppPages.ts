export class AppPages {
  static dashboard = "/dashboard"
  static repositories = "/repositories"
  static integrations = "/integrations"

  static frontend = {
    cypress: "/frontend/cypress",
    githubActions: "/frontend/github",
    graphql: "/frontend/graphql",
    restApi: "/frontend/rest-api",
    sentry: "/frontend/sentry",
    storybook: "/frontend/storybook",
    vitest: "/frontend/vitest",
  }

  static backend = {
    providers: "/backend/storybook",
    test: "/backend/vitest",
    graphql: "/backend/graphql",
    sentry: "/backend/sentry",
  }
  static database = {
    postgres: "/database/postgres",
    mysql: "/database/mysql",
    mongodb: "/database/mongodb",
    mariadb: "/database/mariadb",
  }
}
