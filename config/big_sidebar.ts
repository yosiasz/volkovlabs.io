import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Sidebars
 */
const sidebars: SidebarsConfig = {
  big: [
    {
      items: ["getting-started/index", "high-availability/index"],
      label: "Business Intelligence",
      type: "category",
      collapsible: false,
      link: {
        type: "doc",
        id: "index",
      },
    },
    {
      items: [
        "studio/manage-business-engines",
        "studio/manage-alert-actions",
        "studio/support",
      ],
      label: "Business Studio",
      type: "category",
      collapsible: false,
      link: {
        type: "doc",
        id: "studio/index",
      },
    },
    {
      items: [
        "engine/configuration",
        "engine/database",
        "engine/prometheus",
        {
          items: [
            {
              type: "link",
              href: "/big/api",
              label: "OpenAPI Specification",
            },
          ],
          label: "Business Engine API",
          type: "category",
          link: {
            type: "doc",
            id: "engine/api",
          },
        },
      ],
      label: "Business Engine",
      type: "category",
      collapsible: false,
      link: {
        type: "doc",
        id: "engine/index",
      },
    },
    {
      items: [
        "alerting/manage-alert-rules",
        "alerting/variables",
        "alerting/thresholds",
      ],
      label: "Business Alerting",
      type: "category",
      collapsible: false,
      link: {
        type: "doc",
        id: "alerting/index",
      },
    },
    {
      items: [],
      label: "Tutorials",
      type: "category",
      link: {
        type: "doc",
        id: "tutorials/index",
      },
    },
    "release",
  ],
};

export default sidebars;
