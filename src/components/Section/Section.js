import { useEffect, useState } from "react";
import { SLUGS, musicData } from "../../utils/constant";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import axios from "axios";
import { getTopAlbums } from "../../service/service";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";

const Cards = ({ title, type, url }) => {
    const [carouselToggle, setCarouselToggle] = useState(true);
    const handleToggle = () => {
        setCarouselToggle((carouselToggle) => !carouselToggle);
    };
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const fetchTopAlbum = async () => {
        setLoading(true);
        try {
            const response = await getTopAlbums(url);
            setData(response);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };
    useEffect(() => {
        fetchTopAlbum();
    }, []);
    if (loading) {
        return <CircularProgress color="primary" />;
    }
    return (
        <div className={styles.cardContainer}>
            <div className={styles.top}>
                <h2 className={styles.topTitle}>{title}</h2>
                {type === "album" && <h5 className={styles.toggleText} onClick={handleToggle}>
                    {!carouselToggle ? "Collapse" : "Show all"}
                </h5>}
            </div>
            {!carouselToggle ? (
                <div className={styles.card}>
                    {data !== null &&
                        data?.map((item) => (
                            <Card key={item.id} data={item} type={type} />
                        ))}
                </div>
            ) : (
                <Carousel data={data} renderComponent={data => <Card data={data} type={type} />} />
            )}
        </div>
    );
};

export default Cards;
