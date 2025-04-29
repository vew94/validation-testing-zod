import boundaries from "eslint-plugin-boundaries";
import temisConfig from "temis/eslint";

export default [
  ...temisConfig,
  {
    settings: {
      "boundaries/elements": [
        { type: "shared", pattern: "src/shared/*" },
        { type: "entities", pattern: "src/entities/*" },
        { type: "features", pattern: "src/features/*" },
        { type: "widgets", pattern: "src/widgets/*" },
        { type: "pages", pattern: "src/pages/*" },
        { type: "processes", pattern: "src/processes/*" },
        { type: "app", pattern: "src/app" },
      ],
    },
    plugins: {
      boundaries,
    },
    rules: {
      ...boundaries.configs.recommended.rules,

      "boundaries/element-types": [
        "error",
        {
          default: "disallow",
          rules: [
            { from: ["features"], allow: ["entities", "shared"] },
            { from: ["entities"], allow: ["shared"] },
            { from: ["widgets"], allow: ["features", "entities", "shared"] },
            {
              from: ["pages"],
              allow: ["widgets", "features", "entities", "shared"],
            },
            {
              from: ["processes"],
              allow: ["pages", "widgets", "features", "entities", "shared"],
            },
            {
              from: ["app"],
              allow: [
                "processes",
                "pages",
                "widgets",
                "features",
                "entities",
                "shared",
              ],
            },
          ],
        },
      ],
    },
  },
];
