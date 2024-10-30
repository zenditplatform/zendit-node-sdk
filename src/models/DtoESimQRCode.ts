/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
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
export function instanceOfDtoESimQRCode(value: object): value is DtoESimQRCode {
    if (!('imageBase64' in value) || value['imageBase64'] === undefined) return false;
    return true;
}

export function DtoESimQRCodeFromJSON(json: any): DtoESimQRCode {
    return DtoESimQRCodeFromJSONTyped(json, false);
}

export function DtoESimQRCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoESimQRCode {
    if (json == null) {
        return json;
    }
    return {
        
        'imageBase64': json['imageBase64'],
    };
}

  export function DtoESimQRCodeToJSON(json: any): DtoESimQRCode {
      return DtoESimQRCodeToJSONTyped(json, false);
  }

  export function DtoESimQRCodeToJSONTyped(value?: DtoESimQRCode | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'imageBase64': value['imageBase64'],
    };
}

