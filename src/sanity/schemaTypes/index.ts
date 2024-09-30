import { type SchemaTypeDefinition } from 'sanity'
import { blogType } from './blog'
import { authorType } from './author'
import { postType } from './post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogType,authorType,postType],
}
