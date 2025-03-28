
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/graphql",
  documents: "src/**/*.{graphql,gql}",
  generates: {
    "src/gql_generated/index.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query"
      ],
      config: {
        fetcher: {
          endpoint: 'http://localhost:3000/graphql',
          fetchParams: {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        }
      }
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
