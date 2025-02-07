/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';
import type { DtoInputMask } from './DtoInputMask';
import {
    DtoInputMaskFromJSON,
    DtoInputMaskFromJSONTyped,
    DtoInputMaskToJSON,
    DtoInputMaskToJSONTyped,
} from './DtoInputMask';
import type { DtoRequiredFieldLabel } from './DtoRequiredFieldLabel';
import {
    DtoRequiredFieldLabelFromJSON,
    DtoRequiredFieldLabelFromJSONTyped,
    DtoRequiredFieldLabelToJSON,
    DtoRequiredFieldLabelToJSONTyped,
} from './DtoRequiredFieldLabel';
import type { DtoRedemptionInstruction } from './DtoRedemptionInstruction';
import {
    DtoRedemptionInstructionFromJSON,
    DtoRedemptionInstructionFromJSONTyped,
    DtoRedemptionInstructionToJSON,
    DtoRedemptionInstructionToJSONTyped,
} from './DtoRedemptionInstruction';

/**
 * 
 * @export
 * @interface DtoBrandInfo
 */
export interface DtoBrandInfo {
    /**
     * 
     * @type {string}
     * @memberof DtoBrandInfo
     */
    brand: string;
    /**
     * 
     * @type {string}
     * @memberof DtoBrandInfo
     */
    brandBigImage: string;
    /**
     * 
     * @type {string}
     * @memberof DtoBrandInfo
     */
    brandColor: string;
    /**
     * 
     * @type {string}
     * @memberof DtoBrandInfo
     */
    brandGiftImage: string;
    /**
     * 
     * @type {string}
     * @memberof DtoBrandInfo
     */
    brandInfoPdf: string;
    /**
     * 
     * @type {string}
     * @memberof DtoBrandInfo
     */
    brandLogo: string;
    /**
     * 
     * @type {string}
     * @memberof DtoBrandInfo
     */
    brandLogoExtension: string;
    /**
     * 
     * @type {string}
     * @memberof DtoBrandInfo
     */
    brandName: string;
    /**
     * 
     * @type {string}
     * @memberof DtoBrandInfo
     */
    description: string;
    /**
     * 
     * @type {Array<DtoInputMask>}
     * @memberof DtoBrandInfo
     */
    inputMasks: Array<DtoInputMask>;
    /**
     * 
     * @type {Array<DtoRedemptionInstruction>}
     * @memberof DtoBrandInfo
     */
    redemptionInstructions: Array<DtoRedemptionInstruction>;
    /**
     * 
     * @type {Array<DtoRequiredFieldLabel>}
     * @memberof DtoBrandInfo
     */
    requiredFieldsLabels: Array<DtoRequiredFieldLabel>;
}

/**
 * Check if a given object implements the DtoBrandInfo interface.
 */
export function instanceOfDtoBrandInfo(value: object): value is DtoBrandInfo {
    if (!('brand' in value) || value['brand'] === undefined) return false;
    if (!('brandBigImage' in value) || value['brandBigImage'] === undefined) return false;
    if (!('brandColor' in value) || value['brandColor'] === undefined) return false;
    if (!('brandGiftImage' in value) || value['brandGiftImage'] === undefined) return false;
    if (!('brandInfoPdf' in value) || value['brandInfoPdf'] === undefined) return false;
    if (!('brandLogo' in value) || value['brandLogo'] === undefined) return false;
    if (!('brandLogoExtension' in value) || value['brandLogoExtension'] === undefined) return false;
    if (!('brandName' in value) || value['brandName'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('inputMasks' in value) || value['inputMasks'] === undefined) return false;
    if (!('redemptionInstructions' in value) || value['redemptionInstructions'] === undefined) return false;
    if (!('requiredFieldsLabels' in value) || value['requiredFieldsLabels'] === undefined) return false;
    return true;
}

export function DtoBrandInfoFromJSON(json: any): DtoBrandInfo {
    return DtoBrandInfoFromJSONTyped(json, false);
}

export function DtoBrandInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DtoBrandInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'brand': json['brand'],
        'brandBigImage': json['brandBigImage'],
        'brandColor': json['brandColor'],
        'brandGiftImage': json['brandGiftImage'],
        'brandInfoPdf': json['brandInfoPdf'],
        'brandLogo': json['brandLogo'],
        'brandLogoExtension': json['brandLogoExtension'],
        'brandName': json['brandName'],
        'description': json['description'],
        'inputMasks': ((json['inputMasks'] as Array<any>).map(DtoInputMaskFromJSON)),
        'redemptionInstructions': ((json['redemptionInstructions'] as Array<any>).map(DtoRedemptionInstructionFromJSON)),
        'requiredFieldsLabels': ((json['requiredFieldsLabels'] as Array<any>).map(DtoRequiredFieldLabelFromJSON)),
    };
}

export function DtoBrandInfoToJSON(json: any): DtoBrandInfo {
    return DtoBrandInfoToJSONTyped(json, false);
}

export function DtoBrandInfoToJSONTyped(value?: DtoBrandInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'brand': value['brand'],
        'brandBigImage': value['brandBigImage'],
        'brandColor': value['brandColor'],
        'brandGiftImage': value['brandGiftImage'],
        'brandInfoPdf': value['brandInfoPdf'],
        'brandLogo': value['brandLogo'],
        'brandLogoExtension': value['brandLogoExtension'],
        'brandName': value['brandName'],
        'description': value['description'],
        'inputMasks': ((value['inputMasks'] as Array<any>).map(DtoInputMaskToJSON)),
        'redemptionInstructions': ((value['redemptionInstructions'] as Array<any>).map(DtoRedemptionInstructionToJSON)),
        'requiredFieldsLabels': ((value['requiredFieldsLabels'] as Array<any>).map(DtoRequiredFieldLabelToJSON)),
    };
}

