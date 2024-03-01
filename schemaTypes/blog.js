import { FaBloggerB } from "react-icons/fa";

export default {
  name: "post",
  title: "Blog Post",
  type: "document",
  icon: FaBloggerB,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Content",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    // You can add more fields based on your specific requirements
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
    },
    prepare: ({ title, publishedAt }) => ({
      title,
      subtitle: new Date(publishedAt).toLocaleDateString(),
    }),
  },
};
