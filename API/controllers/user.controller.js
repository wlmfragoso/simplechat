const User = require('../models/user');

const userCtrl = {};

userCtrl.getUsers = async (req, res, next) => {
    const users = await User.find();
    res.json(users);
};

userCtrl.createUser = async (req, res, next) => {
    const user = new User({
        id: req.body.id,
        userName: req.body.userName,
        info: req.body.info,
        phone: req.body.phone,
        lastHeartBit: req.body.lastHeartBit
    });
    await user.save();
    res.json({status: 'Usuario Registrado'});
};

userCtrl.getUser = async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findById(id);
    res.json(user);
};

userCtrl.editUser = async (req, res, next) => {
    const { id } = req.params;
    const user = {
        id: req.body.id,
        userName: req.body.userName,
        info: req.body.info,
        phone: req.body.phone,
        lastHeartBit: req.body.lastHeartBit
    };
    await User.findByIdAndUpdate(id, {$set: user}, {new: true});
    res.json({status: 'Usuario Actualizado'});
};

userCtrl.deleteUser = async (req, res, next) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({status: 'Usuario Eliminado'});
};

module.exports = userCtrl;