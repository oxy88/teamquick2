const team = async (parent, args, ctx, info) => {
    const { id } = args
    
    return ctx.db.query.team({
        where: {
            id
        }
    }, info)
}

export default team