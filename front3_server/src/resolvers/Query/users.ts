const users = async (parent, args, ctx, info) => {
    return ctx.db.query.users({}, info)
}

export default users