---
title: Mindestanzahl der Genehmiger
sidebar_position: 6
hide_title: true
---
## Mindestanzahl der Genehmiger
Eine Überprüfung der Mindestanzahl der Genehmiger kann in ExFlow Web hinzugefügt und auch für das Importjournal aktiviert werden.

Im Importjournal muss die Mindestanzahl der Genehmiger hinzugefügt werden, bevor das Dokument erstellt werden kann.<br/>
Für ExFlow Web wird die Überprüfung für den letzten Genehmiger durchgeführt.

Der Budgetverantwortliche, der als letzter Genehmiger bei der Arbeit mit der G/L-Budgetkontrolle hinzugefügt wird, ist nicht in der Mindestanzahl der Genehmiger enthalten.

### Einrichtung der Mindestanzahl der Genehmiger
Gehen Sie zu: ***ExFlow Setup --> Doc. Posting Checks***

Geben Sie "Mindestanzahl der Genehmiger" ein. Dies aktiviert eine Überprüfung für den letzten Genehmiger im Genehmigungsfluss. Der Budgetverantwortliche ist nicht enthalten.

Gehen Sie zu: ***ExFlow Setup --> Doc. Creation Checks***

Um auch eine Überprüfung der Mindestanzahl der Genehmiger im Importjournal zu aktivieren, aktivieren Sie "Check Minimum No. of Approvers" in den Doc. Creation Checks und fügen Sie die Anzahl der Genehmiger wie oben hinzu.

![ExFlow Setup](../../images/exflow-setup-doc-creation-doc-posting-checks-001.png)

### Workflow für Mindestanzahl der Genehmiger
Wenn die Überprüfung der Mindestanzahl der Genehmiger für das Importjournal aktiviert ist, kann das Dokument nicht erstellt werden, bis die Mindestanzahl der Genehmiger oder mehr zum Genehmigungsfluss hinzugefügt wurde.

Während des Genehmigungsflusses kann sich die Anzahl der Genehmiger ändern. Daher wird eine Überprüfung durchgeführt, wenn der letzte Genehmiger das Dokument genehmigt.

Wenn die Anzahl der Genehmiger einschließlich des aktuellen Genehmigers geringer ist als in ExFlow Setup angegeben, wird ein Fehler angezeigt, der besagt, dass weitere Genehmiger hinzugefügt werden müssen, bevor der aktuelle Genehmiger genehmigen kann.

![ExFlow Setup](../../images/dynamic-error-web-001.png)
