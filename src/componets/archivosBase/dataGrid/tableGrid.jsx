import React, { useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { ThemeProvider } from "@mui/material/styles";
import CustomToolbar from "./customToolbar";
import { Grid } from "@mui/material";
import { theme } from "../../crm/stilos";


const TableGrid = ({ columnas, data }) => {
    const [pageSize, setPageSize] = useState(10)

    return (
        <ThemeProvider theme={theme}>
            <Grid container direction={"row"} sx={{ my: 1 }}>
                <Grid item xs={12} md={12} sx={{ minHeight: 300 }}>
                    <DataGrid
                        autoHeight
                        rows={data}
                        columns={columnas}
                        pageSize={pageSize}
                        rowsPerPageOptions={[10, 25, 50, 100]}
                        density='compact'
                        components={{ Toolbar: CustomToolbar }}
                        className='bg-white'
                        getRowId={(row) => `${row.TELEFONO}`}
                        onPageSizeChange={(newPageSize) => {
                            setPageSize(newPageSize)
                        }}
                    />
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default TableGrid