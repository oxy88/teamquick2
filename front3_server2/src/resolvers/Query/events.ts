const events = async (parent, args, ctx, info) => {
    return ctx.db.query.events({}, info)
}

export default events