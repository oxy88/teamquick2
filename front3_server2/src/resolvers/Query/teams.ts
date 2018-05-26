const teams = async (parent, args, ctx, info) => {
    return ctx.db.query.teams({}, info)
}

export default teams