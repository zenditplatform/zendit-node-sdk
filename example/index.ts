import uuid from "uuid";
import * as dotenv from "dotenv"
import { ZenditApi, DtoTransaction,  DtoVoucherOffer, DtoTopupPurchase, DtoPurchaseValue, DtoVoucherPurchaseInput,
    DtoValueType, DtoVoucherField, DtoTopupPurchaseMakeInput, DtoTopupSender } from "@zenditplatform/zendit-sdk";

dotenv.config()

const zenditAPI = new ZenditApi(process.env.ZENDIT_API_KEY)
const examples = async () => {

    ///
    /// Balance check
    ///

    console.log("====== BALANCE CHECK ======")
    const {body:balanceGetBody} = await zenditAPI.balanceGet()
    console.log(balanceGetBody.availableBalance)

    ///
    /// Topups
    ///

    console.log("\n====== TOPUP OFFERS ======")
    const {body:topupsOffersGetBody} = await zenditAPI.topupsOffersGet(10, 0)
    console.log(topupsOffersGetBody.list)

    // Purchase Fixed Offer
    console.log("\n====== PURCHASE FIXED OFFER ======")
    const data = new DtoTopupPurchaseMakeInput(uuid.v4(), "CUBACEL_CU_PAQUETE001", "+5355564362");
    const {body:topupsPurchasesPostBody} = await zenditAPI.topupsPurchasesPost(data)
    console.log(topupsPurchasesPostBody)

    // Purchase Range Offer
    console.log("\n====== PURCHASE RANGE OFFER ======")
    const purchaseValue = new DtoPurchaseValue(DtoValueType.ValueTypeZend, 25000);
    const topupSender = new DtoTopupSender(undefined,  "+15515551212");
    const dataOpenRange = new DtoTopupPurchaseMakeInput(uuid.v4(), "CUBACEL_CU_OPEN", "+5355564362", purchaseValue, topupSender);
    const { body: openRangeTopupPurchase } = await zenditAPI.topupsPurchasesPost(dataOpenRange);
    console.log(openRangeTopupPurchase);

    console.log("\n====== GET TOPUP TRANSACTIONS ======")
    const { body: { list: topupPurchases } } = await zenditAPI.topupsPurchasesGet(10, 0);
    console.log(topupPurchases);

    console.log("\n====== GET TOPUP TRANSACTION BY ID ======")
    const topupPurchase = topupPurchases!.pop() as DtoTopupPurchase;
    const purchaseID = topupPurchase.transactionId!;
    const { body: topupPurchasesTransaction } = await zenditAPI.topupsPurchasesTransactionIdGet(purchaseID);
    console.log(topupPurchasesTransaction);

    ///
    /// Vouchers
    ///

    console.log("\n====== VOUCHER CATALOG ======")
    const { body: { list: voucherOffers } } = await zenditAPI.vouchersOffersGet(10, 0);
    console.log(voucherOffers);

    console.log("\n====== VOUCHER OFFER BY ID ======")
    const voucherOffer = voucherOffers!.pop() as DtoVoucherOffer;
    const voucherOfferIdToGet = voucherOffer.offerId!;
    const { body: voucherOfferData } = await zenditAPI.vouchersOffersOfferIdGet(voucherOfferIdToGet);
    console.log(voucherOfferData);

    console.log("\n====== PURCHASE FIXED VOUCHER OFFER ======")
    const reqFields: Array<DtoVoucherField> = [
        new DtoVoucherField("recipient.firstName", "John"),
        new DtoVoucherField("recipient.lastName", "Doe"),
        new DtoVoucherField("recipient.msisdn", "+15515551212"),
        new DtoVoucherField("sender.firstName", "Jane"),
        new DtoVoucherField("sender.lastName", "Doe"),
        new DtoVoucherField("sender.msisdn", "+15515551212"),
    ]
    const voucherPurchaseInput = new DtoVoucherPurchaseInput(uuid.v4(), "AIRCANADA_CA_001_EGIFT_USD", reqFields);
    const { body: vouchersPurchasesPostBody } = await zenditAPI.vouchersPurchasesPost(voucherPurchaseInput)
    console.log(vouchersPurchasesPostBody)

    ///
    /// Transactions
    ///

    console.log("\n====== GET TRANSACTIONS ======")
    const { body: transactionsGetBody } = await zenditAPI.transactionsGet(10, 0);
    console.log(transactionsGetBody.list);

    console.log("\n====== GET TRANSACTION BY ID ======")
    const voucher = transactionsGetBody.list?.pop() as DtoTransaction
    const transactionID = voucher.transactionId!;
    const { body: transactionsTransactionIdGetBody } = await zenditAPI.transactionsTransactionIdGet(transactionID)
    console.log(transactionsTransactionIdGetBody)
}

examples();

