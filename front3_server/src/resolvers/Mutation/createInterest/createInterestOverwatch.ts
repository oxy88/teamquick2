import { getUserId } from '../../../utils'

const createInterestOverwatch = async (parent, args, ctx, info) => {
    const userId = getUserId(ctx)
    const { name, tier, role } = args

    return await ctx.db.mutation.createInterest({
        data: {
            category: "OVERWATCH",
            description: `${name} ${tier} ${role}`,
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