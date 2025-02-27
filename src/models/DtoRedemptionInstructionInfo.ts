/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DtoRedemptionInstructionInfo
 */
export interface DtoRedemptionInstructionInfo {
    /**
     * 
     * @type {string}
     * @memberof DtoRedemptionInstructionInfo
     */
    country: string;
    /**
     * 
     * @type {string}
     * @memberof DtoRedemptionInstructionInfo
     */
    deliveryType: string;
    /**
     * 
     * @type {string}
     * @memberof DtoRedemptionInstructionInfo
     */
    language: string;
    /**
     * 
     * @type {string}
     * @memberof DtoRedemptionInstructionInfo
     */
    redemptionInstructions: string;
    /**
     * 
     * @type {string}
     * @memberof DtoRedemptionInstructionInfo
     */
    redemptionVideo: string;
    /**
     * 
     * @type {string}
     * @memberof DtoRedemptionInstructionInfo
     */
    terms: string;
}

/**
 * Check if a given object implements the DtoRedemptionInstructionInfo interface.
 */
export function instanceOfDtoRedemptionInstructionInfo(value: object): value is DtoRedemptionInstructionInfo {
    if (!('country' in value) || value['country'] === undefined) return false;
    if (!('deliveryType' in value) || value['deliveryType'] === undefined) return false;
    if (!('language' in value) || value['language'] === undefined) return false;
    if (!('redemptionInstructions' in value) || value['redemptionInstructions'] === undefined) return false;
    if (!('redemptionVideo' in value) || value['redemptionVideo'] === undefined) return false;
    if (!('terms' in value) || value['terms'] === undefined) return false;
    return true;
}

export function DtoRedemptionInstructionInfoFromJSON(json: any): DtoRedemptionInstructionInfo {
    return DtoRedemptionInstructionInfoFromJSONTyped(json, false);
}

export function DtoRedemptionInstructionInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoRedemptionInstructionInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'country': json['country'],
        'deliveryType': json['deliveryType'],
        'language': json['language'],
        'redemptionInstructions': json['redemptionInstructions'],
        'redemptionVideo': json['redemptionVideo'],
        'terms': json['terms'],
    };
}

export function DtoRedemptionInstructionInfoToJSON(json: any): DtoRedemptionInstructionInfo {
    return DtoRedemptionInstructionInfoToJSONTyped(json, false);
}

export function DtoRedemptionInstructionInfoToJSONTyped(value?: DtoRedemptionInstructionInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'country': value['country'],
        'deliveryType': value['deliveryType'],
        'language': value['language'],
        'redemptionInstructions': value['redemptionInstructions'],
        'redemptionVideo': value['redemptionVideo'],
        'terms': value['terms'],
    };
}

