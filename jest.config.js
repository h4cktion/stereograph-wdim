module.exports = {
  preset: "ts-jest/presets/js-with-babel",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
