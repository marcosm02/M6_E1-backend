import AppDataSource from "../../data-source";
import { UserEntity } from "../../entities/user.entity";

export const deleteUserService = async (
  urlId: string,
  userId: string
): Promise<any> => {
  const userRepo = AppDataSource.getRepository(UserEntity);
  const user = await userRepo.findOneBy({ id: urlId });

  if (!user) {
    return [404, { message: "User not found" }];
  }

  if (urlId !== userId) {
    return [401, { message: "Permission denied" }];
  }

  user.isActive = false;
  await userRepo.save(user);
  return [204, {}];
};
