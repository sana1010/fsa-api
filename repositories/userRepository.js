const UserModel = require('../models/userModel');

const add = (data) => {
    const user = new UserModel(data);
    return user.save(); // async
};

const getUsers = () => {
    const projection = { __v: 0, _id: 0};
    const filter = {};
    return UserModel.find(filter, projection);
}

module.exports = { add, getUsers };