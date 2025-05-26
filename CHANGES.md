zendit-node changelog
=====================

# [2025-05-26] Version 1.7.0

- **promos**: Added promo endpoints
- **eSIM refunds**: eSIM refund endpoints

# [2025-02-10] Version 1.6.0

- **brands**: Added brand endpoints with multilingual support.

# [2024-10-30] Version 1.5.0

- **Voucher offers**: Added new fields that identify delivery type.

# [2024-06-24] Version 1.4.1

- **example**: Minor fix in the example code.

# [2024-02-05] Version 1.4.0

- **eSIM plans**: Added functions for purchasing and fetching eSIM plans.

# [2024-01-18] Version 1.3.1

- **Custom User-Agent**: To improve traceability, we've added a custom User-Agent to our SDK's HTTP requests.
  This allows us to better track and understand the requests made by our application in server logs and other monitoring tools.

# [2024-01-15] Version 1.3.0

Library - Enhancements

- **eSIM Product Support**: Added functions to work with eSIM products.
- **Model Improvements**: Updated data models to set fields as non-nullable when they consistently appear in requests and responses, enhancing data integrity

[2023-11-10] Version 1.2.1
--------------------------------

Library - Security

- Vulnerability https://nvd.nist.gov/vuln/detail/CVE-2023-45133 has been fixed by updating babel/traverse to version 7.23.3

[2023-04-13] Version 1.2.0
--------------------------------

Library - Enhancements

- The confirmations field has been added into both the DtoTopupPurchaseResponse and DtoVoucherPurchaseResponse models.

[2023-04-13] Version 1.1.1
--------------------------------

Documentation

- Updated install instructions

[2023-04-13] Version 1.1.0
--------------------------------

Library - Security

- PR #14: Replace package request with fetch to fix security vulnerability

[2023-03-30] Version 1.0.0
--------------------------------
The first version of the `zendit-node` SDK!

- [General Documentation](https://developers.zendit.io)
- [Full API Documentation](https://developers.zendit.io/api)
- [SDK Guide](SDK-GUIDE.md)