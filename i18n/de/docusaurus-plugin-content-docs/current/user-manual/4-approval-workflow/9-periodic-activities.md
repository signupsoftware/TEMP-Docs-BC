---
title: Periodische Aktivitäten
sidebar_position: 9
hide_title: true
---
## Periodische Aktivitäten

### Eskalations-Job

Gehe zu: ***Periodische Aktivitäten \--\> ExFlow Eskalations-Job***

Um den Eskalations-Job auszuführen, muss er aktiviert sein.

Dieser Job genehmigt automatisch die überfälligen Dokumente des Benutzers und fügt einen neuen Genehmiger aus der Konfiguration hinzu. Die allgemeine Konfiguration erfolgt über "ExFlow Setup" und/oder pro ExFlow-Benutzer über "ExFlow Approval Group".

Der Job kann ausgeführt werden, wenn der Benutzer auf "Änderungen überprüfen" im Genehmigungsstatus klickt, den Bericht manuell ausführt oder eine Job-Warteschleife in Business Central einrichtet.

#### ExFlow Setup

Gehe zu: *Setup \--\> ExFlow Setup \--\> Eskalation-Registerkarte*

**Tage vor Eskalation:** Berechnet ab dem Zeitpunkt, an dem der Benutzer das Dokument zur Genehmigung erhalten hat.

("Statusänderungsdatum" in "Doc. Line Approvers" im "Genehmigungsstatus"). Das Serverdatum legt das "Statusänderungsdatum" fest.

**Senior Manager:** Benutzer, der alle überfälligen Rechnungen erhält.

Der übergeordnete Genehmiger muss die gleiche oder höhere Berechtigung haben, da die Berechtigung in ExFlow nicht vererbt wird.

**Basis-Kalendercode:** Wenn kein Basis-Kalender hinzugefügt wurde, sind Samstag und Sonntag nicht enthalten.

**Eskalationstext:** Interne Informationen, die in den Kommentaren ausgefüllt werden.

**Ausführen bei Überprüfung von Änderungen:** Führen Sie den Eskalations-Job aus, wenn Sie "Änderungen überprüfen" im Genehmigungsstatus verwenden.

**Systemgenehmiger:** Genehmigender Benutzer.

![ExFlow Setup - Eskalation](./../../images/exflow-setup-escalation-002.png)

#### ExFlow Approval Group

Gehe zu: ***Setup \--\> ExFlow Manual Setup \--\> ExFlow Approval Groups***

Verwenden Sie die Eskalationseinstellungen in der ExFlow Approval Group, wenn eine separate Konfiguration erforderlich ist.

![ExFlow Approval Group](./../../images/image324.png)

#### Genehmigungsstatus

Wenn "Ausführen bei Überprüfung von Änderungen" in ExFlow Setup ausgewählt ist, wird der Eskalations-Job ausgeführt, wenn der Benutzer auf "Änderungen überprüfen" im Genehmigungsstatus klickt.

#### ExFlow Start Eskalations-Job

Gehe zu: ***Periodische Aktivitäten \--\> ExFlow Eskalations-Job***

Führen Sie den ExFlow Eskalations-Job manuell aus oder richten Sie ihn in "Job Queue Entries" in Business Central ein.

![Bericht - ExFlow Start Eskalations-Job](./../../images/image325.png)

#### Beispiel mit Benutzern und einer allgemeinen Eskalationseinstellung in ExFlow Setup

In diesem Beispiel ist CC (Cecilia Cederbaum) der aktuelle Genehmiger und es gibt keine Eskalationseinstellung für die Approval Group CC. Der zweite Genehmiger ist EE (Erik Eriksson).

![ExFlow Genehmigungsstatus](./../../images/image326.png)

Der Eskalations-Job genehmigt CC automatisch und fügt einen neuen Genehmiger, FM (Finance Manager), aus der ExFlow-Konfiguration hinzu, da die Anzahl der Tage zwischen dem 2020-08-17 und heute (2020-09-10) mehr als 5 Tage beträgt. (Konfiguration, siehe Bild oben unter ExFlow Eskalations-Job \--\> ExFlow Setup).

![ExFlow Genehmigungsstatus](./../../images/image327.png)

#### Beispiel mit Benutzern, die Eskalationseinstellungen in der Approval Group haben

In diesem Beispiel ist der erste und aktuelle Genehmiger FF (Filippa von Fersen). FF hat eine Eskalationseinstellung in der Approval Group. (Konfiguration, siehe Bild oben unter ExFlow Eskalations-Job - ExFlow Approval Group)

Der zweite Genehmiger ist EE (Erik Eriksson).

![ExFlow Genehmigungsstatus](./../../images/image328.png)

Der Eskalations-Job genehmigt FF automatisch und fügt einen neuen Genehmiger, CFO, aus der Eskalationskonfiguration in der Approval Group FF hinzu. Da die Anzahl der Tage zwischen dem 2020-08-17 und heute (2020-09-10) mehr als 3 Tage beträgt. EE muss nach CFO immer noch genehmigen.

![ExFlow Genehmigungsstatus](./../../images/image329.png)


### Batch E-Mails senden

Gehe zu: ***Periodische Aktivitäten \--\> ExFlow Batch E-Mails senden***

Batch E-Mails senden wird normalerweise automatisch über die Job-Warteschlange in Business Central ausgeführt. Falls erforderlich, kann der Job auch manuell gestartet werden.

![ExFlow Batch E-Mails senden](./../../images/image330.png)

Diese Funktion ist auch in "ExFlow E-Mail-Einrichtung" verfügbar.

![ExFlow E-Mail-Einrichtung](./../../images/image331.png)

Erinnerungen an bestimmte Benutzer aus der "ExFlow Benutzer" Liste senden.

![ExFlow Benutzer](./../../images/image332.png)

Um eine Erinnerung an alle aktuellen Benutzer für ein bestimmtes Dokument zu senden, führen Sie den Bericht aus ExFlow Genehmigungsstatus aus, indem Sie die Dokumentenzeile markieren und "Erinnerung senden" auswählen.

![ExFlow Genehmigungsstatus](./../../images/image333.png)

### Batch-Dokumente importieren

Gehe zu: ***Periodische Aktivitäten \--\> ExFlow Batch-Dokumente importieren***

Dieser Bericht ist eine weitere Möglichkeit, alle Dokumente in das Importjournal zu importieren und kann auch automatisch über die Job-Warteschlange in Business Central ausgeführt werden.

![Bericht - ExFlow Batch-Dokumente importieren](./../../images/image334.png)

### Ersatzbenutzer zuweisen

Gehe zu: ***Periodische Aktivitäten \--\> ExFlow Ersatzbenutzer zuweisen***

Über die Funktion Ersatzbenutzer zuweisen können vorübergehend Approver hinzugefügt oder entfernt werden.

Wählen Sie die Aktion "Hinzufügen" oder "Entfernen" aus.

Fügen Sie den Approver hinzu.

Fügen Sie den Ersatzbenutzer hinzu.

Startdatum und Enddatum können nur verwendet werden, wenn die Aktion "Hinzufügen" ausgewählt ist.

Diese Funktion ist auch unter ExFlow Benutzer verfügbar.

![Bericht - ExFlow Ersatzbenutzer zuweisen](./../../images/image335.png)

### Rechnungseinträge erneut in Rechnung stellen

Informationen zu Rechnungen, die an den Kunden gesendet werden sollen, finden Sie in den ExFlow Rechnungseinträgen.

Lesen Sie mehr über diese Funktion im Abschnitt ***Rechnungseinträge erneut in Rechnung stellen***.

### Automatische Codierungsvorschläge

Um die automatischen Codierungsvorschläge anzuwenden, müssen die Funktionen ExFlow Codierungsset-IDs für Codierungsvorschläge und ExFlow Erstellung automatischer Codierungsvorschläge ausgeführt werden.

![Periodische Aktivitäten - Automatische Codierungsvorschläge](./../../images/exflow-menu-005-periodic-activities.png) <br/><br/> Lesen Sie mehr darüber im Abschnitt [***Einrichtung automatischer Codierungsvorschläge***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/automatic-coding-suggestion-setup#automatic-coding-suggestion-setup)








### Batch Send Emails

Go to: ***Periodic Activities \--\> ExFlow Batch Send Emails***

Batch Sent Emails is usually running automatically through Job Queue
Entries in Business Central standard. But if needed, run the job
manually.

![ExFlow Batch Send Emails](./../../images/image330.png)

This function can also be found in "ExFlow Email Setup".

![ExFlow Email Setup](./../../images/image331.png)

Send reminders to specific users from the "ExFlow Users" list.

![ExFlow Users](./../../images/image332.png)

To send a reminder to all current users for one specific document, run
the report from ExFlow Approval Status by marking the document line and
"Send Reminder".

![ExFlow Approval Status](./../../images/image333.png)

### Batch Import Documents

Go to: ***Periodic Activities \--\> ExFlow Batch Import Documents***

This report is another way to import all documents into Import Journal
and can also be used to run automatically through Job Queue Entries in
Business Central standard.

![Report - ExFlow Batch Import Documents](./../../images/image334.png)

### Assign Replacers

Go to: ***Periodic Activities \--\> ExFlow Assign Replacers***

From Assign Replacers, Approvers can be added temporary or removed.

Select Action Add or Remove.

Add Approver.

Add Replace with User.

Start Date and End Date can only be used if Action is selected to Add.

This same function can be found under ExFlow User.

![Report - ExFlow Assign Replacers](./../../images/image335.png)

### Re-Invoicing Entries

Information regarding invoices to send to Customer can be found in
ExFlow Re-Invoicing Entries.

Read more about this function under section ***Re-Invoicing***.

### Automatic Coding Suggestion

To apply the Automatic Coding Suggestion, it is required to run the
functions ExFlow Coding Set IDs for Coding Suggestions and ExFlow
Creating Automatic Coding Suggestions.

![Periodic Activities - Automatic Coding Suggestions](./../../images/exflow-menu-005-periodic-activities.png) <br/><br/> Read more about this under section [***Automatic Coding Suggestion Setup***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/automatic-coding-suggestion-setup#automatic-coding-suggestion-setup)
