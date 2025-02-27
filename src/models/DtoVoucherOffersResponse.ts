/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
import type { DtoVoucherOffer } from './DtoVoucherOffer';
import {
    DtoVoucherOfferFromJSON,
    DtoVoucherOfferFromJSONTyped,
    DtoVoucherOfferToJSON,
    DtoVoucherOfferToJSONTyped,
} from './DtoVoucherOffer';

/**
 * 
 * @export
 * @interface DtoVoucherOffersResponse
 */
export interface DtoVoucherOffersResponse {
    /**
     * 
     * @type {number}
     * @memberof DtoVoucherOffersResponse
     */
    limit: number;
    /**
     * 
     * @type {Array<DtoVoucherOffer>}
     * @memberof DtoVoucherOffersResponse
     */
    list: Array<DtoVoucherOffer>;
    /**
     * 
     * @type {number}
     * @memberof DtoVoucherOffersResponse
     */
    offset: number;
    /**
     * 
     * @type {number}
     * @memberof DtoVoucherOffersResponse
     */
    total: number;
}

/**
 * Check if a given object implements the DtoVoucherOffersResponse interface.
 */
export function instanceOfDtoVoucherOffersResponse(value: object): value is DtoVoucherOffersResponse {
    if (!('limit' in value) || value['limit'] === undefined) return false;
    if (!('list' in value) || value['list'] === undefined) return false;
    if (!('offset' in value) || value['offset'] === undefined) return false;
    if (!('total' in value) || value['total'] === undefined) return false;
    return true;
}

export function DtoVoucherOffersResponseFromJSON(json: any): DtoVoucherOffersResponse {
    return DtoVoucherOffersResponseFromJSONTyped(json, false);
}

export function DtoVoucherOffersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoVoucherOffersResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'limit': json['limit'],
        'list': ((json['list'] as Array<any>).map(DtoVoucherOfferFromJSON)),
        'offset': json['offset'],
        'total': json['total'],
    };
}

export function DtoVoucherOffersResponseToJSON(json: any): DtoVoucherOffersResponse {
    return DtoVoucherOffersResponseToJSONTyped(json, false);
}

export function DtoVoucherOffersResponseToJSONTyped(value?: DtoVoucherOffersResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'limit': value['limit'],
        'list': ((value['list'] as Array<any>).map(DtoVoucherOfferToJSON)),
        'offset': value['offset'],
        'total': value['total'],
    };
}

