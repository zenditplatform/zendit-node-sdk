/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
import type { DtoESimPurchase } from './DtoESimPurchase';
import {
    DtoESimPurchaseFromJSON,
    DtoESimPurchaseFromJSONTyped,
    DtoESimPurchaseToJSON,
} from './DtoESimPurchase';

/**
 * 
 * @export
 * @interface DtoESimPurchasesResponse
 */
export interface DtoESimPurchasesResponse {
    /**
     * 
     * @type {number}
     * @memberof DtoESimPurchasesResponse
     */
    limit: number;
    /**
     * 
     * @type {Array<DtoESimPurchase>}
     * @memberof DtoESimPurchasesResponse
     */
    list: Array<DtoESimPurchase>;
    /**
     * 
     * @type {number}
     * @memberof DtoESimPurchasesResponse
     */
    offset: number;
    /**
     * 
     * @type {number}
     * @memberof DtoESimPurchasesResponse
     */
    total: number;
}

/**
 * Check if a given object implements the DtoESimPurchasesResponse interface.
 */
export function instanceOfDtoESimPurchasesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "limit" in value;
    isInstance = isInstance && "list" in value;
    isInstance = isInstance && "offset" in value;
    isInstance = isInstance && "total" in value;

    return isInstance;
}

export function DtoESimPurchasesResponseFromJSON(json: any): DtoESimPurchasesResponse {
    return DtoESimPurchasesResponseFromJSONTyped(json, false);
}

export function DtoESimPurchasesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoESimPurchasesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'limit': json['limit'],
        'list': ((json['list'] as Array<any>).map(DtoESimPurchaseFromJSON)),
        'offset': json['offset'],
        'total': json['total'],
    };
}

export function DtoESimPurchasesResponseToJSON(value?: DtoESimPurchasesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'limit': value.limit,
        'list': ((value.list as Array<any>).map(DtoESimPurchaseToJSON)),
        'offset': value.offset,
        'total': value.total,
    };
}

