import { getUserId } from '../../../utils'

const createInterestAny = async (parent, args, ctx, info) => {
    const userId = getUserId(ctx)
    const { topic, description } = args

    return await ctx.db.mutation.createInterest({
        data: {
            category: "ANY",
            categoryIconUrl: "https://www.shareicon.net/data/128x128/2015/09/20/643482_question_512x512.png",
            firstLine: "",
            secondLine: topic,
            thirdLine: description,
            user: {
                connect: {
                    id: userId
                }
            },
            any: {
                create: {
                    topic,
                    description: description ? description : ""
                }
            }
        }
    }, info)
}

export default createInterestAny