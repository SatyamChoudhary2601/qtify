import { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import { getTopAlbums } from "../../service/service";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import CustomTab from "../Tab/Tab";

const Cards = ({ title, type, url }) => {
    const [carouselToggle, setCarouselToggle] = useState(true);
    const [tab, setTab] = useState("all");
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
    const handleChange = (event, newValue) => {
        setTab(newValue);
    };
    return (
        <div className={styles.cardContainer}>
            <div className={styles.top}>
                <h2 className={styles.topTitle}>{title}</h2>
                {type === "album" && (
                    <h5 className={styles.toggleText} onClick={handleToggle}>
                        {!carouselToggle ? "Collapse" : "Show all"}
                    </h5>
                )}
            </div>
            {!carouselToggle ? (
                <div className={styles.card}>
                    {data !== null &&
                        data?.map((item) => <Card key={item.id} data={item} type={type} />)}
                </div>
            ) : (
                <>
                    {type === "song" && (
                        <div>
                            <CustomTab recentTab={tab} handleChange={handleChange} />
                            {/* <Tabs
                                value={tab}
                                onChange={handleChange}
                                aria-label="basic tabs example"
                                textColor="white"
                                indicatorColor="secondary"
                                TabIndicatorProps={tabStyles}
                            >
                                {TAB.map((item) => (
                                    <Tab label={item.title} value={item.value} />
                                ))}
                            </Tabs> */}
                        </div>
                    )}
                    <Carousel
                        data={data}
                        renderComponent={(data) => <Card data={data} type={type} />}
                    />
                </>
            )}
        </div>
    );
};

export default Cards;
