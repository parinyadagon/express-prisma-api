const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');

const db = new PrismaClient();

const findUserByEmail = (email) => db.user.findUnique({
    where: { email }
});

const createUserByEmailAndPassword = (user) => {
    user.password = bcrypt.hashSync(user.password, 12);
    return db.user.create({ data: user });
};

const findUserById = (id) => db.user.findUnique({ where: { id } });

module.exports = {
    findUserByEmail,
    createUserByEmailAndPassword,
    findUserById
};
