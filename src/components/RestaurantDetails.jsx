import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { RESTO_URL } from "../utils/constants";
import useRestoInfo from "../hooks/useRestoInfo";

const RestaurantDetails = () => {
    // const [data, setData] = useState(null);
    const {id} = useParams();
    const data = useRestoInfo(RESTO_URL, id);

    if(data == null) {
        return <Shimmer />
    }
    const { name, cuisines } = data?.cards[2]?.card?.card?.info?.name;
    const itemCards = [{id: 1, name: "rice", price: "30"}, {id: 2, name: "curry", price: "80"}, {id: 3, name: "roti", price: "30"}];
    return (
        <div>
            <h1>{data.cards[2].card.card.info.name}</h1>
            {/* <h4>{cuisines.join(",")}</h4> */}
            <h4>Recommended:</h4>
            <ul>
                {itemCards.map((card) => <li key={card.id}>{card.name}   Rs.{card.price}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantDetails;