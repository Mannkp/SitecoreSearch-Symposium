import ProductCard from "@/Components/ProductCard";

export interface ProductRecord {
  WarehouseLocation: string;
  Region: string;
  ProductName: string;
  ProductCategory: string;
  AvailableStock: number;
  ProductImage: string;
  ContainerAvailableForShipping: boolean;
  ContainerCount: number;
}

export interface ProductData {
  record: ProductRecord[];
  metadata: {
    id: string;
    private: boolean;
    createdAt: string;
  };
}

export default function Products({ posts }: { posts: ProductData }) {
  return (
    <div className="p-4">
      <h1>Below are all products</h1>
      <div className="flex flex-wrap">
        {posts?.record?.map((item) => {
          return item !== null && <ProductCard product={item} />;
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api.jsonbin.io/v3/b/673b12a5ad19ca34f8cbf1ba"
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
