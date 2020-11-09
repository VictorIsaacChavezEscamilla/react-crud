import { crudHOD } from "./helpers/hods";

const { reducer, create, load, update, remove } = crudHOD(
  "users",
  "https://jsonplaceholder.typicode.com/users"
);

export default reducer;
export const getUsers = load;
export const addUser = create;
export const updateUser = update;
export const deleteUser = remove;
