import { defineField, defineType } from 'sanity';

export const postType = defineType({

  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{ type: 'author' }], 
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
    defineField({
      name:'blog',
      title:'Blog',
      type:'array',
      of: [{ type: 'reference', to: [{ type: 'blog' }] }],
    }),
    defineField({
      name: 'publisheddate',
      type: 'date',
      title: 'PublishedDate',
    }),
    
  ],
});
