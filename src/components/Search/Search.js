import styles from './Search.module.css'
import { SearchIcon } from '../../assets'

const Search = ({ placeholder }) => {
    return (
        <form className={styles.form}>
            <input className={styles.input} placeholder={placeholder} />
            <button className={styles.iconContainer}>
                <SearchIcon />
            </button>
        </form>
    )
}

export default Search
