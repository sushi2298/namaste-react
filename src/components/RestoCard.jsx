import React from "react";
import { IMG_BASE_URL } from "../utils/constants";
import { Link } from "react-router";

const RestoCard = (props) => {
    const { resto } = props;
    const { name, cuisines, areaName, avgRating, sla, cloudinaryImageId, id } = resto?.info;
    return (
        <Link to={'/restaurants/' + id } style={{ textDecoration: 'none', color: 'inherit'}} key={id} >
        <div className='resto-card'>
            <div className='resto-img-cover'>
                <img className='resto-image' src={IMG_BASE_URL+cloudinaryImageId} />
            </div>
            <h4>{name}</h4>
            <span>{avgRating} stars {sla.slaString}</span>
            <span>{cuisines.map((res, index)=> res + (index != cuisines.length-1 ? ", " : "."))}</span>
            <span>{areaName}</span>
        </div>
        </Link>
    )
}

export default RestoCard;