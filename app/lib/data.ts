import { Product, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q: string, page: string, onPage: number) => {
  const regex = new RegExp(q, "i");

  try {
    connectToDB();
    const count = await User.countDocuments({ username: { $regex: regex } });
    const users = await User.find({ username: { $regex: regex } })
      .limit(onPage)
      .skip(onPage * (parseInt(page) - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id: string) => {
  console.log(id);
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchProducts = async (q: string, page: string, onPage: number) => {
  const regex = new RegExp(q, "i");

  try {
    connectToDB();
    const count = await Product.countDocuments({ title: { $regex: regex } });
    const products = await Product.find({ title: { $regex: regex } })
      .limit(onPage)
      .skip(onPage * (parseInt(page) - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

export const fetchProduct = async (id: string) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product!");
  }
};

// // DUMMY DATA

// export const cards = [
//   {
//     id: 1,
//     title: "Total Users",
//     number: 10.928,
//     change: 12,
//   },
//   {
//     id: 2,
//     title: "Stock",
//     number: 8.236,
//     change: -2,
//   },
//   {
//     id: 3,
//     title: "Revenue",
//     number: 6.642,
//     change: 18,
//   },
// ];