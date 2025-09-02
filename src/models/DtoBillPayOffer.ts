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
 * @interface DtoBillPayOffer
 */
export interface DtoBillPayOffer {
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoBillPayOffer
     */
    billRetrievalRequiredFields: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof DtoBillPayOffer
     */
    brand: string;
    /**
     * 
     * @type {string}
     * @memberof DtoBillPayOffer
     */
    brandName: string;
    /**
     * 
     * @type {DtoCost}
     * @memberof DtoBillPayOffer
     */
    cost: DtoCost;
    /**
     * 
     * @type {string}
     * @memberof DtoBillPayOffer
     */
    country: string;
    /**
     * 
     * @type {string}
     * @memberof DtoBillPayOffer
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof DtoBillPayOffer
     */
    cutoffTime: string;
    /**
     * 
     * @type {number}
     * @memberof DtoBillPayOffer
     */
    deliverySpeedSeconds: number;
    /**
     * Common fields (similar to ESimOffer or VoucherOffer)
     * @type {boolean}
     * @memberof DtoBillPayOffer
     */
    enabled: boolean;
    /**
     * 
     * @type {string}
     * @memberof DtoBillPayOffer
     */
    notes: string;
    /**
     * 
     * @type {string}
     * @memberof DtoBillPayOffer
     */
    offerId: string;
    /**
     * 
     * @type {DtoPrice}
     * @memberof DtoBillPayOffer
     */
    price: DtoPrice;
    /**
     * 
     * @type {DtoPriceType}
     * @memberof DtoBillPayOffer
     */
    priceType: DtoPriceType;
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoBillPayOffer
     */
    processingDays: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof DtoBillPayOffer
     */
    processingOnHolidays: boolean;
    /**
     * 
     * @type {DtoProductType}
     * @memberof DtoBillPayOffer
     */
    productType: DtoProductType;
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoBillPayOffer
     */
    regions: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoBillPayOffer
     */
    requiredFields: Array<string>;
    /**
     * 
     * @type {DtoZend}
     * @memberof DtoBillPayOffer
     */
    send: DtoZend;
    /**
     * 
     * @type {string}
     * @memberof DtoBillPayOffer
     */
    shortNotes: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoBillPayOffer
     */
    subTypes: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof DtoBillPayOffer
     */
    supportsBillRetrieval: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DtoBillPayOffer
     */
    supportsOverpayment: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DtoBillPayOffer
     */
    supportsUnderpayment: boolean;
    /**
     * 
     * @type {string}
     * @memberof DtoBillPayOffer
     */
    updatedAt: string;
}



/**
 * Check if a given object implements the DtoBillPayOffer interface.
 */
export function instanceOfDtoBillPayOffer(value: object): value is DtoBillPayOffer {
    if (!('billRetrievalRequiredFields' in value) || value['billRetrievalRequiredFields'] === undefined) return false;
    if (!('brand' in value) || value['brand'] === undefined) return false;
    if (!('brandName' in value) || value['brandName'] === undefined) return false;
    if (!('cost' in value) || value['cost'] === undefined) return false;
    if (!('country' in value) || value['country'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('cutoffTime' in value) || value['cutoffTime'] === undefined) return false;
    if (!('deliverySpeedSeconds' in value) || value['deliverySpeedSeconds'] === undefined) return false;
    if (!('enabled' in value) || value['enabled'] === undefined) return false;
    if (!('notes' in value) || value['notes'] === undefined) return false;
    if (!('offerId' in value) || value['offerId'] === undefined) return false;
    if (!('price' in value) || value['price'] === undefined) return false;
    if (!('priceType' in value) || value['priceType'] === undefined) return false;
    if (!('processingDays' in value) || value['processingDays'] === undefined) return false;
    if (!('processingOnHolidays' in value) || value['processingOnHolidays'] === undefined) return false;
    if (!('productType' in value) || value['productType'] === undefined) return false;
    if (!('regions' in value) || value['regions'] === undefined) return false;
    if (!('requiredFields' in value) || value['requiredFields'] === undefined) return false;
    if (!('send' in value) || value['send'] === undefined) return false;
    if (!('shortNotes' in value) || value['shortNotes'] === undefined) return false;
    if (!('subTypes' in value) || value['subTypes'] === undefined) return false;
    if (!('supportsBillRetrieval' in value) || value['supportsBillRetrieval'] === undefined) return false;
    if (!('supportsOverpayment' in value) || value['supportsOverpayment'] === undefined) return false;
    if (!('supportsUnderpayment' in value) || value['supportsUnderpayment'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function DtoBillPayOfferFromJSON(json: any): DtoBillPayOffer {
    return DtoBillPayOfferFromJSONTyped(json, false);
}

export function DtoBillPayOfferFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoBillPayOffer {
    if (json == null) {
        return json;
    }
    return {
        
        'billRetrievalRequiredFields': json['billRetrievalRequiredFields'],
        'brand': json['brand'],
        'brandName': json['brandName'],
        'cost': DtoCostFromJSON(json['cost']),
        'country': json['country'],
        'createdAt': json['createdAt'],
        'cutoffTime': json['cutoffTime'],
        'deliverySpeedSeconds': json['deliverySpeedSeconds'],
        'enabled': json['enabled'],
        'notes': json['notes'],
        'offerId': json['offerId'],
        'price': DtoPriceFromJSON(json['price']),
        'priceType': DtoPriceTypeFromJSON(json['priceType']),
        'processingDays': json['processingDays'],
        'processingOnHolidays': json['processingOnHolidays'],
        'productType': DtoProductTypeFromJSON(json['productType']),
        'regions': json['regions'],
        'requiredFields': json['requiredFields'],
        'send': DtoZendFromJSON(json['send']),
        'shortNotes': json['shortNotes'],
        'subTypes': json['subTypes'],
        'supportsBillRetrieval': json['supportsBillRetrieval'],
        'supportsOverpayment': json['supportsOverpayment'],
        'supportsUnderpayment': json['supportsUnderpayment'],
        'updatedAt': json['updatedAt'],
    };
}

export function DtoBillPayOfferToJSON(json: any): DtoBillPayOffer {
    return DtoBillPayOfferToJSONTyped(json, false);
}

export function DtoBillPayOfferToJSONTyped(value?: DtoBillPayOffer | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'billRetrievalRequiredFields': value['billRetrievalRequiredFields'],
        'brand': value['brand'],
        'brandName': value['brandName'],
        'cost': DtoCostToJSON(value['cost']),
        'country': value['country'],
        'createdAt': value['createdAt'],
        'cutoffTime': value['cutoffTime'],
        'deliverySpeedSeconds': value['deliverySpeedSeconds'],
        'enabled': value['enabled'],
        'notes': value['notes'],
        'offerId': value['offerId'],
        'price': DtoPriceToJSON(value['price']),
        'priceType': DtoPriceTypeToJSON(value['priceType']),
        'processingDays': value['processingDays'],
        'processingOnHolidays': value['processingOnHolidays'],
        'productType': DtoProductTypeToJSON(value['productType']),
        'regions': value['regions'],
        'requiredFields': value['requiredFields'],
        'send': DtoZendToJSON(value['send']),
        'shortNotes': value['shortNotes'],
        'subTypes': value['subTypes'],
        'supportsBillRetrieval': value['supportsBillRetrieval'],
        'supportsOverpayment': value['supportsOverpayment'],
        'supportsUnderpayment': value['supportsUnderpayment'],
        'updatedAt': value['updatedAt'],
    };
}

