# Changesets

This directory contains changeset files used for managing package versions and changelogs.

## How to use

When you make changes to packages, add a changeset:

```bash
pnpm changeset
```

This will prompt you to describe your changes and select which packages are affected.

When ready to release:

```bash
pnpm version  # Updates package versions based on changesets
pnpm release  # Publishes packages to npm
```

For more information, see the [changesets documentation](https://github.com/changesets/changesets).
