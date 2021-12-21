import {
  CompletionItem,
  CompletionItemKind,
  CompletionParams,
  InsertTextFormat,
} from 'vscode-languageserver';
import { RevupCommand } from '../types';

const completionItems: CompletionItem[] = [
  {
    label: 'call-function $package <blueprint> <function> <args> -> <response>',
    kind: CompletionItemKind.Text,
    data: RevupCommand.CALL_FUNCTION,
    detail: 'Calls a function.',
    insertText:
      'call-function \\$package ${1:<blueprint>} ${2:<function>} ${3:<args>} -> ${4:<response>}',
    insertTextFormat: InsertTextFormat.Snippet,
  },
  {
    label: 'call-method $component <method> <args> -> <response>',
    kind: CompletionItemKind.Text,
    data: RevupCommand.CALL_METHOD,
    detail: 'Calls a method.',
    insertText:
      'call-method \\$component ${1:<method>} ${2:<args>} -> ${3:<response>}',
    insertTextFormat: InsertTextFormat.Snippet,
  },
  {
    label: 'epoch <increment>',
    kind: CompletionItemKind.Text,
    data: RevupCommand.EPOCH,
    detail: 'Increases or displays the current epoch.',
    insertText: 'epoch ${1:<increment>}',
    insertTextFormat: InsertTextFormat.Snippet,
  },
  {
    label: 'export-abi <package> <blueprint>',
    kind: CompletionItemKind.Text,
    data: RevupCommand.EXPORT_ABI,
    detail: 'Exports the ABI of a blueprint.',
    insertText: 'export-abi ${1:<package>} ${2:<blueprint>}',
    insertTextFormat: InsertTextFormat.Snippet,
  },
  {
    label: 'new-account -> account pubkey',
    kind: CompletionItemKind.Text,
    data: RevupCommand.NEW_ACCOUNT,
    detail: 'Creates an account.',
  },
  {
    label:
      'call-function $package <blueprint> new <args> -> resourceDef component',
    kind: CompletionItemKind.Text,
    data: RevupCommand.NEW_COMPONENT,
    detail: 'Creates a new component instance.',
    insertText:
      'call-function \\$package ${1:<blueprint>} new ${2:<args>} -> resourceDef component',
    insertTextFormat: InsertTextFormat.Snippet,
  },
  {
    label: 'publish . -> package',
    kind: CompletionItemKind.Text,
    data: RevupCommand.PUBLISH,
    detail: 'Publishes a package.',
  },
  {
    label: 'reset',
    kind: CompletionItemKind.Text,
    data: RevupCommand.RESET,
    detail: 'Resets the data directory.',
  },
  {
    label: 'set-default-account <account> <pubkey>',
    kind: CompletionItemKind.Text,
    data: RevupCommand.SET_ACCOUNT,
    detail: 'Sets the default account.',
    insertText: 'set-default-account ${1:<account>} ${2:<pubkey>}',
    insertTextFormat: InsertTextFormat.Snippet,
  },
  {
    label: 'show <address>',
    kind: CompletionItemKind.Text,
    data: RevupCommand.SHOW,
    detail: 'Displays the content behind an address.',
    insertText: 'show ${1:<address>}',
    insertTextFormat: InsertTextFormat.Snippet,
  },
  {
    label: 'show-configs',
    kind: CompletionItemKind.Text,
    data: RevupCommand.SHOW_CONFIGS,
    detail: 'Displays configurations.',
  },
  {
    label: 'show-ledger',
    kind: CompletionItemKind.Text,
    data: RevupCommand.SHOW_LEDGER,
    detail: 'Displays ledger summary.',
  },
  {
    label: 'transfer <resource> <recipient>',
    kind: CompletionItemKind.Text,
    data: RevupCommand.TRANSFER,
    detail: 'Transfers resource to another account.',
    insertText: 'transfer ${1:<resource>} ${2:<recipient>}',
    insertTextFormat: InsertTextFormat.Snippet,
  },
];

export function handleCompletion(params: CompletionParams): CompletionItem[] {
  // only autocomplete at the start of a line
  if (params.position?.character > 1) {
    return [];
  }

  return completionItems;
}

export function handleCompletionResolve(item: CompletionItem): CompletionItem {
  return completionItems.find(
    (completionItem) => completionItem.data === item.data
  )!;
}
