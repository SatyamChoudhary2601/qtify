import styles from './Faq.module.css'
import Accordian from '../Accodian/Accordian'
import { FAQ } from '../../utils/constant'

const Faq = () => {
    return (
        <div className={styles.faq}>
            <div className={styles.wrapper}>
                <div className={styles.titleContainer}>
                    <h4 className={styles.title}>FAQ</h4>
                </div>
                {FAQ.map((faq, i) => <Accordian data={faq} index={i + 1} key={faq.title} />)}
            </div>
        </div>
    )
}

export default Faq
