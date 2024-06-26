import * as uuid from "uuid";
import * as dotenv from "dotenv"
import {
    ZenditApi, DtoTransaction, DtoVoucherOffer, DtoTopupPurchase, DtoPurchaseValue, DtoVoucherPurchaseInput,
    DtoValueType, DtoVoucherField, DtoTopupPurchaseMakeInput, DtoTopupSender, DtoESimOffer, DtoESimPurchaseMakeInput,
    DtoTransactionStatus,
} from "@zenditplatform/zendit-sdk";

dotenv.config()

const zenditAPI = new ZenditApi(process.env.ZENDIT_API_KEY)
const examples = async () => {

    ///
    /// Balance check
    ///

    console.log("====== BALANCE CHECK ======")
    const balanceGetBody = await zenditAPI.balanceGet()
    console.log(balanceGetBody.availableBalance)

    ///
    /// Topups
    ///

    console.log("\n====== TOPUP OFFERS ======")
    const topupsOffersGetBody = await zenditAPI.topupsOffersGet(10, 0)
    console.log(topupsOffersGetBody.list)

    // Purchase Fixed Offer
    console.log("\n====== PURCHASE FIXED OFFER ======")
    const data : DtoTopupPurchaseMakeInput = {transactionId: uuid.v4(), offerId: "CUBACEL_CU_PAQUETE001", recipientPhoneNumber: "+5355564362"};
    const topupsPurchasesPostBody = await zenditAPI.topupsPurchasesPost(data)
    console.log(topupsPurchasesPostBody)

    // Purchase Range Offer
    console.log("\n====== PURCHASE RANGE OFFER ======")
    const purchaseValue : DtoPurchaseValue = {type: DtoValueType.ValueTypeZend, value: 25000};
    const topupSender : DtoTopupSender = {country: undefined, phoneNumber: "+15515551212"};
    const dataOpenRange : DtoTopupPurchaseMakeInput = {transactionId: uuid.v4(), offerId: "CUBACEL_CU_OPEN", recipientPhoneNumber: "+5355564362", value: purchaseValue, sender: topupSender};
    const openRangeTopupPurchase = await zenditAPI.topupsPurchasesPost(dataOpenRange);
    console.log(openRangeTopupPurchase);

    console.log("\n====== GET TOPUP TRANSACTIONS ======")
    const {list: topupPurchases} = await zenditAPI.topupsPurchasesGet(10, 0);
    console.log(topupPurchases);

    console.log("\n====== GET TOPUP TRANSACTION BY ID ======")
    const topupPurchase = topupPurchases!.pop() as DtoTopupPurchase;
    const purchaseID = topupPurchase.transactionId!;
    const topupPurchasesTransaction = await zenditAPI.topupsPurchasesTransactionIdGet(purchaseID);
    console.log(topupPurchasesTransaction);

    ///
    /// Vouchers
    ///

    console.log("\n====== VOUCHER CATALOG ======")
    const {list: voucherOffers} = await zenditAPI.vouchersOffersGet(10, 0);
    console.log(voucherOffers);

    console.log("\n====== VOUCHER OFFER BY ID ======")
    const voucherOffer = voucherOffers!.pop() as DtoVoucherOffer;
    const voucherOfferIdToGet = voucherOffer.offerId!;
    const voucherOfferData = await zenditAPI.vouchersOffersOfferIdGet(voucherOfferIdToGet);
    console.log(voucherOfferData);

    console.log("\n====== PURCHASE FIXED VOUCHER OFFER ======")
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
    const vouchersPurchasesPostBody = await zenditAPI.vouchersPurchasesPost(voucherPurchaseInput)
    console.log(vouchersPurchasesPostBody)

    ///
    /// ESim
    ///

    console.log("\n====== ESIM CATALOG ======")
    const {list: eSimOffers} = await zenditAPI.esimOffersGet(10, 0);
    console.log(eSimOffers);

    console.log("\n====== ESIM OFFER BY ID ======")
    const eSimOffer = eSimOffers!.pop() as DtoESimOffer;
    const eSimOfferIdToGet = eSimOffer.offerId!;
    const eSimOfferData = await zenditAPI.esimOffersOfferIdGet(eSimOfferIdToGet);
    console.log(eSimOfferData);

    console.log("\n====== PURCHASE ESIM OFFER ======")
    const eSimPurchaseInput: DtoESimPurchaseMakeInput = {
        transactionId: uuid.v4(), offerId: "ESIM-AFRICA-30D-10GB"
    };
    const eSimPurchasesPostBody = await zenditAPI.esimPurchasesPost(eSimPurchaseInput)
    console.log(eSimPurchasesPostBody)

    console.log("\n====== WAITING for completion of ESIM transaction ======")
    await waitForTransactionStatus(eSimPurchasesPostBody.transactionId, DtoTransactionStatus.TransactionStatusDone)
    console.log("\n====== ESIM PURCHASE GET QR CODE (Base64) ======")
    const purchaseResponseJson = await zenditAPI.esimPurchasesTransactionIdQrcodeGet(eSimPurchasesPostBody.transactionId, "json");
    console.log(purchaseResponseJson.imageBase64)

    ///
    /// Transactions
    ///

    console.log("\n====== GET TRANSACTIONS ======")
    const transactionsGetBody = await zenditAPI.transactionsGet(10, 0);
    console.log(transactionsGetBody.list);

    console.log("\n====== GET TRANSACTION BY ID ======")
    const voucher = transactionsGetBody.list?.pop() as DtoTransaction
    const transactionID = voucher.transactionId!;
    const transactionsTransactionIdGetBody = await zenditAPI.transactionsTransactionIdGet(transactionID)
    console.log(transactionsTransactionIdGetBody)
}

examples();

const waitForTransactionStatus = async (transactionId, status) => {
    let transaction = await zenditAPI.transactionsTransactionIdGet(transactionId);
    while (transaction.status !== status) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        transaction = await zenditAPI.transactionsTransactionIdGet(transactionId);
    }

    return true;
}