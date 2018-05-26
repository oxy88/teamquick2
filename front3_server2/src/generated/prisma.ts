import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    teams: <T = Team[]>(args: { where?: TeamWhereInput, orderBy?: TeamOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    events: <T = Event[]>(args: { where?: EventWhereInput, orderBy?: EventOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    scrimmages: <T = Scrimmage[]>(args: { where?: ScrimmageWhereInput, orderBy?: ScrimmageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    places: <T = Place[]>(args: { where?: PlaceWhereInput, orderBy?: PlaceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    interests: <T = Interest[]>(args: { where?: InterestWhereInput, orderBy?: InterestOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    lolProfiles: <T = LolProfile[]>(args: { where?: LolProfileWhereInput, orderBy?: LolProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pubgProfiles: <T = PubgProfile[]>(args: { where?: PubgProfileWhereInput, orderBy?: PubgProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    overwatchProfiles: <T = OverwatchProfile[]>(args: { where?: OverwatchProfileWhereInput, orderBy?: OverwatchProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    etcGamesProfiles: <T = EtcGamesProfile[]>(args: { where?: EtcGamesProfileWhereInput, orderBy?: EtcGamesProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    soccerProfiles: <T = SoccerProfile[]>(args: { where?: SoccerProfileWhereInput, orderBy?: SoccerProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    basketBallProfiles: <T = BasketBallProfile[]>(args: { where?: BasketBallProfileWhereInput, orderBy?: BasketBallProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    etcSportsProfiles: <T = EtcSportsProfile[]>(args: { where?: EtcSportsProfileWhereInput, orderBy?: EtcSportsProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    anyProfiles: <T = AnyProfile[]>(args: { where?: AnyProfileWhereInput, orderBy?: AnyProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    team: <T = Team | null>(args: { where: TeamWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    event: <T = Event | null>(args: { where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    scrimmage: <T = Scrimmage | null>(args: { where: ScrimmageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    place: <T = Place | null>(args: { where: PlaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    interest: <T = Interest | null>(args: { where: InterestWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    lolProfile: <T = LolProfile | null>(args: { where: LolProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pubgProfile: <T = PubgProfile | null>(args: { where: PubgProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    overwatchProfile: <T = OverwatchProfile | null>(args: { where: OverwatchProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    etcGamesProfile: <T = EtcGamesProfile | null>(args: { where: EtcGamesProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    soccerProfile: <T = SoccerProfile | null>(args: { where: SoccerProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    basketBallProfile: <T = BasketBallProfile | null>(args: { where: BasketBallProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    etcSportsProfile: <T = EtcSportsProfile | null>(args: { where: EtcSportsProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    anyProfile: <T = AnyProfile | null>(args: { where: AnyProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    teamsConnection: <T = TeamConnection>(args: { where?: TeamWhereInput, orderBy?: TeamOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    eventsConnection: <T = EventConnection>(args: { where?: EventWhereInput, orderBy?: EventOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    scrimmagesConnection: <T = ScrimmageConnection>(args: { where?: ScrimmageWhereInput, orderBy?: ScrimmageOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    placesConnection: <T = PlaceConnection>(args: { where?: PlaceWhereInput, orderBy?: PlaceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    interestsConnection: <T = InterestConnection>(args: { where?: InterestWhereInput, orderBy?: InterestOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    lolProfilesConnection: <T = LolProfileConnection>(args: { where?: LolProfileWhereInput, orderBy?: LolProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pubgProfilesConnection: <T = PubgProfileConnection>(args: { where?: PubgProfileWhereInput, orderBy?: PubgProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    overwatchProfilesConnection: <T = OverwatchProfileConnection>(args: { where?: OverwatchProfileWhereInput, orderBy?: OverwatchProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    etcGamesProfilesConnection: <T = EtcGamesProfileConnection>(args: { where?: EtcGamesProfileWhereInput, orderBy?: EtcGamesProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    soccerProfilesConnection: <T = SoccerProfileConnection>(args: { where?: SoccerProfileWhereInput, orderBy?: SoccerProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    basketBallProfilesConnection: <T = BasketBallProfileConnection>(args: { where?: BasketBallProfileWhereInput, orderBy?: BasketBallProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    etcSportsProfilesConnection: <T = EtcSportsProfileConnection>(args: { where?: EtcSportsProfileWhereInput, orderBy?: EtcSportsProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    anyProfilesConnection: <T = AnyProfileConnection>(args: { where?: AnyProfileWhereInput, orderBy?: AnyProfileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTeam: <T = Team>(args: { data: TeamCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createEvent: <T = Event>(args: { data: EventCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createScrimmage: <T = Scrimmage>(args: { data: ScrimmageCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPlace: <T = Place>(args: { data: PlaceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createInterest: <T = Interest>(args: { data: InterestCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLolProfile: <T = LolProfile>(args: { data: LolProfileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPubgProfile: <T = PubgProfile>(args: { data: PubgProfileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createOverwatchProfile: <T = OverwatchProfile>(args: { data: OverwatchProfileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createEtcGamesProfile: <T = EtcGamesProfile>(args: { data: EtcGamesProfileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSoccerProfile: <T = SoccerProfile>(args: { data: SoccerProfileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBasketBallProfile: <T = BasketBallProfile>(args: { data: BasketBallProfileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createEtcSportsProfile: <T = EtcSportsProfile>(args: { data: EtcSportsProfileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAnyProfile: <T = AnyProfile>(args: { data: AnyProfileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTeam: <T = Team | null>(args: { data: TeamUpdateInput, where: TeamWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateEvent: <T = Event | null>(args: { data: EventUpdateInput, where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateScrimmage: <T = Scrimmage | null>(args: { data: ScrimmageUpdateInput, where: ScrimmageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePlace: <T = Place | null>(args: { data: PlaceUpdateInput, where: PlaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateInterest: <T = Interest | null>(args: { data: InterestUpdateInput, where: InterestWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLolProfile: <T = LolProfile | null>(args: { data: LolProfileUpdateInput, where: LolProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePubgProfile: <T = PubgProfile | null>(args: { data: PubgProfileUpdateInput, where: PubgProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateOverwatchProfile: <T = OverwatchProfile | null>(args: { data: OverwatchProfileUpdateInput, where: OverwatchProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateEtcGamesProfile: <T = EtcGamesProfile | null>(args: { data: EtcGamesProfileUpdateInput, where: EtcGamesProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSoccerProfile: <T = SoccerProfile | null>(args: { data: SoccerProfileUpdateInput, where: SoccerProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateBasketBallProfile: <T = BasketBallProfile | null>(args: { data: BasketBallProfileUpdateInput, where: BasketBallProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateEtcSportsProfile: <T = EtcSportsProfile | null>(args: { data: EtcSportsProfileUpdateInput, where: EtcSportsProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateAnyProfile: <T = AnyProfile | null>(args: { data: AnyProfileUpdateInput, where: AnyProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteTeam: <T = Team | null>(args: { where: TeamWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteEvent: <T = Event | null>(args: { where: EventWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteScrimmage: <T = Scrimmage | null>(args: { where: ScrimmageWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePlace: <T = Place | null>(args: { where: PlaceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteInterest: <T = Interest | null>(args: { where: InterestWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLolProfile: <T = LolProfile | null>(args: { where: LolProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePubgProfile: <T = PubgProfile | null>(args: { where: PubgProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteOverwatchProfile: <T = OverwatchProfile | null>(args: { where: OverwatchProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteEtcGamesProfile: <T = EtcGamesProfile | null>(args: { where: EtcGamesProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteSoccerProfile: <T = SoccerProfile | null>(args: { where: SoccerProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteBasketBallProfile: <T = BasketBallProfile | null>(args: { where: BasketBallProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteEtcSportsProfile: <T = EtcSportsProfile | null>(args: { where: EtcSportsProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAnyProfile: <T = AnyProfile | null>(args: { where: AnyProfileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTeam: <T = Team>(args: { where: TeamWhereUniqueInput, create: TeamCreateInput, update: TeamUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertEvent: <T = Event>(args: { where: EventWhereUniqueInput, create: EventCreateInput, update: EventUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertScrimmage: <T = Scrimmage>(args: { where: ScrimmageWhereUniqueInput, create: ScrimmageCreateInput, update: ScrimmageUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPlace: <T = Place>(args: { where: PlaceWhereUniqueInput, create: PlaceCreateInput, update: PlaceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertInterest: <T = Interest>(args: { where: InterestWhereUniqueInput, create: InterestCreateInput, update: InterestUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLolProfile: <T = LolProfile>(args: { where: LolProfileWhereUniqueInput, create: LolProfileCreateInput, update: LolProfileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPubgProfile: <T = PubgProfile>(args: { where: PubgProfileWhereUniqueInput, create: PubgProfileCreateInput, update: PubgProfileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertOverwatchProfile: <T = OverwatchProfile>(args: { where: OverwatchProfileWhereUniqueInput, create: OverwatchProfileCreateInput, update: OverwatchProfileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertEtcGamesProfile: <T = EtcGamesProfile>(args: { where: EtcGamesProfileWhereUniqueInput, create: EtcGamesProfileCreateInput, update: EtcGamesProfileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSoccerProfile: <T = SoccerProfile>(args: { where: SoccerProfileWhereUniqueInput, create: SoccerProfileCreateInput, update: SoccerProfileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBasketBallProfile: <T = BasketBallProfile>(args: { where: BasketBallProfileWhereUniqueInput, create: BasketBallProfileCreateInput, update: BasketBallProfileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertEtcSportsProfile: <T = EtcSportsProfile>(args: { where: EtcSportsProfileWhereUniqueInput, create: EtcSportsProfileCreateInput, update: EtcSportsProfileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAnyProfile: <T = AnyProfile>(args: { where: AnyProfileWhereUniqueInput, create: AnyProfileCreateInput, update: AnyProfileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTeams: <T = BatchPayload>(args: { data: TeamUpdateInput, where?: TeamWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyEvents: <T = BatchPayload>(args: { data: EventUpdateInput, where?: EventWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyScrimmages: <T = BatchPayload>(args: { data: ScrimmageUpdateInput, where?: ScrimmageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPlaces: <T = BatchPayload>(args: { data: PlaceUpdateInput, where?: PlaceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyInterests: <T = BatchPayload>(args: { data: InterestUpdateInput, where?: InterestWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLolProfiles: <T = BatchPayload>(args: { data: LolProfileUpdateInput, where?: LolProfileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPubgProfiles: <T = BatchPayload>(args: { data: PubgProfileUpdateInput, where?: PubgProfileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyOverwatchProfiles: <T = BatchPayload>(args: { data: OverwatchProfileUpdateInput, where?: OverwatchProfileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyEtcGamesProfiles: <T = BatchPayload>(args: { data: EtcGamesProfileUpdateInput, where?: EtcGamesProfileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySoccerProfiles: <T = BatchPayload>(args: { data: SoccerProfileUpdateInput, where?: SoccerProfileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBasketBallProfiles: <T = BatchPayload>(args: { data: BasketBallProfileUpdateInput, where?: BasketBallProfileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyEtcSportsProfiles: <T = BatchPayload>(args: { data: EtcSportsProfileUpdateInput, where?: EtcSportsProfileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAnyProfiles: <T = BatchPayload>(args: { data: AnyProfileUpdateInput, where?: AnyProfileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTeams: <T = BatchPayload>(args: { where?: TeamWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyEvents: <T = BatchPayload>(args: { where?: EventWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyScrimmages: <T = BatchPayload>(args: { where?: ScrimmageWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPlaces: <T = BatchPayload>(args: { where?: PlaceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyInterests: <T = BatchPayload>(args: { where?: InterestWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLolProfiles: <T = BatchPayload>(args: { where?: LolProfileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPubgProfiles: <T = BatchPayload>(args: { where?: PubgProfileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyOverwatchProfiles: <T = BatchPayload>(args: { where?: OverwatchProfileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyEtcGamesProfiles: <T = BatchPayload>(args: { where?: EtcGamesProfileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySoccerProfiles: <T = BatchPayload>(args: { where?: SoccerProfileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBasketBallProfiles: <T = BatchPayload>(args: { where?: BasketBallProfileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyEtcSportsProfiles: <T = BatchPayload>(args: { where?: EtcSportsProfileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAnyProfiles: <T = BatchPayload>(args: { where?: AnyProfileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    team: <T = TeamSubscriptionPayload | null>(args: { where?: TeamSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    event: <T = EventSubscriptionPayload | null>(args: { where?: EventSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    scrimmage: <T = ScrimmageSubscriptionPayload | null>(args: { where?: ScrimmageSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    place: <T = PlaceSubscriptionPayload | null>(args: { where?: PlaceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    interest: <T = InterestSubscriptionPayload | null>(args: { where?: InterestSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    lolProfile: <T = LolProfileSubscriptionPayload | null>(args: { where?: LolProfileSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    pubgProfile: <T = PubgProfileSubscriptionPayload | null>(args: { where?: PubgProfileSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    overwatchProfile: <T = OverwatchProfileSubscriptionPayload | null>(args: { where?: OverwatchProfileSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    etcGamesProfile: <T = EtcGamesProfileSubscriptionPayload | null>(args: { where?: EtcGamesProfileSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    soccerProfile: <T = SoccerProfileSubscriptionPayload | null>(args: { where?: SoccerProfileSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    basketBallProfile: <T = BasketBallProfileSubscriptionPayload | null>(args: { where?: BasketBallProfileSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    etcSportsProfile: <T = EtcSportsProfileSubscriptionPayload | null>(args: { where?: EtcSportsProfileSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    anyProfile: <T = AnyProfileSubscriptionPayload | null>(args: { where?: AnyProfileSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Team: (where?: TeamWhereInput) => Promise<boolean>
  Event: (where?: EventWhereInput) => Promise<boolean>
  Scrimmage: (where?: ScrimmageWhereInput) => Promise<boolean>
  Place: (where?: PlaceWhereInput) => Promise<boolean>
  Interest: (where?: InterestWhereInput) => Promise<boolean>
  LolProfile: (where?: LolProfileWhereInput) => Promise<boolean>
  PubgProfile: (where?: PubgProfileWhereInput) => Promise<boolean>
  OverwatchProfile: (where?: OverwatchProfileWhereInput) => Promise<boolean>
  EtcGamesProfile: (where?: EtcGamesProfileWhereInput) => Promise<boolean>
  SoccerProfile: (where?: SoccerProfileWhereInput) => Promise<boolean>
  BasketBallProfile: (where?: BasketBallProfileWhereInput) => Promise<boolean>
  EtcSportsProfile: (where?: EtcSportsProfileWhereInput) => Promise<boolean>
  AnyProfile: (where?: AnyProfileWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateAnyProfile {
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

type AggregatePlace {
  count: Int!
}

type AggregatePubgProfile {
  count: Int!
}

type AggregateScrimmage {
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

"""A connection to a list of items."""
type AnyProfileConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type AnyProfileEdge {
  """The item at the end of the edge."""
  node: AnyProfile!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [AnyProfileSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AnyProfileSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
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
  """Logical AND on all given filters."""
  AND: [AnyProfileWhereInput!]

  """Logical OR on all given filters."""
  OR: [AnyProfileWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AnyProfileWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  topic: String

  """All values that are not equal to given value."""
  topic_not: String

  """All values that are contained in given list."""
  topic_in: [String!]

  """All values that are not contained in given list."""
  topic_not_in: [String!]

  """All values less than the given value."""
  topic_lt: String

  """All values less than or equal the given value."""
  topic_lte: String

  """All values greater than the given value."""
  topic_gt: String

  """All values greater than or equal the given value."""
  topic_gte: String

  """All values containing the given string."""
  topic_contains: String

  """All values not containing the given string."""
  topic_not_contains: String

  """All values starting with the given string."""
  topic_starts_with: String

  """All values not starting with the given string."""
  topic_not_starts_with: String

  """All values ending with the given string."""
  topic_ends_with: String

  """All values not ending with the given string."""
  topic_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
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

"""A connection to a list of items."""
type BasketBallProfileConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type BasketBallProfileEdge {
  """The item at the end of the edge."""
  node: BasketBallProfile!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [BasketBallProfileSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BasketBallProfileSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
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
  """Logical AND on all given filters."""
  AND: [BasketBallProfileWhereInput!]

  """Logical OR on all given filters."""
  OR: [BasketBallProfileWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BasketBallProfileWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  role: BasketBallRole

  """All values that are not equal to given value."""
  role_not: BasketBallRole

  """All values that are contained in given list."""
  role_in: [BasketBallRole!]

  """All values that are not contained in given list."""
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
  """The number of nodes that have been affected by the Batch operation."""
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

"""A connection to a list of items."""
type EtcGamesProfileConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type EtcGamesProfileEdge {
  """The item at the end of the edge."""
  node: EtcGamesProfile!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [EtcGamesProfileSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [EtcGamesProfileSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
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
  """Logical AND on all given filters."""
  AND: [EtcGamesProfileWhereInput!]

  """Logical OR on all given filters."""
  OR: [EtcGamesProfileWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EtcGamesProfileWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  gameName: String

  """All values that are not equal to given value."""
  gameName_not: String

  """All values that are contained in given list."""
  gameName_in: [String!]

  """All values that are not contained in given list."""
  gameName_not_in: [String!]

  """All values less than the given value."""
  gameName_lt: String

  """All values less than or equal the given value."""
  gameName_lte: String

  """All values greater than the given value."""
  gameName_gt: String

  """All values greater than or equal the given value."""
  gameName_gte: String

  """All values containing the given string."""
  gameName_contains: String

  """All values not containing the given string."""
  gameName_not_contains: String

  """All values starting with the given string."""
  gameName_starts_with: String

  """All values not starting with the given string."""
  gameName_not_starts_with: String

  """All values ending with the given string."""
  gameName_ends_with: String

  """All values not ending with the given string."""
  gameName_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  stats: String

  """All values that are not equal to given value."""
  stats_not: String

  """All values that are contained in given list."""
  stats_in: [String!]

  """All values that are not contained in given list."""
  stats_not_in: [String!]

  """All values less than the given value."""
  stats_lt: String

  """All values less than or equal the given value."""
  stats_lte: String

  """All values greater than the given value."""
  stats_gt: String

  """All values greater than or equal the given value."""
  stats_gte: String

  """All values containing the given string."""
  stats_contains: String

  """All values not containing the given string."""
  stats_not_contains: String

  """All values starting with the given string."""
  stats_starts_with: String

  """All values not starting with the given string."""
  stats_not_starts_with: String

  """All values ending with the given string."""
  stats_ends_with: String

  """All values not ending with the given string."""
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

"""A connection to a list of items."""
type EtcSportsProfileConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type EtcSportsProfileEdge {
  """The item at the end of the edge."""
  node: EtcSportsProfile!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [EtcSportsProfileSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [EtcSportsProfileSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
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
  """Logical AND on all given filters."""
  AND: [EtcSportsProfileWhereInput!]

  """Logical OR on all given filters."""
  OR: [EtcSportsProfileWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EtcSportsProfileWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  sportsName: String

  """All values that are not equal to given value."""
  sportsName_not: String

  """All values that are contained in given list."""
  sportsName_in: [String!]

  """All values that are not contained in given list."""
  sportsName_not_in: [String!]

  """All values less than the given value."""
  sportsName_lt: String

  """All values less than or equal the given value."""
  sportsName_lte: String

  """All values greater than the given value."""
  sportsName_gt: String

  """All values greater than or equal the given value."""
  sportsName_gte: String

  """All values containing the given string."""
  sportsName_contains: String

  """All values not containing the given string."""
  sportsName_not_contains: String

  """All values starting with the given string."""
  sportsName_starts_with: String

  """All values not starting with the given string."""
  sportsName_not_starts_with: String

  """All values ending with the given string."""
  sportsName_ends_with: String

  """All values not ending with the given string."""
  sportsName_not_ends_with: String
  stats: String

  """All values that are not equal to given value."""
  stats_not: String

  """All values that are contained in given list."""
  stats_in: [String!]

  """All values that are not contained in given list."""
  stats_not_in: [String!]

  """All values less than the given value."""
  stats_lt: String

  """All values less than or equal the given value."""
  stats_lte: String

  """All values greater than the given value."""
  stats_gt: String

  """All values greater than or equal the given value."""
  stats_gte: String

  """All values containing the given string."""
  stats_contains: String

  """All values not containing the given string."""
  stats_not_contains: String

  """All values starting with the given string."""
  stats_starts_with: String

  """All values not starting with the given string."""
  stats_not_starts_with: String

  """All values ending with the given string."""
  stats_ends_with: String

  """All values not ending with the given string."""
  stats_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
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
  place(where: PlaceWhereInput): Place
  owner(where: UserWhereInput): User
  scrimmage(where: ScrimmageWhereInput): Scrimmage
}

"""A connection to a list of items."""
type EventConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [EventEdge]!
  aggregate: AggregateEvent!
}

input EventCreateInput {
  name: String
  iconUrl: String
  category: Category
  type: EventType
  startTime: DateTime
  place: PlaceCreateOneWithoutEventInput
  owner: UserCreateOneWithoutEventsInput
  scrimmage: ScrimmageCreateOneWithoutEventInput
}

input EventCreateManyWithoutOwnerInput {
  create: [EventCreateWithoutOwnerInput!]
  connect: [EventWhereUniqueInput!]
}

input EventCreateOneWithoutPlaceInput {
  create: EventCreateWithoutPlaceInput
  connect: EventWhereUniqueInput
}

input EventCreateOneWithoutScrimmageInput {
  create: EventCreateWithoutScrimmageInput
  connect: EventWhereUniqueInput
}

input EventCreateWithoutOwnerInput {
  name: String
  iconUrl: String
  category: Category
  type: EventType
  startTime: DateTime
  place: PlaceCreateOneWithoutEventInput
  scrimmage: ScrimmageCreateOneWithoutEventInput
}

input EventCreateWithoutPlaceInput {
  name: String
  iconUrl: String
  category: Category
  type: EventType
  startTime: DateTime
  owner: UserCreateOneWithoutEventsInput
  scrimmage: ScrimmageCreateOneWithoutEventInput
}

input EventCreateWithoutScrimmageInput {
  name: String
  iconUrl: String
  category: Category
  type: EventType
  startTime: DateTime
  place: PlaceCreateOneWithoutEventInput
  owner: UserCreateOneWithoutEventsInput
}

"""An edge in a connection."""
type EventEdge {
  """The item at the end of the edge."""
  node: Event!

  """A cursor for use in pagination."""
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
}

type EventSubscriptionPayload {
  mutation: MutationType!
  node: Event
  updatedFields: [String!]
  previousValues: EventPreviousValues
}

input EventSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [EventSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [EventSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
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
  SCRIMMAGE
  ETC
}

input EventUpdateInput {
  name: String
  iconUrl: String
  category: Category
  type: EventType
  startTime: DateTime
  place: PlaceUpdateOneWithoutEventInput
  owner: UserUpdateOneWithoutEventsInput
  scrimmage: ScrimmageUpdateOneWithoutEventInput
}

input EventUpdateManyWithoutOwnerInput {
  create: [EventCreateWithoutOwnerInput!]
  connect: [EventWhereUniqueInput!]
  disconnect: [EventWhereUniqueInput!]
  delete: [EventWhereUniqueInput!]
  update: [EventUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [EventUpsertWithWhereUniqueWithoutOwnerInput!]
}

input EventUpdateOneWithoutPlaceInput {
  create: EventCreateWithoutPlaceInput
  connect: EventWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: EventUpdateWithoutPlaceDataInput
  upsert: EventUpsertWithoutPlaceInput
}

input EventUpdateOneWithoutScrimmageInput {
  create: EventCreateWithoutScrimmageInput
  connect: EventWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: EventUpdateWithoutScrimmageDataInput
  upsert: EventUpsertWithoutScrimmageInput
}

input EventUpdateWithoutOwnerDataInput {
  name: String
  iconUrl: String
  category: Category
  type: EventType
  startTime: DateTime
  place: PlaceUpdateOneWithoutEventInput
  scrimmage: ScrimmageUpdateOneWithoutEventInput
}

input EventUpdateWithoutPlaceDataInput {
  name: String
  iconUrl: String
  category: Category
  type: EventType
  startTime: DateTime
  owner: UserUpdateOneWithoutEventsInput
  scrimmage: ScrimmageUpdateOneWithoutEventInput
}

input EventUpdateWithoutScrimmageDataInput {
  name: String
  iconUrl: String
  category: Category
  type: EventType
  startTime: DateTime
  place: PlaceUpdateOneWithoutEventInput
  owner: UserUpdateOneWithoutEventsInput
}

input EventUpdateWithWhereUniqueWithoutOwnerInput {
  where: EventWhereUniqueInput!
  data: EventUpdateWithoutOwnerDataInput!
}

input EventUpsertWithoutPlaceInput {
  update: EventUpdateWithoutPlaceDataInput!
  create: EventCreateWithoutPlaceInput!
}

input EventUpsertWithoutScrimmageInput {
  update: EventUpdateWithoutScrimmageDataInput!
  create: EventCreateWithoutScrimmageInput!
}

input EventUpsertWithWhereUniqueWithoutOwnerInput {
  where: EventWhereUniqueInput!
  update: EventUpdateWithoutOwnerDataInput!
  create: EventCreateWithoutOwnerInput!
}

input EventWhereInput {
  """Logical AND on all given filters."""
  AND: [EventWhereInput!]

  """Logical OR on all given filters."""
  OR: [EventWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [EventWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  iconUrl: String

  """All values that are not equal to given value."""
  iconUrl_not: String

  """All values that are contained in given list."""
  iconUrl_in: [String!]

  """All values that are not contained in given list."""
  iconUrl_not_in: [String!]

  """All values less than the given value."""
  iconUrl_lt: String

  """All values less than or equal the given value."""
  iconUrl_lte: String

  """All values greater than the given value."""
  iconUrl_gt: String

  """All values greater than or equal the given value."""
  iconUrl_gte: String

  """All values containing the given string."""
  iconUrl_contains: String

  """All values not containing the given string."""
  iconUrl_not_contains: String

  """All values starting with the given string."""
  iconUrl_starts_with: String

  """All values not starting with the given string."""
  iconUrl_not_starts_with: String

  """All values ending with the given string."""
  iconUrl_ends_with: String

  """All values not ending with the given string."""
  iconUrl_not_ends_with: String
  category: Category

  """All values that are not equal to given value."""
  category_not: Category

  """All values that are contained in given list."""
  category_in: [Category!]

  """All values that are not contained in given list."""
  category_not_in: [Category!]
  type: EventType

  """All values that are not equal to given value."""
  type_not: EventType

  """All values that are contained in given list."""
  type_in: [EventType!]

  """All values that are not contained in given list."""
  type_not_in: [EventType!]
  startTime: DateTime

  """All values that are not equal to given value."""
  startTime_not: DateTime

  """All values that are contained in given list."""
  startTime_in: [DateTime!]

  """All values that are not contained in given list."""
  startTime_not_in: [DateTime!]

  """All values less than the given value."""
  startTime_lt: DateTime

  """All values less than or equal the given value."""
  startTime_lte: DateTime

  """All values greater than the given value."""
  startTime_gt: DateTime

  """All values greater than or equal the given value."""
  startTime_gte: DateTime
  place: PlaceWhereInput
  owner: UserWhereInput
  scrimmage: ScrimmageWhereInput
}

input EventWhereUniqueInput {
  id: ID
}

type Interest implements Node {
  id: ID!
  user(where: UserWhereInput): User!
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team!]
  category: Category
  categoryIconUrl: String
  firstLine: String
  secondLine: String
  thirdLine: String
  lol(where: LolProfileWhereInput): LolProfile
  pubg(where: PubgProfileWhereInput): PubgProfile
  overwatch(where: OverwatchProfileWhereInput): OverwatchProfile
  etcGames(where: EtcGamesProfileWhereInput): EtcGamesProfile
  soccer(where: SoccerProfileWhereInput): SoccerProfile
  basketBall(where: BasketBallProfileWhereInput): BasketBallProfile
  etcSports(where: EtcSportsProfileWhereInput): EtcSportsProfile
  any(where: AnyProfileWhereInput): AnyProfile
}

"""A connection to a list of items."""
type InterestConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [InterestEdge]!
  aggregate: AggregateInterest!
}

input InterestCreateInput {
  category: Category
  categoryIconUrl: String
  firstLine: String
  secondLine: String
  thirdLine: String
  user: UserCreateOneWithoutInterestsInput!
  teams: TeamCreateManyWithoutMembersInput
  lol: LolProfileCreateOneInput
  pubg: PubgProfileCreateOneInput
  overwatch: OverwatchProfileCreateOneInput
  etcGames: EtcGamesProfileCreateOneInput
  soccer: SoccerProfileCreateOneInput
  basketBall: BasketBallProfileCreateOneInput
  etcSports: EtcSportsProfileCreateOneInput
  any: AnyProfileCreateOneInput
}

input InterestCreateManyWithoutTeamsInput {
  create: [InterestCreateWithoutTeamsInput!]
  connect: [InterestWhereUniqueInput!]
}

input InterestCreateManyWithoutUserInput {
  create: [InterestCreateWithoutUserInput!]
  connect: [InterestWhereUniqueInput!]
}

input InterestCreateWithoutTeamsInput {
  category: Category
  categoryIconUrl: String
  firstLine: String
  secondLine: String
  thirdLine: String
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

input InterestCreateWithoutUserInput {
  category: Category
  categoryIconUrl: String
  firstLine: String
  secondLine: String
  thirdLine: String
  teams: TeamCreateManyWithoutMembersInput
  lol: LolProfileCreateOneInput
  pubg: PubgProfileCreateOneInput
  overwatch: OverwatchProfileCreateOneInput
  etcGames: EtcGamesProfileCreateOneInput
  soccer: SoccerProfileCreateOneInput
  basketBall: BasketBallProfileCreateOneInput
  etcSports: EtcSportsProfileCreateOneInput
  any: AnyProfileCreateOneInput
}

"""An edge in a connection."""
type InterestEdge {
  """The item at the end of the edge."""
  node: Interest!

  """A cursor for use in pagination."""
  cursor: String!
}

enum InterestOrderByInput {
  id_ASC
  id_DESC
  category_ASC
  category_DESC
  categoryIconUrl_ASC
  categoryIconUrl_DESC
  firstLine_ASC
  firstLine_DESC
  secondLine_ASC
  secondLine_DESC
  thirdLine_ASC
  thirdLine_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type InterestPreviousValues {
  id: ID!
  category: Category
  categoryIconUrl: String
  firstLine: String
  secondLine: String
  thirdLine: String
}

type InterestSubscriptionPayload {
  mutation: MutationType!
  node: Interest
  updatedFields: [String!]
  previousValues: InterestPreviousValues
}

input InterestSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [InterestSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [InterestSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
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
  categoryIconUrl: String
  firstLine: String
  secondLine: String
  thirdLine: String
  user: UserUpdateOneWithoutInterestsInput
  teams: TeamUpdateManyWithoutMembersInput
  lol: LolProfileUpdateOneInput
  pubg: PubgProfileUpdateOneInput
  overwatch: OverwatchProfileUpdateOneInput
  etcGames: EtcGamesProfileUpdateOneInput
  soccer: SoccerProfileUpdateOneInput
  basketBall: BasketBallProfileUpdateOneInput
  etcSports: EtcSportsProfileUpdateOneInput
  any: AnyProfileUpdateOneInput
}

input InterestUpdateManyWithoutTeamsInput {
  create: [InterestCreateWithoutTeamsInput!]
  connect: [InterestWhereUniqueInput!]
  disconnect: [InterestWhereUniqueInput!]
  delete: [InterestWhereUniqueInput!]
  update: [InterestUpdateWithWhereUniqueWithoutTeamsInput!]
  upsert: [InterestUpsertWithWhereUniqueWithoutTeamsInput!]
}

input InterestUpdateManyWithoutUserInput {
  create: [InterestCreateWithoutUserInput!]
  connect: [InterestWhereUniqueInput!]
  disconnect: [InterestWhereUniqueInput!]
  delete: [InterestWhereUniqueInput!]
  update: [InterestUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [InterestUpsertWithWhereUniqueWithoutUserInput!]
}

input InterestUpdateWithoutTeamsDataInput {
  category: Category
  categoryIconUrl: String
  firstLine: String
  secondLine: String
  thirdLine: String
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

input InterestUpdateWithoutUserDataInput {
  category: Category
  categoryIconUrl: String
  firstLine: String
  secondLine: String
  thirdLine: String
  teams: TeamUpdateManyWithoutMembersInput
  lol: LolProfileUpdateOneInput
  pubg: PubgProfileUpdateOneInput
  overwatch: OverwatchProfileUpdateOneInput
  etcGames: EtcGamesProfileUpdateOneInput
  soccer: SoccerProfileUpdateOneInput
  basketBall: BasketBallProfileUpdateOneInput
  etcSports: EtcSportsProfileUpdateOneInput
  any: AnyProfileUpdateOneInput
}

input InterestUpdateWithWhereUniqueWithoutTeamsInput {
  where: InterestWhereUniqueInput!
  data: InterestUpdateWithoutTeamsDataInput!
}

input InterestUpdateWithWhereUniqueWithoutUserInput {
  where: InterestWhereUniqueInput!
  data: InterestUpdateWithoutUserDataInput!
}

input InterestUpsertWithWhereUniqueWithoutTeamsInput {
  where: InterestWhereUniqueInput!
  update: InterestUpdateWithoutTeamsDataInput!
  create: InterestCreateWithoutTeamsInput!
}

input InterestUpsertWithWhereUniqueWithoutUserInput {
  where: InterestWhereUniqueInput!
  update: InterestUpdateWithoutUserDataInput!
  create: InterestCreateWithoutUserInput!
}

input InterestWhereInput {
  """Logical AND on all given filters."""
  AND: [InterestWhereInput!]

  """Logical OR on all given filters."""
  OR: [InterestWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [InterestWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  category: Category

  """All values that are not equal to given value."""
  category_not: Category

  """All values that are contained in given list."""
  category_in: [Category!]

  """All values that are not contained in given list."""
  category_not_in: [Category!]
  categoryIconUrl: String

  """All values that are not equal to given value."""
  categoryIconUrl_not: String

  """All values that are contained in given list."""
  categoryIconUrl_in: [String!]

  """All values that are not contained in given list."""
  categoryIconUrl_not_in: [String!]

  """All values less than the given value."""
  categoryIconUrl_lt: String

  """All values less than or equal the given value."""
  categoryIconUrl_lte: String

  """All values greater than the given value."""
  categoryIconUrl_gt: String

  """All values greater than or equal the given value."""
  categoryIconUrl_gte: String

  """All values containing the given string."""
  categoryIconUrl_contains: String

  """All values not containing the given string."""
  categoryIconUrl_not_contains: String

  """All values starting with the given string."""
  categoryIconUrl_starts_with: String

  """All values not starting with the given string."""
  categoryIconUrl_not_starts_with: String

  """All values ending with the given string."""
  categoryIconUrl_ends_with: String

  """All values not ending with the given string."""
  categoryIconUrl_not_ends_with: String
  firstLine: String

  """All values that are not equal to given value."""
  firstLine_not: String

  """All values that are contained in given list."""
  firstLine_in: [String!]

  """All values that are not contained in given list."""
  firstLine_not_in: [String!]

  """All values less than the given value."""
  firstLine_lt: String

  """All values less than or equal the given value."""
  firstLine_lte: String

  """All values greater than the given value."""
  firstLine_gt: String

  """All values greater than or equal the given value."""
  firstLine_gte: String

  """All values containing the given string."""
  firstLine_contains: String

  """All values not containing the given string."""
  firstLine_not_contains: String

  """All values starting with the given string."""
  firstLine_starts_with: String

  """All values not starting with the given string."""
  firstLine_not_starts_with: String

  """All values ending with the given string."""
  firstLine_ends_with: String

  """All values not ending with the given string."""
  firstLine_not_ends_with: String
  secondLine: String

  """All values that are not equal to given value."""
  secondLine_not: String

  """All values that are contained in given list."""
  secondLine_in: [String!]

  """All values that are not contained in given list."""
  secondLine_not_in: [String!]

  """All values less than the given value."""
  secondLine_lt: String

  """All values less than or equal the given value."""
  secondLine_lte: String

  """All values greater than the given value."""
  secondLine_gt: String

  """All values greater than or equal the given value."""
  secondLine_gte: String

  """All values containing the given string."""
  secondLine_contains: String

  """All values not containing the given string."""
  secondLine_not_contains: String

  """All values starting with the given string."""
  secondLine_starts_with: String

  """All values not starting with the given string."""
  secondLine_not_starts_with: String

  """All values ending with the given string."""
  secondLine_ends_with: String

  """All values not ending with the given string."""
  secondLine_not_ends_with: String
  thirdLine: String

  """All values that are not equal to given value."""
  thirdLine_not: String

  """All values that are contained in given list."""
  thirdLine_in: [String!]

  """All values that are not contained in given list."""
  thirdLine_not_in: [String!]

  """All values less than the given value."""
  thirdLine_lt: String

  """All values less than or equal the given value."""
  thirdLine_lte: String

  """All values greater than the given value."""
  thirdLine_gt: String

  """All values greater than or equal the given value."""
  thirdLine_gte: String

  """All values containing the given string."""
  thirdLine_contains: String

  """All values not containing the given string."""
  thirdLine_not_contains: String

  """All values starting with the given string."""
  thirdLine_starts_with: String

  """All values not starting with the given string."""
  thirdLine_not_starts_with: String

  """All values ending with the given string."""
  thirdLine_ends_with: String

  """All values not ending with the given string."""
  thirdLine_not_ends_with: String
  user: UserWhereInput
  teams_every: TeamWhereInput
  teams_some: TeamWhereInput
  teams_none: TeamWhereInput
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

"""A connection to a list of items."""
type LolProfileConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type LolProfileEdge {
  """The item at the end of the edge."""
  node: LolProfile!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [LolProfileSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LolProfileSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
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
  """Logical AND on all given filters."""
  AND: [LolProfileWhereInput!]

  """Logical OR on all given filters."""
  OR: [LolProfileWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LolProfileWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  tier: LolTier

  """All values that are not equal to given value."""
  tier_not: LolTier

  """All values that are contained in given list."""
  tier_in: [LolTier!]

  """All values that are not contained in given list."""
  tier_not_in: [LolTier!]
  role: LolRole

  """All values that are not equal to given value."""
  role_not: LolRole

  """All values that are contained in given list."""
  role_in: [LolRole!]

  """All values that are not contained in given list."""
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
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createTeam(data: TeamCreateInput!): Team!
  createEvent(data: EventCreateInput!): Event!
  createScrimmage(data: ScrimmageCreateInput!): Scrimmage!
  createPlace(data: PlaceCreateInput!): Place!
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
  updateScrimmage(data: ScrimmageUpdateInput!, where: ScrimmageWhereUniqueInput!): Scrimmage
  updatePlace(data: PlaceUpdateInput!, where: PlaceWhereUniqueInput!): Place
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
  deleteScrimmage(where: ScrimmageWhereUniqueInput!): Scrimmage
  deletePlace(where: PlaceWhereUniqueInput!): Place
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
  upsertScrimmage(where: ScrimmageWhereUniqueInput!, create: ScrimmageCreateInput!, update: ScrimmageUpdateInput!): Scrimmage!
  upsertPlace(where: PlaceWhereUniqueInput!, create: PlaceCreateInput!, update: PlaceUpdateInput!): Place!
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
  updateManyScrimmages(data: ScrimmageUpdateInput!, where: ScrimmageWhereInput): BatchPayload!
  updateManyPlaces(data: PlaceUpdateInput!, where: PlaceWhereInput): BatchPayload!
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
  deleteManyScrimmages(where: ScrimmageWhereInput): BatchPayload!
  deleteManyPlaces(where: PlaceWhereInput): BatchPayload!
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

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

type OverwatchProfile implements Node {
  id: ID!
  name: String!
  rating: Int
  tier: OverwatchTier!
  role: OverwatchRole!
}

"""A connection to a list of items."""
type OverwatchProfileConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type OverwatchProfileEdge {
  """The item at the end of the edge."""
  node: OverwatchProfile!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [OverwatchProfileSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [OverwatchProfileSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
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
  """Logical AND on all given filters."""
  AND: [OverwatchProfileWhereInput!]

  """Logical OR on all given filters."""
  OR: [OverwatchProfileWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OverwatchProfileWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  rating: Int

  """All values that are not equal to given value."""
  rating_not: Int

  """All values that are contained in given list."""
  rating_in: [Int!]

  """All values that are not contained in given list."""
  rating_not_in: [Int!]

  """All values less than the given value."""
  rating_lt: Int

  """All values less than or equal the given value."""
  rating_lte: Int

  """All values greater than the given value."""
  rating_gt: Int

  """All values greater than or equal the given value."""
  rating_gte: Int
  tier: OverwatchTier

  """All values that are not equal to given value."""
  tier_not: OverwatchTier

  """All values that are contained in given list."""
  tier_in: [OverwatchTier!]

  """All values that are not contained in given list."""
  tier_not_in: [OverwatchTier!]
  role: OverwatchRole

  """All values that are not equal to given value."""
  role_not: OverwatchRole

  """All values that are contained in given list."""
  role_in: [OverwatchRole!]

  """All values that are not contained in given list."""
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

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Place implements Node {
  id: ID!
  description: String
  lat: Float
  lng: Float
  event(where: EventWhereInput): Event
}

"""A connection to a list of items."""
type PlaceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PlaceEdge]!
  aggregate: AggregatePlace!
}

input PlaceCreateInput {
  description: String
  lat: Float
  lng: Float
  event: EventCreateOneWithoutPlaceInput
}

input PlaceCreateOneWithoutEventInput {
  create: PlaceCreateWithoutEventInput
  connect: PlaceWhereUniqueInput
}

input PlaceCreateWithoutEventInput {
  description: String
  lat: Float
  lng: Float
}

"""An edge in a connection."""
type PlaceEdge {
  """The item at the end of the edge."""
  node: Place!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PlaceOrderByInput {
  id_ASC
  id_DESC
  description_ASC
  description_DESC
  lat_ASC
  lat_DESC
  lng_ASC
  lng_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PlacePreviousValues {
  id: ID!
  description: String
  lat: Float
  lng: Float
}

type PlaceSubscriptionPayload {
  mutation: MutationType!
  node: Place
  updatedFields: [String!]
  previousValues: PlacePreviousValues
}

input PlaceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PlaceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PlaceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PlaceSubscriptionWhereInput!]

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
  node: PlaceWhereInput
}

input PlaceUpdateInput {
  description: String
  lat: Float
  lng: Float
  event: EventUpdateOneWithoutPlaceInput
}

input PlaceUpdateOneWithoutEventInput {
  create: PlaceCreateWithoutEventInput
  connect: PlaceWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PlaceUpdateWithoutEventDataInput
  upsert: PlaceUpsertWithoutEventInput
}

input PlaceUpdateWithoutEventDataInput {
  description: String
  lat: Float
  lng: Float
}

input PlaceUpsertWithoutEventInput {
  update: PlaceUpdateWithoutEventDataInput!
  create: PlaceCreateWithoutEventInput!
}

input PlaceWhereInput {
  """Logical AND on all given filters."""
  AND: [PlaceWhereInput!]

  """Logical OR on all given filters."""
  OR: [PlaceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PlaceWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  lat: Float

  """All values that are not equal to given value."""
  lat_not: Float

  """All values that are contained in given list."""
  lat_in: [Float!]

  """All values that are not contained in given list."""
  lat_not_in: [Float!]

  """All values less than the given value."""
  lat_lt: Float

  """All values less than or equal the given value."""
  lat_lte: Float

  """All values greater than the given value."""
  lat_gt: Float

  """All values greater than or equal the given value."""
  lat_gte: Float
  lng: Float

  """All values that are not equal to given value."""
  lng_not: Float

  """All values that are contained in given list."""
  lng_in: [Float!]

  """All values that are not contained in given list."""
  lng_not_in: [Float!]

  """All values less than the given value."""
  lng_lt: Float

  """All values less than or equal the given value."""
  lng_lte: Float

  """All values greater than the given value."""
  lng_gt: Float

  """All values greater than or equal the given value."""
  lng_gte: Float
  event: EventWhereInput
}

input PlaceWhereUniqueInput {
  id: ID
}

type PubgProfile implements Node {
  id: ID!
  name: String!
  server: PubgServer!
  rating: Int
}

"""A connection to a list of items."""
type PubgProfileConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type PubgProfileEdge {
  """The item at the end of the edge."""
  node: PubgProfile!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [PubgProfileSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PubgProfileSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
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
  """Logical AND on all given filters."""
  AND: [PubgProfileWhereInput!]

  """Logical OR on all given filters."""
  OR: [PubgProfileWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PubgProfileWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  server: PubgServer

  """All values that are not equal to given value."""
  server_not: PubgServer

  """All values that are contained in given list."""
  server_in: [PubgServer!]

  """All values that are not contained in given list."""
  server_not_in: [PubgServer!]
  rating: Int

  """All values that are not equal to given value."""
  rating_not: Int

  """All values that are contained in given list."""
  rating_in: [Int!]

  """All values that are not contained in given list."""
  rating_not_in: [Int!]

  """All values less than the given value."""
  rating_lt: Int

  """All values less than or equal the given value."""
  rating_lte: Int

  """All values greater than the given value."""
  rating_gt: Int

  """All values greater than or equal the given value."""
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

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  teams(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team]!
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event]!
  scrimmages(where: ScrimmageWhereInput, orderBy: ScrimmageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Scrimmage]!
  places(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Place]!
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
  scrimmage(where: ScrimmageWhereUniqueInput!): Scrimmage
  place(where: PlaceWhereUniqueInput!): Place
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
  scrimmagesConnection(where: ScrimmageWhereInput, orderBy: ScrimmageOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ScrimmageConnection!
  placesConnection(where: PlaceWhereInput, orderBy: PlaceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PlaceConnection!
  interestsConnection(where: InterestWhereInput, orderBy: InterestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InterestConnection!
  lolProfilesConnection(where: LolProfileWhereInput, orderBy: LolProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LolProfileConnection!
  pubgProfilesConnection(where: PubgProfileWhereInput, orderBy: PubgProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PubgProfileConnection!
  overwatchProfilesConnection(where: OverwatchProfileWhereInput, orderBy: OverwatchProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OverwatchProfileConnection!
  etcGamesProfilesConnection(where: EtcGamesProfileWhereInput, orderBy: EtcGamesProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EtcGamesProfileConnection!
  soccerProfilesConnection(where: SoccerProfileWhereInput, orderBy: SoccerProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SoccerProfileConnection!
  basketBallProfilesConnection(where: BasketBallProfileWhereInput, orderBy: BasketBallProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BasketBallProfileConnection!
  etcSportsProfilesConnection(where: EtcSportsProfileWhereInput, orderBy: EtcSportsProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EtcSportsProfileConnection!
  anyProfilesConnection(where: AnyProfileWhereInput, orderBy: AnyProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AnyProfileConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Scrimmage implements Node {
  id: ID!
  hostTeam(where: TeamWhereInput): Team
  guestTeam(where: TeamWhereInput): Team
  event(where: EventWhereInput): Event
}

"""A connection to a list of items."""
type ScrimmageConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ScrimmageEdge]!
  aggregate: AggregateScrimmage!
}

input ScrimmageCreateInput {
  hostTeam: TeamCreateOneWithoutHostScrimmageInput
  guestTeam: TeamCreateOneWithoutGuestScrimmageInput
  event: EventCreateOneWithoutScrimmageInput
}

input ScrimmageCreateOneWithoutEventInput {
  create: ScrimmageCreateWithoutEventInput
  connect: ScrimmageWhereUniqueInput
}

input ScrimmageCreateOneWithoutGuestTeamInput {
  create: ScrimmageCreateWithoutGuestTeamInput
  connect: ScrimmageWhereUniqueInput
}

input ScrimmageCreateOneWithoutHostTeamInput {
  create: ScrimmageCreateWithoutHostTeamInput
  connect: ScrimmageWhereUniqueInput
}

input ScrimmageCreateWithoutEventInput {
  hostTeam: TeamCreateOneWithoutHostScrimmageInput
  guestTeam: TeamCreateOneWithoutGuestScrimmageInput
}

input ScrimmageCreateWithoutGuestTeamInput {
  hostTeam: TeamCreateOneWithoutHostScrimmageInput
  event: EventCreateOneWithoutScrimmageInput
}

input ScrimmageCreateWithoutHostTeamInput {
  guestTeam: TeamCreateOneWithoutGuestScrimmageInput
  event: EventCreateOneWithoutScrimmageInput
}

"""An edge in a connection."""
type ScrimmageEdge {
  """The item at the end of the edge."""
  node: Scrimmage!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [ScrimmageSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ScrimmageSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
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

input ScrimmageUpdateInput {
  hostTeam: TeamUpdateOneWithoutHostScrimmageInput
  guestTeam: TeamUpdateOneWithoutGuestScrimmageInput
  event: EventUpdateOneWithoutScrimmageInput
}

input ScrimmageUpdateOneWithoutEventInput {
  create: ScrimmageCreateWithoutEventInput
  connect: ScrimmageWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ScrimmageUpdateWithoutEventDataInput
  upsert: ScrimmageUpsertWithoutEventInput
}

input ScrimmageUpdateOneWithoutGuestTeamInput {
  create: ScrimmageCreateWithoutGuestTeamInput
  connect: ScrimmageWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ScrimmageUpdateWithoutGuestTeamDataInput
  upsert: ScrimmageUpsertWithoutGuestTeamInput
}

input ScrimmageUpdateOneWithoutHostTeamInput {
  create: ScrimmageCreateWithoutHostTeamInput
  connect: ScrimmageWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ScrimmageUpdateWithoutHostTeamDataInput
  upsert: ScrimmageUpsertWithoutHostTeamInput
}

input ScrimmageUpdateWithoutEventDataInput {
  hostTeam: TeamUpdateOneWithoutHostScrimmageInput
  guestTeam: TeamUpdateOneWithoutGuestScrimmageInput
}

input ScrimmageUpdateWithoutGuestTeamDataInput {
  hostTeam: TeamUpdateOneWithoutHostScrimmageInput
  event: EventUpdateOneWithoutScrimmageInput
}

input ScrimmageUpdateWithoutHostTeamDataInput {
  guestTeam: TeamUpdateOneWithoutGuestScrimmageInput
  event: EventUpdateOneWithoutScrimmageInput
}

input ScrimmageUpsertWithoutEventInput {
  update: ScrimmageUpdateWithoutEventDataInput!
  create: ScrimmageCreateWithoutEventInput!
}

input ScrimmageUpsertWithoutGuestTeamInput {
  update: ScrimmageUpdateWithoutGuestTeamDataInput!
  create: ScrimmageCreateWithoutGuestTeamInput!
}

input ScrimmageUpsertWithoutHostTeamInput {
  update: ScrimmageUpdateWithoutHostTeamDataInput!
  create: ScrimmageCreateWithoutHostTeamInput!
}

input ScrimmageWhereInput {
  """Logical AND on all given filters."""
  AND: [ScrimmageWhereInput!]

  """Logical OR on all given filters."""
  OR: [ScrimmageWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ScrimmageWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  hostTeam: TeamWhereInput
  guestTeam: TeamWhereInput
  event: EventWhereInput
}

input ScrimmageWhereUniqueInput {
  id: ID
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

"""A connection to a list of items."""
type SoccerProfileConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
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

"""An edge in a connection."""
type SoccerProfileEdge {
  """The item at the end of the edge."""
  node: SoccerProfile!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [SoccerProfileSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SoccerProfileSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
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
  """Logical AND on all given filters."""
  AND: [SoccerProfileWhereInput!]

  """Logical OR on all given filters."""
  OR: [SoccerProfileWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SoccerProfileWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  role: SoccerRole

  """All values that are not equal to given value."""
  role_not: SoccerRole

  """All values that are contained in given list."""
  role_in: [SoccerRole!]

  """All values that are not contained in given list."""
  role_not_in: [SoccerRole!]
  position: SoccerPosition

  """All values that are not equal to given value."""
  position_not: SoccerPosition

  """All values that are contained in given list."""
  position_in: [SoccerPosition!]

  """All values that are not contained in given list."""
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

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  team(where: TeamSubscriptionWhereInput): TeamSubscriptionPayload
  event(where: EventSubscriptionWhereInput): EventSubscriptionPayload
  scrimmage(where: ScrimmageSubscriptionWhereInput): ScrimmageSubscriptionPayload
  place(where: PlaceSubscriptionWhereInput): PlaceSubscriptionPayload
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

type Team implements Node {
  id: ID!
  category: Category
  name: String
  description: String
  members(where: InterestWhereInput, orderBy: InterestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Interest!]
  logoUrl: String
  hostScrimmage(where: ScrimmageWhereInput): Scrimmage
  guestScrimmage(where: ScrimmageWhereInput): Scrimmage
  liked(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

"""A connection to a list of items."""
type TeamConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TeamEdge]!
  aggregate: AggregateTeam!
}

input TeamCreateInput {
  category: Category
  name: String
  description: String
  logoUrl: String
  members: InterestCreateManyWithoutTeamsInput
  hostScrimmage: ScrimmageCreateOneWithoutHostTeamInput
  guestScrimmage: ScrimmageCreateOneWithoutGuestTeamInput
  liked: UserCreateManyWithoutLikeTeamInput
}

input TeamCreateManyWithoutLikedInput {
  create: [TeamCreateWithoutLikedInput!]
  connect: [TeamWhereUniqueInput!]
}

input TeamCreateManyWithoutMembersInput {
  create: [TeamCreateWithoutMembersInput!]
  connect: [TeamWhereUniqueInput!]
}

input TeamCreateOneWithoutGuestScrimmageInput {
  create: TeamCreateWithoutGuestScrimmageInput
  connect: TeamWhereUniqueInput
}

input TeamCreateOneWithoutHostScrimmageInput {
  create: TeamCreateWithoutHostScrimmageInput
  connect: TeamWhereUniqueInput
}

input TeamCreateWithoutGuestScrimmageInput {
  category: Category
  name: String
  description: String
  logoUrl: String
  members: InterestCreateManyWithoutTeamsInput
  hostScrimmage: ScrimmageCreateOneWithoutHostTeamInput
  liked: UserCreateManyWithoutLikeTeamInput
}

input TeamCreateWithoutHostScrimmageInput {
  category: Category
  name: String
  description: String
  logoUrl: String
  members: InterestCreateManyWithoutTeamsInput
  guestScrimmage: ScrimmageCreateOneWithoutGuestTeamInput
  liked: UserCreateManyWithoutLikeTeamInput
}

input TeamCreateWithoutLikedInput {
  category: Category
  name: String
  description: String
  logoUrl: String
  members: InterestCreateManyWithoutTeamsInput
  hostScrimmage: ScrimmageCreateOneWithoutHostTeamInput
  guestScrimmage: ScrimmageCreateOneWithoutGuestTeamInput
}

input TeamCreateWithoutMembersInput {
  category: Category
  name: String
  description: String
  logoUrl: String
  hostScrimmage: ScrimmageCreateOneWithoutHostTeamInput
  guestScrimmage: ScrimmageCreateOneWithoutGuestTeamInput
  liked: UserCreateManyWithoutLikeTeamInput
}

"""An edge in a connection."""
type TeamEdge {
  """The item at the end of the edge."""
  node: Team!

  """A cursor for use in pagination."""
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
  """Logical AND on all given filters."""
  AND: [TeamSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TeamSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
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
  members: InterestUpdateManyWithoutTeamsInput
  hostScrimmage: ScrimmageUpdateOneWithoutHostTeamInput
  guestScrimmage: ScrimmageUpdateOneWithoutGuestTeamInput
  liked: UserUpdateManyWithoutLikeTeamInput
}

input TeamUpdateManyWithoutLikedInput {
  create: [TeamCreateWithoutLikedInput!]
  connect: [TeamWhereUniqueInput!]
  disconnect: [TeamWhereUniqueInput!]
  delete: [TeamWhereUniqueInput!]
  update: [TeamUpdateWithWhereUniqueWithoutLikedInput!]
  upsert: [TeamUpsertWithWhereUniqueWithoutLikedInput!]
}

input TeamUpdateManyWithoutMembersInput {
  create: [TeamCreateWithoutMembersInput!]
  connect: [TeamWhereUniqueInput!]
  disconnect: [TeamWhereUniqueInput!]
  delete: [TeamWhereUniqueInput!]
  update: [TeamUpdateWithWhereUniqueWithoutMembersInput!]
  upsert: [TeamUpsertWithWhereUniqueWithoutMembersInput!]
}

input TeamUpdateOneWithoutGuestScrimmageInput {
  create: TeamCreateWithoutGuestScrimmageInput
  connect: TeamWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: TeamUpdateWithoutGuestScrimmageDataInput
  upsert: TeamUpsertWithoutGuestScrimmageInput
}

input TeamUpdateOneWithoutHostScrimmageInput {
  create: TeamCreateWithoutHostScrimmageInput
  connect: TeamWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: TeamUpdateWithoutHostScrimmageDataInput
  upsert: TeamUpsertWithoutHostScrimmageInput
}

input TeamUpdateWithoutGuestScrimmageDataInput {
  category: Category
  name: String
  description: String
  logoUrl: String
  members: InterestUpdateManyWithoutTeamsInput
  hostScrimmage: ScrimmageUpdateOneWithoutHostTeamInput
  liked: UserUpdateManyWithoutLikeTeamInput
}

input TeamUpdateWithoutHostScrimmageDataInput {
  category: Category
  name: String
  description: String
  logoUrl: String
  members: InterestUpdateManyWithoutTeamsInput
  guestScrimmage: ScrimmageUpdateOneWithoutGuestTeamInput
  liked: UserUpdateManyWithoutLikeTeamInput
}

input TeamUpdateWithoutLikedDataInput {
  category: Category
  name: String
  description: String
  logoUrl: String
  members: InterestUpdateManyWithoutTeamsInput
  hostScrimmage: ScrimmageUpdateOneWithoutHostTeamInput
  guestScrimmage: ScrimmageUpdateOneWithoutGuestTeamInput
}

input TeamUpdateWithoutMembersDataInput {
  category: Category
  name: String
  description: String
  logoUrl: String
  hostScrimmage: ScrimmageUpdateOneWithoutHostTeamInput
  guestScrimmage: ScrimmageUpdateOneWithoutGuestTeamInput
  liked: UserUpdateManyWithoutLikeTeamInput
}

input TeamUpdateWithWhereUniqueWithoutLikedInput {
  where: TeamWhereUniqueInput!
  data: TeamUpdateWithoutLikedDataInput!
}

input TeamUpdateWithWhereUniqueWithoutMembersInput {
  where: TeamWhereUniqueInput!
  data: TeamUpdateWithoutMembersDataInput!
}

input TeamUpsertWithoutGuestScrimmageInput {
  update: TeamUpdateWithoutGuestScrimmageDataInput!
  create: TeamCreateWithoutGuestScrimmageInput!
}

input TeamUpsertWithoutHostScrimmageInput {
  update: TeamUpdateWithoutHostScrimmageDataInput!
  create: TeamCreateWithoutHostScrimmageInput!
}

input TeamUpsertWithWhereUniqueWithoutLikedInput {
  where: TeamWhereUniqueInput!
  update: TeamUpdateWithoutLikedDataInput!
  create: TeamCreateWithoutLikedInput!
}

input TeamUpsertWithWhereUniqueWithoutMembersInput {
  where: TeamWhereUniqueInput!
  update: TeamUpdateWithoutMembersDataInput!
  create: TeamCreateWithoutMembersInput!
}

input TeamWhereInput {
  """Logical AND on all given filters."""
  AND: [TeamWhereInput!]

  """Logical OR on all given filters."""
  OR: [TeamWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TeamWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  category: Category

  """All values that are not equal to given value."""
  category_not: Category

  """All values that are contained in given list."""
  category_in: [Category!]

  """All values that are not contained in given list."""
  category_not_in: [Category!]
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  logoUrl: String

  """All values that are not equal to given value."""
  logoUrl_not: String

  """All values that are contained in given list."""
  logoUrl_in: [String!]

  """All values that are not contained in given list."""
  logoUrl_not_in: [String!]

  """All values less than the given value."""
  logoUrl_lt: String

  """All values less than or equal the given value."""
  logoUrl_lte: String

  """All values greater than the given value."""
  logoUrl_gt: String

  """All values greater than or equal the given value."""
  logoUrl_gte: String

  """All values containing the given string."""
  logoUrl_contains: String

  """All values not containing the given string."""
  logoUrl_not_contains: String

  """All values starting with the given string."""
  logoUrl_starts_with: String

  """All values not starting with the given string."""
  logoUrl_not_starts_with: String

  """All values ending with the given string."""
  logoUrl_ends_with: String

  """All values not ending with the given string."""
  logoUrl_not_ends_with: String
  members_every: InterestWhereInput
  members_some: InterestWhereInput
  members_none: InterestWhereInput
  hostScrimmage: ScrimmageWhereInput
  guestScrimmage: ScrimmageWhereInput
  liked_every: UserWhereInput
  liked_some: UserWhereInput
  liked_none: UserWhereInput
}

input TeamWhereUniqueInput {
  id: ID
  name: String
}

type User implements Node {
  id: ID!
  name: String
  introduction: String
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
  avatarUrl: String
  interests(where: InterestWhereInput, orderBy: InterestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Interest!]
  likeTeam(where: TeamWhereInput, orderBy: TeamOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Team!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String
  introduction: String
  avatarUrl: String
  events: EventCreateManyWithoutOwnerInput
  interests: InterestCreateManyWithoutUserInput
  likeTeam: TeamCreateManyWithoutLikedInput
}

input UserCreateManyWithoutLikeTeamInput {
  create: [UserCreateWithoutLikeTeamInput!]
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
  introduction: String
  avatarUrl: String
  interests: InterestCreateManyWithoutUserInput
  likeTeam: TeamCreateManyWithoutLikedInput
}

input UserCreateWithoutInterestsInput {
  name: String
  introduction: String
  avatarUrl: String
  events: EventCreateManyWithoutOwnerInput
  likeTeam: TeamCreateManyWithoutLikedInput
}

input UserCreateWithoutLikeTeamInput {
  name: String
  introduction: String
  avatarUrl: String
  events: EventCreateManyWithoutOwnerInput
  interests: InterestCreateManyWithoutUserInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  introduction_ASC
  introduction_DESC
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
  introduction: String
  avatarUrl: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
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
  introduction: String
  avatarUrl: String
  events: EventUpdateManyWithoutOwnerInput
  interests: InterestUpdateManyWithoutUserInput
  likeTeam: TeamUpdateManyWithoutLikedInput
}

input UserUpdateManyWithoutLikeTeamInput {
  create: [UserCreateWithoutLikeTeamInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutLikeTeamInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutLikeTeamInput!]
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
  introduction: String
  avatarUrl: String
  interests: InterestUpdateManyWithoutUserInput
  likeTeam: TeamUpdateManyWithoutLikedInput
}

input UserUpdateWithoutInterestsDataInput {
  name: String
  introduction: String
  avatarUrl: String
  events: EventUpdateManyWithoutOwnerInput
  likeTeam: TeamUpdateManyWithoutLikedInput
}

input UserUpdateWithoutLikeTeamDataInput {
  name: String
  introduction: String
  avatarUrl: String
  events: EventUpdateManyWithoutOwnerInput
  interests: InterestUpdateManyWithoutUserInput
}

input UserUpdateWithWhereUniqueWithoutLikeTeamInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutLikeTeamDataInput!
}

input UserUpsertWithoutEventsInput {
  update: UserUpdateWithoutEventsDataInput!
  create: UserCreateWithoutEventsInput!
}

input UserUpsertWithoutInterestsInput {
  update: UserUpdateWithoutInterestsDataInput!
  create: UserCreateWithoutInterestsInput!
}

input UserUpsertWithWhereUniqueWithoutLikeTeamInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutLikeTeamDataInput!
  create: UserCreateWithoutLikeTeamInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  introduction: String

  """All values that are not equal to given value."""
  introduction_not: String

  """All values that are contained in given list."""
  introduction_in: [String!]

  """All values that are not contained in given list."""
  introduction_not_in: [String!]

  """All values less than the given value."""
  introduction_lt: String

  """All values less than or equal the given value."""
  introduction_lte: String

  """All values greater than the given value."""
  introduction_gt: String

  """All values greater than or equal the given value."""
  introduction_gte: String

  """All values containing the given string."""
  introduction_contains: String

  """All values not containing the given string."""
  introduction_not_contains: String

  """All values starting with the given string."""
  introduction_starts_with: String

  """All values not starting with the given string."""
  introduction_not_starts_with: String

  """All values ending with the given string."""
  introduction_ends_with: String

  """All values not ending with the given string."""
  introduction_not_ends_with: String
  avatarUrl: String

  """All values that are not equal to given value."""
  avatarUrl_not: String

  """All values that are contained in given list."""
  avatarUrl_in: [String!]

  """All values that are not contained in given list."""
  avatarUrl_not_in: [String!]

  """All values less than the given value."""
  avatarUrl_lt: String

  """All values less than or equal the given value."""
  avatarUrl_lte: String

  """All values greater than the given value."""
  avatarUrl_gt: String

  """All values greater than or equal the given value."""
  avatarUrl_gte: String

  """All values containing the given string."""
  avatarUrl_contains: String

  """All values not containing the given string."""
  avatarUrl_not_contains: String

  """All values starting with the given string."""
  avatarUrl_starts_with: String

  """All values not starting with the given string."""
  avatarUrl_not_starts_with: String

  """All values ending with the given string."""
  avatarUrl_ends_with: String

  """All values not ending with the given string."""
  avatarUrl_not_ends_with: String
  events_every: EventWhereInput
  events_some: EventWhereInput
  events_none: EventWhereInput
  interests_every: InterestWhereInput
  interests_some: InterestWhereInput
  interests_none: InterestWhereInput
  likeTeam_every: TeamWhereInput
  likeTeam_some: TeamWhereInput
  likeTeam_none: TeamWhereInput
}

input UserWhereUniqueInput {
  id: ID
  name: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type LolRole =   'FILL' |
  'TOP' |
  'JUNGLE' |
  'MID' |
  'ADC' |
  'SUPPORT'

export type BasketBallRole =   'FILL' |
  'GUARD' |
  'FORWARD' |
  'CENTER'

export type PlaceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'description_ASC' |
  'description_DESC' |
  'lat_ASC' |
  'lat_DESC' |
  'lng_ASC' |
  'lng_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type AnyProfileOrderByInput =   'id_ASC' |
  'id_DESC' |
  'topic_ASC' |
  'topic_DESC' |
  'description_ASC' |
  'description_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PubgServer =   'KAKAO' |
  'KR' |
  'AS'

export type EventType =   'TOURNAMENT' |
  'LEAGUE' |
  'SCRIMMAGE' |
  'ETC'

export type ScrimmageOrderByInput =   'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type BasketBallProfileOrderByInput =   'id_ASC' |
  'id_DESC' |
  'description_ASC' |
  'description_DESC' |
  'role_ASC' |
  'role_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type TeamOrderByInput =   'id_ASC' |
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

export type EtcGamesProfileOrderByInput =   'id_ASC' |
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

export type OverwatchTier =   'BRONZE' |
  'SILVER' |
  'GOLD' |
  'PLATINUM' |
  'DIAMOND'

export type PubgProfileOrderByInput =   'id_ASC' |
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

export type OverwatchRole =   'FILL' |
  'TANK' |
  'DPS' |
  'HEAL'

export type LolTier =   'BRONZE' |
  'SILVER' |
  'GOLD' |
  'PLATINUM' |
  'DIAMOND'

export type InterestOrderByInput =   'id_ASC' |
  'id_DESC' |
  'category_ASC' |
  'category_DESC' |
  'categoryIconUrl_ASC' |
  'categoryIconUrl_DESC' |
  'firstLine_ASC' |
  'firstLine_DESC' |
  'secondLine_ASC' |
  'secondLine_DESC' |
  'thirdLine_ASC' |
  'thirdLine_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type Category =   'LOL' |
  'PUBG' |
  'OVERWATCH' |
  'ETC_GAMES' |
  'SOCCER' |
  'BASKET_BALL' |
  'ETC_SPORTS' |
  'ANY'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'introduction_ASC' |
  'introduction_DESC' |
  'avatarUrl_ASC' |
  'avatarUrl_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type SoccerPosition =   'FILL' |
  'L' |
  'C' |
  'R'

export type SoccerRole =   'FILL' |
  'GK' |
  'D' |
  'M' |
  'F'

export type EventOrderByInput =   'id_ASC' |
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
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type EtcSportsProfileOrderByInput =   'id_ASC' |
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

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type LolProfileOrderByInput =   'id_ASC' |
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

export type OverwatchProfileOrderByInput =   'id_ASC' |
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

export type SoccerProfileOrderByInput =   'id_ASC' |
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

export interface EtcGamesProfileCreateOneInput {
  create?: EtcGamesProfileCreateInput
  connect?: EtcGamesProfileWhereUniqueInput
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
  introduction?: String
  introduction_not?: String
  introduction_in?: String[] | String
  introduction_not_in?: String[] | String
  introduction_lt?: String
  introduction_lte?: String
  introduction_gt?: String
  introduction_gte?: String
  introduction_contains?: String
  introduction_not_contains?: String
  introduction_starts_with?: String
  introduction_not_starts_with?: String
  introduction_ends_with?: String
  introduction_not_ends_with?: String
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
  events_every?: EventWhereInput
  events_some?: EventWhereInput
  events_none?: EventWhereInput
  interests_every?: InterestWhereInput
  interests_some?: InterestWhereInput
  interests_none?: InterestWhereInput
  likeTeam_every?: TeamWhereInput
  likeTeam_some?: TeamWhereInput
  likeTeam_none?: TeamWhereInput
}

export interface EventCreateOneWithoutPlaceInput {
  create?: EventCreateWithoutPlaceInput
  connect?: EventWhereUniqueInput
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

export interface EventCreateWithoutPlaceInput {
  name?: String
  iconUrl?: String
  category?: Category
  type?: EventType
  startTime?: DateTime
  owner?: UserCreateOneWithoutEventsInput
  scrimmage?: ScrimmageCreateOneWithoutEventInput
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

export interface TeamCreateOneWithoutHostScrimmageInput {
  create?: TeamCreateWithoutHostScrimmageInput
  connect?: TeamWhereUniqueInput
}

export interface LolProfileUpdateDataInput {
  name?: String
  tier?: LolTier
  role?: LolRole
}

export interface TeamCreateWithoutHostScrimmageInput {
  category?: Category
  name?: String
  description?: String
  logoUrl?: String
  members?: InterestCreateManyWithoutTeamsInput
  guestScrimmage?: ScrimmageCreateOneWithoutGuestTeamInput
  liked?: UserCreateManyWithoutLikeTeamInput
}

export interface InterestCreateInput {
  category?: Category
  categoryIconUrl?: String
  firstLine?: String
  secondLine?: String
  thirdLine?: String
  user: UserCreateOneWithoutInterestsInput
  teams?: TeamCreateManyWithoutMembersInput
  lol?: LolProfileCreateOneInput
  pubg?: PubgProfileCreateOneInput
  overwatch?: OverwatchProfileCreateOneInput
  etcGames?: EtcGamesProfileCreateOneInput
  soccer?: SoccerProfileCreateOneInput
  basketBall?: BasketBallProfileCreateOneInput
  etcSports?: EtcSportsProfileCreateOneInput
  any?: AnyProfileCreateOneInput
}

export interface InterestCreateManyWithoutTeamsInput {
  create?: InterestCreateWithoutTeamsInput[] | InterestCreateWithoutTeamsInput
  connect?: InterestWhereUniqueInput[] | InterestWhereUniqueInput
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

export interface InterestCreateWithoutTeamsInput {
  category?: Category
  categoryIconUrl?: String
  firstLine?: String
  secondLine?: String
  thirdLine?: String
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

export interface UserCreateOneWithoutInterestsInput {
  create?: UserCreateWithoutInterestsInput
  connect?: UserWhereUniqueInput
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

export interface UserCreateWithoutInterestsInput {
  name?: String
  introduction?: String
  avatarUrl?: String
  events?: EventCreateManyWithoutOwnerInput
  likeTeam?: TeamCreateManyWithoutLikedInput
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

export interface TeamCreateManyWithoutLikedInput {
  create?: TeamCreateWithoutLikedInput[] | TeamCreateWithoutLikedInput
  connect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
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

export interface TeamCreateWithoutLikedInput {
  category?: Category
  name?: String
  description?: String
  logoUrl?: String
  members?: InterestCreateManyWithoutTeamsInput
  hostScrimmage?: ScrimmageCreateOneWithoutHostTeamInput
  guestScrimmage?: ScrimmageCreateOneWithoutGuestTeamInput
}

export interface PlaceSubscriptionWhereInput {
  AND?: PlaceSubscriptionWhereInput[] | PlaceSubscriptionWhereInput
  OR?: PlaceSubscriptionWhereInput[] | PlaceSubscriptionWhereInput
  NOT?: PlaceSubscriptionWhereInput[] | PlaceSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PlaceWhereInput
}

export interface ScrimmageCreateOneWithoutHostTeamInput {
  create?: ScrimmageCreateWithoutHostTeamInput
  connect?: ScrimmageWhereUniqueInput
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

export interface ScrimmageCreateWithoutHostTeamInput {
  guestTeam?: TeamCreateOneWithoutGuestScrimmageInput
  event?: EventCreateOneWithoutScrimmageInput
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

export interface TeamCreateOneWithoutGuestScrimmageInput {
  create?: TeamCreateWithoutGuestScrimmageInput
  connect?: TeamWhereUniqueInput
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

export interface TeamCreateWithoutGuestScrimmageInput {
  category?: Category
  name?: String
  description?: String
  logoUrl?: String
  members?: InterestCreateManyWithoutTeamsInput
  hostScrimmage?: ScrimmageCreateOneWithoutHostTeamInput
  liked?: UserCreateManyWithoutLikeTeamInput
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
  members_every?: InterestWhereInput
  members_some?: InterestWhereInput
  members_none?: InterestWhereInput
  hostScrimmage?: ScrimmageWhereInput
  guestScrimmage?: ScrimmageWhereInput
  liked_every?: UserWhereInput
  liked_some?: UserWhereInput
  liked_none?: UserWhereInput
}

export interface UserCreateManyWithoutLikeTeamInput {
  create?: UserCreateWithoutLikeTeamInput[] | UserCreateWithoutLikeTeamInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface AnyProfileUpdateInput {
  topic?: String
  description?: String
}

export interface UserCreateWithoutLikeTeamInput {
  name?: String
  introduction?: String
  avatarUrl?: String
  events?: EventCreateManyWithoutOwnerInput
  interests?: InterestCreateManyWithoutUserInput
}

export interface EtcSportsProfileUpdateInput {
  sportsName?: String
  stats?: String
  description?: String
}

export interface InterestCreateManyWithoutUserInput {
  create?: InterestCreateWithoutUserInput[] | InterestCreateWithoutUserInput
  connect?: InterestWhereUniqueInput[] | InterestWhereUniqueInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface InterestCreateWithoutUserInput {
  category?: Category
  categoryIconUrl?: String
  firstLine?: String
  secondLine?: String
  thirdLine?: String
  teams?: TeamCreateManyWithoutMembersInput
  lol?: LolProfileCreateOneInput
  pubg?: PubgProfileCreateOneInput
  overwatch?: OverwatchProfileCreateOneInput
  etcGames?: EtcGamesProfileCreateOneInput
  soccer?: SoccerProfileCreateOneInput
  basketBall?: BasketBallProfileCreateOneInput
  etcSports?: EtcSportsProfileCreateOneInput
  any?: AnyProfileCreateOneInput
}

export interface EventWhereUniqueInput {
  id?: ID_Input
}

export interface TeamCreateManyWithoutMembersInput {
  create?: TeamCreateWithoutMembersInput[] | TeamCreateWithoutMembersInput
  connect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
}

export interface PlaceWhereUniqueInput {
  id?: ID_Input
}

export interface TeamCreateWithoutMembersInput {
  category?: Category
  name?: String
  description?: String
  logoUrl?: String
  hostScrimmage?: ScrimmageCreateOneWithoutHostTeamInput
  guestScrimmage?: ScrimmageCreateOneWithoutGuestTeamInput
  liked?: UserCreateManyWithoutLikeTeamInput
}

export interface LolProfileWhereUniqueInput {
  id?: ID_Input
}

export interface ScrimmageCreateOneWithoutGuestTeamInput {
  create?: ScrimmageCreateWithoutGuestTeamInput
  connect?: ScrimmageWhereUniqueInput
}

export interface OverwatchProfileWhereUniqueInput {
  id?: ID_Input
}

export interface ScrimmageCreateWithoutGuestTeamInput {
  hostTeam?: TeamCreateOneWithoutHostScrimmageInput
  event?: EventCreateOneWithoutScrimmageInput
}

export interface SoccerProfileWhereUniqueInput {
  id?: ID_Input
}

export interface EventCreateOneWithoutScrimmageInput {
  create?: EventCreateWithoutScrimmageInput
  connect?: EventWhereUniqueInput
}

export interface EtcSportsProfileWhereUniqueInput {
  id?: ID_Input
}

export interface EventCreateWithoutScrimmageInput {
  name?: String
  iconUrl?: String
  category?: Category
  type?: EventType
  startTime?: DateTime
  place?: PlaceCreateOneWithoutEventInput
  owner?: UserCreateOneWithoutEventsInput
}

export interface BasketBallProfileUpdateInput {
  description?: String
  role?: BasketBallRole
}

export interface UserCreateOneWithoutEventsInput {
  create?: UserCreateWithoutEventsInput
  connect?: UserWhereUniqueInput
}

export interface EtcGamesProfileUpdateInput {
  gameName?: String
  name?: String
  stats?: String
}

export interface UserCreateWithoutEventsInput {
  name?: String
  introduction?: String
  avatarUrl?: String
  interests?: InterestCreateManyWithoutUserInput
  likeTeam?: TeamCreateManyWithoutLikedInput
}

export interface PubgProfileUpdateInput {
  name?: String
  server?: PubgServer
  rating?: Int
}

export interface LolProfileCreateOneInput {
  create?: LolProfileCreateInput
  connect?: LolProfileWhereUniqueInput
}

export interface InterestUpdateInput {
  category?: Category
  categoryIconUrl?: String
  firstLine?: String
  secondLine?: String
  thirdLine?: String
  user?: UserUpdateOneWithoutInterestsInput
  teams?: TeamUpdateManyWithoutMembersInput
  lol?: LolProfileUpdateOneInput
  pubg?: PubgProfileUpdateOneInput
  overwatch?: OverwatchProfileUpdateOneInput
  etcGames?: EtcGamesProfileUpdateOneInput
  soccer?: SoccerProfileUpdateOneInput
  basketBall?: BasketBallProfileUpdateOneInput
  etcSports?: EtcSportsProfileUpdateOneInput
  any?: AnyProfileUpdateOneInput
}

export interface LolProfileCreateInput {
  name: String
  tier: LolTier
  role: LolRole
}

export interface EventUpdateWithoutPlaceDataInput {
  name?: String
  iconUrl?: String
  category?: Category
  type?: EventType
  startTime?: DateTime
  owner?: UserUpdateOneWithoutEventsInput
  scrimmage?: ScrimmageUpdateOneWithoutEventInput
}

export interface PubgProfileCreateOneInput {
  create?: PubgProfileCreateInput
  connect?: PubgProfileWhereUniqueInput
}

export interface PlaceUpdateInput {
  description?: String
  lat?: Float
  lng?: Float
  event?: EventUpdateOneWithoutPlaceInput
}

export interface PubgProfileCreateInput {
  name: String
  server: PubgServer
  rating?: Int
}

export interface EventUpdateInput {
  name?: String
  iconUrl?: String
  category?: Category
  type?: EventType
  startTime?: DateTime
  place?: PlaceUpdateOneWithoutEventInput
  owner?: UserUpdateOneWithoutEventsInput
  scrimmage?: ScrimmageUpdateOneWithoutEventInput
}

export interface OverwatchProfileCreateOneInput {
  create?: OverwatchProfileCreateInput
  connect?: OverwatchProfileWhereUniqueInput
}

export interface EventUpsertWithWhereUniqueWithoutOwnerInput {
  where: EventWhereUniqueInput
  update: EventUpdateWithoutOwnerDataInput
  create: EventCreateWithoutOwnerInput
}

export interface OverwatchProfileCreateInput {
  name: String
  rating?: Int
  tier: OverwatchTier
  role: OverwatchRole
}

export interface TeamUpsertWithoutHostScrimmageInput {
  update: TeamUpdateWithoutHostScrimmageDataInput
  create: TeamCreateWithoutHostScrimmageInput
}

export interface PubgProfileUpdateOneInput {
  create?: PubgProfileCreateInput
  connect?: PubgProfileWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: PubgProfileUpdateDataInput
  upsert?: PubgProfileUpsertNestedInput
}

export interface UserUpsertWithoutInterestsInput {
  update: UserUpdateWithoutInterestsDataInput
  create: UserCreateWithoutInterestsInput
}

export interface EtcGamesProfileCreateInput {
  gameName: String
  name?: String
  stats?: String
}

export interface ScrimmageUpsertWithoutHostTeamInput {
  update: ScrimmageUpdateWithoutHostTeamDataInput
  create: ScrimmageCreateWithoutHostTeamInput
}

export interface SoccerProfileCreateOneInput {
  create?: SoccerProfileCreateInput
  connect?: SoccerProfileWhereUniqueInput
}

export interface UserUpsertWithWhereUniqueWithoutLikeTeamInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutLikeTeamDataInput
  create: UserCreateWithoutLikeTeamInput
}

export interface SoccerProfileCreateInput {
  description?: String
  role?: SoccerRole
  position?: SoccerPosition
}

export interface AnyProfileUpsertNestedInput {
  update: AnyProfileUpdateDataInput
  create: AnyProfileCreateInput
}

export interface BasketBallProfileCreateOneInput {
  create?: BasketBallProfileCreateInput
  connect?: BasketBallProfileWhereUniqueInput
}

export interface AnyProfileUpdateOneInput {
  create?: AnyProfileCreateInput
  connect?: AnyProfileWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: AnyProfileUpdateDataInput
  upsert?: AnyProfileUpsertNestedInput
}

export interface BasketBallProfileCreateInput {
  description?: String
  role: BasketBallRole
}

export interface EtcSportsProfileUpdateDataInput {
  sportsName?: String
  stats?: String
  description?: String
}

export interface EtcSportsProfileCreateOneInput {
  create?: EtcSportsProfileCreateInput
  connect?: EtcSportsProfileWhereUniqueInput
}

export interface BasketBallProfileUpsertNestedInput {
  update: BasketBallProfileUpdateDataInput
  create: BasketBallProfileCreateInput
}

export interface EtcSportsProfileCreateInput {
  sportsName: String
  stats?: String
  description?: String
}

export interface BasketBallProfileUpdateOneInput {
  create?: BasketBallProfileCreateInput
  connect?: BasketBallProfileWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: BasketBallProfileUpdateDataInput
  upsert?: BasketBallProfileUpsertNestedInput
}

export interface AnyProfileCreateOneInput {
  create?: AnyProfileCreateInput
  connect?: AnyProfileWhereUniqueInput
}

export interface SoccerProfileUpdateDataInput {
  description?: String
  role?: SoccerRole
  position?: SoccerPosition
}

export interface AnyProfileCreateInput {
  topic: String
  description?: String
}

export interface EtcGamesProfileUpsertNestedInput {
  update: EtcGamesProfileUpdateDataInput
  create: EtcGamesProfileCreateInput
}

export interface TeamCreateInput {
  category?: Category
  name?: String
  description?: String
  logoUrl?: String
  members?: InterestCreateManyWithoutTeamsInput
  hostScrimmage?: ScrimmageCreateOneWithoutHostTeamInput
  guestScrimmage?: ScrimmageCreateOneWithoutGuestTeamInput
  liked?: UserCreateManyWithoutLikeTeamInput
}

export interface EtcGamesProfileUpdateOneInput {
  create?: EtcGamesProfileCreateInput
  connect?: EtcGamesProfileWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: EtcGamesProfileUpdateDataInput
  upsert?: EtcGamesProfileUpsertNestedInput
}

export interface EventCreateInput {
  name?: String
  iconUrl?: String
  category?: Category
  type?: EventType
  startTime?: DateTime
  place?: PlaceCreateOneWithoutEventInput
  owner?: UserCreateOneWithoutEventsInput
  scrimmage?: ScrimmageCreateOneWithoutEventInput
}

export interface OverwatchProfileUpdateDataInput {
  name?: String
  rating?: Int
  tier?: OverwatchTier
  role?: OverwatchRole
}

export interface ScrimmageCreateInput {
  hostTeam?: TeamCreateOneWithoutHostScrimmageInput
  guestTeam?: TeamCreateOneWithoutGuestScrimmageInput
  event?: EventCreateOneWithoutScrimmageInput
}

export interface PubgProfileUpsertNestedInput {
  update: PubgProfileUpdateDataInput
  create: PubgProfileCreateInput
}

export interface PlaceCreateInput {
  description?: String
  lat?: Float
  lng?: Float
  event?: EventCreateOneWithoutPlaceInput
}

export interface UserCreateInput {
  name?: String
  introduction?: String
  avatarUrl?: String
  events?: EventCreateManyWithoutOwnerInput
  interests?: InterestCreateManyWithoutUserInput
  likeTeam?: TeamCreateManyWithoutLikedInput
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

export interface EventCreateWithoutOwnerInput {
  name?: String
  iconUrl?: String
  category?: Category
  type?: EventType
  startTime?: DateTime
  place?: PlaceCreateOneWithoutEventInput
  scrimmage?: ScrimmageCreateOneWithoutEventInput
}

export interface LolProfileUpsertNestedInput {
  update: LolProfileUpdateDataInput
  create: LolProfileCreateInput
}

export interface PlaceCreateWithoutEventInput {
  description?: String
  lat?: Float
  lng?: Float
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

export interface ScrimmageCreateWithoutEventInput {
  hostTeam?: TeamCreateOneWithoutHostScrimmageInput
  guestTeam?: TeamCreateOneWithoutGuestScrimmageInput
}

export interface UserUpdateInput {
  name?: String
  introduction?: String
  avatarUrl?: String
  events?: EventUpdateManyWithoutOwnerInput
  interests?: InterestUpdateManyWithoutUserInput
  likeTeam?: TeamUpdateManyWithoutLikedInput
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

export interface EventUpdateManyWithoutOwnerInput {
  create?: EventCreateWithoutOwnerInput[] | EventCreateWithoutOwnerInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  disconnect?: EventWhereUniqueInput[] | EventWhereUniqueInput
  delete?: EventWhereUniqueInput[] | EventWhereUniqueInput
  update?: EventUpdateWithWhereUniqueWithoutOwnerInput[] | EventUpdateWithWhereUniqueWithoutOwnerInput
  upsert?: EventUpsertWithWhereUniqueWithoutOwnerInput[] | EventUpsertWithWhereUniqueWithoutOwnerInput
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

export interface EventUpdateWithWhereUniqueWithoutOwnerInput {
  where: EventWhereUniqueInput
  data: EventUpdateWithoutOwnerDataInput
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

export interface EventUpdateWithoutOwnerDataInput {
  name?: String
  iconUrl?: String
  category?: Category
  type?: EventType
  startTime?: DateTime
  place?: PlaceUpdateOneWithoutEventInput
  scrimmage?: ScrimmageUpdateOneWithoutEventInput
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

export interface PlaceUpdateOneWithoutEventInput {
  create?: PlaceCreateWithoutEventInput
  connect?: PlaceWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: PlaceUpdateWithoutEventDataInput
  upsert?: PlaceUpsertWithoutEventInput
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
  categoryIconUrl?: String
  categoryIconUrl_not?: String
  categoryIconUrl_in?: String[] | String
  categoryIconUrl_not_in?: String[] | String
  categoryIconUrl_lt?: String
  categoryIconUrl_lte?: String
  categoryIconUrl_gt?: String
  categoryIconUrl_gte?: String
  categoryIconUrl_contains?: String
  categoryIconUrl_not_contains?: String
  categoryIconUrl_starts_with?: String
  categoryIconUrl_not_starts_with?: String
  categoryIconUrl_ends_with?: String
  categoryIconUrl_not_ends_with?: String
  firstLine?: String
  firstLine_not?: String
  firstLine_in?: String[] | String
  firstLine_not_in?: String[] | String
  firstLine_lt?: String
  firstLine_lte?: String
  firstLine_gt?: String
  firstLine_gte?: String
  firstLine_contains?: String
  firstLine_not_contains?: String
  firstLine_starts_with?: String
  firstLine_not_starts_with?: String
  firstLine_ends_with?: String
  firstLine_not_ends_with?: String
  secondLine?: String
  secondLine_not?: String
  secondLine_in?: String[] | String
  secondLine_not_in?: String[] | String
  secondLine_lt?: String
  secondLine_lte?: String
  secondLine_gt?: String
  secondLine_gte?: String
  secondLine_contains?: String
  secondLine_not_contains?: String
  secondLine_starts_with?: String
  secondLine_not_starts_with?: String
  secondLine_ends_with?: String
  secondLine_not_ends_with?: String
  thirdLine?: String
  thirdLine_not?: String
  thirdLine_in?: String[] | String
  thirdLine_not_in?: String[] | String
  thirdLine_lt?: String
  thirdLine_lte?: String
  thirdLine_gt?: String
  thirdLine_gte?: String
  thirdLine_contains?: String
  thirdLine_not_contains?: String
  thirdLine_starts_with?: String
  thirdLine_not_starts_with?: String
  thirdLine_ends_with?: String
  thirdLine_not_ends_with?: String
  user?: UserWhereInput
  teams_every?: TeamWhereInput
  teams_some?: TeamWhereInput
  teams_none?: TeamWhereInput
  lol?: LolProfileWhereInput
  pubg?: PubgProfileWhereInput
  overwatch?: OverwatchProfileWhereInput
  etcGames?: EtcGamesProfileWhereInput
  soccer?: SoccerProfileWhereInput
  basketBall?: BasketBallProfileWhereInput
  etcSports?: EtcSportsProfileWhereInput
  any?: AnyProfileWhereInput
}

export interface PlaceUpdateWithoutEventDataInput {
  description?: String
  lat?: Float
  lng?: Float
}

export interface PlaceWhereInput {
  AND?: PlaceWhereInput[] | PlaceWhereInput
  OR?: PlaceWhereInput[] | PlaceWhereInput
  NOT?: PlaceWhereInput[] | PlaceWhereInput
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
  lat?: Float
  lat_not?: Float
  lat_in?: Float[] | Float
  lat_not_in?: Float[] | Float
  lat_lt?: Float
  lat_lte?: Float
  lat_gt?: Float
  lat_gte?: Float
  lng?: Float
  lng_not?: Float
  lng_in?: Float[] | Float
  lng_not_in?: Float[] | Float
  lng_lt?: Float
  lng_lte?: Float
  lng_gt?: Float
  lng_gte?: Float
  event?: EventWhereInput
}

export interface PlaceUpsertWithoutEventInput {
  update: PlaceUpdateWithoutEventDataInput
  create: PlaceCreateWithoutEventInput
}

export interface TeamWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface ScrimmageUpdateOneWithoutEventInput {
  create?: ScrimmageCreateWithoutEventInput
  connect?: ScrimmageWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ScrimmageUpdateWithoutEventDataInput
  upsert?: ScrimmageUpsertWithoutEventInput
}

export interface InterestWhereUniqueInput {
  id?: ID_Input
}

export interface ScrimmageUpdateWithoutEventDataInput {
  hostTeam?: TeamUpdateOneWithoutHostScrimmageInput
  guestTeam?: TeamUpdateOneWithoutGuestScrimmageInput
}

export interface EtcGamesProfileWhereUniqueInput {
  id?: ID_Input
}

export interface TeamUpdateOneWithoutHostScrimmageInput {
  create?: TeamCreateWithoutHostScrimmageInput
  connect?: TeamWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: TeamUpdateWithoutHostScrimmageDataInput
  upsert?: TeamUpsertWithoutHostScrimmageInput
}

export interface AnyProfileWhereUniqueInput {
  id?: ID_Input
}

export interface TeamUpdateWithoutHostScrimmageDataInput {
  category?: Category
  name?: String
  description?: String
  logoUrl?: String
  members?: InterestUpdateManyWithoutTeamsInput
  guestScrimmage?: ScrimmageUpdateOneWithoutGuestTeamInput
  liked?: UserUpdateManyWithoutLikeTeamInput
}

export interface OverwatchProfileUpdateInput {
  name?: String
  rating?: Int
  tier?: OverwatchTier
  role?: OverwatchRole
}

export interface InterestUpdateManyWithoutTeamsInput {
  create?: InterestCreateWithoutTeamsInput[] | InterestCreateWithoutTeamsInput
  connect?: InterestWhereUniqueInput[] | InterestWhereUniqueInput
  disconnect?: InterestWhereUniqueInput[] | InterestWhereUniqueInput
  delete?: InterestWhereUniqueInput[] | InterestWhereUniqueInput
  update?: InterestUpdateWithWhereUniqueWithoutTeamsInput[] | InterestUpdateWithWhereUniqueWithoutTeamsInput
  upsert?: InterestUpsertWithWhereUniqueWithoutTeamsInput[] | InterestUpsertWithWhereUniqueWithoutTeamsInput
}

export interface EventUpsertWithoutPlaceInput {
  update: EventUpdateWithoutPlaceDataInput
  create: EventCreateWithoutPlaceInput
}

export interface InterestUpdateWithWhereUniqueWithoutTeamsInput {
  where: InterestWhereUniqueInput
  data: InterestUpdateWithoutTeamsDataInput
}

export interface ScrimmageUpdateInput {
  hostTeam?: TeamUpdateOneWithoutHostScrimmageInput
  guestTeam?: TeamUpdateOneWithoutGuestScrimmageInput
  event?: EventUpdateOneWithoutScrimmageInput
}

export interface InterestUpdateWithoutTeamsDataInput {
  category?: Category
  categoryIconUrl?: String
  firstLine?: String
  secondLine?: String
  thirdLine?: String
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

export interface ScrimmageUpsertWithoutEventInput {
  update: ScrimmageUpdateWithoutEventDataInput
  create: ScrimmageCreateWithoutEventInput
}

export interface UserUpdateOneWithoutInterestsInput {
  create?: UserCreateWithoutInterestsInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutInterestsDataInput
  upsert?: UserUpsertWithoutInterestsInput
}

export interface TeamUpsertWithWhereUniqueWithoutLikedInput {
  where: TeamWhereUniqueInput
  update: TeamUpdateWithoutLikedDataInput
  create: TeamCreateWithoutLikedInput
}

export interface UserUpdateWithoutInterestsDataInput {
  name?: String
  introduction?: String
  avatarUrl?: String
  events?: EventUpdateManyWithoutOwnerInput
  likeTeam?: TeamUpdateManyWithoutLikedInput
}

export interface InterestUpsertWithWhereUniqueWithoutUserInput {
  where: InterestWhereUniqueInput
  update: InterestUpdateWithoutUserDataInput
  create: InterestCreateWithoutUserInput
}

export interface TeamUpdateManyWithoutLikedInput {
  create?: TeamCreateWithoutLikedInput[] | TeamCreateWithoutLikedInput
  connect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
  disconnect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
  delete?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
  update?: TeamUpdateWithWhereUniqueWithoutLikedInput[] | TeamUpdateWithWhereUniqueWithoutLikedInput
  upsert?: TeamUpsertWithWhereUniqueWithoutLikedInput[] | TeamUpsertWithWhereUniqueWithoutLikedInput
}

export interface EtcSportsProfileUpsertNestedInput {
  update: EtcSportsProfileUpdateDataInput
  create: EtcSportsProfileCreateInput
}

export interface TeamUpdateWithWhereUniqueWithoutLikedInput {
  where: TeamWhereUniqueInput
  data: TeamUpdateWithoutLikedDataInput
}

export interface BasketBallProfileUpdateDataInput {
  description?: String
  role?: BasketBallRole
}

export interface TeamUpdateWithoutLikedDataInput {
  category?: Category
  name?: String
  description?: String
  logoUrl?: String
  members?: InterestUpdateManyWithoutTeamsInput
  hostScrimmage?: ScrimmageUpdateOneWithoutHostTeamInput
  guestScrimmage?: ScrimmageUpdateOneWithoutGuestTeamInput
}

export interface SoccerProfileUpdateOneInput {
  create?: SoccerProfileCreateInput
  connect?: SoccerProfileWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: SoccerProfileUpdateDataInput
  upsert?: SoccerProfileUpsertNestedInput
}

export interface ScrimmageUpdateOneWithoutHostTeamInput {
  create?: ScrimmageCreateWithoutHostTeamInput
  connect?: ScrimmageWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ScrimmageUpdateWithoutHostTeamDataInput
  upsert?: ScrimmageUpsertWithoutHostTeamInput
}

export interface OverwatchProfileUpsertNestedInput {
  update: OverwatchProfileUpdateDataInput
  create: OverwatchProfileCreateInput
}

export interface ScrimmageUpdateWithoutHostTeamDataInput {
  guestTeam?: TeamUpdateOneWithoutGuestScrimmageInput
  event?: EventUpdateOneWithoutScrimmageInput
}

export interface PubgProfileUpdateDataInput {
  name?: String
  server?: PubgServer
  rating?: Int
}

export interface TeamUpdateOneWithoutGuestScrimmageInput {
  create?: TeamCreateWithoutGuestScrimmageInput
  connect?: TeamWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: TeamUpdateWithoutGuestScrimmageDataInput
  upsert?: TeamUpsertWithoutGuestScrimmageInput
}

export interface PlaceCreateOneWithoutEventInput {
  create?: PlaceCreateWithoutEventInput
  connect?: PlaceWhereUniqueInput
}

export interface TeamUpdateWithoutGuestScrimmageDataInput {
  category?: Category
  name?: String
  description?: String
  logoUrl?: String
  members?: InterestUpdateManyWithoutTeamsInput
  hostScrimmage?: ScrimmageUpdateOneWithoutHostTeamInput
  liked?: UserUpdateManyWithoutLikeTeamInput
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

export interface UserUpdateManyWithoutLikeTeamInput {
  create?: UserCreateWithoutLikeTeamInput[] | UserCreateWithoutLikeTeamInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueWithoutLikeTeamInput[] | UserUpdateWithWhereUniqueWithoutLikeTeamInput
  upsert?: UserUpsertWithWhereUniqueWithoutLikeTeamInput[] | UserUpsertWithWhereUniqueWithoutLikeTeamInput
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

export interface UserUpdateWithWhereUniqueWithoutLikeTeamInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutLikeTeamDataInput
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

export interface UserUpdateWithoutLikeTeamDataInput {
  name?: String
  introduction?: String
  avatarUrl?: String
  events?: EventUpdateManyWithoutOwnerInput
  interests?: InterestUpdateManyWithoutUserInput
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
  place?: PlaceWhereInput
  owner?: UserWhereInput
  scrimmage?: ScrimmageWhereInput
}

export interface InterestUpdateManyWithoutUserInput {
  create?: InterestCreateWithoutUserInput[] | InterestCreateWithoutUserInput
  connect?: InterestWhereUniqueInput[] | InterestWhereUniqueInput
  disconnect?: InterestWhereUniqueInput[] | InterestWhereUniqueInput
  delete?: InterestWhereUniqueInput[] | InterestWhereUniqueInput
  update?: InterestUpdateWithWhereUniqueWithoutUserInput[] | InterestUpdateWithWhereUniqueWithoutUserInput
  upsert?: InterestUpsertWithWhereUniqueWithoutUserInput[] | InterestUpsertWithWhereUniqueWithoutUserInput
}

export interface PubgProfileWhereUniqueInput {
  id?: ID_Input
}

export interface InterestUpdateWithWhereUniqueWithoutUserInput {
  where: InterestWhereUniqueInput
  data: InterestUpdateWithoutUserDataInput
}

export interface SoccerProfileUpdateInput {
  description?: String
  role?: SoccerRole
  position?: SoccerPosition
}

export interface InterestUpdateWithoutUserDataInput {
  category?: Category
  categoryIconUrl?: String
  firstLine?: String
  secondLine?: String
  thirdLine?: String
  teams?: TeamUpdateManyWithoutMembersInput
  lol?: LolProfileUpdateOneInput
  pubg?: PubgProfileUpdateOneInput
  overwatch?: OverwatchProfileUpdateOneInput
  etcGames?: EtcGamesProfileUpdateOneInput
  soccer?: SoccerProfileUpdateOneInput
  basketBall?: BasketBallProfileUpdateOneInput
  etcSports?: EtcSportsProfileUpdateOneInput
  any?: AnyProfileUpdateOneInput
}

export interface EventUpdateOneWithoutPlaceInput {
  create?: EventCreateWithoutPlaceInput
  connect?: EventWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: EventUpdateWithoutPlaceDataInput
  upsert?: EventUpsertWithoutPlaceInput
}

export interface TeamUpdateManyWithoutMembersInput {
  create?: TeamCreateWithoutMembersInput[] | TeamCreateWithoutMembersInput
  connect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
  disconnect?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
  delete?: TeamWhereUniqueInput[] | TeamWhereUniqueInput
  update?: TeamUpdateWithWhereUniqueWithoutMembersInput[] | TeamUpdateWithWhereUniqueWithoutMembersInput
  upsert?: TeamUpsertWithWhereUniqueWithoutMembersInput[] | TeamUpsertWithWhereUniqueWithoutMembersInput
}

export interface InterestUpsertWithWhereUniqueWithoutTeamsInput {
  where: InterestWhereUniqueInput
  update: InterestUpdateWithoutTeamsDataInput
  create: InterestCreateWithoutTeamsInput
}

export interface TeamUpdateWithWhereUniqueWithoutMembersInput {
  where: TeamWhereUniqueInput
  data: TeamUpdateWithoutMembersDataInput
}

export interface AnyProfileUpdateDataInput {
  topic?: String
  description?: String
}

export interface TeamUpdateWithoutMembersDataInput {
  category?: Category
  name?: String
  description?: String
  logoUrl?: String
  hostScrimmage?: ScrimmageUpdateOneWithoutHostTeamInput
  guestScrimmage?: ScrimmageUpdateOneWithoutGuestTeamInput
  liked?: UserUpdateManyWithoutLikeTeamInput
}

export interface SoccerProfileUpsertNestedInput {
  update: SoccerProfileUpdateDataInput
  create: SoccerProfileCreateInput
}

export interface ScrimmageUpdateOneWithoutGuestTeamInput {
  create?: ScrimmageCreateWithoutGuestTeamInput
  connect?: ScrimmageWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ScrimmageUpdateWithoutGuestTeamDataInput
  upsert?: ScrimmageUpsertWithoutGuestTeamInput
}

export interface OverwatchProfileUpdateOneInput {
  create?: OverwatchProfileCreateInput
  connect?: OverwatchProfileWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: OverwatchProfileUpdateDataInput
  upsert?: OverwatchProfileUpsertNestedInput
}

export interface ScrimmageUpdateWithoutGuestTeamDataInput {
  hostTeam?: TeamUpdateOneWithoutHostScrimmageInput
  event?: EventUpdateOneWithoutScrimmageInput
}

export interface ScrimmageCreateOneWithoutEventInput {
  create?: ScrimmageCreateWithoutEventInput
  connect?: ScrimmageWhereUniqueInput
}

export interface EventUpdateOneWithoutScrimmageInput {
  create?: EventCreateWithoutScrimmageInput
  connect?: EventWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: EventUpdateWithoutScrimmageDataInput
  upsert?: EventUpsertWithoutScrimmageInput
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

export interface EventUpdateWithoutScrimmageDataInput {
  name?: String
  iconUrl?: String
  category?: Category
  type?: EventType
  startTime?: DateTime
  place?: PlaceUpdateOneWithoutEventInput
  owner?: UserUpdateOneWithoutEventsInput
}

export interface ScrimmageWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateOneWithoutEventsInput {
  create?: UserCreateWithoutEventsInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutEventsDataInput
  upsert?: UserUpsertWithoutEventsInput
}

export interface LolProfileUpdateInput {
  name?: String
  tier?: LolTier
  role?: LolRole
}

export interface UserUpdateWithoutEventsDataInput {
  name?: String
  introduction?: String
  avatarUrl?: String
  interests?: InterestUpdateManyWithoutUserInput
  likeTeam?: TeamUpdateManyWithoutLikedInput
}

export interface TeamUpsertWithoutGuestScrimmageInput {
  update: TeamUpdateWithoutGuestScrimmageDataInput
  create: TeamCreateWithoutGuestScrimmageInput
}

export interface UserUpsertWithoutEventsInput {
  update: UserUpdateWithoutEventsDataInput
  create: UserCreateWithoutEventsInput
}

export interface EtcGamesProfileUpdateDataInput {
  gameName?: String
  name?: String
  stats?: String
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

export interface LolProfileUpdateOneInput {
  create?: LolProfileCreateInput
  connect?: LolProfileWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: LolProfileUpdateDataInput
  upsert?: LolProfileUpsertNestedInput
}

export interface TeamUpsertWithWhereUniqueWithoutMembersInput {
  where: TeamWhereUniqueInput
  update: TeamUpdateWithoutMembersDataInput
  create: TeamCreateWithoutMembersInput
}

export interface ScrimmageUpsertWithoutGuestTeamInput {
  update: ScrimmageUpdateWithoutGuestTeamDataInput
  create: ScrimmageCreateWithoutGuestTeamInput
}

export interface EventUpsertWithoutScrimmageInput {
  update: EventUpdateWithoutScrimmageDataInput
  create: EventCreateWithoutScrimmageInput
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
  hostTeam?: TeamWhereInput
  guestTeam?: TeamWhereInput
  event?: EventWhereInput
}

export interface EventCreateManyWithoutOwnerInput {
  create?: EventCreateWithoutOwnerInput[] | EventCreateWithoutOwnerInput
  connect?: EventWhereUniqueInput[] | EventWhereUniqueInput
}

export interface EtcSportsProfileUpdateOneInput {
  create?: EtcSportsProfileCreateInput
  connect?: EtcSportsProfileWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: EtcSportsProfileUpdateDataInput
  upsert?: EtcSportsProfileUpsertNestedInput
}

export interface TeamUpdateInput {
  category?: Category
  name?: String
  description?: String
  logoUrl?: String
  members?: InterestUpdateManyWithoutTeamsInput
  hostScrimmage?: ScrimmageUpdateOneWithoutHostTeamInput
  guestScrimmage?: ScrimmageUpdateOneWithoutGuestTeamInput
  liked?: UserUpdateManyWithoutLikeTeamInput
}

export interface BasketBallProfileWhereUniqueInput {
  id?: ID_Input
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

export interface User extends Node {
  id: ID_Output
  name?: String
  introduction?: String
  events?: Event[]
  avatarUrl?: String
  interests?: Interest[]
  likeTeam?: Team[]
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface BasketBallProfilePreviousValues {
  id: ID_Output
  description?: String
  role: BasketBallRole
}

export interface Event extends Node {
  id: ID_Output
  name?: String
  iconUrl?: String
  category?: Category
  type?: EventType
  startTime?: DateTime
  place?: Place
  owner?: User
  scrimmage?: Scrimmage
}

export interface AggregateAnyProfile {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface AnyProfileEdge {
  node: AnyProfile
  cursor: String
}

export interface AggregateEtcSportsProfile {
  count: Int
}

export interface BatchPayload {
  count: Long
}

/*
 * A connection to a list of items.

 */
export interface EtcSportsProfileConnection {
  pageInfo: PageInfo
  edges: EtcSportsProfileEdge[]
  aggregate: AggregateEtcSportsProfile
}

export interface EtcSportsProfilePreviousValues {
  id: ID_Output
  sportsName: String
  stats?: String
  description?: String
}

/*
 * An edge in a connection.

 */
export interface BasketBallProfileEdge {
  node: BasketBallProfile
  cursor: String
}

export interface EtcSportsProfileSubscriptionPayload {
  mutation: MutationType
  node?: EtcSportsProfile
  updatedFields?: String[]
  previousValues?: EtcSportsProfilePreviousValues
}

export interface AggregateSoccerProfile {
  count: Int
}

export interface Place extends Node {
  id: ID_Output
  description?: String
  lat?: Float
  lng?: Float
  event?: Event
}

/*
 * A connection to a list of items.

 */
export interface SoccerProfileConnection {
  pageInfo: PageInfo
  edges: SoccerProfileEdge[]
  aggregate: AggregateSoccerProfile
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * An edge in a connection.

 */
export interface EtcGamesProfileEdge {
  node: EtcGamesProfile
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  name?: String
  introduction?: String
  avatarUrl?: String
}

export interface AggregateOverwatchProfile {
  count: Int
}

export interface AnyProfile extends Node {
  id: ID_Output
  topic: String
  description?: String
}

/*
 * A connection to a list of items.

 */
export interface OverwatchProfileConnection {
  pageInfo: PageInfo
  edges: OverwatchProfileEdge[]
  aggregate: AggregateOverwatchProfile
}

export interface TeamSubscriptionPayload {
  mutation: MutationType
  node?: Team
  updatedFields?: String[]
  previousValues?: TeamPreviousValues
}

/*
 * An edge in a connection.

 */
export interface PubgProfileEdge {
  node: PubgProfile
  cursor: String
}

export interface TeamPreviousValues {
  id: ID_Output
  category?: Category
  name?: String
  description?: String
  logoUrl?: String
}

export interface AggregateLolProfile {
  count: Int
}

export interface EtcSportsProfile extends Node {
  id: ID_Output
  sportsName: String
  stats?: String
  description?: String
}

/*
 * A connection to a list of items.

 */
export interface LolProfileConnection {
  pageInfo: PageInfo
  edges: LolProfileEdge[]
  aggregate: AggregateLolProfile
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
export interface InterestEdge {
  node: Interest
  cursor: String
}

export interface EventPreviousValues {
  id: ID_Output
  name?: String
  iconUrl?: String
  category?: Category
  type?: EventType
  startTime?: DateTime
}

export interface AggregatePlace {
  count: Int
}

export interface BasketBallProfile extends Node {
  id: ID_Output
  description?: String
  role: BasketBallRole
}

/*
 * A connection to a list of items.

 */
export interface PlaceConnection {
  pageInfo: PageInfo
  edges: PlaceEdge[]
  aggregate: AggregatePlace
}

export interface ScrimmageSubscriptionPayload {
  mutation: MutationType
  node?: Scrimmage
  updatedFields?: String[]
  previousValues?: ScrimmagePreviousValues
}

/*
 * An edge in a connection.

 */
export interface ScrimmageEdge {
  node: Scrimmage
  cursor: String
}

export interface ScrimmagePreviousValues {
  id: ID_Output
}

export interface AggregateEvent {
  count: Int
}

export interface SoccerProfile extends Node {
  id: ID_Output
  description?: String
  role?: SoccerRole
  position?: SoccerPosition
}

/*
 * A connection to a list of items.

 */
export interface EventConnection {
  pageInfo: PageInfo
  edges: EventEdge[]
  aggregate: AggregateEvent
}

export interface PlaceSubscriptionPayload {
  mutation: MutationType
  node?: Place
  updatedFields?: String[]
  previousValues?: PlacePreviousValues
}

/*
 * An edge in a connection.

 */
export interface TeamEdge {
  node: Team
  cursor: String
}

export interface PlacePreviousValues {
  id: ID_Output
  description?: String
  lat?: Float
  lng?: Float
}

export interface AggregateUser {
  count: Int
}

export interface EtcGamesProfile extends Node {
  id: ID_Output
  gameName: String
  name?: String
  stats?: String
}

export interface AnyProfileSubscriptionPayload {
  mutation: MutationType
  node?: AnyProfile
  updatedFields?: String[]
  previousValues?: AnyProfilePreviousValues
}

export interface InterestSubscriptionPayload {
  mutation: MutationType
  node?: Interest
  updatedFields?: String[]
  previousValues?: InterestPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface AnyProfileConnection {
  pageInfo: PageInfo
  edges: AnyProfileEdge[]
  aggregate: AggregateAnyProfile
}

export interface InterestPreviousValues {
  id: ID_Output
  category?: Category
  categoryIconUrl?: String
  firstLine?: String
  secondLine?: String
  thirdLine?: String
}

export interface AggregateBasketBallProfile {
  count: Int
}

export interface OverwatchProfile extends Node {
  id: ID_Output
  name: String
  rating?: Int
  tier: OverwatchTier
  role: OverwatchRole
}

/*
 * An edge in a connection.

 */
export interface SoccerProfileEdge {
  node: SoccerProfile
  cursor: String
}

export interface LolProfileSubscriptionPayload {
  mutation: MutationType
  node?: LolProfile
  updatedFields?: String[]
  previousValues?: LolProfilePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface EtcGamesProfileConnection {
  pageInfo: PageInfo
  edges: EtcGamesProfileEdge[]
  aggregate: AggregateEtcGamesProfile
}

export interface LolProfilePreviousValues {
  id: ID_Output
  name: String
  tier: LolTier
  role: LolRole
}

export interface AggregatePubgProfile {
  count: Int
}

export interface PubgProfile extends Node {
  id: ID_Output
  name: String
  server: PubgServer
  rating?: Int
}

/*
 * An edge in a connection.

 */
export interface LolProfileEdge {
  node: LolProfile
  cursor: String
}

export interface PubgProfileSubscriptionPayload {
  mutation: MutationType
  node?: PubgProfile
  updatedFields?: String[]
  previousValues?: PubgProfilePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface InterestConnection {
  pageInfo: PageInfo
  edges: InterestEdge[]
  aggregate: AggregateInterest
}

export interface PubgProfilePreviousValues {
  id: ID_Output
  name: String
  server: PubgServer
  rating?: Int
}

export interface AggregateScrimmage {
  count: Int
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
export interface EventEdge {
  node: Event
  cursor: String
}

export interface OverwatchProfileSubscriptionPayload {
  mutation: MutationType
  node?: OverwatchProfile
  updatedFields?: String[]
  previousValues?: OverwatchProfilePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface TeamConnection {
  pageInfo: PageInfo
  edges: TeamEdge[]
  aggregate: AggregateTeam
}

export interface OverwatchProfilePreviousValues {
  id: ID_Output
  name: String
  rating?: Int
  tier: OverwatchTier
  role: OverwatchRole
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

export interface Interest extends Node {
  id: ID_Output
  user: User
  teams?: Team[]
  category?: Category
  categoryIconUrl?: String
  firstLine?: String
  secondLine?: String
  thirdLine?: String
  lol?: LolProfile
  pubg?: PubgProfile
  overwatch?: OverwatchProfile
  etcGames?: EtcGamesProfile
  soccer?: SoccerProfile
  basketBall?: BasketBallProfile
  etcSports?: EtcSportsProfile
  any?: AnyProfile
}

/*
 * A connection to a list of items.

 */
export interface BasketBallProfileConnection {
  pageInfo: PageInfo
  edges: BasketBallProfileEdge[]
  aggregate: AggregateBasketBallProfile
}

export interface EtcGamesProfileSubscriptionPayload {
  mutation: MutationType
  node?: EtcGamesProfile
  updatedFields?: String[]
  previousValues?: EtcGamesProfilePreviousValues
}

/*
 * An edge in a connection.

 */
export interface OverwatchProfileEdge {
  node: OverwatchProfile
  cursor: String
}

export interface EtcGamesProfilePreviousValues {
  id: ID_Output
  gameName: String
  name?: String
  stats?: String
}

export interface AggregateInterest {
  count: Int
}

export interface Team extends Node {
  id: ID_Output
  category?: Category
  name?: String
  description?: String
  members?: Interest[]
  logoUrl?: String
  hostScrimmage?: Scrimmage
  guestScrimmage?: Scrimmage
  liked?: User[]
}

/*
 * A connection to a list of items.

 */
export interface ScrimmageConnection {
  pageInfo: PageInfo
  edges: ScrimmageEdge[]
  aggregate: AggregateScrimmage
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface BasketBallProfileSubscriptionPayload {
  mutation: MutationType
  node?: BasketBallProfile
  updatedFields?: String[]
  previousValues?: BasketBallProfilePreviousValues
}

export interface Scrimmage extends Node {
  id: ID_Output
  hostTeam?: Team
  guestTeam?: Team
  event?: Event
}

export interface SoccerProfilePreviousValues {
  id: ID_Output
  description?: String
  role?: SoccerRole
  position?: SoccerPosition
}

export interface SoccerProfileSubscriptionPayload {
  mutation: MutationType
  node?: SoccerProfile
  updatedFields?: String[]
  previousValues?: SoccerProfilePreviousValues
}

/*
 * An edge in a connection.

 */
export interface EtcSportsProfileEdge {
  node: EtcSportsProfile
  cursor: String
}

export interface AggregateTeam {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface PlaceEdge {
  node: Place
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface PubgProfileConnection {
  pageInfo: PageInfo
  edges: PubgProfileEdge[]
  aggregate: AggregatePubgProfile
}

export interface AggregateEtcGamesProfile {
  count: Int
}

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

export type DateTime = Date | string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
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