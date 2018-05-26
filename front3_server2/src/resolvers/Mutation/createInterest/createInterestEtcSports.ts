import { getUserId } from '../../../utils'

const createInterestEtcSports = async (parent, args, ctx, info) => {
    const userId = getUserId(ctx)
    const { sportsName, stats, description } = args

    return await ctx.db.mutation.createInterest({
        data: {
            category: "ETC_SPORTS",
            categoryIconUrl: "https://previews.123rf.com/images/pushnova/pushnova1510/pushnova151000237/46373132-world-of-sports-vector-illustration-of-sports-icons-basketball-soccer-tennis-boxing-wrestling-golf-b.jpg",
            firstLine: sportsName,
            secondLine: stats,
            thirdLine: description,
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