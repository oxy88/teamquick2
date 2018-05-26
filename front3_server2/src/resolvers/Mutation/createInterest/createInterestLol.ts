import { getUserId } from '../../../utils'

const createInterestLol = async (parent, args, ctx, info) => {
    const userId = getUserId(ctx)
    const { name, tier, role, description } = args

    return await ctx.db.mutation.createInterest({
        data: {
            category: "LOL",
            categoryIconUrl: "https://orig00.deviantart.net/6fba/f/2016/311/4/5/lolalpha_launcher_by_giorgsavv-danohsj.png",
            firstLine: name,
            secondLine: `${tier} ${role}`,
            thirdLine: description,
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