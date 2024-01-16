/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
import type { DtoESimOffer } from './DtoESimOffer';
import {
    DtoESimOfferFromJSON,
    DtoESimOfferFromJSONTyped,
    DtoESimOfferToJSON,
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
export function instanceOfDtoESimOffersResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "limit" in value;
    isInstance = isInstance && "list" in value;
    isInstance = isInstance && "offset" in value;
    isInstance = isInstance && "total" in value;

    return isInstance;
}

export function DtoESimOffersResponseFromJSON(json: any): DtoESimOffersResponse {
    return DtoESimOffersResponseFromJSONTyped(json, false);
}

export function DtoESimOffersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoESimOffersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'limit': json['limit'],
        'list': ((json['list'] as Array<any>).map(DtoESimOfferFromJSON)),
        'offset': json['offset'],
        'total': json['total'],
    };
}

export function DtoESimOffersResponseToJSON(value?: DtoESimOffersResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'limit': value.limit,
        'list': ((value.list as Array<any>).map(DtoESimOfferToJSON)),
        'offset': value.offset,
        'total': value.total,
    };
}

