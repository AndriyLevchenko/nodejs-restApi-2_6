const { User } = require('../../models/users');

async function createUser(userData) {
    const { email, password, subscription, avatarURL, verifyToken, verified  } = userData;
    return await User.create({ email, password, subscription, avatarURL, verifyToken, verified });
};

module.exports = { createUser };