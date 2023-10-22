import SearchRow from '../SearchRow/SearchRow'
import styles from './SearchResult.module.css'

const SearchResult = ({ data }) => {
    return (
        <div className={styles.search}>
            {data.map(item => <SearchRow key={item.id} item={item} />)}
        </div>
    )
}

export default SearchResult
