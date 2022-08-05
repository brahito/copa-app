import React, { FC } from 'react'
import { AssetsInformation, ItemFields } from '../../interfaces';
import { Notice } from './Notice';

interface Props {
    informacion: ItemFields[];
    imagen?: AssetsInformation[];
}
export const NoticeFeed: FC<Props> = ({ informacion, imagen }) => {
    const image = imagen?.reduce((acc, curr) => {
        acc[curr.id] = curr.url;
        acc[curr.id + "_title"] = curr.title;
        acc[curr.id + "_description"] = curr.description;
        return acc;
    }, {});
    console.log(image);
    return (
        <div>
            {informacion.map((info, id) => (
                <Notice titulo={info.titulo} imagenes={info.imagen} assets={image} key={id} />
            ))}
        </div>
    )
}
