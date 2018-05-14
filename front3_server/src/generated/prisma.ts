import { Prisma as BasePrisma, BasePrismaOptions } from 'prisma-binding'
import { GraphQLResolveInfo } from 'graphql'

export const typeDefs = `
type AggregateEvent {
  count: Int!
}

type AggregateTeam {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """
  The number of nodes that have been affected by the Batch operation.
  """
  count: Long!
}

type Event implements Node {
  id: ID!
  name: String
  iconUrl: String
}

"""
A connection to a list of items.
"""
type EventConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [EventEdge]!
  aggregate: AggregateEvent!
}

input EventCreateInput {
  name: String
  iconUrl: String
}

"""
An edge in a connection.
"""
type EventEdge {
  """
  The item at the end of the edge.
  """
  node: Event!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum EventOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  iconUrl_ASC
  iconUrl_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type EventPreviousValues {
  id: ID!
  name: String
  iconUrl: String
}

type EventSubscriptionPayload {
  mutation: MutationType!
  node: Event
  updatedFields: [String!]
  previousValues: EventPreviousValues
}

input EventSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [EventSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [EventSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [EventSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: EventWhereInput
}

input EventUpdateInput {
  name: String
  iconUrl: String
}

input EventWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [EventWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [EventWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [EventWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  iconUrl: String
  """
  All values that are not equal to given value.
  """
  iconUrl_not: String
  """
  All values that are contained in given list.
  """
  iconUrl_in: [String!]
  """
  All values that are not contained in given list.
  """
  iconUrl_not_in: [String!]
  """
  All values less than the given value.
  """
  iconUrl_lt: String
  """
  All values less than or equal the given value.
  """
  iconUrl_lte: String
  """
  All values greater than the given value.
  """
  iconUrl_gt: String
  """
  All values greater than or equal the given value.
  """
  iconUrl_gte: String
  """
  All values containing the given string.
  """
  iconUrl_contains: String
  """
  All values not containing the given string.
  """
  iconUrl_not_contains: String
  """
  All values starting with the given string.
  """
  iconUrl_starts_with: String
  """
  All values not starting with the given string.
  """
  iconUrl_not_starts_with: String
  """
  All values ending with the given string.
  """
  iconUrl_ends_with: String
  """
  All values not ending with the given string.
  """
  iconUrl_not_ends_with: String
}

input EventWhereUniqueInput {
  id: ID
}

"""
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""
An object with an ID
"""
interface Node {
  """
  The id of the object.
  """
  id: ID!
}

"""
Information about pagination in a connection.
"""
type PageInfo {
  """
  When paginating forwards, are there more items?
  """
  hasNextPage: Boolean!
  """
  When paginating backwards, are there more items?
  """
  hasPreviousPage: Boolean!
  """
  When paginating backwards, the cursor to continue.
  """
  startCursor: String
  """
  When paginating forwards, the cursor to continue.
  """
  endCursor: String
}

type Team implements Node {
  id: ID!
  name: String
  members(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  logoUrl: String
}

"""
A connection to a list of items.
"""
type TeamConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [TeamEdge]!
  aggregate: AggregateTeam!
}

input TeamCreateInput {
  name: String
  logoUrl: String
  members: UserCreateManyWithoutTeamsInput
}

input TeamCreateManyWithoutMembersInput {
  create: [TeamCreateWithoutMembersInput!]
  connect: [TeamWhereUniqueInput!]
}

input TeamCreateWithoutMembersInput {
  name: String
  logoUrl: String
}

"""
An edge in a connection.
"""
type TeamEdge {
  """
  The item at the end of the edge.
  """
  node: Team!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum TeamOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  logoUrl_ASC
  logoUrl_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type TeamPreviousValues {
  id: ID!
  name: String
  logoUrl: String
}

type TeamSubscriptionPayload {
  mutation: MutationType!
  node: Team
  updatedFields: [String!]
  previousValues: TeamPreviousValues
}

input TeamSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [TeamSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [TeamSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [TeamSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: TeamWhereInput
}

input TeamUpdateInput {
  name: String
  logoUrl: String
  members: UserUpdateManyWithoutTeamsInput
}

input TeamUpdateManyWithoutMembersInput {
  create: [TeamCreateWithoutMembersInput!]
  connect: [TeamWhereUniqueInput!]
  disconnect: [TeamWhereUniqueInput!]
  delete: [TeamWhereUniqueInput!]
  update: [TeamUpdateWithWhereUniqueWithoutMembersInput!]
  upsert: [TeamUpsertWithWhereUniqueWithoutMembersInput!]
}

input TeamUpdateWithoutMembersDataInput {
  name: String
  logoUrl: String
}

input TeamUpdateWithWhereUniqueWithoutMembersInput {
  where: TeamWhereUniqueInput!
  data: TeamUpdateWithoutMembersDataInput!
}

input TeamUpsertWithWhereUniqueWithoutMembersInput {
  where: TeamWhereUniqueInput!
  update: TeamUpdateWithoutMembersDataInput!
  create: TeamCreateWithoutMembersInput!
}

input TeamWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [TeamWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [TeamWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [TeamWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  logoUrl: String
  """
  All values that are not equal to given value.
  """
  logoUrl_not: String
  """
  All values that are contained in given list.
  """
  logoUrl_in: [String!]
  """
  All values that are not contained in given list.
  """
  logoUrl_not_in: [String!]
  """
  All values less than the given value.
  """
  logoUrl_lt: String
  """
  All values less than or equal the given value.
  """
  logoUrl_lte: String
  """
  All values greater than the given value.
  """
  logoUrl_gt: String
  """
  All values greater than or equal the given value.
  """
  logoUrl_gte: String
  """
  All values containing the given string.
  """
  logoUrl_contains: String
  """
  All values not containing the given string.
  """
  logoUrl_not_contains: String
  """
  All values starting with the given string.
  """
  logoUrl_starts_with: String
  """
  All values not starting with the given string.
  """
  logoUrl_not_starts_with: String
  """
  All values ending with the given string.
  """
  logoUrl_ends_with: String
  """
  All values not ending with the given string.
  """
  logoUrl_not_ends_with: String
  members_every: UserWhereInput
  members_some: UserWhereInput
  members_none: UserWhereInput
}

input TeamWhereUniqueInput {
  id: ID
}

type User implements Node {
  id: ID!
  name: String
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team!]
}

"""
A connection to a list of items.
"""
type UserConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String
  teams: TeamCreateManyWithoutMembersInput
}

input UserCreateManyWithoutTeamsInput {
  create: [UserCreateWithoutTeamsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateWithoutTeamsInput {
  name: String
}

"""
An edge in a connection.
"""
type UserEdge {
  """
  The item at the end of the edge.
  """
  node: User!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  name: String
  teams: TeamUpdateManyWithoutMembersInput
}

input UserUpdateManyWithoutTeamsInput {
  create: [UserCreateWithoutTeamsInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutTeamsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutTeamsInput!]
}

input UserUpdateWithoutTeamsDataInput {
  name: String
}

input UserUpdateWithWhereUniqueWithoutTeamsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutTeamsDataInput!
}

input UserUpsertWithWhereUniqueWithoutTeamsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutTeamsDataInput!
  create: UserCreateWithoutTeamsInput!
}

input UserWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  teams_every: TeamWhereInput
  teams_some: TeamWhereInput
  teams_none: TeamWhereInput
}

input UserWhereUniqueInput {
  id: ID
  name: String
}

type Mutation {
  createUser(data: UserCreateInput!): User!
  createTeam(data: TeamCreateInput!): Team!
  createEvent(data: EventCreateInput!): Event!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateTeam(data: TeamUpdateInput!, where: TeamWhereUniqueInput!): Team
  updateEvent(data: EventUpdateInput!, where: EventWhereUniqueInput!): Event
  deleteUser(where: UserWhereUniqueInput!): User
  deleteTeam(where: TeamWhereUniqueInput!): Team
  deleteEvent(where: EventWhereUniqueInput!): Event
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertTeam(where: TeamWhereUniqueInput!, create: TeamCreateInput!, update: TeamUpdateInput!): Team!
  upsertEvent(where: EventWhereUniqueInput!, create: EventCreateInput!, update: EventUpdateInput!): Event!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyTeams(data: TeamUpdateInput!, where: TeamWhereInput): BatchPayload!
  updateManyEvents(data: EventUpdateInput!, where: EventWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyTeams(where: TeamWhereInput): BatchPayload!
  deleteManyEvents(where: EventWhereInput): BatchPayload!
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team]!
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event]!
  user(where: UserWhereUniqueInput!): User
  team(where: TeamWhereUniqueInput!): Team
  event(where: EventWhereUniqueInput!): Event
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  teamsConnection(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TeamConnection!
  eventsConnection(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventConnection!
  """
  Fetches an object given its ID
  """
  node("""
  The ID of an object
  """
  id: ID!): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  team(where: TeamSubscriptionWhereInput): TeamSubscriptionPayload
  event(where: EventSubscriptionWhereInput): EventSubscriptionPayload
}
`

export type TeamOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'logoUrl_ASC' |
  'logoUrl_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type EventOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'iconUrl_ASC' |
  'iconUrl_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType = 
  'CREATED' |
  'UPDATED' |
  'DELETED'

export interface TeamCreateManyWithoutMembersInput {
  create?: TeamCreateWithoutMembersInput[] | TeamCreateWithoutMembersInput
  connect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  teams_every?: TeamWhereInput
  teams_some?: TeamWhereInput
  teams_none?: TeamWhereInput
}

export interface UserUpdateManyWithoutTeamsInput {
  create?: UserCreateWithoutTeamsInput[] | UserCreateWithoutTeamsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutTeamsInput[] | UserUpdateWithWhereUniqueWithoutTeamsInput
  upsert?: UserUpsertWithWhereUniqueWithoutTeamsInput[] | UserUpsertWithWhereUniqueWithoutTeamsInput
}

export interface UserCreateWithoutTeamsInput {
  name?: String
}

export interface TeamUpdateInput {
  name?: String
  logoUrl?: String
  members?: UserUpdateManyWithoutTeamsInput
}

export interface UserCreateManyWithoutTeamsInput {
  create?: UserCreateWithoutTeamsInput[] | UserCreateWithoutTeamsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface TeamUpsertWithWhereUniqueWithoutMembersInput {
  where: TeamWhereUniqueInput
  update: TeamUpdateWithoutMembersDataInput
  create: TeamCreateWithoutMembersInput
}

export interface TeamSubscriptionWhereInput {
  AND?: TeamSubscriptionWhereInput[] | TeamSubscriptionWhereInput
  OR?: TeamSubscriptionWhereInput[] | TeamSubscriptionWhereInput
  NOT?: TeamSubscriptionWhereInput[] | TeamSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: TeamWhereInput
}

export interface TeamUpdateWithoutMembersDataInput {
  name?: String
  logoUrl?: String
}

export interface TeamWhereInput {
  AND?: TeamWhereInput[] | TeamWhereInput
  OR?: TeamWhereInput[] | TeamWhereInput
  NOT?: TeamWhereInput[] | TeamWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  logoUrl?: String
  logoUrl_not?: String
  logoUrl_in?: String[] | String
  logoUrl_not_in?: String[] | String
  logoUrl_lt?: String
  logoUrl_lte?: String
  logoUrl_gt?: String
  logoUrl_gte?: String
  logoUrl_contains?: String
  logoUrl_not_contains?: String
  logoUrl_starts_with?: String
  logoUrl_not_starts_with?: String
  logoUrl_ends_with?: String
  logoUrl_not_ends_with?: String
  members_every?: UserWhereInput
  members_some?: UserWhereInput
  members_none?: UserWhereInput
}

export interface TeamUpdateWithWhereUniqueWithoutMembersInput {
  where: TeamWhereUniqueInput
  data: TeamUpdateWithoutMembersDataInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface TeamUpdateManyWithoutMembersInput {
  create?: TeamCreateWithoutMembersInput[] | TeamCreateWithoutMembersInput
  connect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
  disconnect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
  delete?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
  update?: TeamUpdateWithWhereUniqueWithoutMembersInput[] | TeamUpdateWithWhereUniqueWithoutMembersInput
  upsert?: TeamUpsertWithWhereUniqueWithoutMembersInput[] | TeamUpsertWithWhereUniqueWithoutMembersInput
}

export interface EventWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateInput {
  name?: String
  teams?: TeamUpdateManyWithoutMembersInput
}

export interface UserUpsertWithWhereUniqueWithoutTeamsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutTeamsDataInput
  create: UserCreateWithoutTeamsInput
}

export interface UserCreateInput {
  name?: String
  teams?: TeamCreateManyWithoutMembersInput
}

export interface UserUpdateWithWhereUniqueWithoutTeamsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutTeamsDataInput
}

export interface EventWhereInput {
  AND?: EventWhereInput[] | EventWhereInput
  OR?: EventWhereInput[] | EventWhereInput
  NOT?: EventWhereInput[] | EventWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  iconUrl?: String
  iconUrl_not?: String
  iconUrl_in?: String[] | String
  iconUrl_not_in?: String[] | String
  iconUrl_lt?: String
  iconUrl_lte?: String
  iconUrl_gt?: String
  iconUrl_gte?: String
  iconUrl_contains?: String
  iconUrl_not_contains?: String
  iconUrl_starts_with?: String
  iconUrl_not_starts_with?: String
  iconUrl_ends_with?: String
  iconUrl_not_ends_with?: String
}

export interface TeamCreateInput {
  name?: String
  logoUrl?: String
  members?: UserCreateManyWithoutTeamsInput
}

export interface TeamCreateWithoutMembersInput {
  name?: String
  logoUrl?: String
}

export interface EventCreateInput {
  name?: String
  iconUrl?: String
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface EventSubscriptionWhereInput {
  AND?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput
  OR?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput
  NOT?: EventSubscriptionWhereInput[] | EventSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: EventWhereInput
}

export interface UserUpdateWithoutTeamsDataInput {
  name?: String
}

export interface EventUpdateInput {
  name?: String
  iconUrl?: String
}

export interface TeamWhereUniqueInput {
  id?: ID_Input
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface EventPreviousValues {
  id: ID_Output
  name?: String
  iconUrl?: String
}

export interface BatchPayload {
  count: Long
}

export interface User extends Node {
  id: ID_Output
  name?: String
  teams?: Team[]
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface TeamSubscriptionPayload {
  mutation: MutationType
  node?: Team
  updatedFields?: String[]
  previousValues?: TeamPreviousValues
}

export interface AggregateEvent {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface EventEdge {
  node: Event
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface EventConnection {
  pageInfo: PageInfo
  edges: EventEdge[]
  aggregate: AggregateEvent
}

/*
 * An edge in a connection.

 */
export interface TeamEdge {
  node: Team
  cursor: String
}

export interface Event extends Node {
  id: ID_Output
  name?: String
  iconUrl?: String
}

export interface AggregateUser {
  count: Int
}

export interface EventSubscriptionPayload {
  mutation: MutationType
  node?: Event
  updatedFields?: String[]
  previousValues?: EventPreviousValues
}

export interface Team extends Node {
  id: ID_Output
  name?: String
  members?: User[]
  logoUrl?: String
}

export interface UserPreviousValues {
  id: ID_Output
  name?: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface TeamPreviousValues {
  id: ID_Output
  name?: String
  logoUrl?: String
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface TeamConnection {
  pageInfo: PageInfo
  edges: TeamEdge[]
  aggregate: AggregateTeam
}

export interface AggregateTeam {
  count: Int
}

/*
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export interface Schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

export type Query = {
  users: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<User[]>
  teams: (args: { where?: TeamWhereInput, orderBy?: TeamOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Team[]>
  events: (args: { where?: EventWhereInput, orderBy?: EventOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Event[]>
  user: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  team: (args: { where: TeamWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Team | null>
  event: (args: { where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Event | null>
  usersConnection: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<UserConnection>
  teamsConnection: (args: { where?: TeamWhereInput, orderBy?: TeamOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<TeamConnection>
  eventsConnection: (args: { where?: EventWhereInput, orderBy?: EventOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<EventConnection>
  node: (args: { id: ID_Output }, info?: GraphQLResolveInfo | string) => Promise<Node | null>
}

export type Mutation = {
  createUser: (args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  createTeam: (args: { data: TeamCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Team>
  createEvent: (args: { data: EventCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Event>
  updateUser: (args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  updateTeam: (args: { data: TeamUpdateInput, where: TeamWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Team | null>
  updateEvent: (args: { data: EventUpdateInput, where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Event | null>
  deleteUser: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  deleteTeam: (args: { where: TeamWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Team | null>
  deleteEvent: (args: { where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Event | null>
  upsertUser: (args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  upsertTeam: (args: { where: TeamWhereUniqueInput, create: TeamCreateInput, update: TeamUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Team>
  upsertEvent: (args: { where: EventWhereUniqueInput, create: EventCreateInput, update: EventUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Event>
  updateManyUsers: (args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyTeams: (args: { data: TeamUpdateInput, where?: TeamWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyEvents: (args: { data: EventUpdateInput, where?: EventWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyUsers: (args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyTeams: (args: { where?: TeamWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyEvents: (args: { where?: EventWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
}

export type Subscription = {
  user: (args: { where?: UserSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<UserSubscriptionPayload>>
  team: (args: { where?: TeamSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<TeamSubscriptionPayload>>
  event: (args: { where?: EventSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<EventSubscriptionPayload>>
}

export class Prisma extends BasePrisma {
  
  constructor({ endpoint, secret, fragmentReplacements, debug }: BasePrismaOptions) {
    super({ typeDefs, endpoint, secret, fragmentReplacements, debug });
  }

  exists = {
    User: (where: UserWhereInput): Promise<boolean> => super.existsDelegate('query', 'users', { where }, {}, '{ id }'),
    Team: (where: TeamWhereInput): Promise<boolean> => super.existsDelegate('query', 'teams', { where }, {}, '{ id }'),
    Event: (where: EventWhereInput): Promise<boolean> => super.existsDelegate('query', 'events', { where }, {}, '{ id }')
  }

  query: Query = {
    users: (args, info): Promise<User[]> => super.delegate('query', 'users', args, {}, info),
    teams: (args, info): Promise<Team[]> => super.delegate('query', 'teams', args, {}, info),
    events: (args, info): Promise<Event[]> => super.delegate('query', 'events', args, {}, info),
    user: (args, info): Promise<User | null> => super.delegate('query', 'user', args, {}, info),
    team: (args, info): Promise<Team | null> => super.delegate('query', 'team', args, {}, info),
    event: (args, info): Promise<Event | null> => super.delegate('query', 'event', args, {}, info),
    usersConnection: (args, info): Promise<UserConnection> => super.delegate('query', 'usersConnection', args, {}, info),
    teamsConnection: (args, info): Promise<TeamConnection> => super.delegate('query', 'teamsConnection', args, {}, info),
    eventsConnection: (args, info): Promise<EventConnection> => super.delegate('query', 'eventsConnection', args, {}, info),
    node: (args, info): Promise<Node | null> => super.delegate('query', 'node', args, {}, info)
  }

  mutation: Mutation = {
    createUser: (args, info): Promise<User> => super.delegate('mutation', 'createUser', args, {}, info),
    createTeam: (args, info): Promise<Team> => super.delegate('mutation', 'createTeam', args, {}, info),
    createEvent: (args, info): Promise<Event> => super.delegate('mutation', 'createEvent', args, {}, info),
    updateUser: (args, info): Promise<User | null> => super.delegate('mutation', 'updateUser', args, {}, info),
    updateTeam: (args, info): Promise<Team | null> => super.delegate('mutation', 'updateTeam', args, {}, info),
    updateEvent: (args, info): Promise<Event | null> => super.delegate('mutation', 'updateEvent', args, {}, info),
    deleteUser: (args, info): Promise<User | null> => super.delegate('mutation', 'deleteUser', args, {}, info),
    deleteTeam: (args, info): Promise<Team | null> => super.delegate('mutation', 'deleteTeam', args, {}, info),
    deleteEvent: (args, info): Promise<Event | null> => super.delegate('mutation', 'deleteEvent', args, {}, info),
    upsertUser: (args, info): Promise<User> => super.delegate('mutation', 'upsertUser', args, {}, info),
    upsertTeam: (args, info): Promise<Team> => super.delegate('mutation', 'upsertTeam', args, {}, info),
    upsertEvent: (args, info): Promise<Event> => super.delegate('mutation', 'upsertEvent', args, {}, info),
    updateManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyUsers', args, {}, info),
    updateManyTeams: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyTeams', args, {}, info),
    updateManyEvents: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyEvents', args, {}, info),
    deleteManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyUsers', args, {}, info),
    deleteManyTeams: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyTeams', args, {}, info),
    deleteManyEvents: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyEvents', args, {}, info)
  }

  subscription: Subscription = {
    user: (args, infoOrQuery): Promise<AsyncIterator<UserSubscriptionPayload>> => super.delegateSubscription('user', args, {}, infoOrQuery),
    team: (args, infoOrQuery): Promise<AsyncIterator<TeamSubscriptionPayload>> => super.delegateSubscription('team', args, {}, infoOrQuery),
    event: (args, infoOrQuery): Promise<AsyncIterator<EventSubscriptionPayload>> => super.delegateSubscription('event', args, {}, infoOrQuery)
  }
}