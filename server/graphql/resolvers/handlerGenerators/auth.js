import User from '../../../models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function createUser(args) {
  try {
    const {
      email,
      password,
      confirm,
      firstName,
      lastName
    } = args.userInput;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('User already exists!');
    }
    if (password !== confirm) {
      throw new Error('Passwords are inconsistent!');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      email,
      password: hashedPassword,
      firstName,
      lastName
    }, (err) => { if (err) throw err });
    user.save();
    const token = jwt.sign({ id: user._id }, 'mysecret');

    return { token, password: null, ...user._doc }
  }
  catch (err) {
    throw err;
  }
}
export async function login(args) {
  try {
    const user = await User.findOne({ email: args.email });
    if (!user) throw new Error('Email does not exist');
    const passwordIsValid = await bcrypt.compareSync(args.password, user.password);
    if (!passwordIsValid) throw new Error('Password incorrect');
    const token = jwt.sign({ id: user._id }, 'mysecret');
    return { token, password: null, ...user._doc }
  }
  catch (err) {
    throw err;
  }
}

export async function getUserDetails(args) {
  try {
    const {
      _id,
    } = args
    const user = await User.findOne({ _id: _id })
    return { ...user._doc, password: null };
  }
  catch (err) {
    throw err;
  }
}