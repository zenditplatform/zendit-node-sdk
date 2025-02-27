/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
import type { DtoTransaction } from './DtoTransaction';
import {
    DtoTransactionFromJSON,
    DtoTransactionFromJSONTyped,
    DtoTransactionToJSON,
    DtoTransactionToJSONTyped,
} from './DtoTransaction';

/**
 * 
 * @export
 * @interface DtoTransactionsResponse
 */
export interface DtoTransactionsResponse {
    /**
     * 
     * @type {number}
     * @memberof DtoTransactionsResponse
     */
    limit: number;
    /**
     * 
     * @type {Array<DtoTransaction>}
     * @memberof DtoTransactionsResponse
     */
    list: Array<DtoTransaction>;
    /**
     * 
     * @type {number}
     * @memberof DtoTransactionsResponse
     */
    offset: number;
    /**
     * 
     * @type {number}
     * @memberof DtoTransactionsResponse
     */
    total: number;
}

/**
 * Check if a given object implements the DtoTransactionsResponse interface.
 */
export function instanceOfDtoTransactionsResponse(value: object): value is DtoTransactionsResponse {
    if (!('limit' in value) || value['limit'] === undefined) return false;
    if (!('list' in value) || value['list'] === undefined) return false;
    if (!('offset' in value) || value['offset'] === undefined) return false;
    if (!('total' in value) || value['total'] === undefined) return false;
    return true;
}

export function DtoTransactionsResponseFromJSON(json: any): DtoTransactionsResponse {
    return DtoTransactionsResponseFromJSONTyped(json, false);
}

export function DtoTransactionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoTransactionsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'limit': json['limit'],
        'list': ((json['list'] as Array<any>).map(DtoTransactionFromJSON)),
        'offset': json['offset'],
        'total': json['total'],
    };
}

export function DtoTransactionsResponseToJSON(json: any): DtoTransactionsResponse {
    return DtoTransactionsResponseToJSONTyped(json, false);
}

export function DtoTransactionsResponseToJSONTyped(value?: DtoTransactionsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'limit': value['limit'],
        'list': ((value['list'] as Array<any>).map(DtoTransactionToJSON)),
        'offset': value['offset'],
        'total': value['total'],
    };
}

