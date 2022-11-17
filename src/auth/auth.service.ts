import { jwtConstants } from './constants';
import { hash } from './../utils/index';
import { UserDocument } from './../schemas/user.schema';
import { HttpException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import User from '../schemas/user.schema';
import { compare } from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('User') private userModel: Model<UserDocument>,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) { }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async verify(token: string) {
    const isBearer = token.split(' ')[0] === 'Bearer';
    const newtoken = isBearer ? token.split(' ')[1] : token;
    try {
      const payload = await this.jwtService.verifyAsync(newtoken, {
        secret: jwtConstants.secret,
      });
      return payload;
    } catch (error) {
      throw new HttpException(error, 401);
    }
  }

  async sign(user: UserDocument) {
    const payload = { email: user.email, sub: user._id };
    return this.jwtService.sign(payload);
  }

  async login(user: User) {
    const validUser = await this.userModel.findOne({ email: user.email });
    if (!validUser) {
      return new HttpException({ message: 'User not found' }, 400);
    }
    const validPassword = await compare(user.password, validUser.password);
    if (!validPassword)
      return new HttpException({ message: 'Invalid email or password' }, 400);
    const token = await this.sign(validUser);
    return { token, success: true, user: validUser };
  }

  async register(user: User) {
    try {
      const userExists = await this.userModel.findOne({ email: user.email });
      console.log(userExists);
      if (userExists) {
        return new HttpException({ message: 'User already exists' }, 400);
      }
      const hashedPass = await hash(user.password);
      const newUser = await this.userModel.create({ ...user, password: hashedPass });
      const token = await this.sign(newUser);
      console.log('created a new user');
      return { token, success: true, user: newUser };

    } catch (error) {
      console.log(error);
    }
  }
}