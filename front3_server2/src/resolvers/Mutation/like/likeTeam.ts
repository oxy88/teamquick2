import { getUserId } from '../../../utils'

const likeTeam = async (parent, args, ctx, info) => {
    const userId = getUserId(ctx)
    const { teamId } = args

    return ctx.db.mutation.updateTeam({
        where: {
            id: teamId
        },
        data: {
            liked: {
                connect: {
                    id: userId
                }
            }
        }
    }, info)
}

export default likeTeam