---
title: Workflow Process Overview
sidebar_position: 6
hide_title: true
custom_edit_url: null
---
## Workflow Process Overview

![Workflow Precess Overview](@site/static/img/media/workflow-process-overview-001.png)

1. **Scanning and data capture** - ExFlow support all types of invoices including paper, pdf and other electronic formats. Incoming paper
    invoices are scanned and imported into an electronic workflow using ExFlow Data Capture *(or a similar OCR-solution)*. Electronic
    invoices are imported directly into ExFlow.

2. **Data import and validation** - Invoice information is interpreted down to line level. Data such as supplier, quantity, item number,
    and unit price are captured using OCR and validated. Missing data can be adjusted or added manually.

3. **Pre-coding** - ExFlow provides intuitive pre-coding of all incoming invoices, streamlining the process and minimizing manual
    labor.

4. **Invoice matching** - ExFlow can use the captured data to match a purchase order invoice to available purchase orders, contracts
    and/or goods receipts to determine how the invoice should be processed. ExFlow supports standard Dynamics 3-way matching.

5. **Approval workflow** - For expense invoices or if a purchase order invoice does not match or discrepancies are identified, it is sent
    for approval. The workflow is suggested based on pre- defined approval rules. These rules can be based on supplier, accounts,
    dimensions, amount limits, etc. ExFlow also supports position hierarchies. For invoices needing approval, approvers are notified
    through email to ensure rapid turnaround.

6. **Final posting and archiving** - Approved invoices are automatically posted into the general ledger before they are
    archived. AP staff always have a clear overview of all invoices in the invoice process. At any time, any invoice can be accessed
    directly from the Dynamics 365 Business Central workspace. 

7. **Insights and analytics** - At any time AP staff have a clear overview of all invoices in the invoice process. They can also
    access historic data for every invoice from their Dynamics 365 Business Central workspace. All data is processed in real-time
    ensuring that financial reports always have correct figures.

