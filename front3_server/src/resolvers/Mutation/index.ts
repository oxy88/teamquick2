import * as jwt from 'jsonwebtoken'

import login from './login'
import createTeam from './createTeam'
import joinTeam from './joinTeam'
import createInterestAll from './createInterest/createInterestAll'
import createEvent from './createEvent'
import createScrimmage from './createScrimmage'

export default {
    login,
    createTeam,
    joinTeam,
    createEvent,
    createScrimmage,
    ...createInterestAll,
    makeToken: async (parent, args, ctx, info) => {
        const { userId } = args
        return jwt.sign({ userId }, process.env.APP_SECRET)
    }
}