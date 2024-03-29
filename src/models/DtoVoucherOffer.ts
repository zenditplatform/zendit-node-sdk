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
export function instanceOfDtoVoucherOffer(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "brand" in value;
    isInstance = isInstance && "cost" in value;
    isInstance = isInstance && "country" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "enabled" in value;
    isInstance = isInstance && "notes" in value;
    isInstance = isInstance && "offerId" in value;
    isInstance = isInstance && "price" in value;
    isInstance = isInstance && "priceType" in value;
    isInstance = isInstance && "productType" in value;
    isInstance = isInstance && "regions" in value;
    isInstance = isInstance && "requiredFields" in value;
    isInstance = isInstance && "send" in value;
    isInstance = isInstance && "shortNotes" in value;
    isInstance = isInstance && "subTypes" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function DtoVoucherOfferFromJSON(json: any): DtoVoucherOffer {
    return DtoVoucherOfferFromJSONTyped(json, false);
}

export function DtoVoucherOfferFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoVoucherOffer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'brand': json['brand'],
        'cost': DtoCostFromJSON(json['cost']),
        'country': json['country'],
        'createdAt': json['createdAt'],
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

export function DtoVoucherOfferToJSON(value?: DtoVoucherOffer | null): any {
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
        'enabled': value.enabled,
        'notes': value.notes,
        'offerId': value.offerId,
        'price': DtoPriceToJSON(value.price),
        'priceType': DtoPriceTypeToJSON(value.priceType),
        'productType': DtoProductTypeToJSON(value.productType),
        'regions': value.regions,
        'requiredFields': value.requiredFields,
        'send': DtoZendToJSON(value.send),
        'shortNotes': value.shortNotes,
        'subTypes': value.subTypes,
        'updatedAt': value.updatedAt,
    };
}

