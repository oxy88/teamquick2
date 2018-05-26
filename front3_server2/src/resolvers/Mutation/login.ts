import * as jwt from 'jsonwebtoken'

const login = async (parent, args, ctx, info) => {
    const { name } = args
    let user = await ctx.db.query.user({
        where: {
            name
        }
    }, `{
        id
    }`)

    if (!user) {
        user = await ctx.db.mutation.createUser({
            data: {
                name
            }
        }, `{
            id
        }`)
    }

    return {
        token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
        userId: user.id
    }
}

export default login