import { getUserId } from '../../utils'

import user from './user'
import users from './users'
import event from './event'
import events from './events'
import team from './team'
import teams from './teams'

export default {
    user,
    users,
    event,
    events,
    team,
    teams,
    myName: async(parent, args, ctx, info) => {
        const userId = getUserId(ctx)
        const user = await ctx.db.query.user({
            where: {
                id: userId
            }
        }, `{
        name
        }`)
        return user.name
    },
}