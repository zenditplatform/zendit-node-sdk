const api = require('./../dist/api/api')
const uuid = require('uuid')

const zenditAPI = new api.ZenditApi(process.env.ZENDIT_API_KEY);

test('should return the available balance', async () => {
    const response = await zenditAPI.balanceGet();
    expect(response.body.availableBalance).toBeGreaterThanOrEqual(0);
});

test('topupsOffersGet should return list offers', async () => {
    const response = await zenditAPI.topupsOffersGet(10, 0);
    expect(response.body.list).toBeDefined();
});

test('topupsPurchasesGet should return list purchases', async () => {
    const response = await zenditAPI.topupsPurchasesGet(10, 0);
    expect(response.body.list).toBeDefined();
});

test('topupsPurchasesTransactionIdGet should return purchase', async () => {
    const response = await zenditAPI.topupsPurchasesGet(10, 0);
    if (response.body.list.length > 0) {
        const purchase = response.body.list[0];
        let purchaseID = purchase.transactionId;

        const purchaseResponse = await zenditAPI.topupsPurchasesTransactionIdGet(purchaseID);
        expect(purchaseResponse.body.offerId).toBeDefined();
    }
});

test('topupsPurchasesPost should create voucher', async () => {
    const response = await zenditAPI.topupsPurchasesPost({
        offerId: "TIGO_GT-US-PAQUETIGO-001",
        recipientPhoneNumber: "+5355564362", // This testing phone number is used to pass the test case successfully in the sandbox
        transactionId: uuid.v4()
    });
    expect(response.body.status).toBe("ACCEPTED");
});

test('vouchersOffersGet should return offers', async () => {
    const response = await zenditAPI.vouchersOffersGet(10, 0);
    expect(response.body.list).toBeDefined();

    const voucherOfferId = response.body.list[0].offerId;
    const responseOffer = await zenditAPI.vouchersOffersOfferIdGet(voucherOfferId);
    expect(responseOffer.body.offerId).toBe(voucherOfferId);
});

test('vouchersPurchasesPost should create purchase', async () => {
    const response = await zenditAPI.vouchersPurchasesPost({
        offerId: "TELCEL_MX_BUNDLE007",
        fields: [
            {key: "recipient.msisdn", value: "+5355564362"}, // This testing phone number is used to pass the test case successfully in the sandbox
            {key: "sender.msisdn", value: "+5355564362"}, // This testing phone number is used to pass the test case successfully in the sandbox
            {key: "sender.country", value: "US"},
        ],
        transactionId: uuid.v4(),
    });

    expect(response.body.status).toBe("ACCEPTED");
});

test('transactionsGet should return transaction', async () => {
    const response = await zenditAPI.transactionsGet(10, 0);
    expect(response.body.list).toBeDefined();

    const transactionId = response.body.list[0].transactionId;
    const transaction = await zenditAPI.transactionsTransactionIdGet(transactionId);
    expect(transaction.body.transactionId).toBe(transactionId);
});
