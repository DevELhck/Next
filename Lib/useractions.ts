"use server";

import connectDB from "@/Lib/dbConnect";
import User from "@/models/user";
import { hashPassword, comparePassword } from "@/Lib/bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
// import { jwtVerify } from "jose";

//  Register User
export async function registerUser(
  username: string,
  email: string,
  password: string
) {
  await connectDB();

  const existing = await User.findOne({ email }).lean();
  if (existing) {
    return { success: false, message: "User already exists" };
  }

  const hashed = await hashPassword(password);
  const user = await User.create({ username, email, password: hashed });

  return { success: true, message: "User registered", user };
}

//  Login User 
export async function loginUser(email: string, password: string) {
  await connectDB();

  const user = await User.findOne({ email });
  if (!user) {
    return { success: false, message: "Invalid email or password" };
  }

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    return { success: false, message: "Invalid email or password" };
  }

  // create JWT token
  const token = jwt.sign({ id: String(user._id) }, process.env.JWT_SECRET!, {
    expiresIn: "2h",
  });

  // set cookie
  const cookieStore = cookies();
  (await cookieStore).set("token", token, {
    secure: process.env.NODE_ENV === "production",
    
  });

  return { success: true, message: "Login successful" };
}

//  Logout (clear cookie)
export async function logout() {
  const cookieStore = cookies();
  (await cookieStore).delete("token");
}

//  Verify User 
export async function verifyUser() {
  const cookieStore = cookies();
  const token = (await cookieStore).get("token")?.value;

  if (!token) return { success: false };

  try {
    const payload: any = jwt.verify(token, process.env.JWT_SECRET!);
    return { id: payload.id, success: true };
  } catch (error) {
    return { success: false };
  }
}


	// const payload = jwt.verify(token, process.env.JWT_SECRET!);
	// const { payload } = await jwtVerify(token, encodedSecret, {
	// 	algorithms: ['HS256']
	// })

	// return {
	// 	id: payload.id,
	// 	success: true
	// }


//   User by ID
export async function getUserWithId(id: string) {
  await connectDB();
  const user = await User.findById(id).lean();
  return user;
}
