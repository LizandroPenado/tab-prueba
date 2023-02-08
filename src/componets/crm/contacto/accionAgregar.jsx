import React, { useState } from "react";
import { Button } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle'
import ModalAgregar from "./modalAgregar";

const AccionAgregar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button
                variant="contained"
                startIcon={<AddCircleIcon />}
                onClick={() => setOpen(true)}
            >
                Contacto
            </Button>
            <ModalAgregar abrir={open} setAbrir={setOpen} fondo={"fondo-modal-header"} titulo={"Agregar contacto"} size={"md"}/>
        </>
    )
}

export default AccionAgregar