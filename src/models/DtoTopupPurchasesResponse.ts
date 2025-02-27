/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
import type { DtoTopupPurchase } from './DtoTopupPurchase';
import {
    DtoTopupPurchaseFromJSON,
    DtoTopupPurchaseFromJSONTyped,
    DtoTopupPurchaseToJSON,
    DtoTopupPurchaseToJSONTyped,
} from './DtoTopupPurchase';

/**
 * 
 * @export
 * @interface DtoTopupPurchasesResponse
 */
export interface DtoTopupPurchasesResponse {
    /**
     * 
     * @type {number}
     * @memberof DtoTopupPurchasesResponse
     */
    limit: number;
    /**
     * 
     * @type {Array<DtoTopupPurchase>}
     * @memberof DtoTopupPurchasesResponse
     */
    list: Array<DtoTopupPurchase>;
    /**
     * 
     * @type {number}
     * @memberof DtoTopupPurchasesResponse
     */
    offset: number;
    /**
     * 
     * @type {number}
     * @memberof DtoTopupPurchasesResponse
     */
    total: number;
}

/**
 * Check if a given object implements the DtoTopupPurchasesResponse interface.
 */
export function instanceOfDtoTopupPurchasesResponse(value: object): value is DtoTopupPurchasesResponse {
    if (!('limit' in value) || value['limit'] === undefined) return false;
    if (!('list' in value) || value['list'] === undefined) return false;
    if (!('offset' in value) || value['offset'] === undefined) return false;
    if (!('total' in value) || value['total'] === undefined) return false;
    return true;
}

export function DtoTopupPurchasesResponseFromJSON(json: any): DtoTopupPurchasesResponse {
    return DtoTopupPurchasesResponseFromJSONTyped(json, false);
}

export function DtoTopupPurchasesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoTopupPurchasesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'limit': json['limit'],
        'list': ((json['list'] as Array<any>).map(DtoTopupPurchaseFromJSON)),
        'offset': json['offset'],
        'total': json['total'],
    };
}

export function DtoTopupPurchasesResponseToJSON(json: any): DtoTopupPurchasesResponse {
    return DtoTopupPurchasesResponseToJSONTyped(json, false);
}

export function DtoTopupPurchasesResponseToJSONTyped(value?: DtoTopupPurchasesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'limit': value['limit'],
        'list': ((value['list'] as Array<any>).map(DtoTopupPurchaseToJSON)),
        'offset': value['offset'],
        'total': value['total'],
    };
}

