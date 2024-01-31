const path = require("path");

module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "\\.(css)$": "./src/postcss-transform.js",
  },
  moduleNameMapper: {
    "\\.(css|less)$": path.resolve(__dirname, "./src/styleMock.js"),
  },
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ["./src/setupTests"],
  transformIgnorePatterns: ["./node_modules/(?!(tailwindcss))"],
};
