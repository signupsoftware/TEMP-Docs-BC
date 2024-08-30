---
title: E-Mail-Erinnerungen
sidebar_position: 10
hide_title: true
---
## E-Mail-Erinnerungen
Um E-Mails an ExFlow-Benutzer senden zu können, sind einige Einstellungen erforderlich.<br/>
Die Einrichtung des Jobwarteschlangeneintrags sollte nur in der **Standardfirma** erfolgen.


### Posteingangserinnerung
Um Erinnerungen zu senden, dass ExFlow-Benutzer Dokumente zur Genehmigung haben, ist folgende Einrichtung in allen Unternehmen erforderlich.

| Posteingangserinnerung |  | 
|:-|:-|
| E-Mail-Konto         | Fügen Sie die Einrichtung des E-Mail-Kontos in allen Unternehmen hinzu              
| ExFlow-E-Mail-Einrichtung    | E-Mail-Typ **Posteingangserinnerung** in allen Unternehmen.<br/>Lesen Sie mehr im Abschnitt [***ExFlow-E-Mail-Einrichtung - Posteingangserinnerung***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#inbox-reminder)
| ExFlow-Benutzer          | Aktivieren Sie für **E-Mail-Erinnerung --> Nicht genehmigte Dokumente**. <br/>Lesen Sie mehr im Abschnitt [***ExFlow-Benutzer***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-user#email-reminders) für die Einrichtung.
| Jobwarteschlangeneintrag       | Codeeinheit 12057077 und Parameterzeichenfolge **INBOX REMINDER** in der Standardfirma
| Ausgewählte Dokumente    | Genehmigungsstatus auswählen, ein oder mehrere Dokumente auswählen und die Funktion ***Erinnerung senden*** verwenden
| Ausgewählte Genehmiger    | ExFlow-Benutzer auswählen, ein oder mehrere Benutzer auswählen und die Funktion ***Erinnerung senden*** verwenden
<br/><br/>

### Kommentarbenachrichtigung / Diskussionsbereich / Chat
Um eine E-Mail zu senden, wenn ein ExFlow-Benutzer mit @ und "ExFlow-Benutzercode" erwähnt wird, ist es möglich, eine E-Mail an den markierten Genehmiger zu senden. Dafür ist jedoch folgende Einrichtung in der **Standardfirma** erforderlich.

| Kommentarbenachrichtigung |  |
|:-|:-|
| E-Mail-Konto         | Fügen Sie die Einrichtung des E-Mail-Kontos in der Standardfirma hinzu
| ExFlow-E-Mail-Einrichtung    | E-Mail-Typ **Kommentarbenachrichtigung** in der Standardfirma.<br/>Lesen Sie mehr im Abschnitt [***ExFlow-E-Mail-Einrichtung --> Kommentarbenachrichtigung - Chat***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#comment-notification---chat)
| ExFlow-Benutzer          | Aktivieren Sie für **E-Mail-Erinnerung --> Diskussionsbereich**<br/>Lesen Sie mehr im Abschnitt [***ExFlow-Benutzer***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-user#email-reminders) für die Einrichtung
| Jobwarteschlangeneintrag       | Codeeinheit 12057077 und Parameterzeichenfolge **COMMENT NOTIFICATION** in der Standardfirma
<br/><br/>


### Nicht erhaltene Bestellung
Um eine Erinnerung zu senden, wenn der Beleg für eine bestellungsbezogene Rechnung fehlt, ist folgende Einrichtung in allen Unternehmen erforderlich.

| Nicht erhaltene Bestellung |  |
|:-|:-|
| E-Mail-Konto             | Fügen Sie die Einrichtung des E-Mail-Kontos in allen Unternehmen hinzu
| ExFlow-E-Mail-Einrichtung        | E-Mail-Typ **NICHT ERHALTENE BESTELLUNG** in allen Unternehmen <br/> Lesen Sie mehr im Abschnitt [***ExFlow-E-Mail-Einrichtung --> Nicht erhaltene Bestellung***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#unreceived-order)
| ExFlow-Benutzer              | Verbinden Sie den ExFlow-Benutzer mit einem Einkäufercode <br/> Dies erfolgt unter ***ExFlow-Benutzer --> Berechtigungen*** und pro Unternehmen.<br/>Lesen Sie mehr im Abschnitt [***ExFlow-Benutzer***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-user#add-a-new-user-manually) für die Einrichtung
| Importjournal            | Die Rechnung muss im Feld ***Mit Bestellung abgeglichen*** ein Häkchen haben<br/>Fügen Sie die Bestellnummer im Header oder in den Zeilen hinzu, wenn Sie die Zeileninterpretation verwenden| Jobwarteschlangeneintrag | Fügen Sie den Jobwarteschlangeneintrag in der Standardfirma hinzu <br/>Codeeinheit 12057077 und Parameterzeichenfolge **UNRECEIVED ORDER** <br/>Dieser Job sendet nur eine Erinnerung pro Rechnung
| Jobwarteschlangeneintrag           | Codeeinheit 12057077 und Parameterzeichenfolge **UNRECEIVED ORDER** in der Standardfirma
| Erinnerungen manuell senden   | Verwenden Sie die Funktion unter ***Importjournal --> Aktionen --> E-Mail***
| Ausgewählte Dokumente        | Wählen Sie Dokumente im Importjournal aus und gehen Sie zu ***Importjournal --> Aktionen --> E-Mail*** <br/>Lesen Sie mehr im Abschnitt [***Importjournal***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/exflow-import-journals#batch-send-receipt-reminders)
<br/><br/>


### Vertragsbenachrichtigung
Um eine Erinnerung zu senden, dass ein Vertrag abläuft, ist folgende Einrichtung nur in der Standardfirma erforderlich.

| Vertragsbenachrichtigung |  |
|:-|:-|
| E-Mail-Konto         | Fügen Sie die Einrichtung des E-Mail-Kontos in allen Unternehmen hinzu
| ExFlow-E-Mail-Einrichtung    | E-Mail-Typ **Vertragsbenachrichtigung** in allen Unternehmen <br/>Lesen Sie mehr im Abschnitt [***ExFlow-E-Mail-Einrichtung --> Vertragsbenachrichtigung***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#contract-reminder)
| ExFlow-Vertrag       | Fügen Sie der ***Vertrag --> Vertragsbenachrichtigung --> Benutzer zur Erinnerung*** eine Genehmigungsgruppe hinzu <br/>Fügen Sie den Vertragsbenachrichtigungszeitraum hinzu, wann die Erinnerung gesendet werden soll (-1M Erinnerung wird 1 Monat vor dem Gültigkeitsdatum unter Allgemeine Bedingungen gesendet) <br/>Lesen Sie mehr im Abschnitt [***Verträge***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/contract) für die Einrichtung.
|Jobwarteschlangeneintrag        | Codeeinheit 12057077 und Parameterzeichenfolge **CONTRACT REMINDER** in der Standardfirma<br/>Dieser Job sendet nur eine Erinnerung pro Vertrag
<br/><br/>

### OMNI-Erinnerung
OMNI-Approval ist eine Funktion zur Genehmigung von Genehmigungsregeln und Verträgen.
Wenn eine neue Regel oder ein neuer Vertrag erstellt oder geändert wird, muss er möglicherweise genehmigt werden. Lesen Sie mehr im Abschnitt [***OMNI-Approval***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/omni-approval)


| OMNI-Erinnerung |  |
|:-|:-|
| E-Mail-Konto         |  Fügen Sie die Einrichtung des E-Mail-Kontos in allen Unternehmen hinzu
| ExFlow-E-Mail-Einrichtung    | E-Mail-Typ **OMNI-Approval** in allen Unternehmen <br/>Lesen Sie mehr im Abschnitt [***E-Mail-Einrichtung - OMNI-Approval***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#omni-reminder)
| Jobwarteschlangeneintrag       | Codeeinheit 12057077 und Parameterzeichenfolge **OMNI REMINDER** in der Standardfirma
<br/><br/>


### Abgelehnte Bestellung, abgelehntes Angebot, abgelehnte Rechnung/Gutschrift
Um eine E-Mail zu senden, wenn ein Dokument abgelehnt wird, ist folgende Einrichtung erforderlich:

| Abgelehnte Dokumente |  |
|:-|:-|
| E-Mail-Konto         | Fügen Sie die Einrichtung des E-Mail-Kontos in allen Unternehmen hinzu
| ExFlow-E-Mail-Einrichtung    | E-Mail-Typ **Abgelehnte Bestellung, abgelehntes Angebot** oder/und ***Abgelehnte Rechnung/Gutschrift*** in allen Unternehmen <br/>Lesen Sie mehr im Abschnitt [***E-Mail-Einrichtung - Abgelehnte Bestellung***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#rejected-order), [***Abgelehnte Angebote***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#rejected-quote) oder/und [***Abgelehnte Rechnung/Gutschrift***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#rejected-invoicecredit)
| Genehmigungsstatus       | Dokumente müssen den Status "abgelehnt" haben und alle Zeilen müssen bearbeitet werden, bevor der Dokumentenstatus aktualisiert wird
| Jobwarteschlangeneintrag       | Codeeinheit 12057077 und Parameterzeichenfolge **REJECTED ORDER** <br/>Codeeinheit 12057077 und Parameterzeichenfolge **REJECTED QUOTE** <br/>Codeeinheit 12057077 und Parameterzeichenfolge **REJECTED INVOICE** <br/>Fügen Sie den Jobwarteschlangeneintrag nur in der Standardfirma hinzu <br/>Der Job sendet eine E-Mail pro Dokument.
<br/><br/>


### Vertragsrechnungserinnerung
Um Erinnerungen zu senden, wenn eine Vertragsrechnung fehlt, ist folgende Einrichtung erforderlich:

| Vertragsrechnungserinnerung |  |
|:-|:-|
| E-Mail-Konto                 | Fügen Sie die Einrichtung des E-Mail-Kontos in allen Unternehmen hinzu
| ExFlow-E-Mail-Einrichtung            | E-Mail-Typ **Vertragsrechnungserinnerung** in allen Unternehmen<br/>Lesen Sie mehr im Abschnitt [***E-Mail-Einrichtung --> Vertragsrechnungserinnerung***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#contract-invoice-reminder)
| ExFlow-Vertrag               | Fügen Sie Rechnungszeiträume hinzu und aktivieren Sie sie für Rechnungserinnerungen
| Jobwarteschlangeneintrag               | Codeeinheit 12057077 und Parameterzeichenfolge **CONTRACT INVOICE REMINDER** in der Standardfirma <br/>Der Job sendet eine Erinnerung pro Vertragsrechnungszeitraum
| Manuell pro Vertrag         | Gehen Sie zur ausgewählten ***Vertragskarte --> Verwandt --> Fehlende Vertragsrechnungen anzeigen*** <br/>In der neuen Seite ***Aktionen --> Vertragsrechnungserinnerung senden***
| Manuell für alle Verträge    | Gehen Sie zur ***Vertragsliste --> Verwandt --> Fehlende Vertragsrechnungen anzeigen*** <br/>In der neuen Seite ***Aktionen --> Vertragsrechnungserinnerung senden*** <br/>Die Liste zeigt alle erwarteten Erinnerungen an, sendet jedoch nur Erinnerungen, wenn die Rechnungserinnerung aktiv ist
<br/><br/>


### Nicht erhaltene Bestellung - Genehmigt
Wenn Rechnungen mit Bestellung und anschließendem Wareneingang abgeglichen werden, kann die Rechnung genehmigt und genehmigt werden, ohne dass ein Wareneingang vorliegt. Die Rechnung kann jedoch nicht gebucht werden.
In diesem Fall kann eine E-Mail-Erinnerung für fehlende Wareneingänge gesendet werden.

Um diese Erinnerung zu senden, ist folgende Einrichtung erforderlich:

| Nicht erhaltene Bestellung - Genehmigt |  |
|:-|:-|
| E-Mail-Konto                 | Fügen Sie die Einrichtung des E-Mail-Kontos in allen Unternehmen hinzu
| ExFlow-E-Mail-Einrichtung            | E-Mail-Typ **Nicht erhaltene Bestellung - Genehmigt** in allen Unternehmen <br/>Lesen Sie mehr im Abschnitt [***E-Mail-Einrichtung --> Nicht erhaltene Bestellung - Genehmigt***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/exflow-email-setup#unreceived-order---approved)
| Genehmigungsstatus               | Rechnungen müssen den Status "genehmigt" haben und mit einer Bestellung abgeglichen sein, ohne dass ein Wareneingang gebucht wurde
| Jobwarteschlangeneintrag               | Codeeinheit 12057077 und Parameterzeichenfolge **UNRECEIVEDORDERAPPROVED** <br/>In der Standardfirma
| Manuell aus dem Genehmigungsstatus | Wählen Sie Rechnungen aus und gehen Sie zu ***Verwandt --> Genehmigungsstatus --> Nicht erhaltene Bestellungsbenachrichtigung senden***

