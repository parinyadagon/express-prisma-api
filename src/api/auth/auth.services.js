const { db } = require('../../utils/db');
const { hashToken } = require('../../utils/hashToken');

// used when we create a refresh token.
const addRefreshTokenToWhitelist = ({ jti, refreshToken, userId }) => db.refreshToken.create({
        data: {
            id: jti,
            hashedToken: hashToken(refreshToken),
            userId
        }
});

// used to check if the token sent by the client is in the database.
const findRefreshTokenById = (id) => db.refreshToken.findUnique({
    where: { id }
});

// soft delete tokens after usage.
const deleteRefreshToken = (id) => db.refreshToken.update({
    where: { id },
    data: { revoked: true }
});

const revokeTokens = (userId) => db.refreshToken.updateMany({
    where: { userId },
    data: { revoked: true }
});

module.exports = {
    addRefreshTokenToWhitelist,
    findRefreshTokenById,
    deleteRefreshToken,
    revokeTokens
};
