import React, { useEffect, useState } from 'react';

const Search = (props) => {
    const [searchText, SetSearchText] = useState("")

    const handleChange = (e) => {
        SetSearchText(e.target.value);
    }
    useEffect(() => {
        props.onSearch(searchText);
    }, [searchText])
    return (
        <div style={{ textAlign: 'center' }}>
            <input type="text"
                placeholder='Search Country'
                value={searchText}
                onChange={handleChange}
            />
        </div>
    );
};

export default Search;