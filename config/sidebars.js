const dashboards = require(require.resolve("./sidebar/dashboards"));
const grafana = require(require.resolve("./sidebar/grafana.js"));
const plugins = require(require.resolve("./sidebar/plugins.js"));
const development = require(require.resolve("./sidebar/development.js"));

/**
 * Sidebar
 */
const mySidebar = [
  {
    id: "index",
    label: "What's new",
    type: "doc",
  },
  grafana,
  plugins,
  dashboards,
  development,
];

/**
 * Sidebars
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  mySidebar,
};

module.exports = sidebars;
