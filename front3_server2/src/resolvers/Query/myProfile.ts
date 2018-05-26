import { getUserId } from '../../utils'

const myProfile = async (parent, args, ctx, info) => {
    const userId = getUserId(ctx)
    
    return ctx.db.query.user({
        where: {
            id: userId
        }
    }, info)
}

export default myProfile