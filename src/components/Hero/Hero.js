import { HeadphoneIcon } from '../../assets'
import styles from './Hero.module.css'

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.textContainer}>
                <p>100 Thousand Songs, ad-free</p>
                <p>Over thousands podcast episodes</p>
            </div>
            <HeadphoneIcon />
        </section>
    )
}

export default Hero
