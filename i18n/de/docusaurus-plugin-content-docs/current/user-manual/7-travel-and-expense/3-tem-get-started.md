---
title: Erste Schritte mit Travel & Expense
sidebar_position: 3
hide_title: true
custom_edit_url: null
---

## Erste Schritte mit Travel & Expense

Der Administrator übernimmt die Einrichtung und die Benutzer im Hintergrund. Die meisten Aufgaben, die ein Administrator erledigen muss, werden im Vorfeld erledigt, wie z.B. das Einrichten der praktischen Elemente von Travel and Expense sowie das Erstellen von Benutzern für die Einreicher und Genehmiger.

Dieser Abschnitt hilft bei der Einrichtung von ExFlow Travel & Expense in Business Central.

Im Folgenden sind die notwendigen Schritte zur Einrichtung aufgeführt:

- **Setup-Assistent**

- **Buchungsgruppen**

- **Zahlungsgruppen**

- **Regionen**

- **Spesenkategorien**

- **Verkehrsmittel**

- **Reisesätze**

Um auf die verschiedenen Ansichten in diesem Abschnitt zuzugreifen, verwenden Sie das Suchfeld oder die **Travel and Expense Übersicht** in der oberen Leiste, um zur Ansicht "Alle erkunden" zu navigieren.

### Setup-Assistent

Der Setup-Assistent ist darauf ausgelegt, die grundlegende Einrichtung für ExFlow Travel & Expense zu vereinfachen. Dieses Benutzerhandbuch führt die Benutzer durch die Schritte und stellt sicher, dass der Einrichtungsprozess einfach und unkompliziert ist.

Gehen Sie zu: **Travel & Expense Übersicht --> Setup-Assistent**

![Ein Screenshot eines Computers, Beschreibung automatisch generiert](../../images/tem-021.png)

#### Nummernserien einrichten

Der Assistent schlägt Standardnummernserien von Business Central für Ausgaben und Kilometer vor. Anpassungen können während dieser Einrichtung vorgenommen werden.

![Ein Screenshot eines Computers, Beschreibung automatisch generiert](../../images/tem-022.png)

#### Kilometerpauschale einrichten

Legen Sie die Erstattungsmethode für Kilometer, die Buchungsgruppe und die Maßeinheit für Kilometer fest.

![Ein Screenshot eines Computers, Beschreibung automatisch generiert](../../images/tem-023.png)

#### Benachrichtigungen

Konfigurieren Sie E-Mail-Erinnerungen, um Benutzer zu informieren und ihre Aufmerksamkeit auf ausstehende Genehmigungen zu lenken.

![Ein Screenshot eines Computerbildschirms, Beschreibung automatisch generiert](../../images/tem-024.png)

#### Abschluss

Herzlichen Glückwunsch! Alle notwendigen Informationen wurden erfolgreich bereitgestellt, um die Einrichtung gemäß den Präferenzen zu beginnen.

![Ein Screenshot eines Computers, Beschreibung automatisch generiert](../../images/tem-025.png)

### Buchungsgruppen

Buchungsgruppen sind wesentliche Klassifikationen von Ausgabentypen, die es Buchhaltern ermöglichen, Finanzdaten effizient zu verwalten und zu organisieren. Wenn Mitarbeiter Ausgaben über die App oder das Webportal einreichen, müssen sie eine Spesenkategorie auswählen, die einer der vordefinierten Buchungsgruppen entspricht.

Um eine genaue Buchhaltung zu ermöglichen, ist es wichtig, geeignete Buchungsgruppen zu erstellen, die verschiedene Steuersätze und Hauptbuchkonten umfassen. Beispielsweise erfordern **Reisesätze** spezifische Buchungsgruppen für Kilometerkosten.

Bitte beachten Sie, dass nur die Finanzabteilung Zugriff auf die Konfiguration und Verwaltung dieser Buchungsgruppen hat, um sicherzustellen, dass der Prozess für Endbenutzer der App oder des Webportals reibungslos und sicher bleibt.

Gehen Sie zu: **Travel & Expense --> Übersicht --> Buchungseinrichtung --> Buchungsgruppen**

**Neu:** Um eine neue Buchungsgruppe zu erstellen.

**Code:** Dies dient als Kurzbeschreibung für die Buchungsgruppe.

Beispielsweise könnten inländische Verpflegungskosten als "Food-dom" und internationale Verpflegungskosten als "Food-int" oder sonstige Ausgaben als "Misc" bezeichnet werden.

**Beschreibung:** Geben Sie eine Beschreibung ein, z.B. "Inländische Verpflegung", "Internationale Verpflegung" oder "Sonstiges".

**Hauptbuchkontonummer:** Wählen oder geben Sie die Hauptbuchkontonummer ein.

**Allg. Geschäftsbuchungsgruppe:** Wählen oder geben Sie die allgemeine Geschäftsbuchungsgruppe ein. Dies ist Business Central Standard.

**Allg. Produktbuchungsgruppe:** Wählen oder geben Sie die allgemeine Produktbuchungsgruppe ein. Dies ist Business Central Standard.

**USt.-Geschäftsbuchungsgruppe:** Wählen oder geben Sie die USt.-Geschäftsbuchungsgruppe ein. Dies ist Business Central Standard.

**USt.-Produktbuchungsgruppe:** Wählen oder geben Sie die USt.-Produktbuchungsgruppe ein. Dies ist Business Central Standard.

**Projekt-Hauptbuchkontonummer:** Wählen oder geben Sie die Projekt-Hauptbuchkontonummer ein, dies ist mit dem Projektmodul in Business Central Standard verbunden.

![Ein Screenshot eines Computers, Beschreibung automatisch generiert](../../images/tem-026.png)

Bitte beachten Sie, dass der Assistent eine Buchungsgruppe für **Kilometer** erstellt.

### Zahlungsgruppen

Wie **Buchungsgruppen** und allgemeine Gruppen in Business Central werden **Zahlungsgruppen** verwendet, um Entitäten Hauptbuchkonten zuzuordnen. Diese Funktion ist besonders nützlich, wenn mehrere Kreditkartentypen verwaltet werden, die jeweils unterschiedliche Zahlungspostings erfordern.

In der Regel ist es ratsam, mindestens zwei **Zahlungsgruppen** einzurichten: eine für Firmenkreditkartentransaktionen und eine andere für die Erstattung von Mitarbeitern. Beachten Sie, dass pro **Mitarbeitertyp** nur eine **Zahlungsgruppe** zugewiesen werden kann. Für Firmenkreditkarten können bei Bedarf mehrere **Zahlungsgruppen** eingerichtet werden. Es besteht die Flexibilität, eine einzelne **Zahlungsgruppe** für jede **Kreditkartenvereinbarung** zu konfigurieren oder mehrere Vereinbarungen in einer Gruppe zusammenzufassen, je nach Präferenz.

Gehen Sie zu: **Travel & Expense --> Übersicht --> Buchungseinrichtung --> Zahlungsgruppen**

**Neu:** Erstellen Sie eine neue **Zahlungsgruppe**

**Code:** Dies dient als Kurzbeschreibung für die Zahlungsgruppe.

Beispielsweise "CC" für Kreditkarte oder "EMPLOYEE" für Mitarbeiter.

**Beschreibung:** Geben Sie eine Beschreibung ein.

Beispielsweise "Kreditkarte" oder "Mitarbeiter".

**Saldo-Kontotyp:** Wählen Sie einen Saldo-Kontotyp, dies ist Business Central Standard.

**Saldo-Kontonummer:** Wählen Sie eine Saldo-Kontonummer, dies ist Business Central Standard.

![Ein weißes rechteckiges Objekt mit schwarzem Rand, Beschreibung automatisch generiert](../../images/tem-027.png)

### Regionen

**Regionen** enthalten Sammlungen von Ländern, was nützlich ist, wenn eine spezifische Buchungseinrichtung pro Ländersammlung erforderlich ist. Beispielsweise kann dies nützlich sein, um die unterschiedlichen Steuersätze für die verschiedenen Regionen vorzubereiten.

Gehen Sie zu: **Travel & Expense --> Übersicht --> Einrichtung --> Regionen**

**Neu:** Erstellen Sie neue **Regionen**

**Code:** Dies dient als Kurzbeschreibung für die **Region**.

**Beschreibung:** Geben Sie eine Beschreibung für die Region ein.

**Länder hinzufügen:** Wählen Sie einen oder mehrere Ländercodes aus.

![Ein Screenshot eines Computers, Beschreibung automatisch generiert](../../images/tem-028.png)

### Spesenkategorien

Um die Spesenerfassung für Benutzer zu vereinfachen, müssen **Spesenkategorien** erstellt werden. Mit diesen Kategorien und einigen zusätzlichen Variablen können Nicht-Finanzbenutzer Ausgaben erfassen und der Finanzabteilung Informationen darüber liefern, wie die Ausgaben gebucht werden sollen.

Die erstellten **Spesenkategorien** werden den Benutzern im Webportal und in der mobilen App angezeigt, wenn sie eine Ausgabe erstellen. Benutzer müssen eine Kategorie auswählen, die ihren Kauf am besten beschreibt. Zusätzlich können sie wählen, die Ausgabe mit Kollegen zu teilen oder einen Gast hinzuzufügen, was angibt, wie die Ausgabe gebucht werden soll.

Für jede **Spesenkategorie** können mehrere Buchungseinrichtungen erstellt werden, sodass die Finanzabteilung verschiedene Ausgabenszenarien effizient verwalten kann.

![Ein Screenshot eines Computers, Beschreibung automatisch generiert](../../images/tem-029.png)

Gehen Sie zu: **Travel & Expense - Übersicht --> Buchungseinrichtung --> Spesenkategorien**

**Neu:** Erstellen Sie neue **Spesenkategorien**

**Code:** Dies dient als Kurzbeschreibung für die Kategorie, z.B. "Essen".

**Beschreibung:** Geben Sie eine Beschreibung der Kategorie ein, z.B. "Essen und Getränke". Beachten Sie, dass diese Beschreibung den Benutzern in der App oder im Webportal angezeigt wird.

Konfigurieren Sie anschließend die Buchungseinrichtung für die spezifische Kategorie.

**Priorität:** Wenn mehrere Buchungseinrichtungen existieren, bestimmt das System, welche verwendet wird, basierend auf den Prioritätsnummern. Die Buchungseinrichtung mit der höchsten Prioritätsnummer wird vom System angewendet, wenn keine der Einrichtungen genau mit der Ausgabenerfassung übereinstimmt.

**Inland:** Wenn die Buchungseinrichtung nur relevant ist, wenn sich der Ausgabenort im eigenen Land befindet.

**Region Codes:** Wenn die Buchungseinrichtung relevant ist, wenn sich der Ausgabenort außerhalb des eigenen Landes befindet, wählen Sie eine der zuvor erstellten Regionen aus.

**Mit Gästen:** Wenn die Einrichtung erfordert, dass der Benutzer einen Gast hinzufügt, aktivieren Sie **mit Gästen**.

**Buchungsgruppen:** Wählen Sie eine der zuvor erstellten **Buchungsgruppen** aus.

**Aufteilen nach Mitarbeitern:** Wenn die Einrichtung erfordert, dass die Ausgabe zwischen Mitarbeitern aufgeteilt wird, aktivieren Sie **Aufteilen nach Mitarbeitern**.

Wiederholen Sie die obigen Schritte für so viele Kategorien und Einrichtungen wie erforderlich. Je umfassender Ihr Ansatz bei der Erstellung von Kategorien und Einrichtungen ist, desto einfacher wird es für Ihre Finanzabteilung, Ausgaben zu verarbeiten.

#### Verkehrsmittel

In bestimmten Ländern gelten unterschiedliche Erstattungssätze je nach Verkehrsmittel. Beispielsweise variieren die Sätze zwischen Autos, Autos mit Anhängern und Autos mit schweren Lasten. Bei der Konfiguration der Verkehrsmittel geben Sie den Verkehrsmitteltyp an. Wenn der Erstattungssatz für bestimmte Typen konsistent ist, ist es nur notwendig, einen Typ einzurichten.

![Ein Screenshot eines schweren Fahrzeugs, Beschreibung automatisch generiert](../../images/tem-030.png)

Gehen Sie zu: **Travel & Expense - Übersicht --> Kilometerpauschale --> Verkehrsmittel**

**Neu:** Erstellen Sie ein neues **Verkehrsmittel**

**Code:** Dies dient als Kurzbeschreibung für den Verkehrsmitteltyp, z.B. "Auto".

**Beschreibung:** Geben Sie die Beschreibung des Verkehrsmitteltyps ein.

### Reisesätze

Reisesätze ermöglichen die Festlegung des Erstattungssatzes für einen Mitarbeiter basierend auf einer bestimmten Reise.

Einzelne Mitarbeiter können unterschiedliche Sätze haben. Ein Satz ohne angegebene Mitarbeiternummer ist ein allgemeiner Satz, der als Standardsatz verwendet wird.

![Ein Screenshot eines Computers, Beschreibung automatisch generiert](../../images/tem-031.png)

Gehen Sie zu: **Travel & Expense - Übersicht --> Kilometerpauschale --> Reisesätze**

**Neu:** Erstellen Sie einen neuen Reisesatz.

**Option:** Wählen Sie das zuvor erstellte **Verkehrsmittel** aus.

**Mitarbeiternummer:** Wenn keine Mitarbeiternummer angegeben ist, wird der Satz als allgemeiner Satz betrachtet.

**Startdatum:** Verwenden Sie diese Option, wenn sich ein Satz zu einem bestimmten Zeitpunkt ändern muss.

**Ab:** Beispiel: Wenn es unterschiedliche Satzregeln gibt, abhängig von der Anzahl der gefahrenen Meilen oder Kilometer des Mitarbeiters.

**Satz:** Der Satz für die spezifische Regel.

Es ist wichtig, den Erstattungshandler in **Einrichtung (TEM)** einzurichten.

Gehen Sie zu: **Einrichtung (TEM) --> Kilometerpauschale**

![Ein weißer Hintergrund mit schwarzem und blauem Text, Beschreibung automatisch generiert](../../images/tem-032.png)

**Kilometerpauschalen-Erstattungshandler:** Wenn die Erstattung über Business Central abgewickelt werden soll, wählen Sie **An Mitarbeiterkonten buchen**, wenn die Erstattung im Gehaltssystem abgewickelt wird, wählen Sie **Export nach XML**.

<br/>


## Einrichtung von Kreditkarten

Kreditkartenvereinbarungen sind nützliche Werkzeuge, um Ausgaben automatisch mit den entsprechenden Kreditkartenabrechnungen abzugleichen, sobald diese eingegangen sind. Nach der Einrichtung spart dies der Buchhaltungsabteilung Zeit und kann durch die Verwendung der Funktion **Automatischer Transaktionsimport** weiter verbessert werden.

### Vereinbarungen

Gehen Sie zu: **Travel & Expense - Übersicht --> Firmenkarten --> Vereinbarungen**

**Neu:** Erstellen Sie eine neue Vereinbarung.

**Code:** Geben Sie einen Code für die Vereinbarung ein, der eine Kurzbeschreibung zur einfachen Identifizierung sein sollte.

**Beschreibung:** Geben Sie eine Beschreibung der Vereinbarung ein.

**Kartenmarke:** Wählen Sie eine **Kartenmarke** aus der Liste.

**Zahlungsgruppe:** Wählen Sie eine **Zahlungsgruppe** aus den zuvor erstellten aus.

**Kartentransaktionen:** Wählen Sie die Methode für den Import von Kreditkartentransaktionen

- **Manuelle Eingabe/Dateiimport:** Wählen Sie diese Option, wenn die Transaktion manuell eingegeben oder mit einer Excel-Datei importiert wird.
- **Von Kontoauszug:** Kreditkartentransaktionen werden aus dem Kontoauszug in Business Central importiert.
- **Von Bankabstimmung:** Kreditkartentransaktionen werden aus der Bankabstimmung in Business Central importiert.
- **Automatisch von SEB-Karte:** Kreditkartentransaktionen werden aus der SEB-Kartenintegration importiert.

![Ein Screenshot eines Computers, Beschreibung automatisch generiert](../../images/tem-033.png)

Dies ist eine Liste aller Kreditkarten, die mit dieser spezifischen Vereinbarung verbunden sind. Von hier aus können mehrere Karten aus **Firmenkreditkarten** mit dieser spezifischen **Kreditkartenvereinbarung** verknüpft werden.

Unter **Verknüpfte Karten** --> **Karten** --> **Karten hinzufügen**

Wählen Sie eine spezifische Kreditkarte aus. Um mehrere Karten gleichzeitig auszuwählen, klicken Sie auf eine Kreditkartenzeile und drücken Sie Shift+Pfeil nach unten auf der Tastatur --> **OK**.

### Firmenkreditkarten

Durch Öffnen der Ansicht Firmenkreditkarten werden alle Karten angezeigt, die automatisch aus Transaktionen erstellt oder manuell eingegeben wurden. Von dieser Ansicht aus gibt es zwei Optionen, um eine neue Kreditkarte zu erstellen:

1. **Automatischer Transaktionsimport**: Wenn diese Funktion eingerichtet ist, werden Firmenkreditkarten basierend auf der Kartennummer und dem Karteninhabernamen aus den Transaktionen automatisch erstellt.
2. **Manuelle Eingabe**: Wenn der automatische Import nicht bevorzugt wird, können **Firmenkreditkarten** manuell erstellt werden.

![Ein Screenshot eines Computers, Beschreibung automatisch generiert](../../images/tem-034.png)

#### Neue Kreditkarte manuell erstellen

Gehen Sie zu: **Firmenkreditkarten (TEM)**

**Neu:** Erstellen Sie eine neue Karte

**Kartennummer:** Geben Sie die Kartennummer ein.

**Name des Karteninhabers:** Geben Sie den Namen der Person ein, die die Karte verwendet.

**Mitarbeiternummer zugewiesen:** Wählen Sie den Mitarbeiter aus der Liste aus.

**Kreditkartenvereinbarung:** Wählen Sie die entsprechende Vereinbarung für die Firmenkarte aus.

Die Firmenkreditkarte wurde registriert, muss jedoch aktiviert werden, bevor sie verwendet werden kann.

#### *Kreditkarte aktivieren*

Damit einer Kreditkarte der Status **Aktiv** zugewiesen werden kann, muss die Karte einer Kreditkartenvereinbarung und einem Mitarbeiter zugewiesen sein.

Wählen Sie eine **Firmenkreditkarte** aus der Liste und **Aktivieren**. Die **Firmenkreditkarte** wurde nun aktiviert.

#### Kartenverknüpfungen vorschlagen

Wenn eine oder mehrere **Firmenkreditkarten** nicht mit einem **Mitarbeiter** verknüpft wurden, führt Sie diese Funktion durch die Karten und Mitarbeiter, die das System verknüpfen möchte.

Gehen Sie zu: **Firmenkarten** --> **Neu**

### Excel-Importdefinitionen

Ordnen Sie Excel-Dateien zu, um den Import von Kreditkartentransaktionen zu ermöglichen, die dann zur Verarbeitung an die Karteninhaber gesendet werden können.

Gehen Sie zu: **Excel-Importdefinition (TEM)**

**Neu:** Erstellen Sie eine neue Importdefinition

![Travel and Expense](../../images/tem-035.png)

|Excel-Importdefinition ||
|:-|:-| 
|**Code:** |Definieren Sie einen Code für die Importdefinition
|**Beschreibung:**| Geben Sie eine Beschreibung für die Importdefinition ein
|**Kopfzeile vor Transaktionen:**| Aktivieren Sie diese Option, wenn es Kopfzeilen in der Excel-Datei gibt.
|**Beschriftung für die erste Kopfzeilenspalte:**| Geben Sie die Zeilennummer ein, ab der die Transaktionszeilen beginnen.
|**Datumsformat**:| Wählen Sie das Datumsformat der Datei aus.
|**Zahlung wird als negativer Betrag angezeigt**:| Wenn der Betrag in der Datei negativ ist, aktivieren Sie diesen Parameter.

<br/>

#### Felder den Excel-Spalten zuordnen

In diesem Abschnitt geben Sie an, welche Spalten in der Excel-Datei den Feldern in ExFlow Travel & Expense zugeordnet werden sollen.

Beispiel: Wenn die Kartennummer in Spalte D der Excel-Datei steht, geben Sie D im Feld **Kartennummer** ein.

![Travel and Expense](../../images/tem-036.png)

|Felder den Excel-Spalten zuordnen ||
|:-|:-| 
|**Kartennummer:**| Definieren Sie die Spalte für die Kreditkartennummer.
|**Karteninhaber:** |Definieren Sie die Spalte für den Karteninhaber.
|**Transaktionsdatum**:| Definieren Sie die Spalte für das Transaktionsdatum.
|**Transaktionsbetrag:**| Definieren Sie die Spalte für den Transaktionsbetrag.
|**Währung:** |Definieren Sie die Spalte für die Währung, nicht obligatorisch.
|**Abrechnungsbetrag:**| Definieren Sie die Spalte für den Abrechnungsbetrag.
|**Beschreibung**:| Definieren Sie die Spalte für die Transaktionsbeschreibung.
|**Land:** |Definieren Sie die Spalte für das Land, nicht obligatorisch.
|**MCC:**| Definieren Sie die Spalte für den MCC, nicht obligatorisch.
|**MCC-Beschreibung:**| Definieren Sie die Spalte für die MCC-Beschreibung, nicht obligatorisch.
|**Eindeutige Referenz:**| Definieren Sie die Spalte für die eindeutige Referenz, nicht obligatorisch.
|**Rechnungsnummer:**| Definieren Sie die Spalte für die Rechnungsnummer, nicht obligatorisch.

## Einrichtung von Tagegeldern

Tagegelder sind tägliche Pauschalen, die Mitarbeitern zur Deckung der täglichen Ausgaben während Geschäftsreisen gewährt werden. Sie vereinfachen den Prozess der Ausgabenerfassung, indem sie einen festen Betrag bieten.

### Einrichtung
Berechnungsregeln werden auf der Seite Tagegeld-Einrichtung konfiguriert (nur in der Pro-Edition verfügbar)<br/>
Gehen Sie zu: **Einrichtung** --> **Berechnungsregel ändern**<br/>

![Ein schwarz-weißes Logo, Beschreibung automatisch generiert](../../images/tem-121.png)<br/>

Wählen Sie die Berechnungsregel aus.<br/>
Gehen Sie zu: **Tagegeld-Berechnungsregel ändern**<br/>
![Ein schwarz-weißes Logo, Beschreibung automatisch generiert](../../images/tem-122.png)<br/>

Die Regeln zur Berechnung von Tagegeldern variieren je nach Land, und derzeit unterstützen wir drei Berechnungsregelsets: Schwedisch, Finnisch und eine allgemeine „Tagespauschale“-Regel. Abhängig von der ausgewählten Regel stehen verschiedene Einstellungen zur Konfiguration zur Verfügung.