import { useStore } from "@/hooks/store";
import ProductItem from "@/components/ProductItem.tsx";

const Products = props => {
  const state = useStore()[0];

    return (
        <ul className="products-list grid gap-4">
            👇
            {state.products.map(prod => (
                <ProductItem
                    key={prod.id}
                    id={prod.id}
                    title={prod.title}
                    description={prod.description}
                    isFav={prod.isFavorite}
                />
            ))}
        </ul>
    );
};

export default Products;
