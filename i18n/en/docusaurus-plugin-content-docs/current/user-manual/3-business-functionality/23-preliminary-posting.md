---
title: Preliminary Posting
sidebar_position: 23
hide_title: true
---
## Preliminary Posting

Use ExFlow Preliminary Posting to post costs and VAT when receiving and creating documents. Get your costs and VAT booked directly to generate Financial and Tax reports with minimal effort.

Posted Vendor Ledger Entries will be created on a regular balance account or a separate balance account according to your setup and will be included in the Cash Flow.

Choose G/L Account per Line Type and Posting Groups, or to an Interim Account. Job Ledger Entries and Deferrals are also included.

Once the document is fully approved and posted, the Preliminary Posting is reversed automatically. 

Preliminary Posting is only available for Invoices and Credit Memos activated for ExFlow Approval.

### ExFlow Setup
To be able to do preliminary posting ExFlow need following journals and Inward Registration (SweBase) needs to be disabled.

![ExFlow Setup - Preliminary Posting](@site/static/img/media/exflow-setup-preliminary-posting-001.png)

| ExFlow Setup - Preliminary Posting  |	|
|:-|:-|
| **Preliminary Posting:**          | When the below setup are done, activate Preliminary Posting
|**Source Code:**                   | Use existing or create a new to make it easy to track
| **General Journal Template:**     | Use Existing or create a new
| **General Journal Batch:**        | Use Existing or create a new
| **On Hold:**                      | 1-3 letters that will be added in Vendor Ledger Entries to avoid payments on Preliminary Posted documents that are not yet approved. Default value when running ExFlow Wizard will be **EXF**, but it can be changed if needed.
| **Invoice Rounding:**             | If SweBase (for Swedish customers) is installed Invoice Rounding is visible and used only for Preliminary Posting     <br/>If SweBase is not installed, it will be visible under Doc. Posting Checks and used both for Preliminary Posting and Posting. Invoice Rounding is not required.  <br/>For more information go to section [***Invoice Rounding below***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/exflow-approval-status#invoice-rounding)
| **Posting Description:**          | Description when Posting  <br/>Default value when running ExFlow Wizard will be **Preliminary Posted**, but it can be changed if needed
| **Reverse Description:**          | Description when Reversing.   <br/>Default value when running ExFlow Wizard will be **Preliminary Reversed**, but it can be changed if needed
| **VAT Prod. Posting Group 0%:**   | Add VAT Prod. Posting Group with 0% to preliminary post without VAT instead of VAT Prod. Posting Group added on document line. This posting will be reversed and VAT posting gets posted with VAT Prod. Posting Group added to invoice only on final posting. 



### Preliminary Posting Setup
Go to: ***ExFlow Setup --> Related --> Advanced --> Preliminary Posting Setup*** <br/>
This page will open automatically when activating Preliminary Posting.

#### Choose Posting Option per Line Type

| ExFlow Preliminary Posting Setup   |	|
|:-|:-|
| **Interim Account:**      | Posting will be done according to posting groups in General Posting Setup and *ExFlow Preliminary Posting Interim* Account
| **Purchase Account:**     | Document Lines with Line Type G/L Account, posting will be done on current G/L Account on document line   <br/>For Item, Resource, Fixed Assets and Charge (Item) Posting will be done according to posting groups in General Posting Setup. *Purch. Account* for Invoices and *Purch. Credit Memo Account* for Credit Memos

![ExFlow Preliminary Posting Setup](@site/static/img/media/preliminary-posting-setup-001.png)

All setup needed for Preliminary Posting, General Posting Setup and Vendor Posting Setup, can be reached from ExFlow Preliminary Posting Setup. Read more below.

After closing Preliminary Posting page, you will receive a question if there are Invoices or Credit Memos in Approval Status.

![Do you want to Preliminary Post](@site/static/img/media/preliminary-post-all-invoices-001.png)

When choosing to preliminary post all documents in Approval Status, there can be error messages. Go to Approval Status and correct the error and Preliminary Post manually per document.

Read more under section [***Approval Status***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/preliminary-posting#approval-status)

![There are documents not yet Preliminary Posted.](@site/static/img/media/documents-not-yet-preliminary-posted-001.png)

#### General Posting Setup

There is a short cut from Preliminary Setup.

G/L Accounts used for Item, Resource, Fixed Asset, and Charge Item when **Purchase Account** is selected in Posting Option.

![General Posting Setup - Purchase Account](@site/static/img/media/general-posting-setup-001.png)

G/L Accounts used when **Interim Account** is selected in Posting Option.

![General Posting Setup - Interim Account](@site/static/img/media/general-posting-setup-002.png)

#### Vendor Posting Groups

There is a short cut from Preliminary Setup.

It is possible to Preliminary Post to separate Payable Account.

Add new Vendor Posting Group, one or several, and add on existing groups in field ExFlow Preliminary Vendor Posting Group. <br/>
If the Vendor Posting Group is used as ExFlow Preliminary Posting Group, it can not be use anywhere else.

To use standard setting, leave ExFlow Preliminary Vendor Posting Group blank.

![Vendor Posting Group](@site/static/img/media/vendor-posting-groups-001.png)

### Functions including in Preliminary Posting

#### G/L Accounts

Preliminary Posting will be done according to setup in Preliminary Posting Setup.

#### Posting Dates

Document Posting Date and VAT Date when creating the document.

#### No. Serie

Posting Nos. same as Posting Invoice Nos. or Posting Credit Memo Nos. on document.

#### Posting checks

There will be control for Doc. Creation Checks and Move Deferral Forward.

But also following control from Doc Posting Checks in ExFlow Setup:

ExFlow Setup - Doc. Posting Checks:

- Do Not Post Predefined Account <br/>
- Check Gross Amount <br/>
- Max. Difference for Gross Amount (LCY) 

#### Posting entries including in preliminary posting

Entries included in Preliminary Posting:

- G/L Entry <br/>
- VAT Entry <br/>
- Vendor Ledger Entry <br/>
- Detail Vendor Ledger Entry <br/>
- Job Ledger Entry <br/>
- G/L Register 

#### Posting entries not included

Entries not included in Preliminary Posting:

- Posted Purchase Invoice/Credit Memo<br/>
- Item Ledger Entries <br/>
- Value Entry (Item) <br/>
- Res. Ledger Entry (Resource) <br/>
- FA Ledger Entry

### Functions when reversing Preliminary Posting

The reversal will be done when document is approved, verified and final posted or deleted. Reversal will be posted as above but with following differences:

#### Document Posting Date and VAT Date

The reversal will be posted on current posting dates on the document. Therefor reversal can be done even after closing period.

#### Deferrals

If allowed deferral posting date is closed the reversal of deferrals will be posted on first allowed deferral posting date. Therefor reversal of deferrals can be done even after closing period.

### Preliminary Posting Workflow

#### Import Journal

Before creating the document, Preliminary Posting can be previewed.

Create document from Import Journal to Preliminary post.

![Import Journal - Preview Posting](@site/static/img/media/import-journal-023-preview-posting.png)

#### Approval Status

In Approval Status it's possible to see if the document has been preliminary posted or not.

To reach functions <br/>
Go to: ***ExFlow Approval Status --> Actions --> Preliminary Posting***

| Approval Status - Preliminary Posting     |	|
|:-|:-|
| **Post:**             | Posting can only be done once
| **Preview Posting:**  | Preview Posting before post
| **Reverse:**          | To correct Posting, Reverse, correct the document and post again
| **Find Entries:**     | Find Entries for Preliminary Posted Documents

![ExFlow Approval Status - Preliminary](@site/static/img/media/approval-status-005-preliminary-posting.png)

#### Invoice and Credit Memo Card

To be able to Preliminary Post a document it must be Activated for ExFlow Approval.

If ExFlow Approval is inactivated, Preliminary Posting will be reversed. And if activating, the Invoice/Credit Memo will be posted.

![Invoice Card](@site/static/img/media/purchase-invoice-001-preliminary-posting.png)

All functions in Approval Status are also available from Card. <br/>
Go to: ***Actions --> Preliminary Posting***

![Invoice Card - Preliminary Posting](@site/static/img/media/purchase-invoice-002-preliminary-posting.png)

#### Corrections

If the posting needs to be corrected, Reverse, correct the document and do new Preliminary Posting. All posting and reversing will use current Posting Date and VAT Date.

#### Approval History

All posting can be found under Find entries. Delete filter on Date to show all.

#### Delete Document

When deleting a Preliminary Posted Document reversal will be done on current Posting Date and VAT Date.

#### ExFlow Deleted Documents

When deleting a document or inactivate for ExFlow Approval, a copy of the document will be saved in ExFlow Deleted Documents.

To find Preliminary Posted Entries <br/>
Go to: ***Related --> Preliminary Posting --> Find Entries***

Delete filter on Date to show all.

![ExFlow Deleted Documents - Preliminary Posting](@site/static/img/media/deleted-documents-001-find-entries.png)

#### Vendor Ledger Entries

When Posting or Reversing a Preliminary Posting a Vendor Ledger Entry is posted and also included in Cash Flow.

Posting Description will be added from the ExFlow Setup.

![Vendor Ledger Entries - Preliminary Posting](@site/static/img/media/vendor-ledger-entries-002-preliminary-posting.png)

ExFlow Preliminary Posted will be ticked and On Hold will be added from the ExFlow Setup and can not be changed after posting.

Preliminary Posted Vendor Ledger Entries cannot be used to Apply Entries from Vendor Ledger Entries or Payment Journals.

![Vendor Ledger Entries - Preliminary Posting](@site/static/img/media/vendor-ledger-entries-003-preliminary-posting.png)

There is fast filter added to sort on or exclude Preliminary Posted Entries.<br/>
Go to: ***Related --> ExFlow Preliminary Posting Filter***

Preliminary Posting Filters:
- **Show only Preliminary Posted/Reversed** <br/>
- **Exclude Preliminary Posted/Reversed** <br/>
- **Show all** <br/>

![Vendor Ledger Entries - ExFlow Preliminary Posting Filter](@site/static/img/media/vendor-ledger-entries-004-preliminary-posting.png)

#### Final Posting

After the document is Approved and Verified, Post the document as usually and the Preliminary Posting will be reversed on documents current Posting Date.

Vendor Ledger Entry for reversal will be applied to the Preliminary Posted document and Remaining Amount set to zero.

#### Approval Status Report

Approval Status Report at monthly closing can still be used.

For Preliminary Posting, use Posting Option, Interim Account, in Preliminary Posting Setup and same G/L Account for all posting in General Posting Setup in ExFlow Preliminary Posting Interim.

When creating the report and G/L Entries reverse Preliminary Posting by using the same G/L Account for Balancing Account.

Retrieve Lines from ExFlow Document Lines and all documents will be posted at latest coding even if not fully approved.

![Approval Status Report](@site/static/img/media/report-approval-status-001-preliminary-posting.png)

For mor information regarding Approval Status Report, read more under sections **Reports** and **Approval Status Report**.

#### ExFlow Preliminary Accounts Payable

This report is built on Business Central standard report with Option to choose filer on ExFlow Preliminary Posted documents.

![ExFlow Preliminary Accounts Payable](@site/static/img/media/report-exflow-preliminary-accounts-payable-001.png)

#### ExFlow Aged Accounts Payable

This report is built on Business Central standard report with Option to choose filer on ExFlow Preliminary Posted documents.

![ExFlow Aged Accounts Payable](@site/static/img/media/report-exflow-preliminary-accounts-payable-002.png)
