import * as jwt from 'jsonwebtoken'

import login from './login'
import createTeam from './createTeam'
import joinTeam from './joinTeam'
import createEvent from './createEvent'
import createInterestAll from './createInterest/createInterestAll'

export default {
    login,
    createTeam,
    joinTeam,
    createEvent,
    ...createInterestAll,
    makeToken: async (parent, args, ctx, info) => {
        const { userId } = args
        return jwt.sign({ userId }, process.env.APP_SECRET)
    }
}