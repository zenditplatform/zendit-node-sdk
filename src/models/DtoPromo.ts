/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
import type { DtoPromoDescription } from './DtoPromoDescription';
import {
    DtoPromoDescriptionFromJSON,
    DtoPromoDescriptionFromJSONTyped,
    DtoPromoDescriptionToJSON,
    DtoPromoDescriptionToJSONTyped,
} from './DtoPromoDescription';
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
 * @interface DtoPromo
 */
export interface DtoPromo {
    /**
     * 
     * @type {DtoOfferBrand}
     * @memberof DtoPromo
     */
    brand?: DtoOfferBrand;
    /**
     * 
     * @type {string}
     * @memberof DtoPromo
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoPromo
     */
    createdAt?: string;
    /**
     * 
     * @type {Array<DtoPromoDescription>}
     * @memberof DtoPromo
     */
    description?: Array<DtoPromoDescription>;
    /**
     * 
     * @type {string}
     * @memberof DtoPromo
     */
    endAt?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoPromo
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof DtoPromo
     */
    maxValue?: number;
    /**
     * 
     * @type {number}
     * @memberof DtoPromo
     */
    minValue?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoPromo
     */
    regions?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof DtoPromo
     */
    startAt?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoPromo
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoPromo
     */
    updatedAt?: string;
}

/**
 * Check if a given object implements the DtoPromo interface.
 */
export function instanceOfDtoPromo(value: object): value is DtoPromo {
    return true;
}

export function DtoPromoFromJSON(json: any): DtoPromo {
    return DtoPromoFromJSONTyped(json, false);
}

export function DtoPromoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoPromo {
    if (json == null) {
        return json;
    }
    return {
        
        'brand': json['brand'] == null ? undefined : DtoOfferBrandFromJSON(json['brand']),
        'country': json['country'] == null ? undefined : json['country'],
        'createdAt': json['createdAt'] == null ? undefined : json['createdAt'],
        'description': json['description'] == null ? undefined : ((json['description'] as Array<any>).map(DtoPromoDescriptionFromJSON)),
        'endAt': json['endAt'] == null ? undefined : json['endAt'],
        'id': json['id'] == null ? undefined : json['id'],
        'maxValue': json['maxValue'] == null ? undefined : json['maxValue'],
        'minValue': json['minValue'] == null ? undefined : json['minValue'],
        'regions': json['regions'] == null ? undefined : json['regions'],
        'startAt': json['startAt'] == null ? undefined : json['startAt'],
        'status': json['status'] == null ? undefined : json['status'],
        'updatedAt': json['updatedAt'] == null ? undefined : json['updatedAt'],
    };
}

export function DtoPromoToJSON(json: any): DtoPromo {
    return DtoPromoToJSONTyped(json, false);
}

export function DtoPromoToJSONTyped(value?: DtoPromo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'brand': DtoOfferBrandToJSON(value['brand']),
        'country': value['country'],
        'createdAt': value['createdAt'],
        'description': value['description'] == null ? undefined : ((value['description'] as Array<any>).map(DtoPromoDescriptionToJSON)),
        'endAt': value['endAt'],
        'id': value['id'],
        'maxValue': value['maxValue'],
        'minValue': value['minValue'],
        'regions': value['regions'],
        'startAt': value['startAt'],
        'status': value['status'],
        'updatedAt': value['updatedAt'],
    };
}

