import React, { FC } from 'react'
import { Asset, ContentType } from '../../interfaces';

interface Props{
    titulo: string;
    imagen: Asset;
}
export const Notice:FC<Props> = ({titulo, imagen}) => {
    console.log(imagen);
    return (
        <div>
            <h2>{titulo}</h2>
            <img src={imagen.fields.file.url} alt="aun no hay imagen" />
        </div>
    )
}
