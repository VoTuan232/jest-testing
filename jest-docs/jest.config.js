const { parse } = require('comment-json');
const fs = require('fs');
const tsconfig = parse(fs.readFileSync('./tsconfig.json').toString());

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsConfig: tsconfig.compilerOptions,
    },
  },
  // runner: 'groups',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.spec.ts',
    '!src/index.ts',
    '!src/config/config.ts',
  ],
  setupFilesAfterEnv: ['./jest.setup.js'],
};
