# Revup VSCode Extension

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## What is revup?

[revup](https://github.com/RadGuild/revup) is a tool for rapid resim development to run [scrypto](https://github.com/radixdlt/radixdlt-scrypto) code locally.

## Features

- Syntax highlighting for `.rev` files
- Code completion on `resim` commands

## Supported Commands

- `call-method`
- `call-function`
- `-e`
- `new-account`
- `publish`
- `reset`
- `set-default-account`
- `show`
- `show-configs`

## Installing locally

The extension is not currently published to the [marketplace](https://marketplace.visualstudio.com/vscode).

To install locally from the root of the project:

`npm install`

`npm install -g vsce`

`vsce package`

`code --install-extension revup-0.0.1.vsix`
