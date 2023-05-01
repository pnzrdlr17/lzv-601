const HttpError = require('../models/http-error');
const uuid = require('uuid');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const User = require('../models/user');

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError('Invalid Inputs!!', 422));
  }
  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (error) {
    return next(new HttpError('Something went wrong, please try again!', 500));
  }

  if (existingUser) {
    return next(
      new HttpError('User already exits, please Log In instead!', 422)
    );
  }

  let hashedPassowrd;
  try {
    hashedPassowrd = await bcrypt.hash(password, 12);
  } catch (error) {
    return next(new HttpError('Something went wrong, please try again!', 500));
  }

  const createdUser = new User({
    name,
    email,
    password: hashedPassowrd,
  });

  try {
    await createdUser.save();
  } catch (error) {
    return next(new HttpError('Failed to sign-up, please try again!', 500));
  }

  let token;
  try {
    token = jwt.sign(
      { userId: createdUser.id, email: createdUser.email },
      process.env.JWT_KEY,
      { expiresIn: '6h' }
    );
  } catch (error) {
    return next(new HttpError('Something went wrong, please try again!', 500));
  }

  // res.status(201).json({ user: createdUser.toObject({ getters: true }) });
  res.status(201).json({
    userId: createdUser.id,
    userName: createdUser.name,
    email: createdUser.email,
    token: token,
  });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  let identifiedUser;
  try {
    identifiedUser = await User.findOne({ email: email });
  } catch (error) {
    return next(new HttpError('Something went wrongq, please try again!', 500));
  }

  if (!identifiedUser) {
    return next(
      new HttpError('Invalid E-mail ID/Password, please try again!', 401)
    );
  }

  let isValidPassword = false;
  try {
    isValidPassword = await bcrypt.compare(password, identifiedUser.password);
  } catch (error) {
    return next(new HttpError('Something went wrongk, please try again!', 500));
  }

  if (!isValidPassword) {
    return next(
      new HttpError('Invalid E-mail ID/Password, please try again!', 401)
    );
  }

  let token;
  try {
    token = jwt.sign(
      { userId: identifiedUser.id, email: identifiedUser.email },
      process.env.JWT_KEY,
      { expiresIn: '6h' }
    );
  } catch (error) {
    return next(new HttpError('Something went wrongp, please try again!', 500));
  }

  res.json({
    userId: identifiedUser.id,
    userName: identifiedUser.name,
    email: identifiedUser.email,
    token: token,
  });
};

exports.signup = signup;
exports.login = login;
