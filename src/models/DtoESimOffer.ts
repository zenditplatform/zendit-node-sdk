/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
import type { DtoCost } from './DtoCost';
import {
    DtoCostFromJSON,
    DtoCostFromJSONTyped,
    DtoCostToJSON,
} from './DtoCost';
import type { DtoESimRoaming } from './DtoESimRoaming';
import {
    DtoESimRoamingFromJSON,
    DtoESimRoamingFromJSONTyped,
    DtoESimRoamingToJSON,
} from './DtoESimRoaming';
import type { DtoPrice } from './DtoPrice';
import {
    DtoPriceFromJSON,
    DtoPriceFromJSONTyped,
    DtoPriceToJSON,
} from './DtoPrice';
import type { DtoPriceType } from './DtoPriceType';
import {
    DtoPriceTypeFromJSON,
    DtoPriceTypeFromJSONTyped,
    DtoPriceTypeToJSON,
} from './DtoPriceType';
import type { DtoProductType } from './DtoProductType';
import {
    DtoProductTypeFromJSON,
    DtoProductTypeFromJSONTyped,
    DtoProductTypeToJSON,
} from './DtoProductType';

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
export function instanceOfDtoESimOffer(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "brand" in value;
    isInstance = isInstance && "cost" in value;
    isInstance = isInstance && "country" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "dataGB" in value;
    isInstance = isInstance && "dataSpeeds" in value;
    isInstance = isInstance && "dataUnlimited" in value;
    isInstance = isInstance && "durationDays" in value;
    isInstance = isInstance && "enabled" in value;
    isInstance = isInstance && "notes" in value;
    isInstance = isInstance && "offerId" in value;
    isInstance = isInstance && "price" in value;
    isInstance = isInstance && "priceType" in value;
    isInstance = isInstance && "productType" in value;
    isInstance = isInstance && "regions" in value;
    isInstance = isInstance && "roaming" in value;
    isInstance = isInstance && "shortNotes" in value;
    isInstance = isInstance && "smsNumber" in value;
    isInstance = isInstance && "smsUnlimited" in value;
    isInstance = isInstance && "subTypes" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "voiceMinutes" in value;
    isInstance = isInstance && "voiceUnlimited" in value;

    return isInstance;
}

export function DtoESimOfferFromJSON(json: any): DtoESimOffer {
    return DtoESimOfferFromJSONTyped(json, false);
}

export function DtoESimOfferFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoESimOffer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'brand': json['brand'],
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

export function DtoESimOfferToJSON(value?: DtoESimOffer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'brand': value.brand,
        'cost': DtoCostToJSON(value.cost),
        'country': value.country,
        'createdAt': value.createdAt,
        'dataGB': value.dataGB,
        'dataSpeeds': value.dataSpeeds,
        'dataUnlimited': value.dataUnlimited,
        'durationDays': value.durationDays,
        'enabled': value.enabled,
        'notes': value.notes,
        'offerId': value.offerId,
        'price': DtoPriceToJSON(value.price),
        'priceType': DtoPriceTypeToJSON(value.priceType),
        'productType': DtoProductTypeToJSON(value.productType),
        'regions': value.regions,
        'roaming': ((value.roaming as Array<any>).map(DtoESimRoamingToJSON)),
        'shortNotes': value.shortNotes,
        'smsNumber': value.smsNumber,
        'smsUnlimited': value.smsUnlimited,
        'subTypes': value.subTypes,
        'updatedAt': value.updatedAt,
        'voiceMinutes': value.voiceMinutes,
        'voiceUnlimited': value.voiceUnlimited,
    };
}

