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
import type { DtoPromoStatus } from './DtoPromoStatus';
import {
    DtoPromoStatusFromJSON,
    DtoPromoStatusFromJSONTyped,
    DtoPromoStatusToJSON,
    DtoPromoStatusToJSONTyped,
} from './DtoPromoStatus';

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
     * @type {number}
     * @memberof DtoPromo
     */
    dataBonusGB?: number;
    /**
     * 
     * @type {number}
     * @memberof DtoPromo
     */
    dataMultiplier?: number;
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
    offerIds?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoPromo
     */
    regions?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof DtoPromo
     */
    smsBonusNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof DtoPromo
     */
    smsMultiplier?: number;
    /**
     * 
     * @type {string}
     * @memberof DtoPromo
     */
    startAt?: string;
    /**
     * 
     * @type {DtoPromoStatus}
     * @memberof DtoPromo
     */
    status?: DtoPromoStatus;
    /**
     * 
     * @type {string}
     * @memberof DtoPromo
     */
    updatedAt?: string;
    /**
     * 
     * @type {number}
     * @memberof DtoPromo
     */
    valueBonus?: number;
    /**
     * 
     * @type {number}
     * @memberof DtoPromo
     */
    valueMultiplier?: number;
    /**
     * 
     * @type {number}
     * @memberof DtoPromo
     */
    voiceBonusMinutes?: number;
    /**
     * 
     * @type {number}
     * @memberof DtoPromo
     */
    voiceMultiplier?: number;
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
        'dataBonusGB': json['dataBonusGB'] == null ? undefined : json['dataBonusGB'],
        'dataMultiplier': json['dataMultiplier'] == null ? undefined : json['dataMultiplier'],
        'description': json['description'] == null ? undefined : ((json['description'] as Array<any>).map(DtoPromoDescriptionFromJSON)),
        'endAt': json['endAt'] == null ? undefined : json['endAt'],
        'id': json['id'] == null ? undefined : json['id'],
        'maxValue': json['maxValue'] == null ? undefined : json['maxValue'],
        'minValue': json['minValue'] == null ? undefined : json['minValue'],
        'offerIds': json['offerIds'] == null ? undefined : json['offerIds'],
        'regions': json['regions'] == null ? undefined : json['regions'],
        'smsBonusNumber': json['smsBonusNumber'] == null ? undefined : json['smsBonusNumber'],
        'smsMultiplier': json['smsMultiplier'] == null ? undefined : json['smsMultiplier'],
        'startAt': json['startAt'] == null ? undefined : json['startAt'],
        'status': json['status'] == null ? undefined : DtoPromoStatusFromJSON(json['status']),
        'updatedAt': json['updatedAt'] == null ? undefined : json['updatedAt'],
        'valueBonus': json['valueBonus'] == null ? undefined : json['valueBonus'],
        'valueMultiplier': json['valueMultiplier'] == null ? undefined : json['valueMultiplier'],
        'voiceBonusMinutes': json['voiceBonusMinutes'] == null ? undefined : json['voiceBonusMinutes'],
        'voiceMultiplier': json['voiceMultiplier'] == null ? undefined : json['voiceMultiplier'],
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
        'dataBonusGB': value['dataBonusGB'],
        'dataMultiplier': value['dataMultiplier'],
        'description': value['description'] == null ? undefined : ((value['description'] as Array<any>).map(DtoPromoDescriptionToJSON)),
        'endAt': value['endAt'],
        'id': value['id'],
        'maxValue': value['maxValue'],
        'minValue': value['minValue'],
        'offerIds': value['offerIds'],
        'regions': value['regions'],
        'smsBonusNumber': value['smsBonusNumber'],
        'smsMultiplier': value['smsMultiplier'],
        'startAt': value['startAt'],
        'status': DtoPromoStatusToJSON(value['status']),
        'updatedAt': value['updatedAt'],
        'valueBonus': value['valueBonus'],
        'valueMultiplier': value['valueMultiplier'],
        'voiceBonusMinutes': value['voiceBonusMinutes'],
        'voiceMultiplier': value['voiceMultiplier'],
    };
}

