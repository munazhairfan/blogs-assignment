import { type SchemaTypeDefinition } from 'sanity'
import blogTypes from './blogTypes'
import blockContent from './blockContent'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blogTypes,
    blockContent
  ],
}
