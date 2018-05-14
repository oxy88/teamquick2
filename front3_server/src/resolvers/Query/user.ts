const user = async (parent, args, ctx, info) => {
    const { id } = args
    return ctx.db.query.user({
        where: {
            id
        }
    }, info)
}

export default user