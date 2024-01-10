/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
import type { DtoVoucherPurchase } from './DtoVoucherPurchase';
import {
    DtoVoucherPurchaseFromJSON,
    DtoVoucherPurchaseFromJSONTyped,
    DtoVoucherPurchaseToJSON,
} from './DtoVoucherPurchase';

/**
 * 
 * @export
 * @interface DtoVoucherPurchasesResponse
 */
export interface DtoVoucherPurchasesResponse {
    /**
     * 
     * @type {number}
     * @memberof DtoVoucherPurchasesResponse
     */
    limit: number;
    /**
     * 
     * @type {Array<DtoVoucherPurchase>}
     * @memberof DtoVoucherPurchasesResponse
     */
    list: Array<DtoVoucherPurchase>;
    /**
     * 
     * @type {number}
     * @memberof DtoVoucherPurchasesResponse
     */
    offset: number;
    /**
     * 
     * @type {number}
     * @memberof DtoVoucherPurchasesResponse
     */
    total: number;
}

/**
 * Check if a given object implements the DtoVoucherPurchasesResponse interface.
 */
export function instanceOfDtoVoucherPurchasesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "limit" in value;
    isInstance = isInstance && "list" in value;
    isInstance = isInstance && "offset" in value;
    isInstance = isInstance && "total" in value;

    return isInstance;
}

export function DtoVoucherPurchasesResponseFromJSON(json: any): DtoVoucherPurchasesResponse {
    return DtoVoucherPurchasesResponseFromJSONTyped(json, false);
}

export function DtoVoucherPurchasesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoVoucherPurchasesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'limit': json['limit'],
        'list': ((json['list'] as Array<any>).map(DtoVoucherPurchaseFromJSON)),
        'offset': json['offset'],
        'total': json['total'],
    };
}

export function DtoVoucherPurchasesResponseToJSON(value?: DtoVoucherPurchasesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'limit': value.limit,
        'list': ((value.list as Array<any>).map(DtoVoucherPurchaseToJSON)),
        'offset': value.offset,
        'total': value.total,
    };
}

