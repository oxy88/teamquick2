import { getUserId } from '../../../utils'

const createInterestEtcGames = async (parent, args, ctx, info) => {
    const userId = getUserId(ctx)
    const { gameName, name, stats } = args

    return await ctx.db.mutation.createInterest({
        data: {
            category: "ETC_GAMES",
            description: `${gameName} ${name} ${stats}`,
            user: {
                connect: {
                    id: userId
                }
            },
            etcGames: {
                create: {
                    gameName,
                    name: name ? name : "",
                    stats: stats ? stats : ""
                }
            }
        }
    }, info)
}

export default createInterestEtcGames