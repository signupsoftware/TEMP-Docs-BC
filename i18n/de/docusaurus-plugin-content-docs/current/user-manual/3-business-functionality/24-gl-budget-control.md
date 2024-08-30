---
title: G/L Budget Control
sidebar_position: 24
hide_title: true
---
## G/L Budget Control

Bei der Arbeit mit dem Budget der Hauptbuchhaltung in Business Central Standard gibt es nur Tools zum Vergleichen von gebuchten Buchungssätzen mit dem Budget. Keine vor dem Buchen.<br/>

Mit ExFlow G/L Budget Control können Benutzer das Budget für Eingangsrechnungen und Gutschriften vor dem Buchen verfolgen. Auch bei der Genehmigung auf ExFlow Web.

### ExFlow Budget Control-Assistent
Schritt für Schritt Anleitung zum Starten von ExFlow G/L Budget Control.<br/>

Gehe zu: ***Setup --> ExFlow Assistenten --> ExFlow Budget Control-Assistent***<br/><br/>


#### G/L Budget Control berechnen

Wählen Sie die bevorzugte Option zur Berechnung der G/L Budget Control:

1.	**Monatlich**<br/>
Berechnen und vergleichen Sie Buchungen mit dem Budget pro Monat

2.	**Bis zum Buchungsmonat**<br/>
Berechnen und vergleichen Sie G/L-Buchungen mit dem Budget vom Budgetbeginn bis zum Ende des Buchungsmonats des Dokuments

3.	**Gesamt**<br/>
Berechnen und vergleichen Sie G/L-Buchungen mit dem Budget vom Startdatum bis zum Enddatum in der Budgetperiodeneinrichtung

![ExFlow Budget Control-Assistent](./../../images/budget-control-wizard-001.png)<br/><br/>

#### Globale Dimensionen
Wählen Sie globale Dimensionen für die Budgetkontrolle des Hauptbuchs. Es ist möglich, Dimensionen zu ignorieren oder eine oder beide auszuwählen.

![ExFlow Budget Control-Assistent](./../../images/budget-control-wizard-002.png)<br/><br/>

#### G/L Budgetperioden
G/L Budgetperioden sind erforderlich, um ExFlow mitzuteilen, mit welchem Budget die Buchungen verglichen werden sollen.
Klicken Sie auf "Budgetperioden hinzufügen", um einen Zeitraum und ein Budget auszuwählen.
Geben Sie Startdatum, Enddatum und Budget ein, mit dem verglichen werden soll.

![ExFlow Budget Control-Assistent](./../../images/budget-control-wizard-003.png)

![ExFlow Budget Control-Assistent](./../../images/gl-budget-period-setup-001.png)<br/><br/>

#### Web-Spalten hinzufügen
Fügt ExFlow-Spalten die erforderlichen Web-Spalten hinzu. Wenn Spalten hinzugefügt werden, können sie nicht aus dem Budget Control-Assistenten entfernt werden.<br/>
Um Spalten zu entfernen, gehe zu: ***ExFlow Setup --> Verwandt --> Erweitert --> Spalten***

![ExFlow Budget Control-Assistent](./../../images/budget-control-wizard-004.png)<br/><br/>

#### Warnungen
Die Benachrichtigung bei % wird verwendet, um Genehmiger zu warnen, wenn das Budget fast erreicht ist. Wenn der Betrag einer Buchungszeile über dem Benachrichtigungsprozentsatz liegt, wird der verwendete Budgetprozentsatz und der verbleibende Budgetbetrag fett in Business Central angezeigt.

![ExFlow Budget Control-Assistent](./../../images/budget-control-wizard-005.png)<br/><br/>

#### Warnungen im Importjournal
Aktivieren Sie Warnungen im Importjournal, sowohl für Warnungen bei % als auch für Beträge über dem Budget. Diese Warnungen können im Importjournal akzeptiert werden, um das Dokument zur Genehmigung zu senden.

![ExFlow Budget Control-Assistent](./../../images/budget-control-wizard-006.png)<br/><br/>

#### Budgetinhaber
Fügen Sie eine Genehmigungsgruppe für den Budgetinhaber hinzu, um die Genehmigung zu erteilen, wenn das Budget der Hauptbuchhaltung überschritten wird (über 100%). Der Budgetinhaber wird als letzter Genehmiger zum Genehmigungsfluss hinzugefügt. Wenn leer, werden keine Budgetgenehmiger zum Genehmigungsfluss hinzugefügt.<br/><br/>

#### Genehmigungstoleranz
Die Genehmigungstoleranz wird pro Dokumentzeile überprüft.
Halten Sie sowohl den Betrag als auch den Prozentsatz so niedrig wie möglich. Dies liegt daran, dass der Betrag und der Prozentsatz pro G/L-Konto und Dimensionenkombination gelten.

![ExFlow Budget Control-Assistent](./../../images/budget-control-wizard-007.png)<br/><br/>

#### Hintergrundverarbeitung
Die Aktualisierung der ExFlow G/L Budgetsummen aus den Hauptbuchbuchungen kann beim Buchen aus dem Genehmigungsstatus oder durch Einrichten einer Jobwarteschlange erfolgen.

**Mit Jobwarteschlange:** Aktualisieren Sie durch Hinzufügen einer geplanten Jobwarteschlange.

**Beim Buchen aus dem Genehmigungsstatus:** Aktualisieren Sie beim Buchen aus dem Genehmigungsstatus.

![ExFlow Budget Control-Assistent](./../../images/budget-control-wizard-008.png)<br/><br/>

#### Abschließen und Setup aktualisieren
Klicken Sie auf "Fertig", um den ExFlow Budget Control-Assistenten zu schließen und die Einstellungen anzuwenden.

![ExFlow Budget Control-Assistent](./../../images/budget-control-wizard-009.png)

### ExFlow G/L Budget Control Setup
Für die manuelle Einrichtung, Überprüfung oder Aktualisierung der Einrichtung gehen Sie zu ExFlow G/L Budget Control Setup.<br/>
Gehe zu: ***Setup --> ExFlow Manuelle Einrichtung --> ExFlow Budget Control Setup***<br/><br/>

#### Allgemein

| Allgemein | |
|:-|:-|
| **Aktiv:**                   | Aktivieren oder Deaktivieren der ExFlow G/L Budget Control. <br/> Um ExFlow-Spalten zu deaktivieren, gehe zu: ***ExFlow Setup --> Verwandt --> Erweitert --> Spalten***
| **G/L Budgetberechnung:**   | Wählen Sie die bevorzugte Option zur Berechnung der G/L Budget Control: <br/><br/> 1.	**Monatlich**<br/> Berechnen und vergleichen Sie Buchungen mit dem Budget pro Monat. <br/><br/> 2. **Bis zum Buchungsmonat**<br/> Berechnen und vergleichen Sie G/L-Buchungen mit dem Budget vom Budgetbeginn bis zum Ende des Buchungsmonats des Dokuments. <br/><br/> 3. **Gesamt**<br/> Berechnen und vergleichen Sie G/L-Buchungen mit dem Budget vom Startdatum bis zum Enddatum in der Budgetperiodeneinrichtung.<br/><br/>
|**Globale Dimension 1:**        | Wählen Sie globale Dimensionen für die Budgetkontrolle des Hauptbuchs. Ignorieren Sie Dimensionen oder wählen Sie eine oder beide aus.
| **Globale Dimension 2:**       | Wählen Sie globale Dimensionen für die Budgetkontrolle des Hauptbuchs. Ignorieren Sie Dimensionen oder wählen Sie eine oder beide aus.

![ExFlow G/L Budget Control Setup](./../../images/gl-budget-control-setup-001.png)<br/><br/>

#### Warnungen
| Warnungen | |
|:-|:-|
| **Benachrichtigung bei %:**            | Warnung der Genehmiger, wenn das Budget fast erreicht ist. Wenn der Betrag einer Buchungszeile über dem Benachrichtigungsprozentsatz liegt, wird der verwendete Budgetprozentsatz und der verbleibende Budgetbetrag fett in Business Central angezeigt.
| **Warnung über Benachrichtigung:**    | Aktivieren Sie Warnungen im Importjournal für Warnungen bei %. Warnungen können im Importjournal akzeptiert werden, um das Dokument zur Genehmigung zu senden.
| **Warnung über Budget:**          | Aktivieren Sie Warnungen im Importjournal, wenn die Codierung das Budget überschreitet. Warnungen können im Importjournal akzeptiert werden, um das Dokument zur Genehmigung zu senden.

![ExFlow G/L Budget Control Setup](./../../images/gl-budget-control-setup-002.png)<br/><br/>

#### Genehmigung
| Genehmigung | |
|:-|:-|
| **Budgetinhaber:**         | Fügen Sie eine Genehmigungsgruppe für den Budgetinhaber hinzu, um die Genehmigung zu erteilen, wenn das Budget der Hauptbuchhaltung überschritten wird (über 100%). Der Budgetinhaber wird als letzter Genehmiger zum Genehmigungsfluss hinzugefügt. Wenn leer, werden keine Budgetgenehmiger zum Genehmigungsfluss hinzugefügt.
| **Genehmigungstoleranz:**   | Die Genehmigungstoleranz wird pro Dokumentzeile überprüft. Halten Sie sowohl den Betrag als auch den Prozentsatz so niedrig wie möglich. Dies liegt daran, dass der Betrag und der Prozentsatz pro G/L-Konto und Dimensionenkombination gelten.

![ExFlow G/L Budget Control Setup](./../../images/gl-budget-control-setup-003.png)<br/><br/>

#### Hintergrundverarbeitung
Die Aktualisierung der ExFlow G/L-Budgetsummen aus den Buchungssätzen des Hauptbuchs kann entweder beim Buchen aus dem Genehmigungsstatus oder durch Einrichten einer Jobwarteschlange erfolgen. Die Summen dienen zur Zusammenfassung aller G/L-Buchungen pro Jahr, Monat und globaler Dimensionenkombination.

| Hintergrundverarbeitung | |
|:-|:-|
| **Mit Jobwarteschlange:**                       | Aktualisierung durch Hinzufügen einer geplanten Jobwarteschlange
| **Beim Buchen aus dem Genehmigungsstatus:**    | Aktualisierung beim Buchen aus dem Genehmigungsstatus

![ExFlow G/L-Budgetsteuerungseinrichtung](./../../images/gl-budget-control-setup-004.png)<br/><br/>

#### Funktion - G/L-Budgetsteuerungseinrichtung
Die G/L-Budgetperioden sind erforderlich, um ExFlow mitzuteilen, mit welchem Budget die Buchung verglichen werden soll.

![ExFlow G/L-Budgetsteuerungseinrichtung](./../../images/gl-budget-control-setup-function-001.png)

Klicken Sie auf "Neu" und wählen Sie Startdatum, Enddatum und G/L-Budgetcode für den Zeitraum aus.

![ExFlow Budgetperiodeneinrichtung](./../../images/gl-budget-period-setup-001.png)<br/><br/>

#### Funktion - Web-Spalten hinzufügen
Fügt die erforderlichen Web-Spalten zu ExFlow hinzu.<br/>
Um ExFlow-Spalten zu deaktivieren, gehen Sie zu: ***ExFlow-Einrichtung --> Verwandt --> Erweitert --> Spalten.***

![ExFlow G/L-Budgetsteuerungseinrichtung](./../../images/gl-budget-control-setup-function-002.png)

![ExFlow G/L-Budgetsteuerungseinrichtung](./../../images/columns-are-added-001.png)<br/><br/>

#### Funktion - G/L-Budgetsummen aktualisieren
Beim ersten Mal, wenn Sie mit der ExFlow G/L-Budgetsteuerung beginnen oder die Einrichtung ändern, kann es hilfreich sein, die Berechnung für die Budgetsteuerung zu beschleunigen.

![ExFlow G/L-Budgetsteuerungseinrichtung](./../../images/gl-budget-control-setup-function-003.png)

Dies kann durch sofortige Aktualisierung oder zu einem bestimmten Zeitpunkt und Datum erfolgen.

![ExFlow G/L-Budgetsteuerungseinrichtung](./../../images/update-gl-budget-totals-001.png)

### ExFlow G/L-Budgetsteuerungsworkflow
#### Beginnen Sie mit der Einrichtung
Die ExFlow G/L-Budgetsteuerungseinrichtung muss wie oben beschrieben aktiviert werden.<br/><br/>

#### Berechnungen
Die Berechnung erfolgt anhand des Buchungsdatums im Dokument und des in der Budgetperiodeneinrichtung für Rechnungen und Gutschriften angegebenen Budgets.

Die Dokumente werden aus dem Importjournal, dem Genehmigungsstatus und manuell in Business Central (außerhalb des ExFlow-Genehmigungsworkflows) erstellt.

Sie erfolgt pro Gewinn- und Verlust-G/L-Konto und globaler Dimensionenkombination in der G/L-Budgetsteuerungseinrichtung.<br/>
Es erfolgt keine Budgetberechnung für Bilanz-G/L-Konten.

Für Artikel, Anlagevermögen, Ressourcen und Gebühren (Artikel) erfolgt die Berechnung anhand des Einkaufskontos oder des Einkaufsgutschriftkontos in der allgemeinen Buchungseinrichtung.<br/><br/>

#### Spalten in den Zeilen
| Spalten in den Zeilen | |
|:-|:-|
| **Verbleibender Betrag:**     | Zeigt den verbleibenden Budgetbetrag an, der wie oben berechnet wurde
| **Verwendeter Budget %:**        | Zeigt den verwendeten Budgetprozentsatz an, der wie oben berechnet wurde

![ExFlow Importjournal](./../../images/import-journal-004-budget-control.png)

**Budgetdetailstatus:** Bei Verwendung von Abgrenzungs- oder automatischen Kontengruppen in einer Dokumentzeile können mehrere Perioden und G/L-Konten vorhanden sein. Der Budgetdetailstatus zeigt den Status an: 
- **Innerhalb des Budgets**
- **Warnung**
- **Innerhalb der Toleranz**
- **Über dem Budget**

Der Status zeigt das höchste Warnniveau aus den detaillierten Zeilen an. Klicken Sie auf den Budgetstatus, um die Budgetdetaillierten Zeilen sowie den verbleibenden Betrag und den verwendeten Budgetprozentsatz anzuzeigen.

![ExFlow Importjournal](./../../images/import-journal-005-budget-control.png)

![ExFlow Importjournal](./../../images/view-budget-detailed-lines-001.png)<br/><br/>

#### Funktion - Budget anzeigen
Um zu sehen, wie ExFlow den verbleibenden Budgetbetrag und den verwendeten Budgetprozentsatz berechnet hat, klicken Sie auf "Budget anzeigen".<br/>
Gehen Sie zu: ***Zeile --> Budget anzeigen***

![ExFlow Importjournal](./../../images/import-journal-006-budget-control.png)

Die ExFlow-Budgetübersicht fasst zusammen, wie und wo das Budget berechnet wird.
Klicken Sie auf **Betrag** für jede Zeile, um detailliertere Informationen auf Transaktionsebene zu erhalten.

![Budgetübersicht](./../../images/budget-overview-001.png)<br/><br/>

#### Importjournal
Wenn in der ExFlow G/L-Budgetsteuerungseinrichtung Warnungen aktiviert sind, werden sie im Importjournal-FactBox für Warnungsnachrichten angezeigt. Abhängig von der Einrichtung können sowohl Überbenachrichtigung als auch Überbudget für eine oder mehrere Zeilen angezeigt werden.

![ExFlow Importjournal](./../../images/import-journal-007-warning-messages.png)

Alle Warnungsnachrichten können akzeptiert werden, um das Dokument zur Genehmigung zu senden.

![Warnungsnachrichten](./../../images/warning-messages-001.png)<br/><br/>

#### ExFlow Web
Auf ExFlow Web werden alle drei Spalten aktiviert. Verbleibender Betrag, Verwendeter Budgetprozentsatz und Budgetdetailstatus.
Die Genehmiger können jedoch keine Berechnungen oder Budgetdetaillierten Status sehen.
Wenn Sie die Codierung ändern oder die Zeile aufteilen, klicken Sie auf Speichern und öffnen Sie das Dokument erneut, um aktualisierte Budgetwerte anzuzeigen.

![ExFlow Web](./../../images/web-001-budget-control.png)<br/><br/>

#### Genehmigungsstatus
Wenn die Zeile über dem Budget liegt und in der ExFlow G/L-Budgetsteuerungseinrichtung ein Budgetinhaber hinzugefügt wurde, wird diese Genehmigergruppe als letzter Genehmiger hinzugefügt. Dies geschieht jedoch erst, nachdem der letzte Genehmiger im Genehmigungsworkflow zugestimmt hat. 
Dies liegt daran, dass die Codierung in der Zeile während des Genehmigungsworkflows geändert werden kann und die Zeile möglicherweise nicht mehr über dem Budget liegt.
Wenn Sie den Budgetinhaber als Genehmiger im Genehmigungsworkflow hinzufügen, wird dies als "Erstellt in" Budgetsteuerung markiert.

![ExFlow Genehmigungsstatus](./../../images/approval-status-001.png)

