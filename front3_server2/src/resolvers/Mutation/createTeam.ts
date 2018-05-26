const createTeam = async (parent, args, ctx, info) => {
    const { teamName, category, interestId, description } = args

    return ctx.db.mutation.createTeam({
        data: {
            description,
            category,
            name: teamName,
            members: {
                connect: {
                    id: interestId
                }
            }
        }
    }, info)
}

export default createTeam
