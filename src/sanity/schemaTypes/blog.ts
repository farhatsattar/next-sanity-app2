import {defineField, defineType} from 'sanity'

export const blogType = defineType({
 
 
    name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
        name: 'image',
        type: 'image',
        title: 'Image',
      }),
      defineField({
        name: 'description',
        type: 'text',
        title: 'Description',
      }),
  ],
})