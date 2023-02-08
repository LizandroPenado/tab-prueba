import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AcordionInfo from "./acordionInfo";

const AcordionBase = ({ titulo, cuerpo, fondo }) => {
    return (
        <div className="mb-3 mt-3">
            <Accordion className="borde-redondeo">
                <AcordionInfo aria-controls="panel1d-content" id="panel1d-header" className={fondo}>
                    <Typography>{titulo}</Typography>
                </AcordionInfo>
                <AccordionDetails>
                    {cuerpo}
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default AcordionBase