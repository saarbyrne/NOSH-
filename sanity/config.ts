import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./schema"

export default defineConfig({
  name: "nosh-cms",
  title: "NoSh** CMS",
  projectId: "your-project-id", // Replace with actual Sanity project ID
  dataset: "production",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
