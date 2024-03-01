import { defineConfig } from "sanity";
import { schemaTypes } from "./schemaTypes";
import { structureTool } from "sanity/structure";

const sanityConfig = defineConfig({
  name: "default",
  title: "sanity-portfolio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  basePath: "/studio",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});

export default sanityConfig;
