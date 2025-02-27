/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DtoESimConfirmation
 */
export interface DtoESimConfirmation {
    /**
     * 
     * @type {string}
     * @memberof DtoESimConfirmation
     */
    activationCode: string;
    /**
     * 
     * @type {string}
     * @memberof DtoESimConfirmation
     */
    externalReferenceId: string;
    /**
     * 
     * @type {string}
     * @memberof DtoESimConfirmation
     */
    iccid: string;
    /**
     * 
     * @type {string}
     * @memberof DtoESimConfirmation
     */
    redemptionInstructions: string;
    /**
     * 
     * @type {string}
     * @memberof DtoESimConfirmation
     */
    smdpAddress: string;
}

/**
 * Check if a given object implements the DtoESimConfirmation interface.
 */
export function instanceOfDtoESimConfirmation(value: object): value is DtoESimConfirmation {
    if (!('activationCode' in value) || value['activationCode'] === undefined) return false;
    if (!('externalReferenceId' in value) || value['externalReferenceId'] === undefined) return false;
    if (!('iccid' in value) || value['iccid'] === undefined) return false;
    if (!('redemptionInstructions' in value) || value['redemptionInstructions'] === undefined) return false;
    if (!('smdpAddress' in value) || value['smdpAddress'] === undefined) return false;
    return true;
}

export function DtoESimConfirmationFromJSON(json: any): DtoESimConfirmation {
    return DtoESimConfirmationFromJSONTyped(json, false);
}

export function DtoESimConfirmationFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoESimConfirmation {
    if (json == null) {
        return json;
    }
    return {
        
        'activationCode': json['activationCode'],
        'externalReferenceId': json['externalReferenceId'],
        'iccid': json['iccid'],
        'redemptionInstructions': json['redemptionInstructions'],
        'smdpAddress': json['smdpAddress'],
    };
}

export function DtoESimConfirmationToJSON(json: any): DtoESimConfirmation {
    return DtoESimConfirmationToJSONTyped(json, false);
}

export function DtoESimConfirmationToJSONTyped(value?: DtoESimConfirmation | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'activationCode': value['activationCode'],
        'externalReferenceId': value['externalReferenceId'],
        'iccid': value['iccid'],
        'redemptionInstructions': value['redemptionInstructions'],
        'smdpAddress': value['smdpAddress'],
    };
}

