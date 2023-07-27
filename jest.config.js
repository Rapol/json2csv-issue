module.exports = {
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: ".",
  modulePaths: ["<rootDir>/src/"],
  testEnvironment: "node",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  testTimeout: 10000,
  setupFiles: [],
};
