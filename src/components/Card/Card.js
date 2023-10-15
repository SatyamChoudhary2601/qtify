import { Box, Chip, Tab, Tabs, Tooltip } from '@mui/material';
import Button from '../Button/Button'
import styles from './Card.module.css'
import { useState } from 'react';

const tab = ["tab1", "tab2", "tab3"]
const Card = ({ data, type }) => {
    const [tab, setTab] = useState(0)
    const handleChange = (event, newValue) => {
        setTab(newValue);
        console.log(newValue, "newValue")
    };
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
                const { title, image, follows, songs } = data;
                return (
                    <>
                        <Tooltip Tooltip title={`${songs?.length} songs`} placement='top' >
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
                        </Tooltip >
                    </>
                )
            }
            default: return null;
        }

    }
    return getCard(type)

}

export default Card
