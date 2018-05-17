import { getUserId } from '../../utils'

const createEvent = async (parent, args, ctx, info) => {
    const userId = getUserId(ctx)
    const { name, category, type, startTime, place } = args
    return ctx.db.mutation.createEvent({
        data: {
            name,
            category,
            type,
            startTime,
            place,
            owner: {
                connect: {
                    id: userId
                }
            }
        }
    }, info)
}

export default createEvent