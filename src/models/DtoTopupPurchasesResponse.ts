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
export function instanceOfDtoTopupPurchasesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "limit" in value;
    isInstance = isInstance && "list" in value;
    isInstance = isInstance && "offset" in value;
    isInstance = isInstance && "total" in value;

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
        
        'limit': json['limit'],
        'list': ((json['list'] as Array<any>).map(DtoTopupPurchaseFromJSON)),
        'offset': json['offset'],
        'total': json['total'],
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
        'list': ((value.list as Array<any>).map(DtoTopupPurchaseToJSON)),
        'offset': value.offset,
        'total': value.total,
    };
}

