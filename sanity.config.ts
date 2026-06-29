import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";
import { projectId, dataset } from "./sanity/env";

export default defineConfig({
  name: "default",
  title: "Junaid Home Interiors Admin",

  projectId: projectId || "placeholder-project-id",
  dataset: dataset || "production",

  basePath: "/admin",

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
