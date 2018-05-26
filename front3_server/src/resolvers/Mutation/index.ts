import * as jwt from 'jsonwebtoken'

import login from './login'
import createTeam from './createTeam'
import joinTeam from './joinTeam'
import createInterestAll from './createInterest/createInterestAll'
import createEvent from './createEvent'
import createScrimmage from './createScrimmage'
import likeAll from './like/likeAll'
import editIntroduction from './editIntroduction'

export default {
    login,
    createTeam,
    joinTeam,
    createEvent,
    createScrimmage,
    editIntroduction,
    ...createInterestAll,
    ...likeAll,
    makeToken: async (parent, args, ctx, info) => {
        const { userId } = args
        return jwt.sign({ userId }, process.env.APP_SECRET)
    }
}