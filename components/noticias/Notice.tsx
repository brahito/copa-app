/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React, { FC } from 'react'
import { Asset, AssetsInformation, ContentType } from '../../interfaces';
import { AssetsInformationProcessed } from '../../interfaces/interfaces';

interface Props {
    titulo: string;
    imagenes?: ContentType[] | null;
    assets: AssetsInformationProcessed;
}
export const Notice: FC<Props> = ({ titulo, imagenes, assets }) => {
    return (
        <div>
            <h2>{titulo}</h2>
            {
                imagenes?.map((imagen, index) => {
                    if (imagen.sys) {
                        return <img src={assets[imagen?.sys.id]} alt={assets[imagen?.sys.id + "_title"]} key={index} />
                    }
                })
            }
        </div>
    )
}
