import {ZenditApi} from "../api/api";
import uuid from "uuid";
import * as dotenv from "dotenv"
import {DtoTopupPurchase} from "../model/dtoTopupPurchase";
import {DtoVoucherOffer} from "../model/dtoVoucherOffer";
import {DtoTransaction} from "../model/dtoTransaction";

dotenv.config()

const zenditAPI = new ZenditApi(process.env.ZENDIT_API_KEY)

///
/// General purpose
///

zenditAPI.balanceGet().then(v => {
    console.log(v.body.availableBalance)
})

///
/// Topups
///

zenditAPI.topupsOffersGet(10, 0).then(v => {
    console.log(v.body.list)
})

zenditAPI.topupsPurchasesGet(10, 0).then(v => {
    console.log(v.body.list)
    const purchase = v.body.list?.pop() as DtoTopupPurchase
    let purchaseID = purchase.transactionId!;

    zenditAPI.topupsPurchasesTransactionIdGet(purchaseID).then(v => {
        console.log(v.body)
    })
})



zenditAPI.topupsPurchasesPost({
    offerId: "TIGO_GT-US-PAQUETIGO-001",
    recipientPhoneNumber: "+5355564362", // This testing phone number is used to pass the test case successfully in the sandbox
    transactionId: uuid.v4()
}).then(v => {
    console.log(v.body)
})

///
/// Vouchers
///

zenditAPI.vouchersOffersGet(10, 0).then(v => {
    console.log(v.body.list)
    const voucher = v.body.list?.pop() as DtoVoucherOffer
    const voucherOfferId = voucher.offerId!;

    zenditAPI.vouchersOffersOfferIdGet(voucherOfferId).then(v => {
        console.log(v.body)
    })
})



    zenditAPI.vouchersPurchasesPost({
        offerId: "TELCEL_MX_BUNDLE007",
        fields: [
            {key: "recipient.msisdn", value: "+5355564362"}, // This testing phone number is used to pass the test case successfully in the sandbox
            {key: "sender.msisdn", value: "+5355564362"}, // This testing phone number is used to pass the test case successfully in the sandbox
            {key: "sender.country", value: "US"},
        ],
        transactionId: uuid.v4(),
    }).then(v => {
        console.log(v.body)
    })

///
/// Transactions
///

zenditAPI.transactionsGet(10, 0).then(v => {
    console.log(v.body.list)

    const voucher = v.body.list?.pop() as DtoTransaction
    const transactionID = voucher.transactionId!;

    zenditAPI.transactionsTransactionIdGet(transactionID).then(v => {
        console.log(v.body)
    })
})



