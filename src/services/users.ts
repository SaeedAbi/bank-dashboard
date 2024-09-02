import { UserType } from "@/interfaces";
import { users } from "@/db";
import { userSchema } from "@/validation/user";

// in-memory database
const userDatabase: UserType[] = [...users];

export async function createUser(user: UserType): Promise<UserType> {
  try {
    // validate user data
    await userSchema.validate(user);

    // check if user with the same id already exists
    if (userDatabase.some((existingUser) => existingUser.id === user.id)) {
      throw new Error("User number already exists.");
    }

    userDatabase.push(user);
    return user;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong"
    );
  }
}
export async function getUserById(id: UserType["id"]): Promise<UserType> {
  const user = userDatabase.find((user) => user.id === id);

  if (!user) {
    throw new Error("User not found.");
  }

  return user;
}
export async function getAllUsers(): Promise<UserType[]> {
  return userDatabase;
}
export async function updateUser(
  id: UserType["id"],
  updatedUser: Partial<UserType>
): Promise<UserType> {
  try {
    // validate updated user data
    if (updatedUser.id && updatedUser.id !== id) {
      throw new Error("User cannot be updated.");
    }

    // find the user to update
    const userIndex = userDatabase.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      throw new Error("User not found.");
    }

    // merge updated user data
    const existingUser = userDatabase[userIndex];
    const newUser = { ...existingUser, ...updatedUser };

    // validate merged user data
    await userSchema.validate(newUser);

    userDatabase[userIndex] = newUser;
    return newUser;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong"
    );
  }
}
export async function deleteUser(id: UserType["id"]): Promise<boolean> {
  const userIndex = userDatabase.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    throw new Error("User not found.");
  }

  // user deleted successfully
  userDatabase.splice(userIndex, 1);
  return true;
}
