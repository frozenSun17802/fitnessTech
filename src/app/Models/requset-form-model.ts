export interface requsetInterface {

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

