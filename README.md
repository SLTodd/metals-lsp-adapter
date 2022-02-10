# Scala (Metals) LSP Adapter for Atom

## Overview

Minimal LSP adapter for [Atom](https://atom.io/) to replace the inactive [ide-scala](https://atom.io/packages/ide-scala) package.

![metals-lsp-adapter](https://user-images.githubusercontent.com/2996984/153314850-3405308c-0e90-468e-9eb5-282c64b2a656.png)

## Dependencies

Requires [atom-ide-base](https://github.com/atom-community/atom-ide-base).

## Installation

Using [Coursier](https://get-coursier.io/) install [Metals](https://scalameta.org/metals/) as follows:

```cd [install location]
coursier bootstrap org.scalameta:metals_2.12:0.11.1 -o metals -f
```

Then either put the location on your PATH or enter the full path in the config.

May require restart of Atom.

## License

[MIT License](LICENSE.md).
