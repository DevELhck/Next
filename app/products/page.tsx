import dbConnect from "@/Lib/dbConnect";
import ProductModel, {IProduct} from "@/models/product";
import Link from "next/link";
import { verifyUser, getUserWithId, logout } from "@/Lib/useractions";
import { redirect } from "next/navigation";

const Page = async () => {
  // auth that blocks access
  const auth = await verifyUser();
  if (!auth.success) redirect("/login");

  const user = await getUserWithId(auth.id);
  if (!user) redirect("/login");

  
  await dbConnect();
  const products = await ProductModel.find().lean<IProduct[]>(); 

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <form action={logout}>
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            Logout
          </button>
        </form>
      </div>

      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div className="shadow p-3 rounded" key={String(product._id)}>
            <h3 className="font-bold">{product.title}</h3>
            <p className="text-sm">{product.description}</p>
            <Link
              href={`/my-product/${product._id}`}
              className="brand-button text-blue-600 underline"
            >
              Edit
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
