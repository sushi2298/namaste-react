import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { ITEM_URL, RESTO_URL } from "../utils/constants";
import useRestoInfo from "../hooks/useRestoInfo";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/slices/cartSlice";

const RestaurantDetails = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const { id } = useParams();
    const data = useRestoInfo(RESTO_URL, id);

    if (data == null) {
        return <Shimmer />
    }
    const accList = data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    return (
        <div className="justify-items-center" key={`${id}`} >
            
            {accList.map(({card}, index) => {
                if(card?.card?.title){
                    const info = card.card.itemCards;
                    return <Accordian key={`${card.card.title} ${index}`} label={card.card.title} data={info} id={index} openIndex={openIndex} setOpenIndex={setOpenIndex} />
                }
            })}
        </div>
    )
}

const Accordian = ({ id,label, openIndex, setOpenIndex, data }) => {

    const onClickAcc = () => { 
        if(id !== openIndex) setOpenIndex(id);
        else if(id === openIndex) setOpenIndex();
    }

    return (
        <div className="shadow p-4 flex w-1/2 flex-col my-4" >
            <div className="flex justify-between">
                <h1 className="font-extrabold">{label}</h1>
                <button onClick={onClickAcc} data-testid={`accordian_${label}`} > ⏬ </button>
            </div>
            {
                id == openIndex &&
                data.map(({card}) => <ItemCard item={card.info} key={card.info.id} />)
            }
        </div>
    )
}

export const ItemCard = ({item}) => {

    const dispatch = useDispatch();

    const onAdd = (item) => {
        dispatch(addItem(item))
    }
    return (
        <div className="flex justify-between border-b-1 py-4" data-testid="foodItems">
            <div className="flex-col gap-4">
                <div className="font-bold">{item.name}</div>
                <div>Rs.{item.price / 100}</div>
                <div className="text-emerald-800 font-bold">{item.ratings?.aggregatedRating?.rating}</div>
                <div>{item.description}</div>
            </div>
            <div className="flex justify-center h-[158]">
                <img src={ITEM_URL + item.imageId} height={144} width={156} className="rounded-2xl m-[14]"/>
                <button 
                    className="absolute self-end font-bold text-emerald-700 bg-white rounded-md px-8 py-1 shadow cursor-pointer hover:bg-gray-300"
                    onClick={() => onAdd(item)}
                    
                >
                    ADD
                </button>
            </div>
        </div>
    )
}

export default RestaurantDetails;