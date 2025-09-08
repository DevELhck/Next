import dbConnect from "@/Lib/dbConnect";
import ProductModel from "@/models/product";

export const dynamic = "force-static";

// Fetch all products
export const GET = async () => {
  await dbConnect();

  const products = await ProductModel.find().lean();

  return Response.json({ products });
};

//  Add a new product
export const POST = async (request: Request) => {
   {
    await dbConnect();

    const newProduct = await ProductModel.create({
        title: "New Product",
        description: "This is a new product",       
        price: 0,
        user: ""
    })

    return Response.json({ newProduct })
}};
