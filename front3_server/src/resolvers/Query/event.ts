const event = async (parent, args, ctx, info) => {
    const { id } = args
    return ctx.db.query.event({
        where: {
            id
        }
    }, info)
}

export default event