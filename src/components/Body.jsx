import React, { useEffect, useState } from "react";
import Search from "./Search";
import RestoCard from "./RestoCard";
import restorants from "../utils/mockData";
import swiggyRes from "../utils/mockSwiggy";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Body = () => {
    const [list, setList] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isTopRated, setTopRated] = useState(false);
    const [search, setSearch] = useState('');
    const [filteredRes, setFilter] = useState([]);

    const online = useOnlineStatus();
    console.log("online", online);

    const fetchSwiggy = async () => {
        // const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        // const { data } = await response.json();

        const data = swiggyRes.data;
        let restoList = [];

        data.cards.map((item) => {
            if (item?.card?.card?.id?.startsWith('restaurant_grid') || item?.card?.card?.id?.startsWith('top_brands_for_you')){
                restoList = [ ...restoList, ...item?.card?.card?.gridElements?.infoWithStyle?.restaurants]
            }
        });
        setList(restoList);
        setFilter(restoList);
        setLoading(false);
    }

    useEffect(()=> {
        if(online) fetchSwiggy();
    }, [])


    const onClickTopRated = () => {
        if(!isTopRated) {
            const newList = list.filter((res) => res.info.avgRating > 4.5)
            setTopRated(true);
            setList(newList);
            return;
        }
        setTopRated(false);
        setList(restorants);
    }
    

    if(!online) {
        return <h1>Please Check Your Internet Connection and Try Again :(</h1>
    }

    return (
    <div className='main-body'>
        <Search onClickTopRated={onClickTopRated} search={search} setSearch={setSearch} list={list} setList={setFilter}/>
        <div className="flex flex-wrap gap-2">
            {isLoading ? <Shimmer/> :
            filteredRes?.map((resto) => <RestoCard key={resto.info.id} resto={resto} />)}
        </div>
    </div>
)}

export default Body;