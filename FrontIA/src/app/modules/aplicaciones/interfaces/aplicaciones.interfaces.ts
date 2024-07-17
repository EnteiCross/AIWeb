export interface Aplication {
    id:   number;
    name: string;
    status: StatusApps;
    linkDownload?: string;
}

export enum StatusApps {
    DONE = 'Finalizado',
    PROGRESS = 'En Proceso'
}


export interface GetAplicacionesResponse {
    data: Aplication[];
    total: number;
}