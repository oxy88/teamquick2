import { getUserId } from '../../../utils'

const createInterestBasketBall = async (parent, args, ctx, info) => {
    const userId = getUserId(ctx)
    const { description, role } = args

    return await ctx.db.mutation.createInterest({
        data: {
            category: "BASKET_BALL",
            description: `${description} ${role}`,
            user: {
                connect: {
                    id: userId
                }
            },
            basketBall: {
                create: {
                    description: description ? description : "",
                    role: role
                }
            }
        }
    }, info)
}

export default createInterestBasketBall