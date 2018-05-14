const joinTeam = async (parent, args, ctx, info) => {
    const { teamId, userId } = args

    return await ctx.db.mutation.updateTeam({
        where: {
            id: teamId
        },
        data: {
            members: {
                connect: {
                    id: userId
                }
            }
        }
    }, info)
}

export default joinTeam