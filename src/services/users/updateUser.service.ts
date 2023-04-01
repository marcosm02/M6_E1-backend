import AppDataSource from "../../data-source";
import { UserEntity } from "../../entities/user.entity";
import { IUserUpdate } from "../../interfaces/users/users.interfaces";
import { userReturnedSchema } from "../../serializers/users/user.serializer";

export const updateUserService = async (
  data: IUserUpdate,
  urlId: string
): Promise<any> => {
  const userRepo = AppDataSource.getRepository(UserEntity);
  const user = await userRepo.findOneBy({ id: urlId });
  if (!user) {
    return [404, { message: "User not found" }];
  }

  const validateData = Object.keys(data);
  if (
    validateData.includes("id") ||
    validateData.includes("isActive") ||
    validateData.includes("createdAt") ||
    validateData.includes("updatedAt") ||
    validateData.includes("contacts")
  ) {
    return [401, { message: "Change not allowed" }];
  }

  const updatedUser = userRepo.create({
    ...user,
    ...data,
  });
  await userRepo.save(updatedUser);
  const updatedUserResp = await userReturnedSchema.validate(updatedUser, {
    stripUnknown: true,
  });

  return [200, updatedUserResp];
};
