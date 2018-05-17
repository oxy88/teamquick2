import { getUserId } from '../../../utils'

const createInterestSoccer = async (parent, args, ctx, info) => {
    const userId = getUserId(ctx)
    const { description, role, position } = args

    return await ctx.db.mutation.createInterest({
        data: {
            category: "SOCCER",
            description: `${description} ${role} ${position}`,
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