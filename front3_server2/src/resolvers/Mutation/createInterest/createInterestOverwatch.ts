import { getUserId } from '../../../utils'

const createInterestOverwatch = async (parent, args, ctx, info) => {
    const userId = getUserId(ctx)
    const { name, tier, role, description } = args

    return await ctx.db.mutation.createInterest({
        data: {
            category: "OVERWATCH",
            categoryIconUrl: "https://cdn.iconverticons.com/files/png/165801040c96cb8c_256x256.png",
            firstLine: name,
            secondLine: `${tier} ${role}`,
            thirdLine: description,
            user: {
                connect: {
                    id: userId
                }
            },
            overwatch: {
                create: {
                    name: name ? name : "",
                    tier,
                    role
                }
            }
        }
    }, info)
}

export default createInterestOverwatch