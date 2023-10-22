import styles from "./Search.module.css";
import { SearchIcon } from "../../assets";
import { useState } from "react";
import SearchResult from "../SearchResult/SearchResult";

const Search = ({ data, placeholder }) => {

    const [searchText, setSearchText] = useState("");
    const [searchResult, setSearchResult] = useState("");
    const onSubmitHandler = (e) => {
        e.preventDefault();
    }
    const handleChange = (e) => {
        setSearchText(e.target.value)
        const res = data.filter(item => item.title.includes(searchText));
        setSearchResult(res)
    }
    return (
        <>
            <form className={styles.form} onSubmit={onSubmitHandler}>
                <input className={styles.input} placeholder={placeholder} value={searchText} onChange={handleChange} />
                <button className={styles.iconContainer}>
                    <SearchIcon />
                </button>
            </form>
            {searchText !== "" && searchResult.length > 0 && <SearchResult data={searchResult} />}
        </>
    );
};

export default Search;
