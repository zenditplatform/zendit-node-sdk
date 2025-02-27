/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
import type { DtoOfferBrand } from './DtoOfferBrand';
import {
    DtoOfferBrandFromJSON,
    DtoOfferBrandFromJSONTyped,
    DtoOfferBrandToJSON,
    DtoOfferBrandToJSONTyped,
} from './DtoOfferBrand';

/**
 * 
 * @export
 * @interface DtoBrandsResponse
 */
export interface DtoBrandsResponse {
    /**
     * 
     * @type {number}
     * @memberof DtoBrandsResponse
     */
    limit: number;
    /**
     * 
     * @type {Array<DtoOfferBrand>}
     * @memberof DtoBrandsResponse
     */
    list: Array<DtoOfferBrand>;
    /**
     * 
     * @type {number}
     * @memberof DtoBrandsResponse
     */
    offset: number;
    /**
     * 
     * @type {number}
     * @memberof DtoBrandsResponse
     */
    total: number;
}

/**
 * Check if a given object implements the DtoBrandsResponse interface.
 */
export function instanceOfDtoBrandsResponse(value: object): value is DtoBrandsResponse {
    if (!('limit' in value) || value['limit'] === undefined) return false;
    if (!('list' in value) || value['list'] === undefined) return false;
    if (!('offset' in value) || value['offset'] === undefined) return false;
    if (!('total' in value) || value['total'] === undefined) return false;
    return true;
}

export function DtoBrandsResponseFromJSON(json: any): DtoBrandsResponse {
    return DtoBrandsResponseFromJSONTyped(json, false);
}

export function DtoBrandsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoBrandsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'limit': json['limit'],
        'list': ((json['list'] as Array<any>).map(DtoOfferBrandFromJSON)),
        'offset': json['offset'],
        'total': json['total'],
    };
}

export function DtoBrandsResponseToJSON(json: any): DtoBrandsResponse {
    return DtoBrandsResponseToJSONTyped(json, false);
}

export function DtoBrandsResponseToJSONTyped(value?: DtoBrandsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'limit': value['limit'],
        'list': ((value['list'] as Array<any>).map(DtoOfferBrandToJSON)),
        'offset': value['offset'],
        'total': value['total'],
    };
}

