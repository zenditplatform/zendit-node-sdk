/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
import type { DtoZend } from './DtoZend';
import {
    DtoZendFromJSON,
    DtoZendFromJSONTyped,
    DtoZendToJSON,
    DtoZendToJSONTyped,
} from './DtoZend';
import type { DtoPrice } from './DtoPrice';
import {
    DtoPriceFromJSON,
    DtoPriceFromJSONTyped,
    DtoPriceToJSON,
    DtoPriceToJSONTyped,
} from './DtoPrice';
import type { DtoPriceType } from './DtoPriceType';
import {
    DtoPriceTypeFromJSON,
    DtoPriceTypeFromJSONTyped,
    DtoPriceTypeToJSON,
    DtoPriceTypeToJSONTyped,
} from './DtoPriceType';
import type { DtoCost } from './DtoCost';
import {
    DtoCostFromJSON,
    DtoCostFromJSONTyped,
    DtoCostToJSON,
    DtoCostToJSONTyped,
} from './DtoCost';
import type { DtoProductType } from './DtoProductType';
import {
    DtoProductTypeFromJSON,
    DtoProductTypeFromJSONTyped,
    DtoProductTypeToJSON,
    DtoProductTypeToJSONTyped,
} from './DtoProductType';

/**
 * 
 * @export
 * @interface DtoTopupOffer
 */
export interface DtoTopupOffer {
    /**
     * 
     * @type {string}
     * @memberof DtoTopupOffer
     */
    brand: string;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupOffer
     */
    brandName: string;
    /**
     * 
     * @type {DtoCost}
     * @memberof DtoTopupOffer
     */
    cost: DtoCost;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupOffer
     */
    country: string;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupOffer
     */
    createdAt: string;
    /**
     * 
     * @type {number}
     * @memberof DtoTopupOffer
     */
    dataGB: number;
    /**
     * 
     * @type {boolean}
     * @memberof DtoTopupOffer
     */
    dataUnlimited: boolean;
    /**
     * 
     * @type {number}
     * @memberof DtoTopupOffer
     */
    durationDays: number;
    /**
     * 
     * @type {boolean}
     * @memberof DtoTopupOffer
     */
    enabled: boolean;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupOffer
     */
    notes: string;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupOffer
     */
    offerId: string;
    /**
     * 
     * @type {DtoPrice}
     * @memberof DtoTopupOffer
     */
    price: DtoPrice;
    /**
     * 
     * @type {DtoPriceType}
     * @memberof DtoTopupOffer
     */
    priceType: DtoPriceType;
    /**
     * 
     * @type {DtoProductType}
     * @memberof DtoTopupOffer
     */
    productType: DtoProductType;
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoTopupOffer
     */
    regions: Array<string>;
    /**
     * 
     * @type {DtoZend}
     * @memberof DtoTopupOffer
     */
    send: DtoZend;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupOffer
     */
    shortNotes: string;
    /**
     * 
     * @type {number}
     * @memberof DtoTopupOffer
     */
    smsNumber: number;
    /**
     * 
     * @type {boolean}
     * @memberof DtoTopupOffer
     */
    smsUnlimited: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoTopupOffer
     */
    subTypes: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupOffer
     */
    updatedAt: string;
    /**
     * 
     * @type {number}
     * @memberof DtoTopupOffer
     */
    voiceMinutes: number;
    /**
     * 
     * @type {boolean}
     * @memberof DtoTopupOffer
     */
    voiceUnlimited: boolean;
}



/**
 * Check if a given object implements the DtoTopupOffer interface.
 */
export function instanceOfDtoTopupOffer(value: object): value is DtoTopupOffer {
    if (!('brand' in value) || value['brand'] === undefined) return false;
    if (!('brandName' in value) || value['brandName'] === undefined) return false;
    if (!('cost' in value) || value['cost'] === undefined) return false;
    if (!('country' in value) || value['country'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('dataGB' in value) || value['dataGB'] === undefined) return false;
    if (!('dataUnlimited' in value) || value['dataUnlimited'] === undefined) return false;
    if (!('durationDays' in value) || value['durationDays'] === undefined) return false;
    if (!('enabled' in value) || value['enabled'] === undefined) return false;
    if (!('notes' in value) || value['notes'] === undefined) return false;
    if (!('offerId' in value) || value['offerId'] === undefined) return false;
    if (!('price' in value) || value['price'] === undefined) return false;
    if (!('priceType' in value) || value['priceType'] === undefined) return false;
    if (!('productType' in value) || value['productType'] === undefined) return false;
    if (!('regions' in value) || value['regions'] === undefined) return false;
    if (!('send' in value) || value['send'] === undefined) return false;
    if (!('shortNotes' in value) || value['shortNotes'] === undefined) return false;
    if (!('smsNumber' in value) || value['smsNumber'] === undefined) return false;
    if (!('smsUnlimited' in value) || value['smsUnlimited'] === undefined) return false;
    if (!('subTypes' in value) || value['subTypes'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    if (!('voiceMinutes' in value) || value['voiceMinutes'] === undefined) return false;
    if (!('voiceUnlimited' in value) || value['voiceUnlimited'] === undefined) return false;
    return true;
}

export function DtoTopupOfferFromJSON(json: any): DtoTopupOffer {
    return DtoTopupOfferFromJSONTyped(json, false);
}

export function DtoTopupOfferFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoTopupOffer {
    if (json == null) {
        return json;
    }
    return {
        
        'brand': json['brand'],
        'brandName': json['brandName'],
        'cost': DtoCostFromJSON(json['cost']),
        'country': json['country'],
        'createdAt': json['createdAt'],
        'dataGB': json['dataGB'],
        'dataUnlimited': json['dataUnlimited'],
        'durationDays': json['durationDays'],
        'enabled': json['enabled'],
        'notes': json['notes'],
        'offerId': json['offerId'],
        'price': DtoPriceFromJSON(json['price']),
        'priceType': DtoPriceTypeFromJSON(json['priceType']),
        'productType': DtoProductTypeFromJSON(json['productType']),
        'regions': json['regions'],
        'send': DtoZendFromJSON(json['send']),
        'shortNotes': json['shortNotes'],
        'smsNumber': json['smsNumber'],
        'smsUnlimited': json['smsUnlimited'],
        'subTypes': json['subTypes'],
        'updatedAt': json['updatedAt'],
        'voiceMinutes': json['voiceMinutes'],
        'voiceUnlimited': json['voiceUnlimited'],
    };
}

export function DtoTopupOfferToJSON(json: any): DtoTopupOffer {
    return DtoTopupOfferToJSONTyped(json, false);
}

export function DtoTopupOfferToJSONTyped(value?: DtoTopupOffer | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'brand': value['brand'],
        'brandName': value['brandName'],
        'cost': DtoCostToJSON(value['cost']),
        'country': value['country'],
        'createdAt': value['createdAt'],
        'dataGB': value['dataGB'],
        'dataUnlimited': value['dataUnlimited'],
        'durationDays': value['durationDays'],
        'enabled': value['enabled'],
        'notes': value['notes'],
        'offerId': value['offerId'],
        'price': DtoPriceToJSON(value['price']),
        'priceType': DtoPriceTypeToJSON(value['priceType']),
        'productType': DtoProductTypeToJSON(value['productType']),
        'regions': value['regions'],
        'send': DtoZendToJSON(value['send']),
        'shortNotes': value['shortNotes'],
        'smsNumber': value['smsNumber'],
        'smsUnlimited': value['smsUnlimited'],
        'subTypes': value['subTypes'],
        'updatedAt': value['updatedAt'],
        'voiceMinutes': value['voiceMinutes'],
        'voiceUnlimited': value['voiceUnlimited'],
    };
}

