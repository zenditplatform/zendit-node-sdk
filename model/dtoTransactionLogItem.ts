import { DtoTransactionStatus } from './dtoTransactionStatus';

export class DtoTransactionLogItem {
    'dateTime'?: string;
    'status'?: DtoTransactionStatus;
    'statusMessage'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "dateTime",
            "baseName": "dateTime",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "DtoTransactionStatus"
        },
        {
            "name": "statusMessage",
            "baseName": "statusMessage",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DtoTransactionLogItem.attributeTypeMap;
    }
}

export namespace DtoTransactionLogItem {
}
