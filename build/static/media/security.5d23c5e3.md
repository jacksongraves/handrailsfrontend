# Security

## How do you keep my data safe?

**handrails** uses industry-standard encryption. Your data and privacy matters to us.

## Why do you need me to upload files?

If your project needs to connect to a database, or host or interrogate an API, **handrails** needs to understand what those databases or APIs look like in order to scaffold effectively. This means a `schema.sql` or `swagger.json` file, for example (for a MySQL Schema dump or a Swagger OpenAPI specification, respectively). These files might be highly confidential and proprietary, so we encrypt them and only use them for scaffolding. There is no way for us (or anyone) to read what is in them without your secret key.

## Do you keep my data after I delete a project or cancel my account?

When you delete a specification file from your project, it is gone. When you delete a project, all elements associated with that project are gone (files, UI components, schemas, relationships, etc.). When you cancel your account, we retain your project data for 30 days in case you change your mind, after which point we delete all data associated with your account and send you an email confirmation.
