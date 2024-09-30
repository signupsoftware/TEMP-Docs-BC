---
title: Erste Schritte mit Reise- und Spesenmanagement
sidebar_position: 3
hide_title: true
custom_edit_url: null
---
 ## Erste Schritte mit Reise- und Spesenmanagement 

Der Administrator übernimmt die Einrichtung und die Benutzerverwaltung im Hintergrund. Die meisten Aufgaben, die ein Administrator erledigen muss, fallen zu Beginn an, wie z.B. das Einrichten der praktischen Elemente des Reise- und Spesenmanagements sowie das Erstellen von Benutzern für die Einreicher und Genehmiger.

Dieser Abschnitt unterstützt bei der Einrichtung des ExFlow Reise- und Spesenmanagements in Business Central.

Nachfolgend sind die notwendigen Schritte zur Einrichtung aufgeführt:

- **Einrichtungsassistent**

- **Buchungsgruppen**

- **Zahlungsgruppen**

- **Regionen**

- **Spesenkategorien**

- **Verkehrsmittel**

- **Reisesätze**

Um die verschiedenen Ansichten in diesem Abschnitt zu erreichen, verwenden Sie das Suchfeld oder die **Reise- und Spesenmanagement-Übersicht** in der oberen Leiste, um zur Ansicht "Alle erkunden" zu navigieren.

### Einrichtungsassistent

Der Einrichtungsassistent ist darauf ausgelegt, die grundlegende Einrichtung für ExFlow Reise- und Spesenmanagement zu vereinfachen. Dieses Benutzerhandbuch führt die Benutzer durch die Schritte und stellt sicher, dass der Einrichtungsprozess einfach und unkompliziert ist.

Gehen Sie zu: **Reise- & Spesenübersicht --> Einrichtungsassistent**

![Ein Screenshot eines Computers, Beschreibung automatisch generiert](@site/static/img/media/tem-021.png)

#### Nummernserien einrichten

Der Assistent schlägt Standardnummernserien von Business Central für Ausgaben und Kilometer vor. Anpassungen können während dieser Einrichtung vorgenommen werden.

![Ein Screenshot eines Computers, Beschreibung automatisch generiert](@site/static/img/media/tem-022.png)

#### Kilometerabrechnung einrichten

Legen Sie die Erstattungsmethode für Kilometer, die Buchungsgruppe und die Kilometer-Einheit fest.

![Ein Screenshot eines Computers, Beschreibung automatisch generiert](@site/static/img/media/tem-023.png)

#### Benachrichtigungen

Konfigurieren Sie E-Mail-Erinnerungen, um Benutzer zu informieren und ihre Aufmerksamkeit auf ausstehende Genehmigungen zu lenken.

![Ein Screenshot eines Computerbildschirms, Beschreibung automatisch generiert](@site/static/img/media/tem-024.png)

#### Abschluss

Herzlichen Glückwunsch! Alle notwendigen Informationen wurden erfolgreich bereitgestellt, um die Einrichtung gemäß den Präferenzen zu beginnen.

![Ein Screenshot eines Computers, Beschreibung automatisch generiert](@site/static/img/media/tem-025.png)

### Buchungsgruppen

Buchungsgruppen sind wesentliche Klassifikationen von Ausgabentypen, die es Buchhaltern ermöglichen, finanzielle Daten effizient zu verwalten und zu organisieren. Wenn Mitarbeiter Ausgaben über die App oder das Webportal einreichen, müssen sie eine Spesenkategorie auswählen, die einer der vordefinierten Buchungsgruppen entspricht.

Um eine genaue Buchhaltung zu ermöglichen, ist es wichtig, geeignete Buchungsgruppen zu erstellen, die verschiedene Steuersätze und Hauptbuchkonten umfassen. Beispielsweise erfordern **Reisesätze** spezifische Buchungsgruppen für Kilometerabrechnungen.

Bitte beachten Sie, dass nur die Finanzabteilung Zugriff auf die Konfiguration und Verwaltung dieser Buchungsgruppen hat, um sicherzustellen, dass der Prozess für die Endbenutzer der App oder des Webportals reibungslos und sicher bleibt.

Gehen Sie zu: **Reise- & Spesen --> Übersicht --> Buchungseinrichtung --> Buchungsgruppen**

**Neu:** Um eine neue Buchungsgruppe zu erstellen.

**Code:** Dies dient als Kurzbeschreibung für die Buchungsgruppe.

Zum Beispiel könnten inländische Verpflegungskosten als "Food-dom" und internationale Verpflegungskosten als "Food-int" oder sonstige Ausgaben als "Misc" bezeichnet werden.

**Beschreibung:** Geben Sie eine Beschreibung ein, z.B. "Inländische Verpflegung", "Internationale Verpflegung" oder "Sonstiges".

**Hauptbuchkontonummer:** Wählen oder geben Sie die Hauptbuchkontonummer ein.

**Allg. Geschäftsbuchungsgruppe:** Wählen oder geben Sie die allgemeine Geschäftsbuchungsgruppe ein. Dies ist Business Central Standard.

**Allg. Produktbuchungsgruppe:** Wählen oder geben Sie die allgemeine Produktbuchungsgruppe ein. Dies ist Business Central Standard.

**USt.-Geschäftsbuchungsgruppe:** Wählen oder geben Sie die USt.-Geschäftsbuchungsgruppe ein. Dies ist Business Central Standard.

**USt.-Produktbuchungsgruppe:** Wählen oder geben Sie die USt.-Produktbuchungsgruppe ein. Dies ist Business Central Standard.

**Job-Hauptbuchkontonummer:** Wählen oder geben Sie die Job-Hauptbuchkontonummer ein, dies ist mit dem Projektmodul in Business Central Standard verbunden.

![Ein Screenshot eines Computers, Beschreibung automatisch generiert](@site/static/img/media/tem-026.png)

Bitte beachten Sie, dass der Assistent eine Buchungsgruppe für **Kilometer** erstellt.

### Zahlungsgruppen

Ähnlich wie **Buchungsgruppen** und allgemeine Gruppen in Business Central werden **Zahlungsgruppen** verwendet, um Entitäten Hauptbuchkonten zuzuordnen. Diese Funktion ist besonders nützlich, wenn mehrere Kreditkartentypen verwaltet werden, die jeweils unterschiedliche Zahlungserfassungen erfordern.

In der Regel ist es ratsam, mindestens zwei **Zahlungsgruppen** einzurichten: eine für Firmenkreditkartentransaktionen und eine andere für die Erstattung von Mitarbeitern. Beachten Sie, dass pro **Mitarbeitertyp** nur eine **Zahlungsgruppe** zugewiesen werden kann. Für Firmenkreditkarten können bei Bedarf mehrere **Zahlungsgruppen** eingerichtet werden. Es besteht die Flexibilität, eine einzelne **Zahlungsgruppe** für jede **Kreditkartenvereinbarung** zu konfigurieren oder mehrere Vereinbarungen in einer Gruppe zusammenzufassen, je nach Präferenz.

Gehen Sie zu: **Reise- & Spesen --> Übersicht --> Buchungseinrichtung --> Zahlungsgruppen**

**Neu:** Erstellen Sie eine neue **Zahlungsgruppe**

**Code:** Dies dient als Kurzbeschreibung für die Zahlungsgruppe.

Zum Beispiel "CC" für Kreditkarte oder "MITARBEITER" für Mitarbeiter

**Beschreibung**: Geben Sie eine Beschreibung ein.

Zum Beispiel "Kreditkarte" oder "Mitarbeiter"

**Saldo-Kontoart:** Wählen Sie eine Saldo-Kontoart, dies ist Business Central Standard.

**Saldo-Kontonummer:** Wählen Sie eine Saldo-Kontonummer, dies ist Business Central Standard.

![A white rectangular object with a black border Description automatically generated](@site/static/img/media/tem-027.png)

### Regionen

**Regionen** enthalten Sammlungen von Ländern, was nützlich ist, wenn eine spezifische Buchungseinrichtung pro Ländersammlung erforderlich ist. Zum Beispiel kann dies nützlich sein, um die unterschiedlichen Steuersätze für die verschiedenen Regionen vorzubereiten.

Gehen Sie zu: **Travel & Expense -- Übersicht --> Einrichtung --> Regionen**

**Neu**: Neue **Regionen** erstellen

**Code**: Dies dient als Kurzbeschreibung für die **Region**.

**Beschreibung:** Geben Sie eine Beschreibung für die Region ein.

**Länder hinzufügen:** Wählen Sie einen oder mehrere Ländercodes aus.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-028.png)

### Spesenkategorien

Um die Spesenerfassung für Benutzer zu vereinfachen, müssen **Spesenkategorien** erstellt werden. Mit diesen Kategorien und einigen zusätzlichen Variablen können Nicht-Finanz-Benutzer Ausgaben erfassen und der Finanzabteilung Informationen darüber liefern, wie die Ausgaben gebucht werden sollen.

Die erstellten **Spesenkategorien** werden den Benutzern im Webportal und in der mobilen App angezeigt, wenn sie eine Ausgabe erfassen. Benutzer müssen eine Kategorie auswählen, die ihren Kauf am besten beschreibt. Zusätzlich können sie wählen, die Ausgabe mit Kollegen zu teilen oder einen Gast hinzuzufügen, was angibt, wie die Ausgabe gebucht werden soll.

Für jede **Spesenkategorie** können mehrere Buchungseinrichtungen eingerichtet werden, wodurch die Finanzabteilung verschiedene Ausgabenszenarien effizient verwalten kann.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-029.png)

Gehen Sie zu: **Travel & Expense -- Übersicht --> Buchungseinrichtung --> Spesenkategorien**

**Neu**: Neue **Spesenkategorien** erstellen

**Code:** Der kurz angibt, wofür die Kategorie ist, zum Beispiel: "Essen"

**Beschreibung**: Geben Sie eine Beschreibung der Kategorie ein, zum Beispiel "Essen und Getränke". Beachten Sie, dass diese Beschreibung den Benutzern in der App oder im Webportal angezeigt wird.

Konfigurieren Sie als nächstes die Buchungseinrichtung für die spezifische Kategorie.

**Priorität:** Wenn mehrere Buchungseinrichtungen existieren, bestimmt das System, welche verwendet wird, basierend auf den Prioritätsnummern. Die Buchungseinrichtung mit der höchsten Prioritätsnummer wird vom System angewendet, wenn keine der Einrichtungen genau mit der Ausgabenerfassung übereinstimmt.

**Inland**: Wenn die Buchungseinrichtung nur relevant ist, wenn der Ausgabenort im eigenen Land liegt.

**Region Codes**: Wenn die Buchungseinrichtung relevant ist, wenn der Ausgabenort außerhalb des eigenen Landes liegt, wählen Sie eine der zuvor erstellten Regionen aus.

**Mit Gästen**: Wenn die Einrichtung erfordert, dass der Benutzer einen Gast hinzufügt, markieren Sie **mit Gästen**.

**Buchungsgruppen**: Wählen Sie eine der zuvor erstellten **Buchungsgruppen** aus.

**Aufteilen nach Mitarbeitern:** Wenn die Einrichtung erfordert, dass die Ausgabe zwischen Mitarbeitern aufgeteilt wird, markieren Sie **Aufteilen nach Mitarbeitern**.

Wiederholen Sie die obigen Schritte für so viele Kategorien und Einrichtungen wie erforderlich. Je umfassender Ihr Ansatz zur Erstellung von Kategorien und Einrichtungen ist, desto einfacher wird es für Ihre Finanzabteilung, Ausgaben zu bearbeiten.

#### Verkehrsmittel

In bestimmten Ländern gelten unterschiedliche Erstattungssätze je nach Transportmittel. Zum Beispiel variieren die Sätze zwischen Autos, Autos mit Anhängern und Autos mit schweren Lasten. Bei der Konfiguration der Verkehrsmittel geben Sie den Transporttyp an. Wenn der Erstattungssatz für bestimmte Typen konsistent ist, muss nur ein Typ eingerichtet werden.

![A screenshot of a car heavy vehicle Description automatically generated](@site/static/img/media/tem-030.png)

Gehen Sie zu: **Travel & Expense -- Übersicht --> Kilometerpauschale --> Verkehrsmittel**

**Neu**: Ein neues **Verkehrsmittel** erstellen

**Code:** Der kurz angibt, wofür der Transporttyp ist, zum Beispiel: "Auto".

**Beschreibung:** Geben Sie die Beschreibung des Transporttyps ein.

### Reisesätze

Reisesätze ermöglichen die Festlegung des Erstattungssatzes für einen Mitarbeiter basierend auf einer spezifischen Reise.

Einzelne Mitarbeiter können unterschiedliche Sätze haben. Ein Satz ohne angegebene Mitarbeiternummer ist ein allgemeiner Satz, der als Standardsatz verwendet wird.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-031.png)

Gehen Sie zu: **Travel & Expense -- Übersicht --> Kilometerpauschale --> Reisesätze**

**Neu:** Neuen Reisesatz erstellen.

**Option**: Wählen Sie das zuvor erstellte **Verkehrsmittel** aus.

**Mitarbeiternummer**: Wenn keine Mitarbeiternummer angegeben ist, wird der Satz als allgemeiner Satz betrachtet.

**Startdatum**: Verwenden Sie diese Option, wenn sich ein Satz zu einem bestimmten Zeitpunkt ändern muss.

**Ab:** Beispiel: Wenn es unterschiedliche Satzregeln gibt, abhängig von der Anzahl der gefahrenen Meilen oder Kilometer des Mitarbeiters.

**Satz**: Der Satz für die spezifische Regel.

Es ist wichtig, den Erstattungshandler in **Einrichtung (TEM)** einzurichten.

Gehen Sie zu: **Einrichtung (TEM) --> Kilometerpauschale**

![A white background with black and blue text Description automatically generated](@site/static/img/media/tem-032.png)

**Kilometerpauschale-Erstattungshandler:** Wenn die Erstattung über Business Central abgewickelt werden soll, wählen Sie **An Mitarbeiterkonto buchen**, wenn die Erstattung im Lohnabrechnungssystem abgewickelt wird, wählen Sie **Export zu XML**.

## Kreditkarte einrichten

Kreditkartenvereinbarungen sind nützliche Werkzeuge, um Ausgaben automatisch mit den entsprechenden Kreditkartenabrechnungen abzugleichen, wenn diese eingehen. Nach der Einrichtung spart dies der Buchhaltungsabteilung Zeit und kann durch die Verwendung der **Automatischen Transaktionsimport**-Funktion weiter verbessert werden.

### Vereinbarungen

Gehen Sie zu: **Reise- & Spesenübersicht --> Firmenkarten --> Vereinbarungen**

**Neu:** Erstellen Sie eine neue Vereinbarung.

**Code:** Geben Sie einen Code für die Vereinbarung ein, der eine Kurzbeschreibung sein sollte, um eine einfache Identifizierung zu ermöglichen.

**Beschreibung:** Geben Sie eine Beschreibung der Vereinbarung ein.

**Kartenmarke**: Wählen Sie eine **Kartenmarke** aus der Liste.

**Zahlungsgruppe:** Wählen Sie **Zahlungsgruppe** aus den zuvor erstellten Gruppen.

**Kartentransaktionen:** Wählen Sie die Methode für den Import von Kreditkartentransaktionen

-   **Manuelle Eingabe/Dateiimport:** Wählen Sie diese Option, wenn die Transaktion manuell eingegeben oder mit einer Excel-Datei importiert wird.

-   **Vom Kontoauszug:** Kreditkartentransaktionen werden für den Kontoauszug in Business Central importiert.

-   **Von der Bankabstimmung:** Kreditkartentransaktionen werden für die Bankabstimmung in Business Central importiert.

-   **Automatisch von SEB-Karte:** Kreditkartentransaktionen werden von der SEB-Kartenintegration importiert.

![Ein Screenshot eines Computers, Beschreibung automatisch generiert](@site/static/img/media/tem-033.png)

Dies ist eine Liste aller Kreditkarten, die mit dieser speziellen Vereinbarung verbunden sind. Von hier aus können mehrere Karten von **Firmenkreditkarten** mit dieser speziellen **Kreditkartenvereinbarung** verbunden werden.

Unter **Verbundene Karten** --> **Karten** --> **Karten hinzufügen**

Wählen Sie eine spezifische Kreditkarte aus. Um mehrere Karten gleichzeitig auszuwählen, klicken Sie auf eine Kreditkartenzeile und drücken Sie Shift+Pfeil nach unten auf der Tastatur --> **OK**.

### Firmenkreditkarten

Durch Öffnen der Ansicht Firmenkreditkarten werden alle automatisch aus Transaktionen erstellten oder manuell eingegebenen Karten sichtbar. Von dieser Ansicht aus gibt es zwei Möglichkeiten, eine neue Kreditkarte zu erstellen:

1.  **Automatischer Transaktionsimport**: Wenn diese Funktion eingerichtet ist, werden Firmenkreditkarten automatisch basierend auf der Kartennummer und dem Namen des Karteninhabers aus den Transaktionen erstellt.

2.  **Manuelle Eingabe**: Wenn der automatische Import nicht bevorzugt wird, können **Firmenkreditkarten** manuell erstellt werden.

![Ein Screenshot eines Computers, Beschreibung automatisch generiert](@site/static/img/media/tem-034.png)

#### Neue Kreditkarte manuell erstellen

Gehen Sie zu: **Firmenkreditkarten (TEM)**

**Neu**: Erstellen Sie eine neue Karte

**Kartennummer**: Geben Sie die Kartennummer ein.

**Name des Karteninhabers**: Geben Sie den Namen der Person ein, die die Karte verwendet.

**Mitarbeiternummer zugewiesen**: Wählen Sie den Mitarbeiter aus der Liste aus.

**Kreditkartenvereinbarung**: Wählen Sie die entsprechende Vereinbarung für die Firmenkarte aus.

Die Firmenkreditkarte wurde registriert, muss jedoch aktiviert werden, bevor sie verwendet werden kann.

#### *Kreditkarte aktivieren*

Damit einer Kreditkarte der Status **Aktiv** zugewiesen werden kann, muss die Karte einer Kreditkartenvereinbarung und einem Mitarbeiter zugewiesen worden sein.

Wählen Sie eine **Firmenkreditkarte** aus der Liste und **Aktivieren**. Die **Firmenkreditkarte** wurde nun aktiviert.

#### Kartenverknüpfungen vorschlagen

Wenn eine oder mehrere **Firmenkreditkarten** nicht mit einem **Mitarbeiter** verknüpft wurden, führt Sie diese Funktion durch die Karten und Mitarbeiter, die das System zuordnen möchte.

Gehen Sie zu: **Firmenkarten** --> **Neu**

### Excel-Importdefinitionen

Ordnen Sie Excel-Dateien zu, um den Import von Kreditkartentransaktionen zu ermöglichen, die dann zur Verarbeitung an die Karteninhaber gesendet werden können.

Gehen Sie zu: **Excel-Importdefinition (TEM)**

**Neu:** Erstellen Sie eine neue Importdefinition

**Code:** Definieren Sie einen Code für die Importdefinition

**Beschreibung:** Geben Sie eine Beschreibung für die Importdefinition ein

**Kopfzeile vor Transaktionen:** Aktivieren Sie diese Option, wenn es Kopfzeilen in der Excel-Datei gibt.

**Beschriftung für die erste Kopfzeilenspalte:** Geben Sie die Zeilennummer ein, ab der die Transaktionszeilen beginnen.

**Datumsformat**: Wählen Sie das Datumsformat der Datei

**Zahlung wird als negativer Betrag angezeigt**: Wenn der Betrag in der Datei negativ ist, aktivieren Sie diesen Parameter.

![Reise und Spesen](@site/static/img/media/tem-035.png)

#### Felder den Excel-Spalten zuordnen

In diesem Abschnitt geben Sie an, welche Spalten in der Excel-Datei den Feldern im ExFlow Travel & Expense Management zugeordnet werden sollen.

Beispiel: Wenn sich die Kartennummer in Spalte D der Excel-Datei befindet, geben Sie D im Feld **Kartennummer** ein.

![Reise und Spesen](@site/static/img/media/tem-036.png)

**Kartennummer:** Definieren Sie die Spalte für die Kreditkartennummer.

**Karteninhaber:** Definieren Sie die Spalte für den Karteninhaber.

**Transaktionsdatum**: Definieren Sie die Spalte für das Transaktionsdatum.

**Transaktionsbetrag:** Definieren Sie die Spalte für den Transaktionsbetrag.

**Währung:** Definieren Sie die Spalte für die Währung, nicht obligatorisch.

**Abrechnungsbetrag:** Definieren Sie die Spalte für den Abrechnungsbetrag.

**Beschreibung**: Definieren Sie die Spalte für die Transaktionsbeschreibung.

**Land:** Definieren Sie die Spalte für das Land, nicht obligatorisch.

**MCC:** Definieren Sie die Spalte für MCC, nicht obligatorisch.

**MCC-Beschreibung:** Definieren Sie die Spalte für die MCC-Beschreibung, nicht obligatorisch.

**Eindeutige Referenz:** Definieren Sie die Spalte für die eindeutige Referenz, nicht obligatorisch.
