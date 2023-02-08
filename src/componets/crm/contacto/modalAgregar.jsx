import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormAgregar from './formAgregar';

const ModalAgregar = ({ abrir, setAbrir, fondo, titulo, size }) => {

    return (
        <Dialog
            open={abrir}
            scroll={'paper'}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            maxWidth={size}
            fullWidth={true}
        >
            <DialogTitle id="scroll-dialog-title" className={fondo}>{titulo}</DialogTitle>
            <DialogContent dividers={true}>
                <FormAgregar />
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>setAbrir(false)}>Cancelar</Button>
                <Button onClick={()=>setAbrir(false)}>Agregar</Button>
            </DialogActions>
        </Dialog>
    );
}

export default ModalAgregar