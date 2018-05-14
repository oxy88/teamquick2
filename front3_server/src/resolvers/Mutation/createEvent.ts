const createEvent = async (parent, args, ctx, info) => {
    const { ownerId, name, category, type, startTime, place } = args
    return ctx.db.mutation.createEvent({
        data: {
            name,
            category,
            type,
            startTime,
            place,
            owner: {
                connect: {
                    id: ownerId
                }
            }
        }
    })
}

export default createEvent