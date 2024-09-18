---
title: Prozess der Bestellabgleichung
sidebar_position: 7
hide_title: true
---
## Prozess der Bestellabgleichung

### Importieren der Einkaufsrechnung mit Bestellabgleich

Der Import von Rechnungen erfolgt über "ExFlow Import Journals". Verwenden Sie die Funktion "Batch Import Documents", um Rechnungen für alle Journale zu importieren, oder geben Sie ein Importjournal ein/bearbeiten Sie es, um Dokumente in einem bestimmten Journal zu importieren.

### Bestellabgleich auf Kopfebene

Wenn eine Bestellnummer auf der Rechnung interpretiert wurde, wird sie in der Spalte "Order No. (Import)" sichtbar sein. ExFlow durchsucht automatisch die Liste der verfügbaren Bestellungen in Business Central basierend auf dem Lieferanten und der importierten Bestellnummer.

ExFlow kann sowohl die interne Bestellnummer als auch die Bestellnummer des Lieferanten abgleichen, wobei Letzteres erfordert, dass sie in der tatsächlichen Bestellung eingerichtet ist.

Die Spalte "Order No." zeigt die abgeglichene Bestellung an, wenn sie gefunden wurde.

![ExFlow Import Journal - Order No.](../../images/image292.png)

Dieses Verfahren kann auch manuell ausgelöst werden, wenn der Rechnung eine importierte Bestellnummer fehlt. Geben Sie die Bestellnummer manuell in die Spalte "Order No." ein.

Je nachdem, ob ExFlow für den Zwei-Wege-Abgleich oder den Drei-Wege-Abgleich konfiguriert ist, sind die nächsten Schritte des Prozesses leicht unterschiedlich.

#### Drei-Wege-Abgleich

Bedeutet, dass ExFlow die Rechnung mit der Bestellung und den zugehörigen gebuchten Wareneingängen abgleicht.

Dies erfolgt standardmäßig automatisch, kann aber auch manuell durch die Funktion "Get Receipt/Return Shpmt./Order Lines" ausgelöst werden.

![ExFlow Import Journal - Get Receipt/Return Shpmt./Order Lines](../../images/image293.png)

Der Drei-Wege-Abgleich erfordert, dass die Einkaufsrechnung zugehörige gebuchte Bestellungen hat. ExFlow ruft alle verfügbaren gebuchten Wareneingangszeilen ab und fügt sie als Rechnungszeilen hinzu.

![ExFlow Import Journal - Import Lines](../../images/image294.png)

Diese Funktion kann auch nützlich sein, wenn eine Rechnung mit mehreren Bestellungen auf Kopfebene abgeglichen werden soll.

Beim Auswählen von Wareneingangszeilen auf der Seite "Get Receipt Lines" besteht die Möglichkeit, die Zeilen auszuschließen, die bereits vollständig mit einer anderen Rechnung im Importjournal abgeglichen oder noch nicht im Genehmigungsstatus gebucht sind. Klicken Sie auf "Exclude fully matched", um solche Wareneingangszeilen auszublenden:

![ExFlow Import Journal - Get Receipt Lines](../../images/image295.png)

Im untenstehenden Bild sind die abgeglichenen Zeilen ausgeblendet. Klicken Sie auf "Show All", um die Seite zurückzusetzen und alle Wareneingangszeilen erneut anzuzeigen. Beide Aktionen in "Get Receipt Lines" existieren auch für Gutschriften und Einkaufsrücksendungen.

![ExFlow Import Journal - Get Receipt Lines - Receipt list after Exclude Fully Matched](../../images/image296.png)

Es ist möglich, die Einstellung "Disable Currency Filter in Get Receipt Lines" im Abschnitt PO Matching in der ExFlow-Setup zu aktivieren, um die Leistung beim Verwenden von Get Receipt Lines im Importjournal zu verbessern. Es wird dann kein Filter auf den Währungscode gesetzt, wenn die Auswahlseite geöffnet wird.

#### Zwei-Wege-Abgleich

Bedeutet, dass ExFlow die Rechnung direkt mit der Bestellung abgleicht, ohne dass zugehörige gebuchte Wareneingänge erforderlich sind.

![ExFlow Import Journal - Import Lines](../../images/image297.png)

Alle Konflikte, Kosten- oder Mengenabweichungen werden in Form einer Aktionsnachricht angezeigt und müssen korrigiert werden, bevor die Rechnung erstellt und zur Genehmigung gesendet werden kann.

### Bestellabgleich auf Zeilenebene

Dies erfordert, dass die Rechnung auf Kopf- und Zeilenebene in ExFlow Data Capture oder einer anderen verwendeten OCR-Lösung interpretiert wurde.

Der Bestellabgleich auf Zeilenebene liefert genauere Ergebnisse bei der Identifizierung von Abweichungen. Der Abgleich auf Zeilenebene bietet auch viel mehr Konfigurationsmöglichkeiten bei der Einrichtung von Validierungen und zulässigen Schwellenwerten.

Eine Voraussetzung für genaue Ergebnisse beim Zeilenabgleich ist, dass es möglich ist, wesentliche Informationen aus den Lieferantenrechnungen zu extrahieren, damit ExFlow in der Lage ist, zu verstehen, welche Bestellzeilen abgeglichen werden sollen.

Artikelnummer, Menge, Stückpreis und Zeilengesamtbetrag sind einige der wichtigsten Werte, die aus der Rechnung extrahiert werden müssen, um ExFlow beim Abgleich der richtigen Rechnungszeilen mit den Bestellzeilen zu unterstützen.

ExFlow kann auch die Artikelnummer des Lieferanten abgleichen, wenn sie in Business Central als "Vendor Item No." oder "Cross references" eingerichtet ist. Es gibt auch eine Option, spezifische ExFlow OCR-Importzuordnungen einzurichten, bei denen importierte Werte übersetzt und bestimmten Sachkonten oder Artikeln zugeordnet werden können.

Sowohl der Zwei-Wege-Abgleich als auch der Drei-Wege-Abgleich werden beim Bestellabgleich auf Zeilenebene in ExFlow unterstützt.

Einer der größten Vorteile des Zeilenabgleichs im Vergleich zum Kopfabgleich besteht darin, dass ExFlow in der Lage ist, Validierungen für jede interpretierte Rechnungszeile durchzuführen und genau anzugeben, was korrigiert werden muss und um welche Art von Problem es sich handelt. Während der Kopfabgleich nur Informationen darüber liefert, dass es einen Konflikt oder Preisunterschied zwischen der Gesamtsumme der Bestellzeilen und dem Gesamtrechnungsbetrag gibt.

Die Konfiguration des Zeilenabgleichs finden Sie in der ExFlow-Setup.

![ExFlow Setup - PO Matching](../../images/exflow-setup-po-matching-004.png)

Das folgende Beispiel beschreibt, wie man aus einem Journal importiert, das nur für "Bestellabgeglichene Rechnungen" erstellt wurde.

Wählen Sie das Journal aus und öffnen Sie es, indem Sie auf "Edit Journal" klicken oder auf den Namen klicken.

![ExFlow Import Journal](../../images/image299.png)

**Schritt 1 -- Dokument importieren**<br/>
Gehe zu: ***Startseite \--\> Dokumente importieren\...***<br/>
Wenn der Import abgeschlossen ist, wird eine neue Zeile erstellt.

**Schritt 2 -- "Aktionsnachrichten" überprüfen und bearbeiten** (**A** im Bild unten).<br/>
Häufige Aktionsnachrichten und Lösungen:

- **Es gibt Zeilen, die mit der Bestellung übereinstimmen, aber der Empfang fehlt!**<br/>
    Die Lieferung wurde nicht gebucht. Gehe zur Bestellung und buche -- Empfang.<br/>
    Führe die Überprüfung nach dem Empfang der Lieferung durch und ExFlow wird die Rechnung mit der gebuchten Lieferung abgleichen.<br/>
    ***Startseite \--\> Dokument überprüfen***
    (**B** im Bild unten)
    ![ExFlow Import Journal](../../images/image300.png)

- **Betrag (XX,XX) stimmt nicht mit der Summe der Zeilen (XX,XX) überein**<br/>
    Ändere die Preise und Zeilen, damit sie mit der Rechnung übereinstimmen. Verwende "Zeilendetails" im FactBox für Summen und Unterschiede. (**E** im Bild unten).

- **Wenn die Rechnung mehr als eine Bestellung enthält**<br/>
Verwende "Empfang/Rücksendung abrufen".
***Aktionen \--\> Bestellung \--\> Empfang/Rücksendung abrufen/Bestellzeilen*** (**C** im Bild unten).<br/>
![ExFlow Import Journal](../../images/image301.png)

- **Siehe Zeile für spezifische Aktionsnachricht - Unterschied zwischen der Rechnung und dem Bestell-Einzelpreis!**<br/>
    Korrigiere den direkten Einzelpreis ohne MwSt. oder korrigiere den Bestellpreis, um die Bestellung mit der Rechnung abzugleichen.
    Oder deaktiviere "Einzelpreis testen" bei Importzeilen und sende die Rechnung zur Genehmigung. (**D** im Bild unten).<br/><br/>
    ![ExFlow Import Journal](../../images/image302.png)

**Schritt 3 -- Alle Dokumente überprüfen...**<br/>
Gehe zu: ***Startseite \--\> Alle Dokumente überprüfen***<br/>
Wenn alle Aktionsnachrichten bearbeitet wurden, "Dokument überprüfen", um zu sehen, ob die Aktionsnachricht leer ist und somit bereit zur Erstellung ist.

**Schritt 4 -- Rechnung/Gutschrift erstellen**<br/>
Gehe zu: ***Erstellen \--\> "Stapelweise Rechnungen/Gutschriften erstellen"\... / "Rechnung/Gutschrift erstellen"***<br/>
Erstelle eine Rechnung oder Gutschrift, indem du auf "Rechnung/Gutschrift erstellen" klickst.

### Bestellabgleich - Direktlieferung

ExFlow unterstützt Direktlieferungsbestellungen. Für Unterstützung bei der Standardfunktion für Direktlieferungen, kontaktiere bitte einen vertrauenswürdigen Partner oder den Microsoft-Support.

Die häufigste Einrichtung für Direktlieferungen besteht wahrscheinlich darin, Rechnungen mit Bestellungen abzugleichen, indem die Einrichtung verwendet wird: *"Dokumente abgleichen mit: Bestellung"* und *"Bestellzeilen automatisch empfangen"*. 

Das folgende Beispiel zeigt, wie man mit Direktlieferungen zusammen mit dem ExFlow-Bestellabgleich arbeitet:

Erstelle eine Verkaufsbestellung, markiere die Verkaufszeilen für die Direktlieferung, indem du das Kontrollkästchen "Direktlieferung" aktivierst. Dann gib die Verkaufsbestellung frei.

![Verkaufsbestellung](../../images/image303.png)

Erstelle eine Bestellung. Wähle den ''Lieferadresse''-Kunden (zusammen mit anderen benötigten Informationen), in diesem Beispiel wird der Kunde ''School of Fine Art'' ausgewählt.

Verwende im Kopfbereich Aktionen \--\> Funktionen \--\> Direktlieferung \--\> Verkaufsbestellung abrufen. Dann gib die Bestellung frei.

![Bestellung](../../images/image304.png)

Importiere eine Rechnung in das ExFlow Import Journal vom Lieferanten (Dustin) bezüglich der Direktlieferung. Verwende Aktionen \--\> Bestellung \--\> Empfang/Rücksendung abrufen/Bestellzeilen, um die Zeilen abzurufen.

![ExFlow Import Journal](../../images/image305.png)

Erstelle und sende die Rechnung zur Genehmigung, dann genehmige und überprüfe die Rechnung. Wenn "Änderungen überprüfen" im Genehmigungsstatus ausgeführt wurde, werden die Artikel in der Bestellung automatisch empfangen und die Artikel in der Verkaufsbestellung automatisch versendet.

Gehe zurück zur Verkaufsbestellung, um die Verkaufsbestellung zu fakturieren. Wenn dies nicht vor dem Buchen der Rechnung aus dem ExFlow-Genehmigungsstatus erfolgt, erscheint folgende Nachricht:

![Fehlermeldung im Genehmigungsstatus](../../images/image306.png)

Wenn die Verkaufsbestellung fakturiert ist, kann die Rechnung im Genehmigungsstatus wie gewohnt gebucht werden.

### Rechnung mit Empfangs-, Bestell- oder sowohl Empfangs- als auch Bestellzeilen abgleichen
Gehe zu: ***Einrichtung \--\> ExFlow-Einrichtung \--\> PO-Abgleich \--\> Dokumente abgleichen mit***

Die Einstellung "**Dokumente abgleichen mit**" gibt an, ob ExFlow importierte Einkaufsrechnungen mit Bestellungen, Empfangsbestätigungen oder sowohl Empfangs- als auch Bestellzeilen abgleichen soll.

![ExFlow-Einrichtung - PO-Abgleich - Dokumente abgleichen mit](../../images/exflow-setup-po-matching-005.png)

**Empfang:** ExFlow findet automatisch die Bestellung basierend auf der importierten Bestellnummer. ExFlow ruft automatisch die verfügbaren gebuchten Empfangsbestätigungen ab, die mit der Bestellung verbunden sind, wenn die Einstellung "**Zeilen automatisch abrufen**" aktiviert ist.

**Bestellung:** Dies ermöglicht das Abgleichen einer Einkaufsrechnung direkt mit einer Bestellung, die keine gebuchten Empfangsbestätigungen hat. <br/> Die Empfangsbestätigung muss vor der endgültigen Buchung der Rechnung gebucht werden. Dies kann entweder manuell aus der Bestellung erfolgen oder automatisch durch Aktivieren der Einstellung "**Bestellzeilen automatisch empfangen**". <br/> ExFlow ruft automatisch die verfügbaren Bestellzeilen ab, die mit der Bestellung verbunden sind, wenn die Einstellung "**Zeilen automatisch abrufen**" aktiviert ist.

**Bestellung und Empfang:** Mit dieser Einstellung ist es möglich, eine Einkaufsrechnung sowohl mit gebuchten Empfangs- als auch Bestellzeilen abzugleichen. Dies bedeutet, dass ExFlow Empfangsbestätigungen auf einer abgeglichenen Zeile und noch nicht empfangene Bestellzeilen abruft. Darüber hinaus ist es möglich, ExFlow automatisch Bestellzeilen empfangen zu lassen, indem die Einstellung "**Bestellzeilen automatisch empfangen**" aktiviert wird, falls erforderlich.

Durch Aktivieren von “Bestellzeilen automatisch empfangen” empfängt ExFlow alle Zeilen, die mit einer Bestellung abgeglichen sind. Was ExFlow empfängt, basiert auf den erlaubten Zeilentypen aus der "Einrichtung der automatischen Empfangszeilentypen" (Einrichtung öffnet sich automatisch nach dem Setzen von “Bestellzeilen automatisch empfangen” auf TRUE).

Wenn Änderungen erforderlich sind, gehe zu: ***ExFlow-Einrichtung --> Verwandt --> Erweitert --> Einrichtung der automatischen Empfangszeilentypen***

![ExFlow Empfangszeilentypen](../../images/auto-receiving-line-types-001.png)

Die gleiche Funktion kann auch auf der Seite "ExFlow-Lieferanteneinrichtung" gefunden werden.

![ExFlow Lieferanteneinrichtungskarte](../../images/advanced-vendor-options-002.png)


### Einkaufsrechnungen automatisch genehmigen

#### ExFlow-Einrichtung - PO-Abgleich

***Einrichtung \--\> ExFlow-Einrichtung \--\> PO-Abgleich \--\> Rechnungen automatisch genehmigen***

Um Bestellabgleichsrechnungen automatisch zu genehmigen, gibt es drei Optionen.

*Niemals:** Mit dieser Einstellung wird die automatische Genehmigung deaktiviert. Alle Rechnungen, die mit einer Bestellung abgeglichen wurden, erfordern eine manuelle Genehmigung.

**Wenn die Differenz innerhalb der Toleranz liegt:** Wenn die importierte Rechnung mit einer Bestellung ohne Mengen- oder Preisdifferenzen übereinstimmt, wird sie automatisch genehmigt. Dies gilt auch, wenn es Abweichungen innerhalb des zulässigen Schwellenwerts gibt.

**Wenn die abgeglichene Bestellung genehmigt ist:** Gleiche Anforderungen wie bei der vorherigen Option, mit der zusätzlichen Bedingung, dass die abgeglichene Bestellung über ExFlow genehmigt worden sein muss.

**Benutzer für automatische Genehmigung:** Geben Sie einen ExFlow-Benutzer an, der als Stempel in der Transaktion und Historie für Rechnungen verwendet wird, die automatisch mit einer Bestellung abgeglichen und genehmigt wurden. Wenn dieses Feld leer bleibt, wird der Benutzer verwendet, der die Einkaufsrechnung aus dem ExFlow-Importjournal erstellt hat.

![ExFlow Setup - PO Matching - Auto Approve Invoices](../../images/exflow-setup-po-matching-006.png)

### Dokumente aus der Interpretation im Batch importieren

Um dokumentenabgeglichene Bestellungen in einem separaten Importjournal zu importieren, fügen Sie ein neues Importjournal hinzu und verwenden Sie "Nur dokumentenabgeglichene Bestellungen".

![ExFlow Import Journals](../../images/image309.png)

### Automatische Differenzzeile

Im ExFlow-Importjournal ist es beim Abgleich von Bestellungen möglich, eine Differenzzeile zu einem G/L-Konto, Artikel oder einer Gebühr (Artikel) automatisch zu erkennen und zu erstellen.

Fügen Sie "ExFlow Purchase Code" im Feld "Diff.Line Purch. Code" unter PO Matching in ExFlow Setup hinzu.

![ExFlow Setup - PO Matching](../../images/exflow-setup-po-matching-007.png)

![ExFlow Import Journal](../../images/image311.png)

Verschiedene Gebühren und Differenzzeilen können einer Bestellung zugeordnet werden, wenn sie innerhalb der Toleranz liegen. Wenn das Feld "Order No." ausgefüllt ist und die Zeile perfekt mit der Bestellzeile übereinstimmt, wird sie abgeglichen. Wenn keine perfekte Übereinstimmung vorliegt, werden alle Abweichungen (Menge oder Preis) als Aktionsnachricht angezeigt.

### Automatisches Deaktivieren des PO-Abgleichs für verschiedene Gebühren
Gehen Sie zu ***ExFlow Setup --> OCR Import --> Automatisch PO-Abgleich für verschiedene Gebühren deaktivieren***

Beim Arbeiten mit interpretierten Gebühren auf Zeilenebene besteht die Möglichkeit, diese Gebühren mit jedem Zeilentyp über die ExFlow OCR-Importzuordnung zuzuordnen.

Finden Sie die Einstellung "Automatisch PO-Abgleich für verschiedene Gebühren deaktivieren" in ExFlow Setup. Wenn diese Einstellung aktiviert ist, werden diese neu zugeordneten Gebühren nicht mit der Bestellung abgeglichen. Diese Einstellung kann in Fällen verwendet werden, in denen die Fracht- oder Servicegebühr nicht als Zeile in der Bestellung erstellt wurde.

Diese Einstellung kann nur aktiviert werden, wenn ''Auto Create OCR Line Mapping'' auf ''Fragen'' oder ''Immer'' gesetzt ist.

![ExFlow Setup OCR Import](../../images/exflow-setup-ocr-import-001.png)

"Automatisch PO-Abgleich für verschiedene Gebühren deaktivieren" kann auch in der ExFlow-Lieferanteneinrichtungsliste gefunden werden. Diese Funktion ist standardmäßig ausgeblendet, personalisieren Sie die Liste, um diese Einstellung bei Bedarf hinzuzufügen.

![ExFlow Vendor Setup](../../images/exflow-vendor-setup-automatically-disable-po-001.png)

### PO-Abgleichsverzögerung Dokumentdatum und Fälligkeitsdatum
Gehen Sie zu ***ExFlow Setup --> PO Matching --> Matching Delay Doc. Date (Days) / Matching Delay Due. Date (Days)***

Es ist möglich, dass ExFlow den Bestellabgleichsprozess sowohl mit dem importierten Rechnungsdatum als auch dem Fälligkeitsdatum verzögert.

![PO Matching Delay](../../images/exflow-setup-po-matching-delay-001.png)

Wenn eine interpretierte Rechnung in das Importjournal importiert wird, verzögert ExFlow den Bestellabgleichsprozess gemäß den Einstellungen in ExFlow Setup und zeigt eine Aktionsnachricht im Importjournal an.

Nehmen wir ein Beispiel: ''Matching Delay Doc Date'' ist auf ''1D'' gesetzt. Dann wartet ExFlow einen Tag, um die Empfangszeilen abzurufen und die Bestellung mit der Rechnung im Importjournal abzugleichen.

Gleiche Vorgehensweise für ''Matching Delay Due Date''. Wenn ''-20D'' in diesem Feld gesetzt ist, ruft ExFlow die Empfangszeilen ab und gleicht 20 Tage vor dem Fälligkeitsdatum der Rechnung ab. Diese Funktion hat eine höhere Priorität als die oben genannte Funktion, mit dem Ziel, dass eine Rechnung niemals fällig wird.

Eine Aktionsnachricht wird auch für die spezifische Dokumentzeile während des angewendeten verzögerten Bestellabgleichszeitraums angezeigt. Wenn es Zeit ist, mit dem Bestellabgleichsprozess fortzufahren (gemäß der Datumsformel in den Einstellungen), verschwindet die Aktionsnachricht und das Dokument ist zur Erstellung bereit.

![PO Matching Delay](../../images/po-matching-delay-002.png)

### PO-abgeglichene Zeilen mit Stückkostenunterschieden in ExFlow Web

Wenn ein Dokument im Importjournal erstellt wird, mit einer Stückkostenabweichung zwischen der Bestellung und der interpretierten Rechnung, können Benutzer das Kontrollkästchen ''Test Unit Cost'' auf den Importzeilen deaktivieren und das Dokument wie gewohnt erstellen.

Später können Benutzer im Genehmigungsstatus die Seite personalisieren und die Spalte ''Unit Cost Mismatched'' in den Dokumentzeilen einfügen, um zu sehen, ob die spezifische Rechnung eine Stückkostenabweichung zwischen der Bestellung und der Rechnungszeile aufweist.

![Reason Check](../../images/approval-status-unit-cost-missmatched-001.png)

Wenn ExFlow-Benutzer diese PO-abgeglichene Rechnung zur Genehmigung in ExFlow Web erhalten, können sie auch über die Abweichung auf Zeilenebene durch die Webspalte ''Reason Check'' informiert werden.

Um diese Spalte zu ExFlow Web hinzuzufügen, gehen Sie einfach zu ExFlow Setup und klicken Sie auf ''[***Edit Web Columns***](https://docs.exflow.cloud/business-central/docs/user-manual/technical/exflow-web#edit-web-columns-in-business-central)'', um die Webspalte Reason Check hinzuzufügen.

![Reason Check](../../images/exflow-web-reason-check-002.png)

Dies würde es dem Genehmiger erleichtern zu verstehen, wo die Abweichung liegt, und er kann das Dokument anschließend in ExFlow Web bearbeiten.

![Reason Check](../../images/exflow-web-reason-check-001.png)

### Artikelnummer-Abgleichspriorität

Gehen Sie zu: **Artikelnummer-Abgleichspriorität** oder über **ExFlow Setup --> Verwandt --> Erweitert --> Artikelnummer-Abgleichspriorität**

Diese Funktion hilft dabei, die Reihenfolge zu bestimmen, in der das System versucht, importierte Rechnungen mit Artikeln und Bestellzeilen abzugleichen.

Dies kann nützlich sein, wenn beispielsweise dieselbe Artikelnummer sowohl in der Standardartikelliste als auch in der Lieferantenartikelnummer existiert. Oder wenn Rechnungszeilen importiert werden, bei denen die meisten Lieferantenartikelreferenzen sind, sollten Sie der "Artikelreferenz" eine höhere Priorität einräumen. Deaktivieren Sie Abgleichstypen, die falsche positive Übereinstimmungen liefern oder nicht verwendet werden, indem Sie sie deaktivieren.

![Item No. Matching Priority](../../images/exflow-setup-item-no-matching-prio-001.png)

Richten Sie eine Artikelnummer-Abgleichspriorität ein, um die Reihenfolge des Abgleichs festzulegen. Diese Einstellungen ermöglichen es ExFlow, fortschrittlichere Abgleiche von Artikeln und Bestellzeilen basierend auf Priorität und Abgleichstyp durchzuführen.

Verwenden Sie die Schaltflächen "Nach oben" und "Nach unten", um Abgleichstypen in der Liste nach oben oder unten zu verschieben.
Je höher ein Abgleichstyp platziert ist, desto höher ist seine Priorität im Abgleichsprozess.

Diese Funktion kann auch pro Lieferant unter [***Vendor Setup***](https://docs.exflow.cloud/business-central/docs/user-manual/business-functionality/vendor-setup#vendor-setup) durchgeführt werden.
