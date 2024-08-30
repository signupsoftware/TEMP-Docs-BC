---
title: Benutzerprogrammierregeln
sidebar_position: 7
hide_title: true
---
## Benutzerprogrammierregeln

Gehe zu: ***Setup \--\> ExFlow Manual Setup \--\> ExFlow Benutzerprogrammierregeln***

Wenn ein Genehmiger Änderungen am Rechnungsposition in ExFlow Web vornehmen können soll, können Benutzerprogrammierregeln verwendet werden, um zu entscheiden/einzuschränken, welche Werte er/sie auswählen kann.

Administratoren können Benutzerprogrammierregeln für einzelne Benutzer oder Benutzergruppen erstellen. Die Programmierregel muss auf den ExFlow-Benutzer angewendet werden, indem auf die ID verwiesen wird.

Jede sichtbare Spalte in ExFlow Web kann geändert werden. Wählen Sie aus, ob der Genehmiger alle "Alle", keine "Leere" oder einen Filter von Werten "Textbereich" auswählen können soll.

Die "Benutzerprogrammierregel" im folgenden Beispiel ermöglicht es dem Genehmiger, den Wert der Spalte "Abteilung" auf "SALES" zu ändern.

| Allgemein     |	|
|:-|:-|
|**ID:**        | ID-Nummern werden der Programmierregel in der Reihenfolge, in der sie erstellt werden, zugewiesen. Dies hat keine Auswirkung auf die Priorisierung.
| **Name:**     | Beschreibender Name für die Regel
| **Aktiv:**    | Ob die Regel aktiv ist oder nicht

![ExFlow Benutzerprogrammierregel-Karte](./../../images/user-coding-rules-001.png)

Wenn die Benutzerprogrammierregel erstellt wurde, gehe zur ExFlow-Benutzerkarte und wende die Programmierregel-ID auf den ausgewählten Benutzer für das spezifische Unternehmen an. Ein ExFlow-Benutzer kann nur eine Benutzerprogrammierregel pro Unternehmen haben.
