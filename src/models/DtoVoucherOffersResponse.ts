/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
import type { DtoVoucherOffer } from './DtoVoucherOffer';
import {
    DtoVoucherOfferFromJSON,
    DtoVoucherOfferFromJSONTyped,
    DtoVoucherOfferToJSON,
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
export function instanceOfDtoVoucherOffersResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "limit" in value;
    isInstance = isInstance && "list" in value;
    isInstance = isInstance && "offset" in value;
    isInstance = isInstance && "total" in value;

    return isInstance;
}

export function DtoVoucherOffersResponseFromJSON(json: any): DtoVoucherOffersResponse {
    return DtoVoucherOffersResponseFromJSONTyped(json, false);
}

export function DtoVoucherOffersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoVoucherOffersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'limit': json['limit'],
        'list': ((json['list'] as Array<any>).map(DtoVoucherOfferFromJSON)),
        'offset': json['offset'],
        'total': json['total'],
    };
}

export function DtoVoucherOffersResponseToJSON(value?: DtoVoucherOffersResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'limit': value.limit,
        'list': ((value.list as Array<any>).map(DtoVoucherOfferToJSON)),
        'offset': value.offset,
        'total': value.total,
    };
}

