/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
import type { DtoBillPayOffer } from './DtoBillPayOffer';
import {
    DtoBillPayOfferFromJSON,
    DtoBillPayOfferFromJSONTyped,
    DtoBillPayOfferToJSON,
    DtoBillPayOfferToJSONTyped,
} from './DtoBillPayOffer';

/**
 * 
 * @export
 * @interface DtoBillPayOffersResponse
 */
export interface DtoBillPayOffersResponse {
    /**
     * 
     * @type {number}
     * @memberof DtoBillPayOffersResponse
     */
    limit: number;
    /**
     * 
     * @type {Array<DtoBillPayOffer>}
     * @memberof DtoBillPayOffersResponse
     */
    list: Array<DtoBillPayOffer>;
    /**
     * 
     * @type {number}
     * @memberof DtoBillPayOffersResponse
     */
    offset: number;
    /**
     * 
     * @type {number}
     * @memberof DtoBillPayOffersResponse
     */
    total: number;
}

/**
 * Check if a given object implements the DtoBillPayOffersResponse interface.
 */
export function instanceOfDtoBillPayOffersResponse(value: object): value is DtoBillPayOffersResponse {
    if (!('limit' in value) || value['limit'] === undefined) return false;
    if (!('list' in value) || value['list'] === undefined) return false;
    if (!('offset' in value) || value['offset'] === undefined) return false;
    if (!('total' in value) || value['total'] === undefined) return false;
    return true;
}

export function DtoBillPayOffersResponseFromJSON(json: any): DtoBillPayOffersResponse {
    return DtoBillPayOffersResponseFromJSONTyped(json, false);
}

export function DtoBillPayOffersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoBillPayOffersResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'limit': json['limit'],
        'list': ((json['list'] as Array<any>).map(DtoBillPayOfferFromJSON)),
        'offset': json['offset'],
        'total': json['total'],
    };
}

export function DtoBillPayOffersResponseToJSON(json: any): DtoBillPayOffersResponse {
    return DtoBillPayOffersResponseToJSONTyped(json, false);
}

export function DtoBillPayOffersResponseToJSONTyped(value?: DtoBillPayOffersResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'limit': value['limit'],
        'list': ((value['list'] as Array<any>).map(DtoBillPayOfferToJSON)),
        'offset': value['offset'],
        'total': value['total'],
    };
}

