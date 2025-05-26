/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DtoPromoDescription
 */
export interface DtoPromoDescription {
    /**
     * 
     * @type {string}
     * @memberof DtoPromoDescription
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoPromoDescription
     */
    language?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoPromoDescription
     */
    terms?: string;
}

/**
 * Check if a given object implements the DtoPromoDescription interface.
 */
export function instanceOfDtoPromoDescription(value: object): value is DtoPromoDescription {
    return true;
}

export function DtoPromoDescriptionFromJSON(json: any): DtoPromoDescription {
    return DtoPromoDescriptionFromJSONTyped(json, false);
}

export function DtoPromoDescriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoPromoDescription {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'] == null ? undefined : json['description'],
        'language': json['language'] == null ? undefined : json['language'],
        'terms': json['terms'] == null ? undefined : json['terms'],
    };
}

export function DtoPromoDescriptionToJSON(json: any): DtoPromoDescription {
    return DtoPromoDescriptionToJSONTyped(json, false);
}

export function DtoPromoDescriptionToJSONTyped(value?: DtoPromoDescription | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'description': value['description'],
        'language': value['language'],
        'terms': value['terms'],
    };
}

