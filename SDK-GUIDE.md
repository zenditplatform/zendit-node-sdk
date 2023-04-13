# Zendit SDK Guide

The Zendit SDK provides access to the Global Prepayment Ecosystem. In this guide you'll find examples and explanations on how to use the Zendit SDK to get started and integrate it into your application. 

For support with this SDK, please contact [support@zendit.io](mailto:support@zendit.io)

## About the Sample Code

In this guide you will find references to Zendit products and how to create a transaction. Phone numbers in this guide are usable for testing the SDK in your test mode environment. Throughout the examples UUIDs are used for transaction numbers. IDs are supplied by the user for tracking and may be any alphanumeric value that is unique to each transaction per environment. For example, a client using a table with an autonumber field with a development instance and a production instance may send the autonumber generated as the transaction Id. The same Id may be sent to test mode and production to allow testing of an integration to not interfere with production transactions.

## Asynchronous Methods

All methods of the client are asynchronous. You must ensure that you account for this in your application and that you handle errors correctly. The code samples included are for illustrative purposes to get started.

## Minor Currency Values

Zendit uses minor currency for values in the catalog and transactions. For USD the value of 200 (cents) would be $2.00 in major currency. 

## About catalog offers

In the Zendit Console you may enable or disable products for resale in your client account. The catalog search methods will retrieve all products in the catalog. All catalog items are marked with the status of whether they are enabled. Items that are disabled should be removed from product listings that are made available for customer purchases. If an offer is disabled, an attempt to purchase the offer will fail. 

## Getting a Client Instance

To access Zendit, you need to create a client instance and use your API Client Secret. You can find your secret in the Zendit Client Console on the API Settings page. 

To setup your client:
```typescript
const zenditAPI = new ZenditApi(YOUR_API_KEY)
```
You may configure loading of your client secret in a config file for your application. Test mode environments and production environments use different tokens for your client account.

## Account Balance

To check the balance of your account, with your zenditAPI client use the following method:

```typescript
zenditAPI.balanceGet().then(v => {
        console.log(v.availableBalance);
    })
```

## Mobile Topup, Mobile Bundle, and Mobile Data 

Mobile Topup, Mobile Bundle, and Mobile Data use a common set of methods for obtaining the catalog of products, making purchases and getting the details of a transaction.

### Getting a list of offers based on a search

#### Parameter List
|Parameter |Required | Description|Example|
-------|------------|------|------|
|limit|Yes|Number of offers to retrieve, minimum 1 and maximum 1024. Used for pagination of the catalog.|10|
|offset|Yes|Number of offers to skip, minimum 0. Used for pagination to skip items.|20|
|brand|No|The Brand of carrier for the search| Cubacel|
|country|No|The 2 letter ISO country code for the destination of the offer search|CU|
|subtype|No|The product subtype for the offer search|Mobile Bundle|

The following example retrieves the first 10 offers in the catalog:

```typescript
zenditAPI.topupsOffersGet(10, 0).then(v => {
    console.log(v.list)
})
```

The following example retrieves the first 10 offers in the catalog for Cubacel

```typescript
zenditAPI.topupsOffersGet(10, 0, 'Cubacel').then(v => {
    console.log(v.list)
})
```

### Getting an offer by its catalog ID

#### Parameter List
|Parameter |Required | Description|Example|
-------|------------|------|------|
|offerId|Yes|Id for the offer in the catalog|TIGO_GT-US-PAQUETIGO-001|

The following example will return the offer details for the offer TIGO_GT-US-PAQUETIGO-001. 

```typescript
zenditAPI.topupsOffersOfferIdGet('TIGO_GT-US-PAQUETIGO-001').then(v => {
        console.log(v)
    })
```

### Make a Purchase
Parameter |Required | Description|
-------|------------|------|
|data|Yes|DtoTopupPurhcaseMakeInput object containing the offerId, recipient phone number and transactionId. For RANGE offers the value and value sent type must be included. Optional information about the sender can be included|

The following example will send a purchase to a Zendit test mode phone number using a random UUID as the transaction ID.

```typescript
const data : DtoTopupPurchaseMakeInput = {transactionId: uuid.v4(), offerId: "CUBACEL_CU_PAQUETE001", recipientPhoneNumber: "+5355564362"};
zenditAPI.topupsPurchasesPost(data).then(v => {
  console.log(v)
})
```

The following example will send an open range purchase valued at 250 CUP to a Zendit test mode phone number using a random UUID as the transaction ID. This example also shows the structure for the Purchase Value and the optional Sender information using only the sender phone number but excluding the optional country.

```typescript
const purchaseValue : DtoPurchaseValue = {type: DtoValueType.ValueTypeZend, value: 25000};
const topupSender : DtoTopupSender = {country: undefined, phoneNumber: "+15515551212"};
const dataOpenRange : DtoTopupPurchaseMakeInput = {transactionId: uuid.v4(), offerId: "CUBACEL_CU_OPEN", recipientPhoneNumber: "+5355564362", value: purchaseValue, sender: topupSender};
            

zenditAPI.topupsPurchasesPost(data).then(v => {
   console.log(v)
})
```

### Get a Transaction by ID

|Parameter |Required | Description|Example|
-------|------------|------|------|
|transactionId|Yes|ID of the transaction to retrieve|0f1db8e2-b0c9-49ac-a814-1f469e71c8a8

```typescript
zenditAPI.topupsPurchasesTransactionIdGet('0f1db8e2-b0c9-49ac-a814-1f469e71c8a8').then(v => {
  console.log(v);
})
```

### Get a List of Transactions with Search Parameters

|Parameter |Required | Description|Example|
-------|------------|------|------|
|limit|Yes|Number of transactions to retrieve, minimum 1 and maximum 1024. Used for pagination of the transaction list.|10|
|offset|Yes|Number of transactions to skip, minimum 0. Used for pagination to skip items.|20|
|createdAt|No|Created date/time of transaction with search modifiers as described in the Date Formats section|gte2023-03-29T00:00:00Z|

The following example will retrieve the first 10 Mobile Top Up, Mobile Bundle or Mobile Data transactions created on March 29th ad midnight UTC or later.

```typescript
zenditAPI.topupsPurchasesGet(10, 0, 'gte2023-03-29T00:00:00Z').then(v => {
  console.log(v);
})
```

## Digital Gift Card and Utility Payments

Digital Gift Card and Utility Payment products use a common set of methods for obtaining the catalog of products, making purchases and getting the details of a transaction.

### Catalog

#### Getting a list of offers based on a search

#### Parameter List
|Parameter |Required | Description|Example|
-------|------------|------|------|
|limit|Yes|Number of offers to retrieve, minimum 1 and maximum 1024. Used for pagination of the catalog.|10|
|offset|Yes|Number of offers to skip, minimum 0. Used for pagination to skip items.|20|
|brand|No|The Brand of carrier for the search| Cubacel|
|country|No|The 2 letter ISO country code for the destination of the offer search|CU|
|subtype|No|The product subtype for the offer search|Mobile Bundle|

The following example retrieves the first 10 offers in the catalog:

```typescript
zenditAPI.topupsOffersGet(10, 0).then(v => {
    console.log(v.list)
})
```

#### Getting an offer by its catalog ID

#### Parameter List
|Parameter |Required | Description|Example|
-------|------------|------|------|
|offerId|Yes|Id for the offer in the catalog|NETSHOES_BR_002_EGIFT_USD|

The following example will return the offer details for the offer NETSHOES_BR_002_EGIFT_USD. 

```typescript
zenditAPI.vouchersOffersOfferIdGet('NETSHOES_BR_002_EGIFT_USD').then(v => {
  console.log(v);
})
```

### Make a Purchase
|Parameter |Required | Description|
-------|------------|------|
|data|Yes|DtoVoucherPurchaseInput object containing the offerId, unique transaction ID and a field list of required fields for the purchase. For RANGE offers the value and value sent type must be included.|

The following example will purchase the AIRCANADA_CA_001_EGIFT_USD for the recipient John Doe. Note fields list includes 6 reqired fields for the offer. Required fields will vary by offer and the catalog will return the list of fields that are required with each offer.

```typescript
const reqFields: Array<DtoVoucherField> = [
        {key: "recipient.firstName", value: "John"},
        {key: "recipient.lastName", value: "Doe"},
        {key: "recipient.msisdn", value: "+15515551212"},
        {key: "sender.firstName", value: "Jane"},
        {key: "sender.lastName", value: "Doe"},
        {key: "sender.msisdn", value: "+15515551212"},
    ]

const voucherPurchaseInput: DtoVoucherPurchaseInput = {
        transactionId: uuid.v4(), offerId: "AIRCANADA_CA_001_EGIFT_USD", fields: reqFields
    };

zenditAPI.vouchersPurchasesPost(voucherData).then(v => {
   console.log(v)
})
```


### Get a Transaction by ID

|Parameter |Required | Description|Example|
-------|------------|------|------|
|transactionId|Yes|ID of the transaction to retrieve|0f1db8e2-b0c9-49ac-a814-1f469e71c8a8

The following example will retrieve the transaction with the ID 0f1db8e2-b0c9-49ac-a814-1f469e71c8a8

```typescript
zenditAPI.vouchersPurchasesTransactionIdGet('0f1db8e2-b0c9-49ac-a814-1f469e71c8a8').then(v => {
  console.log(v);
})
```

### Get a List of Transactions by Search Parameters

|Parameter |Required | Description|Example|
-------|------------|------|------|
|limit|Yes|Number of transactions to retrieve, minimum 1 and maximum 1024. Used for pagination of the transaction list.|10|
|offset|Yes|Number of transactions to skip, minimum 0. Used for pagination to skip items.|20|
|createdAt|No|Created date/time of transaction with search modifiers as described in the Date Formats section|gte2023-03-29T00:00:00Z|

The following example will retrieve the first 10 Mobile Top Up, Mobile Bundle or Mobile Data transactions created on March 29th ad midnight UTC or later.

```typescript
zenditAPI.vouchersPurchasesGet(10, 0, 'gte2023-03-29T00:00:00Z').then(v => {
  console.log(v);
})
```

## Transaction Status

Transaction status methods are used to retrieve status information of any type of transaction. They contain a limited set of details in a common model for polling the status of transactions and pulling a list of transactions using search parameters.

### Get a Transaction by ID

|Parameter |Required | Description|Example|
-------|------------|------|------|
|transactionId|Yes|ID of the transaction to retrieve|0f1db8e2-b0c9-49ac-a814-1f469e71c8a8

The following example retrieves the transaction with the ID 0f1db8e2-b0c9-49ac-a814-1f469e71c8a8 

```typescript
zenditAPI.transactionsTransactionIdGet('0f1db8e2-b0c9-49ac-a814-1f469e71c8a8').then(v => {
  console.log(v);
})
```

### Get a List of Transactions with Search Parameters

|Parameter |Required | Description|Example|
-------|------------|------|------|
|limit|Yes|Number of transactions to retrieve, minimum 1 and maximum 1024. Used for pagination of the transaction list.|10|
|offset|Yes|Number of transactions to skip, minimum 0. Used for pagination to skip items.|20|
|createdAt|No|Created date/time of transaction with search modifiers as described in the Date Formats section|gte2023-03-29T00:00:00Z|
|productType|No|Product type as listed in the enum section under product types|TOPUP

The following example retrieves up to 10 transactions with a created date that is later than or equal to March 29, 2023 at midnight UTC.

```typescript
zenditAPI.transactionsGet(10, 0, 'gte2023-03-29T00:00:00Z').then(v => {
  console.log(v);
})
```

## ENUM Values for Requests

Zendit uses several ENUM string values for searches and responses. Refer to the following values for parameter values and their use in Zendit.

### Transaction Status

|Status |Description  |
--------|-------------|
|ACCEPTED|Transaction was accepted for processing|
|PENDING|Transaction is awaiting processing by Zendit|
|AUTHORIZED|Transaction has successfully been authorized against the Zendit Wallet|
|IN_PROGRESS|Transaction is in progress for fulfillment with the provider|
|DONE|Transaction has successfully completed|
|FAIL|The transaction has failed to be fulfilled. Check the error reason and the log within the transaction to understand which step it failed and why|

### Price Type

|Value |Description |
-------|------------|
|FIXED|Offer type uses a fixed cost, price, and value delivered|
|RANGE|Offer provides a range of value between the min and max values and cost, price, and value are based on the FX Rates for the offer|

### Product Type

|Value |Description |
-------|------------|
|TOPUP|Transaction is a Mobile Top Up, Mobile Bundle, or Mobile Data offer. Check the subtype for detail.|
|VOUCHER|Transaction is a Digital Gift Card or Utility Payment offer. Check the subtype for detail.|
|RECHARGE_SANDBOX|Transaction is a wallet recharge on the test mode environment.|
|RECHARGE_WITH_CREDIT_CARD|Transaction is a wallet recharge in the production environment using a credit card.|

### Transaction Type

|Value |Description |
-------|------------|
|CREDIT|Transaction added value to the wallet through a recharge or balance credit|
|DEBIT|Transaction subtracted value from the wallet through a product purchase or a balance adjustment|

### Value Type

Value types are used by RANGE offers allowing the value to be sent based on the price charged to the customer, the cost for the Zendit client or the value desired in the destination currency.

|Value |Description |
-------|------------|
|COST|Customer Price and Value delivered calculated using the Zendit client's cost FX|
|PRICE|Zendit client Cost and Value delivered calculated using the customer's price FX|
|ZEND|Zendit client cost and customer's price calculated using the cost FX and price FX for a specific value to be delivered in the destination currency|

## Date Formats for Transaction Searches

When using search transactions methods (topupsPurchasesGet, vouchersPurchasesGet, and transactionsGet) Zendit expects the date to be in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339) format using UTC timezone e.g. 2023-02-15T03:15:22Z)

When searching dates, there are search prefixes to use to handle how you want to search based on the createdBy date.

|Format|Description|Example|
---|---|---|
|No prefix|Search for an exact date/time|2023-02-15T03:15:22Z will search for transactions that match February 15, 2023 at 3:15 and 22 seconds in UTC timezone|
|lt|Search for a date/time that is earlier than the supplied value|lt2023-02-15T03:15:22Z will search for transactions that are before February 15, 2023 at 3:15 and 22 seconds in UTC timezone|
|lte|Search for a date/time that is equal to the supplied value and earlier|lte2023-02-15T03:15:22Z will search for transactions that are equal February 15, 2023 at 3:15 and 22 seconds in UTC timezone and transactions that are earlier|
|gt|Search for a date/time that is later than the supplied value|gt2023-02-15T03:15:22Z will search for transactions that are after February 15, 2023 at 3:15 and 22 seconds in UTC timezone|
|gte|Search for a date/time that is equal to the supplied value and later|gte2023-02-15T03:15:22Z will search for transactions that are equal to February 15, 2023 at 3:15 and 22 seconds in UTC timezone and transactions that are later|

## Handling Errors

For information on errors in Zendit, refer to the [Error Message Guide](https://developers.zendit.io/error-messages)