const fs = require("node:fs");
const path = require("node:path");

// Resolve CRA's existing Babel dependencies, including pnpm's nested layout.
module.exports = function loadApp() {
  const root = path.resolve(__dirname, "..");
  const cra = path.dirname(require.resolve("react-scripts/package.json"));
  const preset = path.dirname(require.resolve("babel-preset-react-app/package.json", { paths: [cra] }));
  const babel = require(require.resolve("@babel/core", { paths: [cra, preset] }));
  const env = require.resolve("@babel/preset-env", { paths: [preset] });
  const react = require.resolve("@babel/preset-react", { paths: [preset] });
  const original = require.extensions[".js"];
  require.extensions[".css"] = () => {};
  require.extensions[".js"] = (module, filename) => {
    if (!filename.startsWith(path.join(root, "src") + path.sep)) return original(module, filename);
    const { code } = babel.transformSync(fs.readFileSync(filename, "utf8"), {
      filename, babelrc: false, configFile: false,
      presets: [[env, { targets: { node: "current" }, modules: "commonjs" }], [react, { runtime: "automatic" }]],
    });
    module._compile(code, filename);
  };
  return { ...require("../src/App.js"), ...require("../src/routes.js") };
};
