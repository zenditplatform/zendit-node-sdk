/* tslint:disable */
/* eslint-disable */

import * as runtime from '../runtime';
import type {
  CoreHTTPResponseFujiError,
  DtoBalanceResponse,
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
} from '../models';
import {
    CoreHTTPResponseFujiErrorFromJSON,
    CoreHTTPResponseFujiErrorToJSON,
    DtoBalanceResponseFromJSON,
    DtoBalanceResponseToJSON,
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
} from '../models';

export interface TopupsOffersGetRequest {
    limit: number;
    offset: number;
    brand?: string;
    country?: string;
    subType?: string;
}

export interface TopupsOffersOfferIdGetRequest {
    offerId: string;
}

export interface TopupsPurchasesGetRequest {
    limit: number;
    offset: number;
    createdAt?: string;
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
    productType?: string;
}

export interface TransactionsTransactionIdGetRequest {
    transactionId: string;
}

export interface VouchersOffersGetRequest {
    limit: number;
    offset: number;
    brand?: string;
    country?: string;
    subType?: string;
}

export interface VouchersOffersOfferIdGetRequest {
    offerId: string;
}

export interface VouchersPurchasesGetRequest {
    limit: number;
    offset: number;
    createdAt?: string;
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
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
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
     * Get list of topup offers
     */
    async topupsOffersGetRaw(requestParameters: TopupsOffersGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoTopupOffersResponse>> {
        if (requestParameters.limit === null || requestParameters.limit === undefined) {
            throw new runtime.RequiredError('limit','Required parameter requestParameters.limit was null or undefined when calling topupsOffersGet.');
        }

        if (requestParameters.offset === null || requestParameters.offset === undefined) {
            throw new runtime.RequiredError('offset','Required parameter requestParameters.offset was null or undefined when calling topupsOffersGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['_limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['_offset'] = requestParameters.offset;
        }

        if (requestParameters.brand !== undefined) {
            queryParameters['brand'] = requestParameters.brand;
        }

        if (requestParameters.country !== undefined) {
            queryParameters['country'] = requestParameters.country;
        }

        if (requestParameters.subType !== undefined) {
            queryParameters['subType'] = requestParameters.subType;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
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
    async topupsOffersGet(limit: number, offset: number, brand?: string, country?: string, subType?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoTopupOffersResponse> {
        const response = await this.topupsOffersGetRaw({ limit: limit, offset: offset, brand: brand, country: country, subType: subType }, initOverrides);
        return await response.value();
    }

    /**
     * Get a topup offer by the offer ID
     */
    async topupsOffersOfferIdGetRaw(requestParameters: TopupsOffersOfferIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoTopupOffer>> {
        if (requestParameters.offerId === null || requestParameters.offerId === undefined) {
            throw new runtime.RequiredError('offerId','Required parameter requestParameters.offerId was null or undefined when calling topupsOffersOfferIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/topups/offers/{offerId}`.replace(`{${"offerId"}}`, encodeURIComponent(String(requestParameters.offerId))),
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
        if (requestParameters.limit === null || requestParameters.limit === undefined) {
            throw new runtime.RequiredError('limit','Required parameter requestParameters.limit was null or undefined when calling topupsPurchasesGet.');
        }

        if (requestParameters.offset === null || requestParameters.offset === undefined) {
            throw new runtime.RequiredError('offset','Required parameter requestParameters.offset was null or undefined when calling topupsPurchasesGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['_limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['_offset'] = requestParameters.offset;
        }

        if (requestParameters.createdAt !== undefined) {
            queryParameters['createdAt'] = requestParameters.createdAt;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
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
    async topupsPurchasesGet(limit: number, offset: number, createdAt?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoTopupPurchasesResponse> {
        const response = await this.topupsPurchasesGetRaw({ limit: limit, offset: offset, createdAt: createdAt }, initOverrides);
        return await response.value();
    }

    /**
     * Create transaction for purchase
     */
    async topupsPurchasesPostRaw(requestParameters: TopupsPurchasesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoTopupPurchaseResponse>> {
        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling topupsPurchasesPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/topups/purchases`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DtoTopupPurchaseMakeInputToJSON(requestParameters.data),
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
        if (requestParameters.transactionId === null || requestParameters.transactionId === undefined) {
            throw new runtime.RequiredError('transactionId','Required parameter requestParameters.transactionId was null or undefined when calling topupsPurchasesTransactionIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/topups/purchases/{transactionId}`.replace(`{${"transactionId"}}`, encodeURIComponent(String(requestParameters.transactionId))),
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
        if (requestParameters.limit === null || requestParameters.limit === undefined) {
            throw new runtime.RequiredError('limit','Required parameter requestParameters.limit was null or undefined when calling transactionsGet.');
        }

        if (requestParameters.offset === null || requestParameters.offset === undefined) {
            throw new runtime.RequiredError('offset','Required parameter requestParameters.offset was null or undefined when calling transactionsGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['_limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['_offset'] = requestParameters.offset;
        }

        if (requestParameters.createdAt !== undefined) {
            queryParameters['createdAt'] = requestParameters.createdAt;
        }

        if (requestParameters.productType !== undefined) {
            queryParameters['productType'] = requestParameters.productType;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
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
    async transactionsGet(limit: number, offset: number, createdAt?: string, productType?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoTransactionsResponse> {
        const response = await this.transactionsGetRaw({ limit: limit, offset: offset, createdAt: createdAt, productType: productType }, initOverrides);
        return await response.value();
    }

    /**
     * Get transaction by id
     */
    async transactionsTransactionIdGetRaw(requestParameters: TransactionsTransactionIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoTransaction>> {
        if (requestParameters.transactionId === null || requestParameters.transactionId === undefined) {
            throw new runtime.RequiredError('transactionId','Required parameter requestParameters.transactionId was null or undefined when calling transactionsTransactionIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/transactions/{transactionId}`.replace(`{${"transactionId"}}`, encodeURIComponent(String(requestParameters.transactionId))),
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
        if (requestParameters.limit === null || requestParameters.limit === undefined) {
            throw new runtime.RequiredError('limit','Required parameter requestParameters.limit was null or undefined when calling vouchersOffersGet.');
        }

        if (requestParameters.offset === null || requestParameters.offset === undefined) {
            throw new runtime.RequiredError('offset','Required parameter requestParameters.offset was null or undefined when calling vouchersOffersGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['_limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['_offset'] = requestParameters.offset;
        }

        if (requestParameters.brand !== undefined) {
            queryParameters['brand'] = requestParameters.brand;
        }

        if (requestParameters.country !== undefined) {
            queryParameters['country'] = requestParameters.country;
        }

        if (requestParameters.subType !== undefined) {
            queryParameters['subType'] = requestParameters.subType;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
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
    async vouchersOffersGet(limit: number, offset: number, brand?: string, country?: string, subType?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoVoucherOffersResponse> {
        const response = await this.vouchersOffersGetRaw({ limit: limit, offset: offset, brand: brand, country: country, subType: subType }, initOverrides);
        return await response.value();
    }

    /**
     * Get a voucher offer by the offer ID
     */
    async vouchersOffersOfferIdGetRaw(requestParameters: VouchersOffersOfferIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoVoucherOffer>> {
        if (requestParameters.offerId === null || requestParameters.offerId === undefined) {
            throw new runtime.RequiredError('offerId','Required parameter requestParameters.offerId was null or undefined when calling vouchersOffersOfferIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/vouchers/offers/{offerId}`.replace(`{${"offerId"}}`, encodeURIComponent(String(requestParameters.offerId))),
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
        if (requestParameters.limit === null || requestParameters.limit === undefined) {
            throw new runtime.RequiredError('limit','Required parameter requestParameters.limit was null or undefined when calling vouchersPurchasesGet.');
        }

        if (requestParameters.offset === null || requestParameters.offset === undefined) {
            throw new runtime.RequiredError('offset','Required parameter requestParameters.offset was null or undefined when calling vouchersPurchasesGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['_limit'] = requestParameters.limit;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['_offset'] = requestParameters.offset;
        }

        if (requestParameters.createdAt !== undefined) {
            queryParameters['createdAt'] = requestParameters.createdAt;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
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
    async vouchersPurchasesGet(limit: number, offset: number, createdAt?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DtoVoucherPurchasesResponse> {
        const response = await this.vouchersPurchasesGetRaw({ limit: limit, offset: offset, createdAt: createdAt }, initOverrides);
        return await response.value();
    }

    /**
     * Create transaction for purchase
     */
    async vouchersPurchasesPostRaw(requestParameters: VouchersPurchasesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DtoVoucherPurchaseResponse>> {
        if (requestParameters.data === null || requestParameters.data === undefined) {
            throw new runtime.RequiredError('data','Required parameter requestParameters.data was null or undefined when calling vouchersPurchasesPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/vouchers/purchases`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DtoVoucherPurchaseInputToJSON(requestParameters.data),
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
        if (requestParameters.transactionId === null || requestParameters.transactionId === undefined) {
            throw new runtime.RequiredError('transactionId','Required parameter requestParameters.transactionId was null or undefined when calling vouchersPurchasesTransactionIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // ApiKey authentication
        }

        const response = await this.request({
            path: `/vouchers/purchases/{transactionId}`.replace(`{${"transactionId"}}`, encodeURIComponent(String(requestParameters.transactionId))),
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
