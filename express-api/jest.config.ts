export default {
  preset: 'ts-jest', // Use ts-jest preset for TypeScript
  testEnvironment: 'node', // Set the test environment to Node.js
  transform: {
    '^.+\\.ts$': 'ts-jest', // Use ts-jest to transform TypeScript files
  },

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Support path aliases (adjust based on tsconfig.json)
  },
  transformIgnorePatterns: [
    '/node_modules/', // Ignore transforming node_modules (default)
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ]
};