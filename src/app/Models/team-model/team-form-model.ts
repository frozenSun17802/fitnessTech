export interface requsetInterfaceTeam {
    championshipId: number;
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


export interface teamShows {

    entities: teamEntities[],
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
export interface teamEntities {
    key: number;
    name: string;
}

export interface teamremove {
    championShipId: number;
    teamId: number;
    languageRef: number;
}


export interface teamAdd {
    name: string;
    numberOfWin: number;
    numberOfLose: number;
    championShipId: number;
    languageRef: number;
}


