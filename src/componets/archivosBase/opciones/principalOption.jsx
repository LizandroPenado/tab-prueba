import React from "react";
import { Stack, Grid } from "@mui/material";

const PrincipalOption = ({ cuerpo }) => {
    return (
        <div className="mb-3 mt-3">
            <Stack direction="row" justifyContent="start" alignItems="center" spacing={2}>
                <Grid
                    alignItems={'center'}
                    justifyContent={"center"}
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {cuerpo}
                </Grid>
            </Stack>
        </div>
    )
}

export default PrincipalOption