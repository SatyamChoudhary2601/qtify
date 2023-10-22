import { useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import CustomTab from "../Tab/Tab";

const Section = ({ data, filteredData = null, loading, title, type, handleChange = null, tab = "all", setTab }) => {
    const [carouselToggle, setCarouselToggle] = useState(true);
    const handleToggle = () => {
        setCarouselToggle((carouselToggle) => !carouselToggle);
    };
    if (loading) {
        return (
            <div className={styles.loading}>
                <CircularProgress color="primary" />
            </div>
        );
    }
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
            {type === "song" && (
                <CustomTab recentTab={tab} handleChange={handleChange} />
            )}
            {!carouselToggle ? (
                <div className={styles.card}>
                    {data !== null &&
                        data?.map((item) => <Card key={item.id} data={item} type={type} />)}
                </div>
            ) : type === "song" ? (
                <Carousel
                    data={filteredData}
                    renderComponent={(data) => <Card data={data} type={type} />}
                />
            ) : <Carousel
                data={data}
                renderComponent={(data) => <Card data={data} type={type} />}
            />}
        </div>
    );
};

export default Section;
