/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DtoVoucherReceipt
 */
export interface DtoVoucherReceipt {
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherReceipt
     */
    accountId: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherReceipt
     */
    confirmationNumber: string;
    /**
     * The 3-letter ISO currency code for the send
     * @type {string}
     * @memberof DtoVoucherReceipt
     */
    currency: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherReceipt
     */
    deliveryType: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherReceipt
     */
    epin: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherReceipt
     */
    expiresAt: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherReceipt
     */
    instructions: string;
    /**
     * Additional message information about the voucher
     * @type {string}
     * @memberof DtoVoucherReceipt
     */
    notes: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherReceipt
     */
    recipientCustomerServiceNumber: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherReceipt
     */
    redemptionUrl: string;
    /**
     * The value delivered by the voucher
     * @type {number}
     * @memberof DtoVoucherReceipt
     */
    send: number;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherReceipt
     */
    senderCustomerServiceNumber: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherReceipt
     */
    terms: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherReceipt
     */
    voucherId: string;
}

/**
 * Check if a given object implements the DtoVoucherReceipt interface.
 */
export function instanceOfDtoVoucherReceipt(value: object): value is DtoVoucherReceipt {
    if (!('accountId' in value) || value['accountId'] === undefined) return false;
    if (!('confirmationNumber' in value) || value['confirmationNumber'] === undefined) return false;
    if (!('currency' in value) || value['currency'] === undefined) return false;
    if (!('deliveryType' in value) || value['deliveryType'] === undefined) return false;
    if (!('epin' in value) || value['epin'] === undefined) return false;
    if (!('expiresAt' in value) || value['expiresAt'] === undefined) return false;
    if (!('instructions' in value) || value['instructions'] === undefined) return false;
    if (!('notes' in value) || value['notes'] === undefined) return false;
    if (!('recipientCustomerServiceNumber' in value) || value['recipientCustomerServiceNumber'] === undefined) return false;
    if (!('redemptionUrl' in value) || value['redemptionUrl'] === undefined) return false;
    if (!('send' in value) || value['send'] === undefined) return false;
    if (!('senderCustomerServiceNumber' in value) || value['senderCustomerServiceNumber'] === undefined) return false;
    if (!('terms' in value) || value['terms'] === undefined) return false;
    if (!('voucherId' in value) || value['voucherId'] === undefined) return false;
    return true;
}

export function DtoVoucherReceiptFromJSON(json: any): DtoVoucherReceipt {
    return DtoVoucherReceiptFromJSONTyped(json, false);
}

export function DtoVoucherReceiptFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoVoucherReceipt {
    if (json == null) {
        return json;
    }
    return {
        
        'accountId': json['accountId'],
        'confirmationNumber': json['confirmationNumber'],
        'currency': json['currency'],
        'deliveryType': json['deliveryType'],
        'epin': json['epin'],
        'expiresAt': json['expiresAt'],
        'instructions': json['instructions'],
        'notes': json['notes'],
        'recipientCustomerServiceNumber': json['recipientCustomerServiceNumber'],
        'redemptionUrl': json['redemptionUrl'],
        'send': json['send'],
        'senderCustomerServiceNumber': json['senderCustomerServiceNumber'],
        'terms': json['terms'],
        'voucherId': json['voucherId'],
    };
}

  export function DtoVoucherReceiptToJSON(json: any): DtoVoucherReceipt {
      return DtoVoucherReceiptToJSONTyped(json, false);
  }

  export function DtoVoucherReceiptToJSONTyped(value?: DtoVoucherReceipt | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'accountId': value['accountId'],
        'confirmationNumber': value['confirmationNumber'],
        'currency': value['currency'],
        'deliveryType': value['deliveryType'],
        'epin': value['epin'],
        'expiresAt': value['expiresAt'],
        'instructions': value['instructions'],
        'notes': value['notes'],
        'recipientCustomerServiceNumber': value['recipientCustomerServiceNumber'],
        'redemptionUrl': value['redemptionUrl'],
        'send': value['send'],
        'senderCustomerServiceNumber': value['senderCustomerServiceNumber'],
        'terms': value['terms'],
        'voucherId': value['voucherId'],
    };
}

