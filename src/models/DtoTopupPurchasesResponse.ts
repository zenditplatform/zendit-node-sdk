/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
import type { DtoTopupPurchase } from './DtoTopupPurchase';
import {
    DtoTopupPurchaseFromJSON,
    DtoTopupPurchaseFromJSONTyped,
    DtoTopupPurchaseToJSON,
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
    limit?: number;
    /**
     * 
     * @type {Array<DtoTopupPurchase>}
     * @memberof DtoTopupPurchasesResponse
     */
    list?: Array<DtoTopupPurchase>;
    /**
     * 
     * @type {number}
     * @memberof DtoTopupPurchasesResponse
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof DtoTopupPurchasesResponse
     */
    total?: number;
}

/**
 * Check if a given object implements the DtoTopupPurchasesResponse interface.
 */
export function instanceOfDtoTopupPurchasesResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DtoTopupPurchasesResponseFromJSON(json: any): DtoTopupPurchasesResponse {
    return DtoTopupPurchasesResponseFromJSONTyped(json, false);
}

export function DtoTopupPurchasesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoTopupPurchasesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'list': !exists(json, 'list') ? undefined : ((json['list'] as Array<any>).map(DtoTopupPurchaseFromJSON)),
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'total': !exists(json, 'total') ? undefined : json['total'],
    };
}

export function DtoTopupPurchasesResponseToJSON(value?: DtoTopupPurchasesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'limit': value.limit,
        'list': value.list === undefined ? undefined : ((value.list as Array<any>).map(DtoTopupPurchaseToJSON)),
        'offset': value.offset,
        'total': value.total,
    };
}

