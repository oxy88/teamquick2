const createScrimmage = async (parent, args, ctx, info) => {
    const { hostTeamId, startTime, description, lat, lng } = args

    const team = await ctx.db.query.team({
        where: {
            id: hostTeamId
        }
    }, `{
        category
    }`)
    
    return ctx.db.mutation.createEvent({
        data: {
            category: team.category,
            type: "SCRIMMAGE",
            startTime,
            place: {
                create: {
                    description,
                    lat,
                    lng
                }
            },
            scrimmage: {
                create: {
                    hostTeam: {
                        connect: {
                            id: hostTeamId
                        }
                    }
                }
            }
        }
    }, info)
}

export default createScrimmage