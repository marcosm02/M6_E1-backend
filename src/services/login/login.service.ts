import { IUserLogin } from "../../interfaces/login/login.interface";
import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import { UserEntity } from "../../entities/user.entity";
import "dotenv/config";

export const loginService = async (data: IUserLogin): Promise<any> => {
  const userRepo = AppDataSource.getRepository(UserEntity);
  const user = await userRepo.findOneBy({ email: data.email });

  const comparePassword = await compare(data.password, user.password);
  if (!comparePassword) {
    return [403, { message: "Invalid username or password" }];
  }

  const token = jwt.sign(
    {
      isActive: user.isActive,
    },
    process.env.SECRET_KEY,
    {
      subject: user.id,
      expiresIn: "24h",
    }
  );

  return [200, { token: token, userId: user.id }];
};
