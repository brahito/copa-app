import React, { FC } from 'react'
import { Asset, Includes, ItemFields } from '../../interfaces';
import { Notice } from './Notice';

interface Props {
    informacion: ItemFields[];
    imagen: Includes;
}
export const NoticeFeed: FC<Props> = ({ informacion, imagen }) => {
    return (
        <div>
            {informacion.map((info, id) => (
                <Notice titulo={info.titulo} imagen={imagen.Asset[id]} key={id}/>
            ))}
        </div>
    )
}
