import styles from './SearchRow.module.css'

const SearchRow = ({ item }) => {
    return (
        <div className={styles.searchRow}>
            <div className={styles.song}>
                <div className={styles.imgContainer}>
                    <img src={item.image} className={styles.img} />
                </div>
                <div className={styles.songDetail}>
                    <h4 className={styles.title}>{item.title}</h4>
                    <p className={styles.artist}> Artists
                        {item.artists.map((artist) => <span>{artist}</span>)}
                    </p>
                </div>
            </div>
            <h3 className={styles.likes}>{item.likes} Follows</h3>
        </div>
    )
}

export default SearchRow
