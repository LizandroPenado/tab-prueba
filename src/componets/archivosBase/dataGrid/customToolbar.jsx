import React from "react";
import { GridToolbarContainer } from '@mui/x-data-grid';
import BusquedaToolbar from "./busquedaToolbar";

const CustomToolbar = () => {
    return (
        <GridToolbarContainer>
            <BusquedaToolbar />
        </GridToolbarContainer>
    )
}

export default CustomToolbar