import { useStore } from "@/hooks/store";

export default function ProductItem({ id, title, description, isFav }) {

    const dispatch = useStore()[1];

    const toggleFavHandler = () => {
        dispatch('TOGGLE_FAV', { productId:id });
    };

    return (
        <li>
            <h1>{title}</h1>
            <p>{description}</p>
            <button
                className={!isFav ? 'button-outline' : ''}
                onClick={toggleFavHandler}
            >
                {isFav ? 'Un-Favorite' : 'Favorite'}
            </button>
        </li>
    );

}