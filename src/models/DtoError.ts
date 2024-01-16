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
export function instanceOfDtoError(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "message" in value;

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
        
        'code': json['code'],
        'description': json['description'],
        'message': json['message'],
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

