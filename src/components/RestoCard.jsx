import React from "react";
import { IMG_BASE_URL } from "../utils/constants";
import { Link } from "react-router";

const RestoCard = (props) => {
    const { resto } = props;
    const { name, cuisines, areaName, avgRating, sla, cloudinaryImageId, id } = resto?.info;
    return (
        <Link to={'/restaurants/' + id } style={{ textDecoration: 'none', color: 'inherit'}} key={id} data-testid="RestoCard" >
        <div className='flex flex-col w-60 rounded-lg bg-stone-100 p-2 hover:bg-stone-200 shadow-lg'>
            <div className='rounded-lg'>
                <img className='resto-image' src={IMG_BASE_URL+cloudinaryImageId} />
            </div>
            <h4 className="font-bold py-2">{name}</h4>
            <span className="text-sm">{avgRating} stars {sla.slaString}</span>
            <span className="text-sm">{cuisines.map((res, index)=> res + (index != cuisines.length-1 ? ", " : "."))}</span>
            <span className="text-sm">{areaName}</span>
        </div>
        </Link>
    )
}

const promoted = (ComponentEx, props) => {
    return <div>
        <label>Promoted</label>
        <ComponentEx  {...props}/>
    </div>
}

export const withPromoted = (ComponentEx) => (props) => promoted(ComponentEx, props);

export default RestoCard;