import { defineConfig } from "sanity";
import { schemaTypes } from "./schemaTypes";

const sanityConfig = defineConfig({
  name: "default",
  title: "sanity-portfolio",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  schema: {
    types: schemaTypes,
  },
});

export default sanityConfig;
