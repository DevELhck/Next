"use server"

import ProductModel from "@/models/product"
import dbConnect from "./dbConnect"
import { UpdateProduct } from "@/types"   // ✅ import shared type

export const getProduct = async ({ id }: { id: string }) => {
  await dbConnect()
  const product = await ProductModel.findById(id).lean()
  return product
}

export const updateClientProduct = async (product: UpdateProduct) => {
  try {
    await dbConnect()
    await ProductModel.findByIdAndUpdate(product.id, {
      ...(product.title && { title: product.title }),
      ...(product.description && { description: product.description }),
      ...(product.price !== undefined && { price: product.price }),
    })

    return { success: true }
  } catch (error) {
    console.log(error)
    return { success: false }
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
    const plainProduct = JSON.parse(JSON.stringify(product))
    return { success: true, product: plainProduct }
  } catch (error) {
    console.error(error)
    return { success: false, error: String(error) }
  }
}
