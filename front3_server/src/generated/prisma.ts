import { Prisma as BasePrisma, BasePrismaOptions } from 'prisma-binding'
import { GraphQLResolveInfo } from 'graphql'

export const typeDefs = `
type AggregateEvent {
  count: Int!
}

type AggregateInterest {
  count: Int!
}

type AggregateLol {
  count: Int!
}

type AggregateOverwatch {
  count: Int!
}

type AggregatePubg {
  count: Int!
}

type AggregateScrimmage {
  count: Int!
}

type AggregateTeam {
  count: Int!
}

type AggregateTeamComment {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateUserComment {
  count: Int!
}

type AggregateUserMatching {
  count: Int!
}

type BatchPayload {
  """
  The number of nodes that have been affected by the Batch operation.
  """
  count: Long!
}

scalar DateTime

type Event implements Node {
  id: ID!
  topic: String
  place: String
  type: String
  startDateTime: DateTime
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
  topic: String
  place: String
  type: String
  startDateTime: DateTime
}

input EventCreateManyInput {
  create: [EventCreateInput!]
  connect: [EventWhereUniqueInput!]
}

input EventCreateOneInput {
  create: EventCreateInput
  connect: EventWhereUniqueInput
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
  topic_ASC
  topic_DESC
  place_ASC
  place_DESC
  type_ASC
  type_DESC
  startDateTime_ASC
  startDateTime_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type EventPreviousValues {
  id: ID!
  topic: String
  place: String
  type: String
  startDateTime: DateTime
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

input EventUpdateDataInput {
  topic: String
  place: String
  type: String
  startDateTime: DateTime
}

input EventUpdateInput {
  topic: String
  place: String
  type: String
  startDateTime: DateTime
}

input EventUpdateManyInput {
  create: [EventCreateInput!]
  connect: [EventWhereUniqueInput!]
  disconnect: [EventWhereUniqueInput!]
  delete: [EventWhereUniqueInput!]
  update: [EventUpdateWithWhereUniqueNestedInput!]
  upsert: [EventUpsertWithWhereUniqueNestedInput!]
}

input EventUpdateOneInput {
  create: EventCreateInput
  connect: EventWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: EventUpdateDataInput
  upsert: EventUpsertNestedInput
}

input EventUpdateWithWhereUniqueNestedInput {
  where: EventWhereUniqueInput!
  data: EventUpdateDataInput!
}

input EventUpsertNestedInput {
  update: EventUpdateDataInput!
  create: EventCreateInput!
}

input EventUpsertWithWhereUniqueNestedInput {
  where: EventWhereUniqueInput!
  update: EventUpdateDataInput!
  create: EventCreateInput!
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
  topic: String
  """
  All values that are not equal to given value.
  """
  topic_not: String
  """
  All values that are contained in given list.
  """
  topic_in: [String!]
  """
  All values that are not contained in given list.
  """
  topic_not_in: [String!]
  """
  All values less than the given value.
  """
  topic_lt: String
  """
  All values less than or equal the given value.
  """
  topic_lte: String
  """
  All values greater than the given value.
  """
  topic_gt: String
  """
  All values greater than or equal the given value.
  """
  topic_gte: String
  """
  All values containing the given string.
  """
  topic_contains: String
  """
  All values not containing the given string.
  """
  topic_not_contains: String
  """
  All values starting with the given string.
  """
  topic_starts_with: String
  """
  All values not starting with the given string.
  """
  topic_not_starts_with: String
  """
  All values ending with the given string.
  """
  topic_ends_with: String
  """
  All values not ending with the given string.
  """
  topic_not_ends_with: String
  place: String
  """
  All values that are not equal to given value.
  """
  place_not: String
  """
  All values that are contained in given list.
  """
  place_in: [String!]
  """
  All values that are not contained in given list.
  """
  place_not_in: [String!]
  """
  All values less than the given value.
  """
  place_lt: String
  """
  All values less than or equal the given value.
  """
  place_lte: String
  """
  All values greater than the given value.
  """
  place_gt: String
  """
  All values greater than or equal the given value.
  """
  place_gte: String
  """
  All values containing the given string.
  """
  place_contains: String
  """
  All values not containing the given string.
  """
  place_not_contains: String
  """
  All values starting with the given string.
  """
  place_starts_with: String
  """
  All values not starting with the given string.
  """
  place_not_starts_with: String
  """
  All values ending with the given string.
  """
  place_ends_with: String
  """
  All values not ending with the given string.
  """
  place_not_ends_with: String
  type: String
  """
  All values that are not equal to given value.
  """
  type_not: String
  """
  All values that are contained in given list.
  """
  type_in: [String!]
  """
  All values that are not contained in given list.
  """
  type_not_in: [String!]
  """
  All values less than the given value.
  """
  type_lt: String
  """
  All values less than or equal the given value.
  """
  type_lte: String
  """
  All values greater than the given value.
  """
  type_gt: String
  """
  All values greater than or equal the given value.
  """
  type_gte: String
  """
  All values containing the given string.
  """
  type_contains: String
  """
  All values not containing the given string.
  """
  type_not_contains: String
  """
  All values starting with the given string.
  """
  type_starts_with: String
  """
  All values not starting with the given string.
  """
  type_not_starts_with: String
  """
  All values ending with the given string.
  """
  type_ends_with: String
  """
  All values not ending with the given string.
  """
  type_not_ends_with: String
  startDateTime: DateTime
  """
  All values that are not equal to given value.
  """
  startDateTime_not: DateTime
  """
  All values that are contained in given list.
  """
  startDateTime_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  startDateTime_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  startDateTime_lt: DateTime
  """
  All values less than or equal the given value.
  """
  startDateTime_lte: DateTime
  """
  All values greater than the given value.
  """
  startDateTime_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  startDateTime_gte: DateTime
}

input EventWhereUniqueInput {
  id: ID
}

type Interest implements Node {
  id: ID!
}

"""
A connection to a list of items.
"""
type InterestConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [InterestEdge]!
  aggregate: AggregateInterest!
}

input InterestCreateManyInput {
  connect: [InterestWhereUniqueInput!]
}

"""
An edge in a connection.
"""
type InterestEdge {
  """
  The item at the end of the edge.
  """
  node: Interest!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum InterestOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type InterestPreviousValues {
  id: ID!
}

type InterestSubscriptionPayload {
  mutation: MutationType!
  node: Interest
  updatedFields: [String!]
  previousValues: InterestPreviousValues
}

input InterestSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [InterestSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [InterestSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [InterestSubscriptionWhereInput!]
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
  node: InterestWhereInput
}

input InterestUpdateManyInput {
  connect: [InterestWhereUniqueInput!]
  disconnect: [InterestWhereUniqueInput!]
  delete: [InterestWhereUniqueInput!]
}

input InterestWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [InterestWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [InterestWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [InterestWhereInput!]
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
}

input InterestWhereUniqueInput {
  id: ID
}

type Lol implements Node {
  id: ID!
  gameType: LolGameType
  lolTier: LolTier
  lolRole: LolRole
}

"""
A connection to a list of items.
"""
type LolConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [LolEdge]!
  aggregate: AggregateLol!
}

input LolCreateInput {
  gameType: LolGameType
  lolTier: LolTier
  lolRole: LolRole
}

"""
An edge in a connection.
"""
type LolEdge {
  """
  The item at the end of the edge.
  """
  node: Lol!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum LolGameType {
  DUO_RANK
  FLEX_RANK
}

enum LolOrderByInput {
  id_ASC
  id_DESC
  gameType_ASC
  gameType_DESC
  lolTier_ASC
  lolTier_DESC
  lolRole_ASC
  lolRole_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type LolPreviousValues {
  id: ID!
  gameType: LolGameType
  lolTier: LolTier
  lolRole: LolRole
}

enum LolRole {
  FLEX
  TOP
  JUNGLE
  MID
  ADC
  SUPPORT
}

type LolSubscriptionPayload {
  mutation: MutationType!
  node: Lol
  updatedFields: [String!]
  previousValues: LolPreviousValues
}

input LolSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [LolSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [LolSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [LolSubscriptionWhereInput!]
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
  node: LolWhereInput
}

enum LolTier {
  DIAMOND
  PLATINUM
  GOLD
  SILVER
  BRONZE
}

input LolUpdateInput {
  gameType: LolGameType
  lolTier: LolTier
  lolRole: LolRole
}

input LolWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [LolWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [LolWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [LolWhereInput!]
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
  gameType: LolGameType
  """
  All values that are not equal to given value.
  """
  gameType_not: LolGameType
  """
  All values that are contained in given list.
  """
  gameType_in: [LolGameType!]
  """
  All values that are not contained in given list.
  """
  gameType_not_in: [LolGameType!]
  lolTier: LolTier
  """
  All values that are not equal to given value.
  """
  lolTier_not: LolTier
  """
  All values that are contained in given list.
  """
  lolTier_in: [LolTier!]
  """
  All values that are not contained in given list.
  """
  lolTier_not_in: [LolTier!]
  lolRole: LolRole
  """
  All values that are not equal to given value.
  """
  lolRole_not: LolRole
  """
  All values that are contained in given list.
  """
  lolRole_in: [LolRole!]
  """
  All values that are not contained in given list.
  """
  lolRole_not_in: [LolRole!]
}

input LolWhereUniqueInput {
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

type Overwatch implements Node {
  id: ID!
  gameType: OverwatchGameType
  overwatchTier: OverwatchTier
  overwatchRole: OverwatchRole
}

"""
A connection to a list of items.
"""
type OverwatchConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [OverwatchEdge]!
  aggregate: AggregateOverwatch!
}

input OverwatchCreateInput {
  gameType: OverwatchGameType
  overwatchTier: OverwatchTier
  overwatchRole: OverwatchRole
}

"""
An edge in a connection.
"""
type OverwatchEdge {
  """
  The item at the end of the edge.
  """
  node: Overwatch!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum OverwatchGameType {
  COMPETITIVE
  QUICK
}

enum OverwatchOrderByInput {
  id_ASC
  id_DESC
  gameType_ASC
  gameType_DESC
  overwatchTier_ASC
  overwatchTier_DESC
  overwatchRole_ASC
  overwatchRole_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type OverwatchPreviousValues {
  id: ID!
  gameType: OverwatchGameType
  overwatchTier: OverwatchTier
  overwatchRole: OverwatchRole
}

enum OverwatchRole {
  FLEX
  TANK
  DPS
  HEAL
}

type OverwatchSubscriptionPayload {
  mutation: MutationType!
  node: Overwatch
  updatedFields: [String!]
  previousValues: OverwatchPreviousValues
}

input OverwatchSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [OverwatchSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [OverwatchSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [OverwatchSubscriptionWhereInput!]
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
  node: OverwatchWhereInput
}

enum OverwatchTier {
  DIAMOND
  PLATINUM
  GOLD
  SILVER
  BRONZE
}

input OverwatchUpdateInput {
  gameType: OverwatchGameType
  overwatchTier: OverwatchTier
  overwatchRole: OverwatchRole
}

input OverwatchWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [OverwatchWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [OverwatchWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [OverwatchWhereInput!]
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
  gameType: OverwatchGameType
  """
  All values that are not equal to given value.
  """
  gameType_not: OverwatchGameType
  """
  All values that are contained in given list.
  """
  gameType_in: [OverwatchGameType!]
  """
  All values that are not contained in given list.
  """
  gameType_not_in: [OverwatchGameType!]
  overwatchTier: OverwatchTier
  """
  All values that are not equal to given value.
  """
  overwatchTier_not: OverwatchTier
  """
  All values that are contained in given list.
  """
  overwatchTier_in: [OverwatchTier!]
  """
  All values that are not contained in given list.
  """
  overwatchTier_not_in: [OverwatchTier!]
  overwatchRole: OverwatchRole
  """
  All values that are not equal to given value.
  """
  overwatchRole_not: OverwatchRole
  """
  All values that are contained in given list.
  """
  overwatchRole_in: [OverwatchRole!]
  """
  All values that are not contained in given list.
  """
  overwatchRole_not_in: [OverwatchRole!]
}

input OverwatchWhereUniqueInput {
  id: ID
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

type Pubg implements Node {
  id: ID!
  gameType: PubgGameType
  server: PubgServer
}

"""
A connection to a list of items.
"""
type PubgConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [PubgEdge]!
  aggregate: AggregatePubg!
}

input PubgCreateInput {
  gameType: PubgGameType
  server: PubgServer
}

"""
An edge in a connection.
"""
type PubgEdge {
  """
  The item at the end of the edge.
  """
  node: Pubg!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum PubgGameType {
  SQUAD
  DUO
}

enum PubgOrderByInput {
  id_ASC
  id_DESC
  gameType_ASC
  gameType_DESC
  server_ASC
  server_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PubgPreviousValues {
  id: ID!
  gameType: PubgGameType
  server: PubgServer
}

enum PubgServer {
  KAKAO
  STEAM
}

type PubgSubscriptionPayload {
  mutation: MutationType!
  node: Pubg
  updatedFields: [String!]
  previousValues: PubgPreviousValues
}

input PubgSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [PubgSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [PubgSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [PubgSubscriptionWhereInput!]
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
  node: PubgWhereInput
}

input PubgUpdateInput {
  gameType: PubgGameType
  server: PubgServer
}

input PubgWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [PubgWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [PubgWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [PubgWhereInput!]
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
  gameType: PubgGameType
  """
  All values that are not equal to given value.
  """
  gameType_not: PubgGameType
  """
  All values that are contained in given list.
  """
  gameType_in: [PubgGameType!]
  """
  All values that are not contained in given list.
  """
  gameType_not_in: [PubgGameType!]
  server: PubgServer
  """
  All values that are not equal to given value.
  """
  server_not: PubgServer
  """
  All values that are contained in given list.
  """
  server_in: [PubgServer!]
  """
  All values that are not contained in given list.
  """
  server_not_in: [PubgServer!]
}

input PubgWhereUniqueInput {
  id: ID
}

type Scrimmage implements Node {
  id: ID!
}

"""
A connection to a list of items.
"""
type ScrimmageConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [ScrimmageEdge]!
  aggregate: AggregateScrimmage!
}

"""
An edge in a connection.
"""
type ScrimmageEdge {
  """
  The item at the end of the edge.
  """
  node: Scrimmage!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum ScrimmageOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ScrimmagePreviousValues {
  id: ID!
}

type ScrimmageSubscriptionPayload {
  mutation: MutationType!
  node: Scrimmage
  updatedFields: [String!]
  previousValues: ScrimmagePreviousValues
}

input ScrimmageSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ScrimmageSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ScrimmageSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ScrimmageSubscriptionWhereInput!]
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
  node: ScrimmageWhereInput
}

input ScrimmageWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ScrimmageWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ScrimmageWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ScrimmageWhereInput!]
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
}

input ScrimmageWhereUniqueInput {
  id: ID
}

type Team implements Node {
  id: ID!
  name: String
  topic: TeamTopic
  description: String
  members(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  followed(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  comments(where: TeamCommentWhereInput, orderBy: TeamCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TeamComment!]
}

type TeamComment implements Node {
  id: ID!
  writer(where: UserWhereInput): User
  tag: TeamCommentTag
  comment: String
  related_event(where: EventWhereInput): Event
}

"""
A connection to a list of items.
"""
type TeamCommentConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [TeamCommentEdge]!
  aggregate: AggregateTeamComment!
}

input TeamCommentCreateInput {
  tag: TeamCommentTag
  comment: String
  writer: UserCreateOneInput
  related_event: EventCreateOneInput
}

input TeamCommentCreateManyInput {
  create: [TeamCommentCreateInput!]
  connect: [TeamCommentWhereUniqueInput!]
}

"""
An edge in a connection.
"""
type TeamCommentEdge {
  """
  The item at the end of the edge.
  """
  node: TeamComment!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum TeamCommentOrderByInput {
  id_ASC
  id_DESC
  tag_ASC
  tag_DESC
  comment_ASC
  comment_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type TeamCommentPreviousValues {
  id: ID!
  tag: TeamCommentTag
  comment: String
}

type TeamCommentSubscriptionPayload {
  mutation: MutationType!
  node: TeamComment
  updatedFields: [String!]
  previousValues: TeamCommentPreviousValues
}

input TeamCommentSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [TeamCommentSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [TeamCommentSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [TeamCommentSubscriptionWhereInput!]
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
  node: TeamCommentWhereInput
}

enum TeamCommentTag {
  KIND
  FUNNY
}

input TeamCommentUpdateDataInput {
  tag: TeamCommentTag
  comment: String
  writer: UserUpdateOneInput
  related_event: EventUpdateOneInput
}

input TeamCommentUpdateInput {
  tag: TeamCommentTag
  comment: String
  writer: UserUpdateOneInput
  related_event: EventUpdateOneInput
}

input TeamCommentUpdateManyInput {
  create: [TeamCommentCreateInput!]
  connect: [TeamCommentWhereUniqueInput!]
  disconnect: [TeamCommentWhereUniqueInput!]
  delete: [TeamCommentWhereUniqueInput!]
  update: [TeamCommentUpdateWithWhereUniqueNestedInput!]
  upsert: [TeamCommentUpsertWithWhereUniqueNestedInput!]
}

input TeamCommentUpdateWithWhereUniqueNestedInput {
  where: TeamCommentWhereUniqueInput!
  data: TeamCommentUpdateDataInput!
}

input TeamCommentUpsertWithWhereUniqueNestedInput {
  where: TeamCommentWhereUniqueInput!
  update: TeamCommentUpdateDataInput!
  create: TeamCommentCreateInput!
}

input TeamCommentWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [TeamCommentWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [TeamCommentWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [TeamCommentWhereInput!]
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
  tag: TeamCommentTag
  """
  All values that are not equal to given value.
  """
  tag_not: TeamCommentTag
  """
  All values that are contained in given list.
  """
  tag_in: [TeamCommentTag!]
  """
  All values that are not contained in given list.
  """
  tag_not_in: [TeamCommentTag!]
  comment: String
  """
  All values that are not equal to given value.
  """
  comment_not: String
  """
  All values that are contained in given list.
  """
  comment_in: [String!]
  """
  All values that are not contained in given list.
  """
  comment_not_in: [String!]
  """
  All values less than the given value.
  """
  comment_lt: String
  """
  All values less than or equal the given value.
  """
  comment_lte: String
  """
  All values greater than the given value.
  """
  comment_gt: String
  """
  All values greater than or equal the given value.
  """
  comment_gte: String
  """
  All values containing the given string.
  """
  comment_contains: String
  """
  All values not containing the given string.
  """
  comment_not_contains: String
  """
  All values starting with the given string.
  """
  comment_starts_with: String
  """
  All values not starting with the given string.
  """
  comment_not_starts_with: String
  """
  All values ending with the given string.
  """
  comment_ends_with: String
  """
  All values not ending with the given string.
  """
  comment_not_ends_with: String
  writer: UserWhereInput
  related_event: EventWhereInput
}

input TeamCommentWhereUniqueInput {
  id: ID
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
  topic: TeamTopic
  description: String
  members: UserCreateManyWithoutTeamsInput
  followed: UserCreateManyWithoutFollowingTeamsInput
  comments: TeamCommentCreateManyInput
}

input TeamCreateManyWithoutFollowedInput {
  create: [TeamCreateWithoutFollowedInput!]
  connect: [TeamWhereUniqueInput!]
}

input TeamCreateManyWithoutMembersInput {
  create: [TeamCreateWithoutMembersInput!]
  connect: [TeamWhereUniqueInput!]
}

input TeamCreateWithoutFollowedInput {
  name: String
  topic: TeamTopic
  description: String
  members: UserCreateManyWithoutTeamsInput
  comments: TeamCommentCreateManyInput
}

input TeamCreateWithoutMembersInput {
  name: String
  topic: TeamTopic
  description: String
  followed: UserCreateManyWithoutFollowingTeamsInput
  comments: TeamCommentCreateManyInput
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
  topic_ASC
  topic_DESC
  description_ASC
  description_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type TeamPreviousValues {
  id: ID!
  name: String
  topic: TeamTopic
  description: String
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

enum TeamTopic {
  LOL
  PUBG
  OVERWATCH
  ETC_GAME
  SOCCER
  BASKET_BALL
  ETC_SPORTS
  FREE
}

input TeamUpdateInput {
  name: String
  topic: TeamTopic
  description: String
  members: UserUpdateManyWithoutTeamsInput
  followed: UserUpdateManyWithoutFollowingTeamsInput
  comments: TeamCommentUpdateManyInput
}

input TeamUpdateManyWithoutFollowedInput {
  create: [TeamCreateWithoutFollowedInput!]
  connect: [TeamWhereUniqueInput!]
  disconnect: [TeamWhereUniqueInput!]
  delete: [TeamWhereUniqueInput!]
  update: [TeamUpdateWithWhereUniqueWithoutFollowedInput!]
  upsert: [TeamUpsertWithWhereUniqueWithoutFollowedInput!]
}

input TeamUpdateManyWithoutMembersInput {
  create: [TeamCreateWithoutMembersInput!]
  connect: [TeamWhereUniqueInput!]
  disconnect: [TeamWhereUniqueInput!]
  delete: [TeamWhereUniqueInput!]
  update: [TeamUpdateWithWhereUniqueWithoutMembersInput!]
  upsert: [TeamUpsertWithWhereUniqueWithoutMembersInput!]
}

input TeamUpdateWithoutFollowedDataInput {
  name: String
  topic: TeamTopic
  description: String
  members: UserUpdateManyWithoutTeamsInput
  comments: TeamCommentUpdateManyInput
}

input TeamUpdateWithoutMembersDataInput {
  name: String
  topic: TeamTopic
  description: String
  followed: UserUpdateManyWithoutFollowingTeamsInput
  comments: TeamCommentUpdateManyInput
}

input TeamUpdateWithWhereUniqueWithoutFollowedInput {
  where: TeamWhereUniqueInput!
  data: TeamUpdateWithoutFollowedDataInput!
}

input TeamUpdateWithWhereUniqueWithoutMembersInput {
  where: TeamWhereUniqueInput!
  data: TeamUpdateWithoutMembersDataInput!
}

input TeamUpsertWithWhereUniqueWithoutFollowedInput {
  where: TeamWhereUniqueInput!
  update: TeamUpdateWithoutFollowedDataInput!
  create: TeamCreateWithoutFollowedInput!
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
  topic: TeamTopic
  """
  All values that are not equal to given value.
  """
  topic_not: TeamTopic
  """
  All values that are contained in given list.
  """
  topic_in: [TeamTopic!]
  """
  All values that are not contained in given list.
  """
  topic_not_in: [TeamTopic!]
  description: String
  """
  All values that are not equal to given value.
  """
  description_not: String
  """
  All values that are contained in given list.
  """
  description_in: [String!]
  """
  All values that are not contained in given list.
  """
  description_not_in: [String!]
  """
  All values less than the given value.
  """
  description_lt: String
  """
  All values less than or equal the given value.
  """
  description_lte: String
  """
  All values greater than the given value.
  """
  description_gt: String
  """
  All values greater than or equal the given value.
  """
  description_gte: String
  """
  All values containing the given string.
  """
  description_contains: String
  """
  All values not containing the given string.
  """
  description_not_contains: String
  """
  All values starting with the given string.
  """
  description_starts_with: String
  """
  All values not starting with the given string.
  """
  description_not_starts_with: String
  """
  All values ending with the given string.
  """
  description_ends_with: String
  """
  All values not ending with the given string.
  """
  description_not_ends_with: String
  members_every: UserWhereInput
  members_some: UserWhereInput
  members_none: UserWhereInput
  followed_every: UserWhereInput
  followed_some: UserWhereInput
  followed_none: UserWhereInput
  comments_every: TeamCommentWhereInput
  comments_some: TeamCommentWhereInput
  comments_none: TeamCommentWhereInput
}

input TeamWhereUniqueInput {
  id: ID
}

type User implements Node {
  id: ID!
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team!]
  interest(where: InterestWhereInput, orderBy: InterestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Interest!]
  followingEvents(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
  followingTeams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team!]
  follwoingUsers(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  comments(where: UserCommentWhereInput, orderBy: UserCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserComment!]
}

type UserComment implements Node {
  id: ID!
  writer(where: UserWhereInput): User
  tag: UserCommentTag
  comment: String
  related_event(where: EventWhereInput): Event
}

"""
A connection to a list of items.
"""
type UserCommentConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [UserCommentEdge]!
  aggregate: AggregateUserComment!
}

input UserCommentCreateInput {
  tag: UserCommentTag
  comment: String
  writer: UserCreateOneWithoutCommentsInput
  related_event: EventCreateOneInput
}

input UserCommentCreateManyWithoutWriterInput {
  create: [UserCommentCreateWithoutWriterInput!]
  connect: [UserCommentWhereUniqueInput!]
}

input UserCommentCreateWithoutWriterInput {
  tag: UserCommentTag
  comment: String
  related_event: EventCreateOneInput
}

"""
An edge in a connection.
"""
type UserCommentEdge {
  """
  The item at the end of the edge.
  """
  node: UserComment!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum UserCommentOrderByInput {
  id_ASC
  id_DESC
  tag_ASC
  tag_DESC
  comment_ASC
  comment_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserCommentPreviousValues {
  id: ID!
  tag: UserCommentTag
  comment: String
}

type UserCommentSubscriptionPayload {
  mutation: MutationType!
  node: UserComment
  updatedFields: [String!]
  previousValues: UserCommentPreviousValues
}

input UserCommentSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserCommentSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserCommentSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserCommentSubscriptionWhereInput!]
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
  node: UserCommentWhereInput
}

enum UserCommentTag {
  COOPERATIVE
  KIND
  FUNNY
}

input UserCommentUpdateInput {
  tag: UserCommentTag
  comment: String
  writer: UserUpdateOneWithoutCommentsInput
  related_event: EventUpdateOneInput
}

input UserCommentUpdateManyWithoutWriterInput {
  create: [UserCommentCreateWithoutWriterInput!]
  connect: [UserCommentWhereUniqueInput!]
  disconnect: [UserCommentWhereUniqueInput!]
  delete: [UserCommentWhereUniqueInput!]
  update: [UserCommentUpdateWithWhereUniqueWithoutWriterInput!]
  upsert: [UserCommentUpsertWithWhereUniqueWithoutWriterInput!]
}

input UserCommentUpdateWithoutWriterDataInput {
  tag: UserCommentTag
  comment: String
  related_event: EventUpdateOneInput
}

input UserCommentUpdateWithWhereUniqueWithoutWriterInput {
  where: UserCommentWhereUniqueInput!
  data: UserCommentUpdateWithoutWriterDataInput!
}

input UserCommentUpsertWithWhereUniqueWithoutWriterInput {
  where: UserCommentWhereUniqueInput!
  update: UserCommentUpdateWithoutWriterDataInput!
  create: UserCommentCreateWithoutWriterInput!
}

input UserCommentWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserCommentWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserCommentWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserCommentWhereInput!]
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
  tag: UserCommentTag
  """
  All values that are not equal to given value.
  """
  tag_not: UserCommentTag
  """
  All values that are contained in given list.
  """
  tag_in: [UserCommentTag!]
  """
  All values that are not contained in given list.
  """
  tag_not_in: [UserCommentTag!]
  comment: String
  """
  All values that are not equal to given value.
  """
  comment_not: String
  """
  All values that are contained in given list.
  """
  comment_in: [String!]
  """
  All values that are not contained in given list.
  """
  comment_not_in: [String!]
  """
  All values less than the given value.
  """
  comment_lt: String
  """
  All values less than or equal the given value.
  """
  comment_lte: String
  """
  All values greater than the given value.
  """
  comment_gt: String
  """
  All values greater than or equal the given value.
  """
  comment_gte: String
  """
  All values containing the given string.
  """
  comment_contains: String
  """
  All values not containing the given string.
  """
  comment_not_contains: String
  """
  All values starting with the given string.
  """
  comment_starts_with: String
  """
  All values not starting with the given string.
  """
  comment_not_starts_with: String
  """
  All values ending with the given string.
  """
  comment_ends_with: String
  """
  All values not ending with the given string.
  """
  comment_not_ends_with: String
  writer: UserWhereInput
  related_event: EventWhereInput
}

input UserCommentWhereUniqueInput {
  id: ID
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
  teams: TeamCreateManyWithoutMembersInput
  interest: InterestCreateManyInput
  followingEvents: EventCreateManyInput
  followingTeams: TeamCreateManyWithoutFollowedInput
  follwoingUsers: UserCreateManyInput
  comments: UserCommentCreateManyWithoutWriterInput
}

input UserCreateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutFollowingTeamsInput {
  create: [UserCreateWithoutFollowingTeamsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutTeamsInput {
  create: [UserCreateWithoutTeamsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutCommentsInput {
  create: UserCreateWithoutCommentsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCommentsInput {
  teams: TeamCreateManyWithoutMembersInput
  interest: InterestCreateManyInput
  followingEvents: EventCreateManyInput
  followingTeams: TeamCreateManyWithoutFollowedInput
  follwoingUsers: UserCreateManyInput
}

input UserCreateWithoutFollowingTeamsInput {
  teams: TeamCreateManyWithoutMembersInput
  interest: InterestCreateManyInput
  followingEvents: EventCreateManyInput
  follwoingUsers: UserCreateManyInput
  comments: UserCommentCreateManyWithoutWriterInput
}

input UserCreateWithoutTeamsInput {
  interest: InterestCreateManyInput
  followingEvents: EventCreateManyInput
  followingTeams: TeamCreateManyWithoutFollowedInput
  follwoingUsers: UserCreateManyInput
  comments: UserCommentCreateManyWithoutWriterInput
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

type UserMatching implements Node {
  id: ID!
}

"""
A connection to a list of items.
"""
type UserMatchingConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [UserMatchingEdge]!
  aggregate: AggregateUserMatching!
}

"""
An edge in a connection.
"""
type UserMatchingEdge {
  """
  The item at the end of the edge.
  """
  node: UserMatching!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum UserMatchingOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserMatchingPreviousValues {
  id: ID!
}

type UserMatchingSubscriptionPayload {
  mutation: MutationType!
  node: UserMatching
  updatedFields: [String!]
  previousValues: UserMatchingPreviousValues
}

input UserMatchingSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserMatchingSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserMatchingSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserMatchingSubscriptionWhereInput!]
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
  node: UserMatchingWhereInput
}

input UserMatchingWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserMatchingWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserMatchingWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserMatchingWhereInput!]
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
}

input UserMatchingWhereUniqueInput {
  id: ID
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
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

input UserUpdateDataInput {
  teams: TeamUpdateManyWithoutMembersInput
  interest: InterestUpdateManyInput
  followingEvents: EventUpdateManyInput
  followingTeams: TeamUpdateManyWithoutFollowedInput
  follwoingUsers: UserUpdateManyInput
  comments: UserCommentUpdateManyWithoutWriterInput
}

input UserUpdateInput {
  teams: TeamUpdateManyWithoutMembersInput
  interest: InterestUpdateManyInput
  followingEvents: EventUpdateManyInput
  followingTeams: TeamUpdateManyWithoutFollowedInput
  follwoingUsers: UserUpdateManyInput
  comments: UserCommentUpdateManyWithoutWriterInput
}

input UserUpdateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueNestedInput!]
  upsert: [UserUpsertWithWhereUniqueNestedInput!]
}

input UserUpdateManyWithoutFollowingTeamsInput {
  create: [UserCreateWithoutFollowingTeamsInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutFollowingTeamsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutFollowingTeamsInput!]
}

input UserUpdateManyWithoutTeamsInput {
  create: [UserCreateWithoutTeamsInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutTeamsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutTeamsInput!]
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneWithoutCommentsInput {
  create: UserCreateWithoutCommentsInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutCommentsDataInput
  upsert: UserUpsertWithoutCommentsInput
}

input UserUpdateWithoutCommentsDataInput {
  teams: TeamUpdateManyWithoutMembersInput
  interest: InterestUpdateManyInput
  followingEvents: EventUpdateManyInput
  followingTeams: TeamUpdateManyWithoutFollowedInput
  follwoingUsers: UserUpdateManyInput
}

input UserUpdateWithoutFollowingTeamsDataInput {
  teams: TeamUpdateManyWithoutMembersInput
  interest: InterestUpdateManyInput
  followingEvents: EventUpdateManyInput
  follwoingUsers: UserUpdateManyInput
  comments: UserCommentUpdateManyWithoutWriterInput
}

input UserUpdateWithoutTeamsDataInput {
  interest: InterestUpdateManyInput
  followingEvents: EventUpdateManyInput
  followingTeams: TeamUpdateManyWithoutFollowedInput
  follwoingUsers: UserUpdateManyInput
  comments: UserCommentUpdateManyWithoutWriterInput
}

input UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateDataInput!
}

input UserUpdateWithWhereUniqueWithoutFollowingTeamsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutFollowingTeamsDataInput!
}

input UserUpdateWithWhereUniqueWithoutTeamsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutTeamsDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutCommentsInput {
  update: UserUpdateWithoutCommentsDataInput!
  create: UserCreateWithoutCommentsInput!
}

input UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithWhereUniqueWithoutFollowingTeamsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutFollowingTeamsDataInput!
  create: UserCreateWithoutFollowingTeamsInput!
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
  teams_every: TeamWhereInput
  teams_some: TeamWhereInput
  teams_none: TeamWhereInput
  interest_every: InterestWhereInput
  interest_some: InterestWhereInput
  interest_none: InterestWhereInput
  followingEvents_every: EventWhereInput
  followingEvents_some: EventWhereInput
  followingEvents_none: EventWhereInput
  followingTeams_every: TeamWhereInput
  followingTeams_some: TeamWhereInput
  followingTeams_none: TeamWhereInput
  follwoingUsers_every: UserWhereInput
  follwoingUsers_some: UserWhereInput
  follwoingUsers_none: UserWhereInput
  comments_every: UserCommentWhereInput
  comments_some: UserCommentWhereInput
  comments_none: UserCommentWhereInput
}

input UserWhereUniqueInput {
  id: ID
}

type Mutation {
  createUser(data: UserCreateInput!): User!
  createInterest: Interest!
  createUserComment(data: UserCommentCreateInput!): UserComment!
  createTeam(data: TeamCreateInput!): Team!
  createTeamComment(data: TeamCommentCreateInput!): TeamComment!
  createUserMatching: UserMatching!
  createEvent(data: EventCreateInput!): Event!
  createScrimmage: Scrimmage!
  createPubg(data: PubgCreateInput!): Pubg!
  createLol(data: LolCreateInput!): Lol!
  createOverwatch(data: OverwatchCreateInput!): Overwatch!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateUserComment(data: UserCommentUpdateInput!, where: UserCommentWhereUniqueInput!): UserComment
  updateTeam(data: TeamUpdateInput!, where: TeamWhereUniqueInput!): Team
  updateTeamComment(data: TeamCommentUpdateInput!, where: TeamCommentWhereUniqueInput!): TeamComment
  updateEvent(data: EventUpdateInput!, where: EventWhereUniqueInput!): Event
  updatePubg(data: PubgUpdateInput!, where: PubgWhereUniqueInput!): Pubg
  updateLol(data: LolUpdateInput!, where: LolWhereUniqueInput!): Lol
  updateOverwatch(data: OverwatchUpdateInput!, where: OverwatchWhereUniqueInput!): Overwatch
  deleteUser(where: UserWhereUniqueInput!): User
  deleteInterest(where: InterestWhereUniqueInput!): Interest
  deleteUserComment(where: UserCommentWhereUniqueInput!): UserComment
  deleteTeam(where: TeamWhereUniqueInput!): Team
  deleteTeamComment(where: TeamCommentWhereUniqueInput!): TeamComment
  deleteUserMatching(where: UserMatchingWhereUniqueInput!): UserMatching
  deleteEvent(where: EventWhereUniqueInput!): Event
  deleteScrimmage(where: ScrimmageWhereUniqueInput!): Scrimmage
  deletePubg(where: PubgWhereUniqueInput!): Pubg
  deleteLol(where: LolWhereUniqueInput!): Lol
  deleteOverwatch(where: OverwatchWhereUniqueInput!): Overwatch
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertUserComment(where: UserCommentWhereUniqueInput!, create: UserCommentCreateInput!, update: UserCommentUpdateInput!): UserComment!
  upsertTeam(where: TeamWhereUniqueInput!, create: TeamCreateInput!, update: TeamUpdateInput!): Team!
  upsertTeamComment(where: TeamCommentWhereUniqueInput!, create: TeamCommentCreateInput!, update: TeamCommentUpdateInput!): TeamComment!
  upsertEvent(where: EventWhereUniqueInput!, create: EventCreateInput!, update: EventUpdateInput!): Event!
  upsertPubg(where: PubgWhereUniqueInput!, create: PubgCreateInput!, update: PubgUpdateInput!): Pubg!
  upsertLol(where: LolWhereUniqueInput!, create: LolCreateInput!, update: LolUpdateInput!): Lol!
  upsertOverwatch(where: OverwatchWhereUniqueInput!, create: OverwatchCreateInput!, update: OverwatchUpdateInput!): Overwatch!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyUserComments(data: UserCommentUpdateInput!, where: UserCommentWhereInput): BatchPayload!
  updateManyTeams(data: TeamUpdateInput!, where: TeamWhereInput): BatchPayload!
  updateManyTeamComments(data: TeamCommentUpdateInput!, where: TeamCommentWhereInput): BatchPayload!
  updateManyEvents(data: EventUpdateInput!, where: EventWhereInput): BatchPayload!
  updateManyPubgs(data: PubgUpdateInput!, where: PubgWhereInput): BatchPayload!
  updateManyLols(data: LolUpdateInput!, where: LolWhereInput): BatchPayload!
  updateManyOverwatches(data: OverwatchUpdateInput!, where: OverwatchWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyInterests(where: InterestWhereInput): BatchPayload!
  deleteManyUserComments(where: UserCommentWhereInput): BatchPayload!
  deleteManyTeams(where: TeamWhereInput): BatchPayload!
  deleteManyTeamComments(where: TeamCommentWhereInput): BatchPayload!
  deleteManyUserMatchings(where: UserMatchingWhereInput): BatchPayload!
  deleteManyEvents(where: EventWhereInput): BatchPayload!
  deleteManyScrimmages(where: ScrimmageWhereInput): BatchPayload!
  deleteManyPubgs(where: PubgWhereInput): BatchPayload!
  deleteManyLols(where: LolWhereInput): BatchPayload!
  deleteManyOverwatches(where: OverwatchWhereInput): BatchPayload!
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  interests(where: InterestWhereInput, orderBy: InterestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Interest]!
  userComments(where: UserCommentWhereInput, orderBy: UserCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserComment]!
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team]!
  teamComments(where: TeamCommentWhereInput, orderBy: TeamCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TeamComment]!
  userMatchings(where: UserMatchingWhereInput, orderBy: UserMatchingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserMatching]!
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event]!
  scrimmages(where: ScrimmageWhereInput, orderBy: ScrimmageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Scrimmage]!
  pubgs(where: PubgWhereInput, orderBy: PubgOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Pubg]!
  lols(where: LolWhereInput, orderBy: LolOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Lol]!
  overwatches(where: OverwatchWhereInput, orderBy: OverwatchOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Overwatch]!
  user(where: UserWhereUniqueInput!): User
  interest(where: InterestWhereUniqueInput!): Interest
  userComment(where: UserCommentWhereUniqueInput!): UserComment
  team(where: TeamWhereUniqueInput!): Team
  teamComment(where: TeamCommentWhereUniqueInput!): TeamComment
  userMatching(where: UserMatchingWhereUniqueInput!): UserMatching
  event(where: EventWhereUniqueInput!): Event
  scrimmage(where: ScrimmageWhereUniqueInput!): Scrimmage
  pubg(where: PubgWhereUniqueInput!): Pubg
  lol(where: LolWhereUniqueInput!): Lol
  overwatch(where: OverwatchWhereUniqueInput!): Overwatch
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  interestsConnection(where: InterestWhereInput, orderBy: InterestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InterestConnection!
  userCommentsConnection(where: UserCommentWhereInput, orderBy: UserCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserCommentConnection!
  teamsConnection(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TeamConnection!
  teamCommentsConnection(where: TeamCommentWhereInput, orderBy: TeamCommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TeamCommentConnection!
  userMatchingsConnection(where: UserMatchingWhereInput, orderBy: UserMatchingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserMatchingConnection!
  eventsConnection(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventConnection!
  scrimmagesConnection(where: ScrimmageWhereInput, orderBy: ScrimmageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ScrimmageConnection!
  pubgsConnection(where: PubgWhereInput, orderBy: PubgOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PubgConnection!
  lolsConnection(where: LolWhereInput, orderBy: LolOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LolConnection!
  overwatchesConnection(where: OverwatchWhereInput, orderBy: OverwatchOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OverwatchConnection!
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
  interest(where: InterestSubscriptionWhereInput): InterestSubscriptionPayload
  userComment(where: UserCommentSubscriptionWhereInput): UserCommentSubscriptionPayload
  team(where: TeamSubscriptionWhereInput): TeamSubscriptionPayload
  teamComment(where: TeamCommentSubscriptionWhereInput): TeamCommentSubscriptionPayload
  userMatching(where: UserMatchingSubscriptionWhereInput): UserMatchingSubscriptionPayload
  event(where: EventSubscriptionWhereInput): EventSubscriptionPayload
  scrimmage(where: ScrimmageSubscriptionWhereInput): ScrimmageSubscriptionPayload
  pubg(where: PubgSubscriptionWhereInput): PubgSubscriptionPayload
  lol(where: LolSubscriptionWhereInput): LolSubscriptionPayload
  overwatch(where: OverwatchSubscriptionWhereInput): OverwatchSubscriptionPayload
}
`

export type LolTier = 
  'DIAMOND' |
  'PLATINUM' |
  'GOLD' |
  'SILVER' |
  'BRONZE'

export type UserCommentOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'tag_ASC' |
  'tag_DESC' |
  'comment_ASC' |
  'comment_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type LolGameType = 
  'DUO_RANK' |
  'FLEX_RANK'

export type OverwatchOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'gameType_ASC' |
  'gameType_DESC' |
  'overwatchTier_ASC' |
  'overwatchTier_DESC' |
  'overwatchRole_ASC' |
  'overwatchRole_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PubgOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'gameType_ASC' |
  'gameType_DESC' |
  'server_ASC' |
  'server_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type OverwatchRole = 
  'FLEX' |
  'TANK' |
  'DPS' |
  'HEAL'

export type TeamOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'topic_ASC' |
  'topic_DESC' |
  'description_ASC' |
  'description_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type OverwatchTier = 
  'DIAMOND' |
  'PLATINUM' |
  'GOLD' |
  'SILVER' |
  'BRONZE'

export type PubgServer = 
  'KAKAO' |
  'STEAM'

export type LolOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'gameType_ASC' |
  'gameType_DESC' |
  'lolTier_ASC' |
  'lolTier_DESC' |
  'lolRole_ASC' |
  'lolRole_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type TeamCommentOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'tag_ASC' |
  'tag_DESC' |
  'comment_ASC' |
  'comment_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserCommentTag = 
  'COOPERATIVE' |
  'KIND' |
  'FUNNY'

export type PubgGameType = 
  'SQUAD' |
  'DUO'

export type MutationType = 
  'CREATED' |
  'UPDATED' |
  'DELETED'

export type EventOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'topic_ASC' |
  'topic_DESC' |
  'place_ASC' |
  'place_DESC' |
  'type_ASC' |
  'type_DESC' |
  'startDateTime_ASC' |
  'startDateTime_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserMatchingOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type InterestOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ScrimmageOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type TeamTopic = 
  'LOL' |
  'PUBG' |
  'OVERWATCH' |
  'ETC_GAME' |
  'SOCCER' |
  'BASKET_BALL' |
  'ETC_SPORTS' |
  'FREE'

export type UserOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type LolRole = 
  'FLEX' |
  'TOP' |
  'JUNGLE' |
  'MID' |
  'ADC' |
  'SUPPORT'

export type OverwatchGameType = 
  'COMPETITIVE' |
  'QUICK'

export type TeamCommentTag = 
  'KIND' |
  'FUNNY'

export interface EventCreateInput {
  topic?: String
  place?: String
  type?: String
  startDateTime?: DateTime
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
  teams_every?: TeamWhereInput
  teams_some?: TeamWhereInput
  teams_none?: TeamWhereInput
  interest_every?: InterestWhereInput
  interest_some?: InterestWhereInput
  interest_none?: InterestWhereInput
  followingEvents_every?: EventWhereInput
  followingEvents_some?: EventWhereInput
  followingEvents_none?: EventWhereInput
  followingTeams_every?: TeamWhereInput
  followingTeams_some?: TeamWhereInput
  followingTeams_none?: TeamWhereInput
  follwoingUsers_every?: UserWhereInput
  follwoingUsers_some?: UserWhereInput
  follwoingUsers_none?: UserWhereInput
  comments_every?: UserCommentWhereInput
  comments_some?: UserCommentWhereInput
  comments_none?: UserCommentWhereInput
}

export interface UserUpsertWithWhereUniqueWithoutTeamsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutTeamsDataInput
  create: UserCreateWithoutTeamsInput
}

export interface EventUpdateDataInput {
  topic?: String
  place?: String
  type?: String
  startDateTime?: DateTime
}

export interface UserCommentUpsertWithWhereUniqueWithoutWriterInput {
  where: UserCommentWhereUniqueInput
  update: UserCommentUpdateWithoutWriterDataInput
  create: UserCommentCreateWithoutWriterInput
}

export interface UserCreateOneWithoutCommentsInput {
  create?: UserCreateWithoutCommentsInput
  connect?: UserWhereUniqueInput
}

export interface EventUpsertNestedInput {
  update: EventUpdateDataInput
  create: EventCreateInput
}

export interface LolSubscriptionWhereInput {
  AND?: LolSubscriptionWhereInput[] | LolSubscriptionWhereInput
  OR?: LolSubscriptionWhereInput[] | LolSubscriptionWhereInput
  NOT?: LolSubscriptionWhereInput[] | LolSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: LolWhereInput
}

export interface EventUpdateOneInput {
  create?: EventCreateInput
  connect?: EventWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: EventUpdateDataInput
  upsert?: EventUpsertNestedInput
}

export interface PubgSubscriptionWhereInput {
  AND?: PubgSubscriptionWhereInput[] | PubgSubscriptionWhereInput
  OR?: PubgSubscriptionWhereInput[] | PubgSubscriptionWhereInput
  NOT?: PubgSubscriptionWhereInput[] | PubgSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PubgWhereInput
}

export interface UserCommentUpdateWithoutWriterDataInput {
  tag?: UserCommentTag
  comment?: String
  related_event?: EventUpdateOneInput
}

export interface PubgWhereInput {
  AND?: PubgWhereInput[] | PubgWhereInput
  OR?: PubgWhereInput[] | PubgWhereInput
  NOT?: PubgWhereInput[] | PubgWhereInput
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
  gameType?: PubgGameType
  gameType_not?: PubgGameType
  gameType_in?: PubgGameType[] | PubgGameType
  gameType_not_in?: PubgGameType[] | PubgGameType
  server?: PubgServer
  server_not?: PubgServer
  server_in?: PubgServer[] | PubgServer
  server_not_in?: PubgServer[] | PubgServer
}

export interface UserCommentUpdateWithWhereUniqueWithoutWriterInput {
  where: UserCommentWhereUniqueInput
  data: UserCommentUpdateWithoutWriterDataInput
}

export interface UserMatchingSubscriptionWhereInput {
  AND?: UserMatchingSubscriptionWhereInput[] | UserMatchingSubscriptionWhereInput
  OR?: UserMatchingSubscriptionWhereInput[] | UserMatchingSubscriptionWhereInput
  NOT?: UserMatchingSubscriptionWhereInput[] | UserMatchingSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserMatchingWhereInput
}

export interface UserCommentUpdateManyWithoutWriterInput {
  create?: UserCommentCreateWithoutWriterInput[] | UserCommentCreateWithoutWriterInput
  connect?: UserCommentWhereUniqueInput[] | UserCommentWhereUniqueInput
  disconnect?: UserCommentWhereUniqueInput[] | UserCommentWhereUniqueInput
  delete?: UserCommentWhereUniqueInput[] | UserCommentWhereUniqueInput
  update?: UserCommentUpdateWithWhereUniqueWithoutWriterInput[] | UserCommentUpdateWithWhereUniqueWithoutWriterInput
  upsert?: UserCommentUpsertWithWhereUniqueWithoutWriterInput[] | UserCommentUpsertWithWhereUniqueWithoutWriterInput
}

export interface TeamCommentSubscriptionWhereInput {
  AND?: TeamCommentSubscriptionWhereInput[] | TeamCommentSubscriptionWhereInput
  OR?: TeamCommentSubscriptionWhereInput[] | TeamCommentSubscriptionWhereInput
  NOT?: TeamCommentSubscriptionWhereInput[] | TeamCommentSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: TeamCommentWhereInput
}

export interface UserUpdateWithoutTeamsDataInput {
  interest?: InterestUpdateManyInput
  followingEvents?: EventUpdateManyInput
  followingTeams?: TeamUpdateManyWithoutFollowedInput
  follwoingUsers?: UserUpdateManyInput
  comments?: UserCommentUpdateManyWithoutWriterInput
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

export interface UserUpdateWithWhereUniqueWithoutTeamsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutTeamsDataInput
}

export interface UserCommentWhereInput {
  AND?: UserCommentWhereInput[] | UserCommentWhereInput
  OR?: UserCommentWhereInput[] | UserCommentWhereInput
  NOT?: UserCommentWhereInput[] | UserCommentWhereInput
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
  tag?: UserCommentTag
  tag_not?: UserCommentTag
  tag_in?: UserCommentTag[] | UserCommentTag
  tag_not_in?: UserCommentTag[] | UserCommentTag
  comment?: String
  comment_not?: String
  comment_in?: String[] | String
  comment_not_in?: String[] | String
  comment_lt?: String
  comment_lte?: String
  comment_gt?: String
  comment_gte?: String
  comment_contains?: String
  comment_not_contains?: String
  comment_starts_with?: String
  comment_not_starts_with?: String
  comment_ends_with?: String
  comment_not_ends_with?: String
  writer?: UserWhereInput
  related_event?: EventWhereInput
}

export interface UserUpdateManyWithoutTeamsInput {
  create?: UserCreateWithoutTeamsInput[] | UserCreateWithoutTeamsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutTeamsInput[] | UserUpdateWithWhereUniqueWithoutTeamsInput
  upsert?: UserUpsertWithWhereUniqueWithoutTeamsInput[] | UserUpsertWithWhereUniqueWithoutTeamsInput
}

export interface InterestSubscriptionWhereInput {
  AND?: InterestSubscriptionWhereInput[] | InterestSubscriptionWhereInput
  OR?: InterestSubscriptionWhereInput[] | InterestSubscriptionWhereInput
  NOT?: InterestSubscriptionWhereInput[] | InterestSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: InterestWhereInput
}

export interface TeamUpdateWithoutFollowedDataInput {
  name?: String
  topic?: TeamTopic
  description?: String
  members?: UserUpdateManyWithoutTeamsInput
  comments?: TeamCommentUpdateManyInput
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
  topic?: TeamTopic
  topic_not?: TeamTopic
  topic_in?: TeamTopic[] | TeamTopic
  topic_not_in?: TeamTopic[] | TeamTopic
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  members_every?: UserWhereInput
  members_some?: UserWhereInput
  members_none?: UserWhereInput
  followed_every?: UserWhereInput
  followed_some?: UserWhereInput
  followed_none?: UserWhereInput
  comments_every?: TeamCommentWhereInput
  comments_some?: TeamCommentWhereInput
  comments_none?: TeamCommentWhereInput
}

export interface TeamUpdateWithWhereUniqueWithoutFollowedInput {
  where: TeamWhereUniqueInput
  data: TeamUpdateWithoutFollowedDataInput
}

export interface TeamCommentWhereInput {
  AND?: TeamCommentWhereInput[] | TeamCommentWhereInput
  OR?: TeamCommentWhereInput[] | TeamCommentWhereInput
  NOT?: TeamCommentWhereInput[] | TeamCommentWhereInput
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
  tag?: TeamCommentTag
  tag_not?: TeamCommentTag
  tag_in?: TeamCommentTag[] | TeamCommentTag
  tag_not_in?: TeamCommentTag[] | TeamCommentTag
  comment?: String
  comment_not?: String
  comment_in?: String[] | String
  comment_not_in?: String[] | String
  comment_lt?: String
  comment_lte?: String
  comment_gt?: String
  comment_gte?: String
  comment_contains?: String
  comment_not_contains?: String
  comment_starts_with?: String
  comment_not_starts_with?: String
  comment_ends_with?: String
  comment_not_ends_with?: String
  writer?: UserWhereInput
  related_event?: EventWhereInput
}

export interface TeamUpdateManyWithoutFollowedInput {
  create?: TeamCreateWithoutFollowedInput[] | TeamCreateWithoutFollowedInput
  connect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
  disconnect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
  delete?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
  update?: TeamUpdateWithWhereUniqueWithoutFollowedInput[] | TeamUpdateWithWhereUniqueWithoutFollowedInput
  upsert?: TeamUpsertWithWhereUniqueWithoutFollowedInput[] | TeamUpsertWithWhereUniqueWithoutFollowedInput
}

export interface OverwatchUpdateInput {
  gameType?: OverwatchGameType
  overwatchTier?: OverwatchTier
  overwatchRole?: OverwatchRole
}

export interface UserUpdateDataInput {
  teams?: TeamUpdateManyWithoutMembersInput
  interest?: InterestUpdateManyInput
  followingEvents?: EventUpdateManyInput
  followingTeams?: TeamUpdateManyWithoutFollowedInput
  follwoingUsers?: UserUpdateManyInput
  comments?: UserCommentUpdateManyWithoutWriterInput
}

export interface InterestWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput
  data: UserUpdateDataInput
}

export interface TeamWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateManyInput {
  create?: UserCreateInput[] | UserCreateInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueNestedInput[] | UserUpdateWithWhereUniqueNestedInput
  upsert?: UserUpsertWithWhereUniqueNestedInput[] | UserUpsertWithWhereUniqueNestedInput
}

export interface UserMatchingWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateInput {
  teams?: TeamCreateManyWithoutMembersInput
  interest?: InterestCreateManyInput
  followingEvents?: EventCreateManyInput
  followingTeams?: TeamCreateManyWithoutFollowedInput
  follwoingUsers?: UserCreateManyInput
  comments?: UserCommentCreateManyWithoutWriterInput
}

export interface ScrimmageWhereUniqueInput {
  id?: ID_Input
}

export interface TeamCreateManyWithoutMembersInput {
  create?: TeamCreateWithoutMembersInput[] | TeamCreateWithoutMembersInput
  connect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
}

export interface LolWhereUniqueInput {
  id?: ID_Input
}

export interface TeamCreateWithoutMembersInput {
  name?: String
  topic?: TeamTopic
  description?: String
  followed?: UserCreateManyWithoutFollowingTeamsInput
  comments?: TeamCommentCreateManyInput
}

export interface LolUpdateInput {
  gameType?: LolGameType
  lolTier?: LolTier
  lolRole?: LolRole
}

export interface UserCreateManyWithoutFollowingTeamsInput {
  create?: UserCreateWithoutFollowingTeamsInput[] | UserCreateWithoutFollowingTeamsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface EventUpdateInput {
  topic?: String
  place?: String
  type?: String
  startDateTime?: DateTime
}

export interface UserCreateWithoutFollowingTeamsInput {
  teams?: TeamCreateManyWithoutMembersInput
  interest?: InterestCreateManyInput
  followingEvents?: EventCreateManyInput
  follwoingUsers?: UserCreateManyInput
  comments?: UserCommentCreateManyWithoutWriterInput
}

export interface TeamUpdateInput {
  name?: String
  topic?: TeamTopic
  description?: String
  members?: UserUpdateManyWithoutTeamsInput
  followed?: UserUpdateManyWithoutFollowingTeamsInput
  comments?: TeamCommentUpdateManyInput
}

export interface InterestCreateManyInput {
  connect?: InterestWhereUniqueInput[] | InterestWhereUniqueInput
}

export interface UserUpdateWithoutCommentsDataInput {
  teams?: TeamUpdateManyWithoutMembersInput
  interest?: InterestUpdateManyInput
  followingEvents?: EventUpdateManyInput
  followingTeams?: TeamUpdateManyWithoutFollowedInput
  follwoingUsers?: UserUpdateManyInput
}

export interface EventCreateManyInput {
  create?: EventCreateInput[] | EventCreateInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
}

export interface UserCommentUpdateInput {
  tag?: UserCommentTag
  comment?: String
  writer?: UserUpdateOneWithoutCommentsInput
  related_event?: EventUpdateOneInput
}

export interface EventUpsertWithWhereUniqueNestedInput {
  where: EventWhereUniqueInput
  update: EventUpdateDataInput
  create: EventCreateInput
}

export interface UserUpsertWithWhereUniqueWithoutFollowingTeamsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutFollowingTeamsDataInput
  create: UserCreateWithoutFollowingTeamsInput
}

export interface UserCreateManyInput {
  create?: UserCreateInput[] | UserCreateInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface TeamUpsertWithWhereUniqueWithoutFollowedInput {
  where: TeamWhereUniqueInput
  update: TeamUpdateWithoutFollowedDataInput
  create: TeamCreateWithoutFollowedInput
}

export interface UserCommentCreateManyWithoutWriterInput {
  create?: UserCommentCreateWithoutWriterInput[] | UserCommentCreateWithoutWriterInput
  connect?: UserCommentWhereUniqueInput[] | UserCommentWhereUniqueInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserCommentCreateWithoutWriterInput {
  tag?: UserCommentTag
  comment?: String
  related_event?: EventCreateOneInput
}

export interface TeamCommentUpdateDataInput {
  tag?: TeamCommentTag
  comment?: String
  writer?: UserUpdateOneInput
  related_event?: EventUpdateOneInput
}

export interface EventCreateOneInput {
  create?: EventCreateInput
  connect?: EventWhereUniqueInput
}

export interface TeamCommentUpdateManyInput {
  create?: TeamCommentCreateInput[] | TeamCommentCreateInput
  connect?: TeamCommentWhereUniqueInput[] | TeamCommentWhereUniqueInput
  disconnect?: TeamCommentWhereUniqueInput[] | TeamCommentWhereUniqueInput
  delete?: TeamCommentWhereUniqueInput[] | TeamCommentWhereUniqueInput
  update?: TeamCommentUpdateWithWhereUniqueNestedInput[] | TeamCommentUpdateWithWhereUniqueNestedInput
  upsert?: TeamCommentUpsertWithWhereUniqueNestedInput[] | TeamCommentUpsertWithWhereUniqueNestedInput
}

export interface TeamCommentCreateManyInput {
  create?: TeamCommentCreateInput[] | TeamCommentCreateInput
  connect?: TeamCommentWhereUniqueInput[] | TeamCommentWhereUniqueInput
}

export interface ScrimmageWhereInput {
  AND?: ScrimmageWhereInput[] | ScrimmageWhereInput
  OR?: ScrimmageWhereInput[] | ScrimmageWhereInput
  NOT?: ScrimmageWhereInput[] | ScrimmageWhereInput
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
}

export interface TeamCommentCreateInput {
  tag?: TeamCommentTag
  comment?: String
  writer?: UserCreateOneInput
  related_event?: EventCreateOneInput
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

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface LolWhereInput {
  AND?: LolWhereInput[] | LolWhereInput
  OR?: LolWhereInput[] | LolWhereInput
  NOT?: LolWhereInput[] | LolWhereInput
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
  gameType?: LolGameType
  gameType_not?: LolGameType
  gameType_in?: LolGameType[] | LolGameType
  gameType_not_in?: LolGameType[] | LolGameType
  lolTier?: LolTier
  lolTier_not?: LolTier
  lolTier_in?: LolTier[] | LolTier
  lolTier_not_in?: LolTier[] | LolTier
  lolRole?: LolRole
  lolRole_not?: LolRole
  lolRole_in?: LolRole[] | LolRole
  lolRole_not_in?: LolRole[] | LolRole
}

export interface TeamCreateManyWithoutFollowedInput {
  create?: TeamCreateWithoutFollowedInput[] | TeamCreateWithoutFollowedInput
  connect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
}

export interface InterestWhereInput {
  AND?: InterestWhereInput[] | InterestWhereInput
  OR?: InterestWhereInput[] | InterestWhereInput
  NOT?: InterestWhereInput[] | InterestWhereInput
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
}

export interface TeamCreateWithoutFollowedInput {
  name?: String
  topic?: TeamTopic
  description?: String
  members?: UserCreateManyWithoutTeamsInput
  comments?: TeamCommentCreateManyInput
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
  topic?: String
  topic_not?: String
  topic_in?: String[] | String
  topic_not_in?: String[] | String
  topic_lt?: String
  topic_lte?: String
  topic_gt?: String
  topic_gte?: String
  topic_contains?: String
  topic_not_contains?: String
  topic_starts_with?: String
  topic_not_starts_with?: String
  topic_ends_with?: String
  topic_not_ends_with?: String
  place?: String
  place_not?: String
  place_in?: String[] | String
  place_not_in?: String[] | String
  place_lt?: String
  place_lte?: String
  place_gt?: String
  place_gte?: String
  place_contains?: String
  place_not_contains?: String
  place_starts_with?: String
  place_not_starts_with?: String
  place_ends_with?: String
  place_not_ends_with?: String
  type?: String
  type_not?: String
  type_in?: String[] | String
  type_not_in?: String[] | String
  type_lt?: String
  type_lte?: String
  type_gt?: String
  type_gte?: String
  type_contains?: String
  type_not_contains?: String
  type_starts_with?: String
  type_not_starts_with?: String
  type_ends_with?: String
  type_not_ends_with?: String
  startDateTime?: DateTime
  startDateTime_not?: DateTime
  startDateTime_in?: DateTime[] | DateTime
  startDateTime_not_in?: DateTime[] | DateTime
  startDateTime_lt?: DateTime
  startDateTime_lte?: DateTime
  startDateTime_gt?: DateTime
  startDateTime_gte?: DateTime
}

export interface UserCreateManyWithoutTeamsInput {
  create?: UserCreateWithoutTeamsInput[] | UserCreateWithoutTeamsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateWithoutTeamsInput {
  interest?: InterestCreateManyInput
  followingEvents?: EventCreateManyInput
  followingTeams?: TeamCreateManyWithoutFollowedInput
  follwoingUsers?: UserCreateManyInput
  comments?: UserCommentCreateManyWithoutWriterInput
}

export interface TeamCommentWhereUniqueInput {
  id?: ID_Input
}

export interface UserCommentCreateInput {
  tag?: UserCommentTag
  comment?: String
  writer?: UserCreateOneWithoutCommentsInput
  related_event?: EventCreateOneInput
}

export interface PubgWhereUniqueInput {
  id?: ID_Input
}

export interface UserMatchingWhereInput {
  AND?: UserMatchingWhereInput[] | UserMatchingWhereInput
  OR?: UserMatchingWhereInput[] | UserMatchingWhereInput
  NOT?: UserMatchingWhereInput[] | UserMatchingWhereInput
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
}

export interface PubgUpdateInput {
  gameType?: PubgGameType
  server?: PubgServer
}

export interface UserCreateWithoutCommentsInput {
  teams?: TeamCreateManyWithoutMembersInput
  interest?: InterestCreateManyInput
  followingEvents?: EventCreateManyInput
  followingTeams?: TeamCreateManyWithoutFollowedInput
  follwoingUsers?: UserCreateManyInput
}

export interface UserUpsertWithoutCommentsInput {
  update: UserUpdateWithoutCommentsDataInput
  create: UserCreateWithoutCommentsInput
}

export interface TeamCreateInput {
  name?: String
  topic?: TeamTopic
  description?: String
  members?: UserCreateManyWithoutTeamsInput
  followed?: UserCreateManyWithoutFollowingTeamsInput
  comments?: TeamCommentCreateManyInput
}

export interface TeamUpsertWithWhereUniqueWithoutMembersInput {
  where: TeamWhereUniqueInput
  update: TeamUpdateWithoutMembersDataInput
  create: TeamCreateWithoutMembersInput
}

export interface PubgCreateInput {
  gameType?: PubgGameType
  server?: PubgServer
}

export interface TeamCommentUpsertWithWhereUniqueNestedInput {
  where: TeamCommentWhereUniqueInput
  update: TeamCommentUpdateDataInput
  create: TeamCommentCreateInput
}

export interface LolCreateInput {
  gameType?: LolGameType
  lolTier?: LolTier
  lolRole?: LolRole
}

export interface TeamCommentUpdateWithWhereUniqueNestedInput {
  where: TeamCommentWhereUniqueInput
  data: TeamCommentUpdateDataInput
}

export interface OverwatchCreateInput {
  gameType?: OverwatchGameType
  overwatchTier?: OverwatchTier
  overwatchRole?: OverwatchRole
}

export interface ScrimmageSubscriptionWhereInput {
  AND?: ScrimmageSubscriptionWhereInput[] | ScrimmageSubscriptionWhereInput
  OR?: ScrimmageSubscriptionWhereInput[] | ScrimmageSubscriptionWhereInput
  NOT?: ScrimmageSubscriptionWhereInput[] | ScrimmageSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ScrimmageWhereInput
}

export interface UserUpdateInput {
  teams?: TeamUpdateManyWithoutMembersInput
  interest?: InterestUpdateManyInput
  followingEvents?: EventUpdateManyInput
  followingTeams?: TeamUpdateManyWithoutFollowedInput
  follwoingUsers?: UserUpdateManyInput
  comments?: UserCommentUpdateManyWithoutWriterInput
}

export interface UserCommentSubscriptionWhereInput {
  AND?: UserCommentSubscriptionWhereInput[] | UserCommentSubscriptionWhereInput
  OR?: UserCommentSubscriptionWhereInput[] | UserCommentSubscriptionWhereInput
  NOT?: UserCommentSubscriptionWhereInput[] | UserCommentSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserCommentWhereInput
}

export interface TeamUpdateManyWithoutMembersInput {
  create?: TeamCreateWithoutMembersInput[] | TeamCreateWithoutMembersInput
  connect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
  disconnect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
  delete?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
  update?: TeamUpdateWithWhereUniqueWithoutMembersInput[] | TeamUpdateWithWhereUniqueWithoutMembersInput
  upsert?: TeamUpsertWithWhereUniqueWithoutMembersInput[] | TeamUpsertWithWhereUniqueWithoutMembersInput
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

export interface TeamUpdateWithWhereUniqueWithoutMembersInput {
  where: TeamWhereUniqueInput
  data: TeamUpdateWithoutMembersDataInput
}

export interface EventWhereUniqueInput {
  id?: ID_Input
}

export interface TeamUpdateWithoutMembersDataInput {
  name?: String
  topic?: TeamTopic
  description?: String
  followed?: UserUpdateManyWithoutFollowingTeamsInput
  comments?: TeamCommentUpdateManyInput
}

export interface TeamCommentUpdateInput {
  tag?: TeamCommentTag
  comment?: String
  writer?: UserUpdateOneInput
  related_event?: EventUpdateOneInput
}

export interface UserUpdateManyWithoutFollowingTeamsInput {
  create?: UserCreateWithoutFollowingTeamsInput[] | UserCreateWithoutFollowingTeamsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutFollowingTeamsInput[] | UserUpdateWithWhereUniqueWithoutFollowingTeamsInput
  upsert?: UserUpsertWithWhereUniqueWithoutFollowingTeamsInput[] | UserUpsertWithWhereUniqueWithoutFollowingTeamsInput
}

export interface UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserUpdateWithWhereUniqueWithoutFollowingTeamsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutFollowingTeamsDataInput
}

export interface OverwatchSubscriptionWhereInput {
  AND?: OverwatchSubscriptionWhereInput[] | OverwatchSubscriptionWhereInput
  OR?: OverwatchSubscriptionWhereInput[] | OverwatchSubscriptionWhereInput
  NOT?: OverwatchSubscriptionWhereInput[] | OverwatchSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: OverwatchWhereInput
}

export interface OverwatchWhereInput {
  AND?: OverwatchWhereInput[] | OverwatchWhereInput
  OR?: OverwatchWhereInput[] | OverwatchWhereInput
  NOT?: OverwatchWhereInput[] | OverwatchWhereInput
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
  gameType?: OverwatchGameType
  gameType_not?: OverwatchGameType
  gameType_in?: OverwatchGameType[] | OverwatchGameType
  gameType_not_in?: OverwatchGameType[] | OverwatchGameType
  overwatchTier?: OverwatchTier
  overwatchTier_not?: OverwatchTier
  overwatchTier_in?: OverwatchTier[] | OverwatchTier
  overwatchTier_not_in?: OverwatchTier[] | OverwatchTier
  overwatchRole?: OverwatchRole
  overwatchRole_not?: OverwatchRole
  overwatchRole_in?: OverwatchRole[] | OverwatchRole
  overwatchRole_not_in?: OverwatchRole[] | OverwatchRole
}

export interface EventUpdateWithWhereUniqueNestedInput {
  where: EventWhereUniqueInput
  data: EventUpdateDataInput
}

export interface EventUpdateManyInput {
  create?: EventCreateInput[] | EventCreateInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  disconnect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  delete?: EventWhereUniqueInput[] | EventWhereUniqueInput
  update?: EventUpdateWithWhereUniqueNestedInput[] | EventUpdateWithWhereUniqueNestedInput
  upsert?: EventUpsertWithWhereUniqueNestedInput[] | EventUpsertWithWhereUniqueNestedInput
}

export interface InterestUpdateManyInput {
  connect?: InterestWhereUniqueInput[] | InterestWhereUniqueInput
  disconnect?: InterestWhereUniqueInput[] | InterestWhereUniqueInput
  delete?: InterestWhereUniqueInput[] | InterestWhereUniqueInput
}

export interface UserUpdateWithoutFollowingTeamsDataInput {
  teams?: TeamUpdateManyWithoutMembersInput
  interest?: InterestUpdateManyInput
  followingEvents?: EventUpdateManyInput
  follwoingUsers?: UserUpdateManyInput
  comments?: UserCommentUpdateManyWithoutWriterInput
}

export interface UserCommentWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface UserUpdateOneWithoutCommentsInput {
  create?: UserCreateWithoutCommentsInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutCommentsDataInput
  upsert?: UserUpsertWithoutCommentsInput
}

export interface OverwatchWhereUniqueInput {
  id?: ID_Input
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface OverwatchPreviousValues {
  id: ID_Output
  gameType?: OverwatchGameType
  overwatchTier?: OverwatchTier
  overwatchRole?: OverwatchRole
}

export interface Overwatch extends Node {
  id: ID_Output
  gameType?: OverwatchGameType
  overwatchTier?: OverwatchTier
  overwatchRole?: OverwatchRole
}

export interface UserComment extends Node {
  id: ID_Output
  writer?: User
  tag?: UserCommentTag
  comment?: String
  related_event?: Event
}

export interface BatchPayload {
  count: Long
}

/*
 * An edge in a connection.

 */
export interface OverwatchEdge {
  node: Overwatch
  cursor: String
}

export interface AggregateOverwatch {
  count: Int
}

export interface UserMatching extends Node {
  id: ID_Output
}

/*
 * A connection to a list of items.

 */
export interface OverwatchConnection {
  pageInfo: PageInfo
  edges: OverwatchEdge[]
  aggregate: AggregateOverwatch
}

export interface AggregateLol {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface LolEdge {
  node: Lol
  cursor: String
}

export interface AggregatePubg {
  count: Int
}

export interface Interest extends Node {
  id: ID_Output
}

/*
 * A connection to a list of items.

 */
export interface PubgConnection {
  pageInfo: PageInfo
  edges: PubgEdge[]
  aggregate: AggregatePubg
}

export interface LolPreviousValues {
  id: ID_Output
  gameType?: LolGameType
  lolTier?: LolTier
  lolRole?: LolRole
}

/*
 * An edge in a connection.

 */
export interface ScrimmageEdge {
  node: Scrimmage
  cursor: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface AggregateEvent {
  count: Int
}

export interface UserPreviousValues {
  id: ID_Output
}

/*
 * A connection to a list of items.

 */
export interface EventConnection {
  pageInfo: PageInfo
  edges: EventEdge[]
  aggregate: AggregateEvent
}

export interface Lol extends Node {
  id: ID_Output
  gameType?: LolGameType
  lolTier?: LolTier
  lolRole?: LolRole
}

/*
 * An edge in a connection.

 */
export interface UserMatchingEdge {
  node: UserMatching
  cursor: String
}

export interface InterestSubscriptionPayload {
  mutation: MutationType
  node?: Interest
  updatedFields?: String[]
  previousValues?: InterestPreviousValues
}

export interface AggregateTeamComment {
  count: Int
}

export interface InterestPreviousValues {
  id: ID_Output
}

/*
 * A connection to a list of items.

 */
export interface TeamCommentConnection {
  pageInfo: PageInfo
  edges: TeamCommentEdge[]
  aggregate: AggregateTeamComment
}

export interface LolSubscriptionPayload {
  mutation: MutationType
  node?: Lol
  updatedFields?: String[]
  previousValues?: LolPreviousValues
}

/*
 * An edge in a connection.

 */
export interface TeamEdge {
  node: Team
  cursor: String
}

export interface UserCommentSubscriptionPayload {
  mutation: MutationType
  node?: UserComment
  updatedFields?: String[]
  previousValues?: UserCommentPreviousValues
}

export interface AggregateUserComment {
  count: Int
}

export interface UserCommentPreviousValues {
  id: ID_Output
  tag?: UserCommentTag
  comment?: String
}

/*
 * A connection to a list of items.

 */
export interface UserCommentConnection {
  pageInfo: PageInfo
  edges: UserCommentEdge[]
  aggregate: AggregateUserComment
}

export interface User extends Node {
  id: ID_Output
  teams?: Team[]
  interest?: Interest[]
  followingEvents?: Event[]
  followingTeams?: Team[]
  follwoingUsers?: User[]
  comments?: UserComment[]
}

/*
 * An edge in a connection.

 */
export interface InterestEdge {
  node: Interest
  cursor: String
}

export interface TeamSubscriptionPayload {
  mutation: MutationType
  node?: Team
  updatedFields?: String[]
  previousValues?: TeamPreviousValues
}

export interface AggregateUser {
  count: Int
}

export interface TeamPreviousValues {
  id: ID_Output
  name?: String
  topic?: TeamTopic
  description?: String
}

export interface OverwatchSubscriptionPayload {
  mutation: MutationType
  node?: Overwatch
  updatedFields?: String[]
  previousValues?: OverwatchPreviousValues
}

export interface Pubg extends Node {
  id: ID_Output
  gameType?: PubgGameType
  server?: PubgServer
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface TeamCommentSubscriptionPayload {
  mutation: MutationType
  node?: TeamComment
  updatedFields?: String[]
  previousValues?: TeamCommentPreviousValues
}

/*
 * An edge in a connection.

 */
export interface PubgEdge {
  node: Pubg
  cursor: String
}

export interface TeamCommentPreviousValues {
  id: ID_Output
  tag?: TeamCommentTag
  comment?: String
}

/*
 * A connection to a list of items.

 */
export interface ScrimmageConnection {
  pageInfo: PageInfo
  edges: ScrimmageEdge[]
  aggregate: AggregateScrimmage
}

export interface Team extends Node {
  id: ID_Output
  name?: String
  topic?: TeamTopic
  description?: String
  members?: User[]
  followed?: User[]
  comments?: TeamComment[]
}

export interface AggregateUserMatching {
  count: Int
}

export interface UserMatchingSubscriptionPayload {
  mutation: MutationType
  node?: UserMatching
  updatedFields?: String[]
  previousValues?: UserMatchingPreviousValues
}

/*
 * An edge in a connection.

 */
export interface TeamCommentEdge {
  node: TeamComment
  cursor: String
}

export interface UserMatchingPreviousValues {
  id: ID_Output
}

/*
 * A connection to a list of items.

 */
export interface TeamConnection {
  pageInfo: PageInfo
  edges: TeamEdge[]
  aggregate: AggregateTeam
}

export interface TeamComment extends Node {
  id: ID_Output
  writer?: User
  tag?: TeamCommentTag
  comment?: String
  related_event?: Event
}

export interface AggregateInterest {
  count: Int
}

export interface EventSubscriptionPayload {
  mutation: MutationType
  node?: Event
  updatedFields?: String[]
  previousValues?: EventPreviousValues
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface EventPreviousValues {
  id: ID_Output
  topic?: String
  place?: String
  type?: String
  startDateTime?: DateTime
}

/*
 * A connection to a list of items.

 */
export interface LolConnection {
  pageInfo: PageInfo
  edges: LolEdge[]
  aggregate: AggregateLol
}

export interface Scrimmage extends Node {
  id: ID_Output
}

/*
 * An edge in a connection.

 */
export interface EventEdge {
  node: Event
  cursor: String
}

export interface ScrimmageSubscriptionPayload {
  mutation: MutationType
  node?: Scrimmage
  updatedFields?: String[]
  previousValues?: ScrimmagePreviousValues
}

export interface AggregateTeam {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface InterestConnection {
  pageInfo: PageInfo
  edges: InterestEdge[]
  aggregate: AggregateInterest
}

export interface PubgPreviousValues {
  id: ID_Output
  gameType?: PubgGameType
  server?: PubgServer
}

export interface PubgSubscriptionPayload {
  mutation: MutationType
  node?: Pubg
  updatedFields?: String[]
  previousValues?: PubgPreviousValues
}

export interface Event extends Node {
  id: ID_Output
  topic?: String
  place?: String
  type?: String
  startDateTime?: DateTime
}

export interface ScrimmagePreviousValues {
  id: ID_Output
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
export interface UserCommentEdge {
  node: UserComment
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface UserMatchingConnection {
  pageInfo: PageInfo
  edges: UserMatchingEdge[]
  aggregate: AggregateUserMatching
}

export interface AggregateScrimmage {
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
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export type DateTime = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

export interface Schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

export type Query = {
  users: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<User[]>
  interests: (args: { where?: InterestWhereInput, orderBy?: InterestOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Interest[]>
  userComments: (args: { where?: UserCommentWhereInput, orderBy?: UserCommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<UserComment[]>
  teams: (args: { where?: TeamWhereInput, orderBy?: TeamOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Team[]>
  teamComments: (args: { where?: TeamCommentWhereInput, orderBy?: TeamCommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<TeamComment[]>
  userMatchings: (args: { where?: UserMatchingWhereInput, orderBy?: UserMatchingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<UserMatching[]>
  events: (args: { where?: EventWhereInput, orderBy?: EventOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Event[]>
  scrimmages: (args: { where?: ScrimmageWhereInput, orderBy?: ScrimmageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Scrimmage[]>
  pubgs: (args: { where?: PubgWhereInput, orderBy?: PubgOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Pubg[]>
  lols: (args: { where?: LolWhereInput, orderBy?: LolOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Lol[]>
  overwatches: (args: { where?: OverwatchWhereInput, orderBy?: OverwatchOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Overwatch[]>
  user: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  interest: (args: { where: InterestWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Interest | null>
  userComment: (args: { where: UserCommentWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<UserComment | null>
  team: (args: { where: TeamWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Team | null>
  teamComment: (args: { where: TeamCommentWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<TeamComment | null>
  userMatching: (args: { where: UserMatchingWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<UserMatching | null>
  event: (args: { where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Event | null>
  scrimmage: (args: { where: ScrimmageWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Scrimmage | null>
  pubg: (args: { where: PubgWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Pubg | null>
  lol: (args: { where: LolWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Lol | null>
  overwatch: (args: { where: OverwatchWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Overwatch | null>
  usersConnection: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<UserConnection>
  interestsConnection: (args: { where?: InterestWhereInput, orderBy?: InterestOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<InterestConnection>
  userCommentsConnection: (args: { where?: UserCommentWhereInput, orderBy?: UserCommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<UserCommentConnection>
  teamsConnection: (args: { where?: TeamWhereInput, orderBy?: TeamOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<TeamConnection>
  teamCommentsConnection: (args: { where?: TeamCommentWhereInput, orderBy?: TeamCommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<TeamCommentConnection>
  userMatchingsConnection: (args: { where?: UserMatchingWhereInput, orderBy?: UserMatchingOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<UserMatchingConnection>
  eventsConnection: (args: { where?: EventWhereInput, orderBy?: EventOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<EventConnection>
  scrimmagesConnection: (args: { where?: ScrimmageWhereInput, orderBy?: ScrimmageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<ScrimmageConnection>
  pubgsConnection: (args: { where?: PubgWhereInput, orderBy?: PubgOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<PubgConnection>
  lolsConnection: (args: { where?: LolWhereInput, orderBy?: LolOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<LolConnection>
  overwatchesConnection: (args: { where?: OverwatchWhereInput, orderBy?: OverwatchOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<OverwatchConnection>
  node: (args: { id: ID_Output }, info?: GraphQLResolveInfo | string) => Promise<Node | null>
}

export type Mutation = {
  createUser: (args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  createInterest: (args: {}, info?: GraphQLResolveInfo | string) => Promise<Interest>
  createUserComment: (args: { data: UserCommentCreateInput }, info?: GraphQLResolveInfo | string) => Promise<UserComment>
  createTeam: (args: { data: TeamCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Team>
  createTeamComment: (args: { data: TeamCommentCreateInput }, info?: GraphQLResolveInfo | string) => Promise<TeamComment>
  createUserMatching: (args: {}, info?: GraphQLResolveInfo | string) => Promise<UserMatching>
  createEvent: (args: { data: EventCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Event>
  createScrimmage: (args: {}, info?: GraphQLResolveInfo | string) => Promise<Scrimmage>
  createPubg: (args: { data: PubgCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Pubg>
  createLol: (args: { data: LolCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Lol>
  createOverwatch: (args: { data: OverwatchCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Overwatch>
  updateUser: (args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  updateUserComment: (args: { data: UserCommentUpdateInput, where: UserCommentWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<UserComment | null>
  updateTeam: (args: { data: TeamUpdateInput, where: TeamWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Team | null>
  updateTeamComment: (args: { data: TeamCommentUpdateInput, where: TeamCommentWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<TeamComment | null>
  updateEvent: (args: { data: EventUpdateInput, where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Event | null>
  updatePubg: (args: { data: PubgUpdateInput, where: PubgWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Pubg | null>
  updateLol: (args: { data: LolUpdateInput, where: LolWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Lol | null>
  updateOverwatch: (args: { data: OverwatchUpdateInput, where: OverwatchWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Overwatch | null>
  deleteUser: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  deleteInterest: (args: { where: InterestWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Interest | null>
  deleteUserComment: (args: { where: UserCommentWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<UserComment | null>
  deleteTeam: (args: { where: TeamWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Team | null>
  deleteTeamComment: (args: { where: TeamCommentWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<TeamComment | null>
  deleteUserMatching: (args: { where: UserMatchingWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<UserMatching | null>
  deleteEvent: (args: { where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Event | null>
  deleteScrimmage: (args: { where: ScrimmageWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Scrimmage | null>
  deletePubg: (args: { where: PubgWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Pubg | null>
  deleteLol: (args: { where: LolWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Lol | null>
  deleteOverwatch: (args: { where: OverwatchWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Overwatch | null>
  upsertUser: (args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  upsertUserComment: (args: { where: UserCommentWhereUniqueInput, create: UserCommentCreateInput, update: UserCommentUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<UserComment>
  upsertTeam: (args: { where: TeamWhereUniqueInput, create: TeamCreateInput, update: TeamUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Team>
  upsertTeamComment: (args: { where: TeamCommentWhereUniqueInput, create: TeamCommentCreateInput, update: TeamCommentUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<TeamComment>
  upsertEvent: (args: { where: EventWhereUniqueInput, create: EventCreateInput, update: EventUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Event>
  upsertPubg: (args: { where: PubgWhereUniqueInput, create: PubgCreateInput, update: PubgUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Pubg>
  upsertLol: (args: { where: LolWhereUniqueInput, create: LolCreateInput, update: LolUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Lol>
  upsertOverwatch: (args: { where: OverwatchWhereUniqueInput, create: OverwatchCreateInput, update: OverwatchUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Overwatch>
  updateManyUsers: (args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyUserComments: (args: { data: UserCommentUpdateInput, where?: UserCommentWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyTeams: (args: { data: TeamUpdateInput, where?: TeamWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyTeamComments: (args: { data: TeamCommentUpdateInput, where?: TeamCommentWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyEvents: (args: { data: EventUpdateInput, where?: EventWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyPubgs: (args: { data: PubgUpdateInput, where?: PubgWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyLols: (args: { data: LolUpdateInput, where?: LolWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyOverwatches: (args: { data: OverwatchUpdateInput, where?: OverwatchWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyUsers: (args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyInterests: (args: { where?: InterestWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyUserComments: (args: { where?: UserCommentWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyTeams: (args: { where?: TeamWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyTeamComments: (args: { where?: TeamCommentWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyUserMatchings: (args: { where?: UserMatchingWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyEvents: (args: { where?: EventWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyScrimmages: (args: { where?: ScrimmageWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyPubgs: (args: { where?: PubgWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyLols: (args: { where?: LolWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyOverwatches: (args: { where?: OverwatchWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
}

export type Subscription = {
  user: (args: { where?: UserSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<UserSubscriptionPayload>>
  interest: (args: { where?: InterestSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<InterestSubscriptionPayload>>
  userComment: (args: { where?: UserCommentSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<UserCommentSubscriptionPayload>>
  team: (args: { where?: TeamSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<TeamSubscriptionPayload>>
  teamComment: (args: { where?: TeamCommentSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<TeamCommentSubscriptionPayload>>
  userMatching: (args: { where?: UserMatchingSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<UserMatchingSubscriptionPayload>>
  event: (args: { where?: EventSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<EventSubscriptionPayload>>
  scrimmage: (args: { where?: ScrimmageSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<ScrimmageSubscriptionPayload>>
  pubg: (args: { where?: PubgSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<PubgSubscriptionPayload>>
  lol: (args: { where?: LolSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<LolSubscriptionPayload>>
  overwatch: (args: { where?: OverwatchSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<OverwatchSubscriptionPayload>>
}

export class Prisma extends BasePrisma {
  
  constructor({ endpoint, secret, fragmentReplacements, debug }: BasePrismaOptions) {
    super({ typeDefs, endpoint, secret, fragmentReplacements, debug });
  }

  exists = {
    User: (where: UserWhereInput): Promise<boolean> => super.existsDelegate('query', 'users', { where }, {}, '{ id }'),
    Interest: (where: InterestWhereInput): Promise<boolean> => super.existsDelegate('query', 'interests', { where }, {}, '{ id }'),
    UserComment: (where: UserCommentWhereInput): Promise<boolean> => super.existsDelegate('query', 'userComments', { where }, {}, '{ id }'),
    Team: (where: TeamWhereInput): Promise<boolean> => super.existsDelegate('query', 'teams', { where }, {}, '{ id }'),
    TeamComment: (where: TeamCommentWhereInput): Promise<boolean> => super.existsDelegate('query', 'teamComments', { where }, {}, '{ id }'),
    UserMatching: (where: UserMatchingWhereInput): Promise<boolean> => super.existsDelegate('query', 'userMatchings', { where }, {}, '{ id }'),
    Event: (where: EventWhereInput): Promise<boolean> => super.existsDelegate('query', 'events', { where }, {}, '{ id }'),
    Scrimmage: (where: ScrimmageWhereInput): Promise<boolean> => super.existsDelegate('query', 'scrimmages', { where }, {}, '{ id }'),
    Pubg: (where: PubgWhereInput): Promise<boolean> => super.existsDelegate('query', 'pubgs', { where }, {}, '{ id }'),
    Lol: (where: LolWhereInput): Promise<boolean> => super.existsDelegate('query', 'lols', { where }, {}, '{ id }'),
    Overwatch: (where: OverwatchWhereInput): Promise<boolean> => super.existsDelegate('query', 'overwatches', { where }, {}, '{ id }')
  }

  query: Query = {
    users: (args, info): Promise<User[]> => super.delegate('query', 'users', args, {}, info),
    interests: (args, info): Promise<Interest[]> => super.delegate('query', 'interests', args, {}, info),
    userComments: (args, info): Promise<UserComment[]> => super.delegate('query', 'userComments', args, {}, info),
    teams: (args, info): Promise<Team[]> => super.delegate('query', 'teams', args, {}, info),
    teamComments: (args, info): Promise<TeamComment[]> => super.delegate('query', 'teamComments', args, {}, info),
    userMatchings: (args, info): Promise<UserMatching[]> => super.delegate('query', 'userMatchings', args, {}, info),
    events: (args, info): Promise<Event[]> => super.delegate('query', 'events', args, {}, info),
    scrimmages: (args, info): Promise<Scrimmage[]> => super.delegate('query', 'scrimmages', args, {}, info),
    pubgs: (args, info): Promise<Pubg[]> => super.delegate('query', 'pubgs', args, {}, info),
    lols: (args, info): Promise<Lol[]> => super.delegate('query', 'lols', args, {}, info),
    overwatches: (args, info): Promise<Overwatch[]> => super.delegate('query', 'overwatches', args, {}, info),
    user: (args, info): Promise<User | null> => super.delegate('query', 'user', args, {}, info),
    interest: (args, info): Promise<Interest | null> => super.delegate('query', 'interest', args, {}, info),
    userComment: (args, info): Promise<UserComment | null> => super.delegate('query', 'userComment', args, {}, info),
    team: (args, info): Promise<Team | null> => super.delegate('query', 'team', args, {}, info),
    teamComment: (args, info): Promise<TeamComment | null> => super.delegate('query', 'teamComment', args, {}, info),
    userMatching: (args, info): Promise<UserMatching | null> => super.delegate('query', 'userMatching', args, {}, info),
    event: (args, info): Promise<Event | null> => super.delegate('query', 'event', args, {}, info),
    scrimmage: (args, info): Promise<Scrimmage | null> => super.delegate('query', 'scrimmage', args, {}, info),
    pubg: (args, info): Promise<Pubg | null> => super.delegate('query', 'pubg', args, {}, info),
    lol: (args, info): Promise<Lol | null> => super.delegate('query', 'lol', args, {}, info),
    overwatch: (args, info): Promise<Overwatch | null> => super.delegate('query', 'overwatch', args, {}, info),
    usersConnection: (args, info): Promise<UserConnection> => super.delegate('query', 'usersConnection', args, {}, info),
    interestsConnection: (args, info): Promise<InterestConnection> => super.delegate('query', 'interestsConnection', args, {}, info),
    userCommentsConnection: (args, info): Promise<UserCommentConnection> => super.delegate('query', 'userCommentsConnection', args, {}, info),
    teamsConnection: (args, info): Promise<TeamConnection> => super.delegate('query', 'teamsConnection', args, {}, info),
    teamCommentsConnection: (args, info): Promise<TeamCommentConnection> => super.delegate('query', 'teamCommentsConnection', args, {}, info),
    userMatchingsConnection: (args, info): Promise<UserMatchingConnection> => super.delegate('query', 'userMatchingsConnection', args, {}, info),
    eventsConnection: (args, info): Promise<EventConnection> => super.delegate('query', 'eventsConnection', args, {}, info),
    scrimmagesConnection: (args, info): Promise<ScrimmageConnection> => super.delegate('query', 'scrimmagesConnection', args, {}, info),
    pubgsConnection: (args, info): Promise<PubgConnection> => super.delegate('query', 'pubgsConnection', args, {}, info),
    lolsConnection: (args, info): Promise<LolConnection> => super.delegate('query', 'lolsConnection', args, {}, info),
    overwatchesConnection: (args, info): Promise<OverwatchConnection> => super.delegate('query', 'overwatchesConnection', args, {}, info),
    node: (args, info): Promise<Node | null> => super.delegate('query', 'node', args, {}, info)
  }

  mutation: Mutation = {
    createUser: (args, info): Promise<User> => super.delegate('mutation', 'createUser', args, {}, info),
    createInterest: (args, info): Promise<Interest> => super.delegate('mutation', 'createInterest', args, {}, info),
    createUserComment: (args, info): Promise<UserComment> => super.delegate('mutation', 'createUserComment', args, {}, info),
    createTeam: (args, info): Promise<Team> => super.delegate('mutation', 'createTeam', args, {}, info),
    createTeamComment: (args, info): Promise<TeamComment> => super.delegate('mutation', 'createTeamComment', args, {}, info),
    createUserMatching: (args, info): Promise<UserMatching> => super.delegate('mutation', 'createUserMatching', args, {}, info),
    createEvent: (args, info): Promise<Event> => super.delegate('mutation', 'createEvent', args, {}, info),
    createScrimmage: (args, info): Promise<Scrimmage> => super.delegate('mutation', 'createScrimmage', args, {}, info),
    createPubg: (args, info): Promise<Pubg> => super.delegate('mutation', 'createPubg', args, {}, info),
    createLol: (args, info): Promise<Lol> => super.delegate('mutation', 'createLol', args, {}, info),
    createOverwatch: (args, info): Promise<Overwatch> => super.delegate('mutation', 'createOverwatch', args, {}, info),
    updateUser: (args, info): Promise<User | null> => super.delegate('mutation', 'updateUser', args, {}, info),
    updateUserComment: (args, info): Promise<UserComment | null> => super.delegate('mutation', 'updateUserComment', args, {}, info),
    updateTeam: (args, info): Promise<Team | null> => super.delegate('mutation', 'updateTeam', args, {}, info),
    updateTeamComment: (args, info): Promise<TeamComment | null> => super.delegate('mutation', 'updateTeamComment', args, {}, info),
    updateEvent: (args, info): Promise<Event | null> => super.delegate('mutation', 'updateEvent', args, {}, info),
    updatePubg: (args, info): Promise<Pubg | null> => super.delegate('mutation', 'updatePubg', args, {}, info),
    updateLol: (args, info): Promise<Lol | null> => super.delegate('mutation', 'updateLol', args, {}, info),
    updateOverwatch: (args, info): Promise<Overwatch | null> => super.delegate('mutation', 'updateOverwatch', args, {}, info),
    deleteUser: (args, info): Promise<User | null> => super.delegate('mutation', 'deleteUser', args, {}, info),
    deleteInterest: (args, info): Promise<Interest | null> => super.delegate('mutation', 'deleteInterest', args, {}, info),
    deleteUserComment: (args, info): Promise<UserComment | null> => super.delegate('mutation', 'deleteUserComment', args, {}, info),
    deleteTeam: (args, info): Promise<Team | null> => super.delegate('mutation', 'deleteTeam', args, {}, info),
    deleteTeamComment: (args, info): Promise<TeamComment | null> => super.delegate('mutation', 'deleteTeamComment', args, {}, info),
    deleteUserMatching: (args, info): Promise<UserMatching | null> => super.delegate('mutation', 'deleteUserMatching', args, {}, info),
    deleteEvent: (args, info): Promise<Event | null> => super.delegate('mutation', 'deleteEvent', args, {}, info),
    deleteScrimmage: (args, info): Promise<Scrimmage | null> => super.delegate('mutation', 'deleteScrimmage', args, {}, info),
    deletePubg: (args, info): Promise<Pubg | null> => super.delegate('mutation', 'deletePubg', args, {}, info),
    deleteLol: (args, info): Promise<Lol | null> => super.delegate('mutation', 'deleteLol', args, {}, info),
    deleteOverwatch: (args, info): Promise<Overwatch | null> => super.delegate('mutation', 'deleteOverwatch', args, {}, info),
    upsertUser: (args, info): Promise<User> => super.delegate('mutation', 'upsertUser', args, {}, info),
    upsertUserComment: (args, info): Promise<UserComment> => super.delegate('mutation', 'upsertUserComment', args, {}, info),
    upsertTeam: (args, info): Promise<Team> => super.delegate('mutation', 'upsertTeam', args, {}, info),
    upsertTeamComment: (args, info): Promise<TeamComment> => super.delegate('mutation', 'upsertTeamComment', args, {}, info),
    upsertEvent: (args, info): Promise<Event> => super.delegate('mutation', 'upsertEvent', args, {}, info),
    upsertPubg: (args, info): Promise<Pubg> => super.delegate('mutation', 'upsertPubg', args, {}, info),
    upsertLol: (args, info): Promise<Lol> => super.delegate('mutation', 'upsertLol', args, {}, info),
    upsertOverwatch: (args, info): Promise<Overwatch> => super.delegate('mutation', 'upsertOverwatch', args, {}, info),
    updateManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyUsers', args, {}, info),
    updateManyUserComments: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyUserComments', args, {}, info),
    updateManyTeams: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyTeams', args, {}, info),
    updateManyTeamComments: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyTeamComments', args, {}, info),
    updateManyEvents: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyEvents', args, {}, info),
    updateManyPubgs: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyPubgs', args, {}, info),
    updateManyLols: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyLols', args, {}, info),
    updateManyOverwatches: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyOverwatches', args, {}, info),
    deleteManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyUsers', args, {}, info),
    deleteManyInterests: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyInterests', args, {}, info),
    deleteManyUserComments: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyUserComments', args, {}, info),
    deleteManyTeams: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyTeams', args, {}, info),
    deleteManyTeamComments: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyTeamComments', args, {}, info),
    deleteManyUserMatchings: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyUserMatchings', args, {}, info),
    deleteManyEvents: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyEvents', args, {}, info),
    deleteManyScrimmages: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyScrimmages', args, {}, info),
    deleteManyPubgs: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyPubgs', args, {}, info),
    deleteManyLols: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyLols', args, {}, info),
    deleteManyOverwatches: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyOverwatches', args, {}, info)
  }

  subscription: Subscription = {
    user: (args, infoOrQuery): Promise<AsyncIterator<UserSubscriptionPayload>> => super.delegateSubscription('user', args, {}, infoOrQuery),
    interest: (args, infoOrQuery): Promise<AsyncIterator<InterestSubscriptionPayload>> => super.delegateSubscription('interest', args, {}, infoOrQuery),
    userComment: (args, infoOrQuery): Promise<AsyncIterator<UserCommentSubscriptionPayload>> => super.delegateSubscription('userComment', args, {}, infoOrQuery),
    team: (args, infoOrQuery): Promise<AsyncIterator<TeamSubscriptionPayload>> => super.delegateSubscription('team', args, {}, infoOrQuery),
    teamComment: (args, infoOrQuery): Promise<AsyncIterator<TeamCommentSubscriptionPayload>> => super.delegateSubscription('teamComment', args, {}, infoOrQuery),
    userMatching: (args, infoOrQuery): Promise<AsyncIterator<UserMatchingSubscriptionPayload>> => super.delegateSubscription('userMatching', args, {}, infoOrQuery),
    event: (args, infoOrQuery): Promise<AsyncIterator<EventSubscriptionPayload>> => super.delegateSubscription('event', args, {}, infoOrQuery),
    scrimmage: (args, infoOrQuery): Promise<AsyncIterator<ScrimmageSubscriptionPayload>> => super.delegateSubscription('scrimmage', args, {}, infoOrQuery),
    pubg: (args, infoOrQuery): Promise<AsyncIterator<PubgSubscriptionPayload>> => super.delegateSubscription('pubg', args, {}, infoOrQuery),
    lol: (args, infoOrQuery): Promise<AsyncIterator<LolSubscriptionPayload>> => super.delegateSubscription('lol', args, {}, infoOrQuery),
    overwatch: (args, infoOrQuery): Promise<AsyncIterator<OverwatchSubscriptionPayload>> => super.delegateSubscription('overwatch', args, {}, infoOrQuery)
  }
}