/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
import type { DtoTransaction } from './DtoTransaction';
import {
    DtoTransactionFromJSON,
    DtoTransactionFromJSONTyped,
    DtoTransactionToJSON,
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
    limit?: number;
    /**
     * 
     * @type {Array<DtoTransaction>}
     * @memberof DtoTransactionsResponse
     */
    list?: Array<DtoTransaction>;
    /**
     * 
     * @type {number}
     * @memberof DtoTransactionsResponse
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof DtoTransactionsResponse
     */
    total?: number;
}

/**
 * Check if a given object implements the DtoTransactionsResponse interface.
 */
export function instanceOfDtoTransactionsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DtoTransactionsResponseFromJSON(json: any): DtoTransactionsResponse {
    return DtoTransactionsResponseFromJSONTyped(json, false);
}

export function DtoTransactionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoTransactionsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'list': !exists(json, 'list') ? undefined : ((json['list'] as Array<any>).map(DtoTransactionFromJSON)),
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'total': !exists(json, 'total') ? undefined : json['total'],
    };
}

export function DtoTransactionsResponseToJSON(value?: DtoTransactionsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'limit': value.limit,
        'list': value.list === undefined ? undefined : ((value.list as Array<any>).map(DtoTransactionToJSON)),
        'offset': value.offset,
        'total': value.total,
    };
}

