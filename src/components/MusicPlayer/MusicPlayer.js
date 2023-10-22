import styles from './MusicPlayer.module.css'
import { songImg } from '../../assets'
import Player from '../Player/Player'

const MusicPlayer = () => {
    return (
        <div className={styles.music}>
            <div className={styles.wrapper}>
                <div className={styles.songDetail}>
                    <img src={songImg} />
                    <div>
                        <h4>Song name</h4>
                        <p>Album name</p>
                    </div>
                </div>
                <div className={styles.playerContainer}>
                    <Player />
                </div>
            </div>
        </div>
    )
}

export default MusicPlayer
