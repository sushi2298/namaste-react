import { useEffect, useState } from "react";
import mockData from '../utils/mockRestoInfo';

const useRestoInfo = (url, id) => {
    const [data, setData] = useState();
    fetchData = async() => {
        try{
            const res = await fetch(url + id)
            const info = await res.json();
            // setData(info.data);
        } catch (err) {
            console.error("Something went wrong ", err);
        }
            setData(mockData.data);
        }
    useEffect(() => {
        fetchData();
    }, []);

    return data;
}

export default useRestoInfo;
