/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DtoError
 */
export interface DtoError {
    /**
     * 
     * @type {string}
     * @memberof DtoError
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof DtoError
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof DtoError
     */
    message: string;
}

/**
 * Check if a given object implements the DtoError interface.
 */
export function instanceOfDtoError(value: object): value is DtoError {
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    return true;
}

export function DtoErrorFromJSON(json: any): DtoError {
    return DtoErrorFromJSONTyped(json, false);
}

export function DtoErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoError {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'description': json['description'],
        'message': json['message'],
    };
}

  export function DtoErrorToJSON(json: any): DtoError {
      return DtoErrorToJSONTyped(json, false);
  }

  export function DtoErrorToJSONTyped(value?: DtoError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'description': value['description'],
        'message': value['message'],
    };
}

