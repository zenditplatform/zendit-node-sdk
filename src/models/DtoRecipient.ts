/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
import type { DtoHomeAddress } from './DtoHomeAddress';
import {
    DtoHomeAddressFromJSON,
    DtoHomeAddressFromJSONTyped,
    DtoHomeAddressToJSON,
    DtoHomeAddressToJSONTyped,
} from './DtoHomeAddress';

/**
 * 
 * @export
 * @interface DtoRecipient
 */
export interface DtoRecipient {
    /**
     * 
     * @type {string}
     * @memberof DtoRecipient
     */
    dateOfBirth?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoRecipient
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoRecipient
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof DtoRecipient
     */
    gender?: string;
    /**
     * 
     * @type {DtoHomeAddress}
     * @memberof DtoRecipient
     */
    homeAddress: DtoHomeAddress;
    /**
     * 
     * @type {string}
     * @memberof DtoRecipient
     */
    lastName: string;
    /**
     * 
     * @type {string}
     * @memberof DtoRecipient
     */
    middleName?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoRecipient
     */
    mothersMaidenName?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoRecipient
     */
    nationality?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoRecipient
     */
    occupation?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoRecipient
     */
    phone?: string;
}

/**
 * Check if a given object implements the DtoRecipient interface.
 */
export function instanceOfDtoRecipient(value: object): value is DtoRecipient {
    if (!('firstName' in value) || value['firstName'] === undefined) return false;
    if (!('homeAddress' in value) || value['homeAddress'] === undefined) return false;
    if (!('lastName' in value) || value['lastName'] === undefined) return false;
    return true;
}

export function DtoRecipientFromJSON(json: any): DtoRecipient {
    return DtoRecipientFromJSONTyped(json, false);
}

export function DtoRecipientFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoRecipient {
    if (json == null) {
        return json;
    }
    return {
        
        'dateOfBirth': json['dateOfBirth'] == null ? undefined : json['dateOfBirth'],
        'email': json['email'] == null ? undefined : json['email'],
        'firstName': json['firstName'],
        'gender': json['gender'] == null ? undefined : json['gender'],
        'homeAddress': DtoHomeAddressFromJSON(json['homeAddress']),
        'lastName': json['lastName'],
        'middleName': json['middleName'] == null ? undefined : json['middleName'],
        'mothersMaidenName': json['mothersMaidenName'] == null ? undefined : json['mothersMaidenName'],
        'nationality': json['nationality'] == null ? undefined : json['nationality'],
        'occupation': json['occupation'] == null ? undefined : json['occupation'],
        'phone': json['phone'] == null ? undefined : json['phone'],
    };
}

export function DtoRecipientToJSON(json: any): DtoRecipient {
    return DtoRecipientToJSONTyped(json, false);
}

export function DtoRecipientToJSONTyped(value?: DtoRecipient | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'dateOfBirth': value['dateOfBirth'],
        'email': value['email'],
        'firstName': value['firstName'],
        'gender': value['gender'],
        'homeAddress': DtoHomeAddressToJSON(value['homeAddress']),
        'lastName': value['lastName'],
        'middleName': value['middleName'],
        'mothersMaidenName': value['mothersMaidenName'],
        'nationality': value['nationality'],
        'occupation': value['occupation'],
        'phone': value['phone'],
    };
}

