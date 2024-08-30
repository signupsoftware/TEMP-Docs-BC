---
title: ExFlow E-Mail-Einrichtung
sidebar_position: 9
hide_title: true
---
## ExFlow E-Mail-Einrichtung
Um E-Mail-Erinnerungen zu senden, ist für jeden E-Mail-Typ eine ExFlow E-Mail-Einrichtung erforderlich.

E-Mail-Erinnerungen können manuell gesendet oder durch Hinzufügen einer Job-Warteschlange gesendet werden. 
Für die Einrichtung lesen Sie mehr im Abschnitt [***Genehmigungsworkflow --> E-Mail-Erinnerungen***](https://docs.exflow.cloud/business-central/docs/user-manual/approval-workflow/email-reminders#email-reminders)

### Nicht erhaltene Bestellung
Senden Sie Erinnerungen, wenn eine Eingangsrechnung im Importjournal einer nicht erhaltenen Bestellung zugeordnet ist. <br/> 
Empfänger können in einem oder mehreren Feldern hinzugefügt werden, um Erinnerungen zu senden.<br/><br/> 

|Allgemein |  |
|:-|:-|
| **E-Mail-Typ:**           | Nicht erhaltene Bestellung
| **Prozesstyp:**         | Geplant
| **Beschreibung:**          | Fügen Sie eine Beschreibung hinzu. Diese wird keiner E-Mail hinzugefügt
| **CC-E-Mail:**             | Nicht zutreffend für nicht erhaltene Bestellung
| **Test-E-Mail-Adresse:**   | Fügen Sie eine E-Mail-Adresse für den Testmodus hinzu. ExFlow sendet E-Mails nur an diesen Benutzer
| **Anhang senden:**      | Senden Sie Anhänge, um die PDF der Eingangsrechnung als Anhang beizufügen. Benutzer erhalten eine E-Mail pro Dokument
| **ExFlow Web-URL:**       | Nicht zutreffend
| **Verzögerung des Sendens (Tage):** | Fügen Sie die Anzahl der Tage hinzu, um per Job-Warteschlangeneinträge gesendete E-Mail-Erinnerungen zu verzögern
| **E-Mail-Szenario:**       | Verwenden Sie ExFlow Standard, wenn Sie sich mit einem separaten E-Mail-Konto mit demselben Szenario verbinden

|Empfänger|  |
|:-|:-|
| **Genehmigungsgruppen**:            | Wählen Sie eine Genehmigungsgruppe aus und fügen Sie sie hinzu
| **Feste E-Mail-Adressen**:      | Wählen Sie eine oder mehrere feste E-Mail-Adressen aus oder fügen Sie sie hinzu
| **Einkäufer**:                  | Aktivieren Sie dies, um Erinnerungen an den aktuellen Einkäufer der Bestellung zu senden. Wenn der Einkäufer kein ExFlow-Benutzer ist, wird die Erinnerung an die E-Mail-Adresse gesendet, die auf der Verkäufer/Käufer-Karte hinzugefügt wurde
| **E-Mail-Kaufkoordinator**: | Fügen Sie eine E-Mail-Adresse hinzu, um Erinnerungen an einen bestimmten Kaufkoordinator zu senden

|Statistiken |  |
|:-|:-|
| **Zuletzt gesendet**:            | Zeigt Datum und Uhrzeit der zuletzt gesendeten Erinnerung an                                     
| **Anzahl der E-Mail-Protokolle**:    | Zeigt die Anzahl der E-Mail-Protokolle an
| **Anzahl der Fehlerprotokolle**:    | Zeigt die Anzahl der Fehlerprotokolle an
<br/><br/>


### Posteingangserinnerung
Senden Sie Erinnerungen, dass Genehmiger ein Dokument zur Genehmigung haben.<br/>
Diese Einstellung kann auch automatisch hinzugefügt werden, wenn Sie den [***Einstiegshelfer***](https://docs.exflow.cloud/business-central/docs/user-manual/welcome-to-exflow/get-started) ausführen<br/><br/>

| Allgemein |  |
|:-|:-|
| **E-Mail-Typ**:           | Posteingangserinnerung
| **Prozesstyp**:         | Geplant
| **Beschreibung**:          | Fügen Sie eine Beschreibung hinzu. Diese wird keiner E-Mail hinzugefügt
| **CC-E-Mail**:             | Fügen Sie eine E-Mail-Adresse hinzu, um in allen Erinnerungen eine CC einzuschließen
| **Test-E-Mail-Adresse**:   | Fügen Sie eine E-Mail-Adresse für den Testmodus hinzu. ExFlow sendet E-Mails nur an diesen Benutzer
| **Anhänge senden**:     | Senden Sie Anhänge, um das Dokument als Anhang beizufügen. Benutzer erhalten eine E-Mail pro Dokument
| **ExFlow Web-URL**:       | Fügen Sie die URL zu ExFlow Web hinzu. Diese wird als Link in der E-Mail hinzugefügt
| **Verzögerung des Sendens (Tage)**: | Fügen Sie die Anzahl der Tage hinzu, um per Job-Warteschlangeneinträge gesendete E-Mail-Erinnerungen zu verzögern
| **E-Mail-Szenario**:       | Verwenden Sie ExFlow Standard, wenn Sie sich mit einem separaten E-Mail-Konto mit demselben Szenario verbinden

| Statistiken |  |
|:-|:-|
| **Zuletzt gesendet**:            | Zeigt Datum und Uhrzeit der zuletzt gesendeten Erinnerung an
| **Anzahl der E-Mail-Protokolle**:    | Zeigt die Anzahl der E-Mail-Protokolle an
| **Anzahl der Fehlerprotokolle**:    | Zeigt die Anzahl der Fehlerprotokolle an
<br/><br/>



### Vertrags-Erinnerung
Senden Sie eine Erinnerung, wenn der Vertrag abläuft.

| Allgemein |  |
|:-|:-|
| **E-Mail-Typ**:               | Vertrags-Erinnerungen
| **Prozess-Typ**:             | Geplant
| **Beschreibung**:              | Fügen Sie eine Beschreibung hinzu. Diese wird keiner E-Mail hinzugefügt
| **CC-E-Mail**:                 | Um eine CC in allen Erinnerungen einzuschließen, fügen Sie die E-Mail-Adresse hinzu
| **Test-E-Mail-Adresse**:       | Fügen Sie eine E-Mail-Adresse für den Testmodus hinzu. ExFlow sendet E-Mails nur an diesen Benutzer
| **Anhänge senden**:         | N/A
| **ExFlow Web-URL**:           | N/A
| **Verzögerung des Versands (Tage)**:     | Fügen Sie die Anzahl der Tage hinzu, um E-Mail-Erinnerungen aus den Job-Warteschlangeneinträgen zu verzögern
| **E-Mail-Szenario**:           | Verwenden Sie ExFlow Default, wenn Sie sich mit einem separaten E-Mail-Konto mit demselben Szenario verbinden

| Statistiken |  | 
|:-|:-|
| **Zuletzt gesendet**:                | Zeigt Datum und Uhrzeit der zuletzt gesendeten Erinnerung an<br/>
| **Anzahl der E-Mail-Protokolle**:        | Zeigt die Anzahl der E-Mail-Protokolle an.<br/>
| **Anzahl der Fehler-Einträge**:        | Zeigt die Anzahl der Fehler-Einträge an<br/>
<br/><br/>



### Kommentarbenachrichtigung - Chat
Senden Sie eine E-Mail, wenn ein ExFlow-Benutzer im Chat/Diskussionsbereich markiert ist

| Allgemein |  | 
|:-|:-|
| **E-Mail-Typ**:               | Kommentarbenachrichtigung
| **Prozess-Typ**:             | Geplant
| **Beschreibung**:              | Fügen Sie eine Beschreibung hinzu. Diese wird keiner E-Mail hinzugefügt
| **CC-E-Mail**:                 | N/A
| **Test-E-Mail-Adresse**:       | Fügen Sie eine E-Mail-Adresse für den Testmodus hinzu. ExFlow sendet alle E-Mails nur an diesen Benutzer
| **Anhänge senden**:         | N/A
| **ExFlow Web-URL**:           | Fügen Sie die URL zu ExFlow Web hinzu. Diese wird als Link in der E-Mail hinzugefügt
| **Verzögerung des Versands (Tage)**:     | N/A
| **E-Mail-Szenario**:           | Verwenden Sie ExFlow Default, wenn Sie sich mit einem separaten E-Mail-Konto mit demselben Szenario verbinden

| Statistiken |  | 
|:-|:-|
| **Zuletzt gesendet**:            | Zeigt Datum und Uhrzeit der zuletzt gesendeten Erinnerung an
| **Anzahl der E-Mail-Protokolle**:    | Zeigt die Anzahl der E-Mail-Protokolle an
| **Anzahl der Fehler-Einträge**:    | Zeigt die Anzahl der Fehler-Einträge an
<br/><br/>



### OMNI-Erinnerung
Senden Sie eine E-Mail, wenn ExFlow-Benutzer etwas in der OMNI-Zustimmung genehmigen müssen.

| Allgemein |  | 
|:-|:-|
| **E-Mail-Typ**:           | OMNI-Erinnerung
| **Prozess-Typ**:         | Geplant 
| **Beschreibung**:          | Fügen Sie eine Beschreibung hinzu. Diese wird keiner E-Mail hinzugefügt
| **CC-E-Mail**:             | Um eine CC in allen Erinnerungen einzuschließen, fügen Sie die E-Mail-Adresse hinzu
| **Test-E-Mail-Adresse**:   | Fügen Sie eine E-Mail-Adresse für den Testmodus hinzu. ExFlow sendet alle E-Mails nur an diesen Benutzer
| **Anhänge senden**:     | N/A 
| **ExFlow Web-URL**:       | N/A  
| **Verzögerung des Versands (Tage)**: | Fügen Sie die Anzahl der Tage hinzu, um E-Mail-Erinnerungen aus den Job-Warteschlangeneinträgen zu verzögern
| **E-Mail-Szenario**:       | Verwenden Sie ExFlow Default, wenn Sie sich mit einem separaten E-Mail-Konto mit demselben Szenario verbinden

| Statistiken |  | 
|:-|:-|
| **Zuletzt gesendet**:            | Zeigt Datum und Uhrzeit der zuletzt gesendeten Erinnerung an
| **Anzahl der E-Mail-Protokolle**:    | Zeigt die Anzahl der E-Mail-Protokolle an
| **Anzahl der Fehler-Einträge**:    | Zeigt die Anzahl der Fehler-Einträge an
<br/><br/>



### Abgelehnte Bestellung
Sende eine E-Mail, wenn eine Bestellung abgelehnt wird.

| Allgemein |  | 
|:-|:-|
| **E-Mail-Typ**:               | Abgelehnte Bestellung  
| **Prozesstyp**:             | Geplant 
| **Beschreibung**:              | Fügen Sie eine Beschreibung hinzu. Diese wird keiner E-Mail hinzugefügt
| **CC-E-Mail**:                 | Um eine Kopie an alle Erinnerungen anzuhängen, fügen Sie eine E-Mail-Adresse hinzu
| **Test-E-Mail-Adresse**:       | Fügen Sie eine E-Mail-Adresse für den Testmodus hinzu. ExFlow sendet alle E-Mails nur an diesen Benutzer
| **Anhänge senden**:         | N/A
| **ExFlow Web-URL**:           | N/A
| **Verzögerung des Versands (Tage)**:     | Geben Sie die Anzahl der Tage ein, um E-Mail-Erinnerungen aus den Job-Warteschlangeneinträgen zu verzögern
| **E-Mail-Szenario**:           | Verwenden Sie die ExFlow-Voreinstellung, wenn Sie sich mit einem separaten E-Mail-Konto mit demselben Szenario verbinden

| Empfänger |  |
|:-|:-|
| **Genehmigungsgruppen**:              | Wählen Sie eine Genehmigungsgruppe aus und fügen Sie sie hinzu
| **Feste E-Mail-Adressen**:        | Wählen Sie eine oder mehrere feste E-Mail-Adressen aus oder fügen Sie sie hinzu
| **Käufer**:                    | Aktivieren Sie dies, um Erinnerungen an den aktuellen Bestellkäufer zu senden. Wenn der Käufer als ExFlow-Benutzer fehlt, wird die Erinnerung an die E-Mail-Adresse gesendet, die auf der Verkäufer-/Käuferkarte hinzugefügt wurde
| **E-Mail-Kaufkoordinator**:   | Fügen Sie eine E-Mail-Adresse hinzu, um Erinnerungen an einen bestimmten Kaufkoordinator zu senden

| Statistiken |  | 
|:-|:-|
| **Zuletzt gesendet**:            | Zeigt Datum und Uhrzeit der letzten gesendeten Erinnerung an
| **Anzahl der E-Mail-Protokolle**:    | Zeigt die Anzahl der E-Mail-Protokolle an
| **Anzahl der Fehlerprotokolle**:    | Zeigt die Anzahl der Fehlerprotokolle an
<br/><br/>



### Abgelehntes Angebot
Sende eine E-Mail, wenn ein Angebot abgelehnt wird.

| Allgemein |  | 
|:-|:-|
| **E-Mail-Typ**:               | Abgelehntes Angebot 
| **Prozesstyp**:             | Geplant 
| **Beschreibung**:              | Fügen Sie eine Beschreibung hinzu. Diese wird keiner E-Mail hinzugefügt
| **CC-E-Mail**:                 | Um eine Kopie an alle Erinnerungen anzuhängen, fügen Sie eine E-Mail-Adresse hinzu
| **Test-E-Mail-Adresse**:       | Fügen Sie eine E-Mail-Adresse für den Testmodus hinzu. ExFlow sendet alle E-Mails nur an diesen Benutzer
| **Anhänge senden**:         | N/A
| **ExFlow Web-URL**:           | N/A
| **Verzögerung des Versands (Tage)**:     | Geben Sie die Anzahl der Tage ein, um E-Mail-Erinnerungen aus den Job-Warteschlangeneinträgen zu verzögern
| **E-Mail-Szenario**:           | Verwenden Sie die ExFlow-Voreinstellung, wenn Sie sich mit einem separaten E-Mail-Konto mit demselben Szenario verbinden

| Empfänger |  |
|:-|:-|
| **Genehmigungsgruppen**:              | Wählen Sie eine Genehmigungsgruppe aus und fügen Sie sie hinzu
| **Feste E-Mail-Adressen**:        | Wählen Sie eine oder mehrere feste E-Mail-Adressen aus oder fügen Sie sie hinzu
| **Käufer**:                    | Aktivieren Sie dies, um Erinnerungen an den aktuellen Angebotskäufer zu senden. Wenn der Käufer als ExFlow-Benutzer fehlt, wird die Erinnerung an die E-Mail-Adresse gesendet, die auf der Verkäufer-/Käuferkarte hinzugefügt wurde
| **E-Mail-Kaufkoordinator**:   | Fügen Sie eine E-Mail-Adresse hinzu, um Erinnerungen an einen bestimmten Kaufkoordinator zu senden

| Statistiken |  | 
|:-|:-|
| **Zuletzt gesendet**:            | Zeigt Datum und Uhrzeit der letzten gesendeten Erinnerung an
| **Anzahl der E-Mail-Protokolle**:    | Zeigt die Anzahl der E-Mail-Protokolle an
| **Anzahl der Fehlerprotokolle**:    | Zeigt die Anzahl der Fehlerprotokolle an
<br/><br/>



### Abgelehnte Rechnung/Gutschrift
Senden Sie eine E-Mail, wenn eine Rechnung oder Gutschrift abgelehnt wird.

| Allgemein |  | 
|:-|:-|
| **E-Mail-Typ**:               | Abgelehnte Rechnung/Gutschrift 
| **Prozesstyp**:             | Geplant 
| **Beschreibung**:              | Fügen Sie eine Beschreibung hinzu. Diese wird keiner E-Mail hinzugefügt
| **CC-E-Mail**:                 | Um eine Kopie (CC) in allen Erinnerungen einzuschließen, fügen Sie eine E-Mail-Adresse hinzu
| **Test-E-Mail-Adresse**:       | Fügen Sie eine E-Mail-Adresse für den Testmodus hinzu. ExFlow sendet alle E-Mails nur an diesen Benutzer
| **Anhänge senden**:         | N/A
| **ExFlow Web-URL**:           | N/A
| **Verzögerung des Versands (Tage)**:     | Fügen Sie die Anzahl der Tage hinzu, um E-Mail-Erinnerungen aus den Job Queue-Einträgen zu verzögern
| **E-Mail-Szenario**:           | Verwenden Sie die ExFlow-Voreinstellung, wenn Sie sich mit einem separaten E-Mail-Konto mit demselben Szenario verbinden

| Empfänger |  |
|:-|:-|
| **Genehmigungsgruppen**:              | Wählen Sie eine Genehmigungsgruppe aus und fügen Sie sie hinzu
| **Feste E-Mail-Adressen**:        | Wählen Sie eine oder mehrere feste E-Mail-Adressen aus oder fügen Sie sie hinzu
| **Käufer**:                    | Aktivieren Sie dies, um Erinnerungen an den aktuellen Bestellkäufer zu senden. Wenn der Käufer als ExFlow-Benutzer fehlt, wird die Erinnerung an die E-Mail-Adresse gesendet, die auf der Verkäufer/Käufer-Karte hinzugefügt wurde
| **E-Mail-Kaufkoordinator**:   | Fügen Sie eine E-Mail-Adresse hinzu, um Erinnerungen an einen bestimmten Kaufkoordinator zu senden

| Statistiken |  | 
|:-|:-|
| **Zuletzt gesendet**:            | Zeigt Datum und Uhrzeit der zuletzt gesendeten Erinnerung an
| **Anzahl der E-Mail-Protokolle**:    | Zeigt die Anzahl der E-Mail-Protokolle an
| **Anzahl der Fehler-Einträge**:    | Zeigt die Anzahl der Fehler-Einträge an
<br/><br/>


### Vertragsrechnungserinnerung
Senden Sie eine E-Mail, wenn eine Vertragsrechnung fehlt.

| Allgemein |  | 
|:-|:-|
| **E-Mail-Typ**:               | Vertragsrechnungserinnerung 
| **Prozesstyp**:             | Geplant 
| **Beschreibung**:              | Fügen Sie eine Beschreibung hinzu. Diese wird keiner E-Mail hinzugefügt
| **CC-E-Mail**:                 | Um eine Kopie (CC) in allen Erinnerungen einzuschließen, fügen Sie eine E-Mail-Adresse hinzu
| **Test-E-Mail-Adresse**:       | Fügen Sie eine E-Mail-Adresse für den Testmodus hinzu. ExFlow sendet alle E-Mails nur an diesen Benutzer
| **Anhänge senden**:         | N/A
| **ExFlow Web-URL**:           | N/A
| **Verzögerung des Versands (Tage)**:     | Fügen Sie die Anzahl der Tage hinzu, um E-Mail-Erinnerungen aus den Job Queue-Einträgen zu verzögern
| **E-Mail-Szenario**:           | Verwenden Sie die ExFlow-Voreinstellung, wenn Sie sich mit einem separaten E-Mail-Konto mit demselben Szenario verbinden

| Empfänger |  |
|:-|:-|
| **Genehmigungsgruppen**:              | Wählen Sie eine Genehmigungsgruppe aus und fügen Sie sie hinzu
| **Feste E-Mail-Adressen**:        | Wählen Sie eine oder mehrere feste E-Mail-Adressen aus oder fügen Sie sie hinzu

| Statistiken |  | 
|:-|:-|
| **Zuletzt gesendet**:            | Zeigt Datum und Uhrzeit der zuletzt gesendeten Erinnerung an
| **Anzahl der E-Mail-Protokolle**:    | Zeigt die Anzahl der E-Mail-Protokolle an
| **Anzahl der Fehler-Einträge**:    | Zeigt die Anzahl der Fehler-Einträge an
<br/><br/>


### Nicht erhaltene Bestellung - Genehmigt
Senden Sie Erinnerungen, wenn eine genehmigte Einkaufsrechnung einer nicht erhaltenen Bestellung im Genehmigungsstatus zugeordnet ist. 

| Allgemein |  | 
|:-|:-|
| **E-Mail-Typ:**           | Nicht erhaltene Bestellung - Genehmigt
| **Prozesstyp:**         | Geplant
| **Beschreibung:**          | Fügen Sie eine Beschreibung hinzu. Diese wird keiner E-Mail hinzugefügt
| **CC-E-Mail:**             | N/A
| **Test-E-Mail-Adresse:**   | Fügen Sie eine E-Mail-Adresse für den Testmodus hinzu. ExFlow sendet E-Mails nur an diesen Benutzer
| **Anhang senden:**      | Senden Sie Anhänge, um die Einkaufsrechnung als PDF-Anhang beizufügen. Benutzer erhalten eine E-Mail pro Dokument
| **ExFlow Web-URL:**       | N/A
| **Verzögerung des Versands (Tage):** | Fügen Sie die Anzahl der Tage hinzu, um E-Mail-Erinnerungen aus den Job Queue-Einträgen zu verzögern
| **E-Mail-Szenario:**       | Verwenden Sie die ExFlow-Voreinstellung, wenn Sie sich mit einem separaten E-Mail-Konto mit demselben Szenario verbinden

| Empfänger |  |
|:-|:-|
| **Genehmigungsgruppen**:              | Wählen Sie eine Genehmigungsgruppe aus und fügen Sie sie hinzu
| **Feste E-Mail-Adressen**:        | Wählen Sie eine oder mehrere feste E-Mail-Adressen aus oder fügen Sie sie hinzu
| **Käufer**:                    | Aktivieren Sie dies, um Erinnerungen an den aktuellen Bestellkäufer zu senden. Wenn der Käufer als ExFlow-Benutzer fehlt, wird die Erinnerung an die E-Mail-Adresse gesendet, die auf der Verkäufer/Käufer-Karte hinzugefügt wurde
| **E-Mail-Kaufkoordinator**:   | Fügen Sie eine E-Mail-Adresse hinzu, um Erinnerungen an einen bestimmten Kaufkoordinator zu senden

| Statistiken |  | 
|:-|:-|
| **Zuletzt gesendet**: | Zeigt Datum und Uhrzeit der zuletzt gesendeten Erinnerung an
| **Anzahl der E-Mail-Protokolle**: | Zeigt die Anzahl der E-Mail-Protokolle an
| **Anzahl der Fehler-Einträge**: | Zeigt die Anzahl der Fehler-Einträge an
<br/><br/>
