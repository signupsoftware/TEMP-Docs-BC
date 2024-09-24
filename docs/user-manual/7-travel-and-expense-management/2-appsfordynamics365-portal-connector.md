---
title: AppsForDynamics365 Portal Connector
sidebar_position: 2
hide_title: true
custom_edit_url: null
---

## AppsForDynamics365 Portal Connector

### Introduction

The AppsForDynamics365 Portal Connector facilitates the integration of the ExFlow Travel & Expense Management application with your Business Central system. Acting as an intermediary, it ensures that data is transmitted directly to Business Central in easily processed and digestible formats for storage or application.

The portal offers easy access for users who are not Business Central super users and may be on the road while performing tasks in ExFlow Travel & Expense Management.

This documentation provides all the necessary information to set up AppsForDynamics365 and connect it with Business Central.

### AppsForDynamics365 integration setup

This section documents the setup process for the AppsForDynamics365 integration. The integration module is used by ExFlow Travel & Expense Management to connect Business Central to the AppsForDynamics365 portal.

To complete the setup, use the AppsForDynamics365 setup wizard, which guides users through the necessary steps to establish the connection to Business Central. Access the wizard by either clicking the notification on Business Central front page or navigating to the AppsForDynamics365 portal configuration page using the search function. Once there, click the \"Configure connection\" button to open the wizard.

It is important that this wizard is run by someone with the necessary permissions to grant consent.

#### Configure AppsForDynamics365 connection

Go to: **AppsForDynamics365 Configuration**

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-001.png)

#### Verify license

The initial step in the process requires entering the customer ID and license key. These will be provided when an AppsForDynamics365 product is purchased. Alternatively, they can be found on the **My account** page on [www.appsfordynamics365.com](http://www.appsfordynamics365.com).

![Travel and Expense\](@site/static/img/media/tem-002.png)

#### Grant consent

To integrate AppsForDynamics365 with Business Central, consent must be provided. This consent allows AppsForDynamics365 to access the web service

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-003.png)

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-004.png)

After granting consent continue to specify localization settings.

#### Specify localization settings

Select the time zone being used and the preferred language for the portal. Note that the portal does not support all languages.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-005.png)

After selecting the time zone and language, click next and proceed to select authentication method.

#### Select method of authentication

There are three different methods of authentication available for the user to use to sign in to AppsForDynamics365. Microsoft login, username and password created in AppsForDynamics365, or Mixed mode is a combination of these two.

Users will have to be created in AppsForDynamics365 in a specific order regardless of authentication method.

**Microsoft login** is recommended for most companies that use Business Central as it allows the use of existing Microsoft logins just like in other applications.

**AppsForDynamics365 username and password** is useful for when most employees do not have access to Microsoft logins. Each user will have to have a password and username made.

**Mixed mode** allows the option to use both, which can be useful in some cases where individual employees may not have Microsoft logins.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-006.png)

After selecting a method of authentication, click next and proceed to register Business Central instance.

#### Register Business Central instance

The wizard will automatically register the Business Central instance with the AppsForDynamics365 account once \'Next\' is clicked, simply confirm that the information presented is correct.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-007.png)

After confirming this information, click next and proceed to activate company.

#### Activate company

This step requires establishing a webservice connection. The information displayed will be used by default. While the webservice address cannot be altered, feel free to adjust the description as needed.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-008.png)

Once this is in order, click next go to the admin permissions.

#### Grant permission to administrators

For maintenance and management of the AppsForDynamics365 integration a few users must be selected as administrators.

These administrators will be responsible for creating additional users in the future, if necessary. This can be done immediately through the link displayed in the wizard or later through the permission settings.![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-009.png)

The configuration wizard for the AppsForDynamics365 connection has been successfully completed.

![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-010.png)

#### Creating a AppsForDynamics365 user

To access the AppsForDynamics365 portal and use the ExFlow Travel & Expense Management app, each user must have a created user account. This login is shared across companies.

Every user requiring access to the AppsForDynamics365 portal must be set up as an AppsForDynamics365 user. The AppsForDynamics365 user extends the Business Central employee by making sure that settings set on the Employee are also enforced on the AppsForDynamics365 portal.

Go to: **AppsForDynamics365 logins**

There are two options available to create a new user.

1.  **Create logins for users:** Import users from BC users.

2.  **New:** If the user isn't created as a Business Central user, manually inter the user credentials.

> ![A screenshot of a computer Description automatically generated](@site/static/img/media/tem-011.png)

##### Create with a Business Central

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

#### Mapping the employee to AppsForDynamisc365

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
