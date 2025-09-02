/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
import type { DtoBillPayPurchase } from './DtoBillPayPurchase';
import {
    DtoBillPayPurchaseFromJSON,
    DtoBillPayPurchaseFromJSONTyped,
    DtoBillPayPurchaseToJSON,
    DtoBillPayPurchaseToJSONTyped,
} from './DtoBillPayPurchase';

/**
 * 
 * @export
 * @interface DtoBillPayPurchasesResponse
 */
export interface DtoBillPayPurchasesResponse {
    /**
     * 
     * @type {number}
     * @memberof DtoBillPayPurchasesResponse
     */
    limit: number;
    /**
     * 
     * @type {Array<DtoBillPayPurchase>}
     * @memberof DtoBillPayPurchasesResponse
     */
    list: Array<DtoBillPayPurchase>;
    /**
     * 
     * @type {number}
     * @memberof DtoBillPayPurchasesResponse
     */
    offset: number;
    /**
     * 
     * @type {number}
     * @memberof DtoBillPayPurchasesResponse
     */
    total: number;
}

/**
 * Check if a given object implements the DtoBillPayPurchasesResponse interface.
 */
export function instanceOfDtoBillPayPurchasesResponse(value: object): value is DtoBillPayPurchasesResponse {
    if (!('limit' in value) || value['limit'] === undefined) return false;
    if (!('list' in value) || value['list'] === undefined) return false;
    if (!('offset' in value) || value['offset'] === undefined) return false;
    if (!('total' in value) || value['total'] === undefined) return false;
    return true;
}

export function DtoBillPayPurchasesResponseFromJSON(json: any): DtoBillPayPurchasesResponse {
    return DtoBillPayPurchasesResponseFromJSONTyped(json, false);
}

export function DtoBillPayPurchasesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoBillPayPurchasesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'limit': json['limit'],
        'list': ((json['list'] as Array<any>).map(DtoBillPayPurchaseFromJSON)),
        'offset': json['offset'],
        'total': json['total'],
    };
}

export function DtoBillPayPurchasesResponseToJSON(json: any): DtoBillPayPurchasesResponse {
    return DtoBillPayPurchasesResponseToJSONTyped(json, false);
}

export function DtoBillPayPurchasesResponseToJSONTyped(value?: DtoBillPayPurchasesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'limit': value['limit'],
        'list': ((value['list'] as Array<any>).map(DtoBillPayPurchaseToJSON)),
        'offset': value['offset'],
        'total': value['total'],
    };
}

