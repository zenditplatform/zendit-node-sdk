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
    limit?: number;
    /**
     * 
     * @type {Array<DtoVoucherPurchase>}
     * @memberof DtoVoucherPurchasesResponse
     */
    list?: Array<DtoVoucherPurchase>;
    /**
     * 
     * @type {number}
     * @memberof DtoVoucherPurchasesResponse
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof DtoVoucherPurchasesResponse
     */
    total?: number;
}

/**
 * Check if a given object implements the DtoVoucherPurchasesResponse interface.
 */
export function instanceOfDtoVoucherPurchasesResponse(value: object): boolean {
    let isInstance = true;

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
        
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'list': !exists(json, 'list') ? undefined : ((json['list'] as Array<any>).map(DtoVoucherPurchaseFromJSON)),
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'total': !exists(json, 'total') ? undefined : json['total'],
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
        'list': value.list === undefined ? undefined : ((value.list as Array<any>).map(DtoVoucherPurchaseToJSON)),
        'offset': value.offset,
        'total': value.total,
    };
}

