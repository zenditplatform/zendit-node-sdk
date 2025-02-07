/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
import type { DtoTopupOffer } from './DtoTopupOffer';
import {
    DtoTopupOfferFromJSON,
    DtoTopupOfferFromJSONTyped,
    DtoTopupOfferToJSON,
    DtoTopupOfferToJSONTyped,
} from './DtoTopupOffer';

/**
 * 
 * @export
 * @interface DtoTopupOffersResponse
 */
export interface DtoTopupOffersResponse {
    /**
     * 
     * @type {number}
     * @memberof DtoTopupOffersResponse
     */
    limit: number;
    /**
     * 
     * @type {Array<DtoTopupOffer>}
     * @memberof DtoTopupOffersResponse
     */
    list: Array<DtoTopupOffer>;
    /**
     * 
     * @type {number}
     * @memberof DtoTopupOffersResponse
     */
    offset: number;
    /**
     * 
     * @type {number}
     * @memberof DtoTopupOffersResponse
     */
    total: number;
}

/**
 * Check if a given object implements the DtoTopupOffersResponse interface.
 */
export function instanceOfDtoTopupOffersResponse(value: object): value is DtoTopupOffersResponse {
    if (!('limit' in value) || value['limit'] === undefined) return false;
    if (!('list' in value) || value['list'] === undefined) return false;
    if (!('offset' in value) || value['offset'] === undefined) return false;
    if (!('total' in value) || value['total'] === undefined) return false;
    return true;
}

export function DtoTopupOffersResponseFromJSON(json: any): DtoTopupOffersResponse {
    return DtoTopupOffersResponseFromJSONTyped(json, false);
}

export function DtoTopupOffersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoTopupOffersResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'limit': json['limit'],
        'list': ((json['list'] as Array<any>).map(DtoTopupOfferFromJSON)),
        'offset': json['offset'],
        'total': json['total'],
    };
}

export function DtoTopupOffersResponseToJSON(json: any): DtoTopupOffersResponse {
    return DtoTopupOffersResponseToJSONTyped(json, false);
}

export function DtoTopupOffersResponseToJSONTyped(value?: DtoTopupOffersResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'limit': value['limit'],
        'list': ((value['list'] as Array<any>).map(DtoTopupOfferToJSON)),
        'offset': value['offset'],
        'total': value['total'],
    };
}

