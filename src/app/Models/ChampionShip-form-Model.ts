export interface championshipsShows {

    entities: championEntities[],
    pageIndex: number,
    pageSize: number,
    totalCount: number,
    totalPages: number,
    hasPreviousPage: boolean,
    hasNextPage: boolean,
    success: boolean,
    errorMessage?: string,
    errorCode: number
}
export interface championEntities {
    key: number,
    name: string;
    startDate: Date;
    endDate: Date;
    location: string;
    description: string;
}


export interface championshipsinsertSend {
    name: string,
    startDate: string,
    endDate: string,
    location: string,
    description: string,
    languageRef: number;
}

export interface championshipsDelete {
    key: number;
    languageRef: number;
}

export interface championshipsinsertUpdate {
    name: string,
    startDate: string,
    endDate: string,
    location: string,
    description: string,
    languageRef: number;
}



