import { getUserId } from '../../utils'

const createTeam = async (parent, args, ctx, info) => {
    const userId = getUserId(ctx)
    const { teamName, category, description } = args

    return ctx.db.mutation.createTeam({
        data: {
            category,
            description,
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