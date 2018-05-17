import { getUserId } from '../../../utils'

const createInterestPubg = async (parent, args, ctx, info) => {
    const userId = getUserId(ctx)
    const { name, server } = args

    return await ctx.db.mutation.createInterest({
        data: {
            category: "PUBG",
            description: `${name} ${server}`,
            user: {
                connect: {
                    id: userId
                }
            },
            pubg: {
                create: {
                    name: name ? name : "",
                    server
                }
            }
        }
    }, info)
}

export default createInterestPubg