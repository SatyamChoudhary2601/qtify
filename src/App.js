import Section from "./components/Section/Section";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { BACKEND_ENDPOINT, SLUGS } from "./utils/constant";
import { Divider } from "@mui/material";
import Faq from "./components/Faq/Faq";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import { useEffect, useState } from "react";
import styles from "./App.module.css";
import useFetch from "./hook/useFetch";

function App() {
    const [filteredData, setFilteredData] = useState(null);
    const [tab, setTab] = useState("all");

    const { data: topAlbum, isLoading: topAlbumLoading } = useFetch(`${BACKEND_ENDPOINT}${SLUGS.TOP_ALBUMS}`)
    const { data: newAlbum, isLoading: newAlbumLoading } = useFetch(`${BACKEND_ENDPOINT}${SLUGS.NEW_ALBUMS}`)
    const { data: allSongs, isLoading: allSongLoading } = useFetch(`${BACKEND_ENDPOINT}${SLUGS.ALL_SONGS}`)

    useEffect(() => {
        setFilteredData(allSongs)
    }, [allSongs])

    const handleChange = (event, newValue) => {
        setTab(newValue);
        handleTabChange(newValue);
    };
    const handleTabChange = (tabValue) => {
        if (tabValue === "all") {
            setFilteredData(allSongs);
        } else {
            const filter = allSongs.filter((item) => item.genre.key.includes(tabValue));
            setFilteredData(filter);
        }
    };

    return (
        <div>
            <Navbar data={allSongs} />
            <Hero />
            <div className={styles.songContainer}>
                <Section
                    data={topAlbum}
                    type="album"
                    title="Top Albums"
                    loading={topAlbumLoading}
                />
                <Section
                    data={newAlbum}
                    type="album"
                    title="New Albums"
                    url={SLUGS.NEW_ALBUMS}
                    loading={newAlbumLoading}

                />
                <Divider className={styles.divider} />
                <Section
                    data={allSongs}
                    filteredData={filteredData}
                    type="song"
                    title="Songs"
                    handleChange={handleChange}
                    tab={tab}
                    setTab={setTab}
                    loading={allSongLoading}
                />
                <Divider className={styles.divider} />
                <Faq />
                <MusicPlayer />
            </div>
        </div>
    );
}

export default App;
