/* tslint:disable */
/* eslint-disable */
import { exists, mapValues } from '../runtime';
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
    activationCode?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoESimConfirmation
     */
    externalReferenceId?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoESimConfirmation
     */
    iccid?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoESimConfirmation
     */
    redemptionInstructions?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoESimConfirmation
     */
    smdpAddress?: string;
}

/**
 * Check if a given object implements the DtoESimConfirmation interface.
 */
export function instanceOfDtoESimConfirmation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DtoESimConfirmationFromJSON(json: any): DtoESimConfirmation {
    return DtoESimConfirmationFromJSONTyped(json, false);
}

export function DtoESimConfirmationFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoESimConfirmation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'activationCode': !exists(json, 'activationCode') ? undefined : json['activationCode'],
        'externalReferenceId': !exists(json, 'externalReferenceId') ? undefined : json['externalReferenceId'],
        'iccid': !exists(json, 'iccid') ? undefined : json['iccid'],
        'redemptionInstructions': !exists(json, 'redemptionInstructions') ? undefined : json['redemptionInstructions'],
        'smdpAddress': !exists(json, 'smdpAddress') ? undefined : json['smdpAddress'],
    };
}

export function DtoESimConfirmationToJSON(value?: DtoESimConfirmation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'activationCode': value.activationCode,
        'externalReferenceId': value.externalReferenceId,
        'iccid': value.iccid,
        'redemptionInstructions': value.redemptionInstructions,
        'smdpAddress': value.smdpAddress,
    };
}

