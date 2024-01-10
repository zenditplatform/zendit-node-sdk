/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DtoResponseError
 */
export interface DtoResponseError {
    /**
     * 
     * @type {string}
     * @memberof DtoResponseError
     */
    errorCode?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof DtoResponseError
     */
    fields?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof DtoResponseError
     */
    message?: string;
}

/**
 * Check if a given object implements the DtoResponseError interface.
 */
export function instanceOfDtoResponseError(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DtoResponseErrorFromJSON(json: any): DtoResponseError {
    return DtoResponseErrorFromJSONTyped(json, false);
}

export function DtoResponseErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoResponseError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errorCode': !exists(json, 'errorCode') ? undefined : json['errorCode'],
        'fields': !exists(json, 'fields') ? undefined : json['fields'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function DtoResponseErrorToJSON(value?: DtoResponseError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'errorCode': value.errorCode,
        'fields': value.fields,
        'message': value.message,
    };
}

