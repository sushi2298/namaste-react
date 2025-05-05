import React, { useContext, useState } from "react"
import UserContext from "../context/UserContext";

const Search = (props) => {
    const [search, setSearch] = useState('');
    const { onClickTopRated, list, setList } = props;
    const { userName, setUser } = useContext(UserContext);
    const onSearch = (event) => {
        setSearch(event.target.value)
    }
    const onSubmit = () => {
        const newList = list.filter((resto) => resto.info.name.toLowerCase().includes(search.toLowerCase()));
        setList(newList);
    }
    return (
        <div className='flex m-4 gap-2'>
            <input
                type='text'
                onChange={onSearch}
                value={search}
                data-testid="searchInput"
                className="border-solid border-black bg-gray-300 rounded-lg px-2"
            />
            <button 
                className="bg-blue-500 rounded-lg text-white font-bold text-sm px-2 py-1"
                onClick={onSubmit}
                data-testid="searchBtn"
            >
                Search
            </button>
            <button
                className="bg-green-600 rounded-lg text-white font-bold text-sm px-2 py-1"
                onClick={() => onClickTopRated()}
                data-testid="topRatedBtn"
            >Top Rated Resorants</button>
            <input 
                type="text"
                value={userName}
                onChange={(e) => setUser(e.target.value)}
                className="border-solid bg-green-200"
                data-testid="userNameInput"
            />
        </div>
    )
}

export default Search;