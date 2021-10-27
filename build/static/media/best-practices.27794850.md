# Best Practices

**handrails** scaffolds a project with a few key best practices in mind, to encourage good habits early on.

## Documentation

Where applicable, **handrails** autogenerates **jsDoc** comments throughout the project. We're not omniscient, so if you're scaffolding a `signInPage` **view**, we won't try to outline a detailed paragraph about this being a "sign in page where the user supplies X, Y, and Z details". However, we infer variable and typing information where possible, and where **handrails** encourages something opinionated or nuanced, it will be documented for clarity.

## Naming Conventions

**handrails** attempts to enforce a naming convention across variables, classes, functions, types, and in general anything with a name. In general, this looks like:

- **Variables and Functions:** `camelCase`, such as `thisIsAVariable = 1`, and `thisIsAFunction()`
- **Classes and Types:** `pascalCase`, such as `ThisIsAClass { ... }` and `ThisIsAType = string;`, note, this also covers React components and similar reusable structural elements
- **Constants:** `CONSTANT_CASE`, such as `THIS_IS_A_GLOBAL_CONSTANT`, also covers TypeScript `enum` and `process.env` variables
- **Folders:** `param-case`, such as `this-is-a-folder-name`
- **Files:** `camelCase` or `pascalCase` or `param-case`, depending on the typical convention for that type of file:
  - Most files will use `camelCase`, such as controllers, routers, business logic boilerplate
  - Database models, UI components, and other object definition files tend to use `pascalCase`
  - Some edge cases use `param-case`, but these are not common

## Latest Everything

**handrails** uses the latest versions of, well, everything, unless there are known issues which would necessitate using an older version of a language, framework, or package. If known issues exist, they will be documented here. At a high level, **handrails** uses ES7 syntax, Node 16+, TypeScript 4+, and the latest version of any dependencies required for scaffolding your project (yes, they've been tested on example scaffolds).

## Imports, Exports, and Aliasing

Perhaps more of a design pattern than a best practice, **handrails** enforces `import` and `export` syntax, and to streamline deeply nested or interdependent file and folder structures, aliasing is provided where applicable. Further, in most cases, so long as there is not the risk of a namespace collision, nested files are exported upwards, so that all elements are importable from the top level (for example, `import { fnName } from "../../../../path/to/resource"` could also be written as `import { fnName } from "path"` ).

## Testing

**handrails** makes testing an integral part of your code, and wherever relevant, testing scripts are set up and populated based on input schema and specification information. Obviously, these tests will need to grow and adapt as the project evolves, especially with introduction of business logic.
