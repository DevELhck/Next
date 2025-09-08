"use server"

import ProductModel from "@/models/product";
import dbConnect from "./dbConnect";

interface UpdateProduct {
	title: string,
	description: string,
	price: number,
	id: string
}


export const getProduct = async ({ id }: { id: string }) => {
	await dbConnect()
	// const product = await ProductModel.findById(id)
	const product = await ProductModel.findById(id).lean()

	return product;
	// return JSON.parse(JSON.stringify(product));
	// return {
	// 	price: product?.price,
	// 	description: product?.description,
	// 	title: product?.title,
	// }
}

// to be used on the client
export const updateClientProduct = async (product: UpdateProduct) => {

	try {
		await dbConnect()
		await ProductModel.findByIdAndUpdate(product.id, {
			title: product.title,
			description: product.description,
			price: product.price,
		})

		return {
			success: true
		};
	} catch (error) {
		console.log(error)
		return {
			success: false
		};
	}
}


interface CreateProduct {
  title: string
  description: string
  price: number
}

export async function createClientProduct(data: CreateProduct) {
  try {
    await dbConnect()
    const product = await ProductModel.create(data)

    // Convert Mongoose document to plain object
    const plainProduct = JSON.parse(JSON.stringify(product))

    return { success: true, product: plainProduct }
  } catch (error) {
    console.error(error)
    return { success: false, error: String(error) }
  }
}