/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
import type { DtoESimPurchase } from './DtoESimPurchase';
import {
    DtoESimPurchaseFromJSON,
    DtoESimPurchaseFromJSONTyped,
    DtoESimPurchaseToJSON,
    DtoESimPurchaseToJSONTyped,
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
export function instanceOfDtoESimPurchasesResponse(value: object): value is DtoESimPurchasesResponse {
    if (!('limit' in value) || value['limit'] === undefined) return false;
    if (!('list' in value) || value['list'] === undefined) return false;
    if (!('offset' in value) || value['offset'] === undefined) return false;
    if (!('total' in value) || value['total'] === undefined) return false;
    return true;
}

export function DtoESimPurchasesResponseFromJSON(json: any): DtoESimPurchasesResponse {
    return DtoESimPurchasesResponseFromJSONTyped(json, false);
}

export function DtoESimPurchasesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoESimPurchasesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'limit': json['limit'],
        'list': ((json['list'] as Array<any>).map(DtoESimPurchaseFromJSON)),
        'offset': json['offset'],
        'total': json['total'],
    };
}

  export function DtoESimPurchasesResponseToJSON(json: any): DtoESimPurchasesResponse {
      return DtoESimPurchasesResponseToJSONTyped(json, false);
  }

  export function DtoESimPurchasesResponseToJSONTyped(value?: DtoESimPurchasesResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'limit': value['limit'],
        'list': ((value['list'] as Array<any>).map(DtoESimPurchaseToJSON)),
        'offset': value['offset'],
        'total': value['total'],
    };
}

