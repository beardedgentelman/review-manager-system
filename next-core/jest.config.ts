import {pathsToModuleNameMapper} from "ts-jest";
import {compilerOptions} from "./tsconfig.json";
import type {Config} from 'jest'
import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  preset: "ts-jest",
  clearMocks: true,
  transform: {
    "^.+\\.[jt]sx?$": "ts-jest"
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {prefix: "<rootDir>/"}),
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  testPathIgnorePatterns: ["/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/src/__tests__/jest.setup.ts"],
}

export default createJestConfig(config)