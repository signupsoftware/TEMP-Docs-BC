---
title: Referenzcodes
sidebar_position: 14
hide_title: true
---
## Referenzcodes

Gehe zu: ***Setup \--\> ExFlow Manual Setup \--\> ExFlow Reference Codes***

Wenn eine Interpretation der Referenz vor dem Import des Rechnungsdokuments in das ExFlow Import Journal erfolgt, kann die Referenz verwendet werden, um z.B. einen Genehmigungsworkflow auszulösen. Wenn eine Referenz gefunden wird, kann ein Genehmigungsfluss entweder mit dem ersten Genehmiger oder einer Genehmigungsregel angewendet werden.

Wenn eine Referenz auf dem importierten Dokument gefunden wird, wird dieser Referenzwert auch in der Einkaufsrechnung/Gutschrift und der gebuchten Einkaufsrechnung/Gutschrift gespeichert.

Die Referenz kann einen vordefinierten ExFlow-Kaufcode hinzufügen, der zur Zuordnung der Kodierung zu den Rechnungszeilen (Sachkonto, Dimensionen usw.) verwendet wird.

Es ist möglich, eine Kombination aus Referenz und Lieferantennummer zu verwenden. Wenn eine Referenz für einen bestimmten Lieferanten interpretiert wird, ist ein spezieller Genehmigungsfluss zu verwenden. Bearbeiten Sie außerdem die Liste und fügen Sie z.B. eine Dimension oder einen Einkäufercode zur markierten ExFlow-Referenz hinzu. Es ist auch möglich, mehrere verwandte Referenzen mit demselben Referenzcode zu verknüpfen, um die Verwaltung der Referenzcodes zu erleichtern.

![ExFlow Referenzcodes](@site/static/img/media/reference-codes-001.png)

### Erstellen eines neuen ExFlow-Referenzcodes aus dem Import Journal

Wenn der Referenzwert eine neue Referenz ist, wird beim Klicken auf die Assist-Schaltfläche (im Referenzfeld):

![Referenzfeld](@site/static/img/media/reference-code-001.png)

ExFlow fragen, ob eine neue Referenz erstellt werden soll:

![Neue Referenz erstellen](@site/static/img/media/reference-code-is-missing-001.png)

Durch Auswahl von "Ja" wird eine leere ExFlow-Referenzcodekarte geöffnet, in der zusätzliche Informationen zur Referenz hinzugefügt werden können:

![ExFlow Referenzcodekarte](@site/static/img/media/reference-code-002.png)

Wenn das ExFlow-Referenzfeld leer ist, klicken Sie auf "Neu" oder "Liste bearbeiten" und geben Sie die Informationen direkt in die Zeile ein. Eine alternative Route besteht darin, auf "Bearbeiten" zu klicken, um die Referenzkarte zu öffnen und die Informationen dort zu bearbeiten.

Um eine verwandte Referenz zum Referenzcode hinzuzufügen, klicken Sie auf "ExFlow Related Reference Values" und bearbeiten Sie die Zeilen.

![ExFlow Referenzcodes](@site/static/img/media/reference-codes-002.png)

Geben Sie den neuen Wert ein:

![ExFlow Referenzcodekarte](@site/static/img/media/reference-code-003-related-reference-values.png)

Schließen Sie dann und dieser neue Wert wird dem aktuellen Referenzcode zugeordnet.

![ExFlow Referenzcodes](@site/static/img/media/reference-codes-003.png)

Wenn es notwendig ist, einem bereits vorhandenen Code einen Referenzcode hinzuzufügen, jedoch als Referenzwert, ist dies mit der Option "Einem anderen Referenzcode zuweisen" möglich. Dadurch wird der ursprüngliche Referenzcode blockiert und alle zugehörigen Referenzwerte dem neuen Referenzcode zugewiesen. Diese Änderung kann auch innerhalb der Referenzcodekarte vorgenommen werden.

![ExFlow Referenzcodekarte](@site/static/img/media/reference-codes-004.png)

### Automatische Erstellung von Referenzen durch ExFlow-Benutzer
Gehe zu: ***ExFlow Setup --> Benutzer --> Automatisch ExFlow-Referenzen erstellen***

Im ExFlow-Setup gibt es die Einstellung "Automatisch ExFlow-Referenzcode erstellen", die automatisch einen ExFlow-Referenzcode erstellt, wenn ein neuer ExFlow-Benutzer erstellt wird.

Wenn ein neuer ExFlow-Benutzer erstellt wird, wird ein ExFlow-Referenzcode mit demselben „Referenzcode“ wie der „Benutzername“ erstellt und der aktuelle ExFlow-Benutzer wird automatisch als erster Genehmiger hinzugefügt.

Der ExFlow-Referenzcode wird nur erstellt, wenn die Einstellung "Automatisch ExFlow-Referenz erstellen" aktiviert ist und wenn das aktuelle Unternehmen in den "ExFlow-Benutzerberechtigungen" auf der ExFlow-Benutzerkarte vorhanden ist.

![ExFlow Setup Benutzer](@site/static/img/media/exflow-setup-users-002.png)

Es ist möglich, ExFlow-Referenzcodes für alle bereits vorhandenen Benutzer zu erstellen, indem "Batch Create ExFlow Reference" von der ExFlow-Benutzerseite verwendet wird. ExFlow-Referenzcodes werden für alle Benutzer erstellt, die das aktuelle Unternehmen in den "ExFlow-Benutzerberechtigungen" auf der ExFlow-Benutzerkarte haben.

Außerdem kann ein ExFlow-Referenzcode nur für einen ausgewählten ExFlow-Benutzer von der ExFlow-Benutzerseite oder der ExFlow-Benutzerkarte erstellt werden, indem "ExFlow-Referenz erstellen" verwendet wird.

![ExFlow Setup Benutzer](@site/static/img/media/exflow-users-002.png)
