---
title: ExFlow E-Mail-Einrichtung
sidebar_position: 9
hide_title: true
custom_edit_url: null
---
## ExFlow E-Mail-Einrichtung

Gehe zu: **ExFlow E-Mail-Einrichtung**

Um E-Mail-Erinnerungen zu senden, ist die ExFlow E-Mail-Einrichtung für jeden E-Mail-Typ erforderlich. E-Mail-Erinnerungen können manuell oder durch Hinzufügen einer Job-Warteschlange gesendet werden. Für die Einrichtung lesen Sie mehr im Abschnitt [***E-Mail-Erinnerungen.***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/email-reminders#email-reminders)

Bitte beachten Sie, dass ein Standard-E-Mail-Konto von Business Central eingerichtet sein muss, um ExFlow-E-Mails empfangen zu können. Weitere Informationen hierzu finden Sie in der [***Microsoft-Dokumentation***](https://learn.microsoft.com/en-us/dynamics365/business-central/admin-how-setup-email). Für Unterstützung wenden Sie sich bitte an Ihren vertrauenswürdigen Dynamics 365 Business Central Implementierungspartner.

Die folgenden ***E-Mail-Typen*** können verwendet werden:

### Nicht empfangene Bestellung
Senden Sie Erinnerungen, wenn die Einkaufsrechnung im Importjournal einer nicht empfangenen Bestellung zugeordnet wird. <br/>
Empfänger können in allen, einem oder mehreren Feldern hinzugefügt werden, um Erinnerungen zu senden.<br/><br/>

|Allgemein |  |
|:-|:-|
| **E-Mail-Typ:**           | Nicht empfangene Bestellung
| **Prozesstyp:**           | Geplant
| **Beschreibung:**         | Fügen Sie eine Beschreibung hinzu. Diese wird keiner E-Mail hinzugefügt
| **CC-E-Mail:**            | N/A für nicht empfangene Bestellung
| **Test-E-Mail-Adresse:**  | Fügen Sie eine E-Mail-Adresse für den Testmodus hinzu. ExFlow sendet E-Mails nur an diesen Benutzer
| **Anhang senden:**        | Anhang senden wird die Einkaufsrechnung als PDF-Anhang beifügen und Benutzer erhalten eine E-Mail pro Dokument
| **ExFlow-Web-URL:**       | N/A
| **Versand verzögern (Tage):** | Fügen Sie die Anzahl der Tage hinzu, um E-Mail-Erinnerungen zu verzögern, die durch Job-Warteschlangen-Einträge gesendet werden
| **E-Mail-Szenario:**      | Verwenden Sie ExFlow-Standard, wenn Sie sich mit einem separaten E-Mail-Konto mit demselben Szenario verbinden

|Empfänger|  |
|:-|:-|
| **Genehmigungsgruppen:**            | Wählen und fügen Sie eine Genehmigungsgruppe hinzu
| **Feste E-Mail-Adressen:**          | Wählen oder fügen Sie eine oder mehrere feste E-Mail-Adressen hinzu
| **Einkäufer:**                      | Aktivieren Sie, um Erinnerungen an den aktuellen Einkäufer der Bestellung zu senden. Wenn der Einkäufer als ExFlow-Benutzer fehlt, wird die Erinnerung an die auf der Verkäufer-/Einkäuferkarte hinzugefügte E-Mail-Adresse gesendet
| **E-Mail-Einkaufskoordinator:**     | Fügen Sie eine E-Mail-Adresse hinzu, um Erinnerungen an einen bestimmten Einkaufskoordinator zu senden

|Statistiken |  |
|:-|:-|
| **Zuletzt gesendet:**            | Zeigt Datum und Uhrzeit der letzten gesendeten Erinnerung
| **Anzahl der E-Mail-Protokolle:** | Zeigt die Anzahl der E-Mail-Protokolle
| **Anzahl der Fehler-Einträge:**   | Zeigt die Anzahl der Fehler-Einträge
<br/><br/>

### Posteingangserinnerung
Senden Sie Erinnerungen, dass Genehmiger Dokumente zur Genehmigung haben.<br/>
Diese Einstellung kann auch automatisch beim Ausführen des [***Get Started Wizard***](https://docs.signupsoftware.com/business-central/docs/user-manual/welcome-to-exflow/get-started) hinzugefügt werden.<br/><br/>

| Allgemein |  |
|:-|:-|
| **E-Mail-Typ:**           | Posteingangserinnerung
| **Prozesstyp:**           | Geplant
| **Beschreibung:**         | Fügen Sie eine Beschreibung hinzu. Diese wird keiner E-Mail hinzugefügt
| **CC-E-Mail:**            | Um eine CC in alle Erinnerungen einzufügen, fügen Sie eine E-Mail-Adresse hinzu
| **Test-E-Mail-Adresse:**  | Fügen Sie eine E-Mail-Adresse für den Testmodus hinzu. ExFlow sendet E-Mails nur an diesen Benutzer
| **Anhänge senden:**       | Anhänge senden wird das Einkaufsdokument als Anhang beifügen und Benutzer erhalten eine E-Mail pro Dokument
| **ExFlow-Web-URL:**       | Fügen Sie die URL zu ExFlow Web hinzu. Diese wird als Link in der E-Mail hinzugefügt
| **Versand verzögern (Tage):** | Fügen Sie die Anzahl der Tage hinzu, um E-Mail-Erinnerungen zu verzögern, die durch Job-Warteschlangen-Einträge gesendet werden
| **E-Mail-Szenario:**      | Verwenden Sie ExFlow-Standard, wenn Sie sich mit einem separaten E-Mail-Konto mit demselben Szenario verbinden

| Statistiken |  |
|:-|:-|
| **Zuletzt gesendet:**            | Zeigt Datum und Uhrzeit der letzten gesendeten Erinnerung
| **Anzahl der E-Mail-Protokolle:** | Zeigt die Anzahl der E-Mail-Protokolle
| **Anzahl der Fehler-Einträge:**   | Zeigt die Anzahl der Fehler-Einträge
<br/><br/>

### Vertrags-Erinnerung
Senden Sie eine Erinnerung, wenn ein Vertrag abläuft.

| Allgemein |  |
|:-|:-|
| **E-Mail-Typ:**               | Vertrags-Erinnerungen
| **Prozesstyp:**               | Geplant
| **Beschreibung:**             | Fügen Sie eine Beschreibung hinzu. Diese wird keiner E-Mail hinzugefügt
| **CC-E-Mail:**                | Um eine CC in alle Erinnerungen einzufügen, fügen Sie eine E-Mail-Adresse hinzu
| **Test-E-Mail-Adresse:**      | Fügen Sie eine E-Mail-Adresse für den Testmodus hinzu. ExFlow sendet E-Mails nur an diesen Benutzer
| **Anhänge senden:**           | N/A
| **ExFlow-Web-URL:**           | N/A
| **Versand verzögern (Tage):** | Fügen Sie die Anzahl der Tage hinzu, um E-Mail-Erinnerungen durch Job-Warteschlangen-Einträge zu verzögern
| **E-Mail-Szenario:**          | Verwenden Sie ExFlow-Standard, wenn Sie sich mit einem separaten E-Mail-Konto mit demselben Szenario verbinden

| Statistiken |  |
|:-|:-|
| **Zuletzt gesendet:**            | Zeigt Datum und Uhrzeit der letzten gesendeten Erinnerung<br/>
| **Anzahl der E-Mail-Protokolle:** | Zeigt die Anzahl der E-Mail-Protokolle.<br/>
| **Anzahl der Fehler-Einträge:**   | Zeigt die Anzahl der Fehler-Einträge<br/>
<br/><br/>

### Kommentarbenachrichtigung - Chat
Senden Sie eine E-Mail, wenn ein ExFlow-Benutzer im Chat-/Diskussionspanel markiert wird.

| Allgemein |  |
|:-|:-|
| **E-Mail-Typ:**               | Kommentarbenachrichtigung
| **Prozesstyp:**               | Geplant
| **Beschreibung:**             | Fügen Sie eine Beschreibung hinzu. Diese wird keiner E-Mail hinzugefügt
| **CC-E-Mail:**                | N/A
| **Test-E-Mail-Adresse:**      | Fügen Sie eine E-Mail-Adresse für den Testmodus hinzu. ExFlow sendet alle E-Mails nur an diesen Benutzer
| **Anhänge senden:**           | N/A
| **ExFlow-Web-URL:**           | Fügen Sie die URL zu ExFlow Web hinzu. Diese wird als Link in der E-Mail hinzugefügt
| **Versand verzögern (Tage):** | N/A
| **E-Mail-Szenario:**          | Verwenden Sie ExFlow-Standard, wenn Sie sich mit einem separaten E-Mail-Konto mit demselben Szenario verbinden

| Statistiken |  |
|:-|:-|
| **Zuletzt gesendet:**            | Zeigt Datum und Uhrzeit der letzten gesendeten Erinnerung
| **Anzahl der E-Mail-Protokolle:** | Zeigt die Anzahl der E-Mail-Protokolle
| **Anzahl der Fehler-Einträge:**   | Zeigt die Anzahl der Fehler-Einträge
<br/><br/>

### OMNI-Erinnerung
Senden Sie eine E-Mail, wenn Systembenutzer etwas im OMNI-Genehmigungsstatus zu genehmigen haben.

| Allgemein |  |
|:-|:-|
| **E-Mail-Typ:**           | OMNI-Erinnerung
| **Prozesstyp:**           | Geplant
| **Beschreibung:**         | Fügen Sie eine Beschreibung hinzu. Diese wird keiner E-Mail hinzugefügt
| **CC-E-Mail:**            | Um eine CC in alle Erinnerungen einzufügen, fügen Sie eine E-Mail-Adresse hinzu
| **Test-E-Mail-Adresse:**  | Fügen Sie eine E-Mail-Adresse für den Testmodus hinzu. ExFlow sendet alle E-Mails nur an diesen Benutzer
| **Anhänge senden:**       | N/A
| **ExFlow-Web-URL:**       | N/A
| **Versand verzögern (Tage):** | Fügen Sie die Anzahl der Tage hinzu, um E-Mail-Erinnerungen durch Job-Warteschlangen-Einträge zu verzögern
| **E-Mail-Szenario:**      | Verwenden Sie ExFlow-Standard, wenn Sie sich mit einem separaten E-Mail-Konto mit demselben Szenario verbinden

| Statistiken |  |
|:-|:-|
| **Zuletzt gesendet:**            | Zeigt Datum und Uhrzeit der letzten gesendeten Erinnerung
| **Anzahl der E-Mail-Protokolle:** | Zeigt die Anzahl der E-Mail-Protokolle
| **Anzahl der Fehler-Einträge:**   | Zeigt die Anzahl der Fehler-Einträge
<br/><br/>

### Abgelehnte Bestellung
Senden Sie eine E-Mail, wenn eine Bestellung abgelehnt wird.

| Allgemein |  | 
|:-|:-|
| **E-Mail-Typ**:               | Abgelehnte Bestellung  
| **Prozesstyp**:               | Geplant 
| **Beschreibung**:             | Fügen Sie eine Beschreibung hinzu. Diese wird keiner E-Mail hinzugefügt
| **CC-E-Mail**:                | Um eine CC in alle Erinnerungen aufzunehmen, fügen Sie eine E-Mail-Adresse hinzu
| **Test-E-Mail-Adresse**:      | Fügen Sie eine E-Mail-Adresse für den Testmodus hinzu. ExFlow sendet alle E-Mails nur an diesen Benutzer
| **Anhänge senden**:           | N/A
| **ExFlow-Web-URL**:           | N/A
| **Versand verzögern (Tage)**: | Fügen Sie die Anzahl der Tage hinzu, um E-Mail-Erinnerungen von Job Queue Entries zu verzögern
| **E-Mail-Szenario**:          | Verwenden Sie ExFlow Default, wenn Sie sich mit einem separaten E-Mail-Konto mit demselben Szenario verbinden

| Empfänger |  |
|:-|:-|
| **Genehmigungsgruppen**:              | Wählen und fügen Sie eine Genehmigungsgruppe hinzu
| **Feste E-Mail-Adressen**:            | Wählen oder fügen Sie eine oder mehrere feste E-Mail-Adressen hinzu
| **Einkäufer**:                        | Aktivieren Sie, um Erinnerungen an den aktuellen Einkäufer der Bestellung zu senden. Wenn der Einkäufer als ExFlow-Benutzer fehlt, wird die Erinnerung an die auf der Verkäufer-/Einkäuferkarte hinzugefügte E-Mail-Adresse gesendet
| **E-Mail-Einkaufskoordinator**:       | Fügen Sie eine E-Mail-Adresse hinzu, um Erinnerungen an einen bestimmten Einkaufskoordinator zu senden

| Statistiken |  | 
|:-|:-|
| **Zuletzt gesendet**:        | Zeigt Datum und Uhrzeit der letzten gesendeten Erinnerung an
| **Anzahl der E-Mail-Protokolle**: | Zeigt die Anzahl der E-Mail-Protokolle an
| **Anzahl der Fehler-Einträge**:   | Zeigt die Anzahl der Fehler-Einträge an
<br/><br/>

### Abgelehntes Angebot
Senden Sie eine E-Mail, wenn ein Angebot abgelehnt wird.

| Allgemein |  | 
|:-|:-|
| **E-Mail-Typ**:               | Abgelehntes Angebot 
| **Prozesstyp**:               | Geplant 
| **Beschreibung**:             | Fügen Sie eine Beschreibung hinzu. Diese wird keiner E-Mail hinzugefügt
| **CC-E-Mail**:                | Um eine CC in alle Erinnerungen aufzunehmen, fügen Sie eine E-Mail-Adresse hinzu
| **Test-E-Mail-Adresse**:      | Fügen Sie eine E-Mail-Adresse für den Testmodus hinzu. ExFlow sendet alle E-Mails nur an diesen Benutzer
| **Anhänge senden**:           | N/A
| **ExFlow-Web-URL**:           | N/A
| **Versand verzögern (Tage)**: | Fügen Sie die Anzahl der Tage hinzu, um E-Mail-Erinnerungen von Job Queue Entries zu verzögern
| **E-Mail-Szenario**:          | Verwenden Sie ExFlow Default, wenn Sie sich mit einem separaten E-Mail-Konto mit demselben Szenario verbinden

| Empfänger |  |
|:-|:-|
| **Genehmigungsgruppen**:              | Wählen und fügen Sie eine Genehmigungsgruppe hinzu
| **Feste E-Mail-Adressen**:            | Wählen oder fügen Sie eine oder mehrere feste E-Mail-Adressen hinzu
| **Einkäufer**:                        | Aktivieren Sie, um Erinnerungen an den aktuellen Einkäufer des Angebots zu senden. Wenn der Einkäufer als ExFlow-Benutzer fehlt, wird die Erinnerung an die auf der Verkäufer-/Einkäuferkarte hinzugefügte E-Mail-Adresse gesendet
| **E-Mail-Einkaufskoordinator**:       | Fügen Sie eine E-Mail-Adresse hinzu, um Erinnerungen an einen bestimmten Einkaufskoordinator zu senden

| Statistiken |  | 
|:-|:-|
| **Zuletzt gesendet**:        | Zeigt Datum und Uhrzeit der letzten gesendeten Erinnerung an
| **Anzahl der E-Mail-Protokolle**: | Zeigt die Anzahl der E-Mail-Protokolle an
| **Anzahl der Fehler-Einträge**:   | Zeigt die Anzahl der Fehler-Einträge an
<br/><br/>

### Abgelehnte Rechnung/Gutschrift
Senden Sie eine E-Mail, wenn eine Rechnung oder Gutschrift abgelehnt wird.

| Allgemein |  | 
|:-|:-|
| **E-Mail-Typ**:               | Abgelehnte Rechnung/Gutschrift 
| **Prozesstyp**:               | Geplant 
| **Beschreibung**:             | Fügen Sie eine Beschreibung hinzu. Diese wird keiner E-Mail hinzugefügt
| **CC-E-Mail**:                | Um eine CC in alle Erinnerungen aufzunehmen, fügen Sie eine E-Mail-Adresse hinzu
| **Test-E-Mail-Adresse**:      | Fügen Sie eine E-Mail-Adresse für den Testmodus hinzu. ExFlow sendet alle E-Mails nur an diesen Benutzer
| **Anhänge senden**:           | N/A
| **ExFlow-Web-URL**:           | N/A
| **Versand verzögern (Tage)**: | Fügen Sie die Anzahl der Tage hinzu, um E-Mail-Erinnerungen von Job Queue Entries zu verzögern
| **E-Mail-Szenario**:          | Verwenden Sie ExFlow Default, wenn Sie sich mit einem separaten E-Mail-Konto mit demselben Szenario verbinden

| Empfänger |  |
|:-|:-|
| **Genehmigungsgruppen**:              | Wählen und fügen Sie eine Genehmigungsgruppe hinzu
| **Feste E-Mail-Adressen**:            | Wählen oder fügen Sie eine oder mehrere feste E-Mail-Adressen hinzu
| **Einkäufer**:                        | Aktivieren Sie, um Erinnerungen an den aktuellen Einkäufer der Bestellung zu senden. Wenn der Einkäufer als ExFlow-Benutzer fehlt, wird die Erinnerung an die auf der Verkäufer-/Einkäuferkarte hinzugefügte E-Mail-Adresse gesendet
| **E-Mail-Einkaufskoordinator**:       | Fügen Sie eine E-Mail-Adresse hinzu, um Erinnerungen an einen bestimmten Einkaufskoordinator zu senden

| Statistiken |  | 
|:-|:-|
| **Zuletzt gesendet**:        | Zeigt Datum und Uhrzeit der letzten gesendeten Erinnerung an
| **Anzahl der E-Mail-Protokolle**: | Zeigt die Anzahl der E-Mail-Protokolle an
| **Anzahl der Fehler-Einträge**:   | Zeigt die Anzahl der Fehler-Einträge an
<br/><br/>

### Vertragsrechnungs-Erinnerung
Senden Sie eine E-Mail, wenn eine Vertragsrechnung fehlt.

| Allgemein |  | 
|:-|:-|
| **E-Mail-Typ**:               | Vertragsrechnungs-Erinnerung 
| **Prozesstyp**:               | Geplant 
| **Beschreibung**:             | Fügen Sie eine Beschreibung hinzu. Diese wird keiner E-Mail hinzugefügt
| **CC-E-Mail**:                | Um eine CC in alle Erinnerungen aufzunehmen, fügen Sie eine E-Mail-Adresse hinzu
| **Test-E-Mail-Adresse**:      | Fügen Sie eine E-Mail-Adresse für den Testmodus hinzu. ExFlow sendet alle E-Mails nur an diesen Benutzer
| **Anhänge senden**:           | N/A
| **ExFlow-Web-URL**:           | N/A
| **Versand verzögern (Tage)**: | Fügen Sie die Anzahl der Tage hinzu, um E-Mail-Erinnerungen von Job Queue Entries zu verzögern
| **E-Mail-Szenario**:          | Verwenden Sie ExFlow Default, wenn Sie sich mit einem separaten E-Mail-Konto mit demselben Szenario verbinden

| Empfänger |  |
|:-|:-|
| **Genehmigungsgruppen**:              | Wählen und fügen Sie eine Genehmigungsgruppe hinzu
| **Feste E-Mail-Adressen**:            | Wählen oder fügen Sie eine oder mehrere feste E-Mail-Adressen hinzu

| Statistiken |  | 
|:-|:-|
| **Zuletzt gesendet**:        | Zeigt Datum und Uhrzeit der letzten gesendeten Erinnerung an
| **Anzahl der E-Mail-Protokolle**: | Zeigt die Anzahl der E-Mail-Protokolle an
| **Anzahl der Fehler-Einträge**:   | Zeigt die Anzahl der Fehler-Einträge an
<br/><br/>


### Nicht erhaltene Bestellung - Genehmigt
Senden Sie Erinnerungen, wenn eine genehmigte Einkaufsrechnung mit einer nicht erhaltenen Bestellung im Genehmigungsstatus übereinstimmt.

| Allgemein |  |
|:-|:-|
| **E-Mail-Typ:**           | Nicht erhaltene Bestellung - Genehmigt
| **Prozesstyp:**           | Geplant
| **Beschreibung:**         | Fügen Sie eine Beschreibung hinzu. Diese wird keiner E-Mail hinzugefügt
| **CC-E-Mail:**            | N/A
| **Test-E-Mail-Adresse:**  | Fügen Sie eine E-Mail-Adresse für den Testmodus hinzu. ExFlow sendet E-Mails nur an diesen Benutzer
| **Anhang senden:**        | Anhänge senden wird die Einkaufsrechnung als PDF-Anhang beifügen und Benutzer erhalten eine E-Mail pro Dokument
| **ExFlow-Web-URL:**       | N/A
| **Versand verzögern (Tage):** | Fügen Sie die Anzahl der Tage hinzu, um E-Mail-Erinnerungen zu verzögern, die von Job Queue Entries gesendet werden
| **E-Mail-Szenario:**      | Verwenden Sie ExFlow Standard, wenn Sie sich mit einem separaten E-Mail-Konto mit demselben Szenario verbinden

| Empfänger |  |
|:-|:-|
| **Genehmigungsgruppen:**              | Wählen und fügen Sie eine Genehmigungsgruppe hinzu
| **Feste E-Mail-Adressen:**            | Wählen oder fügen Sie eine oder mehrere feste E-Mail-Adressen hinzu
| **Einkäufer:**                        | Aktivieren Sie, um Erinnerungen an den aktuellen Bestelleinkäufer zu senden. Wenn der Einkäufer als ExFlow-Benutzer fehlt, wird die Erinnerung an die auf der Verkäufer-/Einkäuferkarte hinzugefügte E-Mail-Adresse gesendet
| **E-Mail-Einkaufskoordinator:**       | Fügen Sie eine E-Mail-Adresse hinzu, um Erinnerungen an einen bestimmten Einkaufskoordinator zu senden

| Statistiken |  |
|:-|:-|
| **Zuletzt gesendet:** | Zeigt Datum und Uhrzeit der letzten gesendeten Erinnerung
| **Anzahl der E-Mail-Protokolle:** | Zeigt die Anzahl der E-Mail-Protokolle
| **Anzahl der Fehler-Einträge:** | Zeigt die Anzahl der Fehler-Einträge
<br/><br/>

### Erinnerung an die Warteschleife
Senden Sie Erinnerungen, wenn ein Einkaufsdokument zurückgestellt wird.

| Allgemein |  |
|:-|:-|
| **E-Mail-Typ:**           | Erinnerung an die Warteschleife
| **Prozesstyp:**           | Geplant
| **Beschreibung:**         | Fügen Sie eine Beschreibung hinzu. Diese wird keiner E-Mail hinzugefügt
| **CC-E-Mail:**            | N/A
| **Test-E-Mail-Adresse:**  | Fügen Sie eine E-Mail-Adresse für den Testmodus hinzu. ExFlow sendet E-Mails nur an diesen Benutzer
| **Anhang senden:**        | Anhänge senden wird das Einkaufsdokument als PDF-Anhang beifügen und Benutzer erhalten eine E-Mail pro Dokument
| **ExFlow-Web-URL:**       | N/A
| **Versand verzögern (Tage):** | Fügen Sie die Anzahl der Tage hinzu, um E-Mail-Erinnerungen zu verzögern, die von Job Queue Entries gesendet werden
| **E-Mail-Szenario:**      | Verwenden Sie ExFlow Standard, wenn Sie sich mit einem separaten E-Mail-Konto mit demselben Szenario verbinden

| Statistiken |  |
|:-|:-|
| **Zuletzt gesendet:** | Zeigt Datum und Uhrzeit der letzten gesendeten Erinnerung
| **Anzahl der E-Mail-Protokolle:** | Zeigt die Anzahl der E-Mail-Protokolle
| **Anzahl der Fehler-Einträge:** | Zeigt die Anzahl der Fehler-Einträge
<br/><br/>

### Genehmigte Bestellung/Angebot
Senden Sie eine E-Mail an den Ersteller der Bestellung/des Angebots, wenn die Bestellung/das Angebot genehmigt wird.

| Allgemein |  |
|:-|:-|
| **E-Mail-Typ:**           | Genehmigte Bestellung/Angebot
| **Prozesstyp:**           | Geplant
| **Beschreibung:**         | Fügen Sie eine Beschreibung hinzu. Diese wird keiner E-Mail hinzugefügt
| **CC-E-Mail:**            | N/A
| **Test-E-Mail-Adresse:**  | Fügen Sie eine E-Mail-Adresse für den Testmodus hinzu. ExFlow sendet E-Mails nur an diesen Benutzer
| **Anhang senden:**        | Anhänge senden wird das Einkaufsdokument als PDF-Anhang beifügen und Benutzer erhalten eine E-Mail pro Dokument
| **ExFlow-Web-URL:**       | N/A
| **Versand verzögern (Tage):** | Fügen Sie die Anzahl der Tage hinzu, um E-Mail-Erinnerungen zu verzögern, die von Job Queue Entries gesendet werden
| **E-Mail-Szenario:**      | Verwenden Sie ExFlow Standard, wenn Sie sich mit einem separaten E-Mail-Konto mit demselben Szenario verbinden

| Statistiken |  |
|:-|:-|
| **Zuletzt gesendet:** | Zeigt Datum und Uhrzeit der letzten gesendeten Erinnerung
| **Anzahl der E-Mail-Protokolle:** | Zeigt die Anzahl der E-Mail-Protokolle
| **Anzahl der Fehler-Einträge:** | Zeigt die Anzahl der Fehler-Einträge
<br/><br/>
