import { getUserId } from '../../../utils'

const disLikeTeam = async (parent, args, ctx, info) => {
    const userId = getUserId(ctx)
    const { teamId } = args

    return ctx.db.mutation.updateTeam({
        where: {
            id: teamId
        },
        data: {
            liked: {
                disconnect: {
                    id: userId
                }
            }
        }
    }, info)
}

export default disLikeTeam