import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import styles from './Accrodian.module.css'
import { DownArrow } from '../../assets'

const Accordian = ({ data: { title, content }, index }) => {
    return (
        <div className={styles.accordianContainer}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<DownArrow />}
                    aria-controls={`panel${index}a-content`}
                    id={`panel${index}a-header`}
                >
                    <Typography>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Typography>
                        {content}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Accordian
