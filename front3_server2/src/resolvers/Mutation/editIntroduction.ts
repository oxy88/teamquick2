import { getUserId } from '../../utils'

const editIntroduction = async (parent, args, ctx, info) => {
    const { introduction } = args
    const userId = getUserId(ctx)

    return ctx.db.mutation.updateUser({
        where: {
            id: userId
        },
        data: {
            introduction
        }
    }, info)
}

export default editIntroduction