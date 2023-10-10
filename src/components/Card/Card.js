import Button from '../Button/Button'
import styles from './Card.module.css'

const Card = ({ data }) => {
    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <img src={data.image} />
            </div>
            <div className={styles.bottom}>
                <Button className={styles.btn}>{data.follows} Follows</Button>
            </div>
            <p className={styles.title}>{data.title}</p>
        </div>
    )
}

export default Card
