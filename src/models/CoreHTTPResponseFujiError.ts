/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
import type { CoreErrorCode } from './CoreErrorCode';
import {
    CoreErrorCodeFromJSON,
    CoreErrorCodeFromJSONTyped,
    CoreErrorCodeToJSON,
} from './CoreErrorCode';

/**
 * 
 * @export
 * @interface CoreHTTPResponseFujiError
 */
export interface CoreHTTPResponseFujiError {
    /**
     * 
     * @type {CoreErrorCode}
     * @memberof CoreHTTPResponseFujiError
     */
    errorCode?: CoreErrorCode;
    /**
     * 
     * @type {string}
     * @memberof CoreHTTPResponseFujiError
     */
    message?: string;
    /**
     * 
     * @type {object}
     * @memberof CoreHTTPResponseFujiError
     */
    payload?: object;
    /**
     * 
     * @type {string}
     * @memberof CoreHTTPResponseFujiError
     */
    txid?: string;
}

/**
 * Check if a given object implements the CoreHTTPResponseFujiError interface.
 */
export function instanceOfCoreHTTPResponseFujiError(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CoreHTTPResponseFujiErrorFromJSON(json: any): CoreHTTPResponseFujiError {
    return CoreHTTPResponseFujiErrorFromJSONTyped(json, false);
}

export function CoreHTTPResponseFujiErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoreHTTPResponseFujiError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'errorCode': !exists(json, 'errorCode') ? undefined : CoreErrorCodeFromJSON(json['errorCode']),
        'message': !exists(json, 'message') ? undefined : json['message'],
        'payload': !exists(json, 'payload') ? undefined : json['payload'],
        'txid': !exists(json, 'txid') ? undefined : json['txid'],
    };
}

export function CoreHTTPResponseFujiErrorToJSON(value?: CoreHTTPResponseFujiError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'errorCode': CoreErrorCodeToJSON(value.errorCode),
        'message': value.message,
        'payload': value.payload,
        'txid': value.txid,
    };
}

