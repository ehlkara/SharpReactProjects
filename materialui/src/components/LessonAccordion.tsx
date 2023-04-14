import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const LessonAccordion = () => {

    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        console.log(isExpanded);
        setExpanded(isExpanded ? panel : false);
    }

    return (
        <div>
            {/* <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>First Stage</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Do Lorem eiusmod in ipsum officia incididunt. Labore cupidatat velit fugiat veniam eiusmod. Ipsum ipsum do dolore velit reprehenderit. Cupidatat qui ipsum cillum ad ex ex pariatur eiusmod esse. Non veniam do minim consequat qui deserunt veniam commodo et cillum consequat dolore aute in. Ea occaecat incididunt nisi nulla in cillum ullamco.
                </AccordionDetails>
            </Accordion>
            <Accordion disabled>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Second Stage</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Do Lorem eiusmod in ipsum officia incididunt. Labore cupidatat velit fugiat veniam eiusmod. Ipsum ipsum do dolore velit reprehenderit. Cupidatat qui ipsum cillum ad ex ex pariatur eiusmod esse. Non veniam do minim consequat qui deserunt veniam commodo et cillum consequat dolore aute in. Ea occaecat incididunt nisi nulla in cillum ullamco.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Third Stage</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Do Lorem eiusmod in ipsum officia incididunt. Labore cupidatat velit fugiat veniam eiusmod. Ipsum ipsum do dolore velit reprehenderit. Cupidatat qui ipsum cillum ad ex ex pariatur eiusmod esse. Non veniam do minim consequat qui deserunt veniam commodo et cillum consequat dolore aute in. Ea occaecat incididunt nisi nulla in cillum ullamco.
                </AccordionDetails>
            </Accordion> */}
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>First Stage</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Do Lorem eiusmod in ipsum officia incididunt. Labore cupidatat velit fugiat veniam eiusmod. Ipsum ipsum do dolore velit reprehenderit. Cupidatat qui ipsum cillum ad ex ex pariatur eiusmod esse. Non veniam do minim consequat qui deserunt veniam commodo et cillum consequat dolore aute in. Ea occaecat incididunt nisi nulla in cillum ullamco.
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Second Stage</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Do Lorem eiusmod in ipsum officia incididunt. Labore cupidatat velit fugiat veniam eiusmod. Ipsum ipsum do dolore velit reprehenderit. Cupidatat qui ipsum cillum ad ex ex pariatur eiusmod esse. Non veniam do minim consequat qui deserunt veniam commodo et cillum consequat dolore aute in. Ea occaecat incididunt nisi nulla in cillum ullamco.
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Third Stage</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Do Lorem eiusmod in ipsum officia incididunt. Labore cupidatat velit fugiat veniam eiusmod. Ipsum ipsum do dolore velit reprehenderit. Cupidatat qui ipsum cillum ad ex ex pariatur eiusmod esse. Non veniam do minim consequat qui deserunt veniam commodo et cillum consequat dolore aute in. Ea occaecat incididunt nisi nulla in cillum ullamco.
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
