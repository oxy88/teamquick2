import { getUserId } from '../../utils'

const createEvent = async (parent, args, ctx, info) => {
    const userId = getUserId(ctx)
    const { name, category, type, startTime, description, lat, lng } = args

    return ctx.db.mutation.createEvent({
        data: {
            name,
            category,
            type,
            startTime,
            place : {
                create: {
                    description,
                    lat,
                    lng
                }
            },
            owner: {
                connect: {
                    id: userId
                }
            }
        }
    })
}

export default createEvent