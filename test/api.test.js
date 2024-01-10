const api = require('./../dist/src/apis/api')
const uuid = require('uuid')

const zenditAPI = new api.ZenditApi(process.env.ZENDIT_API_KEY);

test('should return the available balance', async () => {
    const response = await zenditAPI.balanceGet();
    expect(response.availableBalance).toBeGreaterThanOrEqual(0);
});

test('topupsOffersGet should return list offers', async () => {
    const response = await zenditAPI.topupsOffersGet(10, 0);
    expect(response.list).toBeDefined();
});

test('topupsPurchasesGet should return list purchases', async () => {
    const response = await zenditAPI.topupsPurchasesGet(10, 0);
    expect(response.list).toBeDefined();
});

test('topupsPurchasesTransactionIdGet should return purchase', async () => {
    const response = await zenditAPI.topupsPurchasesGet(10, 0);
    if (response.list.length > 0) {
        const purchase = response.list[0];
        let purchaseID = purchase.transactionId;

        const purchaseResponse = await zenditAPI.topupsPurchasesTransactionIdGet(purchaseID);
        expect(purchaseResponse.offerId).toBeDefined();
    }
});

test('topupsPurchasesPost should create topup purchase', async () => {
    const response = await zenditAPI.topupsPurchasesPost({
            offerId: "CLARO_GT_OPEN",
            recipientPhoneNumber: "+5355564362", // This testing phone number is used to pass the test case successfully in the sandbox
            transactionId: uuid.v4(),
            value: {
                type: "PRICE",
                value: 1000,
            },
        });
    expect(response.status).toBe("ACCEPTED");
});

test('vouchersOffersGet should return offers', async () => {
    const response = await zenditAPI.vouchersOffersGet(10, 0);
    expect(response.list).toBeDefined();

    const voucherOfferId = response.list[0].offerId;
    const responseOffer = await zenditAPI.vouchersOffersOfferIdGet(voucherOfferId);
    expect(responseOffer.offerId).toBe(voucherOfferId);
});

test('vouchersPurchasesPost should create purchase', async () => {
    const response = await zenditAPI.vouchersPurchasesPost({
            offerId: "AMAZON_CA_005_EGIFT_USD",
            fields: [
                {key: "sender.msisdn", value: "+2505550199"}, // This testing phone number is used to pass the test case successfully in the sandbox
                {key: "sender.country", value: "US"},
                {key: "sender.firstName", value: "John"},
                {key: "sender.lastName", value: "Doe"},
                {key: "recipient.firstName", value: "John"},
                {key: "recipient.lastName", value: "Doe"},
                {key: "recipient.msisdn", value: "+2505550199"}, // This testing phone number is used to pass the test case successfully in the sandbox
            ],
            transactionId: uuid.v4(),
        });

    expect(response.status).toBe("ACCEPTED");
});

test('vouchersPurchasesGet should return list purchases', async () => {
    const response = await zenditAPI.vouchersPurchasesGet(10, 0);
    expect(response.list).toBeDefined();
});

test('transactionsGet should return transaction', async () => {
    const response = await zenditAPI.transactionsGet(10, 0);
    expect(response.list).toBeDefined();

    const transactionId = response.list[0].transactionId;
    const transaction = await zenditAPI.transactionsTransactionIdGet(transactionId);
    expect(transaction.transactionId).toBe(transactionId);
});

test('esimOffersGet should return list offers', async () => {
    const response = await zenditAPI.esimOffersGet(10, 0);
    expect(response.list).toBeDefined();
});

test('esimPurchasesPost should create topup purchase', async () => {
    const response = await zenditAPI.esimPurchasesPost({
        offerId: "ESIM-AFRICA-30D-10GB",
        transactionId: uuid.v4(),
    });
    expect(response.status).toBe("ACCEPTED");
});

test('esimPurchasesGet should return list purchases', async () => {
    const response = await zenditAPI.esimPurchasesGet(10, 0);
    expect(response.list).toBeDefined();
});

test('esimPurchasesTransactionIdGet should return purchase', async () => {
    const response = await zenditAPI.esimPurchasesGet(10, 0);
    if (response.list.length > 0) {
        const purchase = response.list[0];
        let purchaseID = purchase.transactionId;

        const purchaseResponse = await zenditAPI.esimPurchasesTransactionIdGet(purchaseID);
        expect(purchaseResponse.offerId).toBeDefined();
    }
});