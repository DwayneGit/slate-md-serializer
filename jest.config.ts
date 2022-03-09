import type { Config } from "@jest/types";
// Sync object
const config: Config.InitialOptions = {
  roots: ["src"],
  verbose: true,
  transform: {
    "^.+\\.ts?$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
  },
};
export default config;
