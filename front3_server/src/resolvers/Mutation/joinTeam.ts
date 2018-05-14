import { getUserId } from '../../utils'

const joinTeam = async (parent, args, ctx, info) => {
    const { teamId } = args
    const userId = getUserId(ctx)
    
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