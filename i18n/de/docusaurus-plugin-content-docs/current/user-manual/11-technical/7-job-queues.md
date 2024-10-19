---
title: ExFlow-Aufgaben in Job Queue-Einträgen planen
sidebar_position: 7
hide_title: true
custom_edit_url: null
---

## ExFlow-Aufgaben in Job Queue-Einträgen planen

Konfigurieren Sie Job Queues in Business Central, um die Fähigkeiten von ExFlow vollständig zu nutzen. <br/>

Lesen Sie mehr über [***Job Queues***](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-job-queue) und wie Sie [***Job Queues zur Planung von Aufgaben verwenden***](https://learn.microsoft.com/en-us/dynamics365/business-central/admin-job-queues-schedule-tasks) auf der Microsoft-Dokumentationsseite.<br/>

Es ist optional, den Job Queue Category Code *EXFLOW* auf der Job Entry Card zuzuweisen.<br/>

Eine Liste der häufigsten Jobs wird unten dargestellt:

| Prozess | Codeunit | Beschreibung | Nur in der Standardfirma |
| :----------- | :-------------- | :-------------- | :-------------- |
|**Abonnement** |12069666 |ExLPSubscriptionNAS <br/> Dieser Job Queue wird für das ExFlow-Abonnement benötigt, löschen Sie diesen Job nicht. |Ja
|**Posteingangserinnerungen senden** |12057077 |Ex Email NAS <br/> Dieser Job Queue sendet Posteingangserinnerungen an aktuelle ExFlow-Benutzer, die Einkaufsdokumente zur Genehmigung haben. <br/><br/> Verwenden Sie diesen Parameterstring in der Job Queue Entry Card: INBOX REMINDER <br/> |Ja
|**Kommentarbenachrichtigungserinnerungen senden** |12057077 |Ex Email NAS <br/> Dieser Job Queue sendet Kommentarbenachrichtigungen an den erwähnten/markierten ExFlow-Benutzer. <br/><br/> Verwenden Sie diesen Parameterstring in der Job Queue Entry Card: Comment Notification <br/> |Ja
|**Erinnerungen für nicht erhaltene Bestellungen senden** |12057077 |Ex Email NAS <br/> Dieser Job Queue sendet Erinnerungen für nicht erhaltene Bestellungen, wenn der Wareneingang bei einer bestellbezogenen Rechnung fehlt. <br/><br/> Verwenden Sie diesen Parameterstring in der Job Queue Entry Card: Comment Notification <br/> |Ja
|**Vertragserinnerungen senden** |12057077 |Ex Email NAS <br/> Dieser Job Queue sendet Vertragserinnerungen, wenn erwartete Rechnungen fehlen. <br/><br/> Verwenden Sie diesen Parameterstring in der Job Queue Entry Card: Contract Invoice Reminder <br/> |Ja
|**Vertragserinnerungen senden** |12057077 |Ex Email NAS <br/> Dieser Job Queue sendet Erinnerungen über das Vertragsablaufdatum. <br/><br/> Verwenden Sie diesen Parameterstring in der Job Queue Entry Card: Contract Reminder <br/> |Ja
|**Erinnerungen für genehmigte, nicht erhaltene Bestellungen senden** |12057077 |Ex Email NAS <br/> Dieser Job Queue sendet Erinnerungen für genehmigte, nicht erhaltene Bestellungen. Wenn Rechnungen mit Bestellung und Wareneingang abgeglichen werden, kann die Rechnung zur Bestellung abgeglichen, zur Genehmigung gesendet und genehmigt werden, ohne dass der Wareneingang erfolgt ist. Die Rechnung kann jedoch nicht gebucht werden. In diesem Fall wird eine E-Mail-Erinnerung für fehlende Wareneingänge gesendet. <br/><br/> Verwenden Sie diesen Parameterstring in der Job Queue Entry Card: UNRECEIVEDORDERAPPROVED <br/> Die Einstellung ''Send Unreceived Order Reminder on Approval'' muss ebenfalls in ExFlow Setup --> PO Matching --> Send Unreceived Order Reminder on Approval aktiviert sein. |Ja
|**Erinnerungen für abgelehnte Bestellungen senden** |12057077 |Ex Email NAS <br/> Dieser Job Queue sendet Erinnerungen für abgelehnte Bestellungen. <br/><br/> Verwenden Sie diesen Parameterstring in der Job Queue Entry Card: REJECTED ORDER <br/> |Ja
|**Erinnerungen für abgelehnte Angebote senden** |12057077 |Ex Email NAS <br/> Dieser Job Queue sendet Erinnerungen für abgelehnte Angebote. <br/><br/> Verwenden Sie diesen Parameterstring in der Job Queue Entry Card: REJECTED QUOTE <br/> |Ja
|**Erinnerungen für abgelehnte Einkaufsrechnungen und Gutschriften senden** |12057077 |Ex Email NAS <br/> Dieser Job Queue sendet Erinnerungen für abgelehnte Einkaufsrechnungen und Gutschriften. <br/><br/> Verwenden Sie diesen Parameterstring in der Job Queue Entry Card: REJECTED INVOICE <br/> |Ja
|**OMNI-Erinnerungen für OMNI-Dokumente senden** |12057077 |Ex Email NAS <br/> Dieser Job Queue sendet OMNI-Erinnerungen an Systembenutzer, die OMNI-Genehmigungsregeln und/oder Verträge zur Genehmigung im OMNI-Genehmigungsstatus haben. <br/><br/> Verwenden Sie diesen Parameterstring in der Job Queue Entry Card: OMNI REMINDER <br/> |Ja
|**Erinnerungen für zurückgestellte Dokumente senden** |12057077 |Ex Email NAS <br/> Dieser Job Queue sendet Erinnerungen für zurückgestellte Dokumente. <br/><br/> Verwenden Sie diesen Parameterstring in der Job Queue Entry Card: ON HOLD <br/> |Ja
|**Erinnerungen für genehmigte Angebote/Bestellungen an den Ersteller dieser Dokumente senden** |12057077 |Ex Email NAS <br/> Dieser Job Queue sendet Erinnerungen für genehmigte Angebote/Bestellungen an den Ersteller der Angebote/Bestellungen. <br/><br/> Verwenden Sie diesen Parameterstring in der Job Queue Entry Card: APPROVED ORDER/QUOTE <br/> Die Einstellung ''Send Email For Approved Order/Quote'' muss in ExFlow Setup --> Order and Quote Approval --> Send Email For Approved Order/Quote aktiviert sein. |Ja
|**Dokumente automatisch in das Import Journal importieren** |12013663 |Ex Create Import NAS <br/> Dieser Job importiert Dokumente in die Import Journals. Diese Codeunit 12013663 erstellt Codeunit 12057075 (Ex Import Docs. NAS). |Nein
|**EDC-Stammdatensynchronisierung** |12013659 |ExKFMasterDataSyncJob <br/> Dieser Job übernimmt die automatisierte Stammdatensynchronisierung, wenn ExFlow Data Capture Setup verwendet wird. |Nein
|**OCR-Stammdatensynchronisierung** |12013611 |Ex OCR - Sync Master NAS. <br/> Dieser Job übernimmt die automatisierte Stammdatensynchronisierung, wenn OCR Service Setup verwendet wird. Diese Codeunit (12013611) erstellt Codeunit 12057093 (Ex OCR - Sync Master NAS). <br/> Falls erforderlich, aktivieren Sie die Einstellung ''Disable Standard Sync Master Data Job'' unter ''ExFlow Setup --> OCR Import'', um zu verhindern, dass der BC-Standardjob 882 (OCR - Sync Master Data) automatisch erstellt wird. |Nein
|**Dokumente überprüfen und buchen** |12013671 |Ex Verify & Post Job Queue <br/> Wenn ''Verify with Job Queue'' in EXFlow Setup aktiviert ist, wird ein Job geplant, der genehmigte Dokumente im Hintergrund überprüft. Wenn die Einstellung ''Verify & Post with Job Queue'' ebenfalls aktiviert ist, werden die Dokumente nach der Überprüfung mit dem Status ''Ready for Posting'' gebucht. Diese Einstellungen finden Sie unter: ExFlow Setup --> Background Processing --> Verify with Job Queue/Verify & Post with Job Queue. |Nein
|**Selbstabrechnungsdokumente über ExFlow-Verträge erstellen** |12026814 |Ex Self-billings Docs NAS <br/> Erstellt Selbstabrechnungsrechnungen, wenn die Einstellung ''Self-Billing Recurring Job Queue Entry Active'' in ExFlow Contract Setup aktiviert ist und die ''Self-Billing Invoice'' auf dem ExFlow-Vertrag aktiviert ist. |Nein
|**Verkaufsrechnungen aus Re-Invoicing-Dokumenten erstellen** |12068782 |Ex ReInv Create Sales Invoice <br/> Erstellt automatisch Verkaufsdokumente aus Re-Invoicing-Dokumenten. Die Hintergrundverarbeitung muss in ExFlow Re-invoicing Setup aktiviert sein. |Nein
|**ExFlow G/L Budget Totals aus Hauptbuchposten aktualisieren** |12026818 |ExFlow Budget Control Recurring Job <br/> Die Aktualisierung der ExFlow G/L Budget Totals aus Hauptbuchposten kann beim Buchen aus dem Genehmigungsstatus oder durch Einrichten dieses Job Queues erfolgen. Die Summen werden verwendet, um alle Hauptbuchposten pro Jahr, Monat und globale Dimensionskombination zusammenzufassen. |Nein
|**Dokumente aus dem Dateispeicher importieren** |12057156 |Ex File Import Mgt <br/> Dieser Job importiert Dokumente aus Quellen wie einem lokalen Dateisystem und Azure Storage. (Bitte beachten Sie: Der Import über Webdienste wird extern und nicht durch ExFlow oder Job Queue Entries initiiert.) Eine Konfiguration ist im ExFlow File Import Setup erforderlich, und ein dediziertes Import Journal muss mit dem richtigen Quelltyp und Import File Code in der ExFlow Import Journals-Liste eingerichtet werden. |Ja
|**Speicherverwaltung für eingehende Dokumente** |12026820 |Ex Storage Mgmt. NAS <br/> Externe Blob-Speicherung eingehender Dokumente (Azure Container oder SharePoint in ExFlow Storage Setup). <br/> Dies kann unter ExFlow Setup --> Aktionen --> Funktionen --> Blob Storage Mgmt. eingerichtet werden. |Ja
|**ExFlow-Verkaufsauftrag importieren** |12013681 |ExSOImportManagement <br/> Dieser Job übernimmt den Import von Verkaufsdokumenten aus ExFlow Data Capture. |Nein

