import { defineCliConfig } from "sanity/cli";
import { projectId, dataset } from "./sanity/env";

export default defineCliConfig({
  api: {
    projectId: projectId || "placeholder-project-id",
    dataset: dataset || "production",
  },
});
