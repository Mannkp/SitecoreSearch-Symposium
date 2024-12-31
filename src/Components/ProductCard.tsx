import React, { useState, useEffect } from "react";
import Image from "next/image";

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

interface ProductCardProps {
  product: ProductRecord;
}

const ImageWithCheck = ({ src, fallback, alt }: any) => {
  const [imageStatus, setImageStatus] = useState(true);
  useEffect(() => {
    fetch(src)
      .then((response) => {
        if (response.status === 404) {
          setImageStatus(false);
        } else {
          setImageStatus(true);
        }
      })
      .catch(() => {
        setImageStatus(false);
      });
  }, [src]);
  if (imageStatus === false) {
    return <img src={fallback} alt={alt} className="h-72 object-cover w-96" />;
  }
  return <img src={src} alt={alt} className="h-72 object-cover w-96 " />;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const DEFAULT_URL = "https://dummyimage.com/400x400/000/fff";

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-gray-500 border-2 mx-4 my-2">
      <div className="flex justify-center mb-4">
        <ImageWithCheck
          src={product?.ProductImage}
          fallback={DEFAULT_URL}
          alt="Example Image"
          width={200}
          height={200}
        />

        {/* <Image
          src={product.ProductImage}
          alt={product.ProductName}
          width={200}
          height={200}
          objectFit="contain"
          className="rounded-lg"
        /> */}
      </div>
      <h3 className="text-lg font-semibold mb-2">{product.ProductName}</h3>
      <p className="text-gray-600 mb-2">{product.ProductCategory}</p>
      <p className="text-gray-600">Available Stock: {product.AvailableStock}</p>
      <p className="text-gray-600">
        Warehouse Location: {product.WarehouseLocation}
      </p>
      <p className="text-gray-600">
        {product.ContainerAvailableForShipping
          ? "Containers Available for Shipping"
          : "Containers Not Available for Shipping"}
      </p>
      <p className="text-gray-600">Container Count: {product.ContainerCount}</p>
    </div>
  );
};

export default ProductCard;
