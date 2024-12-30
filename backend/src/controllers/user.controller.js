import UserModel from '../models/user.model';
import ErrorHandler from '../utils/ErrorHandler';

export async function CreateUSer(req, res) {
  const { Name, email, password } = req.body;

  const CheckUserPresent = await UserModel.findOne({
    email: email,
  });

  if (CheckUserPresent) {
    return new ErrorHandler('Already Present in DB', 400);
  }
  const newUser = new UserModel({
    Name: Name,
    email: email,
    password: password,
  });

  await newUser.save();

  return res.send('User Created Successfully');
}
