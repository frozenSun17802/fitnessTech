export interface PlayerRequest {
    teamId: number;
    take: number;
    page: number;
    disablePaging: boolean;
    sort: [
        {
            dir: string,
            field: string,
            order: number,
        }
    ];
    filter: {
        logic: string;
        filters: [
            {
                groupId: number,
                dataType: string,
                parameterName: string,
                field: string,
                operator: string,
                value: {}
            }
        ]
    };
    languageRef: number;
}



export interface PlayerShows {

    entities: playerEntities[],
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
export interface playerEntities {
    key: number,
    firstName: string;
    lastName: string;
    position: string;
}




export interface PlayerAdd {
    firstName: string;
    lastName: string;
    position: string;
    dateOfBirth: string;
    teamId: number;
    languageRef: number;
}

export interface PlayerAddResult {
    entity: string,
    success: boolean,
    errorMessage: string,
    errorCode: number,
}

export interface PlayerRemove {
    playerId: number;
    teamId: number;
    languageRef: number;
}


export interface PlayerEdit {
    key: number;
    firstName: string;
    lastName: string;
    position: string;
    dateOfBirth: string;
    teamId: number;
    languageRef: number;
}

