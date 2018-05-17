import { getUserId } from '../../../utils'

const createInterestEtcSports = async (parent, args, ctx, info) => {
    const userId = getUserId(ctx)
    const { sportsName, stats, description } = args

    return await ctx.db.mutation.createInterest({
        data: {
            category: "ETC_SPORTS",
            description: `${sportsName} ${stats} ${description}`,
            user: {
                connect: {
                    id: userId
                }
            },
            etcSports: {
                create: {
                    sportsName: sportsName ? sportsName : "",
                    stats: stats ? stats : "",
                    description: description ? description : ""
                }
            }
        }
    }, info)
}

export default createInterestEtcSports