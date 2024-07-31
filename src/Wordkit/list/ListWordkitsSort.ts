import { Sortable } from '../../common'

export enum ListWordkitsSortFields {
  title = 'title',
  level = 'level',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export type ListWordkitsSortBy = `${ListWordkitsSortFields}`

export type ListWordkitsSortType = Sortable<ListWordkitsSortBy>
