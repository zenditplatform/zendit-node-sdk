/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DtoRedemptionInstruction
 */
export interface DtoRedemptionInstruction {
    /**
     * 
     * @type {string}
     * @memberof DtoRedemptionInstruction
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoRedemptionInstruction
     */
    deliveryType?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoRedemptionInstruction
     */
    language?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoRedemptionInstruction
     */
    link?: string;
}

/**
 * Check if a given object implements the DtoRedemptionInstruction interface.
 */
export function instanceOfDtoRedemptionInstruction(value: object): value is DtoRedemptionInstruction {
    return true;
}

export function DtoRedemptionInstructionFromJSON(json: any): DtoRedemptionInstruction {
    return DtoRedemptionInstructionFromJSONTyped(json, false);
}

export function DtoRedemptionInstructionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoRedemptionInstruction {
    if (json == null) {
        return json;
    }
    return {
        
        'country': json['country'] == null ? undefined : json['country'],
        'deliveryType': json['deliveryType'] == null ? undefined : json['deliveryType'],
        'language': json['language'] == null ? undefined : json['language'],
        'link': json['link'] == null ? undefined : json['link'],
    };
}

export function DtoRedemptionInstructionToJSON(json: any): DtoRedemptionInstruction {
    return DtoRedemptionInstructionToJSONTyped(json, false);
}

export function DtoRedemptionInstructionToJSONTyped(value?: DtoRedemptionInstruction | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'country': value['country'],
        'deliveryType': value['deliveryType'],
        'language': value['language'],
        'link': value['link'],
    };
}

