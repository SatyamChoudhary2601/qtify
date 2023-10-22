import { PlayIcon } from '../../assets'
import styles from './Player.module.css'

const Player = () => {
    return (
        <div className={styles.player}>
            <PlayIcon />
            <div className={styles.track}>
                <p>00:38</p>
                <div className={styles.trackOuter}>
                    <div className={styles.trackInner}></div>
                </div>
                <p>03:38</p>
            </div>
        </div>
    )
}

export default Player
