import { useEffect, useState } from "react";
import mockData from '../utils/mockRestoInfo';

const useRestoInfo = (url, id) => {
    const [data, setData] = useState();
    fetchData = async() => {
            const res = await fetch(url + id)
            const info = await res.json();
            // setData(info.data);
            setData(mockData.data);
        }
    useEffect(() => {
        fetchData();
    }, []);

    return data;
}

export default useRestoInfo;
