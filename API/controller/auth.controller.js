import bcrypt from "bcrypt";

export const register = async (req, res) => {
  //db operation
  const { username, email, password } = req.body;
     const hashedPassword = await bcrypt.hash(password, 10);

    console.log(hashedPassword);

};

export const login = (req, res) => {
  //db operation
};
export const logout = (req, res) => {
  //db operation
};
