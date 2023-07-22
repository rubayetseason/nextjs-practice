import { useRouter } from "next/router";

const ProductDetailPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>This is dynamic page: {router.query.productId}</h1>
    </div>
  );
};

export default ProductDetailPage;
