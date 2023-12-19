import ProductForm from "@/components/ProductForm";
import Layout from "@/components/Layout";

export default function NewProduct() {
  return (
    <Layout>
      <h1>New Best Selling Product</h1>
      <ProductForm api="/api/bestsellings"/>
    </Layout>
  );
}