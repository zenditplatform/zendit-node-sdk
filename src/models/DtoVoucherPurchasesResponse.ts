/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
import type { DtoVoucherPurchase } from './DtoVoucherPurchase';
import {
    DtoVoucherPurchaseFromJSON,
    DtoVoucherPurchaseFromJSONTyped,
    DtoVoucherPurchaseToJSON,
    DtoVoucherPurchaseToJSONTyped,
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
export function instanceOfDtoVoucherPurchasesResponse(value: object): value is DtoVoucherPurchasesResponse {
    if (!('limit' in value) || value['limit'] === undefined) return false;
    if (!('list' in value) || value['list'] === undefined) return false;
    if (!('offset' in value) || value['offset'] === undefined) return false;
    if (!('total' in value) || value['total'] === undefined) return false;
    return true;
}

export function DtoVoucherPurchasesResponseFromJSON(json: any): DtoVoucherPurchasesResponse {
    return DtoVoucherPurchasesResponseFromJSONTyped(json, false);
}

export function DtoVoucherPurchasesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoVoucherPurchasesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'limit': json['limit'],
        'list': ((json['list'] as Array<any>).map(DtoVoucherPurchaseFromJSON)),
        'offset': json['offset'],
        'total': json['total'],
    };
}

  export function DtoVoucherPurchasesResponseToJSON(json: any): DtoVoucherPurchasesResponse {
      return DtoVoucherPurchasesResponseToJSONTyped(json, false);
  }

  export function DtoVoucherPurchasesResponseToJSONTyped(value?: DtoVoucherPurchasesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'limit': value['limit'],
        'list': ((value['list'] as Array<any>).map(DtoVoucherPurchaseToJSON)),
        'offset': value['offset'],
        'total': value['total'],
    };
}

