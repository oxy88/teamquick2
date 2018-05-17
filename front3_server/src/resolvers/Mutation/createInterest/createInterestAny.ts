import { getUserId } from '../../../utils'

const createInterestAny = async (parent, args, ctx, info) => {
    const userId = getUserId(ctx)
    const { topic, description } = args

    return await ctx.db.mutation.createInterest({
        data: {
            category: "ANY",
            description: `${topic} ${description}`,
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