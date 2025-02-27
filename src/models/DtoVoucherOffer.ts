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
 * @interface DtoVoucherOffer
 */
export interface DtoVoucherOffer {
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherOffer
     */
    brand: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherOffer
     */
    brandName: string;
    /**
     * 
     * @type {DtoCost}
     * @memberof DtoVoucherOffer
     */
    cost: DtoCost;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherOffer
     */
    country: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherOffer
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherOffer
     */
    deliveryType: string;
    /**
     * 
     * @type {boolean}
     * @memberof DtoVoucherOffer
     */
    enabled: boolean;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherOffer
     */
    notes: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherOffer
     */
    offerId: string;
    /**
     * 
     * @type {DtoPrice}
     * @memberof DtoVoucherOffer
     */
    price: DtoPrice;
    /**
     * 
     * @type {DtoPriceType}
     * @memberof DtoVoucherOffer
     */
    priceType: DtoPriceType;
    /**
     * 
     * @type {DtoProductType}
     * @memberof DtoVoucherOffer
     */
    productType: DtoProductType;
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoVoucherOffer
     */
    regions: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoVoucherOffer
     */
    requiredFields: Array<string>;
    /**
     * 
     * @type {DtoZend}
     * @memberof DtoVoucherOffer
     */
    send: DtoZend;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherOffer
     */
    shortNotes: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoVoucherOffer
     */
    subTypes: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherOffer
     */
    updatedAt: string;
}



/**
 * Check if a given object implements the DtoVoucherOffer interface.
 */
export function instanceOfDtoVoucherOffer(value: object): value is DtoVoucherOffer {
    if (!('brand' in value) || value['brand'] === undefined) return false;
    if (!('brandName' in value) || value['brandName'] === undefined) return false;
    if (!('cost' in value) || value['cost'] === undefined) return false;
    if (!('country' in value) || value['country'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('deliveryType' in value) || value['deliveryType'] === undefined) return false;
    if (!('enabled' in value) || value['enabled'] === undefined) return false;
    if (!('notes' in value) || value['notes'] === undefined) return false;
    if (!('offerId' in value) || value['offerId'] === undefined) return false;
    if (!('price' in value) || value['price'] === undefined) return false;
    if (!('priceType' in value) || value['priceType'] === undefined) return false;
    if (!('productType' in value) || value['productType'] === undefined) return false;
    if (!('regions' in value) || value['regions'] === undefined) return false;
    if (!('requiredFields' in value) || value['requiredFields'] === undefined) return false;
    if (!('send' in value) || value['send'] === undefined) return false;
    if (!('shortNotes' in value) || value['shortNotes'] === undefined) return false;
    if (!('subTypes' in value) || value['subTypes'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function DtoVoucherOfferFromJSON(json: any): DtoVoucherOffer {
    return DtoVoucherOfferFromJSONTyped(json, false);
}

export function DtoVoucherOfferFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoVoucherOffer {
    if (json == null) {
        return json;
    }
    return {
        
        'brand': json['brand'],
        'brandName': json['brandName'],
        'cost': DtoCostFromJSON(json['cost']),
        'country': json['country'],
        'createdAt': json['createdAt'],
        'deliveryType': json['deliveryType'],
        'enabled': json['enabled'],
        'notes': json['notes'],
        'offerId': json['offerId'],
        'price': DtoPriceFromJSON(json['price']),
        'priceType': DtoPriceTypeFromJSON(json['priceType']),
        'productType': DtoProductTypeFromJSON(json['productType']),
        'regions': json['regions'],
        'requiredFields': json['requiredFields'],
        'send': DtoZendFromJSON(json['send']),
        'shortNotes': json['shortNotes'],
        'subTypes': json['subTypes'],
        'updatedAt': json['updatedAt'],
    };
}

export function DtoVoucherOfferToJSON(json: any): DtoVoucherOffer {
    return DtoVoucherOfferToJSONTyped(json, false);
}

export function DtoVoucherOfferToJSONTyped(value?: DtoVoucherOffer | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'brand': value['brand'],
        'brandName': value['brandName'],
        'cost': DtoCostToJSON(value['cost']),
        'country': value['country'],
        'createdAt': value['createdAt'],
        'deliveryType': value['deliveryType'],
        'enabled': value['enabled'],
        'notes': value['notes'],
        'offerId': value['offerId'],
        'price': DtoPriceToJSON(value['price']),
        'priceType': DtoPriceTypeToJSON(value['priceType']),
        'productType': DtoProductTypeToJSON(value['productType']),
        'regions': value['regions'],
        'requiredFields': value['requiredFields'],
        'send': DtoZendToJSON(value['send']),
        'shortNotes': value['shortNotes'],
        'subTypes': value['subTypes'],
        'updatedAt': value['updatedAt'],
    };
}

