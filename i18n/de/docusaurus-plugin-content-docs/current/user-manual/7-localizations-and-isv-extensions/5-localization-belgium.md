---
title: Localization Belgium
sidebar_position: 5
hide_title: true
---
## Localization Belgium

### Language
ExFlow supports Dutch (Belgium) and French (Belgium) languages in Business Central.<br/>

Additional fields in the Import Journal:<br/>

* Enterprise No. - VAT no. for vendors from Belgium
* Structured message - Payment reference (OCR no.)<br/>

Additional Non Deductible information added in the Import Journal fact box (Document Details):
* Line Total Non Deductible VAT.<br/>

Non Deductible VAT will come from G/L Account card. <br/>
For example, on the G/L Account Card page, if you enter 75 in the "% Non-Deductible VAT" field, then 75 percent of the regular VAT amount is considered an additional cost and will be added to the net amount during posting. The remaining 25 percent will be posted as regular VAT.