/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
import type { DtoCost } from './DtoCost';
import {
    DtoCostFromJSON,
    DtoCostFromJSONTyped,
    DtoCostToJSON,
} from './DtoCost';
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
import type { DtoZend } from './DtoZend';
import {
    DtoZendFromJSON,
    DtoZendFromJSONTyped,
    DtoZendToJSON,
} from './DtoZend';

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
export function instanceOfDtoTopupOffer(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "brand" in value;
    isInstance = isInstance && "cost" in value;
    isInstance = isInstance && "country" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "dataGB" in value;
    isInstance = isInstance && "dataUnlimited" in value;
    isInstance = isInstance && "durationDays" in value;
    isInstance = isInstance && "enabled" in value;
    isInstance = isInstance && "notes" in value;
    isInstance = isInstance && "offerId" in value;
    isInstance = isInstance && "price" in value;
    isInstance = isInstance && "priceType" in value;
    isInstance = isInstance && "productType" in value;
    isInstance = isInstance && "regions" in value;
    isInstance = isInstance && "send" in value;
    isInstance = isInstance && "shortNotes" in value;
    isInstance = isInstance && "smsNumber" in value;
    isInstance = isInstance && "smsUnlimited" in value;
    isInstance = isInstance && "subTypes" in value;
    isInstance = isInstance && "updatedAt" in value;
    isInstance = isInstance && "voiceMinutes" in value;
    isInstance = isInstance && "voiceUnlimited" in value;

    return isInstance;
}

export function DtoTopupOfferFromJSON(json: any): DtoTopupOffer {
    return DtoTopupOfferFromJSONTyped(json, false);
}

export function DtoTopupOfferFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoTopupOffer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'brand': json['brand'],
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

export function DtoTopupOfferToJSON(value?: DtoTopupOffer | null): any {
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
        'dataUnlimited': value.dataUnlimited,
        'durationDays': value.durationDays,
        'enabled': value.enabled,
        'notes': value.notes,
        'offerId': value.offerId,
        'price': DtoPriceToJSON(value.price),
        'priceType': DtoPriceTypeToJSON(value.priceType),
        'productType': DtoProductTypeToJSON(value.productType),
        'regions': value.regions,
        'send': DtoZendToJSON(value.send),
        'shortNotes': value.shortNotes,
        'smsNumber': value.smsNumber,
        'smsUnlimited': value.smsUnlimited,
        'subTypes': value.subTypes,
        'updatedAt': value.updatedAt,
        'voiceMinutes': value.voiceMinutes,
        'voiceUnlimited': value.voiceUnlimited,
    };
}

