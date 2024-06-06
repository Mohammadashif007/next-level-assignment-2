import { z } from 'zod';

//!Zod schema for a variant
const variantValidationSchema = z.object({
  type: z.string().min(1, 'Type is required'),
  value: z.string().min(1, 'Value is required'),
});

//! Zod schema for inventory
const inventoryValidationSchema = z.object({
  quantity: z.number().min(0, 'Quantity must be a positive number'),
  inStock: z.boolean(),
});

//! Zod schema for product
const productValidationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.number().min(0, 'Price must be a positive number'),
  category: z.string().min(1, 'Category is required'),
  tags: z.array(z.string().min(1, 'Tag cannot be empty')),
  variants: z.array(variantValidationSchema),
  inventory: inventoryValidationSchema,
});

export default productValidationSchema;
