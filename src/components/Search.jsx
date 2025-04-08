import React from "react"

const Search = (props) => {
    const { onClickTopRated, search, setSearch, list, setList } = props;
    const onSearch = (event) => {
        setSearch(event.target.value)
    }
    const onSubmit = () => {
        const newList = list.filter((resto) => resto.info.name.toLowerCase().includes(search.toLowerCase()));
        setList(newList);
    }
    return (
        <div className='main-search'>
            <input type='text' onChange={onSearch} value={search} />
            <button onClick={onSubmit}>Search</button>
            <button className='top-rated-btn' onClick={() => onClickTopRated()}>Top Rated Resorants</button>
        </div>
    )
}

export default Search;