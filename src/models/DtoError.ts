/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
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
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoError
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoError
     */
    message?: string;
}

/**
 * Check if a given object implements the DtoError interface.
 */
export function instanceOfDtoError(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DtoErrorFromJSON(json: any): DtoError {
    return DtoErrorFromJSONTyped(json, false);
}

export function DtoErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function DtoErrorToJSON(value?: DtoError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'description': value.description,
        'message': value.message,
    };
}

