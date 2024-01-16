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
    currency: string;
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
}

/**
 * Check if a given object implements the DtoVoucherReceipt interface.
 */
export function instanceOfDtoVoucherReceipt(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "currency" in value;
    isInstance = isInstance && "epin" in value;
    isInstance = isInstance && "expiresAt" in value;
    isInstance = isInstance && "instructions" in value;
    isInstance = isInstance && "notes" in value;
    isInstance = isInstance && "recipientCustomerServiceNumber" in value;
    isInstance = isInstance && "send" in value;
    isInstance = isInstance && "senderCustomerServiceNumber" in value;
    isInstance = isInstance && "terms" in value;

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
        
        'currency': json['currency'],
        'epin': json['epin'],
        'expiresAt': json['expiresAt'],
        'instructions': json['instructions'],
        'notes': json['notes'],
        'recipientCustomerServiceNumber': json['recipientCustomerServiceNumber'],
        'send': json['send'],
        'senderCustomerServiceNumber': json['senderCustomerServiceNumber'],
        'terms': json['terms'],
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

