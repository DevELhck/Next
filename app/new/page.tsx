"use client"

import { createClientProduct } from "@/Lib/client_actions"
import { useRouter } from "next/navigation"
// import { auth } from "@/Lib/useractions"
import { ChangeEvent, FormEvent, useState } from "react"

const CreateProductForm = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    // user: auth.id || "",
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleCreate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await createClientProduct(formData)
    if (result.success) {
      router.push("/products")
    } else {
      console.error("Failed to create product", result.error)
    }
  }

  return (
    <div className="flex items-center justify-between h-screen p-5 md:p-10">
      <form
        onSubmit={handleCreate}
        className="max-w-xl w-full m-auto shadow rounded p-4"
      >
        <h3 className="font-semibold">Add New Product</h3>
        <p className="text-sm">Enter new product details</p>

        <div className="flex flex-col mt-6 gap-4">
          <div className="flex gap-4 items-center">
            <input
              value={formData.title}
              onChange={handleInputChange}
              name="title"
              required
              type="text"
              placeholder="Product Title"
              className="rounded border border-gray-300 outline-none px-2 text-sm h-10 focus:border-blue-800 flex-2"
            />
            <input
              value={formData.price}
              onChange={handleInputChange}
              name="price"
              type="number"
              required
              placeholder="Product Price"
              className="rounded border border-gray-300 outline-none px-2 text-sm h-10 focus:border-blue-800 flex-1"
            />
          </div>
          <input
            value={formData.description}
            onChange={handleInputChange}
            type="text"
            name="description"
            placeholder="Product Description"
            className="rounded border border-gray-300 outline-none px-2 text-sm h-10 focus:border-blue-800"
          />

          <button className="h-12 rounded bg-blue-800 font-medium text-white">
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateProductForm
