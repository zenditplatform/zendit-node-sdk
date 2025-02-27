/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
import type { DtoESimOffer } from './DtoESimOffer';
import {
    DtoESimOfferFromJSON,
    DtoESimOfferFromJSONTyped,
    DtoESimOfferToJSON,
    DtoESimOfferToJSONTyped,
} from './DtoESimOffer';

/**
 * 
 * @export
 * @interface DtoESimOffersResponse
 */
export interface DtoESimOffersResponse {
    /**
     * 
     * @type {number}
     * @memberof DtoESimOffersResponse
     */
    limit: number;
    /**
     * 
     * @type {Array<DtoESimOffer>}
     * @memberof DtoESimOffersResponse
     */
    list: Array<DtoESimOffer>;
    /**
     * 
     * @type {number}
     * @memberof DtoESimOffersResponse
     */
    offset: number;
    /**
     * 
     * @type {number}
     * @memberof DtoESimOffersResponse
     */
    total: number;
}

/**
 * Check if a given object implements the DtoESimOffersResponse interface.
 */
export function instanceOfDtoESimOffersResponse(value: object): value is DtoESimOffersResponse {
    if (!('limit' in value) || value['limit'] === undefined) return false;
    if (!('list' in value) || value['list'] === undefined) return false;
    if (!('offset' in value) || value['offset'] === undefined) return false;
    if (!('total' in value) || value['total'] === undefined) return false;
    return true;
}

export function DtoESimOffersResponseFromJSON(json: any): DtoESimOffersResponse {
    return DtoESimOffersResponseFromJSONTyped(json, false);
}

export function DtoESimOffersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoESimOffersResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'limit': json['limit'],
        'list': ((json['list'] as Array<any>).map(DtoESimOfferFromJSON)),
        'offset': json['offset'],
        'total': json['total'],
    };
}

export function DtoESimOffersResponseToJSON(json: any): DtoESimOffersResponse {
    return DtoESimOffersResponseToJSONTyped(json, false);
}

export function DtoESimOffersResponseToJSONTyped(value?: DtoESimOffersResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'limit': value['limit'],
        'list': ((value['list'] as Array<any>).map(DtoESimOfferToJSON)),
        'offset': value['offset'],
        'total': value['total'],
    };
}

