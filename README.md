# Revup VSCode Extension

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## What is revup?

[revup](https://github.com/RadGuild/revup) is a tool for rapid resim development to run [scrypto](https://github.com/radixdlt/radixdlt-scrypto) code locally.

## Features

- Code completion
- Documentation on hover
- Commands (accessible through the command palette):
  - `Create revup file`: generates a `.rev` file in the workspace
  - `Run rev file`: runs a `.rev` file in the integrated terminal

### Supported resim Commands

- `call-method`
- `call-function`
- `epoch`
- `export-abi`
- `new-account`
- `publish`
- `reset`
- `set-default-account`
- `show`
- `show-configs`
- `show-ledger`
- `transfer`

## Installing locally

The extension is not currently published to the [marketplace](https://marketplace.visualstudio.com/vscode).

To install locally from the root of the project:

`npm install`

`npm install -g vsce`

`vsce package`

`code --install-extension revup-0.0.1.vsix`
