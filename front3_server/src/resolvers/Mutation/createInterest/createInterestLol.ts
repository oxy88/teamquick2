import { getUserId } from '../../../utils'

const createInterestLol = async (parent, args, ctx, info) => {
    const userId = getUserId(ctx)
    const { name, tier, role } = args

    return await ctx.db.mutation.createInterest({
        data: {
            category: "LOL",
            description: `${name} ${tier} ${role}`,
            user: {
                connect: {
                    id: userId
                }
            },
            lol: {
                create: {
                    name: name ? name : "",
                    tier,
                    role
                }
            }
        }
    }, info)
}

export default createInterestLol