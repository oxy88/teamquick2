import { getUserId } from '../../../utils'

const createInterestSoccer = async (parent, args, ctx, info) => {
    const userId = getUserId(ctx)
    const { description, role, position } = args

    return await ctx.db.mutation.createInterest({
        data: {
            category: "SOCCER",
            categoryIconUrl: "https://www.shareicon.net/data/128x128/2015/09/02/94726_ball_512x512.png",
            firstLine: "",
            secondLine: `${role} - ${position}`,
            thirdLine: description,
            user: {
                connect: {
                    id: userId
                }
            },
            soccer: {
                create: {
                    description: description ? description : "",
                    role: role ? role : "",
                    position: position ? position : ""
                }
            }
        }
    }, info)
}

export default createInterestSoccer