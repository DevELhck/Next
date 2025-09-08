import { Schema, model, models, Document, Model, Types } from "mongoose";

export interface IProduct extends Document {
  _id: Types.ObjectId; 
  title: string;
  description?: string;
  price: number;
  user: Types.ObjectId; 
}

const ProductSchema = new Schema<IProduct>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User", 
  },
});

const ProductModel: Model<IProduct> =
  models.Product || model<IProduct>("Product", ProductSchema);

export default ProductModel;
