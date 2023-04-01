import { IUser, IUserRequest } from "../../interfaces/users/users.interfaces";
import AppDataSource from "../../data-source";
import { UserEntity } from "../../entities/user.entity";
import { userReturnedSchema } from "../../serializers/users/user.serializer";

export const createUserService = async (data: IUserRequest): Promise<IUser> => {
  const userRepo = AppDataSource.getRepository(UserEntity);
  const user = userRepo.create(data);
  await userRepo.save(user);

  const userReturned = await userReturnedSchema.validate(user, {
    stripUnknown: true,
  });

  return userReturned;
};
