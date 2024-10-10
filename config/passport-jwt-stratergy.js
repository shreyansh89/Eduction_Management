const passport = require('passport');

const User = require('../model/user');

const JwtStrategy = require('passport-jwt').Strategy;

const ExtractJwt = require('passport-jwt').ExtractJwt;


var opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'JWTPR',
}

passport.use("userverify", new JwtStrategy(opts, async (record, done) => {
    // console.log(record);
    let data = await User.findById(record.userData._id);
    data ? done(null, data) : done(null, false);

}));

passport.serializeUser(function (user, done) {
    return done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    let recheck = await User.findById(id);
    recheck ? done(null, recheck) : done(null, false);
});