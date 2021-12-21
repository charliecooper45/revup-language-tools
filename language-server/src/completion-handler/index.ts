import {
  CompletionItem,
  CompletionItemKind,
  CompletionParams,
} from 'vscode-languageserver';
import { RevupCommand } from '../types';

const completionItems: CompletionItem[] = [
  {
    label: 'call-function $package <blueprint> <function> <args> -> <response>',
    kind: CompletionItemKind.Text,
    data: RevupCommand.CALL_FUNCTION,
    detail: 'Calls a function.',
  },
  {
    label: 'call-method $component <method> <args> -> <response>',
    kind: CompletionItemKind.Text,
    data: RevupCommand.CALL_METHOD,
    detail: 'Calls a method.',
  },
  {
    label: 'epoch <increment>',
    kind: CompletionItemKind.Text,
    data: RevupCommand.EPOCH,
    detail: 'Increases or displays the current epoch.',
  },
  {
    label: 'export-abi <package> <blueprint>',
    kind: CompletionItemKind.Text,
    data: RevupCommand.EXPORT_ABI,
    detail: 'Exports the ABI of a blueprint.',
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
  },
  {
    label: 'show <address>',
    kind: CompletionItemKind.Text,
    data: RevupCommand.SHOW,
    detail: 'Displays the content behind an address.',
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
