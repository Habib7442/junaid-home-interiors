import { defineField, defineType } from "sanity";

export const galleryType = defineType({
  name: "gallery",
  title: "Project Galleries",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Design Category",
      type: "string",
      options: {
        list: [
          { title: "Modular Kitchen", value: "modular-kitchen" },
          { title: "TV Unit", value: "tv-unit" },
          { title: "False Ceiling Design", value: "false-ceiling" },
          { title: "PVC False Ceiling Design", value: "pvc-ceiling" },
          { title: "Pooja Unit Design", value: "pooja-unit" },
          { title: "Foyer Unit Design", value: "foyer-unit" },
          { title: "Vanity Unit Design", value: "vanity-unit" },
          { title: "Bedroom Design", value: "bedroom-design" },
          { title: "Wardrobe Design", value: "wardrobe-design" },
        ],
        layout: "dropdown",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "images",
      title: "Gallery Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "title",
              title: "Specific Title (Optional)",
              type: "string",
              description: "Will fall back to the category name if left blank.",
            },
            {
              name: "locality",
              title: "Specific Locality (Optional)",
              type: "string",
              description: "Defaults to 'Silchar' if left blank.",
            },
            {
              name: "description",
              title: "Description (Optional)",
              type: "text",
              rows: 2,
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      category: "category",
      images: "images",
    },
    prepare(selection) {
      const { category, images } = selection;
      const count = images ? images.length : 0;
      const formattedCategory = category
        ? category
            .split("-")
            .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
        : "Unnamed Gallery";
      return {
        title: formattedCategory,
        subtitle: `${count} image${count === 1 ? "" : "s"} uploaded`,
      };
    },
  },
});
