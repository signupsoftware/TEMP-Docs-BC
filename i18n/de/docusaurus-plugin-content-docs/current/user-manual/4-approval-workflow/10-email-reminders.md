---
title: E-Mail-Erinnerungen
sidebar_position: 10
hide_title: true
custom_edit_url: null
---
## E-Mail-Erinnerungen
Bitte beachten Sie, dass ein Standard-E-Mail-Konto von Business Central eingerichtet sein muss, um ExFlow-E-Mails empfangen zu können. Weitere Informationen finden Sie in der [***Microsoft-Dokumentation***](https://learn.microsoft.com/en-us/dynamics365/business-central/admin-how-setup-email). Für Unterstützung wenden Sie sich bitte an Ihren vertrauenswürdigen Dynamics 365 Business Central Implementierungspartner.

Um E-Mails an ExFlow-Benutzer senden zu können, sind einige Einstellungen erforderlich.<br/>

Die Einrichtung des Jobwarteschlangeneintrags sollte nur im **Standardunternehmen** erfolgen.

### Posteingangserinnerung
Senden Sie Erinnerungen, wenn ExFlow-Benutzer Dokumente genehmigen müssen.

| Posteingangserinnerung |  | 
|:-|:-|
| E-Mail-Konto         | E-Mail-Konto-Einrichtung in allen Unternehmen hinzufügen              
| ExFlow-E-Mail-Einrichtung    | E-Mail-Typ **Posteingangserinnerung** in allen Unternehmen<br/>Lesen Sie mehr im Abschnitt [***ExFlow-E-Mail-Einrichtung - Posteingangserinnerung***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#inbox-reminder)
| ExFlow-Benutzer          | Aktivieren für **E-Mail-Erinnerung --> Nicht genehmigte Dokumente**. <br/>Lesen Sie mehr im Abschnitt [***ExFlow-Benutzer***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-user#email-reminders) für die Einrichtung.
| Jobwarteschlangeneintrag       | Codeunit 12057077 und Parameterzeichenfolge **INBOX REMINDER** im Standardunternehmen
| Ausgewählte Dokumente    | Genehmigungsstatus, wählen Sie ein oder mehrere Dokumente aus und verwenden Sie die Funktion ***Erinnerung senden***
| Ausgewählte Genehmiger    | ExFlow-Benutzer, wählen Sie einen oder mehrere Benutzer aus und verwenden Sie die Funktion ***Erinnerung senden***
<br/><br/>

### Kommentarbenachrichtigung / Diskussionspanel / Chat
Um eine E-Mail zu senden, wenn ein ExFlow-Benutzer durch Verwendung von @ und "ExFlow-Benutzercode" erwähnt wird, ist es möglich, eine E-Mail an den markierten Genehmiger zu senden, aber dann sind folgende Einstellungen im **Standardunternehmen** erforderlich.

| Kommentarbenachrichtigung |  |
|:-|:-|
| E-Mail-Konto         | E-Mail-Konto-Einrichtung im Standardunternehmen hinzufügen
| ExFlow-E-Mail-Einrichtung    | E-Mail-Typ **Kommentarbenachrichtigung** im Standardunternehmen.<br/>Lesen Sie mehr im Abschnitt [***ExFlow-E-Mail-Einrichtung --> Kommentarbenachrichtigung - Chat***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#comment-notification---chat)
| ExFlow-Benutzer          | Aktivieren für **E-Mail-Erinnerung --> Diskussionspanel**<br/>Lesen Sie mehr im Abschnitt [***ExFlow-Benutzer***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-user#email-reminders) für die Einrichtung
| Jobwarteschlangeneintrag       | Codeunit 12057077 und Parameterzeichenfolge **COMMENT NOTIFICATION** im Standardunternehmen
<br/><br/>

### Nicht erhaltene Bestellung
Um eine Erinnerung zu senden, wenn der Eingang auf der auftragsbezogenen Rechnung fehlt.

| Nicht erhaltene Bestellung |  |
|:-|:-|
| E-Mail-Konto             | E-Mail-Konto-Einrichtung in allen Unternehmen hinzufügen
| ExFlow-E-Mail-Einrichtung        | E-Mail-Typ **NICHT ERHALTENE BESTELLUNG** in allen Unternehmen <br/> Lesen Sie mehr im Abschnitt [***ExFlow-E-Mail-Einrichtung --> Nicht erhaltene Bestellung***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#unreceived-order)
| ExFlow-Benutzer              | ExFlow-Benutzer mit einem Einkäufercode verbinden <br/>Dies erfolgt unter ***ExFlow-Benutzer --> Berechtigungen*** und pro Unternehmen.<br/>Lesen Sie mehr im Abschnitt [***ExFlow-Benutzer***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-user#add-a-new-user-manually) für die Einrichtung
| Importjournal            | Die Einstellung muss ''Dokumente abgleichen mit = Empfang'' sein. <br/> Die Rechnung muss im ***Importjournal*** das Kontrollkästchen ***Mit Bestellung abgeglichen*** aktiviert haben<br/>Bestellnummer im Kopf oder in den Zeilen hinzufügen, wenn Zeileninterpretation verwendet wird
| Jobwarteschlangeneintrag           | Codeunit 12057077 und Parameterzeichenfolge **UNRECEIVED ORDER** im Standardunternehmen
| Erinnerungen manuell senden   | Funktion unter ***Importjournal --> Aktionen --> E-Mail*** verwenden
| Ausgewählte Dokumente        |  Dokumente im Importjournal auswählen und zu ***Importjournal --> Aktionen --> E-Mail*** gehen <br/>Lesen Sie mehr im Abschnitt [***Importjournal***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/exflow-import-journals#batch-send-receipt-reminders)
<br/><br/>

### Vertragserinnerung
Um eine Erinnerung zu senden, dass ein Vertrag abläuft, sind folgende Einstellungen nur im Standardunternehmen erforderlich.

| Vertragserinnerung |  |
|:-|:-|
| E-Mail-Konto         | E-Mail-Konto-Einrichtung in allen Unternehmen hinzufügen
| ExFlow-E-Mail-Einrichtung    | E-Mail-Typ **Vertragserinnerung** in allen Unternehmen <br/>Lesen Sie mehr im Abschnitt [***ExFlow-E-Mail-Einrichtung --> Vertragserinnerung***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#contract-reminder)
| ExFlow-Vertrag       | Genehmigungsgruppe unter ***Vertrag --> Vertragserinnerung --> Benutzer zur Erinnerung*** hinzufügen <br/>Vertragserinnerungszeitraum hinzufügen, wann die Erinnerung gesendet werden soll (-1M Erinnerung wird 1 Monat vor dem Gültigkeitsdatum unter Allgemeine Bedingungen gesendet) <br/>Lesen Sie mehr im Abschnitt [***Verträge***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/contract) für die Einrichtung.
| Jobwarteschlangeneintrag        | Codeunit 12057077 und Parameterzeichenfolge **CONTRACT REMINDER** im Standardunternehmen<br/>Dieser Job sendet nur eine Erinnerung pro Vertrag
<br/><br/>

### OMNI-Erinnerung
OMNI-Genehmigung ist eine Funktion zur Genehmigung von Genehmigungsregeln und Verträgen.
Wenn eine neue Regel oder ein neuer Vertrag erstellt oder geändert wird, muss dieser möglicherweise genehmigt werden. Lesen Sie mehr im Abschnitt [***OMNI-Genehmigung***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/omni-approval)

| OMNI-Erinnerung |  |
|:-|:-|
| E-Mail-Konto         |  E-Mail-Konto-Einrichtung in allen Unternehmen hinzufügen
| ExFlow-E-Mail-Einrichtung    | E-Mail-Typ **OMNI-Genehmigung** in allen Unternehmen <br/>Lesen Sie mehr im Abschnitt [***E-Mail-Einrichtung - OMNI-Genehmigung***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#omni-reminder)
| Jobwarteschlangeneintrag       | Codeunit 12057077 und Parameterzeichenfolge **OMNI REMINDER** im Standardunternehmen
<br/><br/>

### Abgelehnte Bestellung, abgelehntes Angebot, abgelehnte Rechnung/Gutschrift
Um eine E-Mail zu senden, wenn ein Dokument abgelehnt wird, sind folgende Einstellungen erforderlich:

| Abgelehnte Dokumente |  |
|:-|:-|
| E-Mail-Konto         | E-Mail-Konto-Einrichtung in allen Unternehmen hinzufügen
| ExFlow-E-Mail-Einrichtung    | E-Mail-Typ **Abgelehnte Bestellung, abgelehntes Angebot** oder/und ***Abgelehnte Rechnung/Gutschrift*** in allen Unternehmen <br/>Lesen Sie mehr im Abschnitt [***E-Mail-Einrichtung - Abgelehnte Bestellung***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#rejected-order), [***Abgelehnte Angebote***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#rejected-quote) oder/und [***Abgelehnte Rechnung/Gutschrift***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#rejected-invoicecredit)
| Genehmigungsstatus       | Dokumente müssen den Status abgelehnt haben und alle Zeilen müssen bearbeitet werden, bevor der Dokumentstatus aktualisiert wird
| Jobwarteschlangeneintrag       | Codeunit 12057077 und Parameterzeichenfolge **REJECTED ORDER** <br/>Codeunit 12057077 und Parameterzeichenfolge **REJECTED QUOTE** <br/>Codeunit 12057077 und Parameterzeichenfolge **REJECTED INVOICE** <br/>Jobwarteschlangeneintrag nur im Standardunternehmen hinzufügen <br/>Der Job sendet eine E-Mail pro Dokument.
<br/><br/>

### Vertrag-Rechnungserinnerung
Um Erinnerungen zu senden, wenn bei einem Vertrag erwartete Rechnungen fehlen, sind folgende Einstellungen erforderlich:

| Vertrag-Rechnungserinnerung |  |
|:-|:-|
| E-Mail-Konto                 | E-Mail-Konto-Einrichtung in allen Unternehmen hinzufügen
| ExFlow-E-Mail-Einrichtung            | E-Mail-Typ **Vertrag-Rechnungserinnerung** in allen Unternehmen<br/>Lesen Sie mehr im Abschnitt [***E-Mail-Einrichtung --> Vertrag-Rechnungserinnerung***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#contract-invoice-reminder)
| ExFlow-Vertrag               | Rechnungszeiträume hinzufügen und für Rechnungserinnerungen aktivieren
| Jobwarteschlangeneintrag               | Codeunit 12057077 und Parameterzeichenfolge **CONTRACT INVOICE REMINDER** im Standardunternehmen <br/>Der Job sendet eine Erinnerung pro Vertragsrechnungszeitraum
| Manuell pro Vertrag         | Gehen Sie zur ausgewählten ***Vertragskarte --> Verwandt --> Fehlende Vertragsrechnungen anzeigen*** <br/>Auf der neuen Seite ***Aktionen --> Vertragserinnerung senden***
| Manuell für alle Verträge    | Gehen Sie zur ***Vertragsliste --> Verwandt --> Fehlende Vertragsrechnungen anzeigen*** <br/>Auf der neuen Seite ***Aktionen --> Vertragserinnerung senden*** <br/>Die Liste zeigt alle erwarteten Erinnerungen an, sendet jedoch nur Erinnerungen, wenn die Rechnungserinnerung aktiv ist
<br/><br/>

### Nicht erhaltene Bestellung - Genehmigt
Wenn Rechnungen mit der Bestellung abgeglichen werden, kann die Rechnung zur Bestellung abgeglichen, zur Genehmigung gesendet und genehmigt werden, ohne dass der Wareneingang erfolgt ist. Die Rechnung kann jedoch nicht gebucht werden.
In diesem Fall kann eine E-Mail-Erinnerung für fehlende Wareneingänge gesendet werden.

Um diese Erinnerung zu senden, sind folgende Einstellungen erforderlich:

| Nicht erhaltene Bestellung - Genehmigt |  |
|:-|:-|
| E-Mail-Konto                 | E-Mail-Konto-Einrichtung in allen Unternehmen hinzufügen
| ExFlow-E-Mail-Einrichtung            | E-Mail-Typ **Nicht erhaltene Bestellung - Genehmigt** in allen Unternehmen <br/>Lesen Sie mehr im Abschnitt [***E-Mail-Einrichtung --> Nicht erhaltene Bestellung - Genehmigt***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#unreceived-order---approved)
| Genehmigungsstatus               | Rechnungen müssen den Status genehmigt haben und mit der Bestellung abgeglichen sein, ohne dass der Wareneingang gebucht wurde
| Jobwarteschlangeneintrag               | Codeunit 12057077 und Parameterzeichenfolge **UNRECEIVEDORDERAPPROVED** <br/>Im Standardunternehmen
| Manuell aus Genehmigungsstatus | Rechnungen auswählen und ***Verwandt --> Genehmigungsstatus --> Nicht erhaltene Bestellbenachrichtigung senden***
|ExFlow-Einrichtung| Die Einstellung ''Erinnerung an nicht erhaltene Bestellung für genehmigte Bestellung senden'' muss auch in **ExFlow Setup --> PO Matching --> Send Unreceived Order Reminder For Approved Order Send Not Received Order Ordered aktiviert sein** 
<br/><br/>

### Auf Halten-Erinnerung
Um eine E-Mail zu senden, wenn ein Dokument auf Halten gesetzt wird, sind folgende Einstellungen erforderlich:

| Auf Halten |  |
|:-|:-|
| E-Mail-Konto                 | E-Mail-Konto-Einrichtung in allen Unternehmen hinzufügen
| ExFlow-E-Mail-Einrichtung            | E-Mail-Typ **Auf Halten-Erinnerung** in allen Unternehmen <br/>Lesen Sie mehr im Abschnitt [***E-Mail-Einrichtung --> Auf Halten***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#on-hold-reminder)
| Genehmigungsstatus               | Dokument muss den Status auf Halten haben
| Jobwarteschlangeneintrag               | Codeunit 12057077 und Parameterzeichenfolge **ON HOLD REMINDER** <br/>Im Standardunternehmen
<br/><br/>

### Genehmigte Bestellung/Angebot
Um eine E-Mail an den Ersteller der Bestellung/des Angebots zu senden, wenn seine Bestellung/seine Angebot genehmigt wird, sind folgende Einstellungen erforderlich:

| Genehmigte Bestellung/Angebot|  |
|:-|:-|
| E-Mail-Konto                 | E-Mail-Konto-Einrichtung in allen Unternehmen hinzufügen
| ExFlow-E-Mail-Einrichtung            | E-Mail-Typ **Genehmigte Bestellung/Angebot** in allen Unternehmen <br/>Lesen Sie mehr im Abschnitt [***E-Mail-Einrichtung --> Genehmigte Bestellung/Angebot***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#approved-orderquote)
| Status der Genehmigung | Die Erinnerung wird gesendet, wenn das Dokument den Status Genehmigt erhält
| Eintrag in der Job-Warteschlange | Keine Job-Warteschlange
|ExFlow-Einrichtung| Die Einstellung ''E-Mail für genehmigte Bestellung/Angebot senden'' muss auch in **ExFlow Setup --> Auftrags- und Angebotsgenehmigung --> E-Mail für genehmigte Bestellung/Angebot senden** aktiviert sein. 
<br/><br/>

