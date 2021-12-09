import {
  Hover,
  HoverParams,
  MarkupContent,
  MarkupKind,
  TextDocuments,
} from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { RevupCommand } from '../types';
import { getFirstWord } from '../utils';
import { HoverItem, hoverItems } from './hover-items';

function buildMarkupContent(hoverItem: HoverItem): MarkupContent {
  const { value } = hoverItem;

  return {
    kind: MarkupKind.Markdown,
    value,
  };
}

export function handleHover(
  documents: TextDocuments<TextDocument>,
  params: HoverParams
): Hover | undefined {
  const document = documents.get(params.textDocument.uri);
  if (!document) {
    return;
  }

  // check the given hover item is valid revup syntax
  const word = getFirstWord(document, params.position);
  const isValidCommand = Object.values(RevupCommand).includes(
    word as RevupCommand
  );
  if (!isValidCommand) {
    return;
  }

  // return the hover information for the command
  const command = word as RevupCommand;
  const hoverItem = hoverItems.find(
    (hoverItem) => hoverItem.command === command
  )!;

  const contents = buildMarkupContent(hoverItem);
  return {
    contents,
  };
}
