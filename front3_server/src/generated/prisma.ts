import { Prisma as BasePrisma, BasePrismaOptions } from 'prisma-binding'
import { GraphQLResolveInfo } from 'graphql'

export const typeDefs = `
type AggregateAnyProfile {
  count: Int!
}

type AggregateBasketBallProfile {
  count: Int!
}

type AggregateEtcGamesProfile {
  count: Int!
}

type AggregateEtcSportsProfile {
  count: Int!
}

type AggregateEvent {
  count: Int!
}

type AggregateInterest {
  count: Int!
}

type AggregateLolProfile {
  count: Int!
}

type AggregateOverwatchProfile {
  count: Int!
}

type AggregatePubgProfile {
  count: Int!
}

type AggregateSoccerProfile {
  count: Int!
}

type AggregateTeam {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AnyProfile implements Node {
  id: ID!
  topic: String!
  description: String
}

"""
A connection to a list of items.
"""
type AnyProfileConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [AnyProfileEdge]!
  aggregate: AggregateAnyProfile!
}

input AnyProfileCreateInput {
  topic: String!
  description: String
}

input AnyProfileCreateOneInput {
  create: AnyProfileCreateInput
  connect: AnyProfileWhereUniqueInput
}

"""
An edge in a connection.
"""
type AnyProfileEdge {
  """
  The item at the end of the edge.
  """
  node: AnyProfile!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum AnyProfileOrderByInput {
  id_ASC
  id_DESC
  topic_ASC
  topic_DESC
  description_ASC
  description_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type AnyProfilePreviousValues {
  id: ID!
  topic: String!
  description: String
}

type AnyProfileSubscriptionPayload {
  mutation: MutationType!
  node: AnyProfile
  updatedFields: [String!]
  previousValues: AnyProfilePreviousValues
}

input AnyProfileSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [AnyProfileSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [AnyProfileSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [AnyProfileSubscriptionWhereInput!]
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
  node: AnyProfileWhereInput
}

input AnyProfileUpdateDataInput {
  topic: String
  description: String
}

input AnyProfileUpdateInput {
  topic: String
  description: String
}

input AnyProfileUpdateOneInput {
  create: AnyProfileCreateInput
  connect: AnyProfileWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: AnyProfileUpdateDataInput
  upsert: AnyProfileUpsertNestedInput
}

input AnyProfileUpsertNestedInput {
  update: AnyProfileUpdateDataInput!
  create: AnyProfileCreateInput!
}

input AnyProfileWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [AnyProfileWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [AnyProfileWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [AnyProfileWhereInput!]
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
}

input AnyProfileWhereUniqueInput {
  id: ID
}

type BasketBallProfile implements Node {
  id: ID!
  description: String
  role: BasketBallRole!
}

"""
A connection to a list of items.
"""
type BasketBallProfileConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [BasketBallProfileEdge]!
  aggregate: AggregateBasketBallProfile!
}

input BasketBallProfileCreateInput {
  description: String
  role: BasketBallRole!
}

input BasketBallProfileCreateOneInput {
  create: BasketBallProfileCreateInput
  connect: BasketBallProfileWhereUniqueInput
}

"""
An edge in a connection.
"""
type BasketBallProfileEdge {
  """
  The item at the end of the edge.
  """
  node: BasketBallProfile!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum BasketBallProfileOrderByInput {
  id_ASC
  id_DESC
  description_ASC
  description_DESC
  role_ASC
  role_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type BasketBallProfilePreviousValues {
  id: ID!
  description: String
  role: BasketBallRole!
}

type BasketBallProfileSubscriptionPayload {
  mutation: MutationType!
  node: BasketBallProfile
  updatedFields: [String!]
  previousValues: BasketBallProfilePreviousValues
}

input BasketBallProfileSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [BasketBallProfileSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [BasketBallProfileSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [BasketBallProfileSubscriptionWhereInput!]
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
  node: BasketBallProfileWhereInput
}

input BasketBallProfileUpdateDataInput {
  description: String
  role: BasketBallRole
}

input BasketBallProfileUpdateInput {
  description: String
  role: BasketBallRole
}

input BasketBallProfileUpdateOneInput {
  create: BasketBallProfileCreateInput
  connect: BasketBallProfileWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: BasketBallProfileUpdateDataInput
  upsert: BasketBallProfileUpsertNestedInput
}

input BasketBallProfileUpsertNestedInput {
  update: BasketBallProfileUpdateDataInput!
  create: BasketBallProfileCreateInput!
}

input BasketBallProfileWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [BasketBallProfileWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [BasketBallProfileWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [BasketBallProfileWhereInput!]
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
  role: BasketBallRole
  """
  All values that are not equal to given value.
  """
  role_not: BasketBallRole
  """
  All values that are contained in given list.
  """
  role_in: [BasketBallRole!]
  """
  All values that are not contained in given list.
  """
  role_not_in: [BasketBallRole!]
}

input BasketBallProfileWhereUniqueInput {
  id: ID
}

enum BasketBallRole {
  FILL
  GUARD
  FORWARD
  CENTER
}

type BatchPayload {
  """
  The number of nodes that have been affected by the Batch operation.
  """
  count: Long!
}

enum Category {
  LOL
  PUBG
  OVERWATCH
  ETC_GAMES
  SOCCER
  BASKET_BALL
  ETC_SPORTS
  ANY
}

scalar DateTime

type EtcGamesProfile implements Node {
  id: ID!
  gameName: String!
  name: String
  stats: String
}

"""
A connection to a list of items.
"""
type EtcGamesProfileConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [EtcGamesProfileEdge]!
  aggregate: AggregateEtcGamesProfile!
}

input EtcGamesProfileCreateInput {
  gameName: String!
  name: String
  stats: String
}

input EtcGamesProfileCreateOneInput {
  create: EtcGamesProfileCreateInput
  connect: EtcGamesProfileWhereUniqueInput
}

"""
An edge in a connection.
"""
type EtcGamesProfileEdge {
  """
  The item at the end of the edge.
  """
  node: EtcGamesProfile!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum EtcGamesProfileOrderByInput {
  id_ASC
  id_DESC
  gameName_ASC
  gameName_DESC
  name_ASC
  name_DESC
  stats_ASC
  stats_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type EtcGamesProfilePreviousValues {
  id: ID!
  gameName: String!
  name: String
  stats: String
}

type EtcGamesProfileSubscriptionPayload {
  mutation: MutationType!
  node: EtcGamesProfile
  updatedFields: [String!]
  previousValues: EtcGamesProfilePreviousValues
}

input EtcGamesProfileSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [EtcGamesProfileSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [EtcGamesProfileSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [EtcGamesProfileSubscriptionWhereInput!]
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
  node: EtcGamesProfileWhereInput
}

input EtcGamesProfileUpdateDataInput {
  gameName: String
  name: String
  stats: String
}

input EtcGamesProfileUpdateInput {
  gameName: String
  name: String
  stats: String
}

input EtcGamesProfileUpdateOneInput {
  create: EtcGamesProfileCreateInput
  connect: EtcGamesProfileWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: EtcGamesProfileUpdateDataInput
  upsert: EtcGamesProfileUpsertNestedInput
}

input EtcGamesProfileUpsertNestedInput {
  update: EtcGamesProfileUpdateDataInput!
  create: EtcGamesProfileCreateInput!
}

input EtcGamesProfileWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [EtcGamesProfileWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [EtcGamesProfileWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [EtcGamesProfileWhereInput!]
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
  gameName: String
  """
  All values that are not equal to given value.
  """
  gameName_not: String
  """
  All values that are contained in given list.
  """
  gameName_in: [String!]
  """
  All values that are not contained in given list.
  """
  gameName_not_in: [String!]
  """
  All values less than the given value.
  """
  gameName_lt: String
  """
  All values less than or equal the given value.
  """
  gameName_lte: String
  """
  All values greater than the given value.
  """
  gameName_gt: String
  """
  All values greater than or equal the given value.
  """
  gameName_gte: String
  """
  All values containing the given string.
  """
  gameName_contains: String
  """
  All values not containing the given string.
  """
  gameName_not_contains: String
  """
  All values starting with the given string.
  """
  gameName_starts_with: String
  """
  All values not starting with the given string.
  """
  gameName_not_starts_with: String
  """
  All values ending with the given string.
  """
  gameName_ends_with: String
  """
  All values not ending with the given string.
  """
  gameName_not_ends_with: String
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
  stats: String
  """
  All values that are not equal to given value.
  """
  stats_not: String
  """
  All values that are contained in given list.
  """
  stats_in: [String!]
  """
  All values that are not contained in given list.
  """
  stats_not_in: [String!]
  """
  All values less than the given value.
  """
  stats_lt: String
  """
  All values less than or equal the given value.
  """
  stats_lte: String
  """
  All values greater than the given value.
  """
  stats_gt: String
  """
  All values greater than or equal the given value.
  """
  stats_gte: String
  """
  All values containing the given string.
  """
  stats_contains: String
  """
  All values not containing the given string.
  """
  stats_not_contains: String
  """
  All values starting with the given string.
  """
  stats_starts_with: String
  """
  All values not starting with the given string.
  """
  stats_not_starts_with: String
  """
  All values ending with the given string.
  """
  stats_ends_with: String
  """
  All values not ending with the given string.
  """
  stats_not_ends_with: String
}

input EtcGamesProfileWhereUniqueInput {
  id: ID
}

type EtcSportsProfile implements Node {
  id: ID!
  sportsName: String!
  stats: String
  description: String
}

"""
A connection to a list of items.
"""
type EtcSportsProfileConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [EtcSportsProfileEdge]!
  aggregate: AggregateEtcSportsProfile!
}

input EtcSportsProfileCreateInput {
  sportsName: String!
  stats: String
  description: String
}

input EtcSportsProfileCreateOneInput {
  create: EtcSportsProfileCreateInput
  connect: EtcSportsProfileWhereUniqueInput
}

"""
An edge in a connection.
"""
type EtcSportsProfileEdge {
  """
  The item at the end of the edge.
  """
  node: EtcSportsProfile!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum EtcSportsProfileOrderByInput {
  id_ASC
  id_DESC
  sportsName_ASC
  sportsName_DESC
  stats_ASC
  stats_DESC
  description_ASC
  description_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type EtcSportsProfilePreviousValues {
  id: ID!
  sportsName: String!
  stats: String
  description: String
}

type EtcSportsProfileSubscriptionPayload {
  mutation: MutationType!
  node: EtcSportsProfile
  updatedFields: [String!]
  previousValues: EtcSportsProfilePreviousValues
}

input EtcSportsProfileSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [EtcSportsProfileSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [EtcSportsProfileSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [EtcSportsProfileSubscriptionWhereInput!]
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
  node: EtcSportsProfileWhereInput
}

input EtcSportsProfileUpdateDataInput {
  sportsName: String
  stats: String
  description: String
}

input EtcSportsProfileUpdateInput {
  sportsName: String
  stats: String
  description: String
}

input EtcSportsProfileUpdateOneInput {
  create: EtcSportsProfileCreateInput
  connect: EtcSportsProfileWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: EtcSportsProfileUpdateDataInput
  upsert: EtcSportsProfileUpsertNestedInput
}

input EtcSportsProfileUpsertNestedInput {
  update: EtcSportsProfileUpdateDataInput!
  create: EtcSportsProfileCreateInput!
}

input EtcSportsProfileWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [EtcSportsProfileWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [EtcSportsProfileWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [EtcSportsProfileWhereInput!]
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
  sportsName: String
  """
  All values that are not equal to given value.
  """
  sportsName_not: String
  """
  All values that are contained in given list.
  """
  sportsName_in: [String!]
  """
  All values that are not contained in given list.
  """
  sportsName_not_in: [String!]
  """
  All values less than the given value.
  """
  sportsName_lt: String
  """
  All values less than or equal the given value.
  """
  sportsName_lte: String
  """
  All values greater than the given value.
  """
  sportsName_gt: String
  """
  All values greater than or equal the given value.
  """
  sportsName_gte: String
  """
  All values containing the given string.
  """
  sportsName_contains: String
  """
  All values not containing the given string.
  """
  sportsName_not_contains: String
  """
  All values starting with the given string.
  """
  sportsName_starts_with: String
  """
  All values not starting with the given string.
  """
  sportsName_not_starts_with: String
  """
  All values ending with the given string.
  """
  sportsName_ends_with: String
  """
  All values not ending with the given string.
  """
  sportsName_not_ends_with: String
  stats: String
  """
  All values that are not equal to given value.
  """
  stats_not: String
  """
  All values that are contained in given list.
  """
  stats_in: [String!]
  """
  All values that are not contained in given list.
  """
  stats_not_in: [String!]
  """
  All values less than the given value.
  """
  stats_lt: String
  """
  All values less than or equal the given value.
  """
  stats_lte: String
  """
  All values greater than the given value.
  """
  stats_gt: String
  """
  All values greater than or equal the given value.
  """
  stats_gte: String
  """
  All values containing the given string.
  """
  stats_contains: String
  """
  All values not containing the given string.
  """
  stats_not_contains: String
  """
  All values starting with the given string.
  """
  stats_starts_with: String
  """
  All values not starting with the given string.
  """
  stats_not_starts_with: String
  """
  All values ending with the given string.
  """
  stats_ends_with: String
  """
  All values not ending with the given string.
  """
  stats_not_ends_with: String
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
}

input EtcSportsProfileWhereUniqueInput {
  id: ID
}

type Event implements Node {
  id: ID!
  name: String
  iconUrl: String
  category: Category
  type: EventType
  startTime: DateTime
  place: String
  owner(where: UserWhereInput): User
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
  category: Category
  type: EventType
  startTime: DateTime
  place: String
  owner: UserCreateOneWithoutEventsInput
}

input EventCreateManyWithoutOwnerInput {
  create: [EventCreateWithoutOwnerInput!]
  connect: [EventWhereUniqueInput!]
}

input EventCreateWithoutOwnerInput {
  name: String
  iconUrl: String
  category: Category
  type: EventType
  startTime: DateTime
  place: String
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
  category_ASC
  category_DESC
  type_ASC
  type_DESC
  startTime_ASC
  startTime_DESC
  place_ASC
  place_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type EventPreviousValues {
  id: ID!
  name: String
  iconUrl: String
  category: Category
  type: EventType
  startTime: DateTime
  place: String
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

enum EventType {
  TOURNAMENT
  LEAGUE
  ETC
}

input EventUpdateInput {
  name: String
  iconUrl: String
  category: Category
  type: EventType
  startTime: DateTime
  place: String
  owner: UserUpdateOneWithoutEventsInput
}

input EventUpdateManyWithoutOwnerInput {
  create: [EventCreateWithoutOwnerInput!]
  connect: [EventWhereUniqueInput!]
  disconnect: [EventWhereUniqueInput!]
  delete: [EventWhereUniqueInput!]
  update: [EventUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [EventUpsertWithWhereUniqueWithoutOwnerInput!]
}

input EventUpdateWithoutOwnerDataInput {
  name: String
  iconUrl: String
  category: Category
  type: EventType
  startTime: DateTime
  place: String
}

input EventUpdateWithWhereUniqueWithoutOwnerInput {
  where: EventWhereUniqueInput!
  data: EventUpdateWithoutOwnerDataInput!
}

input EventUpsertWithWhereUniqueWithoutOwnerInput {
  where: EventWhereUniqueInput!
  update: EventUpdateWithoutOwnerDataInput!
  create: EventCreateWithoutOwnerInput!
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
  category: Category
  """
  All values that are not equal to given value.
  """
  category_not: Category
  """
  All values that are contained in given list.
  """
  category_in: [Category!]
  """
  All values that are not contained in given list.
  """
  category_not_in: [Category!]
  type: EventType
  """
  All values that are not equal to given value.
  """
  type_not: EventType
  """
  All values that are contained in given list.
  """
  type_in: [EventType!]
  """
  All values that are not contained in given list.
  """
  type_not_in: [EventType!]
  startTime: DateTime
  """
  All values that are not equal to given value.
  """
  startTime_not: DateTime
  """
  All values that are contained in given list.
  """
  startTime_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  startTime_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  startTime_lt: DateTime
  """
  All values less than or equal the given value.
  """
  startTime_lte: DateTime
  """
  All values greater than the given value.
  """
  startTime_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  startTime_gte: DateTime
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
  owner: UserWhereInput
}

input EventWhereUniqueInput {
  id: ID
}

type Interest implements Node {
  id: ID!
  user(where: UserWhereInput): User!
  category: Category
  description: String
  lol(where: LolProfileWhereInput): LolProfile
  pubg(where: PubgProfileWhereInput): PubgProfile
  overwatch(where: OverwatchProfileWhereInput): OverwatchProfile
  etcGames(where: EtcGamesProfileWhereInput): EtcGamesProfile
  soccer(where: SoccerProfileWhereInput): SoccerProfile
  basketBall(where: BasketBallProfileWhereInput): BasketBallProfile
  etcSports(where: EtcSportsProfileWhereInput): EtcSportsProfile
  any(where: AnyProfileWhereInput): AnyProfile
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

input InterestCreateInput {
  category: Category
  description: String
  user: UserCreateOneWithoutInterestsInput!
  lol: LolProfileCreateOneInput
  pubg: PubgProfileCreateOneInput
  overwatch: OverwatchProfileCreateOneInput
  etcGames: EtcGamesProfileCreateOneInput
  soccer: SoccerProfileCreateOneInput
  basketBall: BasketBallProfileCreateOneInput
  etcSports: EtcSportsProfileCreateOneInput
  any: AnyProfileCreateOneInput
}

input InterestCreateManyWithoutUserInput {
  create: [InterestCreateWithoutUserInput!]
  connect: [InterestWhereUniqueInput!]
}

input InterestCreateWithoutUserInput {
  category: Category
  description: String
  lol: LolProfileCreateOneInput
  pubg: PubgProfileCreateOneInput
  overwatch: OverwatchProfileCreateOneInput
  etcGames: EtcGamesProfileCreateOneInput
  soccer: SoccerProfileCreateOneInput
  basketBall: BasketBallProfileCreateOneInput
  etcSports: EtcSportsProfileCreateOneInput
  any: AnyProfileCreateOneInput
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
  category_ASC
  category_DESC
  description_ASC
  description_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type InterestPreviousValues {
  id: ID!
  category: Category
  description: String
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

input InterestUpdateInput {
  category: Category
  description: String
  user: UserUpdateOneWithoutInterestsInput
  lol: LolProfileUpdateOneInput
  pubg: PubgProfileUpdateOneInput
  overwatch: OverwatchProfileUpdateOneInput
  etcGames: EtcGamesProfileUpdateOneInput
  soccer: SoccerProfileUpdateOneInput
  basketBall: BasketBallProfileUpdateOneInput
  etcSports: EtcSportsProfileUpdateOneInput
  any: AnyProfileUpdateOneInput
}

input InterestUpdateManyWithoutUserInput {
  create: [InterestCreateWithoutUserInput!]
  connect: [InterestWhereUniqueInput!]
  disconnect: [InterestWhereUniqueInput!]
  delete: [InterestWhereUniqueInput!]
  update: [InterestUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [InterestUpsertWithWhereUniqueWithoutUserInput!]
}

input InterestUpdateWithoutUserDataInput {
  category: Category
  description: String
  lol: LolProfileUpdateOneInput
  pubg: PubgProfileUpdateOneInput
  overwatch: OverwatchProfileUpdateOneInput
  etcGames: EtcGamesProfileUpdateOneInput
  soccer: SoccerProfileUpdateOneInput
  basketBall: BasketBallProfileUpdateOneInput
  etcSports: EtcSportsProfileUpdateOneInput
  any: AnyProfileUpdateOneInput
}

input InterestUpdateWithWhereUniqueWithoutUserInput {
  where: InterestWhereUniqueInput!
  data: InterestUpdateWithoutUserDataInput!
}

input InterestUpsertWithWhereUniqueWithoutUserInput {
  where: InterestWhereUniqueInput!
  update: InterestUpdateWithoutUserDataInput!
  create: InterestCreateWithoutUserInput!
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
  category: Category
  """
  All values that are not equal to given value.
  """
  category_not: Category
  """
  All values that are contained in given list.
  """
  category_in: [Category!]
  """
  All values that are not contained in given list.
  """
  category_not_in: [Category!]
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
  user: UserWhereInput
  lol: LolProfileWhereInput
  pubg: PubgProfileWhereInput
  overwatch: OverwatchProfileWhereInput
  etcGames: EtcGamesProfileWhereInput
  soccer: SoccerProfileWhereInput
  basketBall: BasketBallProfileWhereInput
  etcSports: EtcSportsProfileWhereInput
  any: AnyProfileWhereInput
}

input InterestWhereUniqueInput {
  id: ID
}

type LolProfile implements Node {
  id: ID!
  name: String!
  tier: LolTier!
  role: LolRole!
}

"""
A connection to a list of items.
"""
type LolProfileConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [LolProfileEdge]!
  aggregate: AggregateLolProfile!
}

input LolProfileCreateInput {
  name: String!
  tier: LolTier!
  role: LolRole!
}

input LolProfileCreateOneInput {
  create: LolProfileCreateInput
  connect: LolProfileWhereUniqueInput
}

"""
An edge in a connection.
"""
type LolProfileEdge {
  """
  The item at the end of the edge.
  """
  node: LolProfile!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum LolProfileOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  tier_ASC
  tier_DESC
  role_ASC
  role_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type LolProfilePreviousValues {
  id: ID!
  name: String!
  tier: LolTier!
  role: LolRole!
}

type LolProfileSubscriptionPayload {
  mutation: MutationType!
  node: LolProfile
  updatedFields: [String!]
  previousValues: LolProfilePreviousValues
}

input LolProfileSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [LolProfileSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [LolProfileSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [LolProfileSubscriptionWhereInput!]
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
  node: LolProfileWhereInput
}

input LolProfileUpdateDataInput {
  name: String
  tier: LolTier
  role: LolRole
}

input LolProfileUpdateInput {
  name: String
  tier: LolTier
  role: LolRole
}

input LolProfileUpdateOneInput {
  create: LolProfileCreateInput
  connect: LolProfileWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: LolProfileUpdateDataInput
  upsert: LolProfileUpsertNestedInput
}

input LolProfileUpsertNestedInput {
  update: LolProfileUpdateDataInput!
  create: LolProfileCreateInput!
}

input LolProfileWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [LolProfileWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [LolProfileWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [LolProfileWhereInput!]
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
  tier: LolTier
  """
  All values that are not equal to given value.
  """
  tier_not: LolTier
  """
  All values that are contained in given list.
  """
  tier_in: [LolTier!]
  """
  All values that are not contained in given list.
  """
  tier_not_in: [LolTier!]
  role: LolRole
  """
  All values that are not equal to given value.
  """
  role_not: LolRole
  """
  All values that are contained in given list.
  """
  role_in: [LolRole!]
  """
  All values that are not contained in given list.
  """
  role_not_in: [LolRole!]
}

input LolProfileWhereUniqueInput {
  id: ID
}

enum LolRole {
  FILL
  TOP
  JUNGLE
  MID
  ADC
  SUPPORT
}

enum LolTier {
  BRONZE
  SILVER
  GOLD
  PLATINUM
  DIAMOND
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

type OverwatchProfile implements Node {
  id: ID!
  name: String!
  rating: Int
  tier: OverwatchTier!
  role: OverwatchRole!
}

"""
A connection to a list of items.
"""
type OverwatchProfileConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [OverwatchProfileEdge]!
  aggregate: AggregateOverwatchProfile!
}

input OverwatchProfileCreateInput {
  name: String!
  rating: Int
  tier: OverwatchTier!
  role: OverwatchRole!
}

input OverwatchProfileCreateOneInput {
  create: OverwatchProfileCreateInput
  connect: OverwatchProfileWhereUniqueInput
}

"""
An edge in a connection.
"""
type OverwatchProfileEdge {
  """
  The item at the end of the edge.
  """
  node: OverwatchProfile!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum OverwatchProfileOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  rating_ASC
  rating_DESC
  tier_ASC
  tier_DESC
  role_ASC
  role_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type OverwatchProfilePreviousValues {
  id: ID!
  name: String!
  rating: Int
  tier: OverwatchTier!
  role: OverwatchRole!
}

type OverwatchProfileSubscriptionPayload {
  mutation: MutationType!
  node: OverwatchProfile
  updatedFields: [String!]
  previousValues: OverwatchProfilePreviousValues
}

input OverwatchProfileSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [OverwatchProfileSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [OverwatchProfileSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [OverwatchProfileSubscriptionWhereInput!]
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
  node: OverwatchProfileWhereInput
}

input OverwatchProfileUpdateDataInput {
  name: String
  rating: Int
  tier: OverwatchTier
  role: OverwatchRole
}

input OverwatchProfileUpdateInput {
  name: String
  rating: Int
  tier: OverwatchTier
  role: OverwatchRole
}

input OverwatchProfileUpdateOneInput {
  create: OverwatchProfileCreateInput
  connect: OverwatchProfileWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: OverwatchProfileUpdateDataInput
  upsert: OverwatchProfileUpsertNestedInput
}

input OverwatchProfileUpsertNestedInput {
  update: OverwatchProfileUpdateDataInput!
  create: OverwatchProfileCreateInput!
}

input OverwatchProfileWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [OverwatchProfileWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [OverwatchProfileWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [OverwatchProfileWhereInput!]
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
  rating: Int
  """
  All values that are not equal to given value.
  """
  rating_not: Int
  """
  All values that are contained in given list.
  """
  rating_in: [Int!]
  """
  All values that are not contained in given list.
  """
  rating_not_in: [Int!]
  """
  All values less than the given value.
  """
  rating_lt: Int
  """
  All values less than or equal the given value.
  """
  rating_lte: Int
  """
  All values greater than the given value.
  """
  rating_gt: Int
  """
  All values greater than or equal the given value.
  """
  rating_gte: Int
  tier: OverwatchTier
  """
  All values that are not equal to given value.
  """
  tier_not: OverwatchTier
  """
  All values that are contained in given list.
  """
  tier_in: [OverwatchTier!]
  """
  All values that are not contained in given list.
  """
  tier_not_in: [OverwatchTier!]
  role: OverwatchRole
  """
  All values that are not equal to given value.
  """
  role_not: OverwatchRole
  """
  All values that are contained in given list.
  """
  role_in: [OverwatchRole!]
  """
  All values that are not contained in given list.
  """
  role_not_in: [OverwatchRole!]
}

input OverwatchProfileWhereUniqueInput {
  id: ID
}

enum OverwatchRole {
  FILL
  TANK
  DPS
  HEAL
}

enum OverwatchTier {
  BRONZE
  SILVER
  GOLD
  PLATINUM
  DIAMOND
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

type PubgProfile implements Node {
  id: ID!
  name: String!
  server: PubgServer!
  rating: Int
}

"""
A connection to a list of items.
"""
type PubgProfileConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [PubgProfileEdge]!
  aggregate: AggregatePubgProfile!
}

input PubgProfileCreateInput {
  name: String!
  server: PubgServer!
  rating: Int
}

input PubgProfileCreateOneInput {
  create: PubgProfileCreateInput
  connect: PubgProfileWhereUniqueInput
}

"""
An edge in a connection.
"""
type PubgProfileEdge {
  """
  The item at the end of the edge.
  """
  node: PubgProfile!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum PubgProfileOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  server_ASC
  server_DESC
  rating_ASC
  rating_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PubgProfilePreviousValues {
  id: ID!
  name: String!
  server: PubgServer!
  rating: Int
}

type PubgProfileSubscriptionPayload {
  mutation: MutationType!
  node: PubgProfile
  updatedFields: [String!]
  previousValues: PubgProfilePreviousValues
}

input PubgProfileSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [PubgProfileSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [PubgProfileSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [PubgProfileSubscriptionWhereInput!]
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
  node: PubgProfileWhereInput
}

input PubgProfileUpdateDataInput {
  name: String
  server: PubgServer
  rating: Int
}

input PubgProfileUpdateInput {
  name: String
  server: PubgServer
  rating: Int
}

input PubgProfileUpdateOneInput {
  create: PubgProfileCreateInput
  connect: PubgProfileWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PubgProfileUpdateDataInput
  upsert: PubgProfileUpsertNestedInput
}

input PubgProfileUpsertNestedInput {
  update: PubgProfileUpdateDataInput!
  create: PubgProfileCreateInput!
}

input PubgProfileWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [PubgProfileWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [PubgProfileWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [PubgProfileWhereInput!]
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
  rating: Int
  """
  All values that are not equal to given value.
  """
  rating_not: Int
  """
  All values that are contained in given list.
  """
  rating_in: [Int!]
  """
  All values that are not contained in given list.
  """
  rating_not_in: [Int!]
  """
  All values less than the given value.
  """
  rating_lt: Int
  """
  All values less than or equal the given value.
  """
  rating_lte: Int
  """
  All values greater than the given value.
  """
  rating_gt: Int
  """
  All values greater than or equal the given value.
  """
  rating_gte: Int
}

input PubgProfileWhereUniqueInput {
  id: ID
}

enum PubgServer {
  KAKAO
  KR
  AS
}

enum SoccerPosition {
  FILL
  L
  C
  R
}

type SoccerProfile implements Node {
  id: ID!
  description: String
  role: SoccerRole
  position: SoccerPosition
}

"""
A connection to a list of items.
"""
type SoccerProfileConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [SoccerProfileEdge]!
  aggregate: AggregateSoccerProfile!
}

input SoccerProfileCreateInput {
  description: String
  role: SoccerRole
  position: SoccerPosition
}

input SoccerProfileCreateOneInput {
  create: SoccerProfileCreateInput
  connect: SoccerProfileWhereUniqueInput
}

"""
An edge in a connection.
"""
type SoccerProfileEdge {
  """
  The item at the end of the edge.
  """
  node: SoccerProfile!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum SoccerProfileOrderByInput {
  id_ASC
  id_DESC
  description_ASC
  description_DESC
  role_ASC
  role_DESC
  position_ASC
  position_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type SoccerProfilePreviousValues {
  id: ID!
  description: String
  role: SoccerRole
  position: SoccerPosition
}

type SoccerProfileSubscriptionPayload {
  mutation: MutationType!
  node: SoccerProfile
  updatedFields: [String!]
  previousValues: SoccerProfilePreviousValues
}

input SoccerProfileSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [SoccerProfileSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [SoccerProfileSubscriptionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [SoccerProfileSubscriptionWhereInput!]
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
  node: SoccerProfileWhereInput
}

input SoccerProfileUpdateDataInput {
  description: String
  role: SoccerRole
  position: SoccerPosition
}

input SoccerProfileUpdateInput {
  description: String
  role: SoccerRole
  position: SoccerPosition
}

input SoccerProfileUpdateOneInput {
  create: SoccerProfileCreateInput
  connect: SoccerProfileWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: SoccerProfileUpdateDataInput
  upsert: SoccerProfileUpsertNestedInput
}

input SoccerProfileUpsertNestedInput {
  update: SoccerProfileUpdateDataInput!
  create: SoccerProfileCreateInput!
}

input SoccerProfileWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [SoccerProfileWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [SoccerProfileWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [SoccerProfileWhereInput!]
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
  role: SoccerRole
  """
  All values that are not equal to given value.
  """
  role_not: SoccerRole
  """
  All values that are contained in given list.
  """
  role_in: [SoccerRole!]
  """
  All values that are not contained in given list.
  """
  role_not_in: [SoccerRole!]
  position: SoccerPosition
  """
  All values that are not equal to given value.
  """
  position_not: SoccerPosition
  """
  All values that are contained in given list.
  """
  position_in: [SoccerPosition!]
  """
  All values that are not contained in given list.
  """
  position_not_in: [SoccerPosition!]
}

input SoccerProfileWhereUniqueInput {
  id: ID
}

enum SoccerRole {
  FILL
  GK
  D
  M
  F
}

type Team implements Node {
  id: ID!
  category: Category
  name: String
  description: String
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
  category: Category
  name: String
  description: String
  logoUrl: String
  members: UserCreateManyWithoutTeamsInput
}

input TeamCreateManyWithoutMembersInput {
  create: [TeamCreateWithoutMembersInput!]
  connect: [TeamWhereUniqueInput!]
}

input TeamCreateWithoutMembersInput {
  category: Category
  name: String
  description: String
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
  category_ASC
  category_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  logoUrl_ASC
  logoUrl_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type TeamPreviousValues {
  id: ID!
  category: Category
  name: String
  description: String
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
  category: Category
  name: String
  description: String
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
  category: Category
  name: String
  description: String
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
  category: Category
  """
  All values that are not equal to given value.
  """
  category_not: Category
  """
  All values that are contained in given list.
  """
  category_in: [Category!]
  """
  All values that are not contained in given list.
  """
  category_not_in: [Category!]
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
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
  avatarUrl: String
  interests(where: InterestWhereInput, orderBy: InterestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Interest!]
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
  avatarUrl: String
  teams: TeamCreateManyWithoutMembersInput
  events: EventCreateManyWithoutOwnerInput
  interests: InterestCreateManyWithoutUserInput
}

input UserCreateManyWithoutTeamsInput {
  create: [UserCreateWithoutTeamsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutEventsInput {
  create: UserCreateWithoutEventsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutInterestsInput {
  create: UserCreateWithoutInterestsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutEventsInput {
  name: String
  avatarUrl: String
  teams: TeamCreateManyWithoutMembersInput
  interests: InterestCreateManyWithoutUserInput
}

input UserCreateWithoutInterestsInput {
  name: String
  avatarUrl: String
  teams: TeamCreateManyWithoutMembersInput
  events: EventCreateManyWithoutOwnerInput
}

input UserCreateWithoutTeamsInput {
  name: String
  avatarUrl: String
  events: EventCreateManyWithoutOwnerInput
  interests: InterestCreateManyWithoutUserInput
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
  avatarUrl_ASC
  avatarUrl_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String
  avatarUrl: String
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
  avatarUrl: String
  teams: TeamUpdateManyWithoutMembersInput
  events: EventUpdateManyWithoutOwnerInput
  interests: InterestUpdateManyWithoutUserInput
}

input UserUpdateManyWithoutTeamsInput {
  create: [UserCreateWithoutTeamsInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutTeamsInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutTeamsInput!]
}

input UserUpdateOneWithoutEventsInput {
  create: UserCreateWithoutEventsInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutEventsDataInput
  upsert: UserUpsertWithoutEventsInput
}

input UserUpdateOneWithoutInterestsInput {
  create: UserCreateWithoutInterestsInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutInterestsDataInput
  upsert: UserUpsertWithoutInterestsInput
}

input UserUpdateWithoutEventsDataInput {
  name: String
  avatarUrl: String
  teams: TeamUpdateManyWithoutMembersInput
  interests: InterestUpdateManyWithoutUserInput
}

input UserUpdateWithoutInterestsDataInput {
  name: String
  avatarUrl: String
  teams: TeamUpdateManyWithoutMembersInput
  events: EventUpdateManyWithoutOwnerInput
}

input UserUpdateWithoutTeamsDataInput {
  name: String
  avatarUrl: String
  events: EventUpdateManyWithoutOwnerInput
  interests: InterestUpdateManyWithoutUserInput
}

input UserUpdateWithWhereUniqueWithoutTeamsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutTeamsDataInput!
}

input UserUpsertWithoutEventsInput {
  update: UserUpdateWithoutEventsDataInput!
  create: UserCreateWithoutEventsInput!
}

input UserUpsertWithoutInterestsInput {
  update: UserUpdateWithoutInterestsDataInput!
  create: UserCreateWithoutInterestsInput!
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
  avatarUrl: String
  """
  All values that are not equal to given value.
  """
  avatarUrl_not: String
  """
  All values that are contained in given list.
  """
  avatarUrl_in: [String!]
  """
  All values that are not contained in given list.
  """
  avatarUrl_not_in: [String!]
  """
  All values less than the given value.
  """
  avatarUrl_lt: String
  """
  All values less than or equal the given value.
  """
  avatarUrl_lte: String
  """
  All values greater than the given value.
  """
  avatarUrl_gt: String
  """
  All values greater than or equal the given value.
  """
  avatarUrl_gte: String
  """
  All values containing the given string.
  """
  avatarUrl_contains: String
  """
  All values not containing the given string.
  """
  avatarUrl_not_contains: String
  """
  All values starting with the given string.
  """
  avatarUrl_starts_with: String
  """
  All values not starting with the given string.
  """
  avatarUrl_not_starts_with: String
  """
  All values ending with the given string.
  """
  avatarUrl_ends_with: String
  """
  All values not ending with the given string.
  """
  avatarUrl_not_ends_with: String
  teams_every: TeamWhereInput
  teams_some: TeamWhereInput
  teams_none: TeamWhereInput
  events_every: EventWhereInput
  events_some: EventWhereInput
  events_none: EventWhereInput
  interests_every: InterestWhereInput
  interests_some: InterestWhereInput
  interests_none: InterestWhereInput
}

input UserWhereUniqueInput {
  id: ID
  name: String
}

type Mutation {
  createUser(data: UserCreateInput!): User!
  createTeam(data: TeamCreateInput!): Team!
  createEvent(data: EventCreateInput!): Event!
  createInterest(data: InterestCreateInput!): Interest!
  createLolProfile(data: LolProfileCreateInput!): LolProfile!
  createPubgProfile(data: PubgProfileCreateInput!): PubgProfile!
  createOverwatchProfile(data: OverwatchProfileCreateInput!): OverwatchProfile!
  createEtcGamesProfile(data: EtcGamesProfileCreateInput!): EtcGamesProfile!
  createSoccerProfile(data: SoccerProfileCreateInput!): SoccerProfile!
  createBasketBallProfile(data: BasketBallProfileCreateInput!): BasketBallProfile!
  createEtcSportsProfile(data: EtcSportsProfileCreateInput!): EtcSportsProfile!
  createAnyProfile(data: AnyProfileCreateInput!): AnyProfile!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateTeam(data: TeamUpdateInput!, where: TeamWhereUniqueInput!): Team
  updateEvent(data: EventUpdateInput!, where: EventWhereUniqueInput!): Event
  updateInterest(data: InterestUpdateInput!, where: InterestWhereUniqueInput!): Interest
  updateLolProfile(data: LolProfileUpdateInput!, where: LolProfileWhereUniqueInput!): LolProfile
  updatePubgProfile(data: PubgProfileUpdateInput!, where: PubgProfileWhereUniqueInput!): PubgProfile
  updateOverwatchProfile(data: OverwatchProfileUpdateInput!, where: OverwatchProfileWhereUniqueInput!): OverwatchProfile
  updateEtcGamesProfile(data: EtcGamesProfileUpdateInput!, where: EtcGamesProfileWhereUniqueInput!): EtcGamesProfile
  updateSoccerProfile(data: SoccerProfileUpdateInput!, where: SoccerProfileWhereUniqueInput!): SoccerProfile
  updateBasketBallProfile(data: BasketBallProfileUpdateInput!, where: BasketBallProfileWhereUniqueInput!): BasketBallProfile
  updateEtcSportsProfile(data: EtcSportsProfileUpdateInput!, where: EtcSportsProfileWhereUniqueInput!): EtcSportsProfile
  updateAnyProfile(data: AnyProfileUpdateInput!, where: AnyProfileWhereUniqueInput!): AnyProfile
  deleteUser(where: UserWhereUniqueInput!): User
  deleteTeam(where: TeamWhereUniqueInput!): Team
  deleteEvent(where: EventWhereUniqueInput!): Event
  deleteInterest(where: InterestWhereUniqueInput!): Interest
  deleteLolProfile(where: LolProfileWhereUniqueInput!): LolProfile
  deletePubgProfile(where: PubgProfileWhereUniqueInput!): PubgProfile
  deleteOverwatchProfile(where: OverwatchProfileWhereUniqueInput!): OverwatchProfile
  deleteEtcGamesProfile(where: EtcGamesProfileWhereUniqueInput!): EtcGamesProfile
  deleteSoccerProfile(where: SoccerProfileWhereUniqueInput!): SoccerProfile
  deleteBasketBallProfile(where: BasketBallProfileWhereUniqueInput!): BasketBallProfile
  deleteEtcSportsProfile(where: EtcSportsProfileWhereUniqueInput!): EtcSportsProfile
  deleteAnyProfile(where: AnyProfileWhereUniqueInput!): AnyProfile
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertTeam(where: TeamWhereUniqueInput!, create: TeamCreateInput!, update: TeamUpdateInput!): Team!
  upsertEvent(where: EventWhereUniqueInput!, create: EventCreateInput!, update: EventUpdateInput!): Event!
  upsertInterest(where: InterestWhereUniqueInput!, create: InterestCreateInput!, update: InterestUpdateInput!): Interest!
  upsertLolProfile(where: LolProfileWhereUniqueInput!, create: LolProfileCreateInput!, update: LolProfileUpdateInput!): LolProfile!
  upsertPubgProfile(where: PubgProfileWhereUniqueInput!, create: PubgProfileCreateInput!, update: PubgProfileUpdateInput!): PubgProfile!
  upsertOverwatchProfile(where: OverwatchProfileWhereUniqueInput!, create: OverwatchProfileCreateInput!, update: OverwatchProfileUpdateInput!): OverwatchProfile!
  upsertEtcGamesProfile(where: EtcGamesProfileWhereUniqueInput!, create: EtcGamesProfileCreateInput!, update: EtcGamesProfileUpdateInput!): EtcGamesProfile!
  upsertSoccerProfile(where: SoccerProfileWhereUniqueInput!, create: SoccerProfileCreateInput!, update: SoccerProfileUpdateInput!): SoccerProfile!
  upsertBasketBallProfile(where: BasketBallProfileWhereUniqueInput!, create: BasketBallProfileCreateInput!, update: BasketBallProfileUpdateInput!): BasketBallProfile!
  upsertEtcSportsProfile(where: EtcSportsProfileWhereUniqueInput!, create: EtcSportsProfileCreateInput!, update: EtcSportsProfileUpdateInput!): EtcSportsProfile!
  upsertAnyProfile(where: AnyProfileWhereUniqueInput!, create: AnyProfileCreateInput!, update: AnyProfileUpdateInput!): AnyProfile!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyTeams(data: TeamUpdateInput!, where: TeamWhereInput): BatchPayload!
  updateManyEvents(data: EventUpdateInput!, where: EventWhereInput): BatchPayload!
  updateManyInterests(data: InterestUpdateInput!, where: InterestWhereInput): BatchPayload!
  updateManyLolProfiles(data: LolProfileUpdateInput!, where: LolProfileWhereInput): BatchPayload!
  updateManyPubgProfiles(data: PubgProfileUpdateInput!, where: PubgProfileWhereInput): BatchPayload!
  updateManyOverwatchProfiles(data: OverwatchProfileUpdateInput!, where: OverwatchProfileWhereInput): BatchPayload!
  updateManyEtcGamesProfiles(data: EtcGamesProfileUpdateInput!, where: EtcGamesProfileWhereInput): BatchPayload!
  updateManySoccerProfiles(data: SoccerProfileUpdateInput!, where: SoccerProfileWhereInput): BatchPayload!
  updateManyBasketBallProfiles(data: BasketBallProfileUpdateInput!, where: BasketBallProfileWhereInput): BatchPayload!
  updateManyEtcSportsProfiles(data: EtcSportsProfileUpdateInput!, where: EtcSportsProfileWhereInput): BatchPayload!
  updateManyAnyProfiles(data: AnyProfileUpdateInput!, where: AnyProfileWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyTeams(where: TeamWhereInput): BatchPayload!
  deleteManyEvents(where: EventWhereInput): BatchPayload!
  deleteManyInterests(where: InterestWhereInput): BatchPayload!
  deleteManyLolProfiles(where: LolProfileWhereInput): BatchPayload!
  deleteManyPubgProfiles(where: PubgProfileWhereInput): BatchPayload!
  deleteManyOverwatchProfiles(where: OverwatchProfileWhereInput): BatchPayload!
  deleteManyEtcGamesProfiles(where: EtcGamesProfileWhereInput): BatchPayload!
  deleteManySoccerProfiles(where: SoccerProfileWhereInput): BatchPayload!
  deleteManyBasketBallProfiles(where: BasketBallProfileWhereInput): BatchPayload!
  deleteManyEtcSportsProfiles(where: EtcSportsProfileWhereInput): BatchPayload!
  deleteManyAnyProfiles(where: AnyProfileWhereInput): BatchPayload!
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team]!
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event]!
  interests(where: InterestWhereInput, orderBy: InterestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Interest]!
  lolProfiles(where: LolProfileWhereInput, orderBy: LolProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LolProfile]!
  pubgProfiles(where: PubgProfileWhereInput, orderBy: PubgProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PubgProfile]!
  overwatchProfiles(where: OverwatchProfileWhereInput, orderBy: OverwatchProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OverwatchProfile]!
  etcGamesProfiles(where: EtcGamesProfileWhereInput, orderBy: EtcGamesProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [EtcGamesProfile]!
  soccerProfiles(where: SoccerProfileWhereInput, orderBy: SoccerProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SoccerProfile]!
  basketBallProfiles(where: BasketBallProfileWhereInput, orderBy: BasketBallProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BasketBallProfile]!
  etcSportsProfiles(where: EtcSportsProfileWhereInput, orderBy: EtcSportsProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [EtcSportsProfile]!
  anyProfiles(where: AnyProfileWhereInput, orderBy: AnyProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AnyProfile]!
  user(where: UserWhereUniqueInput!): User
  team(where: TeamWhereUniqueInput!): Team
  event(where: EventWhereUniqueInput!): Event
  interest(where: InterestWhereUniqueInput!): Interest
  lolProfile(where: LolProfileWhereUniqueInput!): LolProfile
  pubgProfile(where: PubgProfileWhereUniqueInput!): PubgProfile
  overwatchProfile(where: OverwatchProfileWhereUniqueInput!): OverwatchProfile
  etcGamesProfile(where: EtcGamesProfileWhereUniqueInput!): EtcGamesProfile
  soccerProfile(where: SoccerProfileWhereUniqueInput!): SoccerProfile
  basketBallProfile(where: BasketBallProfileWhereUniqueInput!): BasketBallProfile
  etcSportsProfile(where: EtcSportsProfileWhereUniqueInput!): EtcSportsProfile
  anyProfile(where: AnyProfileWhereUniqueInput!): AnyProfile
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  teamsConnection(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TeamConnection!
  eventsConnection(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventConnection!
  interestsConnection(where: InterestWhereInput, orderBy: InterestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InterestConnection!
  lolProfilesConnection(where: LolProfileWhereInput, orderBy: LolProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LolProfileConnection!
  pubgProfilesConnection(where: PubgProfileWhereInput, orderBy: PubgProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PubgProfileConnection!
  overwatchProfilesConnection(where: OverwatchProfileWhereInput, orderBy: OverwatchProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OverwatchProfileConnection!
  etcGamesProfilesConnection(where: EtcGamesProfileWhereInput, orderBy: EtcGamesProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EtcGamesProfileConnection!
  soccerProfilesConnection(where: SoccerProfileWhereInput, orderBy: SoccerProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SoccerProfileConnection!
  basketBallProfilesConnection(where: BasketBallProfileWhereInput, orderBy: BasketBallProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BasketBallProfileConnection!
  etcSportsProfilesConnection(where: EtcSportsProfileWhereInput, orderBy: EtcSportsProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EtcSportsProfileConnection!
  anyProfilesConnection(where: AnyProfileWhereInput, orderBy: AnyProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AnyProfileConnection!
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
  interest(where: InterestSubscriptionWhereInput): InterestSubscriptionPayload
  lolProfile(where: LolProfileSubscriptionWhereInput): LolProfileSubscriptionPayload
  pubgProfile(where: PubgProfileSubscriptionWhereInput): PubgProfileSubscriptionPayload
  overwatchProfile(where: OverwatchProfileSubscriptionWhereInput): OverwatchProfileSubscriptionPayload
  etcGamesProfile(where: EtcGamesProfileSubscriptionWhereInput): EtcGamesProfileSubscriptionPayload
  soccerProfile(where: SoccerProfileSubscriptionWhereInput): SoccerProfileSubscriptionPayload
  basketBallProfile(where: BasketBallProfileSubscriptionWhereInput): BasketBallProfileSubscriptionPayload
  etcSportsProfile(where: EtcSportsProfileSubscriptionWhereInput): EtcSportsProfileSubscriptionPayload
  anyProfile(where: AnyProfileSubscriptionWhereInput): AnyProfileSubscriptionPayload
}
`

export type PubgServer = 
  'KAKAO' |
  'KR' |
  'AS'

export type UserOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'avatarUrl_ASC' |
  'avatarUrl_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PubgProfileOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'server_ASC' |
  'server_DESC' |
  'rating_ASC' |
  'rating_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type AnyProfileOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'topic_ASC' |
  'topic_DESC' |
  'description_ASC' |
  'description_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type LolProfileOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'tier_ASC' |
  'tier_DESC' |
  'role_ASC' |
  'role_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type EtcSportsProfileOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'sportsName_ASC' |
  'sportsName_DESC' |
  'stats_ASC' |
  'stats_DESC' |
  'description_ASC' |
  'description_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type OverwatchTier = 
  'BRONZE' |
  'SILVER' |
  'GOLD' |
  'PLATINUM' |
  'DIAMOND'

export type BasketBallProfileOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'description_ASC' |
  'description_DESC' |
  'role_ASC' |
  'role_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type OverwatchRole = 
  'FILL' |
  'TANK' |
  'DPS' |
  'HEAL'

export type EtcGamesProfileOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'gameName_ASC' |
  'gameName_DESC' |
  'name_ASC' |
  'name_DESC' |
  'stats_ASC' |
  'stats_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type InterestOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'category_ASC' |
  'category_DESC' |
  'description_ASC' |
  'description_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type LolRole = 
  'FILL' |
  'TOP' |
  'JUNGLE' |
  'MID' |
  'ADC' |
  'SUPPORT'

export type EventOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'iconUrl_ASC' |
  'iconUrl_DESC' |
  'category_ASC' |
  'category_DESC' |
  'type_ASC' |
  'type_DESC' |
  'startTime_ASC' |
  'startTime_DESC' |
  'place_ASC' |
  'place_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType = 
  'CREATED' |
  'UPDATED' |
  'DELETED'

export type BasketBallRole = 
  'FILL' |
  'GUARD' |
  'FORWARD' |
  'CENTER'

export type TeamOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'category_ASC' |
  'category_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'logoUrl_ASC' |
  'logoUrl_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type SoccerPosition = 
  'FILL' |
  'L' |
  'C' |
  'R'

export type SoccerRole = 
  'FILL' |
  'GK' |
  'D' |
  'M' |
  'F'

export type Category = 
  'LOL' |
  'PUBG' |
  'OVERWATCH' |
  'ETC_GAMES' |
  'SOCCER' |
  'BASKET_BALL' |
  'ETC_SPORTS' |
  'ANY'

export type OverwatchProfileOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'rating_ASC' |
  'rating_DESC' |
  'tier_ASC' |
  'tier_DESC' |
  'role_ASC' |
  'role_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type LolTier = 
  'BRONZE' |
  'SILVER' |
  'GOLD' |
  'PLATINUM' |
  'DIAMOND'

export type SoccerProfileOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'description_ASC' |
  'description_DESC' |
  'role_ASC' |
  'role_DESC' |
  'position_ASC' |
  'position_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type EventType = 
  'TOURNAMENT' |
  'LEAGUE' |
  'ETC'

export interface EtcGamesProfileCreateInput {
  gameName: String
  name?: String
  stats?: String
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
  avatarUrl?: String
  avatarUrl_not?: String
  avatarUrl_in?: String[] | String
  avatarUrl_not_in?: String[] | String
  avatarUrl_lt?: String
  avatarUrl_lte?: String
  avatarUrl_gt?: String
  avatarUrl_gte?: String
  avatarUrl_contains?: String
  avatarUrl_not_contains?: String
  avatarUrl_starts_with?: String
  avatarUrl_not_starts_with?: String
  avatarUrl_ends_with?: String
  avatarUrl_not_ends_with?: String
  teams_every?: TeamWhereInput
  teams_some?: TeamWhereInput
  teams_none?: TeamWhereInput
  events_every?: EventWhereInput
  events_some?: EventWhereInput
  events_none?: EventWhereInput
  interests_every?: InterestWhereInput
  interests_some?: InterestWhereInput
  interests_none?: InterestWhereInput
}

export interface EventCreateInput {
  name?: String
  iconUrl?: String
  category?: Category
  type?: EventType
  startTime?: DateTime
  place?: String
  owner?: UserCreateOneWithoutEventsInput
}

export interface AnyProfileWhereInput {
  AND?: AnyProfileWhereInput[] | AnyProfileWhereInput
  OR?: AnyProfileWhereInput[] | AnyProfileWhereInput
  NOT?: AnyProfileWhereInput[] | AnyProfileWhereInput
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
}

export interface EtcSportsProfileUpdateOneInput {
  create?: EtcSportsProfileCreateInput
  connect?: EtcSportsProfileWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: EtcSportsProfileUpdateDataInput
  upsert?: EtcSportsProfileUpsertNestedInput
}

export interface PubgProfileUpsertNestedInput {
  update: PubgProfileUpdateDataInput
  create: PubgProfileCreateInput
}

export interface BasketBallProfileUpsertNestedInput {
  update: BasketBallProfileUpdateDataInput
  create: BasketBallProfileCreateInput
}

export interface UserCreateOneWithoutEventsInput {
  create?: UserCreateWithoutEventsInput
  connect?: UserWhereUniqueInput
}

export interface BasketBallProfileUpdateDataInput {
  description?: String
  role?: BasketBallRole
}

export interface AnyProfileSubscriptionWhereInput {
  AND?: AnyProfileSubscriptionWhereInput[] | AnyProfileSubscriptionWhereInput
  OR?: AnyProfileSubscriptionWhereInput[] | AnyProfileSubscriptionWhereInput
  NOT?: AnyProfileSubscriptionWhereInput[] | AnyProfileSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: AnyProfileWhereInput
}

export interface BasketBallProfileUpdateOneInput {
  create?: BasketBallProfileCreateInput
  connect?: BasketBallProfileWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: BasketBallProfileUpdateDataInput
  upsert?: BasketBallProfileUpsertNestedInput
}

export interface EtcSportsProfileSubscriptionWhereInput {
  AND?: EtcSportsProfileSubscriptionWhereInput[] | EtcSportsProfileSubscriptionWhereInput
  OR?: EtcSportsProfileSubscriptionWhereInput[] | EtcSportsProfileSubscriptionWhereInput
  NOT?: EtcSportsProfileSubscriptionWhereInput[] | EtcSportsProfileSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: EtcSportsProfileWhereInput
}

export interface SoccerProfileUpsertNestedInput {
  update: SoccerProfileUpdateDataInput
  create: SoccerProfileCreateInput
}

export interface BasketBallProfileSubscriptionWhereInput {
  AND?: BasketBallProfileSubscriptionWhereInput[] | BasketBallProfileSubscriptionWhereInput
  OR?: BasketBallProfileSubscriptionWhereInput[] | BasketBallProfileSubscriptionWhereInput
  NOT?: BasketBallProfileSubscriptionWhereInput[] | BasketBallProfileSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BasketBallProfileWhereInput
}

export interface SoccerProfileUpdateDataInput {
  description?: String
  role?: SoccerRole
  position?: SoccerPosition
}

export interface EtcGamesProfileSubscriptionWhereInput {
  AND?: EtcGamesProfileSubscriptionWhereInput[] | EtcGamesProfileSubscriptionWhereInput
  OR?: EtcGamesProfileSubscriptionWhereInput[] | EtcGamesProfileSubscriptionWhereInput
  NOT?: EtcGamesProfileSubscriptionWhereInput[] | EtcGamesProfileSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: EtcGamesProfileWhereInput
}

export interface SoccerProfileUpdateOneInput {
  create?: SoccerProfileCreateInput
  connect?: SoccerProfileWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: SoccerProfileUpdateDataInput
  upsert?: SoccerProfileUpsertNestedInput
}

export interface PubgProfileSubscriptionWhereInput {
  AND?: PubgProfileSubscriptionWhereInput[] | PubgProfileSubscriptionWhereInput
  OR?: PubgProfileSubscriptionWhereInput[] | PubgProfileSubscriptionWhereInput
  NOT?: PubgProfileSubscriptionWhereInput[] | PubgProfileSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PubgProfileWhereInput
}

export interface EtcGamesProfileUpsertNestedInput {
  update: EtcGamesProfileUpdateDataInput
  create: EtcGamesProfileCreateInput
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

export interface EtcGamesProfileUpdateDataInput {
  gameName?: String
  name?: String
  stats?: String
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

export interface EtcGamesProfileUpdateOneInput {
  create?: EtcGamesProfileCreateInput
  connect?: EtcGamesProfileWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: EtcGamesProfileUpdateDataInput
  upsert?: EtcGamesProfileUpsertNestedInput
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

export interface OverwatchProfileUpsertNestedInput {
  update: OverwatchProfileUpdateDataInput
  create: OverwatchProfileCreateInput
}

export interface LolProfileWhereInput {
  AND?: LolProfileWhereInput[] | LolProfileWhereInput
  OR?: LolProfileWhereInput[] | LolProfileWhereInput
  NOT?: LolProfileWhereInput[] | LolProfileWhereInput
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
  tier?: LolTier
  tier_not?: LolTier
  tier_in?: LolTier[] | LolTier
  tier_not_in?: LolTier[] | LolTier
  role?: LolRole
  role_not?: LolRole
  role_in?: LolRole[] | LolRole
  role_not_in?: LolRole[] | LolRole
}

export interface OverwatchProfileUpdateDataInput {
  name?: String
  rating?: Int
  tier?: OverwatchTier
  role?: OverwatchRole
}

export interface AnyProfileUpdateInput {
  topic?: String
  description?: String
}

export interface UserCreateInput {
  name?: String
  avatarUrl?: String
  teams?: TeamCreateManyWithoutMembersInput
  events?: EventCreateManyWithoutOwnerInput
  interests?: InterestCreateManyWithoutUserInput
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
  category?: Category
  category_not?: Category
  category_in?: Category[] | Category
  category_not_in?: Category[] | Category
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

export interface TeamCreateManyWithoutMembersInput {
  create?: TeamCreateWithoutMembersInput[] | TeamCreateWithoutMembersInput
  connect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
}

export interface TeamWhereUniqueInput {
  id?: ID_Input
}

export interface TeamCreateWithoutMembersInput {
  category?: Category
  name?: String
  description?: String
  logoUrl?: String
}

export interface InterestWhereUniqueInput {
  id?: ID_Input
}

export interface EventCreateManyWithoutOwnerInput {
  create?: EventCreateWithoutOwnerInput[] | EventCreateWithoutOwnerInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
}

export interface PubgProfileWhereUniqueInput {
  id?: ID_Input
}

export interface EventCreateWithoutOwnerInput {
  name?: String
  iconUrl?: String
  category?: Category
  type?: EventType
  startTime?: DateTime
  place?: String
}

export interface EtcGamesProfileWhereUniqueInput {
  id?: ID_Input
}

export interface InterestCreateManyWithoutUserInput {
  create?: InterestCreateWithoutUserInput[] | InterestCreateWithoutUserInput
  connect?: InterestWhereUniqueInput[] | InterestWhereUniqueInput
}

export interface BasketBallProfileWhereUniqueInput {
  id?: ID_Input
}

export interface InterestCreateWithoutUserInput {
  category?: Category
  description?: String
  lol?: LolProfileCreateOneInput
  pubg?: PubgProfileCreateOneInput
  overwatch?: OverwatchProfileCreateOneInput
  etcGames?: EtcGamesProfileCreateOneInput
  soccer?: SoccerProfileCreateOneInput
  basketBall?: BasketBallProfileCreateOneInput
  etcSports?: EtcSportsProfileCreateOneInput
  any?: AnyProfileCreateOneInput
}

export interface AnyProfileWhereUniqueInput {
  id?: ID_Input
}

export interface LolProfileCreateOneInput {
  create?: LolProfileCreateInput
  connect?: LolProfileWhereUniqueInput
}

export interface BasketBallProfileUpdateInput {
  description?: String
  role?: BasketBallRole
}

export interface LolProfileCreateInput {
  name: String
  tier: LolTier
  role: LolRole
}

export interface EtcGamesProfileUpdateInput {
  gameName?: String
  name?: String
  stats?: String
}

export interface PubgProfileCreateOneInput {
  create?: PubgProfileCreateInput
  connect?: PubgProfileWhereUniqueInput
}

export interface PubgProfileUpdateInput {
  name?: String
  server?: PubgServer
  rating?: Int
}

export interface PubgProfileCreateInput {
  name: String
  server: PubgServer
  rating?: Int
}

export interface UserUpsertWithoutInterestsInput {
  update: UserUpdateWithoutInterestsDataInput
  create: UserCreateWithoutInterestsInput
}

export interface OverwatchProfileCreateOneInput {
  create?: OverwatchProfileCreateInput
  connect?: OverwatchProfileWhereUniqueInput
}

export interface UserUpdateOneWithoutInterestsInput {
  create?: UserCreateWithoutInterestsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutInterestsDataInput
  upsert?: UserUpsertWithoutInterestsInput
}

export interface OverwatchProfileCreateInput {
  name: String
  rating?: Int
  tier: OverwatchTier
  role: OverwatchRole
}

export interface UserUpsertWithoutEventsInput {
  update: UserUpdateWithoutEventsDataInput
  create: UserCreateWithoutEventsInput
}

export interface EtcGamesProfileCreateOneInput {
  create?: EtcGamesProfileCreateInput
  connect?: EtcGamesProfileWhereUniqueInput
}

export interface UserUpdateOneWithoutEventsInput {
  create?: UserCreateWithoutEventsInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutEventsDataInput
  upsert?: UserUpsertWithoutEventsInput
}

export interface OverwatchProfileUpdateOneInput {
  create?: OverwatchProfileCreateInput
  connect?: OverwatchProfileWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: OverwatchProfileUpdateDataInput
  upsert?: OverwatchProfileUpsertNestedInput
}

export interface UserUpsertWithWhereUniqueWithoutTeamsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutTeamsDataInput
  create: UserCreateWithoutTeamsInput
}

export interface SoccerProfileCreateOneInput {
  create?: SoccerProfileCreateInput
  connect?: SoccerProfileWhereUniqueInput
}

export interface UserUpdateWithWhereUniqueWithoutTeamsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutTeamsDataInput
}

export interface SoccerProfileCreateInput {
  description?: String
  role?: SoccerRole
  position?: SoccerPosition
}

export interface TeamUpdateInput {
  category?: Category
  name?: String
  description?: String
  logoUrl?: String
  members?: UserUpdateManyWithoutTeamsInput
}

export interface BasketBallProfileCreateOneInput {
  create?: BasketBallProfileCreateInput
  connect?: BasketBallProfileWhereUniqueInput
}

export interface AnyProfileUpsertNestedInput {
  update: AnyProfileUpdateDataInput
  create: AnyProfileCreateInput
}

export interface BasketBallProfileCreateInput {
  description?: String
  role: BasketBallRole
}

export interface AnyProfileUpdateOneInput {
  create?: AnyProfileCreateInput
  connect?: AnyProfileWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: AnyProfileUpdateDataInput
  upsert?: AnyProfileUpsertNestedInput
}

export interface EtcSportsProfileCreateOneInput {
  create?: EtcSportsProfileCreateInput
  connect?: EtcSportsProfileWhereUniqueInput
}

export interface EtcSportsProfileUpdateDataInput {
  sportsName?: String
  stats?: String
  description?: String
}

export interface EtcSportsProfileCreateInput {
  sportsName: String
  stats?: String
  description?: String
}

export interface SoccerProfileWhereInput {
  AND?: SoccerProfileWhereInput[] | SoccerProfileWhereInput
  OR?: SoccerProfileWhereInput[] | SoccerProfileWhereInput
  NOT?: SoccerProfileWhereInput[] | SoccerProfileWhereInput
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
  role?: SoccerRole
  role_not?: SoccerRole
  role_in?: SoccerRole[] | SoccerRole
  role_not_in?: SoccerRole[] | SoccerRole
  position?: SoccerPosition
  position_not?: SoccerPosition
  position_in?: SoccerPosition[] | SoccerPosition
  position_not_in?: SoccerPosition[] | SoccerPosition
}

export interface AnyProfileCreateOneInput {
  create?: AnyProfileCreateInput
  connect?: AnyProfileWhereUniqueInput
}

export interface SoccerProfileSubscriptionWhereInput {
  AND?: SoccerProfileSubscriptionWhereInput[] | SoccerProfileSubscriptionWhereInput
  OR?: SoccerProfileSubscriptionWhereInput[] | SoccerProfileSubscriptionWhereInput
  NOT?: SoccerProfileSubscriptionWhereInput[] | SoccerProfileSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: SoccerProfileWhereInput
}

export interface AnyProfileCreateInput {
  topic: String
  description?: String
}

export interface LolProfileSubscriptionWhereInput {
  AND?: LolProfileSubscriptionWhereInput[] | LolProfileSubscriptionWhereInput
  OR?: LolProfileSubscriptionWhereInput[] | LolProfileSubscriptionWhereInput
  NOT?: LolProfileSubscriptionWhereInput[] | LolProfileSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: LolProfileWhereInput
}

export interface TeamCreateInput {
  category?: Category
  name?: String
  description?: String
  logoUrl?: String
  members?: UserCreateManyWithoutTeamsInput
}

export interface OverwatchProfileWhereInput {
  AND?: OverwatchProfileWhereInput[] | OverwatchProfileWhereInput
  OR?: OverwatchProfileWhereInput[] | OverwatchProfileWhereInput
  NOT?: OverwatchProfileWhereInput[] | OverwatchProfileWhereInput
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
  rating?: Int
  rating_not?: Int
  rating_in?: Int[] | Int
  rating_not_in?: Int[] | Int
  rating_lt?: Int
  rating_lte?: Int
  rating_gt?: Int
  rating_gte?: Int
  tier?: OverwatchTier
  tier_not?: OverwatchTier
  tier_in?: OverwatchTier[] | OverwatchTier
  tier_not_in?: OverwatchTier[] | OverwatchTier
  role?: OverwatchRole
  role_not?: OverwatchRole
  role_in?: OverwatchRole[] | OverwatchRole
  role_not_in?: OverwatchRole[] | OverwatchRole
}

export interface UserCreateManyWithoutTeamsInput {
  create?: UserCreateWithoutTeamsInput[] | UserCreateWithoutTeamsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
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
  category?: Category
  category_not?: Category
  category_in?: Category[] | Category
  category_not_in?: Category[] | Category
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
  user?: UserWhereInput
  lol?: LolProfileWhereInput
  pubg?: PubgProfileWhereInput
  overwatch?: OverwatchProfileWhereInput
  etcGames?: EtcGamesProfileWhereInput
  soccer?: SoccerProfileWhereInput
  basketBall?: BasketBallProfileWhereInput
  etcSports?: EtcSportsProfileWhereInput
  any?: AnyProfileWhereInput
}

export interface UserCreateWithoutTeamsInput {
  name?: String
  avatarUrl?: String
  events?: EventCreateManyWithoutOwnerInput
  interests?: InterestCreateManyWithoutUserInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface EtcSportsProfileWhereInput {
  AND?: EtcSportsProfileWhereInput[] | EtcSportsProfileWhereInput
  OR?: EtcSportsProfileWhereInput[] | EtcSportsProfileWhereInput
  NOT?: EtcSportsProfileWhereInput[] | EtcSportsProfileWhereInput
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
  sportsName?: String
  sportsName_not?: String
  sportsName_in?: String[] | String
  sportsName_not_in?: String[] | String
  sportsName_lt?: String
  sportsName_lte?: String
  sportsName_gt?: String
  sportsName_gte?: String
  sportsName_contains?: String
  sportsName_not_contains?: String
  sportsName_starts_with?: String
  sportsName_not_starts_with?: String
  sportsName_ends_with?: String
  sportsName_not_ends_with?: String
  stats?: String
  stats_not?: String
  stats_in?: String[] | String
  stats_not_in?: String[] | String
  stats_lt?: String
  stats_lte?: String
  stats_gt?: String
  stats_gte?: String
  stats_contains?: String
  stats_not_contains?: String
  stats_starts_with?: String
  stats_not_starts_with?: String
  stats_ends_with?: String
  stats_not_ends_with?: String
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
}

export interface LolProfileWhereUniqueInput {
  id?: ID_Input
}

export interface SoccerProfileWhereUniqueInput {
  id?: ID_Input
}

export interface EtcSportsProfileUpdateInput {
  sportsName?: String
  stats?: String
  description?: String
}

export interface UserCreateWithoutEventsInput {
  name?: String
  avatarUrl?: String
  teams?: TeamCreateManyWithoutMembersInput
  interests?: InterestCreateManyWithoutUserInput
}

export interface OverwatchProfileUpdateInput {
  name?: String
  rating?: Int
  tier?: OverwatchTier
  role?: OverwatchRole
}

export interface InterestCreateInput {
  category?: Category
  description?: String
  user: UserCreateOneWithoutInterestsInput
  lol?: LolProfileCreateOneInput
  pubg?: PubgProfileCreateOneInput
  overwatch?: OverwatchProfileCreateOneInput
  etcGames?: EtcGamesProfileCreateOneInput
  soccer?: SoccerProfileCreateOneInput
  basketBall?: BasketBallProfileCreateOneInput
  etcSports?: EtcSportsProfileCreateOneInput
  any?: AnyProfileCreateOneInput
}

export interface UserUpdateWithoutInterestsDataInput {
  name?: String
  avatarUrl?: String
  teams?: TeamUpdateManyWithoutMembersInput
  events?: EventUpdateManyWithoutOwnerInput
}

export interface UserCreateOneWithoutInterestsInput {
  create?: UserCreateWithoutInterestsInput
  connect?: UserWhereUniqueInput
}

export interface UserUpdateWithoutEventsDataInput {
  name?: String
  avatarUrl?: String
  teams?: TeamUpdateManyWithoutMembersInput
  interests?: InterestUpdateManyWithoutUserInput
}

export interface UserCreateWithoutInterestsInput {
  name?: String
  avatarUrl?: String
  teams?: TeamCreateManyWithoutMembersInput
  events?: EventCreateManyWithoutOwnerInput
}

export interface UserUpdateWithoutTeamsDataInput {
  name?: String
  avatarUrl?: String
  events?: EventUpdateManyWithoutOwnerInput
  interests?: InterestUpdateManyWithoutUserInput
}

export interface UserUpdateInput {
  name?: String
  avatarUrl?: String
  teams?: TeamUpdateManyWithoutMembersInput
  events?: EventUpdateManyWithoutOwnerInput
  interests?: InterestUpdateManyWithoutUserInput
}

export interface InterestUpsertWithWhereUniqueWithoutUserInput {
  where: InterestWhereUniqueInput
  update: InterestUpdateWithoutUserDataInput
  create: InterestCreateWithoutUserInput
}

export interface TeamUpdateManyWithoutMembersInput {
  create?: TeamCreateWithoutMembersInput[] | TeamCreateWithoutMembersInput
  connect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
  disconnect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
  delete?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
  update?: TeamUpdateWithWhereUniqueWithoutMembersInput[] | TeamUpdateWithWhereUniqueWithoutMembersInput
  upsert?: TeamUpsertWithWhereUniqueWithoutMembersInput[] | TeamUpsertWithWhereUniqueWithoutMembersInput
}

export interface EtcSportsProfileUpsertNestedInput {
  update: EtcSportsProfileUpdateDataInput
  create: EtcSportsProfileCreateInput
}

export interface TeamUpdateWithWhereUniqueWithoutMembersInput {
  where: TeamWhereUniqueInput
  data: TeamUpdateWithoutMembersDataInput
}

export interface EtcGamesProfileWhereInput {
  AND?: EtcGamesProfileWhereInput[] | EtcGamesProfileWhereInput
  OR?: EtcGamesProfileWhereInput[] | EtcGamesProfileWhereInput
  NOT?: EtcGamesProfileWhereInput[] | EtcGamesProfileWhereInput
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
  gameName?: String
  gameName_not?: String
  gameName_in?: String[] | String
  gameName_not_in?: String[] | String
  gameName_lt?: String
  gameName_lte?: String
  gameName_gt?: String
  gameName_gte?: String
  gameName_contains?: String
  gameName_not_contains?: String
  gameName_starts_with?: String
  gameName_not_starts_with?: String
  gameName_ends_with?: String
  gameName_not_ends_with?: String
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
  stats?: String
  stats_not?: String
  stats_in?: String[] | String
  stats_not_in?: String[] | String
  stats_lt?: String
  stats_lte?: String
  stats_gt?: String
  stats_gte?: String
  stats_contains?: String
  stats_not_contains?: String
  stats_starts_with?: String
  stats_not_starts_with?: String
  stats_ends_with?: String
  stats_not_ends_with?: String
}

export interface TeamUpdateWithoutMembersDataInput {
  category?: Category
  name?: String
  description?: String
  logoUrl?: String
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

export interface TeamUpsertWithWhereUniqueWithoutMembersInput {
  where: TeamWhereUniqueInput
  update: TeamUpdateWithoutMembersDataInput
  create: TeamCreateWithoutMembersInput
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
  category?: Category
  category_not?: Category
  category_in?: Category[] | Category
  category_not_in?: Category[] | Category
  type?: EventType
  type_not?: EventType
  type_in?: EventType[] | EventType
  type_not_in?: EventType[] | EventType
  startTime?: DateTime
  startTime_not?: DateTime
  startTime_in?: DateTime[] | DateTime
  startTime_not_in?: DateTime[] | DateTime
  startTime_lt?: DateTime
  startTime_lte?: DateTime
  startTime_gt?: DateTime
  startTime_gte?: DateTime
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
  owner?: UserWhereInput
}

export interface EventUpdateManyWithoutOwnerInput {
  create?: EventCreateWithoutOwnerInput[] | EventCreateWithoutOwnerInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  disconnect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  delete?: EventWhereUniqueInput[] | EventWhereUniqueInput
  update?: EventUpdateWithWhereUniqueWithoutOwnerInput[] | EventUpdateWithWhereUniqueWithoutOwnerInput
  upsert?: EventUpsertWithWhereUniqueWithoutOwnerInput[] | EventUpsertWithWhereUniqueWithoutOwnerInput
}

export interface OverwatchProfileWhereUniqueInput {
  id?: ID_Input
}

export interface EventUpdateWithWhereUniqueWithoutOwnerInput {
  where: EventWhereUniqueInput
  data: EventUpdateWithoutOwnerDataInput
}

export interface SoccerProfileUpdateInput {
  description?: String
  role?: SoccerRole
  position?: SoccerPosition
}

export interface EventUpdateWithoutOwnerDataInput {
  name?: String
  iconUrl?: String
  category?: Category
  type?: EventType
  startTime?: DateTime
  place?: String
}

export interface InterestUpdateInput {
  category?: Category
  description?: String
  user?: UserUpdateOneWithoutInterestsInput
  lol?: LolProfileUpdateOneInput
  pubg?: PubgProfileUpdateOneInput
  overwatch?: OverwatchProfileUpdateOneInput
  etcGames?: EtcGamesProfileUpdateOneInput
  soccer?: SoccerProfileUpdateOneInput
  basketBall?: BasketBallProfileUpdateOneInput
  etcSports?: EtcSportsProfileUpdateOneInput
  any?: AnyProfileUpdateOneInput
}

export interface EventUpsertWithWhereUniqueWithoutOwnerInput {
  where: EventWhereUniqueInput
  update: EventUpdateWithoutOwnerDataInput
  create: EventCreateWithoutOwnerInput
}

export interface UserUpdateManyWithoutTeamsInput {
  create?: UserCreateWithoutTeamsInput[] | UserCreateWithoutTeamsInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutTeamsInput[] | UserUpdateWithWhereUniqueWithoutTeamsInput
  upsert?: UserUpsertWithWhereUniqueWithoutTeamsInput[] | UserUpsertWithWhereUniqueWithoutTeamsInput
}

export interface InterestUpdateManyWithoutUserInput {
  create?: InterestCreateWithoutUserInput[] | InterestCreateWithoutUserInput
  connect?: InterestWhereUniqueInput[] | InterestWhereUniqueInput
  disconnect?: InterestWhereUniqueInput[] | InterestWhereUniqueInput
  delete?: InterestWhereUniqueInput[] | InterestWhereUniqueInput
  update?: InterestUpdateWithWhereUniqueWithoutUserInput[] | InterestUpdateWithWhereUniqueWithoutUserInput
  upsert?: InterestUpsertWithWhereUniqueWithoutUserInput[] | InterestUpsertWithWhereUniqueWithoutUserInput
}

export interface BasketBallProfileWhereInput {
  AND?: BasketBallProfileWhereInput[] | BasketBallProfileWhereInput
  OR?: BasketBallProfileWhereInput[] | BasketBallProfileWhereInput
  NOT?: BasketBallProfileWhereInput[] | BasketBallProfileWhereInput
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
  role?: BasketBallRole
  role_not?: BasketBallRole
  role_in?: BasketBallRole[] | BasketBallRole
  role_not_in?: BasketBallRole[] | BasketBallRole
}

export interface InterestUpdateWithWhereUniqueWithoutUserInput {
  where: InterestWhereUniqueInput
  data: InterestUpdateWithoutUserDataInput
}

export interface PubgProfileWhereInput {
  AND?: PubgProfileWhereInput[] | PubgProfileWhereInput
  OR?: PubgProfileWhereInput[] | PubgProfileWhereInput
  NOT?: PubgProfileWhereInput[] | PubgProfileWhereInput
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
  server?: PubgServer
  server_not?: PubgServer
  server_in?: PubgServer[] | PubgServer
  server_not_in?: PubgServer[] | PubgServer
  rating?: Int
  rating_not?: Int
  rating_in?: Int[] | Int
  rating_not_in?: Int[] | Int
  rating_lt?: Int
  rating_lte?: Int
  rating_gt?: Int
  rating_gte?: Int
}

export interface InterestUpdateWithoutUserDataInput {
  category?: Category
  description?: String
  lol?: LolProfileUpdateOneInput
  pubg?: PubgProfileUpdateOneInput
  overwatch?: OverwatchProfileUpdateOneInput
  etcGames?: EtcGamesProfileUpdateOneInput
  soccer?: SoccerProfileUpdateOneInput
  basketBall?: BasketBallProfileUpdateOneInput
  etcSports?: EtcSportsProfileUpdateOneInput
  any?: AnyProfileUpdateOneInput
}

export interface EtcSportsProfileWhereUniqueInput {
  id?: ID_Input
}

export interface LolProfileUpdateOneInput {
  create?: LolProfileCreateInput
  connect?: LolProfileWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: LolProfileUpdateDataInput
  upsert?: LolProfileUpsertNestedInput
}

export interface EventUpdateInput {
  name?: String
  iconUrl?: String
  category?: Category
  type?: EventType
  startTime?: DateTime
  place?: String
  owner?: UserUpdateOneWithoutEventsInput
}

export interface PubgProfileUpdateDataInput {
  name?: String
  server?: PubgServer
  rating?: Int
}

export interface PubgProfileUpdateOneInput {
  create?: PubgProfileCreateInput
  connect?: PubgProfileWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: PubgProfileUpdateDataInput
  upsert?: PubgProfileUpsertNestedInput
}

export interface LolProfileUpsertNestedInput {
  update: LolProfileUpdateDataInput
  create: LolProfileCreateInput
}

export interface LolProfileUpdateDataInput {
  name?: String
  tier?: LolTier
  role?: LolRole
}

export interface AnyProfileUpdateDataInput {
  topic?: String
  description?: String
}

export interface LolProfileUpdateInput {
  name?: String
  tier?: LolTier
  role?: LolRole
}

export interface EventWhereUniqueInput {
  id?: ID_Input
}

export interface OverwatchProfileSubscriptionWhereInput {
  AND?: OverwatchProfileSubscriptionWhereInput[] | OverwatchProfileSubscriptionWhereInput
  OR?: OverwatchProfileSubscriptionWhereInput[] | OverwatchProfileSubscriptionWhereInput
  NOT?: OverwatchProfileSubscriptionWhereInput[] | OverwatchProfileSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: OverwatchProfileWhereInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AnyProfilePreviousValues {
  id: ID_Output
  topic: String
  description?: String
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

export interface Event extends Node {
  id: ID_Output
  name?: String
  iconUrl?: String
  category?: Category
  type?: EventType
  startTime?: DateTime
  place?: String
  owner?: User
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface User extends Node {
  id: ID_Output
  name?: String
  teams?: Team[]
  events?: Event[]
  avatarUrl?: String
  interests?: Interest[]
}

export interface AggregateAnyProfile {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface AnyProfileConnection {
  pageInfo: PageInfo
  edges: AnyProfileEdge[]
  aggregate: AggregateAnyProfile
}

export interface BatchPayload {
  count: Long
}

/*
 * An edge in a connection.

 */
export interface EtcSportsProfileEdge {
  node: EtcSportsProfile
  cursor: String
}

export interface Team extends Node {
  id: ID_Output
  category?: Category
  name?: String
  description?: String
  members?: User[]
  logoUrl?: String
}

export interface AggregateBasketBallProfile {
  count: Int
}

export interface EtcSportsProfilePreviousValues {
  id: ID_Output
  sportsName: String
  stats?: String
  description?: String
}

/*
 * A connection to a list of items.

 */
export interface BasketBallProfileConnection {
  pageInfo: PageInfo
  edges: BasketBallProfileEdge[]
  aggregate: AggregateBasketBallProfile
}

export interface EtcSportsProfileSubscriptionPayload {
  mutation: MutationType
  node?: EtcSportsProfile
  updatedFields?: String[]
  previousValues?: EtcSportsProfilePreviousValues
}

/*
 * An edge in a connection.

 */
export interface SoccerProfileEdge {
  node: SoccerProfile
  cursor: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface AggregateEtcGamesProfile {
  count: Int
}

export interface UserPreviousValues {
  id: ID_Output
  name?: String
  avatarUrl?: String
}

/*
 * A connection to a list of items.

 */
export interface EtcGamesProfileConnection {
  pageInfo: PageInfo
  edges: EtcGamesProfileEdge[]
  aggregate: AggregateEtcGamesProfile
}

export interface AnyProfile extends Node {
  id: ID_Output
  topic: String
  description?: String
}

/*
 * An edge in a connection.

 */
export interface OverwatchProfileEdge {
  node: OverwatchProfile
  cursor: String
}

export interface TeamSubscriptionPayload {
  mutation: MutationType
  node?: Team
  updatedFields?: String[]
  previousValues?: TeamPreviousValues
}

export interface AggregatePubgProfile {
  count: Int
}

export interface TeamPreviousValues {
  id: ID_Output
  category?: Category
  name?: String
  description?: String
  logoUrl?: String
}

/*
 * A connection to a list of items.

 */
export interface PubgProfileConnection {
  pageInfo: PageInfo
  edges: PubgProfileEdge[]
  aggregate: AggregatePubgProfile
}

export interface EtcSportsProfile extends Node {
  id: ID_Output
  sportsName: String
  stats?: String
  description?: String
}

/*
 * An edge in a connection.

 */
export interface LolProfileEdge {
  node: LolProfile
  cursor: String
}

export interface EventSubscriptionPayload {
  mutation: MutationType
  node?: Event
  updatedFields?: String[]
  previousValues?: EventPreviousValues
}

export interface AggregateInterest {
  count: Int
}

export interface EventPreviousValues {
  id: ID_Output
  name?: String
  iconUrl?: String
  category?: Category
  type?: EventType
  startTime?: DateTime
  place?: String
}

/*
 * A connection to a list of items.

 */
export interface InterestConnection {
  pageInfo: PageInfo
  edges: InterestEdge[]
  aggregate: AggregateInterest
}

export interface BasketBallProfile extends Node {
  id: ID_Output
  description?: String
  role: BasketBallRole
}

/*
 * An edge in a connection.

 */
export interface EventEdge {
  node: Event
  cursor: String
}

export interface InterestSubscriptionPayload {
  mutation: MutationType
  node?: Interest
  updatedFields?: String[]
  previousValues?: InterestPreviousValues
}

export interface AggregateTeam {
  count: Int
}

export interface InterestPreviousValues {
  id: ID_Output
  category?: Category
  description?: String
}

/*
 * A connection to a list of items.

 */
export interface TeamConnection {
  pageInfo: PageInfo
  edges: TeamEdge[]
  aggregate: AggregateTeam
}

export interface SoccerProfile extends Node {
  id: ID_Output
  description?: String
  role?: SoccerRole
  position?: SoccerPosition
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface LolProfileSubscriptionPayload {
  mutation: MutationType
  node?: LolProfile
  updatedFields?: String[]
  previousValues?: LolProfilePreviousValues
}

/*
 * An edge in a connection.

 */
export interface AnyProfileEdge {
  node: AnyProfile
  cursor: String
}

export interface LolProfilePreviousValues {
  id: ID_Output
  name: String
  tier: LolTier
  role: LolRole
}

/*
 * A connection to a list of items.

 */
export interface EtcSportsProfileConnection {
  pageInfo: PageInfo
  edges: EtcSportsProfileEdge[]
  aggregate: AggregateEtcSportsProfile
}

export interface EtcGamesProfile extends Node {
  id: ID_Output
  gameName: String
  name?: String
  stats?: String
}

export interface AggregateSoccerProfile {
  count: Int
}

export interface PubgProfileSubscriptionPayload {
  mutation: MutationType
  node?: PubgProfile
  updatedFields?: String[]
  previousValues?: PubgProfilePreviousValues
}

/*
 * An edge in a connection.

 */
export interface EtcGamesProfileEdge {
  node: EtcGamesProfile
  cursor: String
}

export interface PubgProfilePreviousValues {
  id: ID_Output
  name: String
  server: PubgServer
  rating?: Int
}

/*
 * A connection to a list of items.

 */
export interface OverwatchProfileConnection {
  pageInfo: PageInfo
  edges: OverwatchProfileEdge[]
  aggregate: AggregateOverwatchProfile
}

export interface OverwatchProfile extends Node {
  id: ID_Output
  name: String
  rating?: Int
  tier: OverwatchTier
  role: OverwatchRole
}

export interface AggregateLolProfile {
  count: Int
}

export interface OverwatchProfileSubscriptionPayload {
  mutation: MutationType
  node?: OverwatchProfile
  updatedFields?: String[]
  previousValues?: OverwatchProfilePreviousValues
}

/*
 * An edge in a connection.

 */
export interface InterestEdge {
  node: Interest
  cursor: String
}

export interface OverwatchProfilePreviousValues {
  id: ID_Output
  name: String
  rating?: Int
  tier: OverwatchTier
  role: OverwatchRole
}

/*
 * A connection to a list of items.

 */
export interface EventConnection {
  pageInfo: PageInfo
  edges: EventEdge[]
  aggregate: AggregateEvent
}

export interface PubgProfile extends Node {
  id: ID_Output
  name: String
  server: PubgServer
  rating?: Int
}

export interface AggregateUser {
  count: Int
}

export interface EtcGamesProfileSubscriptionPayload {
  mutation: MutationType
  node?: EtcGamesProfile
  updatedFields?: String[]
  previousValues?: EtcGamesProfilePreviousValues
}

export interface AggregateEtcSportsProfile {
  count: Int
}

export interface EtcGamesProfilePreviousValues {
  id: ID_Output
  gameName: String
  name?: String
  stats?: String
}

/*
 * A connection to a list of items.

 */
export interface SoccerProfileConnection {
  pageInfo: PageInfo
  edges: SoccerProfileEdge[]
  aggregate: AggregateSoccerProfile
}

export interface LolProfile extends Node {
  id: ID_Output
  name: String
  tier: LolTier
  role: LolRole
}

/*
 * An edge in a connection.

 */
export interface PubgProfileEdge {
  node: PubgProfile
  cursor: String
}

export interface SoccerProfileSubscriptionPayload {
  mutation: MutationType
  node?: SoccerProfile
  updatedFields?: String[]
  previousValues?: SoccerProfilePreviousValues
}

export interface AggregateEvent {
  count: Int
}

export interface AnyProfileSubscriptionPayload {
  mutation: MutationType
  node?: AnyProfile
  updatedFields?: String[]
  previousValues?: AnyProfilePreviousValues
}

export interface BasketBallProfilePreviousValues {
  id: ID_Output
  description?: String
  role: BasketBallRole
}

export interface BasketBallProfileSubscriptionPayload {
  mutation: MutationType
  node?: BasketBallProfile
  updatedFields?: String[]
  previousValues?: BasketBallProfilePreviousValues
}

export interface Interest extends Node {
  id: ID_Output
  user: User
  category?: Category
  description?: String
  lol?: LolProfile
  pubg?: PubgProfile
  overwatch?: OverwatchProfile
  etcGames?: EtcGamesProfile
  soccer?: SoccerProfile
  basketBall?: BasketBallProfile
  etcSports?: EtcSportsProfile
  any?: AnyProfile
}

export interface SoccerProfilePreviousValues {
  id: ID_Output
  description?: String
  role?: SoccerRole
  position?: SoccerPosition
}

/*
 * An edge in a connection.

 */
export interface BasketBallProfileEdge {
  node: BasketBallProfile
  cursor: String
}

/*
 * An edge in a connection.

 */
export interface TeamEdge {
  node: Team
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface LolProfileConnection {
  pageInfo: PageInfo
  edges: LolProfileEdge[]
  aggregate: AggregateLolProfile
}

export interface AggregateOverwatchProfile {
  count: Int
}

export type DateTime = string

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
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

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
  interests: (args: { where?: InterestWhereInput, orderBy?: InterestOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Interest[]>
  lolProfiles: (args: { where?: LolProfileWhereInput, orderBy?: LolProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<LolProfile[]>
  pubgProfiles: (args: { where?: PubgProfileWhereInput, orderBy?: PubgProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<PubgProfile[]>
  overwatchProfiles: (args: { where?: OverwatchProfileWhereInput, orderBy?: OverwatchProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<OverwatchProfile[]>
  etcGamesProfiles: (args: { where?: EtcGamesProfileWhereInput, orderBy?: EtcGamesProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<EtcGamesProfile[]>
  soccerProfiles: (args: { where?: SoccerProfileWhereInput, orderBy?: SoccerProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<SoccerProfile[]>
  basketBallProfiles: (args: { where?: BasketBallProfileWhereInput, orderBy?: BasketBallProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<BasketBallProfile[]>
  etcSportsProfiles: (args: { where?: EtcSportsProfileWhereInput, orderBy?: EtcSportsProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<EtcSportsProfile[]>
  anyProfiles: (args: { where?: AnyProfileWhereInput, orderBy?: AnyProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<AnyProfile[]>
  user: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  team: (args: { where: TeamWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Team | null>
  event: (args: { where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Event | null>
  interest: (args: { where: InterestWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Interest | null>
  lolProfile: (args: { where: LolProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<LolProfile | null>
  pubgProfile: (args: { where: PubgProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<PubgProfile | null>
  overwatchProfile: (args: { where: OverwatchProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<OverwatchProfile | null>
  etcGamesProfile: (args: { where: EtcGamesProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<EtcGamesProfile | null>
  soccerProfile: (args: { where: SoccerProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<SoccerProfile | null>
  basketBallProfile: (args: { where: BasketBallProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<BasketBallProfile | null>
  etcSportsProfile: (args: { where: EtcSportsProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<EtcSportsProfile | null>
  anyProfile: (args: { where: AnyProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<AnyProfile | null>
  usersConnection: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<UserConnection>
  teamsConnection: (args: { where?: TeamWhereInput, orderBy?: TeamOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<TeamConnection>
  eventsConnection: (args: { where?: EventWhereInput, orderBy?: EventOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<EventConnection>
  interestsConnection: (args: { where?: InterestWhereInput, orderBy?: InterestOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<InterestConnection>
  lolProfilesConnection: (args: { where?: LolProfileWhereInput, orderBy?: LolProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<LolProfileConnection>
  pubgProfilesConnection: (args: { where?: PubgProfileWhereInput, orderBy?: PubgProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<PubgProfileConnection>
  overwatchProfilesConnection: (args: { where?: OverwatchProfileWhereInput, orderBy?: OverwatchProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<OverwatchProfileConnection>
  etcGamesProfilesConnection: (args: { where?: EtcGamesProfileWhereInput, orderBy?: EtcGamesProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<EtcGamesProfileConnection>
  soccerProfilesConnection: (args: { where?: SoccerProfileWhereInput, orderBy?: SoccerProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<SoccerProfileConnection>
  basketBallProfilesConnection: (args: { where?: BasketBallProfileWhereInput, orderBy?: BasketBallProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<BasketBallProfileConnection>
  etcSportsProfilesConnection: (args: { where?: EtcSportsProfileWhereInput, orderBy?: EtcSportsProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<EtcSportsProfileConnection>
  anyProfilesConnection: (args: { where?: AnyProfileWhereInput, orderBy?: AnyProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<AnyProfileConnection>
  node: (args: { id: ID_Output }, info?: GraphQLResolveInfo | string) => Promise<Node | null>
}

export type Mutation = {
  createUser: (args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  createTeam: (args: { data: TeamCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Team>
  createEvent: (args: { data: EventCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Event>
  createInterest: (args: { data: InterestCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Interest>
  createLolProfile: (args: { data: LolProfileCreateInput }, info?: GraphQLResolveInfo | string) => Promise<LolProfile>
  createPubgProfile: (args: { data: PubgProfileCreateInput }, info?: GraphQLResolveInfo | string) => Promise<PubgProfile>
  createOverwatchProfile: (args: { data: OverwatchProfileCreateInput }, info?: GraphQLResolveInfo | string) => Promise<OverwatchProfile>
  createEtcGamesProfile: (args: { data: EtcGamesProfileCreateInput }, info?: GraphQLResolveInfo | string) => Promise<EtcGamesProfile>
  createSoccerProfile: (args: { data: SoccerProfileCreateInput }, info?: GraphQLResolveInfo | string) => Promise<SoccerProfile>
  createBasketBallProfile: (args: { data: BasketBallProfileCreateInput }, info?: GraphQLResolveInfo | string) => Promise<BasketBallProfile>
  createEtcSportsProfile: (args: { data: EtcSportsProfileCreateInput }, info?: GraphQLResolveInfo | string) => Promise<EtcSportsProfile>
  createAnyProfile: (args: { data: AnyProfileCreateInput }, info?: GraphQLResolveInfo | string) => Promise<AnyProfile>
  updateUser: (args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  updateTeam: (args: { data: TeamUpdateInput, where: TeamWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Team | null>
  updateEvent: (args: { data: EventUpdateInput, where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Event | null>
  updateInterest: (args: { data: InterestUpdateInput, where: InterestWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Interest | null>
  updateLolProfile: (args: { data: LolProfileUpdateInput, where: LolProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<LolProfile | null>
  updatePubgProfile: (args: { data: PubgProfileUpdateInput, where: PubgProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<PubgProfile | null>
  updateOverwatchProfile: (args: { data: OverwatchProfileUpdateInput, where: OverwatchProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<OverwatchProfile | null>
  updateEtcGamesProfile: (args: { data: EtcGamesProfileUpdateInput, where: EtcGamesProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<EtcGamesProfile | null>
  updateSoccerProfile: (args: { data: SoccerProfileUpdateInput, where: SoccerProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<SoccerProfile | null>
  updateBasketBallProfile: (args: { data: BasketBallProfileUpdateInput, where: BasketBallProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<BasketBallProfile | null>
  updateEtcSportsProfile: (args: { data: EtcSportsProfileUpdateInput, where: EtcSportsProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<EtcSportsProfile | null>
  updateAnyProfile: (args: { data: AnyProfileUpdateInput, where: AnyProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<AnyProfile | null>
  deleteUser: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  deleteTeam: (args: { where: TeamWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Team | null>
  deleteEvent: (args: { where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Event | null>
  deleteInterest: (args: { where: InterestWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Interest | null>
  deleteLolProfile: (args: { where: LolProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<LolProfile | null>
  deletePubgProfile: (args: { where: PubgProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<PubgProfile | null>
  deleteOverwatchProfile: (args: { where: OverwatchProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<OverwatchProfile | null>
  deleteEtcGamesProfile: (args: { where: EtcGamesProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<EtcGamesProfile | null>
  deleteSoccerProfile: (args: { where: SoccerProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<SoccerProfile | null>
  deleteBasketBallProfile: (args: { where: BasketBallProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<BasketBallProfile | null>
  deleteEtcSportsProfile: (args: { where: EtcSportsProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<EtcSportsProfile | null>
  deleteAnyProfile: (args: { where: AnyProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<AnyProfile | null>
  upsertUser: (args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  upsertTeam: (args: { where: TeamWhereUniqueInput, create: TeamCreateInput, update: TeamUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Team>
  upsertEvent: (args: { where: EventWhereUniqueInput, create: EventCreateInput, update: EventUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Event>
  upsertInterest: (args: { where: InterestWhereUniqueInput, create: InterestCreateInput, update: InterestUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Interest>
  upsertLolProfile: (args: { where: LolProfileWhereUniqueInput, create: LolProfileCreateInput, update: LolProfileUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<LolProfile>
  upsertPubgProfile: (args: { where: PubgProfileWhereUniqueInput, create: PubgProfileCreateInput, update: PubgProfileUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<PubgProfile>
  upsertOverwatchProfile: (args: { where: OverwatchProfileWhereUniqueInput, create: OverwatchProfileCreateInput, update: OverwatchProfileUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<OverwatchProfile>
  upsertEtcGamesProfile: (args: { where: EtcGamesProfileWhereUniqueInput, create: EtcGamesProfileCreateInput, update: EtcGamesProfileUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<EtcGamesProfile>
  upsertSoccerProfile: (args: { where: SoccerProfileWhereUniqueInput, create: SoccerProfileCreateInput, update: SoccerProfileUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<SoccerProfile>
  upsertBasketBallProfile: (args: { where: BasketBallProfileWhereUniqueInput, create: BasketBallProfileCreateInput, update: BasketBallProfileUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<BasketBallProfile>
  upsertEtcSportsProfile: (args: { where: EtcSportsProfileWhereUniqueInput, create: EtcSportsProfileCreateInput, update: EtcSportsProfileUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<EtcSportsProfile>
  upsertAnyProfile: (args: { where: AnyProfileWhereUniqueInput, create: AnyProfileCreateInput, update: AnyProfileUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<AnyProfile>
  updateManyUsers: (args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyTeams: (args: { data: TeamUpdateInput, where?: TeamWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyEvents: (args: { data: EventUpdateInput, where?: EventWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyInterests: (args: { data: InterestUpdateInput, where?: InterestWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyLolProfiles: (args: { data: LolProfileUpdateInput, where?: LolProfileWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyPubgProfiles: (args: { data: PubgProfileUpdateInput, where?: PubgProfileWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyOverwatchProfiles: (args: { data: OverwatchProfileUpdateInput, where?: OverwatchProfileWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyEtcGamesProfiles: (args: { data: EtcGamesProfileUpdateInput, where?: EtcGamesProfileWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManySoccerProfiles: (args: { data: SoccerProfileUpdateInput, where?: SoccerProfileWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyBasketBallProfiles: (args: { data: BasketBallProfileUpdateInput, where?: BasketBallProfileWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyEtcSportsProfiles: (args: { data: EtcSportsProfileUpdateInput, where?: EtcSportsProfileWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyAnyProfiles: (args: { data: AnyProfileUpdateInput, where?: AnyProfileWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyUsers: (args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyTeams: (args: { where?: TeamWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyEvents: (args: { where?: EventWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyInterests: (args: { where?: InterestWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyLolProfiles: (args: { where?: LolProfileWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyPubgProfiles: (args: { where?: PubgProfileWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyOverwatchProfiles: (args: { where?: OverwatchProfileWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyEtcGamesProfiles: (args: { where?: EtcGamesProfileWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManySoccerProfiles: (args: { where?: SoccerProfileWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyBasketBallProfiles: (args: { where?: BasketBallProfileWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyEtcSportsProfiles: (args: { where?: EtcSportsProfileWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyAnyProfiles: (args: { where?: AnyProfileWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
}

export type Subscription = {
  user: (args: { where?: UserSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<UserSubscriptionPayload>>
  team: (args: { where?: TeamSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<TeamSubscriptionPayload>>
  event: (args: { where?: EventSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<EventSubscriptionPayload>>
  interest: (args: { where?: InterestSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<InterestSubscriptionPayload>>
  lolProfile: (args: { where?: LolProfileSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<LolProfileSubscriptionPayload>>
  pubgProfile: (args: { where?: PubgProfileSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<PubgProfileSubscriptionPayload>>
  overwatchProfile: (args: { where?: OverwatchProfileSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<OverwatchProfileSubscriptionPayload>>
  etcGamesProfile: (args: { where?: EtcGamesProfileSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<EtcGamesProfileSubscriptionPayload>>
  soccerProfile: (args: { where?: SoccerProfileSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<SoccerProfileSubscriptionPayload>>
  basketBallProfile: (args: { where?: BasketBallProfileSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<BasketBallProfileSubscriptionPayload>>
  etcSportsProfile: (args: { where?: EtcSportsProfileSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<EtcSportsProfileSubscriptionPayload>>
  anyProfile: (args: { where?: AnyProfileSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<AnyProfileSubscriptionPayload>>
}

export class Prisma extends BasePrisma {
  
  constructor({ endpoint, secret, fragmentReplacements, debug }: BasePrismaOptions) {
    super({ typeDefs, endpoint, secret, fragmentReplacements, debug });
  }

  exists = {
    User: (where: UserWhereInput): Promise<boolean> => super.existsDelegate('query', 'users', { where }, {}, '{ id }'),
    Team: (where: TeamWhereInput): Promise<boolean> => super.existsDelegate('query', 'teams', { where }, {}, '{ id }'),
    Event: (where: EventWhereInput): Promise<boolean> => super.existsDelegate('query', 'events', { where }, {}, '{ id }'),
    Interest: (where: InterestWhereInput): Promise<boolean> => super.existsDelegate('query', 'interests', { where }, {}, '{ id }'),
    LolProfile: (where: LolProfileWhereInput): Promise<boolean> => super.existsDelegate('query', 'lolProfiles', { where }, {}, '{ id }'),
    PubgProfile: (where: PubgProfileWhereInput): Promise<boolean> => super.existsDelegate('query', 'pubgProfiles', { where }, {}, '{ id }'),
    OverwatchProfile: (where: OverwatchProfileWhereInput): Promise<boolean> => super.existsDelegate('query', 'overwatchProfiles', { where }, {}, '{ id }'),
    EtcGamesProfile: (where: EtcGamesProfileWhereInput): Promise<boolean> => super.existsDelegate('query', 'etcGamesProfiles', { where }, {}, '{ id }'),
    SoccerProfile: (where: SoccerProfileWhereInput): Promise<boolean> => super.existsDelegate('query', 'soccerProfiles', { where }, {}, '{ id }'),
    BasketBallProfile: (where: BasketBallProfileWhereInput): Promise<boolean> => super.existsDelegate('query', 'basketBallProfiles', { where }, {}, '{ id }'),
    EtcSportsProfile: (where: EtcSportsProfileWhereInput): Promise<boolean> => super.existsDelegate('query', 'etcSportsProfiles', { where }, {}, '{ id }'),
    AnyProfile: (where: AnyProfileWhereInput): Promise<boolean> => super.existsDelegate('query', 'anyProfiles', { where }, {}, '{ id }')
  }

  query: Query = {
    users: (args, info): Promise<User[]> => super.delegate('query', 'users', args, {}, info),
    teams: (args, info): Promise<Team[]> => super.delegate('query', 'teams', args, {}, info),
    events: (args, info): Promise<Event[]> => super.delegate('query', 'events', args, {}, info),
    interests: (args, info): Promise<Interest[]> => super.delegate('query', 'interests', args, {}, info),
    lolProfiles: (args, info): Promise<LolProfile[]> => super.delegate('query', 'lolProfiles', args, {}, info),
    pubgProfiles: (args, info): Promise<PubgProfile[]> => super.delegate('query', 'pubgProfiles', args, {}, info),
    overwatchProfiles: (args, info): Promise<OverwatchProfile[]> => super.delegate('query', 'overwatchProfiles', args, {}, info),
    etcGamesProfiles: (args, info): Promise<EtcGamesProfile[]> => super.delegate('query', 'etcGamesProfiles', args, {}, info),
    soccerProfiles: (args, info): Promise<SoccerProfile[]> => super.delegate('query', 'soccerProfiles', args, {}, info),
    basketBallProfiles: (args, info): Promise<BasketBallProfile[]> => super.delegate('query', 'basketBallProfiles', args, {}, info),
    etcSportsProfiles: (args, info): Promise<EtcSportsProfile[]> => super.delegate('query', 'etcSportsProfiles', args, {}, info),
    anyProfiles: (args, info): Promise<AnyProfile[]> => super.delegate('query', 'anyProfiles', args, {}, info),
    user: (args, info): Promise<User | null> => super.delegate('query', 'user', args, {}, info),
    team: (args, info): Promise<Team | null> => super.delegate('query', 'team', args, {}, info),
    event: (args, info): Promise<Event | null> => super.delegate('query', 'event', args, {}, info),
    interest: (args, info): Promise<Interest | null> => super.delegate('query', 'interest', args, {}, info),
    lolProfile: (args, info): Promise<LolProfile | null> => super.delegate('query', 'lolProfile', args, {}, info),
    pubgProfile: (args, info): Promise<PubgProfile | null> => super.delegate('query', 'pubgProfile', args, {}, info),
    overwatchProfile: (args, info): Promise<OverwatchProfile | null> => super.delegate('query', 'overwatchProfile', args, {}, info),
    etcGamesProfile: (args, info): Promise<EtcGamesProfile | null> => super.delegate('query', 'etcGamesProfile', args, {}, info),
    soccerProfile: (args, info): Promise<SoccerProfile | null> => super.delegate('query', 'soccerProfile', args, {}, info),
    basketBallProfile: (args, info): Promise<BasketBallProfile | null> => super.delegate('query', 'basketBallProfile', args, {}, info),
    etcSportsProfile: (args, info): Promise<EtcSportsProfile | null> => super.delegate('query', 'etcSportsProfile', args, {}, info),
    anyProfile: (args, info): Promise<AnyProfile | null> => super.delegate('query', 'anyProfile', args, {}, info),
    usersConnection: (args, info): Promise<UserConnection> => super.delegate('query', 'usersConnection', args, {}, info),
    teamsConnection: (args, info): Promise<TeamConnection> => super.delegate('query', 'teamsConnection', args, {}, info),
    eventsConnection: (args, info): Promise<EventConnection> => super.delegate('query', 'eventsConnection', args, {}, info),
    interestsConnection: (args, info): Promise<InterestConnection> => super.delegate('query', 'interestsConnection', args, {}, info),
    lolProfilesConnection: (args, info): Promise<LolProfileConnection> => super.delegate('query', 'lolProfilesConnection', args, {}, info),
    pubgProfilesConnection: (args, info): Promise<PubgProfileConnection> => super.delegate('query', 'pubgProfilesConnection', args, {}, info),
    overwatchProfilesConnection: (args, info): Promise<OverwatchProfileConnection> => super.delegate('query', 'overwatchProfilesConnection', args, {}, info),
    etcGamesProfilesConnection: (args, info): Promise<EtcGamesProfileConnection> => super.delegate('query', 'etcGamesProfilesConnection', args, {}, info),
    soccerProfilesConnection: (args, info): Promise<SoccerProfileConnection> => super.delegate('query', 'soccerProfilesConnection', args, {}, info),
    basketBallProfilesConnection: (args, info): Promise<BasketBallProfileConnection> => super.delegate('query', 'basketBallProfilesConnection', args, {}, info),
    etcSportsProfilesConnection: (args, info): Promise<EtcSportsProfileConnection> => super.delegate('query', 'etcSportsProfilesConnection', args, {}, info),
    anyProfilesConnection: (args, info): Promise<AnyProfileConnection> => super.delegate('query', 'anyProfilesConnection', args, {}, info),
    node: (args, info): Promise<Node | null> => super.delegate('query', 'node', args, {}, info)
  }

  mutation: Mutation = {
    createUser: (args, info): Promise<User> => super.delegate('mutation', 'createUser', args, {}, info),
    createTeam: (args, info): Promise<Team> => super.delegate('mutation', 'createTeam', args, {}, info),
    createEvent: (args, info): Promise<Event> => super.delegate('mutation', 'createEvent', args, {}, info),
    createInterest: (args, info): Promise<Interest> => super.delegate('mutation', 'createInterest', args, {}, info),
    createLolProfile: (args, info): Promise<LolProfile> => super.delegate('mutation', 'createLolProfile', args, {}, info),
    createPubgProfile: (args, info): Promise<PubgProfile> => super.delegate('mutation', 'createPubgProfile', args, {}, info),
    createOverwatchProfile: (args, info): Promise<OverwatchProfile> => super.delegate('mutation', 'createOverwatchProfile', args, {}, info),
    createEtcGamesProfile: (args, info): Promise<EtcGamesProfile> => super.delegate('mutation', 'createEtcGamesProfile', args, {}, info),
    createSoccerProfile: (args, info): Promise<SoccerProfile> => super.delegate('mutation', 'createSoccerProfile', args, {}, info),
    createBasketBallProfile: (args, info): Promise<BasketBallProfile> => super.delegate('mutation', 'createBasketBallProfile', args, {}, info),
    createEtcSportsProfile: (args, info): Promise<EtcSportsProfile> => super.delegate('mutation', 'createEtcSportsProfile', args, {}, info),
    createAnyProfile: (args, info): Promise<AnyProfile> => super.delegate('mutation', 'createAnyProfile', args, {}, info),
    updateUser: (args, info): Promise<User | null> => super.delegate('mutation', 'updateUser', args, {}, info),
    updateTeam: (args, info): Promise<Team | null> => super.delegate('mutation', 'updateTeam', args, {}, info),
    updateEvent: (args, info): Promise<Event | null> => super.delegate('mutation', 'updateEvent', args, {}, info),
    updateInterest: (args, info): Promise<Interest | null> => super.delegate('mutation', 'updateInterest', args, {}, info),
    updateLolProfile: (args, info): Promise<LolProfile | null> => super.delegate('mutation', 'updateLolProfile', args, {}, info),
    updatePubgProfile: (args, info): Promise<PubgProfile | null> => super.delegate('mutation', 'updatePubgProfile', args, {}, info),
    updateOverwatchProfile: (args, info): Promise<OverwatchProfile | null> => super.delegate('mutation', 'updateOverwatchProfile', args, {}, info),
    updateEtcGamesProfile: (args, info): Promise<EtcGamesProfile | null> => super.delegate('mutation', 'updateEtcGamesProfile', args, {}, info),
    updateSoccerProfile: (args, info): Promise<SoccerProfile | null> => super.delegate('mutation', 'updateSoccerProfile', args, {}, info),
    updateBasketBallProfile: (args, info): Promise<BasketBallProfile | null> => super.delegate('mutation', 'updateBasketBallProfile', args, {}, info),
    updateEtcSportsProfile: (args, info): Promise<EtcSportsProfile | null> => super.delegate('mutation', 'updateEtcSportsProfile', args, {}, info),
    updateAnyProfile: (args, info): Promise<AnyProfile | null> => super.delegate('mutation', 'updateAnyProfile', args, {}, info),
    deleteUser: (args, info): Promise<User | null> => super.delegate('mutation', 'deleteUser', args, {}, info),
    deleteTeam: (args, info): Promise<Team | null> => super.delegate('mutation', 'deleteTeam', args, {}, info),
    deleteEvent: (args, info): Promise<Event | null> => super.delegate('mutation', 'deleteEvent', args, {}, info),
    deleteInterest: (args, info): Promise<Interest | null> => super.delegate('mutation', 'deleteInterest', args, {}, info),
    deleteLolProfile: (args, info): Promise<LolProfile | null> => super.delegate('mutation', 'deleteLolProfile', args, {}, info),
    deletePubgProfile: (args, info): Promise<PubgProfile | null> => super.delegate('mutation', 'deletePubgProfile', args, {}, info),
    deleteOverwatchProfile: (args, info): Promise<OverwatchProfile | null> => super.delegate('mutation', 'deleteOverwatchProfile', args, {}, info),
    deleteEtcGamesProfile: (args, info): Promise<EtcGamesProfile | null> => super.delegate('mutation', 'deleteEtcGamesProfile', args, {}, info),
    deleteSoccerProfile: (args, info): Promise<SoccerProfile | null> => super.delegate('mutation', 'deleteSoccerProfile', args, {}, info),
    deleteBasketBallProfile: (args, info): Promise<BasketBallProfile | null> => super.delegate('mutation', 'deleteBasketBallProfile', args, {}, info),
    deleteEtcSportsProfile: (args, info): Promise<EtcSportsProfile | null> => super.delegate('mutation', 'deleteEtcSportsProfile', args, {}, info),
    deleteAnyProfile: (args, info): Promise<AnyProfile | null> => super.delegate('mutation', 'deleteAnyProfile', args, {}, info),
    upsertUser: (args, info): Promise<User> => super.delegate('mutation', 'upsertUser', args, {}, info),
    upsertTeam: (args, info): Promise<Team> => super.delegate('mutation', 'upsertTeam', args, {}, info),
    upsertEvent: (args, info): Promise<Event> => super.delegate('mutation', 'upsertEvent', args, {}, info),
    upsertInterest: (args, info): Promise<Interest> => super.delegate('mutation', 'upsertInterest', args, {}, info),
    upsertLolProfile: (args, info): Promise<LolProfile> => super.delegate('mutation', 'upsertLolProfile', args, {}, info),
    upsertPubgProfile: (args, info): Promise<PubgProfile> => super.delegate('mutation', 'upsertPubgProfile', args, {}, info),
    upsertOverwatchProfile: (args, info): Promise<OverwatchProfile> => super.delegate('mutation', 'upsertOverwatchProfile', args, {}, info),
    upsertEtcGamesProfile: (args, info): Promise<EtcGamesProfile> => super.delegate('mutation', 'upsertEtcGamesProfile', args, {}, info),
    upsertSoccerProfile: (args, info): Promise<SoccerProfile> => super.delegate('mutation', 'upsertSoccerProfile', args, {}, info),
    upsertBasketBallProfile: (args, info): Promise<BasketBallProfile> => super.delegate('mutation', 'upsertBasketBallProfile', args, {}, info),
    upsertEtcSportsProfile: (args, info): Promise<EtcSportsProfile> => super.delegate('mutation', 'upsertEtcSportsProfile', args, {}, info),
    upsertAnyProfile: (args, info): Promise<AnyProfile> => super.delegate('mutation', 'upsertAnyProfile', args, {}, info),
    updateManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyUsers', args, {}, info),
    updateManyTeams: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyTeams', args, {}, info),
    updateManyEvents: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyEvents', args, {}, info),
    updateManyInterests: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyInterests', args, {}, info),
    updateManyLolProfiles: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyLolProfiles', args, {}, info),
    updateManyPubgProfiles: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyPubgProfiles', args, {}, info),
    updateManyOverwatchProfiles: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyOverwatchProfiles', args, {}, info),
    updateManyEtcGamesProfiles: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyEtcGamesProfiles', args, {}, info),
    updateManySoccerProfiles: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManySoccerProfiles', args, {}, info),
    updateManyBasketBallProfiles: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyBasketBallProfiles', args, {}, info),
    updateManyEtcSportsProfiles: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyEtcSportsProfiles', args, {}, info),
    updateManyAnyProfiles: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyAnyProfiles', args, {}, info),
    deleteManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyUsers', args, {}, info),
    deleteManyTeams: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyTeams', args, {}, info),
    deleteManyEvents: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyEvents', args, {}, info),
    deleteManyInterests: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyInterests', args, {}, info),
    deleteManyLolProfiles: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyLolProfiles', args, {}, info),
    deleteManyPubgProfiles: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyPubgProfiles', args, {}, info),
    deleteManyOverwatchProfiles: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyOverwatchProfiles', args, {}, info),
    deleteManyEtcGamesProfiles: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyEtcGamesProfiles', args, {}, info),
    deleteManySoccerProfiles: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManySoccerProfiles', args, {}, info),
    deleteManyBasketBallProfiles: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyBasketBallProfiles', args, {}, info),
    deleteManyEtcSportsProfiles: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyEtcSportsProfiles', args, {}, info),
    deleteManyAnyProfiles: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyAnyProfiles', args, {}, info)
  }

  subscription: Subscription = {
    user: (args, infoOrQuery): Promise<AsyncIterator<UserSubscriptionPayload>> => super.delegateSubscription('user', args, {}, infoOrQuery),
    team: (args, infoOrQuery): Promise<AsyncIterator<TeamSubscriptionPayload>> => super.delegateSubscription('team', args, {}, infoOrQuery),
    event: (args, infoOrQuery): Promise<AsyncIterator<EventSubscriptionPayload>> => super.delegateSubscription('event', args, {}, infoOrQuery),
    interest: (args, infoOrQuery): Promise<AsyncIterator<InterestSubscriptionPayload>> => super.delegateSubscription('interest', args, {}, infoOrQuery),
    lolProfile: (args, infoOrQuery): Promise<AsyncIterator<LolProfileSubscriptionPayload>> => super.delegateSubscription('lolProfile', args, {}, infoOrQuery),
    pubgProfile: (args, infoOrQuery): Promise<AsyncIterator<PubgProfileSubscriptionPayload>> => super.delegateSubscription('pubgProfile', args, {}, infoOrQuery),
    overwatchProfile: (args, infoOrQuery): Promise<AsyncIterator<OverwatchProfileSubscriptionPayload>> => super.delegateSubscription('overwatchProfile', args, {}, infoOrQuery),
    etcGamesProfile: (args, infoOrQuery): Promise<AsyncIterator<EtcGamesProfileSubscriptionPayload>> => super.delegateSubscription('etcGamesProfile', args, {}, infoOrQuery),
    soccerProfile: (args, infoOrQuery): Promise<AsyncIterator<SoccerProfileSubscriptionPayload>> => super.delegateSubscription('soccerProfile', args, {}, infoOrQuery),
    basketBallProfile: (args, infoOrQuery): Promise<AsyncIterator<BasketBallProfileSubscriptionPayload>> => super.delegateSubscription('basketBallProfile', args, {}, infoOrQuery),
    etcSportsProfile: (args, infoOrQuery): Promise<AsyncIterator<EtcSportsProfileSubscriptionPayload>> => super.delegateSubscription('etcSportsProfile', args, {}, infoOrQuery),
    anyProfile: (args, infoOrQuery): Promise<AsyncIterator<AnyProfileSubscriptionPayload>> => super.delegateSubscription('anyProfile', args, {}, infoOrQuery)
  }
}