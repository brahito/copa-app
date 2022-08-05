
export interface Copa {
    sys:      CopaSys;
    total:    number;
    skip:     number;
    limit:    number;
    items:    Item[];
    includes: Includes;
}

export interface Includes {
    Asset: Asset[];
}

export interface Asset {
    metadata: Metadata;
    sys:      AssetSys;
    fields:   AssetFields;
}

export interface AssetFields {
    title:       string;
    description: string;
    file:        File;
}

export interface File {
    url:         string;
    details:     Details;
    fileName:    string;
    contentType: string;
}

export interface Details {
    size:  number;
    image: Image;
}

export interface Image {
    width:  number;
    height: number;
}

export interface Metadata {
    tags: any[];
}

export interface AssetSys {
    space:        ContentType;
    id:           string;
    type:         string;
    createdAt:    string;
    updatedAt:    string;
    environment:  ContentType;
    revision:     number;
    locale:       string;
    contentType?: ContentType;
}

export interface ContentType {
    sys?: ContentTypeSys;
}

export interface ContentTypeSys {
    id:       string;
    type:     Type;
    linkType: string;
}

export enum Type {
    Link = "Link",
}

export interface Item {
    metadata: Metadata;
    sys:      AssetSys;
    fields:   ItemFields;
}

export interface ItemFields {
    titulo: string;
    imagen?: ContentType[] | null;
}

export interface CopaSys {
    type: string;
}

export interface AssetsInformation {
    id: string;
    url: string;
    title: string;
    description: string;
}

export interface AssetsInformationProcessed {
    [key: string]: string;
}



