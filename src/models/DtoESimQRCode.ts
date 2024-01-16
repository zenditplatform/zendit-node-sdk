/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DtoESimQRCode
 */
export interface DtoESimQRCode {
    /**
     * 
     * @type {string}
     * @memberof DtoESimQRCode
     */
    imageBase64: string;
}

/**
 * Check if a given object implements the DtoESimQRCode interface.
 */
export function instanceOfDtoESimQRCode(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "imageBase64" in value;

    return isInstance;
}

export function DtoESimQRCodeFromJSON(json: any): DtoESimQRCode {
    return DtoESimQRCodeFromJSONTyped(json, false);
}

export function DtoESimQRCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoESimQRCode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'imageBase64': json['imageBase64'],
    };
}

export function DtoESimQRCodeToJSON(value?: DtoESimQRCode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'imageBase64': value.imageBase64,
    };
}

