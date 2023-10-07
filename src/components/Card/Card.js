import Button from '../Button/Button'
import styles from './Card.module.css'

const Card = ({ data }) => {
    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <img src={data.img} />
            </div>
            <div className={styles.bottom}>
                <Button className={styles.btn}>{data.follow} Follows</Button>
            </div>
            <div></div>
            {/* <img src={data.img} /> */}
            {/* <Button>Follows</Button> */}

        </div>
    )
}

export default Card
