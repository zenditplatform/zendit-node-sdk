/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
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
import type { DtoESimRoaming } from './DtoESimRoaming';
import {
    DtoESimRoamingFromJSON,
    DtoESimRoamingFromJSONTyped,
    DtoESimRoamingToJSON,
    DtoESimRoamingToJSONTyped,
} from './DtoESimRoaming';

/**
 * 
 * @export
 * @interface DtoESimOffer
 */
export interface DtoESimOffer {
    /**
     * 
     * @type {string}
     * @memberof DtoESimOffer
     */
    brand: string;
    /**
     * 
     * @type {string}
     * @memberof DtoESimOffer
     */
    brandName: string;
    /**
     * 
     * @type {DtoCost}
     * @memberof DtoESimOffer
     */
    cost: DtoCost;
    /**
     * 
     * @type {string}
     * @memberof DtoESimOffer
     */
    country: string;
    /**
     * 
     * @type {string}
     * @memberof DtoESimOffer
     */
    createdAt: string;
    /**
     * 
     * @type {number}
     * @memberof DtoESimOffer
     */
    dataGB: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoESimOffer
     */
    dataSpeeds: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof DtoESimOffer
     */
    dataUnlimited: boolean;
    /**
     * 
     * @type {number}
     * @memberof DtoESimOffer
     */
    durationDays: number;
    /**
     * 
     * @type {boolean}
     * @memberof DtoESimOffer
     */
    enabled: boolean;
    /**
     * 
     * @type {string}
     * @memberof DtoESimOffer
     */
    notes: string;
    /**
     * 
     * @type {string}
     * @memberof DtoESimOffer
     */
    offerId: string;
    /**
     * 
     * @type {DtoPrice}
     * @memberof DtoESimOffer
     */
    price: DtoPrice;
    /**
     * 
     * @type {DtoPriceType}
     * @memberof DtoESimOffer
     */
    priceType: DtoPriceType;
    /**
     * 
     * @type {DtoProductType}
     * @memberof DtoESimOffer
     */
    productType: DtoProductType;
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoESimOffer
     */
    regions: Array<string>;
    /**
     * 
     * @type {Array<DtoESimRoaming>}
     * @memberof DtoESimOffer
     */
    roaming: Array<DtoESimRoaming>;
    /**
     * 
     * @type {string}
     * @memberof DtoESimOffer
     */
    shortNotes: string;
    /**
     * 
     * @type {number}
     * @memberof DtoESimOffer
     */
    smsNumber: number;
    /**
     * 
     * @type {boolean}
     * @memberof DtoESimOffer
     */
    smsUnlimited: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoESimOffer
     */
    subTypes: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof DtoESimOffer
     */
    updatedAt: string;
    /**
     * 
     * @type {number}
     * @memberof DtoESimOffer
     */
    voiceMinutes: number;
    /**
     * 
     * @type {boolean}
     * @memberof DtoESimOffer
     */
    voiceUnlimited: boolean;
}



/**
 * Check if a given object implements the DtoESimOffer interface.
 */
export function instanceOfDtoESimOffer(value: object): value is DtoESimOffer {
    if (!('brand' in value) || value['brand'] === undefined) return false;
    if (!('brandName' in value) || value['brandName'] === undefined) return false;
    if (!('cost' in value) || value['cost'] === undefined) return false;
    if (!('country' in value) || value['country'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('dataGB' in value) || value['dataGB'] === undefined) return false;
    if (!('dataSpeeds' in value) || value['dataSpeeds'] === undefined) return false;
    if (!('dataUnlimited' in value) || value['dataUnlimited'] === undefined) return false;
    if (!('durationDays' in value) || value['durationDays'] === undefined) return false;
    if (!('enabled' in value) || value['enabled'] === undefined) return false;
    if (!('notes' in value) || value['notes'] === undefined) return false;
    if (!('offerId' in value) || value['offerId'] === undefined) return false;
    if (!('price' in value) || value['price'] === undefined) return false;
    if (!('priceType' in value) || value['priceType'] === undefined) return false;
    if (!('productType' in value) || value['productType'] === undefined) return false;
    if (!('regions' in value) || value['regions'] === undefined) return false;
    if (!('roaming' in value) || value['roaming'] === undefined) return false;
    if (!('shortNotes' in value) || value['shortNotes'] === undefined) return false;
    if (!('smsNumber' in value) || value['smsNumber'] === undefined) return false;
    if (!('smsUnlimited' in value) || value['smsUnlimited'] === undefined) return false;
    if (!('subTypes' in value) || value['subTypes'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    if (!('voiceMinutes' in value) || value['voiceMinutes'] === undefined) return false;
    if (!('voiceUnlimited' in value) || value['voiceUnlimited'] === undefined) return false;
    return true;
}

export function DtoESimOfferFromJSON(json: any): DtoESimOffer {
    return DtoESimOfferFromJSONTyped(json, false);
}

export function DtoESimOfferFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoESimOffer {
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
        'dataSpeeds': json['dataSpeeds'],
        'dataUnlimited': json['dataUnlimited'],
        'durationDays': json['durationDays'],
        'enabled': json['enabled'],
        'notes': json['notes'],
        'offerId': json['offerId'],
        'price': DtoPriceFromJSON(json['price']),
        'priceType': DtoPriceTypeFromJSON(json['priceType']),
        'productType': DtoProductTypeFromJSON(json['productType']),
        'regions': json['regions'],
        'roaming': ((json['roaming'] as Array<any>).map(DtoESimRoamingFromJSON)),
        'shortNotes': json['shortNotes'],
        'smsNumber': json['smsNumber'],
        'smsUnlimited': json['smsUnlimited'],
        'subTypes': json['subTypes'],
        'updatedAt': json['updatedAt'],
        'voiceMinutes': json['voiceMinutes'],
        'voiceUnlimited': json['voiceUnlimited'],
    };
}

  export function DtoESimOfferToJSON(json: any): DtoESimOffer {
      return DtoESimOfferToJSONTyped(json, false);
  }

  export function DtoESimOfferToJSONTyped(value?: DtoESimOffer | null, ignoreDiscriminator: boolean = false): any {
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
        'dataSpeeds': value['dataSpeeds'],
        'dataUnlimited': value['dataUnlimited'],
        'durationDays': value['durationDays'],
        'enabled': value['enabled'],
        'notes': value['notes'],
        'offerId': value['offerId'],
        'price': DtoPriceToJSON(value['price']),
        'priceType': DtoPriceTypeToJSON(value['priceType']),
        'productType': DtoProductTypeToJSON(value['productType']),
        'regions': value['regions'],
        'roaming': ((value['roaming'] as Array<any>).map(DtoESimRoamingToJSON)),
        'shortNotes': value['shortNotes'],
        'smsNumber': value['smsNumber'],
        'smsUnlimited': value['smsUnlimited'],
        'subTypes': value['subTypes'],
        'updatedAt': value['updatedAt'],
        'voiceMinutes': value['voiceMinutes'],
        'voiceUnlimited': value['voiceUnlimited'],
    };
}

