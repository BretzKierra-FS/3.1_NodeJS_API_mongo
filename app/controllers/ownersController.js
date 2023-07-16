const Owner = require('../models/Owner');
exports.getOwner = async (req, res, next) => {
  const owners = await Owner.find();
  res.json({ message: `Owner - ${req.method}`, data: owners });
};

exports.getOwnerById = async (req, res, next) => {
  const ownerId = req.params.ownerId;
  const owner = await Owner.findById(ownerId);
  res.json({ message: `Owner - ${req.method}`, id: ownerId, data: owner });
};

exports.createOwner = async (req, res, next) => {
  const { owner } = req.body;
  const newOwner = await Owner.create(owner);
  const ownerId = req.params.ownerId;
  res.json({ message: `Owner - ${req.method}`, id: ownerId, data: newOwner });
};

exports.updateOwner = async (req, res, next) => {
  const ownerId = req.params.ownerId;
  const owner = await Owner.findByIdAndUpdate(ownerId, req.body, {
    new: true,
    runValidators: true,
  });
  res.json({ message: `Owner - ${req.method}`, id: ownerId, data: owner });
};

exports.deleteOwner = async (req, res, next) => {
  const ownerId = req.params.ownerId;
  const owner = await Owner.findByIdAndDelete(ownerId);
  res.json({ message: `Owner - ${req.method}`, id: ownerId });
};
