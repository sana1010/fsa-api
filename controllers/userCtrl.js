const userRepository = require('../repositories/userRepository');

const alreadyExists = (e) => e.message && e.message.indexOf('duplicate key') > -1

const hasErrors = (e) => e._message === 'user validation failed'

const handleErrors = (e, res) => {
    if (alreadyExists(e))
        res.status(409).send('User already exists');
    else if (hasErrors(e))
        res.status(400).json(e.errors);
    else
        res.status(500).send('Internal Server Error');
}
const register = async (req, res) => {
    try {
        const data = req.body;
        data.createdAt = Date.now();
        await userRepository.add(data);
        res.status(201);
        res.send();
    } catch (e) {
        handleErrors(e, res);
    }
};
const getUsers = async (req, res) => {
    try {
        const users = await userRepository.getUsers();

        res.status(200);
        res.json(users);
    } catch (e) {
        console.log(e);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = {getUsers, handleErrors,register};