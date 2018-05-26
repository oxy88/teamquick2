import { getUserId } from '../../../utils'

const createInterestEtcGames = async (parent, args, ctx, info) => {
    const userId = getUserId(ctx)
    const { gameName, name, stats, description } = args

    return await ctx.db.mutation.createInterest({
        data: {
            category: "ETC_GAMES",
            categoryIconUrl: "https://cdn3.iconfinder.com/data/icons/hotel-services-facilities-2/256/Game_Room-256.png",
            firstLine: `${gameName} - ${name}`,
            secondLine: stats,
            thirdLine: description,
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