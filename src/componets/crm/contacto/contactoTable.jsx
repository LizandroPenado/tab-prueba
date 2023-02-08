import React from 'react';
import AcordionBase from '../../archivosBase/acordion/acordionBase';
import TableGrid from '../../archivosBase/dataGrid/tableGrid';
import { columnas } from './contactoColums'
import { contactos, contactosNuevos } from '../../../utils/contants'


const ContactoTable = () => {
    return (
        <>
            <AcordionBase titulo={'Contactos principales'} cuerpo={<TableGrid columnas={columnas} data={contactos} background={'fondo-corten'} />} />
            <AcordionBase titulo={'Contactos nuevos'} cuerpo={<TableGrid columnas={columnas} data={contactosNuevos} />} />
        </>
    );
}

export default ContactoTable;