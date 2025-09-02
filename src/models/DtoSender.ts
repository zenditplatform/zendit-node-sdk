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
 * @interface DtoSender
 */
export interface DtoSender {
    /**
     * 
     * @type {string}
     * @memberof DtoSender
     */
    dateOfBirth: string;
    /**
     * 
     * @type {string}
     * @memberof DtoSender
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoSender
     */
    employerAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoSender
     */
    employerName?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoSender
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof DtoSender
     */
    gender?: string;
    /**
     * 
     * @type {DtoHomeAddress}
     * @memberof DtoSender
     */
    homeAddress: DtoHomeAddress;
    /**
     * 
     * @type {string}
     * @memberof DtoSender
     */
    lastName: string;
    /**
     * 
     * @type {string}
     * @memberof DtoSender
     */
    middleName?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoSender
     */
    mothersMaidenName?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoSender
     */
    nationality?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoSender
     */
    occupation?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoSender
     */
    phone: string;
    /**
     * 
     * @type {string}
     * @memberof DtoSender
     */
    relationToRecipient?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoSender
     */
    sourceOfFunds?: string;
}

/**
 * Check if a given object implements the DtoSender interface.
 */
export function instanceOfDtoSender(value: object): value is DtoSender {
    if (!('dateOfBirth' in value) || value['dateOfBirth'] === undefined) return false;
    if (!('firstName' in value) || value['firstName'] === undefined) return false;
    if (!('homeAddress' in value) || value['homeAddress'] === undefined) return false;
    if (!('lastName' in value) || value['lastName'] === undefined) return false;
    if (!('phone' in value) || value['phone'] === undefined) return false;
    return true;
}

export function DtoSenderFromJSON(json: any): DtoSender {
    return DtoSenderFromJSONTyped(json, false);
}

export function DtoSenderFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoSender {
    if (json == null) {
        return json;
    }
    return {
        
        'dateOfBirth': json['dateOfBirth'],
        'email': json['email'] == null ? undefined : json['email'],
        'employerAddress': json['employerAddress'] == null ? undefined : json['employerAddress'],
        'employerName': json['employerName'] == null ? undefined : json['employerName'],
        'firstName': json['firstName'],
        'gender': json['gender'] == null ? undefined : json['gender'],
        'homeAddress': DtoHomeAddressFromJSON(json['homeAddress']),
        'lastName': json['lastName'],
        'middleName': json['middleName'] == null ? undefined : json['middleName'],
        'mothersMaidenName': json['mothersMaidenName'] == null ? undefined : json['mothersMaidenName'],
        'nationality': json['nationality'] == null ? undefined : json['nationality'],
        'occupation': json['occupation'] == null ? undefined : json['occupation'],
        'phone': json['phone'],
        'relationToRecipient': json['relationToRecipient'] == null ? undefined : json['relationToRecipient'],
        'sourceOfFunds': json['sourceOfFunds'] == null ? undefined : json['sourceOfFunds'],
    };
}

export function DtoSenderToJSON(json: any): DtoSender {
    return DtoSenderToJSONTyped(json, false);
}

export function DtoSenderToJSONTyped(value?: DtoSender | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'dateOfBirth': value['dateOfBirth'],
        'email': value['email'],
        'employerAddress': value['employerAddress'],
        'employerName': value['employerName'],
        'firstName': value['firstName'],
        'gender': value['gender'],
        'homeAddress': DtoHomeAddressToJSON(value['homeAddress']),
        'lastName': value['lastName'],
        'middleName': value['middleName'],
        'mothersMaidenName': value['mothersMaidenName'],
        'nationality': value['nationality'],
        'occupation': value['occupation'],
        'phone': value['phone'],
        'relationToRecipient': value['relationToRecipient'],
        'sourceOfFunds': value['sourceOfFunds'],
    };
}

