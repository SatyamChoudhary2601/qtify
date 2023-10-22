import { Tab, Tabs } from '@mui/material'
import styles from './Tab.module.css'
import { TAB } from '../../utils/constant'

const tabStyles = {
    style: {
        backgroundColor: "var(--color-primary)",
        padding: 2,
        borderRadius: 30,
    }
}
const CustomTab = ({ recentTab, handleChange }) => {
    return (
        <div className={styles.tabContainer}>
            <Tabs
                value={recentTab}
                onChange={handleChange}
                aria-label="basic tabs example"
                textColor="white"
                TabIndicatorProps={tabStyles}
            >
                {TAB.map((item) => (
                    <Tab label={item.title} value={item.value} key={item} />
                ))}
            </Tabs>
        </div>
    )
}

export default CustomTab
