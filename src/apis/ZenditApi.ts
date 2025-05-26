import type {DtoESimQRCode} from '../models/index';
/* tslint:disable */
/* eslint-disable */
import * as runtime from '../runtime';
import type {
  DtoBalanceResponse,
  DtoBrandInfo,
  DtoBrandsResponse,
  DtoESIMPlansResponse,
  DtoESimOffer,
  DtoESimOffersResponse,
  DtoESimPurchase,
  DtoESimPurchaseMakeInput,
  DtoESimPurchaseResponse,
  DtoESimPurchasesResponse,
  DtoESimRefund,
  DtoESimRefundStatus,
  DtoPhoneNumberLookupResponse,
  DtoPromo,
  DtoPromosResponse,
  DtoRedemptionInstructionInfo,
  DtoReportTransactions,
  DtoReportTransactionsPeriod,
  DtoResponseError,
  DtoTopupOffer,
  DtoTopupOffersResponse,
  DtoTopupPurchase,
  DtoTopupPurchaseMakeInput,
  DtoTopupPurchaseResponse,
  DtoTopupPurchasesResponse,
  DtoTransaction,
  DtoTransactionsResponse,
  DtoVoucherOffer,
  DtoVoucherOffersResponse,
  DtoVoucherPurchase,
  DtoVoucherPurchaseInput,
  DtoVoucherPurchaseResponse,
  DtoVoucherPurchasesResponse,
} from '../models/index';
import {
    DtoBalanceResponseFromJSON,
    DtoBalanceResponseToJSON,
    DtoBrandInfoFromJSON,
    DtoBrandInfoToJSON,
    DtoBrandsResponseFromJSON,
    DtoBrandsResponseToJSON,
    DtoESIMPlansResponseFromJSON,
    DtoESIMPlansResponseToJSON,
    DtoESimOfferFromJSON,
    DtoESimOfferToJSON,
    DtoESimOffersResponseFromJSON,
    DtoESimOffersResponseToJSON,
    DtoESimPurchaseFromJSON,
    DtoESimPurchaseToJSON,
    DtoESimPurchaseMakeInputFromJSON,
    DtoESimPurchaseMakeInputToJSON,
    DtoESimPurchaseResponseFromJSON,
    DtoESimPurchaseResponseToJSON,
    DtoESimPurchasesResponseFromJSON,
    DtoESimPurchasesResponseToJSON,
    DtoESimRefundFromJSON,
    DtoESimRefundToJSON,
    DtoESimRefundStatusFromJSON,
    DtoESimRefundStatusToJSON,
    DtoPhoneNumberLookupResponseFromJSON,
    DtoPhoneNumberLookupResponseToJSON,
    DtoPromoFromJSON,
    DtoPromoToJSON,
    DtoPromosResponseFromJSON,
    DtoPromosResponseToJSON,
    DtoRedemptionInstructionInfoFromJSON,
    DtoRedemptionInstructionInfoToJSON,
    DtoReportTransactionsFromJSON,
    DtoReportTransactionsToJSON,
    DtoReportTransactionsPeriodFromJSON,
    DtoReportTransactionsPeriodToJSON,
    DtoResponseErrorFromJSON,
    DtoResponseErrorToJSON,
    DtoTopupOfferFromJSON,
    DtoTopupOfferToJSON,
    DtoTopupOffersResponseFromJSON,
    DtoTopupOffersResponseToJSON,
    DtoTopupPurchaseFromJSON,
    DtoTopupPurchaseToJSON,
    DtoTopupPurchaseMakeInputFromJSON,
    DtoTopupPurchaseMakeInputToJSON,
    DtoTopupPurchaseResponseFromJSON,
    DtoTopupPurchaseResponseToJSON,
    DtoTopupPurchasesResponseFromJSON,
    DtoTopupPurchasesResponseToJSON,
    DtoTransactionFromJSON,
    DtoTransactionToJSON,
    DtoTransactionsResponseFromJSON,
    DtoTransactionsResponseToJSON,
    DtoVoucherOfferFromJSON,
    DtoVoucherOfferToJSON,
    DtoVoucherOffersResponseFromJSON,
    DtoVoucherOffersResponseToJSON,
    DtoVoucherPurchaseFromJSON,
    DtoVoucherPurchaseToJSON,
    DtoVoucherPurchaseInputFromJSON,
    DtoVoucherPurchaseInputToJSON,
    DtoVoucherPurchaseResponseFromJSON,
    DtoVoucherPurchaseResponseToJSON,
    DtoVoucherPurchasesResponseFromJSON,
    DtoVoucherPurchasesResponseToJSON,
} from '../models/index';

export interface BrandsBrandGetRequest {
    brand: string;
}

export interface BrandsBrandRedemptionInstructionsGetRequest {
    brand: string;
    country: string;
    deliveryType: string;
    language?: string;
}

export interface BrandsGetRequest {
    limit: number;
    offset: number;
    country?: string;
}

export interface EsimIccIdPlansGetRequest {
    iccId: string;
}

export interface EsimOffersGetRequest {
    limit: number;
    offset: number;
    brand?: string;
    country?: string;
    regions?: EsimOffersGetRegionsEnum;
    subType?: string;
}

export interface EsimOffersOfferIdGetRequest {
    offerId: string;
}

export interface EsimPurchasesGetRequest {
    limit: number;
    offset: number;
    createdAt?: string;
    status?: EsimPurchasesGetStatusEnum;
}

export interface EsimPurchasesPostRequest {
    data: DtoESimPurchaseMakeInput;
}

export interface EsimPurchasesTransactionIdGetRequest {
    transactionId: string;
}

export interface EsimPurchasesTransactionIdQrcodeGetRequest {
    transactionId: string;
}

export interface EsimPurchasesTransactionIdRefundGetRequest {
    transactionId: string;
}

export interface EsimPurchasesTransactionIdRefundPostRequest {
    transactionId: string;
}

export interface PromosGetRequest {
    limit: number;
    offset: number;
    brand?: string;
    country?: Array<string>;
    language?: string;
    region?: string;
    status?: string;
}

export interface PromosPromoIdGetRequest {
    promoId: string;
}

export interface ReportsTransactionsPostRequest {
    data: DtoReportTransactionsPeriod;
}

export interface ReportsTransactionsReportIdFileGetRequest {
    reportId: string;
    file: string;
}

export interface ReportsTransactionsReportIdGetRequest {
    reportId: string;
}

export interface ToolsPhonenumberlookupMsisdnGetRequest {
    msisdn: string;
}

export interface TopupsOffersGetRequest {
    limit: number;
    offset: number;
    brand?: string;
    country?: string;
    regions?: TopupsOffersGetRegionsEnum;
    subType?: string;
}

export interface TopupsOffersOfferIdGetRequest {
    offerId: string;
}

export interface TopupsPurchasesGetRequest {
    limit: number;
    offset: number;
    createdAt?: string;
    status?: TopupsPurchasesGetStatusEnum;
}

export interface TopupsPurchasesPostRequest {
    data: DtoTopupPurchaseMakeInput;
}

export interface TopupsPurchasesTransactionIdGetRequest {
    transactionId: string;
}

export interface TransactionsGetRequest {
    limit: number;
    offset: number;
    createdAt?: string;
    productType?: TransactionsGetProductTypeEnum;
    status?: TransactionsGetStatusEnum;
    type?: TransactionsGetTypeEnum;
}

export interface TransactionsTransactionIdGetRequest {
    transactionId: string;
}

export interface VouchersOffersGetRequest {
    limit: number;
    offset: number;
    brand?: string;
    country?: string;
    regions?: VouchersOffersGetRegionsEnum;
    subType?: string;
}

export interface VouchersOffersOfferIdGetRequest {
    offerId: string;
}

export interface VouchersPurchasesGetRequest {
    limit: number;
    offset: number;
    createdAt?: string;
    status?: VouchersPurchasesGetStatusEnum;
}

export interface VouchersPurchasesPostRequest {
    data: DtoVoucherPurchaseInput;
}

export interface VouchersPurchasesTransactionIdGetRequest {
    transactionId: string;
}

/**
 * 
 */
export class ZenditApi extends runtime.BaseAPI {

    /**
     * Get list of transactions
     */
    async balanceGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoBalanceResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/balance`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DtoBalanceResponseFromJSON(jsonValue));
    }

    /**
     * Get list of transactions
     */
    async balanceGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoBalanceResponse> {
        const response = await this.balanceGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Get a brand by the brand code
     */
    async brandsBrandGetRaw(requestParameters: BrandsBrandGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoBrandInfo>> {
        if (requestParameters['brand'] == null) {
            throw new runtime.RequiredError(
                'brand',
                'Required parameter "brand" was null or undefined when calling brandsBrandGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/brands/{brand}`.replace(`{${"brand"}}`, encodeURIComponent(String(requestParameters['brand']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DtoBrandInfoFromJSON(jsonValue));
    }

    /**
     * Get a brand by the brand code
     */
    async brandsBrandGet(brand: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoBrandInfo> {
        const response = await this.brandsBrandGetRaw({ brand: brand }, initOverrides);
        return await response.value();
    }

    /**
     * Get a brand redemption instruction by the brand code
     */
    async brandsBrandRedemptionInstructionsGetRaw(requestParameters: BrandsBrandRedemptionInstructionsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoRedemptionInstructionInfo>> {
        if (requestParameters['brand'] == null) {
            throw new runtime.RequiredError(
                'brand',
                'Required parameter "brand" was null or undefined when calling brandsBrandRedemptionInstructionsGet().'
            );
        }

        if (requestParameters['country'] == null) {
            throw new runtime.RequiredError(
                'country',
                'Required parameter "country" was null or undefined when calling brandsBrandRedemptionInstructionsGet().'
            );
        }

        if (requestParameters['deliveryType'] == null) {
            throw new runtime.RequiredError(
                'deliveryType',
                'Required parameter "deliveryType" was null or undefined when calling brandsBrandRedemptionInstructionsGet().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['country'] != null) {
            queryParameters['country'] = requestParameters['country'];
        }

        if (requestParameters['deliveryType'] != null) {
            queryParameters['deliveryType'] = requestParameters['deliveryType'];
        }

        if (requestParameters['language'] != null) {
            queryParameters['language'] = requestParameters['language'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/brands/{brand}/redemptionInstructions`.replace(`{${"brand"}}`, encodeURIComponent(String(requestParameters['brand']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DtoRedemptionInstructionInfoFromJSON(jsonValue));
    }

    /**
     * Get a brand redemption instruction by the brand code
     */
    async brandsBrandRedemptionInstructionsGet(brand: string, country: string, deliveryType: string, language?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoRedemptionInstructionInfo> {
        const response = await this.brandsBrandRedemptionInstructionsGetRaw({ brand: brand, country: country, deliveryType: deliveryType, language: language }, initOverrides);
        return await response.value();
    }

    /**
     * Get list of brands
     */
    async brandsGetRaw(requestParameters: BrandsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoBrandsResponse>> {
        if (requestParameters['limit'] == null) {
            throw new runtime.RequiredError(
                'limit',
                'Required parameter "limit" was null or undefined when calling brandsGet().'
            );
        }

        if (requestParameters['offset'] == null) {
            throw new runtime.RequiredError(
                'offset',
                'Required parameter "offset" was null or undefined when calling brandsGet().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['_limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['_offset'] = requestParameters['offset'];
        }

        if (requestParameters['country'] != null) {
            queryParameters['country'] = requestParameters['country'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/brands`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DtoBrandsResponseFromJSON(jsonValue));
    }

    /**
     * Get list of brands
     */
    async brandsGet(limit: number, offset: number, country?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoBrandsResponse> {
        const response = await this.brandsGetRaw({ limit: limit, offset: offset, country: country }, initOverrides);
        return await response.value();
    }

    /**
     * Get list of eSim plans
     */
    async esimIccIdPlansGetRaw(requestParameters: EsimIccIdPlansGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoESIMPlansResponse>> {
        if (requestParameters['iccId'] == null) {
            throw new runtime.RequiredError(
                'iccId',
                'Required parameter "iccId" was null or undefined when calling esimIccIdPlansGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/esim/{iccId}/plans`.replace(`{${"iccId"}}`, encodeURIComponent(String(requestParameters['iccId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DtoESIMPlansResponseFromJSON(jsonValue));
    }

    /**
     * Get list of eSim plans
     */
    async esimIccIdPlansGet(iccId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoESIMPlansResponse> {
        const response = await this.esimIccIdPlansGetRaw({ iccId: iccId }, initOverrides);
        return await response.value();
    }

    /**
     * Get list of eSIM offers
     */
    async esimOffersGetRaw(requestParameters: EsimOffersGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoESimOffersResponse>> {
        if (requestParameters['limit'] == null) {
            throw new runtime.RequiredError(
                'limit',
                'Required parameter "limit" was null or undefined when calling esimOffersGet().'
            );
        }

        if (requestParameters['offset'] == null) {
            throw new runtime.RequiredError(
                'offset',
                'Required parameter "offset" was null or undefined when calling esimOffersGet().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['_limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['_offset'] = requestParameters['offset'];
        }

        if (requestParameters['brand'] != null) {
            queryParameters['brand'] = requestParameters['brand'];
        }

        if (requestParameters['country'] != null) {
            queryParameters['country'] = requestParameters['country'];
        }

        if (requestParameters['regions'] != null) {
            queryParameters['regions'] = requestParameters['regions'];
        }

        if (requestParameters['subType'] != null) {
            queryParameters['subType'] = requestParameters['subType'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/esim/offers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DtoESimOffersResponseFromJSON(jsonValue));
    }

    /**
     * Get list of eSIM offers
     */
    async esimOffersGet(limit: number, offset: number, brand?: string, country?: string, regions?: EsimOffersGetRegionsEnum, subType?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoESimOffersResponse> {
        const response = await this.esimOffersGetRaw({ limit: limit, offset: offset, brand: brand, country: country, regions: regions, subType: subType }, initOverrides);
        return await response.value();
    }

    /**
     * Get an eSIM offer by the offer ID
     */
    async esimOffersOfferIdGetRaw(requestParameters: EsimOffersOfferIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoESimOffer>> {
        if (requestParameters['offerId'] == null) {
            throw new runtime.RequiredError(
                'offerId',
                'Required parameter "offerId" was null or undefined when calling esimOffersOfferIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/esim/offers/{offerId}`.replace(`{${"offerId"}}`, encodeURIComponent(String(requestParameters['offerId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DtoESimOfferFromJSON(jsonValue));
    }

    /**
     * Get an eSIM offer by the offer ID
     */
    async esimOffersOfferIdGet(offerId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoESimOffer> {
        const response = await this.esimOffersOfferIdGetRaw({ offerId: offerId }, initOverrides);
        return await response.value();
    }

    /**
     * Get list of eSim transactions
     */
    async esimPurchasesGetRaw(requestParameters: EsimPurchasesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoESimPurchasesResponse>> {
        if (requestParameters['limit'] == null) {
            throw new runtime.RequiredError(
                'limit',
                'Required parameter "limit" was null or undefined when calling esimPurchasesGet().'
            );
        }

        if (requestParameters['offset'] == null) {
            throw new runtime.RequiredError(
                'offset',
                'Required parameter "offset" was null or undefined when calling esimPurchasesGet().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['_limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['_offset'] = requestParameters['offset'];
        }

        if (requestParameters['createdAt'] != null) {
            queryParameters['createdAt'] = requestParameters['createdAt'];
        }

        if (requestParameters['status'] != null) {
            queryParameters['status'] = requestParameters['status'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/esim/purchases`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DtoESimPurchasesResponseFromJSON(jsonValue));
    }

    /**
     * Get list of eSim transactions
     */
    async esimPurchasesGet(limit: number, offset: number, createdAt?: string, status?: EsimPurchasesGetStatusEnum, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoESimPurchasesResponse> {
        const response = await this.esimPurchasesGetRaw({ limit: limit, offset: offset, createdAt: createdAt, status: status }, initOverrides);
        return await response.value();
    }

    /**
     * Create transaction for purchase
     */
    async esimPurchasesPostRaw(requestParameters: EsimPurchasesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoESimPurchaseResponse>> {
        if (requestParameters['data'] == null) {
            throw new runtime.RequiredError(
                'data',
                'Required parameter "data" was null or undefined when calling esimPurchasesPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/esim/purchases`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DtoESimPurchaseMakeInputToJSON(requestParameters['data']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DtoESimPurchaseResponseFromJSON(jsonValue));
    }

    /**
     * Create transaction for purchase
     */
    async esimPurchasesPost(data: DtoESimPurchaseMakeInput, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoESimPurchaseResponse> {
        const response = await this.esimPurchasesPostRaw({ data: data }, initOverrides);
        return await response.value();
    }

    /**
     * Get eSim transaction by id
     */
    async esimPurchasesTransactionIdGetRaw(requestParameters: EsimPurchasesTransactionIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoESimPurchase>> {
        if (requestParameters['transactionId'] == null) {
            throw new runtime.RequiredError(
                'transactionId',
                'Required parameter "transactionId" was null or undefined when calling esimPurchasesTransactionIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/esim/purchases/{transactionId}`.replace(`{${"transactionId"}}`, encodeURIComponent(String(requestParameters['transactionId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DtoESimPurchaseFromJSON(jsonValue));
    }

    /**
     * Get eSim transaction by id
     */
    async esimPurchasesTransactionIdGet(transactionId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoESimPurchase> {
        const response = await this.esimPurchasesTransactionIdGetRaw({ transactionId: transactionId }, initOverrides);
        return await response.value();
    }

    /**
     * Get eSim QR code by transaction id
     */
     async esimPurchasesTransactionIdQrcodeGetRaw(requestParameters: EsimPurchasesTransactionIdQrcodeGetRequest, responseType?: "json" | "blob" | null, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blob|DtoESimQRCode>> {
        if (requestParameters['transactionId'] == null) {
            throw new runtime.RequiredError(
                'transactionId',
                'Required parameter "transactionId" was null or undefined when calling esimPurchasesTransactionIdQrcodeGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        if (responseType === 'json') {
            headerParameters['accept'] = 'application/json';
        }

        const response = await this.request({
            path: `/esim/purchases/{transactionId}/qrcode`.replace(`{${"transactionId"}}`, encodeURIComponent(String(requestParameters['transactionId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        if (responseType === "json") {
            return new runtime.JSONApiResponse<DtoESimQRCode>(response);
        }

        return new runtime.BlobApiResponse(response);
    }

    async esimPurchasesTransactionIdQrcodeGet(transactionId: string, responseType: "blob", initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob>
    async esimPurchasesTransactionIdQrcodeGet(transactionId: string, responseType: "json", initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoESimQRCode>
    async esimPurchasesTransactionIdQrcodeGet(transactionId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob>
    async esimPurchasesTransactionIdQrcodeGet(transactionId: string, responseType?: any, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoESimQRCode|Blob> {
        const response = await this.esimPurchasesTransactionIdQrcodeGetRaw({ transactionId: transactionId }, responseType, initOverrides);
        return response.value();
    }

    /**
     * Get status of refund transaction
     */
    async esimPurchasesTransactionIdRefundGetRaw(requestParameters: EsimPurchasesTransactionIdRefundGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoESimRefundStatus>> {
        if (requestParameters['transactionId'] == null) {
            throw new runtime.RequiredError(
                'transactionId',
                'Required parameter "transactionId" was null or undefined when calling esimPurchasesTransactionIdRefundGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/esim/purchases/{transactionId}/refund`.replace(`{${"transactionId"}}`, encodeURIComponent(String(requestParameters['transactionId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DtoESimRefundStatusFromJSON(jsonValue));
    }

    /**
     * Get status of refund transaction
     */
    async esimPurchasesTransactionIdRefundGet(transactionId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoESimRefundStatus> {
        const response = await this.esimPurchasesTransactionIdRefundGetRaw({ transactionId: transactionId }, initOverrides);
        return await response.value();
    }

    /**
     * Refund eSim purchase by transaction id
     */
    async esimPurchasesTransactionIdRefundPostRaw(requestParameters: EsimPurchasesTransactionIdRefundPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoESimRefund>> {
        if (requestParameters['transactionId'] == null) {
            throw new runtime.RequiredError(
                'transactionId',
                'Required parameter "transactionId" was null or undefined when calling esimPurchasesTransactionIdRefundPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/esim/purchases/{transactionId}/refund`.replace(`{${"transactionId"}}`, encodeURIComponent(String(requestParameters['transactionId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DtoESimRefundFromJSON(jsonValue));
    }

    /**
     * Refund eSim purchase by transaction id
     */
    async esimPurchasesTransactionIdRefundPost(transactionId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoESimRefund> {
        const response = await this.esimPurchasesTransactionIdRefundPostRaw({ transactionId: transactionId }, initOverrides);
        return await response.value();
    }

    /**
     * Get list of promotions
     */
    async promosGetRaw(requestParameters: PromosGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoPromosResponse>> {
        if (requestParameters['limit'] == null) {
            throw new runtime.RequiredError(
                'limit',
                'Required parameter "limit" was null or undefined when calling promosGet().'
            );
        }

        if (requestParameters['offset'] == null) {
            throw new runtime.RequiredError(
                'offset',
                'Required parameter "offset" was null or undefined when calling promosGet().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['_limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['_offset'] = requestParameters['offset'];
        }

        if (requestParameters['brand'] != null) {
            queryParameters['brand'] = requestParameters['brand'];
        }

        if (requestParameters['country'] != null) {
            queryParameters['country'] = requestParameters['country']!.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters['language'] != null) {
            queryParameters['language'] = requestParameters['language'];
        }

        if (requestParameters['region'] != null) {
            queryParameters['region'] = requestParameters['region'];
        }

        if (requestParameters['status'] != null) {
            queryParameters['status'] = requestParameters['status'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/promos`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DtoPromosResponseFromJSON(jsonValue));
    }

    /**
     * Get list of promotions
     */
    async promosGet(limit: number, offset: number, brand?: string, country?: Array<string>, language?: string, region?: string, status?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoPromosResponse> {
        const response = await this.promosGetRaw({ limit: limit, offset: offset, brand: brand, country: country, language: language, region: region, status: status }, initOverrides);
        return await response.value();
    }

    /**
     * Get promo by id
     */
    async promosPromoIdGetRaw(requestParameters: PromosPromoIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoPromo>> {
        if (requestParameters['promoId'] == null) {
            throw new runtime.RequiredError(
                'promoId',
                'Required parameter "promoId" was null or undefined when calling promosPromoIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/promos/{promoId}`.replace(`{${"promoId"}}`, encodeURIComponent(String(requestParameters['promoId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DtoPromoFromJSON(jsonValue));
    }

    /**
     * Get promo by id
     */
    async promosPromoIdGet(promoId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoPromo> {
        const response = await this.promosPromoIdGetRaw({ promoId: promoId }, initOverrides);
        return await response.value();
    }

    /**
     * Requests transactions reports
     */
    async reportsTransactionsPostRaw(requestParameters: ReportsTransactionsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoReportTransactions>> {
        if (requestParameters['data'] == null) {
            throw new runtime.RequiredError(
                'data',
                'Required parameter "data" was null or undefined when calling reportsTransactionsPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/reports/transactions`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DtoReportTransactionsPeriodToJSON(requestParameters['data']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DtoReportTransactionsFromJSON(jsonValue));
    }

    /**
     * Requests transactions reports
     */
    async reportsTransactionsPost(data: DtoReportTransactionsPeriod, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoReportTransactions> {
        const response = await this.reportsTransactionsPostRaw({ data: data }, initOverrides);
        return await response.value();
    }

    /**
     * Download report file
     */
    async reportsTransactionsReportIdFileGetRaw(requestParameters: ReportsTransactionsReportIdFileGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Blob>> {
        if (requestParameters['reportId'] == null) {
            throw new runtime.RequiredError(
                'reportId',
                'Required parameter "reportId" was null or undefined when calling reportsTransactionsReportIdFileGet().'
            );
        }

        if (requestParameters['file'] == null) {
            throw new runtime.RequiredError(
                'file',
                'Required parameter "file" was null or undefined when calling reportsTransactionsReportIdFileGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/reports/transactions/{reportId}/{file}`.replace(`{${"reportId"}}`, encodeURIComponent(String(requestParameters['reportId']))).replace(`{${"file"}}`, encodeURIComponent(String(requestParameters['file']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.BlobApiResponse(response);
    }

    /**
     * Download report file
     */
    async reportsTransactionsReportIdFileGet(reportId: string, file: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Blob> {
        const response = await this.reportsTransactionsReportIdFileGetRaw({ reportId: reportId, file: file }, initOverrides);
        return await response.value();
    }

    /**
     * Get transactions report by ID
     */
    async reportsTransactionsReportIdGetRaw(requestParameters: ReportsTransactionsReportIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoReportTransactions>> {
        if (requestParameters['reportId'] == null) {
            throw new runtime.RequiredError(
                'reportId',
                'Required parameter "reportId" was null or undefined when calling reportsTransactionsReportIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/reports/transactions/{reportId}`.replace(`{${"reportId"}}`, encodeURIComponent(String(requestParameters['reportId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DtoReportTransactionsFromJSON(jsonValue));
    }

    /**
     * Get transactions report by ID
     */
    async reportsTransactionsReportIdGet(reportId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoReportTransactions> {
        const response = await this.reportsTransactionsReportIdGetRaw({ reportId: reportId }, initOverrides);
        return await response.value();
    }

    /**
     * Get phone number info
     */
    async toolsPhonenumberlookupMsisdnGetRaw(requestParameters: ToolsPhonenumberlookupMsisdnGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoPhoneNumberLookupResponse>> {
        if (requestParameters['msisdn'] == null) {
            throw new runtime.RequiredError(
                'msisdn',
                'Required parameter "msisdn" was null or undefined when calling toolsPhonenumberlookupMsisdnGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/tools/phonenumberlookup/{msisdn}`.replace(`{${"msisdn"}}`, encodeURIComponent(String(requestParameters['msisdn']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DtoPhoneNumberLookupResponseFromJSON(jsonValue));
    }

    /**
     * Get phone number info
     */
    async toolsPhonenumberlookupMsisdnGet(msisdn: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoPhoneNumberLookupResponse> {
        const response = await this.toolsPhonenumberlookupMsisdnGetRaw({ msisdn: msisdn }, initOverrides);
        return await response.value();
    }

    /**
     * Get list of topup offers
     */
    async topupsOffersGetRaw(requestParameters: TopupsOffersGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoTopupOffersResponse>> {
        if (requestParameters['limit'] == null) {
            throw new runtime.RequiredError(
                'limit',
                'Required parameter "limit" was null or undefined when calling topupsOffersGet().'
            );
        }

        if (requestParameters['offset'] == null) {
            throw new runtime.RequiredError(
                'offset',
                'Required parameter "offset" was null or undefined when calling topupsOffersGet().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['_limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['_offset'] = requestParameters['offset'];
        }

        if (requestParameters['brand'] != null) {
            queryParameters['brand'] = requestParameters['brand'];
        }

        if (requestParameters['country'] != null) {
            queryParameters['country'] = requestParameters['country'];
        }

        if (requestParameters['regions'] != null) {
            queryParameters['regions'] = requestParameters['regions'];
        }

        if (requestParameters['subType'] != null) {
            queryParameters['subType'] = requestParameters['subType'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/topups/offers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DtoTopupOffersResponseFromJSON(jsonValue));
    }

    /**
     * Get list of topup offers
     */
    async topupsOffersGet(limit: number, offset: number, brand?: string, country?: string, regions?: TopupsOffersGetRegionsEnum, subType?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoTopupOffersResponse> {
        const response = await this.topupsOffersGetRaw({ limit: limit, offset: offset, brand: brand, country: country, regions: regions, subType: subType }, initOverrides);
        return await response.value();
    }

    /**
     * Get a topup offer by the offer ID
     */
    async topupsOffersOfferIdGetRaw(requestParameters: TopupsOffersOfferIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoTopupOffer>> {
        if (requestParameters['offerId'] == null) {
            throw new runtime.RequiredError(
                'offerId',
                'Required parameter "offerId" was null or undefined when calling topupsOffersOfferIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/topups/offers/{offerId}`.replace(`{${"offerId"}}`, encodeURIComponent(String(requestParameters['offerId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DtoTopupOfferFromJSON(jsonValue));
    }

    /**
     * Get a topup offer by the offer ID
     */
    async topupsOffersOfferIdGet(offerId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoTopupOffer> {
        const response = await this.topupsOffersOfferIdGetRaw({ offerId: offerId }, initOverrides);
        return await response.value();
    }

    /**
     * Get list of topup transactions
     */
    async topupsPurchasesGetRaw(requestParameters: TopupsPurchasesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoTopupPurchasesResponse>> {
        if (requestParameters['limit'] == null) {
            throw new runtime.RequiredError(
                'limit',
                'Required parameter "limit" was null or undefined when calling topupsPurchasesGet().'
            );
        }

        if (requestParameters['offset'] == null) {
            throw new runtime.RequiredError(
                'offset',
                'Required parameter "offset" was null or undefined when calling topupsPurchasesGet().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['_limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['_offset'] = requestParameters['offset'];
        }

        if (requestParameters['createdAt'] != null) {
            queryParameters['createdAt'] = requestParameters['createdAt'];
        }

        if (requestParameters['status'] != null) {
            queryParameters['status'] = requestParameters['status'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/topups/purchases`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DtoTopupPurchasesResponseFromJSON(jsonValue));
    }

    /**
     * Get list of topup transactions
     */
    async topupsPurchasesGet(limit: number, offset: number, createdAt?: string, status?: TopupsPurchasesGetStatusEnum, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoTopupPurchasesResponse> {
        const response = await this.topupsPurchasesGetRaw({ limit: limit, offset: offset, createdAt: createdAt, status: status }, initOverrides);
        return await response.value();
    }

    /**
     * Create transaction for purchase
     */
    async topupsPurchasesPostRaw(requestParameters: TopupsPurchasesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoTopupPurchaseResponse>> {
        if (requestParameters['data'] == null) {
            throw new runtime.RequiredError(
                'data',
                'Required parameter "data" was null or undefined when calling topupsPurchasesPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/topups/purchases`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DtoTopupPurchaseMakeInputToJSON(requestParameters['data']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DtoTopupPurchaseResponseFromJSON(jsonValue));
    }

    /**
     * Create transaction for purchase
     */
    async topupsPurchasesPost(data: DtoTopupPurchaseMakeInput, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoTopupPurchaseResponse> {
        const response = await this.topupsPurchasesPostRaw({ data: data }, initOverrides);
        return await response.value();
    }

    /**
     * Get topup transaction by id
     */
    async topupsPurchasesTransactionIdGetRaw(requestParameters: TopupsPurchasesTransactionIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoTopupPurchase>> {
        if (requestParameters['transactionId'] == null) {
            throw new runtime.RequiredError(
                'transactionId',
                'Required parameter "transactionId" was null or undefined when calling topupsPurchasesTransactionIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/topups/purchases/{transactionId}`.replace(`{${"transactionId"}}`, encodeURIComponent(String(requestParameters['transactionId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DtoTopupPurchaseFromJSON(jsonValue));
    }

    /**
     * Get topup transaction by id
     */
    async topupsPurchasesTransactionIdGet(transactionId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoTopupPurchase> {
        const response = await this.topupsPurchasesTransactionIdGetRaw({ transactionId: transactionId }, initOverrides);
        return await response.value();
    }

    /**
     * Get list of transactions
     */
    async transactionsGetRaw(requestParameters: TransactionsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoTransactionsResponse>> {
        if (requestParameters['limit'] == null) {
            throw new runtime.RequiredError(
                'limit',
                'Required parameter "limit" was null or undefined when calling transactionsGet().'
            );
        }

        if (requestParameters['offset'] == null) {
            throw new runtime.RequiredError(
                'offset',
                'Required parameter "offset" was null or undefined when calling transactionsGet().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['_limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['_offset'] = requestParameters['offset'];
        }

        if (requestParameters['createdAt'] != null) {
            queryParameters['createdAt'] = requestParameters['createdAt'];
        }

        if (requestParameters['productType'] != null) {
            queryParameters['productType'] = requestParameters['productType'];
        }

        if (requestParameters['status'] != null) {
            queryParameters['status'] = requestParameters['status'];
        }

        if (requestParameters['type'] != null) {
            queryParameters['type'] = requestParameters['type'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/transactions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DtoTransactionsResponseFromJSON(jsonValue));
    }

    /**
     * Get list of transactions
     */
    async transactionsGet(limit: number, offset: number, createdAt?: string, productType?: TransactionsGetProductTypeEnum, status?: TransactionsGetStatusEnum, type?: TransactionsGetTypeEnum, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoTransactionsResponse> {
        const response = await this.transactionsGetRaw({ limit: limit, offset: offset, createdAt: createdAt, productType: productType, status: status, type: type }, initOverrides);
        return await response.value();
    }

    /**
     * Get transaction by id
     */
    async transactionsTransactionIdGetRaw(requestParameters: TransactionsTransactionIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoTransaction>> {
        if (requestParameters['transactionId'] == null) {
            throw new runtime.RequiredError(
                'transactionId',
                'Required parameter "transactionId" was null or undefined when calling transactionsTransactionIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/transactions/{transactionId}`.replace(`{${"transactionId"}}`, encodeURIComponent(String(requestParameters['transactionId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DtoTransactionFromJSON(jsonValue));
    }

    /**
     * Get transaction by id
     */
    async transactionsTransactionIdGet(transactionId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoTransaction> {
        const response = await this.transactionsTransactionIdGetRaw({ transactionId: transactionId }, initOverrides);
        return await response.value();
    }

    /**
     * Get list of voucher offers
     */
    async vouchersOffersGetRaw(requestParameters: VouchersOffersGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoVoucherOffersResponse>> {
        if (requestParameters['limit'] == null) {
            throw new runtime.RequiredError(
                'limit',
                'Required parameter "limit" was null or undefined when calling vouchersOffersGet().'
            );
        }

        if (requestParameters['offset'] == null) {
            throw new runtime.RequiredError(
                'offset',
                'Required parameter "offset" was null or undefined when calling vouchersOffersGet().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['_limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['_offset'] = requestParameters['offset'];
        }

        if (requestParameters['brand'] != null) {
            queryParameters['brand'] = requestParameters['brand'];
        }

        if (requestParameters['country'] != null) {
            queryParameters['country'] = requestParameters['country'];
        }

        if (requestParameters['regions'] != null) {
            queryParameters['regions'] = requestParameters['regions'];
        }

        if (requestParameters['subType'] != null) {
            queryParameters['subType'] = requestParameters['subType'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/vouchers/offers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DtoVoucherOffersResponseFromJSON(jsonValue));
    }

    /**
     * Get list of voucher offers
     */
    async vouchersOffersGet(limit: number, offset: number, brand?: string, country?: string, regions?: VouchersOffersGetRegionsEnum, subType?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoVoucherOffersResponse> {
        const response = await this.vouchersOffersGetRaw({ limit: limit, offset: offset, brand: brand, country: country, regions: regions, subType: subType }, initOverrides);
        return await response.value();
    }

    /**
     * Get a voucher offer by the offer ID
     */
    async vouchersOffersOfferIdGetRaw(requestParameters: VouchersOffersOfferIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoVoucherOffer>> {
        if (requestParameters['offerId'] == null) {
            throw new runtime.RequiredError(
                'offerId',
                'Required parameter "offerId" was null or undefined when calling vouchersOffersOfferIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/vouchers/offers/{offerId}`.replace(`{${"offerId"}}`, encodeURIComponent(String(requestParameters['offerId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DtoVoucherOfferFromJSON(jsonValue));
    }

    /**
     * Get a voucher offer by the offer ID
     */
    async vouchersOffersOfferIdGet(offerId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoVoucherOffer> {
        const response = await this.vouchersOffersOfferIdGetRaw({ offerId: offerId }, initOverrides);
        return await response.value();
    }

    /**
     * Get list of transactions
     */
    async vouchersPurchasesGetRaw(requestParameters: VouchersPurchasesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoVoucherPurchasesResponse>> {
        if (requestParameters['limit'] == null) {
            throw new runtime.RequiredError(
                'limit',
                'Required parameter "limit" was null or undefined when calling vouchersPurchasesGet().'
            );
        }

        if (requestParameters['offset'] == null) {
            throw new runtime.RequiredError(
                'offset',
                'Required parameter "offset" was null or undefined when calling vouchersPurchasesGet().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['_limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['_offset'] = requestParameters['offset'];
        }

        if (requestParameters['createdAt'] != null) {
            queryParameters['createdAt'] = requestParameters['createdAt'];
        }

        if (requestParameters['status'] != null) {
            queryParameters['status'] = requestParameters['status'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/vouchers/purchases`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DtoVoucherPurchasesResponseFromJSON(jsonValue));
    }

    /**
     * Get list of transactions
     */
    async vouchersPurchasesGet(limit: number, offset: number, createdAt?: string, status?: VouchersPurchasesGetStatusEnum, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoVoucherPurchasesResponse> {
        const response = await this.vouchersPurchasesGetRaw({ limit: limit, offset: offset, createdAt: createdAt, status: status }, initOverrides);
        return await response.value();
    }

    /**
     * Create transaction for purchase
     */
    async vouchersPurchasesPostRaw(requestParameters: VouchersPurchasesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoVoucherPurchaseResponse>> {
        if (requestParameters['data'] == null) {
            throw new runtime.RequiredError(
                'data',
                'Required parameter "data" was null or undefined when calling vouchersPurchasesPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/vouchers/purchases`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DtoVoucherPurchaseInputToJSON(requestParameters['data']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DtoVoucherPurchaseResponseFromJSON(jsonValue));
    }

    /**
     * Create transaction for purchase
     */
    async vouchersPurchasesPost(data: DtoVoucherPurchaseInput, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoVoucherPurchaseResponse> {
        const response = await this.vouchersPurchasesPostRaw({ data: data }, initOverrides);
        return await response.value();
    }

    /**
     * Get purchase transaction by id
     */
    async vouchersPurchasesTransactionIdGetRaw(requestParameters: VouchersPurchasesTransactionIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoVoucherPurchase>> {
        if (requestParameters['transactionId'] == null) {
            throw new runtime.RequiredError(
                'transactionId',
                'Required parameter "transactionId" was null or undefined when calling vouchersPurchasesTransactionIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/vouchers/purchases/{transactionId}`.replace(`{${"transactionId"}}`, encodeURIComponent(String(requestParameters['transactionId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DtoVoucherPurchaseFromJSON(jsonValue));
    }

    /**
     * Get purchase transaction by id
     */
    async vouchersPurchasesTransactionIdGet(transactionId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoVoucherPurchase> {
        const response = await this.vouchersPurchasesTransactionIdGetRaw({ transactionId: transactionId }, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const EsimOffersGetRegionsEnum = {
    RegionAfrica: 'Africa',
    RegionAsia: 'Asia',
    RegionCaribbean: 'Caribbean',
    RegionCentralAmerica: 'Central America',
    RegionEasternEurope: 'Eastern Europe',
    RegionGlobal: 'Global',
    RegionMiddleEastAndNorthAfrica: 'Middle East and North Africa',
    RegionNorthAmerica: 'North America',
    RegionOceania: 'Oceania',
    RegionSouthAmerica: 'South America',
    RegionSouthAsia: 'South Asia',
    RegionSoutheastAsia: 'Southeast Asia',
    RegionWesternEurope: 'Western Europe'
} as const;
export type EsimOffersGetRegionsEnum = typeof EsimOffersGetRegionsEnum[keyof typeof EsimOffersGetRegionsEnum];
/**
 * @export
 */
export const EsimPurchasesGetStatusEnum = {
    TransactionStatusAccepted: 'ACCEPTED',
    TransactionStatusPending: 'PENDING',
    TransactionStatusAuthorized: 'AUTHORIZED',
    TransactionStatusInProgress: 'IN_PROGRESS',
    TransactionStatusDone: 'DONE',
    TransactionStatusFailed: 'FAILED'
} as const;
export type EsimPurchasesGetStatusEnum = typeof EsimPurchasesGetStatusEnum[keyof typeof EsimPurchasesGetStatusEnum];
/**
 * @export
 */
export const TopupsOffersGetRegionsEnum = {
    RegionAfrica: 'Africa',
    RegionAsia: 'Asia',
    RegionCaribbean: 'Caribbean',
    RegionCentralAmerica: 'Central America',
    RegionEasternEurope: 'Eastern Europe',
    RegionGlobal: 'Global',
    RegionMiddleEastAndNorthAfrica: 'Middle East and North Africa',
    RegionNorthAmerica: 'North America',
    RegionOceania: 'Oceania',
    RegionSouthAmerica: 'South America',
    RegionSouthAsia: 'South Asia',
    RegionSoutheastAsia: 'Southeast Asia',
    RegionWesternEurope: 'Western Europe'
} as const;
export type TopupsOffersGetRegionsEnum = typeof TopupsOffersGetRegionsEnum[keyof typeof TopupsOffersGetRegionsEnum];
/**
 * @export
 */
export const TopupsPurchasesGetStatusEnum = {
    TransactionStatusAccepted: 'ACCEPTED',
    TransactionStatusPending: 'PENDING',
    TransactionStatusAuthorized: 'AUTHORIZED',
    TransactionStatusInProgress: 'IN_PROGRESS',
    TransactionStatusDone: 'DONE',
    TransactionStatusFailed: 'FAILED'
} as const;
export type TopupsPurchasesGetStatusEnum = typeof TopupsPurchasesGetStatusEnum[keyof typeof TopupsPurchasesGetStatusEnum];
/**
 * @export
 */
export const TransactionsGetProductTypeEnum = {
    ProductTypeTopup: 'TOPUP',
    ProductTypeESIM: 'ESIM',
    ProductTypeVoucher: 'VOUCHER',
    ProductTypeWalletRecharge: 'WALLET_RECHARGE',
    ProductTypeRefund: 'REFUND',
    ProductTypeBulkCheckout: 'BULK_CHECKOUT'
} as const;
export type TransactionsGetProductTypeEnum = typeof TransactionsGetProductTypeEnum[keyof typeof TransactionsGetProductTypeEnum];
/**
 * @export
 */
export const TransactionsGetStatusEnum = {
    TransactionStatusAccepted: 'ACCEPTED',
    TransactionStatusPending: 'PENDING',
    TransactionStatusAuthorized: 'AUTHORIZED',
    TransactionStatusInProgress: 'IN_PROGRESS',
    TransactionStatusDone: 'DONE',
    TransactionStatusFailed: 'FAILED'
} as const;
export type TransactionsGetStatusEnum = typeof TransactionsGetStatusEnum[keyof typeof TransactionsGetStatusEnum];
/**
 * @export
 */
export const TransactionsGetTypeEnum = {
    Credit: 'CREDIT',
    Debit: 'DEBIT'
} as const;
export type TransactionsGetTypeEnum = typeof TransactionsGetTypeEnum[keyof typeof TransactionsGetTypeEnum];
/**
 * @export
 */
export const VouchersOffersGetRegionsEnum = {
    RegionAfrica: 'Africa',
    RegionAsia: 'Asia',
    RegionCaribbean: 'Caribbean',
    RegionCentralAmerica: 'Central America',
    RegionEasternEurope: 'Eastern Europe',
    RegionGlobal: 'Global',
    RegionMiddleEastAndNorthAfrica: 'Middle East and North Africa',
    RegionNorthAmerica: 'North America',
    RegionOceania: 'Oceania',
    RegionSouthAmerica: 'South America',
    RegionSouthAsia: 'South Asia',
    RegionSoutheastAsia: 'Southeast Asia',
    RegionWesternEurope: 'Western Europe'
} as const;
export type VouchersOffersGetRegionsEnum = typeof VouchersOffersGetRegionsEnum[keyof typeof VouchersOffersGetRegionsEnum];
/**
 * @export
 */
export const VouchersPurchasesGetStatusEnum = {
    TransactionStatusAccepted: 'ACCEPTED',
    TransactionStatusPending: 'PENDING',
    TransactionStatusAuthorized: 'AUTHORIZED',
    TransactionStatusInProgress: 'IN_PROGRESS',
    TransactionStatusDone: 'DONE',
    TransactionStatusFailed: 'FAILED'
} as const;
export type VouchersPurchasesGetStatusEnum = typeof VouchersPurchasesGetStatusEnum[keyof typeof VouchersPurchasesGetStatusEnum];
