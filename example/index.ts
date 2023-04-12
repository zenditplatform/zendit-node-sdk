import uuid from "uuid";
import * as dotenv from "dotenv"
import { ZenditApi, DtoTransaction,  DtoVoucherOffer, DtoTopupPurchase, DtoPurchaseValue, DtoVoucherPurchaseInput,
    DtoValueType, DtoVoucherField, DtoTopupPurchaseMakeInput, DtoTopupSender } from "./../api";

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

