import AppDataSource from "../../data-source";
import { UserEntity } from "../../entities/user.entity";

export const listUsersService = async (): Promise<any> => {
  const usersRepo = AppDataSource.getRepository(UserEntity);
  const users = await usersRepo.find();
  if (users.length === 0) {
    return [404, { message: "There are no registered users" }];
  }
  const activeUsers = users.filter((el) => el.isActive !== false);
  activeUsers.forEach((el) => delete el.password);
  return [200, activeUsers];
};
