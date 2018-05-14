const createTeam = async (parent, args, ctx, info) => {
    const { userId, teamName } = args

    return ctx.db.mutation.createTeam({
        data: {
            name: teamName,
            members: {
                connect: {
                    id: userId
                }
            }
        }
    }, info)
}

export default createTeam