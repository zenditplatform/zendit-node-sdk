import { ZenditApi } from "../api/api";
import uuid from "uuid";
import * as dotenv from "dotenv"
import { DtoTopupPurchase } from "../model/dtoTopupPurchase";
import { DtoVoucherOffer } from "../model/dtoVoucherOffer";
import { DtoTransaction } from "../model/dtoTransaction";
import { DtoPurchaseValue, DtoVoucherPurchaseInput, DtoValueType, DtoVoucherField, DtoTopupPurchaseMakeInput, DtoTopupSender } from "../api";


dotenv.config()

const zenditAPI = new ZenditApi(process.env.ZENDIT_API_KEY)
const examples = async () => {

    ///
    /// Balance check
    ///

    console.log("====== BALANCE CHECK ======")
    await zenditAPI.balanceGet().then(v => {
        console.log(v.body.availableBalance)
    })

    ///
    /// Topups
    ///

    console.log("\n====== TOPUP OFFERS ======")
    await zenditAPI.topupsOffersGet(10, 0).then(v => {
        console.log(v.body.list)
    })

    // Purchase Fixed Offer

    const data = new DtoTopupPurchaseMakeInput(uuid.v4(), "CUBACEL_CU_PAQUETE001", "+5355564362");

    console.log("\n====== PURCHASE FIXED OFFER ======")
    await zenditAPI.topupsPurchasesPost(data).then(v => {
        console.log(v.body)
    })

    // Purchase Range Offer
    const purchaseValue = new DtoPurchaseValue(DtoValueType.ValueTypeZend, 25000);
    const topupSender = new DtoTopupSender(undefined,  "+15515551212");
    const dataOpenRange = new DtoTopupPurchaseMakeInput(uuid.v4(), "CUBACEL_CU_OPEN", "+5355564362", purchaseValue, topupSender);
    

    console.log("\n====== PURCHASE RANGE OFFER ======")
    await zenditAPI.topupsPurchasesPost(dataOpenRange).then(v => {
        console.log(v.body)
    })

    console.log("\n====== GET TOPUP TRANSACTIONS ======")
    await zenditAPI.topupsPurchasesGet(10, 0).then(v => {
        console.log(v.body.list)
        const purchase = v.body.list?.pop() as DtoTopupPurchase
        let purchaseID = purchase.transactionId!;

        zenditAPI.topupsPurchasesTransactionIdGet(purchaseID).then(v => {
            console.log(v.body)
        })
    })

    ///
    /// Vouchers
    ///
    console.log("\n====== VOUCHER CATALOG ======")
    await zenditAPI.vouchersOffersGet(10, 0).then(v => {
        console.log(v.body.list)
        const voucher = v.body.list?.pop() as DtoVoucherOffer
        const voucherOfferId = voucher.offerId!;

        zenditAPI.vouchersOffersOfferIdGet(voucherOfferId).then(v => {
            console.log(v.body)
        })
    })

    const reqFields: Array<DtoVoucherField> = [
        new DtoVoucherField("recipient.firstName", "John"),
        new DtoVoucherField("recipient.lastName", "Doe"),
        new DtoVoucherField("recipient.msisdn", "+15515551212"),
        new DtoVoucherField("sender.firstName", "Jane"),
        new DtoVoucherField("sender.lastName", "Doe"),
        new DtoVoucherField("sender.msisdn", "+15515551212"),
        
    ]

    const voucherData = new DtoVoucherPurchaseInput(uuid.v4(), "AIRCANADA_CA_001_EGIFT_USD", reqFields);
    
    console.log("\n====== PURCHASE FIXED VOUCHER OFFER ======")
    await zenditAPI.vouchersPurchasesPost(voucherData).then(v => {
        console.log(v.body)
    })

    ///
    /// Transactions
    ///

    console.log("\n====== GET TRANSACTIONS ======")
    await zenditAPI.transactionsGet(10, 0).then(v => {
        console.log(v.body.list)

        const voucher = v.body.list?.pop() as DtoTransaction
        const transactionID = voucher.transactionId!;

        zenditAPI.transactionsTransactionIdGet(transactionID).then(v => {
            console.log(v.body)
        })
    })

}

examples();

