---
title: Einkäuferansicht 
sidebar_position: 30
hide_title: true
custom_edit_url: null
---
## Einkäuferansicht

Früher, wenn alle auftragsabgeglichenen Dokumente in das Journal importiert wurden, lag die Last der Fehlerbehandlung größtenteils beim Kreditorenbuchhaltungsteam. 

Jetzt können Einkäufer früher in den Prozess eingreifen und das Kreditorenbuchhaltungsteam unterstützen, indem sie auftragsabgeglichene Dokumente mit Fehlern in ihrem eigenen dedizierten Arbeitsbereich, der **ExFlow Auftragsabgleichsansicht für Einkäufer**, verwalten oder Eingaben dazu machen.<br/>

Nachdem Einkäufer die (potenziellen) Probleme mit ihren Aufträgen behoben haben, führt diese Funktion das Kreditorenbuchhaltungsteam bei der Lösung von Fehlern in den auftragsabgeglichenen Zeilen im Import-Journal, sodass sie ihre Arbeit reibungslos fortsetzen und den Genehmigungs- bis Buchungsprozess beschleunigen können.

## Einrichtung

### Neuer Auftragsabgleich

Die Einkäuferansicht kann nur verwendet werden, wenn der Neue Auftragsabgleich aktiviert ist. 

Lesen Sie mehr darüber unter [**Erste Schritte**](https://docs.signupsoftware.com/business-central/docs/user-manual/welcome-to-exflow/get-started) und [**Neue Auftragsabgleich-Erfahrung**](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/new-order-matching)

### Benutzereinrichtung

Gehen Sie zu: **Benutzereinrichtung**
Die Business Central Benutzer-ID muss in der Benutzereinrichtung eingetragen werden, um auf die Einkäuferansicht zugreifen zu können. <br/>

Fügen Sie auch den Einkäufercode des Benutzers hinzu, um eine gefilterte Ansicht für diesen Einkäufercode zu erhalten. Dies ist nicht zwingend erforderlich. Wenn jedoch kein Einkäufercode festgelegt ist, sieht der Einkäufer alle vorhandenen auftragsabgeglichenen Dokumentzeilen mit Fehlern.

### Berechtigung für den Benutzer

Gehen Sie zu: **Benutzerkarte**<br/>

Die Berechtigungssatz EX PURCHASER kann verwendet werden, ist aber nicht zwingend erforderlich.<br/>

Benutzer mit anderen ExFlow-Berechtigungssätzen können ebenfalls auf die Ansicht zugreifen. Beachten Sie, dass die Kombination von Ex Admin/Ex Accountant mit Ex Purchaser zu Zugangsbeschränkungen führen kann. (Wenn einer dieser Berechtigungssätze vorhanden ist, wird Ex Purchaser natürlich nicht benötigt.)

Zusätzliche Berechtigungen für den Zugriff auf ein Journal können dem Einkäufer gewährt werden. Lesen Sie mehr darüber unter 
[**Import-Journal-Berechtigung für Einkäufer**](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/purchaser-view#import-journal-permission-for-purchaser)


## Einkäufer-Rollencenter
Vom Business Central Standard *Einkäufer*-Rollencenter aus kann der Stapel *ExFlow Einkäuferansicht* gefunden werden, und der Einkäufer kann darauf klicken, um auf seinen dedizierten Arbeitsbereich zuzugreifen. 

![Einkäuferansicht](@site/static/img/media/purchaser-view-021.png)

## Einkäuferansicht

Gehen Sie zu: **ExFlow Auftragsabgleichsansicht für Einkäufer**

Einkäufer können auch nach *ExFlow Auftragsabgleichsansicht für Einkäufer* in Business Central suchen und die Ansicht öffnen. 

Die Einkäuferansicht zeigt alle Dokumentzeilen mit Fehlern an, die behandelt werden müssen. Von hier aus können Einkäufer ihre Aufträge, Wareneingänge, Warenausgänge und Preisanpassungen usw. verwalten.

| Auftragsabgleichsansicht für Einkäufer |   | 
|:-|:-|
|Zeile abgleichen|Verwenden Sie diese Funktion, um die ausgewählte Zeile abzugleichen.
|Abgleich aufheben|Verwenden Sie diese Funktion, um den Abgleich für die ausgewählte Zeile aufzuheben, damit sie mit einer anderen Auftragszeile neu abgeglichen werden kann. Geteilte Zeilen werden zurückgesetzt.
|Auftragsnr. entfernen|Verwenden Sie diese Funktion, um die Auftragsnummer aus der ausgewählten Zeile zu entfernen.
|Verifizieren|Verwenden Sie diese Funktion, um das Dokument für die ausgewählte Zeile zu verifizieren.
|Alle verifizieren|Alle Dokumentzeilen verifizieren.
|Automatisch Wareneingang/Warenausgang zuweisen|Verwenden Sie diese Funktion, um den Wareneingang/Warenausgang automatisch den Zeilen zuzuweisen.
|Auftragskarte|Detaillierte Informationen über den Auftrag oder die Rücksendung auf der Einkaufsdokumentzeile anzeigen oder bearbeiten.
|Dokumentkarte|Die Dokumentkarte für das ausgewählte Dokument anzeigen.
|*Aktion*|
|Auftragszeile verwandte Dokumente|Zeigt an, wo die ausgewählte Auftragszeile auf dem gewählten Einkaufsdokument verwendet wird.
|Gleiche Importzeile filtern/Filter aufheben|Filtern/Filter aufheben, um andere Dokumente oder Zeilen mit derselben Auftragsnummer und Auftragszeilennummer anzuzeigen.
|*Aktion – E-Mail*|
|Wareneingangserinnerungen senden|Verwenden Sie diese Funktion, um Wareneingangserinnerungen für ausgewählte Zeilen zu senden. (Nur anwendbar, wenn Dokumente abgleichen = Wareneingänge eingestellt ist)
|E-Mail-Protokoll anzeigen|Verwenden Sie diese Funktion, um Wareneingangserinnerungen für ausgewählte Zeilen zu senden.
|E-Mail an Lieferanten senden|Verwenden Sie diese Funktion, um E-Mails an Lieferanten oder andere zu senden.
|Gesendete E-Mails|Eine Liste der E-Mails anzeigen, die bezüglich dieses Dokuments gesendet wurden.
|*Verwandt*|
|Über ExFlow|Aktuelle Versionen und praktische Links erhalten
|*Verwandt - Dateien*|
|Dokumentbild anzeigen (Strg+I)|Verwenden Sie diese Funktion, um das Dokumentbild für das aktuell ausgewählte Dokument anzuzeigen.
|Importdetails anzeigen (OCR)|Verwenden Sie diese Funktion, um die OCR-Importdaten für das aktuell ausgewählte Dokument anzuzeigen.

## Importzeilen und Auftragszeilen
Die importierten Dokumentzeilen werden links angezeigt, und die entsprechenden Auftragszeilen rechts.

Einkaufsrechnungen und Einkaufsauftragszeilen werden in Schwarz angezeigt, und Gutschriften und entsprechende Rücksendeauftragszeilen werden zur Klarheit in Rot angezeigt.

### Abgeglichene Zeilen
Abgeglichene Auftragszeilen werden zur Klarheit fett dargestellt, sodass der Einkäufer leicht erkennen kann, welche Importzeile mit welcher Auftragszeile verbunden ist.

![Einkäuferansicht](@site/static/img/media/purchaser-view-001.png)


### Ausnahmen 
Im Abschnitt Ausnahmen werden verschiedene Aktionsmeldungen angezeigt. Dies sind dieselben Aktionsmeldungen, die das Kreditorenbuchhaltungsteam in Import-Journalen sieht.<br/>

Der Einkäufer kann bei Bedarf einen Ausnahme-Code hinzufügen. Der Ausnahme-Code wird verwendet, wenn der Einkäufer alles getan hat, um ein Problem mit dem auftragsabgeglichenen Dokument zu beheben. Nach dem Hinzufügen des Codes wird das Kreditorenbuchhaltungsteam darüber informiert, wie das Dokument weiter zu behandeln ist.<br/>

Der Ausnahme-Code ist nicht zwingend erforderlich. Wenn der Einkäufer beispielsweise die Stückkosten im Auftrag korrigiert, verschwindet der Fehler, und es wird kein Ausnahme-Code benötigt, da das Dokument korrigiert wird.<br/>

|Ausnahmen |   | 
|:-|:-|
|Aktionsmeldung| Die Fehlermeldung für die Dokumentzeile
|Ausnahme-Code| Fehlercode, den der Einkäufer hinzufügen kann, um dem Kreditorenbuchhaltungsteam zu signalisieren, wie die Zeile mit dem Fehler weiter zu behandeln ist
|Ausnahme-Beschreibung| Beschreibung des Ausnahme-Codes
|Ausnahme erstellt von| Zeigt den Benutzer an, der den Ausnahme-Code hinzugefügt hat
|Bearbeitungszeit/-datum| Zeigt den Benutzer an, der den Fehler behoben hat  


Lesen Sie mehr darüber unter [**Workflow**](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/purchaser-view#workflow)



### Fehlertyp
Der Einkäufer kann die Ansicht nach einem bestimmten Fehlertyp filtern, um die Verwaltung der auftragsbezogenen Fehlerzeilen zu erleichtern.
Derzeit sind folgende Fehlertypen verfügbar:
 
![Einkäuferansicht](@site/static/img/media/purchaser-view-002.png)

### Basismenge verwenden 
Zeigt alle Mengen in der Basiseinheit an.

### Zeilen mit Ausnahme-Code anzeigen
Aktivieren Sie dieses Kontrollkästchen, um Dokumentzeilen anzuzeigen, bei denen Ausnahme-Codes vom Einkäufer hinzugefügt wurden.<br/>

Die Zeilen bleiben in dieser Ansicht, solange das Dokument im Import-Journal vorhanden ist. Wenn das Dokument erstellt und zur Genehmigung gesendet wird, sind die Zeilen nicht mehr sichtbar. 

## FactBoxes
### PDF-Vorschau
Das Dokumentbild anzeigen.

### Diskussionsfeld
Verwenden Sie das Diskussionsfeld, um wie gewohnt mit Kollegen und Web-Genehmigern zu kommunizieren.

### Eingehende Dokumentdateien
Eingehendes Dokument herunterladen oder andere Dateien anhängen. 

## Workflow
Das Kreditorenbuchhaltungsteam importiert auftragsabgeglichene Dokumente, und alle diese haben irgendeine Art von auftragsabgeglichenem Fehler, z. B. Preis- oder Mengenabweichungen.<br/>

Dann werden diese Fehlerzeilen dem jeweiligen Einkäufer in der Einkäuferansicht angezeigt, damit er das Problem beheben kann, sodass das Kreditorenbuchhaltungsteam eventuelle Anpassungen vornehmen und das Dokument zur Genehmigung senden kann.<br/>

Um dies in einem Beispiel zu veranschaulichen: Wenn eine auftragsabgeglichene Rechnung interpretiert und mit einer Kostenabweichung zwischen der importierten Dokumentzeile und der Auftragszeile in das Import-Journal importiert wird, listet ExFlow alle Probleme in einer gesammelten Fehlerliste auf, um eine bessere Übersicht und schnellere Bearbeitung und Lösung zu ermöglichen.<br/>

### Import-Journal, als Kreditorenbuchhaltungsteam

Wenn das Dokument auf Zeilenebene interpretiert und mit Fehlern importiert wird, benötigt das Kreditorenbuchhaltungsteam möglicherweise Eingaben zur Lösung des auftragsbezogenen Problems.<br/>

In diesem Beispiel hat das Kreditorenbuchhaltungsteam eine auftragsabgeglichene Rechnung mit einer Aktionsmeldung in der Zeile, die auf einen Fehler hinweist. Fehler werden in der Liste Mehrere Fehlerzeilen angezeigt.<br/>

Das Kreditorenbuchhaltungsteam kann auf die Aktionsmeldung klicken, um alle vorhandenen Fehler in der Liste Mehrere Fehler anzuzeigen (anstatt Fehler einzeln wie im alten Auftragsabgleich zu erhalten).<br/>

Wenn der Einkäufercode für einen bestimmten Lieferanten festgelegt ist, wird er in das Import-Journal übernommen, und alle Fehlerzeilen sind für diesen Einkäufer in seiner Einkäuferansicht sichtbar, um sie zu bearbeiten.

 
![Einkäuferansicht](@site/static/img/media/purchaser-view-003.png)

 
![Einkäuferansicht](@site/static/img/media/purchaser-view-004.png)

Dokumente mit auftragsbezogenen Fehlern im Kopfbereich können auch manuell in der Zeile ausgelöst werden, um sie zur Verwaltung an den Einkäufer zu senden.


### Einkäuferansicht

#### Einen Auftrag korrigieren
Laut den Aktionsmeldungen in diesem Beispiel ist der Auftrag nicht freigegeben und kann nicht mit den importierten Dokumentzeilen abgeglichen werden.

In diesem Fall kann der Einkäufer die Auftragskarte aufrufen und den Auftrag empfangen und natürlich andere erforderliche Korrekturen vornehmen.

Der Einkäufer kann auch auf die Dokumentkarte im Lesemodus zugreifen, hat jedoch keine Berechtigung, die Dokumentkarte zu bearbeiten.

![Einkäuferansicht](@site/static/img/media/purchaser-view-005.png)

Dieser Auftrag wird aus der Einkäuferansicht verschwinden, da der Empfang ihn auch als verwaltet markiert, und das Kreditorenbuchhaltungsteam kann nun fortfahren, das Dokument im Import-Journal zu erstellen, da es eine perfekte Übereinstimmung war.
 
![Einkäuferansicht](@site/static/img/media/purchaser-view-006.png)



#### Wareneingangserinnerung senden 
Gehen Sie zu: **Aktionen --> E-Mail --> Wareneingangserinnerungen senden**
Wenn die Waren nicht eingegangen sind, kann der Einkäufer eine Erinnerung an Lagerarbeiter, Einkaufskoordinatoren oder andere Kollegen senden.<br/>

Lesen Sie mehr darüber unter [***E-Mail-Erinnerungen --> Nicht empfangener Auftrag***](https://docs.signupsoftware.com/business-central/docs/user-manual/approval-workflow/email-reminders)

![Einkäuferansicht](@site/static/img/media/purchaser-view-007.png)

Dies funktioniert nur für Dokumente, bei denen die Einstellung Dokumente abgleichen = Wareneingänge ist.<br/>
Das E-Mail-Protokoll kann auch unter der Funktion "Wareneingangserinnerungen senden" gefunden werden.<br/>

#### E-Mail an Lieferanten senden
Gehen Sie zu: **Aktionen --> E-Mail --> E-Mail an Lieferanten senden**

Einkäufer können E-Mails an Lieferanten aus dieser Ansicht senden. Einkäufer können auch alle gesendeten E-Mails unter der Funktion "E-Mail an Lieferanten senden" anzeigen.<br/>

Im folgenden Beispiel muss der Einkäufer Sammy den Lieferanten aufgrund falscher Stückkosten für alle Artikel kontaktieren und eine Gutschrift und eine neue Rechnung mit den korrekten Stückkosten gemäß ihrer Vereinbarung anfordern.<br/>
 
![Einkäuferansicht](@site/static/img/media/purchaser-view-008.png)
Informationen über die gesendete E-Mail werden als Chat-Nachricht im Diskussionsfeld angezeigt.<br/>Die E-Mail wird auch als PDF unter Eingehende Dokumente (Unterstützende Anhänge) angehängt.

 
![Einkäuferansicht](@site/static/img/media/purchaser-view-009.png)

Das PDF wird auch als Anhang zu ExFlow Web für die Genehmiger folgen, um alle Beteiligten von Anfang bis Ende informiert zu halten.<br/>
Der nächste Schritt für den Einkäufer besteht darin, einen Ausnahme-Code hinzuzufügen: Gutschrift.<br/>

#### Einen Ausnahme-Code hinzufügen 
Um das obige Szenario fortzusetzen, muss der Einkäufer Sammy einen Ausnahme-Code hinzufügen, um dem Kreditorenbuchhaltungsteam zu signalisieren, mit der Bearbeitung und Lösung der Dokumentprobleme fortzufahren.

 
![Einkäuferansicht](@site/static/img/media/purchaser-view-010.png)

Beim Hinzufügen eines Ausnahme-Codes wird das Feld "Ausnahme erstellt von" automatisch mit der Benutzer-ID des Benutzers ausgefüllt, der den Ausnahme-Code hinzugefügt hat.
 
![Einkäuferansicht](@site/static/img/media/purchaser-view-011.png)

Wann immer ein Einkäufer einen Ausnahme-Code hinzufügt, wird die Importzeile und die entsprechende Auftragszeile von dieser Seite gefiltert und im gefilterten Ansichtsmodus "Zeilen mit Ausnahme-Code anzeigen" zugänglich, wenn aktiviert.
 
![Einkäuferansicht](@site/static/img/media/purchaser-view-012.png)

Der Einkäufer ist nun von seiner Seite aus fertig. Mit der hinzugefügten E-Mail und dem Ausnahme-Code hat der Einkäufer das Kreditorenbuchhaltungsteam angewiesen, mit der Bearbeitung/Lösung des Dokuments im Import-Journal fortzufahren.

#### Das Dokument als Kreditorenbuchhaltungsteam im Import-Journal korrigieren
Das Kreditorenbuchhaltungsteam kann "Dokumente mit Auftragsausnahme filtern" aktivieren, um das Journal nach den vom Einkäufer hinzugefügten Ausnahme-Codes zu filtern (um die vom Einkäufer hinzugefügte Arbeit zu verfolgen) und mit der Bearbeitung des Dokuments fortzufahren.
 
![Einkäuferansicht](@site/static/img/media/purchaser-view-013.png)
Das Kreditorenbuchhaltungsteam kann sehen, dass der Einkäufer "Gutschrift" als Ausnahme-Code hinzugefügt hat und weiß nun, wie mit dem Dokument fortzufahren ist.
 
![Einkäuferansicht](@site/static/img/media/purchaser-view-014.png)

Wenn das Kreditorenbuchhaltungsteam das Dokument bearbeitet/gelöst hat, verschwindet der Auftragsabgleichsfehler in der Zeile. Das Feld "Mehrere Fehlerzeilen vorhanden" bleibt jedoch markiert, sodass das Kreditorenbuchhaltungsteam leicht auf die kleine Zeile (-) klicken kann, um die Liste Mehrere Fehler zu öffnen und die Historie anzuzeigen.<br/>
Das Kreditorenbuchhaltungsteam kann das Dokument auch für die Buchung sperren, wie im folgenden Bild gezeigt.
 
![Einkäuferansicht](@site/static/img/media/purchaser-view-015.png)

In der Seite Mehrere Fehler wird der bearbeiteten Zeile ein Zeitstempel hinzugefügt, um Informationen darüber zu geben, wann der Fehler behoben wurde.
  
![Einkäuferansicht](@site/static/img/media/purchaser-view-016.png)

Wenn der Fehler behoben ist, wird die Fehlerzeile kursiv und nicht bearbeitbar angezeigt.<br/>

Das Kreditorenbuchhaltungsteam kann auch den Kurzbefehl "Alt+M" verwenden, um die Seite Manuelle Auftragsabgleichsseite für eine bessere Übersicht aufzurufen.<br/>
 
![Einkäuferansicht](@site/static/img/media/purchaser-view-017.png)

Das Dokument kann nun erstellt werden. Wenn es erstellt wurde, wird das Dokument wie gewohnt im Genehmigungsstatus gefunden, jedoch als "für die Buchung gesperrt" markiert, bis weitere Anpassungen vorgenommen werden.

### Genehmigungsstatus 
Gehen Sie zu: Genehmigungsstatus --> Dokumentzeilen --> Mehrere Fehlerzeilen vorhanden<br/>

Im Genehmigungsstatus kann das Kreditorenbuchhaltungsteam sehen, ob ein Dokument mehrere Fehlerzeilen enthält, unter den Dokumentzeilen. Wenn die auftragsabgeglichenen Dokumentfehlerzeilen bearbeitet und gelöst wurden, folgen die Mehrere Fehlerzeilen, um die Historie anzuzeigen.<br/>

Durch Klicken auf "Mehrere Fehlerzeilen vorhanden": "Ja" wird die Liste Mehrere Fehler geöffnet, um die gelöste(n) Zeile(n) kursiv anzuzeigen.
 
![Einkäuferansicht](@site/static/img/media/purchaser-view-018.png)


#### E-Mail an Lieferanten im Genehmigungsstatus senden
Gehen Sie zu: **Verwandt --> Genehmigungsstatus --> E-Mail an Lieferanten senden/Gesendete E-Mail**<br/>

Falls erforderlich, kann das Kreditorenbuchhaltungsteam auch E-Mails an Lieferanten aus dem Genehmigungsstatus senden und das E-Mail-Protokoll anzeigen. Jede gesendete E-Mail wird als gespeicherter Anhang zusammen mit einer Chat-Nachricht gespeichert, um den Genehmiger auf dem Laufenden zu halten.

Gehen Sie zu *Gesendete E-Mail*, um das Protokoll anzuzeigen.

### Genehmigungsstatus-Historie

Die Informationen in der Liste Mehrere Fehler folgen natürlich auch den gebuchten Dokumentzeilen in der Genehmigungsstatus-Historie.

## Import-Journal-Berechtigung für Einkäufer 

Gehen Sie zu: **ExFlow Benutzerkarte --> Import-Journal-Berechtigung für Einkäufer**

Öffnen Sie die ExFlow Benutzerkarte des Einkäufers und geben Sie "Import-Journal-Berechtigung für Einkäufer" ein und markieren Sie, auf welche Journale der Einkäufer zugreifen soll.<br/>

Dies gilt nur für Business Central-Benutzer mit dem Berechtigungssatz EX PURCHASER.<br/>
Mit der erteilten Berechtigung hat der Einkäufer Lesezugriff auf das gewählte Journal, es können keine Änderungen vorgenommen werden.
  
![Einkäuferansicht](@site/static/img/media/purchaser-view-019.png)

In diesem Beispiel hat der Einkäufer Sammy nur Zugriff auf das EDC PO Import-Journal und nicht auf andere Journale.
 
![Einkäuferansicht](@site/static/img/media/purchaser-view-020.png)



