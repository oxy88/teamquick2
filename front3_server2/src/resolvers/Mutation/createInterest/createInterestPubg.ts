import { getUserId } from '../../../utils'

const createInterestPubg = async (parent, args, ctx, info) => {
    const userId = getUserId(ctx)
    const { name, server, description } = args

    return await ctx.db.mutation.createInterest({
        data: {
            category: "PUBG",
            categoryIconUrl: "https://i.pinimg.com/736x/f0/62/a3/f062a3f214b208dd4eac506542f91422.jpg",
            firstLine: name,
            secondLine: server,
            thirdLine: description,
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