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
    limit?: number;
    /**
     * 
     * @type {Array<DtoVoucherOffer>}
     * @memberof DtoVoucherOffersResponse
     */
    list?: Array<DtoVoucherOffer>;
    /**
     * 
     * @type {number}
     * @memberof DtoVoucherOffersResponse
     */
    offset?: number;
    /**
     * 
     * @type {number}
     * @memberof DtoVoucherOffersResponse
     */
    total?: number;
}

/**
 * Check if a given object implements the DtoVoucherOffersResponse interface.
 */
export function instanceOfDtoVoucherOffersResponse(value: object): boolean {
    let isInstance = true;

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
        
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'list': !exists(json, 'list') ? undefined : ((json['list'] as Array<any>).map(DtoVoucherOfferFromJSON)),
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'total': !exists(json, 'total') ? undefined : json['total'],
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
        'list': value.list === undefined ? undefined : ((value.list as Array<any>).map(DtoVoucherOfferToJSON)),
        'offset': value.offset,
        'total': value.total,
    };
}

