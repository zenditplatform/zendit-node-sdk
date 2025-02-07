/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
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
    errorCode: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof DtoResponseError
     */
    fields: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof DtoResponseError
     */
    message: string;
}

/**
 * Check if a given object implements the DtoResponseError interface.
 */
export function instanceOfDtoResponseError(value: object): value is DtoResponseError {
    if (!('errorCode' in value) || value['errorCode'] === undefined) return false;
    if (!('fields' in value) || value['fields'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    return true;
}

export function DtoResponseErrorFromJSON(json: any): DtoResponseError {
    return DtoResponseErrorFromJSONTyped(json, false);
}

export function DtoResponseErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoResponseError {
    if (json == null) {
        return json;
    }
    return {
        
        'errorCode': json['errorCode'],
        'fields': json['fields'],
        'message': json['message'],
    };
}

export function DtoResponseErrorToJSON(json: any): DtoResponseError {
    return DtoResponseErrorToJSONTyped(json, false);
}

export function DtoResponseErrorToJSONTyped(value?: DtoResponseError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errorCode': value['errorCode'],
        'fields': value['fields'],
        'message': value['message'],
    };
}

