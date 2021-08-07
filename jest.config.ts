const config = {
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.module.css$': '<rootDir>/__mocks__/styleMock.ts'
  },
  testEnvironment: 'jsdom'
}

export default config
