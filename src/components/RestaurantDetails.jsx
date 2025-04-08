import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { RESTO_URL } from "../utils/constants";

const RestaurantDetails = () => {
    const [data, setData] = useState(null);
    const {id} = useParams()
    fetchData = async() => {
        const res = await fetch(RESTO_URL + id)
        const info = await res.json();
        setData(info.data);
    }
    useEffect(() => {
        fetchData();
    }, []);

    
    if(data === null) {
        return <Shimmer />
    }
    const { name, cuisines } = data.cards[2].card.card.info.name
    const { itemCards } = data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
    return (
        <div>
            <h1>{data.cards[2].card.card.info.name}</h1>
            {/* <h4>{cuisines.join(",")}</h4> */}
            <h4>Recommended:</h4>
            <ul>
                {itemCards.map(({card}) => <li key={card.info.id}>{card.info.name}   Rs.{card.info.price/100}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantDetails;