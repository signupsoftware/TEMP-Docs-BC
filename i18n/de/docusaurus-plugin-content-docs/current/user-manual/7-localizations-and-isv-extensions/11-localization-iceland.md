---
title: Lokalisierung Island
sidebar_position: 11
hide_title: true
---
## Lokalisierung Island

### Sprache

ExFlow unterstützt die isländische Sprache in Business Central.

### Zahlungsreferenz

#### Hintergrund

Isländische Rechnungen enthalten eine Zahlungsreferenz, die das Feld "Zahlungsreferenz" im Einkaufsrechnungsheader ausfüllen sollte.

Das Format der interpretierten Zahlungsreferenz auf der Rechnung muss beim Import in ExFlow transformiert werden, um das korrekte Format zu erhalten.

Das korrekte Format umfasst in folgender Reihenfolge:

- Unternehmensregistrierungsnummer des Lieferanten

- Fälligkeitsdatum

- Forderungsnummer

Beispiel:

Eingabe: **4601171350**\> 0**112266**+ 03\<**032266**\> **300820**+

Ausgabe: **4601171350 300820 032266123456**

Format: RRRRRRRRRR DDMMYY NNNNNNNNNNNN

#### Lösung

##### Transformation

Die interpretierte Zahlungsreferenz auf der Rechnung muss im XML-Tag "PaymId" exportiert werden.

"PaymId" ist standardmäßig dem Feld "Belegnummer des Lieferanten 2" im Importjournal zugeordnet.

Die interpretierte Zahlungsreferenz muss immer die volle und vollständige Länge haben.

Eine Transformationsregel wird in der Datenaustauschdefinition verwendet, um die Zahlungsreferenz in das korrekte Format zu transformieren. Die Logik der Transformationsregel ist so codiert, dass sie das eingehende Format: **4601171350**\> **0112266+ 03\<032266\>** **300820**+ verarbeitet und das ausgehende Format erstellt: **4601171350 300820 032266123456**

Diese Logik wird durch die Erstellung eines benutzerdefinierten Transformationscodes namens "ISLPAY" ausgelöst und dem Feld "PaymId" hinzugefügt.

##### Ausfüllen des Einkaufsrechnungsheaders

Die transformierte Zahlungsreferenz wird in das Feld "Belegnummer des Lieferanten 2" im Importjournal importiert.

Wenn die Rechnung erstellt wird, wird das Feld "Zahlungsreferenz" im Einkaufsrechnungsheader mit der transformierten Zahlungsreferenz aus "Belegnummer des Lieferanten 2" mit dem Format **01171350 300820 032266123456** ausgefüllt.

![Data Exchange Definition - Islandic Localization](@site/static/img/media/image365.png)

![Transformation Rule Card - Islandic Localization](@site/static/img/media/image366.png)
