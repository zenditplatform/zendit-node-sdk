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
    brand?: string;
    /**
     * 
     * @type {DtoCost}
     * @memberof DtoTopupOffer
     */
    cost?: DtoCost;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupOffer
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupOffer
     */
    createdAt?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DtoTopupOffer
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupOffer
     */
    notes?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupOffer
     */
    offerId?: string;
    /**
     * 
     * @type {DtoPrice}
     * @memberof DtoTopupOffer
     */
    price?: DtoPrice;
    /**
     * 
     * @type {DtoPriceType}
     * @memberof DtoTopupOffer
     */
    priceType?: DtoPriceType;
    /**
     * 
     * @type {DtoProductType}
     * @memberof DtoTopupOffer
     */
    productType?: DtoProductType;
    /**
     * 
     * @type {DtoZend}
     * @memberof DtoTopupOffer
     */
    send?: DtoZend;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupOffer
     */
    shortNotes?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof DtoTopupOffer
     */
    subTypes?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof DtoTopupOffer
     */
    updatedAt?: string;
}

/**
 * Check if a given object implements the DtoTopupOffer interface.
 */
export function instanceOfDtoTopupOffer(value: object): boolean {
    let isInstance = true;

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
        'send': !exists(json, 'send') ? undefined : DtoZendFromJSON(json['send']),
        'shortNotes': !exists(json, 'shortNotes') ? undefined : json['shortNotes'],
        'subTypes': !exists(json, 'subTypes') ? undefined : json['subTypes'],
        'updatedAt': !exists(json, 'updatedAt') ? undefined : json['updatedAt'],
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
        'enabled': value.enabled,
        'notes': value.notes,
        'offerId': value.offerId,
        'price': DtoPriceToJSON(value.price),
        'priceType': DtoPriceTypeToJSON(value.priceType),
        'productType': DtoProductTypeToJSON(value.productType),
        'send': DtoZendToJSON(value.send),
        'shortNotes': value.shortNotes,
        'subTypes': value.subTypes,
        'updatedAt': value.updatedAt,
    };
}

