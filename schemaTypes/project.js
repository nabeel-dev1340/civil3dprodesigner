// schemas/project.js
import { GrProjects } from "react-icons/gr";

export default {
  name: "project",
  title: "Project",
  type: "document",
  icon: GrProjects,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tools",
      title: "Tools Used",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (Rule) => Rule.required(),
    },
    // You can add more fields based on your specific project requirements
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
