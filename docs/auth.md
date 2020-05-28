# User Authentication

The login process currently uses three third-party platforms -- ORCID, Google and LinkedIn. The user can sign into dictyBase using any of these three options. If the user is not a registered member of dictyBase, they will be redirected to the login page with an error notification. In the future, there will also be a link to a registration form so they can sign up officially.

If the user logs in and is a registered member of dictyBase, their level of access will be determined by the user, roles and permissions APIs. The default level of access is read only.

## Authorization

Expected roles:

- Superuser
- Curator

Permissions:

- Admin
- Write
- Read

Resources:

- dsccontent (editable pages)
- dscstrain
- dscplasmid

The internal logic is set up using [ES6 classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes). These classes contain a variety of methods to determine information about the user, their roles and their permissions. One method of note is `verifyPermissions` which is used to make sure the user has the right permissions to access a feature. This first checks if the user has a `superuser` role (which gives full access, no need to check for permissions then). If they don't have this role, then it filters the permissions array to determine if they have the correct permission for the desired resource (i.e. "write", "dsccontent"). If they do, the method returns `true` and grants the user access.

There is also an `Authorization` render props component that uses the logic provided from these classes to create more specific scenarios (i.e. `canEditPages` which calls `verifyPermissions("write", dsccontent)` on the logged in user). This makes it easier to separate sections of components that require certain privileges to access, such as an edit button/toolbar.
