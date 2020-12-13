module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  roots: ["<rootDir>"],
  moduleNameMapper: {
    "@components/(.*)": "<rootDir>/src/components/$1",
    "@util/(.*)": "<rootDir>/util/$1",
    "@sections/(.*)": "<rootDir>/src/sections/$1",
    "@sanityQueries/(.*)": "<rootDir>/sanityQueries/$1",
  },
};

function makeModuleNameMapper(srcPath, tsconfigPath) {
  // Get paths from tsconfig
  const { paths } = require(tsconfigPath).compilerOptions;

  const aliases = {};

  // Iterate over paths and convert them into moduleNameMapper format
  Object.keys(paths).forEach((item) => {
    const key = item.replace("/*", "/(.*)");
    const path = paths[item][0].replace("/*", "/$1");
    aliases[key] = srcPath + "/" + path;
  });
  return aliases;
}
