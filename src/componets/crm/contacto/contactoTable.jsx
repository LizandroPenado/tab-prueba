import React from 'react';
import AcordionBase from '../../archivosBase/acordion/acordionBase';
import TableGrid from '../../archivosBase/dataGrid/tableGrid';
import { columnas } from './contactoColums'
import { contactos, contactosNuevos } from '../../../utils/contants'
import AccionAgregar from './accionAgregar';
import PrincipalOption from '../../archivosBase/opciones/principalOption';

const ContactoTable = () => {
    return (
        <>
            <PrincipalOption
                cuerpo={
                    <>
                        <AccionAgregar />
                    </>
                } />
            <AcordionBase
                titulo={'Contactos principales'}
                fondo={"fondo-contact-principal"}
                cuerpo={
                    <TableGrid
                        columnas={columnas}
                        data={contactos}
                    />
                }
            />
            <AcordionBase
                titulo={'Contactos nuevos'}
                fondo={"fondo-contact-new"}
                cuerpo={
                    <TableGrid
                        columnas={columnas}
                        data={contactosNuevos}
                    />}
            />
        </>
    );
}

export default ContactoTable;