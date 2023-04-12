/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DtoVoucherReceipt
 */
export interface DtoVoucherReceipt {
    /**
     * The 3-letter ISO currency code for the send
     * @type {string}
     * @memberof DtoVoucherReceipt
     */
    currency?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherReceipt
     */
    epin?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherReceipt
     */
    expiresAt?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherReceipt
     */
    instructions?: string;
    /**
     * Additional message information about the voucher
     * @type {string}
     * @memberof DtoVoucherReceipt
     */
    notes?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherReceipt
     */
    recipientCustomerServiceNumber?: string;
    /**
     * The value delivered by the voucher
     * @type {number}
     * @memberof DtoVoucherReceipt
     */
    send?: number;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherReceipt
     */
    senderCustomerServiceNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoVoucherReceipt
     */
    terms?: string;
}

/**
 * Check if a given object implements the DtoVoucherReceipt interface.
 */
export function instanceOfDtoVoucherReceipt(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DtoVoucherReceiptFromJSON(json: any): DtoVoucherReceipt {
    return DtoVoucherReceiptFromJSONTyped(json, false);
}

export function DtoVoucherReceiptFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoVoucherReceipt {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'epin': !exists(json, 'epin') ? undefined : json['epin'],
        'expiresAt': !exists(json, 'expiresAt') ? undefined : json['expiresAt'],
        'instructions': !exists(json, 'instructions') ? undefined : json['instructions'],
        'notes': !exists(json, 'notes') ? undefined : json['notes'],
        'recipientCustomerServiceNumber': !exists(json, 'recipientCustomerServiceNumber') ? undefined : json['recipientCustomerServiceNumber'],
        'send': !exists(json, 'send') ? undefined : json['send'],
        'senderCustomerServiceNumber': !exists(json, 'senderCustomerServiceNumber') ? undefined : json['senderCustomerServiceNumber'],
        'terms': !exists(json, 'terms') ? undefined : json['terms'],
    };
}

export function DtoVoucherReceiptToJSON(value?: DtoVoucherReceipt | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currency': value.currency,
        'epin': value.epin,
        'expiresAt': value.expiresAt,
        'instructions': value.instructions,
        'notes': value.notes,
        'recipientCustomerServiceNumber': value.recipientCustomerServiceNumber,
        'send': value.send,
        'senderCustomerServiceNumber': value.senderCustomerServiceNumber,
        'terms': value.terms,
    };
}

