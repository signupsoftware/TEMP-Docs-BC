---
title: Workflow-Prozessübersicht
sidebar_position: 2
hide_title: true
custom_edit_url: null
---
## Workflow-Prozessübersicht

![Workflow](@site/static/img/media/technical-requirements-for-exflow-001.png)

1. **Scannen und Datenerfassung** - ExFlow unterstützt alle Arten von Rechnungen, einschließlich Papier, PDF und anderen elektronischen Formaten. Eingehende Papierrechnungen werden gescannt und mit ExFlow Data Capture *(oder einer ähnlichen OCR-Lösung)* in einen elektronischen Workflow importiert. Elektronische Rechnungen werden direkt in ExFlow importiert.

2. **Datenimport und -validierung** - Rechnungsinformationen werden bis auf Zeilenebene interpretiert. Daten wie Lieferant, Menge, Artikelnummer und Stückpreis werden mittels OCR erfasst und validiert. Fehlende Daten können manuell angepasst oder hinzugefügt werden.

3. **Vorkodierung** - ExFlow bietet eine intuitive Vorkodierung aller eingehenden Rechnungen, wodurch der Prozess optimiert und manuelle Arbeit minimiert wird.

4. **Rechnungsabgleich** - ExFlow kann die erfassten Daten verwenden, um eine Bestellrechnung mit verfügbaren Bestellungen, Verträgen und/oder Wareneingängen abzugleichen, um zu bestimmen, wie die Rechnung verarbeitet werden soll. ExFlow unterstützt das standardmäßige 3-Wege-Matching von Dynamics.

5. **Genehmigungsworkflow** - Für Spesenrechnungen oder wenn eine Bestellrechnung nicht übereinstimmt oder Abweichungen festgestellt werden, wird sie zur Genehmigung weitergeleitet. Der Workflow wird basierend auf vordefinierten Genehmigungsregeln vorgeschlagen. Diese Regeln können auf Lieferanten, Konten, Dimensionen, Betragsgrenzen usw. basieren. ExFlow unterstützt auch Positionshierarchien. Für Rechnungen, die genehmigt werden müssen, werden die Genehmiger per E-Mail benachrichtigt, um eine schnelle Bearbeitung sicherzustellen.

6. **Endbuchung und Archivierung** - Genehmigte Rechnungen werden automatisch in das Hauptbuch gebucht, bevor sie archiviert werden. Die AP-Mitarbeiter haben stets einen klaren Überblick über alle Rechnungen im Rechnungsprozess. Zu jeder Zeit kann jede Rechnung direkt aus dem Dynamics 365 Business Central-Arbeitsbereich aufgerufen werden.

7. **Einblicke und Analysen** - Die AP-Mitarbeiter haben jederzeit einen klaren Überblick über alle Rechnungen im Rechnungsprozess. Sie können auch historische Daten für jede Rechnung aus ihrem Dynamics 365 Business Central-Arbeitsbereich abrufen. Alle Daten werden in Echtzeit verarbeitet, sodass Finanzberichte immer korrekte Zahlen enthalten.
