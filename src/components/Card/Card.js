import { Chip, Tooltip } from '@mui/material';
import styles from './Card.module.css'

const Card = ({ data, type }) => {
    const getCard = (typeval) => {
        switch (typeval) {
            case 'album': {
                const { title, image, follows, songs } = data;
                return (
                    <Tooltip title={`${songs?.length} songs`} placement='top'>
                        <div className={styles.wrapper}>
                            <div className={styles.card}>
                                <img src={image} alt={`${title} - ${typeval}`} />
                                <div className={styles.banner}>
                                    <Chip label={`${follows} follows`} size='small' className={styles.chip} />
                                </div>
                            </div>
                            <div className={styles.titleWrapper}>
                                <p>{title}</p>
                            </div>
                        </div>
                    </Tooltip>
                )
            }
            case 'song': {
                const { title, image, likes, songs } = data;
                return (
                    <Tooltip Tooltip title={`${likes} likes`} placement='top' >
                        <div className={styles.wrapper}>
                            <div className={styles.card}>
                                <img src={image} alt={`${title} - ${typeval}`} />
                                <div className={styles.banner}>
                                    <Chip label={`${likes} follows`} size='small' className={styles.chip} />
                                </div>
                            </div>
                            <div className={styles.titleWrapper}>
                                <p>{title}</p>
                            </div>
                        </div>
                    </Tooltip >
                )
            }
            default: return null;
        }

    }
    return getCard(type)

}

export default Card
