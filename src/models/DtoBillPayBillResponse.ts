/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
import type { DtoPriceType } from './DtoPriceType';
import {
    DtoPriceTypeFromJSON,
    DtoPriceTypeFromJSONTyped,
    DtoPriceTypeToJSON,
    DtoPriceTypeToJSONTyped,
} from './DtoPriceType';

/**
 * 
 * @export
 * @interface DtoBillPayBillResponse
 */
export interface DtoBillPayBillResponse {
    /**
     * 
     * @type {number}
     * @memberof DtoBillPayBillResponse
     */
    cost?: number;
    /**
     * 
     * @type {string}
     * @memberof DtoBillPayBillResponse
     */
    costCurrency?: string;
    /**
     * 
     * @type {number}
     * @memberof DtoBillPayBillResponse
     */
    costCurrencyDivisor?: number;
    /**
     * 
     * @type {number}
     * @memberof DtoBillPayBillResponse
     */
    costFee?: number;
    /**
     * 
     * @type {number}
     * @memberof DtoBillPayBillResponse
     */
    costFeePct?: number;
    /**
     * 
     * @type {number}
     * @memberof DtoBillPayBillResponse
     */
    costFeeTotal?: number;
    /**
     * 
     * @type {number}
     * @memberof DtoBillPayBillResponse
     */
    costTotal?: number;
    /**
     * 
     * @type {string}
     * @memberof DtoBillPayBillResponse
     */
    createdAt?: string;
    /**
     * 
     * @type {number}
     * @memberof DtoBillPayBillResponse
     */
    price?: number;
    /**
     * 
     * @type {string}
     * @memberof DtoBillPayBillResponse
     */
    priceCurrency?: string;
    /**
     * 
     * @type {number}
     * @memberof DtoBillPayBillResponse
     */
    priceCurrencyDivisor?: number;
    /**
     * 
     * @type {number}
     * @memberof DtoBillPayBillResponse
     */
    priceFx?: number;
    /**
     * 
     * @type {DtoPriceType}
     * @memberof DtoBillPayBillResponse
     */
    priceType?: DtoPriceType;
    /**
     * 
     * @type {number}
     * @memberof DtoBillPayBillResponse
     */
    send?: number;
    /**
     * 
     * @type {string}
     * @memberof DtoBillPayBillResponse
     */
    sendCurrency?: string;
    /**
     * 
     * @type {number}
     * @memberof DtoBillPayBillResponse
     */
    sendCurrencyDivisor?: number;
}



/**
 * Check if a given object implements the DtoBillPayBillResponse interface.
 */
export function instanceOfDtoBillPayBillResponse(value: object): value is DtoBillPayBillResponse {
    return true;
}

export function DtoBillPayBillResponseFromJSON(json: any): DtoBillPayBillResponse {
    return DtoBillPayBillResponseFromJSONTyped(json, false);
}

export function DtoBillPayBillResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoBillPayBillResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'cost': json['cost'] == null ? undefined : json['cost'],
        'costCurrency': json['costCurrency'] == null ? undefined : json['costCurrency'],
        'costCurrencyDivisor': json['costCurrencyDivisor'] == null ? undefined : json['costCurrencyDivisor'],
        'costFee': json['costFee'] == null ? undefined : json['costFee'],
        'costFeePct': json['costFeePct'] == null ? undefined : json['costFeePct'],
        'costFeeTotal': json['costFeeTotal'] == null ? undefined : json['costFeeTotal'],
        'costTotal': json['costTotal'] == null ? undefined : json['costTotal'],
        'createdAt': json['createdAt'] == null ? undefined : json['createdAt'],
        'price': json['price'] == null ? undefined : json['price'],
        'priceCurrency': json['priceCurrency'] == null ? undefined : json['priceCurrency'],
        'priceCurrencyDivisor': json['priceCurrencyDivisor'] == null ? undefined : json['priceCurrencyDivisor'],
        'priceFx': json['priceFx'] == null ? undefined : json['priceFx'],
        'priceType': json['priceType'] == null ? undefined : DtoPriceTypeFromJSON(json['priceType']),
        'send': json['send'] == null ? undefined : json['send'],
        'sendCurrency': json['sendCurrency'] == null ? undefined : json['sendCurrency'],
        'sendCurrencyDivisor': json['sendCurrencyDivisor'] == null ? undefined : json['sendCurrencyDivisor'],
    };
}

export function DtoBillPayBillResponseToJSON(json: any): DtoBillPayBillResponse {
    return DtoBillPayBillResponseToJSONTyped(json, false);
}

export function DtoBillPayBillResponseToJSONTyped(value?: DtoBillPayBillResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'cost': value['cost'],
        'costCurrency': value['costCurrency'],
        'costCurrencyDivisor': value['costCurrencyDivisor'],
        'costFee': value['costFee'],
        'costFeePct': value['costFeePct'],
        'costFeeTotal': value['costFeeTotal'],
        'costTotal': value['costTotal'],
        'createdAt': value['createdAt'],
        'price': value['price'],
        'priceCurrency': value['priceCurrency'],
        'priceCurrencyDivisor': value['priceCurrencyDivisor'],
        'priceFx': value['priceFx'],
        'priceType': DtoPriceTypeToJSON(value['priceType']),
        'send': value['send'],
        'sendCurrency': value['sendCurrency'],
        'sendCurrencyDivisor': value['sendCurrencyDivisor'],
    };
}

