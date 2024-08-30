---
title: OMNI Genehmigung
sidebar_position: 16
hide_title: true
---
## OMNI Genehmigung

ExFlow OMNI Genehmigung ist eine Möglichkeit für Business Central Benutzer, verschiedene Funktionen in ExFlow zu genehmigen, d.h. ExFlow Verträge und ExFlow Genehmigungsregeln. Das bedeutet, dass ein Vertrag oder eine Genehmigungsregel in ExFlow erst vollständig genehmigt werden muss, bevor sie verwendet werden kann.

### ExFlow OMNI Dokumente einrichten

Gehe zu: ***Setup --> ExFlow OMNI Genehmigung --> ExFlow OMNI Dokumenteneinrichtung***

In der ExFlow OMNI Dokumenteneinrichtung gibt es zwei verschiedene OMNI-Typen, Vertrag und Genehmigungsregel.

Für den OMNI-Typ, in diesem Fall einen Vertrag, ist eine Einrichtung erforderlich.

Der OMNI-Typ ist der Bereich, der eine Genehmigung erfordert. Es ist möglich, die Mindestanzahl der Genehmiger festzulegen. Wenn "Genehmigung erforderlich" aktiviert ist, erfordern alle neu erstellten Verträge eine Genehmigung.

Aktiviere "Gleichzeitige Genehmigung zulassen", wenn alle Genehmigungsgruppen das Dokument gleichzeitig genehmigen dürfen, oder gehe zum ersten Business Central Benutzer in der Liste.

![ExFlow OMNI Dokumenteneinrichtung - Vertrag](./../../images/omni-document-setup-001.png)

Für den OMNI-Typ "Genehmigungsregel" muss eine ähnliche Einstellung vorgenommen werden, wenn eine Genehmigung für eine ExFlow Genehmigungsregel erforderlich ist, bevor sie verwendet werden kann.

![ExFlow OMNI Dokumenteneinrichtung - Genehmigungsregel](./../../images/omni-document-setup-002.png)

### ExFlow OMNI Genehmigungsregeln

Gehe zu: ***Setup --> ExFlow OMNI Genehmigung --> ExFlow OMNI Genehmigungsregel***

ExFlow OMNI Genehmigungsregel ermöglicht verschiedene Genehmigungsregeln für die verschiedenen OMNI-Typen "Vertrag" und "Genehmigungsregel".

#### **ExFlow OMNI Genehmigungsregel für Verträge**

Füge "Vertrag" als "OMNI Dokumenttyp" hinzu und benenne ihn. Wie bei regulären Genehmigungsregeln kann die Priorität festgelegt werden. Wenn die Genehmigungsregel-Filter und Genehmigungsregel-Zeilen festgelegt sind, kann die OMNI Genehmigungsregel vom Business Central Benutzer aktiviert werden.

![ExFlow OMNI Genehmigungsregel - Vertrag](./../../images/omni-approval-rule-001.png)

Lege die Filter fest, indem du auf ***Verwalten \--\> Filter festlegen*** unter Genehmigungsregel-Filter klickst.

Füge die erforderlichen Filter für die aktuelle Genehmigungsregel hinzu.

![ExFlow OMNI Genehmigungsregel - Filterseite](./../../images/omni-filter-page-001.png)

Die Vertragsdimension kann auch hinzugefügt werden, indem du auf "Filter festlegen" klickst, wie oben erwähnt, oder auf die Filterzelle klickst.

![ExFlow OMNI Genehmigungsregel - Filterseite](./../../images/omni-approval-rule-filters-001.png)

Liste die Genehmiger in derselben Reihenfolge auf, in der sie unter den Genehmigungsregel-Zeilen genehmigt werden.

![ExFlow OMNI Genehmigungsregel - Genehmigungsregel-Zeilen](./../../images/omni-approval-rule-lines-001.png)

Wenn Genehmigungsregel-Filter und Genehmigungsregel-Zeilen hinzugefügt wurden, kann die ExFlow OMNI Genehmigungsregel aktiviert werden.

#### **ExFlow OMNI Genehmigungsregel für Genehmigungsregeln**

Füge "Genehmigungsregeln" als "OMNI Dokumenttyp" hinzu und benenne ihn. Wie bei regulären Genehmigungsregeln kann die Priorität festgelegt werden. Wenn die erforderlichen Genehmigungsregel-Filter und Genehmigungsregel-Zeilen festgelegt sind, kann die OMNI Genehmigungsregel vom Business Central Benutzer manuell aktiviert werden.

![ExFlow OMNI Genehmigungsregel - Genehmigungsregel](./../../images/omni-approval-rule-002.png)

Wähle eine vorhandene ExFlow Genehmigungsregel aus oder erstelle eine neue Regel gemäß dem regulären ExFlow-Standard.

Weitere Informationen dazu findest du im Abschnitt **"ExFlow Genehmigungsregel"**.

![ExFlow Genehmigungsregel - Filterseite](./../../images/omni-approval-rule-003.png)

Füge den erforderlichen Filter hinzu. Wenn die Regel abgeschlossen und manuell aktiviert ist, wird sie zur Genehmigung an den Business Central Benutzer gesendet.

![ExFlow OMNI Genehmigungsregel](./../../images/omni-approval-rule-004.png)

Wenn der Business Central Benutzer die Seite schließt, ohne die ExFlow OMNI Genehmigungsregel zu aktivieren, wird folgende Frage angezeigt: *"Möchten Sie die ExFlow OMNI Genehmigungsregel aktivieren?"*.

Alle ExFlow OMNI Genehmigungsregeln können in der ExFlow OMNI Genehmigungsregel-Liste eingesehen werden.

![ExFlow OMNI Genehmigungsregel-Liste](./../../images/omni-approval-rules-001.png)

### ExFlow OMNI Genehmigungsstatus

Gehe zu: ***Setup --> ExFlow OMNI Genehmigung --> ExFlow OMNI Genehmigungsstatus***

Der Business Central Benutzer kann alle Dokumente, die auf Genehmigung in ExFlow OMNI warten, im ExFlow OMNI Genehmigungsstatus sehen. Es ist auch möglich, genehmigte, weitergeleitete und abgelehnte OMNI-Dokumente zu sehen. Wenn der Status eines Dokuments "Genehmigt" ist, ist das Dokument bereit zur Verwendung in ExFlow.

![ExFlow OMNI Genehmigungsstatus](./../../images/omni-approval-status-001.png)

Gehe zu **Offene Karte**, um den ExFlow Vertrag zu öffnen.

Um den Genehmigungsfluss eines Dokuments zu ändern, gehe zu: ***Genehmigungskarte***

Von dieser Seite aus ist es möglich, die ursprüngliche Karte zu öffnen, zu einer anderen Genehmigungsregel zu wechseln und Genehmiger hinzuzufügen/zu löschen. Es ist auch möglich, die Genehmigung aller Zeilen oder einer ausgewählten Zeile neu zu starten.

![ExFlow OMNI Dokument](./../../images/omni-approval-document-001.png)

### ExFlow OMNI Genehmigungsdokumente

Gehe zu: ***Setup --> ExFlow OMNI Genehmigung --> ExFlow OMNI Genehmigungsdokumente***

In den ExFlow OMNI Genehmigungsdokumenten kann der spezifische Business Central Benutzer alle seine Dokumente sehen, die zur Genehmigung anstehen, in "Meine aktuellen Genehmigungen". Es ist auch möglich, die zukünftigen und vergangenen Genehmigungen des Business Central Benutzers zu sehen.

![ExFlow OMNI Genehmigungsdokumente](./../../images/omni-approval-documents-001.png)

Öffne die Karte, um die ursprüngliche Karte anzuzeigen. In diesem Fall würde sie zu ExFlow Vertrag 2 weiterleiten.

Das OMNI-Dokument Vertrag kann vom betroffenen Business Central Benutzer genehmigt, abgelehnt oder weitergeleitet werden.

Verwende das Diskussionsfeld, um Kommentare zu schreiben und andere Business Central Benutzer zu erwähnen.

Um den aktuellen Genehmigungsfluss für ein bestimmtes Dokument zu sehen, gehe zu FactBox unter "Genehmiger".

Wenn der Business Central Benutzer ADMIN genehmigt hat, wird das Genehmigungsdokument zu "Meine vergangenen Genehmigungen" verschoben und zum nächsten Business Central Benutzer ESSENTIAL im Genehmigungsfluss weitergeleitet.

![ExFlow OMNI Genehmigungsdokumente - Meine vergangenen Genehmigungen](./../../images/omni-approval-documents-002.png)

Wenn alle Genehmiger genehmigt haben, ändert sich der Status in ExFlow OMNI Genehmigungsdokumenten zu "Genehmigt".

Klicke einfach auf "Genehmigen", um die Genehmigungsregel zu genehmigen.

![ExFlow OMNI Genehmigungsdokumente](./../../images/omni-approval-documents-003.png)

Wenn eine Genehmigungsregel genehmigt wird, ändert sich der Status von "Nicht genehmigt" zu "Genehmigt" in ExFlow OMNI Genehmigungsdokumenten und auch in der ExFlow Genehmigungsregel-Liste.

![ExFlow Genehmigungsregel-Liste](./../../images/approval-rules-001.png)

Von der ExFlow Genehmigungsregel-Liste aus ist es auch möglich, auf die ExFlow OMNI Genehmigungskarte zu klicken, um das ExFlow OMNI Dokument anzuzeigen.

![ExFlow OMNI Dokument - Genehmigte Genehmigungsregel](./../../images/omni-document-001.png)

