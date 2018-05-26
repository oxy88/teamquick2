import { getUserId } from '../../../utils'

const createInterestBasketBall = async (parent, args, ctx, info) => {
    const userId = getUserId(ctx)
    const { description, role } = args

    return await ctx.db.mutation.createInterest({
        data: {
            category: "BASKET_BALL",
            categoryIconUrl: "https://www.shareicon.net/data/128x128/2017/04/22/885145_ball_512x512.png",
            firstLine: "",
            secondLine: role,
            thirdLine: description,
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