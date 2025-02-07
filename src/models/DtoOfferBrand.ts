/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DtoOfferBrand
 */
export interface DtoOfferBrand {
    /**
     * 
     * @type {string}
     * @memberof DtoOfferBrand
     */
    brand: string;
    /**
     * 
     * @type {string}
     * @memberof DtoOfferBrand
     */
    brandName: string;
}

/**
 * Check if a given object implements the DtoOfferBrand interface.
 */
export function instanceOfDtoOfferBrand(value: object): value is DtoOfferBrand {
    if (!('brand' in value) || value['brand'] === undefined) return false;
    if (!('brandName' in value) || value['brandName'] === undefined) return false;
    return true;
}

export function DtoOfferBrandFromJSON(json: any): DtoOfferBrand {
    return DtoOfferBrandFromJSONTyped(json, false);
}

export function DtoOfferBrandFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoOfferBrand {
    if (json == null) {
        return json;
    }
    return {
        
        'brand': json['brand'],
        'brandName': json['brandName'],
    };
}

export function DtoOfferBrandToJSON(json: any): DtoOfferBrand {
    return DtoOfferBrandToJSONTyped(json, false);
}

export function DtoOfferBrandToJSONTyped(value?: DtoOfferBrand | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'brand': value['brand'],
        'brandName': value['brandName'],
    };
}

