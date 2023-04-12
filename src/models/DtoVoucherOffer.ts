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
    brand?: string;
    /**
     * 
     * @type {DtoCost}
     * @memberof DtoVoucherOffer
     */
    cost?: DtoCost;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherOffer
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherOffer
     */
    createdAt?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DtoVoucherOffer
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherOffer
     */
    notes?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherOffer
     */
    offerId?: string;
    /**
     * 
     * @type {DtoPrice}
     * @memberof DtoVoucherOffer
     */
    price?: DtoPrice;
    /**
     * 
     * @type {DtoPriceType}
     * @memberof DtoVoucherOffer
     */
    priceType?: DtoPriceType;
    /**
     * 
     * @type {DtoProductType}
     * @memberof DtoVoucherOffer
     */
    productType?: DtoProductType;
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoVoucherOffer
     */
    requiredFields?: Array<string>;
    /**
     * 
     * @type {DtoZend}
     * @memberof DtoVoucherOffer
     */
    send?: DtoZend;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherOffer
     */
    shortNotes?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoVoucherOffer
     */
    subTypes?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherOffer
     */
    updatedAt?: string;
}

/**
 * Check if a given object implements the DtoVoucherOffer interface.
 */
export function instanceOfDtoVoucherOffer(value: object): boolean {
    let isInstance = true;

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
        
        'brand': !exists(json, 'brand') ? undefined : json['brand'],
        'cost': !exists(json, 'cost') ? undefined : DtoCostFromJSON(json['cost']),
        'country': !exists(json, 'country') ? undefined : json['country'],
        'createdAt': !exists(json, 'createdAt') ? undefined : json['createdAt'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'offerId': !exists(json, 'offerId') ? undefined : json['offerId'],
        'price': !exists(json, 'price') ? undefined : DtoPriceFromJSON(json['price']),
        'priceType': !exists(json, 'priceType') ? undefined : DtoPriceTypeFromJSON(json['priceType']),
        'productType': !exists(json, 'productType') ? undefined : DtoProductTypeFromJSON(json['productType']),
        'requiredFields': !exists(json, 'requiredFields') ? undefined : json['requiredFields'],
        'send': !exists(json, 'send') ? undefined : DtoZendFromJSON(json['send']),
        'shortNotes': !exists(json, 'shortNotes') ? undefined : json['shortNotes'],
        'subTypes': !exists(json, 'subTypes') ? undefined : json['subTypes'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
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
        'requiredFields': value.requiredFields,
        'send': DtoZendToJSON(value.send),
        'shortNotes': value.shortNotes,
        'subTypes': value.subTypes,
        'updatedAt': value.updatedAt,
    };
}

