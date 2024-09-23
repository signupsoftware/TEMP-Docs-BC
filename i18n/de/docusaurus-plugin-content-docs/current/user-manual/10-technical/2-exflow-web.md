---
title: ExFlow Web 
sidebar_position: 2
hide_title: true
---

## ExFlow Web

<br/>
Interessiert daran, alles über ExFlow Web zu lesen und zu lernen? <br/> <br/>  

[***Alle notwendigen Informationen über ExFlow Web finden Sie hier!***](https://docs.exflow.cloud/web) <br/><br/> 

### Web-Spalten in Business Central bearbeiten
Verwenden Sie die Funktion **Web-Spalten bearbeiten**, um ExFlow Web-Spalten zu verwalten. <br/>

Gehen Sie zu **ExFlow Setup --> Web-Spalten bearbeiten** 

![ExFlow Setup](../../images/exflow-setup-edit-web-columns.png) 

|Web-Spalten bearbeiten||
|:-|:-|
|**Spalte hinzufügen**| Eine neue Spalte zu ExFlow Web hinzufügen
|**Spalte ändern**| Eine aktuelle ExFlow Web-Spalte aktualisieren
|**ExFlow-Spalten**| Änderungen an ExFlow Web-Spalten verwalten

![ExFlow Setup](../../images/exflow-setup-edit-web-columns-001.png)

Web-Spalten, die existieren und auf ExFlow Web sichtbar sind, haben sowohl das Kästchen „Aktuelle Sichtbarkeit“ als auch das Kästchen „Existiert“ angekreuzt.

Wenn eine Spalte für die Web-Genehmiger hinzugefügt werden muss, wählen Sie einfach den gewünschten Web-Spalten-Code aus und klicken Sie auf „Spalte hinzufügen“.

Es ist möglich, eine vorhandene Web-Spalte auf ExFlow Web auszublenden, indem Sie „Versteckt“ wählen und dann auf „Spalte ändern“ klicken. In diesem Beispiel wird das Kästchen „Aktuelle Sichtbarkeit“ für die Spalte „Projektaufgabe“ dann deaktiviert.

![ExFlow Setup](../../images/exflow-setup-edit-web-columns-002.png)

### ExFlow-Spalten

Gehen Sie zu **ExFlow Setup --> Web-Spalten bearbeiten --> ExFlow-Spalten** 

![ExFlow Setup](../../images/exflow-setup-exflow-columns-001.png)

Öffnen Sie ExFlow-Spalten und bearbeiten Sie die Liste, falls Änderungen an den Spalten vorgenommen werden müssen.

![ExFlow Setup](../../images/exflow-setup-exflow-columns-002.png)

|ExFlow-Spalten||
|:-|:-|
|**ID**| Gibt die Spalten-ID an.
|**Code**| Gibt den Code an.
|**Dimension**| Eine Dimension aus der Hauptbuchkonfiguration kann als ExFlow Web-Spalte hinzugefügt werden.
|**Quelle**| Kopie des Code-Werts.
|**Format** |Das Format, in dem der Wert und die Beschreibung an ExFlow Web gesendet werden.
|**Automatische Vervollständigung verwenden**| Angeklicktes Kästchen nimmt den angegebenen Datentyp. Nicht angeklicktes Kästchen = Freitext wie eine Beschreibung.
|**Sortierreihenfolge**| Sortierreihenfolge für alle Web-Spalten (außer bei Zeilentypen).
|**Dokumentanzeige-Ausdruck**| Kann bestimmen, ob die Spalte für bestimmte Dokumenttypen verwendbar sein soll.
|**Zeilenanzeige-Ausdruck**| Teilt ExFlow Web mit, dass es sich um einen Zeilentyp handelt und welcher Zeilentyp es ist.
|**Datentyp**| Wenn es sich um ein Datum oder eine Dezimalzahl handelt, die in ExFlow Web angezeigt werden soll, muss dies einen Wert haben (Beschreibung hat „system.String“).
|**Ist Autofill-Auslöser**| Wählen Sie aus, ob z.B. ein ausgewähltes Konto Updates von Dimensionswerten aus den Standard-Business Central-Kontoeinstellungen senden soll (Standard-BC). Es kann auch auf „Inaktiv“ und „Angepasst“ gesetzt werden.
|**Wert beim Zeilenaufteilen kopieren**| Gibt an, ob Werte beim Aufteilen einer Zeile kopiert werden sollen.
|**MwSt.-Produktbuchungsgruppe von Nr. aktualisieren**| Gibt an, ob die MwSt.-Produktbuchungsgruppe von der Nr.-Karte übernommen werden soll.
|**Allg.-Produktbuchungsgruppe von Nr. aktualisieren**| Gibt an, ob die Allg.-Produktbuchungsgruppe von der Nr.-Karte übernommen werden soll.
|**Spalte sperren**| Gibt an, ob Werte gesperrt und nicht bearbeitbar sein sollen.
|**Anzahl der zu sendenden Werte**| Wird zur Leistungsverbesserung verwendet. Wenn 100 ausgewählt ist, sendet ExFlow nur die ersten 100 Werte gemäß aktuellem Filter.
