# ExFlow Travel & Expense Management

## Introduction

Welcome to ExFlow Travel & Expense Management, a comprehensive solution for seamless management of travel and expense processes within Microsoft Dynamics 365 Business Central. Our platform is designed to simplify and streamline the way an organization handles travel bookings, expense reporting, and reimbursements, ensuring a smooth and efficient workflow.

### What is ExFlow Travel & Expense Management?

ExFlow Travel & Expense Management is an advanced, user-friendly application integrated with Microsoft Dynamics 365 Business Central. It empowers employees to manage their travel plans and expenses efficiently, while providing administrators with robust tools for oversight and control. By automating the end-to-end process, ExFlow reduces manual effort, minimizes errors, and enhances compliance with company policies.

### Key Features

-   **Seamless Integration**: Fully integrated with Business Central to ensure data consistency and real-time updates.

-   **User-Friendly Interface**: Intuitive design that simplifies the submission, approval, and reimbursement processes.

-   **Automated Workflows**: Streamlined workflows that automate approval processes, reducing administrative burden and speeding up processing times.

-   **Policy Compliance**: Built-in compliance checks to ensure that all expenses adhere to company policies and regulatory requirements.

-   **Reporting & Analytics**: Comprehensive reporting tools that provide insights into travel and expense patterns, helping to control costs and improve budgeting accuracy.

-   **Mobile Access**: Accessibility on mobile devices, allowing users to manage travel and expenses on the go.

### Getting Started

This manual is a guide to effectively using ExFlow Travel & Expense Management. Whether you are an employee submitting expenses or an administrator overseeing the process, you will find detailed instructions and helpful tips to make the most of our platform.

#### For Employees

-   **Submitting Expenses**: Step-by-step instructions on how to record and submit your travel and expense claims.

-   **Tracking Status**: How to check the status of your submissions and view reimbursement details.

-   **Mobile App**: Utilizing the mobile app for on-the-go expense management.

#### For Administrators

-   **Setting Up Policies**: Configuring company policies to ensure compliance and streamline approvals.

-   **Approval Workflows**: Managing and customizing approval workflows to fit your organizational needs.

-   **Reporting Tools**: Using analytical tools to monitor expenses, identify trends, and generate reports.

We are committed to supporting your journey towards efficient travel and expense management. Should you have any questions or need further assistance, our dedicated support team is here to help.

Thank you for choosing ExFlow Travel & Expense Management. Let\'s get started!

# AppsForDynamics365 Portal Connector

## Introduction

The AppsForDynamics365 Portal Connector facilitates the integration of the ExFlow Travel & Expense Management application with your Business Central system. Acting as an intermediary, it ensures that data is transmitted directly to Business Central in easily processed and digestible formats for storage or application.

The portal offers easy access for users who are not Business Central super users and may be on the road while performing tasks in ExFlow Travel & Expense Management.

This documentation provides all the necessary information to set up AppsForDynamics365 and connect it with Business Central.

## AppsForDynamics365 integration setup

This section documents the setup process for the AppsForDynamics365 integration. The integration module is used by ExFlow Travel & Expense Management to connect Business Central to the AppsForDynamics365 portal.

To complete the setup, use the AppsForDynamics365 setup wizard, which guides users through the necessary steps to establish the connection to Business Central. Access the wizard by either clicking the notification on Business Central front page or navigating to the AppsForDynamics365 portal configuration page using the search function. Once there, click the \"Configure connection\" button to open the wizard.

It is important that this wizard is run by someone with the necessary permissions to grant consent.

### Configure AppsForDynamics365 connection

Go to: **AppsForDynamics365 Configuration**

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-001.png)

### Verify license

The initial step in the process requires entering the customer ID and license key. These will be provided when an AppsForDynamics365 product is purchased. Alternatively, they can be found on the **My account** page on [www.appsfordynamics365.com](http://www.appsfordynamics365.com).

![Travel and Expense\](@site/static/img/media/tem-002.png)

### Grant consent

To integrate AppsForDynamics365 with Business Central, consent must be provided. This consent allows AppsForDynamics365 to access the web service

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-003.png)

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-004.png)

After granting consent continue to specify localization settings.

### Specify localization settings

Select the time zone being used and the preferred language for the portal. Note that the portal does not support all languages.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-005.png)

After selecting the time zone and language, click next and proceed to select authentication method.

### Select method of authentication

There are three different methods of authentication available for the user to use to sign in to AppsForDynamics365. Microsoft login, username and password created in AppsForDynamics365, or Mixed mode is a combination of these two.

Users will have to be created in AppsForDynamics365 in a specific order regardless of authentication method.

**Microsoft login** is recommended for most companies that use Business Central as it allows the use of existing Microsoft logins just like in other applications.

**AppsForDynamics365 username and password** is useful for when most employees do not have access to Microsoft logins. Each user will have to have a password and username made.

**Mixed mode** allows the option to use both, which can be useful in some cases where individual employees may not have Microsoft logins.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-006.png)

After selecting a method of authentication, click next and proceed to register Business Central instance.

### Register Business Central instance

The wizard will automatically register the Business Central instance with the AppsForDynamics365 account once \'Next\' is clicked, simply confirm that the information presented is correct.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-007.png)

After confirming this information, click next and proceed to activate company.

### Activate company

This step requires establishing a webservice connection. The information displayed will be used by default. While the webservice address cannot be altered, feel free to adjust the description as needed.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-008.png)

Once this is in order, click next go to the admin permissions.

### Grant permission to administrators

For maintenance and management of the AppsForDynamics365 integration a few users must be selected as administrators.

These administrators will be responsible for creating additional users in the future, if necessary. This can be done immediately through the link displayed in the wizard or later through the permission settings.![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-009.png)

The configuration wizard for the AppsForDynamics365 connection has been successfully completed.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-010.png)

### Creating a AppsForDynamics365 user

To access the AppsForDynamics365 portal and use the ExFlow Travel & Expense Management app, each user must have a created user account. This login is shared across companies.

Every user requiring access to the AppsForDynamics365 portal must be set up as an AppsForDynamics365 user. The AppsForDynamics365 user extends the Business Central employee by making sure that settings set on the Employee are also enforced on the AppsForDynamics365 portal.

Go to: **AppsForDynamics365 logins**

There are two options available to create a new user.

1.  **Create logins for users:** Import users from BC users.

2.  **New:** If the user isn't created as a Business Central user, manually inter the user credentials.

> ![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-011.png)

#### Create with a Business Central

**Create logins for users:** Select the user(s) from the list.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-012.png)

#### Create the user manually

Click on **New**

**User status**: Indicates whether the user is active or inactive

**Authentication method:** Chose the authentication method for the specific user.

Microsoft login

User/password

**Login:** User ID that user will use to sign in to the portal

**Name:** The full name of the employee

**Password:** The password the user uses to login to the portal. (Only if "user/password" is selected)

**Language**: The intended language for the user to use.

**E-mail**: The user's email address. This is used for notification.

**Business Central User**: Select the Business Central user that this user should be attached to.

**Employee number:** This is the employee number from Business Central associated with the user. It will be automatically filled out when the Configure for TEM is run from the Employee card in Business Central.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-013.png)

The user can sign in by typing in their **username** and **password**, or by using **Sign in with Microsoft.**

![A screenshot of a login screen Description automatically generated](@site/static/img/media/tem-014.png)

### Mapping the employee to AppsForDynamisc365

To complete the user setup, it is necessary to map the Business Central Employee to the **AppsForDynamics365 user**.

Go to: **Employee**

Select a specific employee from the list to grant access to **AppsForDynamics365 Portal**.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-015.png)

**Configure for TEM:** Follow the wizard.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-016.png)

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-017.png)

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-018.png)

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-019.png)

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-020.png)

# ExFlow Travel & Expense Management in Business Central -- Get started

The administrator handles the setup and the users behind the scenes. Most of the work an administrator will have to do will be up-front, with things such as setting up the practical elements of Travel and Expense Management, as well as creating users for the submitters and approvers.

This section will assist with the setup of ExFlow Travel & Expense Management

Below is listed the necessary steps to set up:

**Setup Wizard**

**Posting groups**

**Payment groups**

**Regions**

**Expense categories**

**Means of transport**

**Travel rates**

To access the different views in this section, use the search field or the **Travel and Expense Management overview** in the top bar to navigate to the explore all view.

### Setup Wizard

The setup wizard is designed to streamline the basic setup for ExFlow Travel & Expense Management. This user manual will guide users through the steps, ensuring the setup process is straightforward and easy to complete.

Go to: **Travel & Expense overview - \-\-\--\> Setup wizard**

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-021.png)

#### Setup number series

The wizard will suggest standard Business Central number series for expenses and mileage. Adjustments can be made during this setup.![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-022.png)

#### Mileage setup

Set the reimbursement method for mileage, the posting group, and the mileage unit.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-023.png)

#### Notifications

Configure email reminders to keep users informed and prompt their attention for pending approvals.

![A screenshot of a computer screen Description automatically generated](@site/static/img/media/tem-024.png)

#### Finish

Congratulations! All the necessary information has been successfully provided to begin the setup according to preferences.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-025.png)

### Posting Groups

Posting groups are essential classifications of expense types that allow bookkeepers to efficiently manage and organize financial data. When employees submit expenses through the app or the web portal, they must select an Expense Category, which corresponds to one of the predefined posting groups.

To facilitate accurate accounting, it is crucial to create appropriate posting groups that encompass various tax rates and general ledger accounts. For instance, **Travel Rates** will require specific posting groups for mileage expenses.

Please note that only the finance department has access to configure and manage these posting groups, ensuring that the process remains streamlined and secure for end-users of the app or web portal.

**Go to: Travel & Expense \-\-\-\--\> Overview \-\-\-\--\> Posting Setup \-\-\-\--\> Posting Groups**

**New:** To create a new posting group.

**Code:** This serves as a shorthand descriptor for the posting group.

For example, domestic food expenses could be labeled as \"Food-dom,\"international food expenses as \"Food-int,\" or miscellaneous expenses as \"Misc\".

**Description:** Enter a description, e.g. "Food & beverage domestic", "Food & drink international", or "Miscellaneous".

**G/L Account No**.: Select or enter G/L Account No.

**Gen. Bus. Posting Group:** Select or enter Gen. Bus. Posting Group. This is Business Central standard.

**Gen. Prod. Posting Group:** Select or enter Gen. Prod. Posting Group. This is Business Central standard.

**VAT Bus. Posting Group:** Select or enter VAT Bus. Posting Group. This is Business Central standard.

**VAT Prod. Posting Group:** Select or enter VAT Prod. Posting Group. This is Business Central standard.

**Job G/L account no.:** Select or enter Job G/L account no., this is connected to the project module in Business Central standard.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-026.png)

Please note, that the wizard creates a posting group for **Mileage**.

### Payment Groups

Like **Posting Groups** and common groups in Business Central, **Payment Groups** are pused to map entities to G/L Accounts. This feature is particularly useful when managing multiple credit card types, each requiring distinct payment postings.

Typically, it\'s advisable to set up at least two **Payment Groups**: one for company credit card transactions and another for reimbursing employees. Note that only one **Payment Group** can be assigned per **Employee type**. For company credit cards, multiple **Payment Groups** can be established as needed. There is flexibility to configure a single **Payment Group** for each **Credit Card Agreement** or consolidate several agreements into one group, based on preferences.

Go to: **Travel & Expense -- Overview- \-\-\--\> Posting Setup \-\--\> Payment Groups**

**New:** Create a new **Payment Group**

**Code:** This serves as a shorthand descriptor for the payment group.

For example, "CC" for Credit card or "EMPLOYEE" for Employee

**Description**: Enter a description.

For example, "Credit card" or "Employee"

**Bal. Account Type:** Select a bal. Account Type this is Business Central standard.

**Bal. Account No.:** Select a Bal. Account No**.** this is Business Central standard.

![A white rectangular object with a black border Description automatically generated](@site/static/img/media/tem-027.png)

### Regions

**Regions** contain collections of countries which is useful if a specific posting setup is needed per country collection. For example, this can be useful to prepare the different tax rates for the different regions.

Go to: **Travel & Expense -- Overview \--\> Setup \--\> Regions**

**New**: Create new **Regions**

**Code**: This serves as a shorthand descriptor for the **Region**.

**Description:** Enter a description for the region.

**Add Countries:** Select one or more Country Codes.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-028.png)

### Expense Categories

To streamline expense registration for users**, Expense Categories** must be created. With these categories and a few additional variables, non-finance users can record expenses and provide the finance department with information on how the expenses should be posted.

The created **Expense Categories** will be visible to users on the web portal and mobile app when they are creating an expense. Users are required to select a category that best describes their purchase. Additionally, they can choose to split the expense with colleagues or add a guest, which will indicate how to post the expense.

For each **Expense Category**, multiple posting setups can be established, enabling the finance department to efficiently manage various expense scenarios.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-029.png)

Go to: **Travel & Expense -- Overview \--\> Posting Setup \--\> Expense Categories**

**New**: Create new **Expense Categories**

**Code:** That shortly indicated what the category is for, for example: \"Food\"

**Description**: Enter a description of the category, for example "Food and beverage\". Keep in mind that this description will be visible to users on the app or web portal.

Next, configure the posting setup for the specific category.

**Priority:** When multiple posting setups exist, the system determines which one to use based on Priority numbers. The posting setup with the highest priority number will be applied by the system if none of the setups precisely match the expense registration.

**Domestic**: If the posting setup is only relevant when the expense location is own country.

**Region Codes**: If the posting setup is relevant when the expense is location outside own country, select one of regions created previously.

**With Guests**: If the setup requires the user to add guest, tick off **with guests**.

**Posting Groups**: Select one of the **Posting Groups** created previously.

**Split By Employees:** If the setup requires the expense to be split between employees, tick off **Split by Employees**.

Repeat the above steps for as many categories and setups as required. The more comprehensive your approach to creating categories and setups, the simpler it will be for your financial department to process expenses.

#### Means of transport

In certain countries, different reimbursement rates apply based on the mode of transportation. For example, rates vary between cars, cars with trailers, and cars carrying heavy loads. When configuring Means of Transport, specify the transportation type. If the reimbursement rate is consistent for certain types, it is only necessary to set up one type.

![A screenshot of a car heavy vehicle Description automatically generated](@site/static/img/media/tem-030.png)

Go to: **Travel & Expense -- Overview \--\> Mileage Setup \--\> Means of transport**

**New**: Create a new **Means of transport**

**Code:** That shortly indicated what the type of transport is for, for example: \"Car\".

**Description:** Enter the description of transportation type.

### Travel rates

Travel rates allow setting the reimbursement rate for an employee based on a specific trip.

Individual employees can have different rates. A rate without an employee number specified is a general rate that is used as a default rate.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-031.png)

Go to: **Travel & Expense -- Overview \--\> Mileage Setup \--\> Travel rates**

**New:** Create new travel rate.

**Option**: Select the **Means of transport** created previously.

**Employee No**.: If no employee number is specified, the rate will be considered a general rate.

**Starting Date**: Use this option if a rate needs to change at a specific point

**Starting from:** Example: If there are different rate rules depending on the number of miles or kilometers the employee has driven.

**Rate**: The rate for the specific rule.

It is important to set up the reimbursement handler in **Setup (TEM)**.

Go to: **Setup (TEM) \--\> Mileage**

![A white background with black and blue text Description automatically generated](@site/static/img/media/tem-032.png)

**Mileage Reimbursement Handler:** If the reimbursement should be handled via Business Central select **Post to Employee Ledger**, if the reimbursement is handled in the payroll system select **Export to XML**.

## Setup Credit Card in ExFlow Travel & Expense Management

Credit card agreements are useful tools for automatically matching expenses with the appropriate credit card statements when they are received. Once set up, this will save the bookkeeping department time and can be further enhanced by using **the Automatic transaction import** feature.

### Agreements

Go to: **Travel & Expense -- Overview \--\> Company Cards \--\> Agreements**

**New:** Create a new agreement.

**Code:** Enter a code for the agreement, which should be a shorthand descriptor to allow easy identification.

**Description:** Enter a description of the agreement.

**Card Brand**: Select a **Card Brand** from the list.

**Payment Group:** Select **Payment Group** from those previously created.

**Card transactions:** Select the method for the import of credit card transactions

-   **Manual input/file import:** Select this option if the transaction will be typed in manually or import with an excel file.

-   **From Bank Statement:** Credit card transactions are imported for the Bank Statement in Business Central.

-   **From Bank Reconciliation:** Credit card transactions are imported for the Bank Reconciliation in Business Central.

-   **Automatic from SEB card:** Credit card transactions are imported from SEB card integration.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-033.png)

This is a list of all the credit cards associated with this specific agreement. From here, multiple cards from **Company Credit Cards** can be associated with this specific **Credit Card Agreement**.

Under **Associated cards** \--\> **Cards** \--\> **Add cards**

Select specific credit card. To select multiple cards at once click on a credit card line and press Shift+arrow down on keyboard \--\> **OK.**

### Company credit cards

By opening the Company Credit Cards view, all cards created automatically from transactions or manually entered will be visible. From this view, there are two options to create new credit card:

1.  **Automatic Transaction Import**: If this feature is set up, company credit cards will be automatically created based on the card number and cardholder name from the transactions.

2.  **Manual Entry** If the automatic import is not preferred, **Company Credit Cards** can be created manually.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-034.png)

#### Create new Credit Card manually

Go to: **Company Credit Cards (TEM)**

**New**: Create a new card

**Card No.**: Enter the card number.

**Card Holder Name**: Enter the name of the person who uses the card.

**Assigned to Employee No**.: Select the employee from the list.

**Credit Card Agreement**: Select the appropriate agreement for the company card.

The Company Credit Card has been registered, but it must be activated before it can be used.

#### *Activate Credit Card*

For a credit card to be granted the status **Active** the card must have been assigned a credit card agreement and an employee.

Select a **Company Credit Card** from the list and **Activate.** The **Company Credit Card** has now been activated.

#### Suggest Card Associations

If one or more **Company Credit Cards** have not been associated with an **Employee** this feature will guide, you through which cards and employees the system wants to match.

Go to: **Company Cards** \--\> **New**

### Excel Import definitions

Map Excel files to enable the import of credit card transactions, which can then be sent to the cardholders for processing.

Go to: **Excel import definition (TEM)**

**New:** Create a new import definition

**Code:** Define a code for the import definition

**Description:** Enter a description for the import definition

**Header line before transactions:** Enable if there are header lines in the Excel file.

**Caption for first Header column:** Type in the row number where the transactions lines start from.

**Date order**: Choose the date format the file have

**Payment is shown as a negative amount**: If the amount in the file is negative, enable this parameter.

![Travel and Expense\](@site/static/img/media/tem-035.png)

#### Map fields to Excel columns

In this section, specify which columns in the Excel file should map to the fields in ExFlow Travel & Expense Management.

Example, if the card number is placed in column D in the Excel file type in D in the field **Card number.**

![Travel and Expense\](@site/static/img/media/tem-036.png)

**Card number:** Define the column for Credit card number.

**Card holder:** Define the column for Card holder.

**Transaction Date**: Define the column for transaction date.

**Transaction amount:** Define the column for transaction amount.

**Currency:** Define the column for currency, not mandatory.

**Billing amount:** Define the column for billing amount.

**Description**: Define the column for transaction description.

**Country:** Define the column for country, not mandatory.

**MCC:** Define the column for MCC, not mandatory.

**MCC description:** Define the column for MCC description, not mandatory.

**Unique reference:** Define the column for unique reference, not mandatory.

# ExFlow Travel & Expense Management -- For users

## Introduction

ExFlow Travel and Expense Management covers multiple steps in the expense and mileage submission process. It includes various roles with different responsibilities, all contributing to the best possible experience and the fastest process available.

This section documents the different roles within ExFlow Travel and Expense Management, detailing their functions and interactions. It also provides information on where to learn how to fulfill each role optimally.

## User

The user submits expenses and mileage. Simply take a photo of the receipts and submit them through the app within moments, or record mileage in the same app.

-   Link to mobile app section

-   Link to web portal section

The intended way to use ExFlow Travel and Expense Management is through the app, which can be accessed on any device normally used for apps. The app allows taking a photo of an expense directly, or plotting a route from one place to another, and immediately sending it for approval.

## ExFlow Travel & Expense Management mobile app

ExFlow Travel & Expense Management app, available on Android and iOS, allows effortless and quick submission of expenses and mileage from a mobile device. The created documents will be available to approvers and the finance department as soon as they are submitted.

The app is the intended method by which employees should submit their expenses and mileages, as it takes but a few clicks and inputs to submit while on the go.

Below are examples of how the app appears on various pages.

### Getting started with ExFlow Travel & Expense Management app

To start using the app, downloading it is the first step. It is available for download from both Google Play and the Apple App Store. Users can find it using the links below or by searching for \'Travel and Expense Management\' in the respective store.

**Go to:** Link to Google Play and Apple App Store

![A black and white logo Description automatically generated](@site/static/img/media/tem-037.png)

#### Login

Login into ExFlow Travel and Expense Management app requires two steps on your first login. Here is the customer ID screen below.

![A screenshot of a travel and expense form Description automatically generated](@site/static/img/media/tem-038.png)

When opening the app for the first time, enter a Customer ID and login credentials in that order. These details were provided by email when your account was set up. Alternatively, contact your Business Central administrator or IT department for assistance. The app will remember your customer ID and login for subsequent uses, but it is essential to keep them accessible in case of switching phones or encountering unforeseen circumstances.

### App interface

This section documents the different relevant elements in ExFlow Travel and Expense Management app.

#### Home screen on phone

After downloading the app, the Travel and Expense icon will appear on your home screen.

![A screenshot of a phone Description automatically generated](@site/static/img/media/tem-039.png)

If the icon shows an indicator, it means there are unsent expenses or mileages.

### Dashboard

The dashboard is the first page of the app, and it\'s where users will land upon opening it, assuming they are logged in.

![A screenshot of a phone Description automatically generated](@site/static/img/media/tem-040.png)

At the top is a refresh icon that indicates if synchronization with the cloud is needed. This occurs if it has been a while since the last synchronization or if there are pending entries.

![A white arrows in a circle Description automatically generated](@site/static/img/media/tem-041.png)

Synchronizing the data with the cloud can be done at any time, and can be achieved by:

-   Tapping the refresh icon in the top right.

-   Dragging down from the top of the dashboard.

The middle part of the Dashboard shows a list of Mileages, Expenses and Credit card transactions.

![A screenshot of a phone Description automatically generated](@site/static/img/media/tem-042.png)

If there are any rejected expenses or mileages, they will be listed at the top highlighted in orange.

The **Expenses** list will display your expenses that have not been sent for approval yet. Each item will show a title (if any) - taken from the description details, an amount with corresponding currency, and an indicator showing the number of attached photos.

The **Mileages** list will display your mileages that have not been sent for approval yet. Each item will show a title (if any) - taken from the description details, a distance, and the starting and destination address.

The **Credit card transactions** are credit card transactions made with your employee credit card. Each item will show a title, taken from the transaction details, and an amount with corresponding currency.

A red synchronization indicator will appear on expenses that have not been synchronized with the server.

#### Bottom menu

At the bottom of the screen, initiate the creation of a new Expense from scratch by selecting the credit card icon.

Selecting the **Camera** icon will immediately enable taking a photo of an expense receipt.

Finally, clicking the car icon will open the **Mileage** reporting tool.

![Travel and Expense\](@site/static/img/media/tem-043.png)

#### Menu

The **Menu**, accessed in the top left corner, gives the user the following options:

-   **Sign out**: Allows signing out.

-   **Dashboard**: Jump to the Dashboard.

-   **Vehicles**: Show the vehicle list. Add or edit vehicles by entering a **Name** and a **Registration No**.

-   **Use document scanner**: This option is only available on iOS 13+. Enabling this option will allow the camera to use the Document Scanner to capture one or more documents. Read more about the feature [Apple support](https://support.apple.com/en-us/HT210336). This will also move the **Photos** option to the front of an expense (now a button).

### Submitting an expense

**Go to:** Travel & Expense app

Initiate the process of submitting an expense in four different ways:

**Go to: Credit card** icon in the bottom menu to start creating an expense from scratch.

**Go to: Camera** icon in the bottom menu to start the process by taking a photo of a receipt.

Share a photo from the photo gallery and select the ExFlow Travel & Expense Management app icon. If sharing multiple photos, options include creating one expense with all photos or creating one expense per photo.

Touch and hold the app icon on the home screen to access the following options: **New mileage** or **New expense**. Shortcuts to these options can be created by dragging them onto the home screen.

After initiating an expense report, such as by taking a photo, the following view will be presented:

![A screenshot of a phone Description automatically generated](@site/static/img/media/tem-044.png)

At the top, choose to return to the dashboard. If any information or photos are added, the expense will be saved as a not-yet-sent expense.

If wishing to discard an expense, tap the **Delete** button at the top.

#### Photos

Photos are crucial in ExFlow Travel and Expense Management, enabling discarding receipts immediately after capturing them. Below are some key details regarding expense photos.

**Photo preview**: Tapping a photo opens a preview where options include deleting or rotating it. At the bottom, select which photo to preview.

![Travel and Expense\](@site/static/img/media/tem-045.png)

**Photos**: Enables selection of a photo from the gallery on the device. App permissions are required to access photos, media, and files.

![Travel and Expense\](@site/static/img/media/tem-046.png)

**Take photo**: Allows taking a photo

![Travel and Expense\](@site/static/img/media/tem-047.png)

In the image above, the user can see the available options when using the camera.

**Flash icon**: Enable or disable the flash on your device.

**Camera icon**: Take a photo.

#### Expense details

Below is a description of each term in an expense report. In the app, items highlighted in red are mandatory.

![A screenshot of a phone Description automatically generated](@site/static/img/media/tem-048.png)

**Date**: Modify the date of the expense. If a photo is attached, the date defaults to the day the photo was taken. If using the app to take a photo, today's date will be applied.

**Currency**: Select the correct currency from a list. Initial currency is based on the GPS location of the device.

**Amount**: The camera will interpret the amount from the receipt or enter the total amount of the expense manually.

**Country**: Select the country from a list. Initial country is based on the current GPS location of the device.

**Description**: The description will be the title for the expense.

**Paid by**: Choose between **Employee**, **Company card** or **Allowance**.

**Private** **use:** If the company card was used privately, mark the transaction as personal use.

**Category**: Select a category out of the ones provided by your company.

**Employees**: Add or remove employees. Your name is added by default.

**Attendees**: Add or remove attendees such as customers or guests.

**Job**: Enter a job. This is primarily used by consultancy firms. Once a job is entered, the **Job description** will display additional information.

**Task**: Enter a task. This is primarily used by consultancy firms. Once a task is entered, the **Task description** will display additional information.

**Additional info**: Enter any additional information.

**Slide to send**: Use this slider to send the expense for approval.

**Discussion**: The speech bubble icon in the top right corner displays any comments made by the approver. This is only relevant if the expense has been rejected.

### Submitting credit card transactions

Credit card transactions are commonly used for various expenses, including those paid on behalf of your company. ExFlow Travel & Expense Management simplifies reporting these transactions, especially when Credit Card Agreements are set up to automatically match them with appropriate expense reports.

#### Report an expense report when using company credit card

**Go to: Follow the step in "Submitting Expense"**

Report your expenses, add the details from your receipt, and swipe. The expense report will then wait in the dashboard until the transactions are imported to ExFlow Travel & Expense.

![A close-up of a screen Description automatically generated](@site/static/img/media/tem-049.png)

When the match is done, your expense report is sent to your manager for approval.

#### No match between expense report and credit transaction

If the transaction and the expense report does not match automatically the credit card transaction will be shown in the dashboard**.**

![A screenshot of a phone Description automatically generated](@site/static/img/media/tem-050.png)

**Go to: Credit card transaction**

![A screenshot of a phone Description automatically generated](@site/static/img/media/tem-051.png)

At the top of an opened credit card transaction, the button below will show how many expenses match this transaction. Whether these expenses are considered matches depends on their date, currency, and amount.

![A close-up of a paper Description automatically generated](@site/static/img/media/tem-052.png)

The color will indicate how precise the matches are:

-   Red: No match

-   Yellow: Partial match

-   Green: Good match

Tapping the expense button will allow the user to merge the transaction with an expense by pressing the check mark button. Again, the color to the left of an expense will indicate the quality of the match.

![A screenshot of a phone Description automatically generated](@site/static/img/media/tem-053.png)

A warning will pop up telling the user that this operation will copy the expense to the credit transaction and the expense will be deleted, and the transaction will contain all information.

**Click on continue**

![A screenshot of a phone Description automatically generated](@site/static/img/media/tem-054.png)

**Slide to send.**

![A screenshot of a phone Description automatically generated](@site/static/img/media/tem-055.png)

The transaction is now sent for approval to the manager.

### Submitting mileage

Submitting mileage is part of the ExFlow Travel and Expense Management and is made to be as easy as possible for the user, the use, to do. The user has the option to easily send in their mileage for approval with only a few clicks.

**Go to ''the car image''** ![A car with a yellow outline Description automatically generated with medium confidence](@site/static/img/media/tem-056.png)

The map at the top will display the current position. Drag and zoom on the map. Once a route is entered, tapping the **Alternative route** icon will switch between any alternative routes.

![A screen shot of a phone Description automatically generated](@site/static/img/media/tem-057.png)

Below are the fields that need to be completed for mileage to be sent for approval. A red line indicates that a field is mandatory.

**Description:** Enter the description of the trip.

**From**: Enter the address where the trip started.

**To**: Enter the address where the trip ended.

**Vehicle**: Choose the vehicle that has been used.

**Distance**: The distance is calculated automatically. It is possible to change the distance in this field manually.

**Description**: Enter a fitting description for the trip.

**Job**: Enter a job. This is primarily used by consultancy firms. When the job has been entered, the **Job description** will display additional information.

**Task**: Enter a task. This is primarily used by consultancy firms. When the task has been entered a task, the **Task description** will display additional information.

**Date**: Change the date of the trip.

**Additional info**: Enter any additional information.

**Slide to send**: Use this slider to send the expense for approval. The user will be asked if it is a returned trip. Here is the three options:

**Continue:** If the user is on a trip with more stops on the way, then choose to **continue trip.**

**Back to start:** This will return our trip back to the start, so there\'s no need to register for the trip twice.

**No:** This will end the trip.

![A screenshot of a phone Description automatically generated](@site/static/img/media/tem-058.png)

### Vehicles

Before the user can submit mileages in ExFlow Travel & Expense Management, a vehicle must be added.

Go to: **Menu item \-\--\> Vehicles - \--\> Add**

![A screenshot of a phone Description automatically generated](@site/static/img/media/tem-059.png)

![A close-up of a black and white sign Description automatically generated](@site/static/img/media/tem-060.png)

![A screenshot of a phone Description automatically generated](@site/static/img/media/tem-061.png)

**Name:** Enter a name for the vehicle that describes, good to add the registration number.

**Reimburse mileage**: If using your private vehicle, choose this option.

**Use by default:** Active it if it the preferred vehicle.

## ExFlow Travel & Expense Management AppsForDynamics365.com portal

Just like the mobile app any user can access the **AppsForDynamics365.com** web portal to create expenses and mileages.

### Login into the portal

Logging into the AppsForDynamics365 Portal requires login information provided by email when the account is set up. The login can be done in two different ways:

**User/password** or **Sign in with Microsoft.**

![A screenshot of a login screen Description automatically generated](@site/static/img/media/tem-062.png)

Alternatively, contact the Business Central administrator or IT department if logging in is not possible.

After logging in, this page will be displayed.

![A white screen with black border Description automatically generated](@site/static/img/media/tem-063.png)

### Dashboard

Go to: **Travel & Expense**

The dashboard is the next page in the portal.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-064.png)

Any rejected expenses or mileages will be listed at the top.

The **Expenses** list will display your expenses that have not been sent for approval yet. Each item will show this icon ![A stack of coins with a white background Description automatically generated](@site/static/img/media/tem-065.png)

The **Mileages** list will display your mileages that haven't been sent for approval yet. Each item will show with this car icon ![A purple car with headlights Description automatically generated](@site/static/img/media/tem-066.png)

The **Credit card transactions** are credit card transactions made with your employee credit card. Each item will show this card icon ![A blue and white credit card Description automatically generated](@site/static/img/media/tem-067.png)

### Submitting expenses

Though expense submission is suggested to be done via the app, it can be done through the web portal as well, almost the same way.

Go to: **Travel& Expense \-\--\> New Expense**

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-068.png)

Start the process of submitting an expense by filling out the following view:

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-069.png)

**File or photo**: Add a file or photo of the receipt or any relevant file by clicking on lefthand side area, or just drag them onto the area. Supported file types are PDF and most common image types.

**Date**: Select the date. Today\'s date is set by default.

**Currency**: Change the currency if needed.

**Amount:** Enter the amount.

**Country**: If needed, change the country for the expense. This defaults to your country setting in Business Central.

**Description**: Enter a description. This will be the title for the expense.

**Paid by**: In the field, choose between Employee and Company Card.

**Category**: Choose a category for the expense between the ones provided by your company.

**Save** or **Send:** Save the expense and send later or send immediately.

Below are optional fields when creating an expense, depending on your company policies.

**Employees**: Add or remove employees. Your name is added by default.

**Attendees**: Add or remove attendees. Examples include guests or customers.

**Job**: Type a job. This is primarily used for consultancy firms.

**Task**: Type a task. This is primarily used for consultancy firms.

**Additional info**: Enter any additional information that may be relevant.

### Credit card transactions

Credit card transactions are a popular way to pay for several things, and this also extends to paying on behalf of the company. ExFlow Travel and Expense Management simplifies reporting these transactions, especially if Credit Card Agreements have been set up, as automatic matching with fitting expense reports becomes possible.

A credit card transaction can be opened from the dashboard, details filled in, and then sent as an expense. If an expense has already been created for the credit card transaction, it can be merged with the credit card transaction.

#### Submitting credit card transactions before transaction is imported

Go to: **Travel & Expense \-\--\> New expense**

The process of submitting an expense begins by filling out the following view.

Important! This is the process for reporting an expense before the credit card transaction is imported to ExFlow Travel & Expense Management.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-070.png)

**File or photo**: Add a file or photo of the receipt or any relevant file by clicking on lefthand side area, or just drag them onto the area. Supported file types are PDF and most common image types.

**Date**: Select the date. Today\'s date is set by default.

**Currency**: Change the currency if needed.

**Amount:** Enter the amount.

**Country**: If needed, change the country for the expense. This defaults to your country setting in Business Central.

**Description**: Enter a description. This will be the title for the expense.

**Paid by**: In the field, choose between Employee and Company Card.

**Category**: Choose a category for the expense between the ones provided by your company.

**Save** or **Send:** Save the expense and send later or send immediately.

Below are optional fields when creating an expense, depending on your company policies.

**Employees**: Add or remove employees. Your name is added by default.

**Attendees**: Add or remove attendees. Examples include guests or customers.

**Job**: Type a job. This is primarily used for consultancy firms.

**Task**: Type a task. This is primarily used for consultancy firms.

**Additional info**: Enter any additional information that may be relevant.

**Await transaction**: Choose this option, if the expense should be matched to a credit card transaction.

#### Submitting credit card transactions when transaction is imported

Go to: **Travel & Expense \--\> Choose the credit card transaction**

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-071.png)

Start the process of submitting an expense by filling out the following view.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-072.png)

**File or photo**: Add a file or photo of the receipt or any relevant file by clicking on lefthand side area, or just drag them onto the area. Supported file types are PDF and most common image types.

**Description**: Enter a description. This will be the title for the expense.

**Private use**: If the company card was used privately, mark the transaction as personal use**.**

**Category**: Choose a category for the expense between the ones provided by your company.

**Save** or **Send:** Save the expense and send later or send immediately.

Below are optional fields when creating an expense, depending on your company policies.

**Employees**: Add or remove employees. Your name is added by default.

**Attendees**: Add or remove attendees. Examples include guests or customers.

**Job**: Type a job. This is primarily used for consultancy firms.

**Task**: Type a task. This is primarily used for consultancy firms.

**Additional info**: Enter any additional information that may be relevant.

**Await transaction**: Choose this option, if the expense should be matched to a credit card transaction.

#### Matching issue between expense report and credit card transaction

If the expense report and the credit card transaction cannot be matched automatically, the user needs to match them manually.

**Go to: Travel & Expense \-\--\> Choose the credit card transaction**

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-073.png)

On the left corner you find a drop down called **Match**.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-074.png)

Find the expense report that is connected to the credit card transaction.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-075.png)

Choose **Continue** and Send**.**

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-076.png)

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-077.png)

### Approver

As an approver, your role involves reviewing and deciding on expense and mileage submissions from assigned users. This includes receiving submissions, evaluating them, and either approving or rejecting them for further processing by the bookkeeping department.

This task is performed on the AppsForDynamics365.com portal, which provides a convenient overview of all expenses and mileage submissions awaiting approval. The portal also enables filtering the view for easy identification and approval of relevant expenses, as illustrated below.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-078.png)

#### Approval

Go to: **Travel & Expense \--\> For Approval**

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-079.png)

The **Approval** list gives the approver two easy ways to approve or reject expenses and mileages.

1.  Open an item, review the attachments and details. Then choose **Approve** or **Reject**.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-080.png)

2.  Use the checkboxes and select one or several items, then use the **Approve** or **Reject** buttons at the end of the list for all items at once.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-081.png)

#### Rejection

If the approver rejects an expense or mileage, the approver are required to leave a reason for the rejection, such that the person receiving the rejection may change the issues in question.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-082.png)

## ExFlow Travel & Expense in Business Central - Bookkeeper

### Bookkeeper

Bookkeeping is the final stage in processing expenses or mileage and can be efficiently managed with just a few clicks in ExFlow Travel & Expense Management\'s Business Central. Please note that Business Central is not designed for submitting expenses or mileage. For these purposes, kindly use the mobile app or the web portal.

### Overview in Business Central

The roles **Travel & Expense management, Business Manager** and **Accountant** contains the following tiles in the role center.

![A screenshot of a computer screen Description automatically generated](@site/static/img/media/tem-083.png)

### Expenses

After an expense has been submitted and approved it will be available to be processed by the bookkeeper in Business Central. Processing an expense can include a few different elements, such as:

-   Posting the expense.

-   Set a credit card transaction as private use

-   Splitting the expense between multiple employees.

-   Sending expenses back to either the approver or completely rejecting them.

#### Post an expense

Posting an approved expense can be done in a few short steps.

Go to: **Ready for posting (TEM)**

![A screenshot of a computer screen Description automatically generated](@site/static/img/media/tem-084.png)

Post an expense by clicking **F9** or select **Post**.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-085.png)

The user can only post expenses with status **Approved** (green color).

### Editing the expense

If the bookkeeper wants to review or edit the expense before it is posting it.

Go to: **Edit \--\> click on the "pin"**

The fields that can be edited in this view are:

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-086.png)

**Posting date**: The day on which the item is to be posted, useful for companies that prefer their expenses to be posted on specific dates of the month.

**Additional information**: The user can write any information or context that can be relevant.

**Lines**: The user can change the particulars of the expense in question, such as posting groups and which employees were relevant. The bookkeeper can also split the expenses between employees.

**Balance lines**: These are the lines that are to be paid out to employees.

**Dimensions**: Accessed through **Document** in the action bar, the dimension view allows the bookkeeper to change dimensions. These are Business Central standard.

### Splitting an expense

Some expenses that have already been approved will on occasion need to be split between the employees. This can be done manually from the expense edit-view.

Go to: **Edit \-\-\--\> click on the "pin" \-\-\--\> Details \--\>**

![Travel and Expense\](@site/static/img/media/tem-087.png)

1.  **Employees:** Click on the number

2.  Click **New**

3.  Add an employee

4.  Close the window

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-088.png)

5.  Click on **Split Expense**

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-089.png)

The lines will now be split according to the employees that are chosen.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-090.png)

#### Set as private use

If the employee has spent the corporate company card privately and forgot to mark it on the expense, the bookkeeper can do that.

Go to: **Edit \-\-\--\> Set as private use**

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-091.png)

After the expense is **set as private use** and it is posted. Navigate the private entries in **Employee Private Use**.

Go to: **Employee Private Use (TEM)**

Click on **Calculate Private Use Entries, t**he entries will now be shown.

![Travel and Expense\](@site/static/img/media/tem-092.png)

Export the entries to Excel by clicking **Export and post.**

#### Reject Expense

If the bookkeeper needs to reject an expense, please follow the instructions provided below:

Go to: **Edit \-\-\--\> Reject Expense**

The expense will be sent back to the employee; the bookkeeper will be forced to add a reason for the rejection.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-093.png)

#### Return to approver

If the bookkeeper needs to reject an expense, please follow the instructions provided below:

**Go to: Edit \-\-\--\> Return to Approver**

The expense will be sent back to the approver; the bookkeeper will be forced to add a reason for the rejection.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-094.png)

### Mileage

After the mileage has been submitted and approved it will be available to be processed by the bookkeeper in Business Central. Processing an expense can include a few different elements, such as:

-   Posting the mileage.

-   Editing the mileage.

-   Sending mileage back to either the approver or completely rejecting them.

#### Post an expense

Posting an approved expense can be done in a few short steps.

**Go to: Ready for posting**

(Or search after Expenses (TEM))

![A screenshot of a computer screen Description automatically generated](@site/static/img/media/tem-095.png)

Post mileage by clicking **F9** or select **Post**.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-096.png)

It is only possible to post expenses with status **Approved** (green color).

## Credit card transactions

Credit card transactions can be handled in a few ways through Business Central, both of which can add utility and efficiency to the workday of a bookkeeper. Following are the most prominent options for handling credit card transactions:

-   Manually creating credit card transactions.

-   Editing credit card transactions.

## Manually creating credit card transactions

The manual transaction list is useful for managing receiving physical invoices from your credit card provider or are otherwise not able to use the automatic import. By creating transaction entries for every single expenditure on the invoice the bookkeeper can match the credit card transactions against the expenses **in AppsForDynamics365.com**.

The bookkeeper can either create the transaction by inputting the correct data into each of the fields, or by importing a file in a format chosen while setting up **Credit Card Agreement**.

### Manually creating a credit card transaction by inputting data:

Go to: **Manual Credit Card Transactions (TEM)**

**New:** Create a new Credit Card Transaction.

**Employee:** Select who made the expenditure.

**Transaction Date:** Enter the date from which the employee made the expenditure.

**Card No.:** From a list of Employee specific card numbers

**Description:** Enter a description of the expense.

**Transaction Currency:** Select the currency used.

**Transaction Amount**: Enter the amount of the transaction.

**Billing Amount**: Enter the amount of the billing.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-097.png)

Click on **Create transactions** to send the transaction out to all card holders, they will get a notification in the app.

### Manually creating credit card transactions by import a file

Go to: **Manual Credit Card Transactions (TEM)**

**Import file:** Select import file

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-098.png)

The bookkeeper has three options to import transactions from **Import file**.

1.  Import a excel file

2.  Import from Bank statement

3.  Import from bank Reconciliation

### Viewing and editing transactions

In the credit card transaction view, the following will be shown:

Go to: **Company Card Transaction (TEM)**

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-099.png)

**Card No.**: The number for the credit card in question.

**Card holder Name:** The name of the employee who holds the card.

**Transaction Date:** The date upon which the transaction happened.

**Status:** The status of the transaction, which ranges from \'Sent to employee\' to \'Waiting for posting\' and documents each step in between.

**Point of Sales Name:** The name of the place where the purchase was made.

**Transaction Currency:** Currency used for the transaction.

**Transaction Amount:** The amount of money spent.

**Billing Amount:** The amount to be reimbursed to the employee.

**Suggested Category:** The category is suggested based on the Merchant Code Category and previous choices.

### Marking a transaction as handled

Go to: **Manual Credit Card Transactions (TEM)**

Once a transaction is created, the primary option to process it is to mark it as handled. This step is taken before the relevant employee addresses the transaction and is used in cases where the transaction has become irrelevant.

To mark a transaction as handled, do as follows.

1.  Select a transaction.

2.  In the action bar, select **Actions**, then **Mark Transaction as Handled**.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-100.png)



