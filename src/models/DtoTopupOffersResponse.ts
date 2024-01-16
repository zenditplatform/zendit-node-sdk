/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
import type { DtoTopupOffer } from './DtoTopupOffer';
import {
    DtoTopupOfferFromJSON,
    DtoTopupOfferFromJSONTyped,
    DtoTopupOfferToJSON,
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
export function instanceOfDtoTopupOffersResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "limit" in value;
    isInstance = isInstance && "list" in value;
    isInstance = isInstance && "offset" in value;
    isInstance = isInstance && "total" in value;

    return isInstance;
}

export function DtoTopupOffersResponseFromJSON(json: any): DtoTopupOffersResponse {
    return DtoTopupOffersResponseFromJSONTyped(json, false);
}

export function DtoTopupOffersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoTopupOffersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'limit': json['limit'],
        'list': ((json['list'] as Array<any>).map(DtoTopupOfferFromJSON)),
        'offset': json['offset'],
        'total': json['total'],
    };
}

export function DtoTopupOffersResponseToJSON(value?: DtoTopupOffersResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'limit': value.limit,
        'list': ((value.list as Array<any>).map(DtoTopupOfferToJSON)),
        'offset': value.offset,
        'total': value.total,
    };
}

