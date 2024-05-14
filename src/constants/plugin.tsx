import React from "react";
import { PluginItem } from "../types";

/**
 * Plugin List
 */
export const PluginList: PluginItem[] = [
  {
    title: "Base64 Image/Video/Audio/PDF Panel",
    name: "volkovlabs-image-panel",
    description: (
      <>
        Display Base64 encoded files in PNG, JPG, GIF, MP4, WEBM, MP3, OGG, PDF
        formats.
      </>
    ),
    href: "/plugins/volkovlabs-image-panel/",
  },
  {
    title: "Business Calendar Panel",
    name: "volkovlabs-calendar-panel",
    description: <>Display events and change time range.</>,
    href: "/plugins/volkovlabs-calendar-panel/",
  },
  {
    title: "Business Charts Panel",
    name: "volkovlabs-echarts-panel",
    description: (
      <>Powerful visualizations for Grafana powered by Apache ECharts.</>
    ),
    href: "/plugins/volkovlabs-echarts-panel/",
  },
  {
    title: "Business News Data Source",
    name: "volkovlabs-rss-datasource",
    description: <>Visualize RSS/Atom feeds using Dynamic Text.</>,
    href: "/plugins/volkovlabs-rss-datasource/",
  },
  {
    title: "Dynamic Text Panel",
    name: "volkovlabs-dynamictext-panel",
    description: <>Dynamic, data-driven text.</>,
    href: "/plugins/volkovlabs-dynamictext-panel/",
  },
  {
    title: "Data Manipulation Panel",
    name: "volkovlabs-form-panel",
    description: (
      <>Insert, update application data, and modify configuration.</>
    ),
    href: "/plugins/volkovlabs-form-panel/",
  },
  {
    title: "Grafana HTTP API Data Source",
    name: "volkovlabs-grapi-datasource",
    description: <>Connect to Local and Remote Grafana instances.</>,
    href: "/plugins/volkovlabs-grapi-datasource/",
  },
  {
    title: "Static Data Source",
    name: "volkovlabs-static-datasource",
    description: <>Store and emulate your data.</>,
    href: "/plugins/volkovlabs-static-datasource/",
  },
  {
    title: "Variable Panel",
    name: "volkovlabs-variable-panel",
    description: <>Update dashboard variables.</>,
    href: "/plugins/volkovlabs-variable-panel/",
  },
];
