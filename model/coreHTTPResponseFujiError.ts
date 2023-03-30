import { CoreErrorCode } from './coreErrorCode';

export class CoreHTTPResponseFujiError {
    'errorCode'?: CoreErrorCode;
    'message'?: string;
    'payload'?: object;
    'txid'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errorCode",
            "baseName": "errorCode",
            "type": "CoreErrorCode"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "object"
        },
        {
            "name": "txid",
            "baseName": "txid",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CoreHTTPResponseFujiError.attributeTypeMap;
    }
}

export namespace CoreHTTPResponseFujiError {
}
