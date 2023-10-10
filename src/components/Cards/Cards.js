import { useEffect, useState } from 'react'
import { musicData } from '../../utils/constant'
import Card from '../Card/Card'
import styles from './Cards.module.css'
import axios from "axios"

const Cards = () => {
    const [data, setData] = useState(null);
    const getMusic = async () => {
        try {
            const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top")
            console.log(response)
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getMusic()
    }, [])
    return (
        <div className={styles.cardContainer}>
            <div className={styles.top}>
                <h2 className={styles.topTitle}>Top album</h2>
                <h5 className={styles.showAll}>Show all</h5>
            </div>
            <div className={styles.card}>
                {data.map(item => <Card key={item.id} data={item} />)}
            </div>
        </div>
    )
}

export default Cards
