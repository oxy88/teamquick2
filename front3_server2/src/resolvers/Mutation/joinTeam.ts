const joinTeam = async (parent, args, ctx, info) => {
    const { teamId, interestId } = args
    
    return await ctx.db.mutation.updateTeam({
        where: {
            id: teamId
        },
        data: {
            members: {
                connect: {
                    id: interestId
                }
            }
        }
    }, info)
}

export default joinTeam