import AppDataSource from "../../data-source";
import { UserEntity } from "../../entities/user.entity";

export const getOneUserService = async (urlId: string): Promise<any> => {
  const userRepo = AppDataSource.getRepository(UserEntity);
  const user = await userRepo.findOne({
    where: {
      id: urlId,
    },
    relations: {
      contacts: true,
    },
  });
  if (!user) {
    return [404, { message: "User not found" }];
  }
  delete user.password;
  return [200, user];
};
