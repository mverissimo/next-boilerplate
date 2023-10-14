const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './src',
});

const config = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^~/components/(.*)$': '<rootDir>/components/$1',
  },
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['cobertura'],
  collectCoverageFrom: [
    '<rootDir>/app/@(components|utils)/**/*.{ts,tsx}',
    '!<rootDir>/app/**/index.{ts,tsx,js,jsx}',
    '!<rootDir>/src/**/index.{ts,tsx,js,jsx}',
    '!**/*.d.ts',
    '!.jest/**',
    '!**/node_modules/**',
  ],
};

module.exports = createJestConfig(config);
