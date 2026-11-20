/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DtoPayment
 */
export interface DtoPayment {
    /**
     * Amount, Currency and CurrencyDivisor are what the customer paid, once the payment succeeded.
     * They are present together or not at all.
     * @type {number}
     * @memberof DtoPayment
     */
    amount?: number;
    /**
     * 
     * @type {string}
     * @memberof DtoPayment
     */
    currency?: string;
    /**
     * 
     * @type {number}
     * @memberof DtoPayment
     */
    currencyDivisor?: number;
    /**
     * CustomerEmailAddress is your customer's email address: the one they entered in the widget when you
     * collect customer details, or the one on file for a registered customer.
     * @type {string}
     * @memberof DtoPayment
     */
    customerEmailAddress?: string;
    /**
     * CustomerReferenceID is your reference for the customer, when your payment processor reported one.
     * @type {string}
     * @memberof DtoPayment
     */
    customerReferenceId?: string;
    /**
     * Reference identifies the payment with the payment provider that took it. For a payment taken by
     * your own payment processor, it is the payment reference you returned from the Payment Request webhook.
     * @type {string}
     * @memberof DtoPayment
     */
    reference: string;
}

/**
 * Check if a given object implements the DtoPayment interface.
 */
export function instanceOfDtoPayment(value: object): value is DtoPayment {
    if (!('reference' in value) || value['reference'] === undefined) return false;
    return true;
}

export function DtoPaymentFromJSON(json: any): DtoPayment {
    return DtoPaymentFromJSONTyped(json, false);
}

export function DtoPaymentFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoPayment {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'] == null ? undefined : json['amount'],
        'currency': json['currency'] == null ? undefined : json['currency'],
        'currencyDivisor': json['currencyDivisor'] == null ? undefined : json['currencyDivisor'],
        'customerEmailAddress': json['customerEmailAddress'] == null ? undefined : json['customerEmailAddress'],
        'customerReferenceId': json['customerReferenceId'] == null ? undefined : json['customerReferenceId'],
        'reference': json['reference'],
    };
}

export function DtoPaymentToJSON(json: any): DtoPayment {
    return DtoPaymentToJSONTyped(json, false);
}

export function DtoPaymentToJSONTyped(value?: DtoPayment | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'amount': value['amount'],
        'currency': value['currency'],
        'currencyDivisor': value['currencyDivisor'],
        'customerEmailAddress': value['customerEmailAddress'],
        'customerReferenceId': value['customerReferenceId'],
        'reference': value['reference'],
    };
}

