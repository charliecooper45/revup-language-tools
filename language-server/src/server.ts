import { createConnection } from 'vscode-languageserver/node';
import {
  TextDocuments,
  ProposedFeatures,
  TextDocumentSyncKind,
  InitializeResult,
  HoverParams,
} from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { handleHover } from './hover-handler';
import {
  handleCompletion,
  handleCompletionResolve,
} from './completion-handler';

const connection = createConnection(ProposedFeatures.all);

const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

function handleInitialization(): InitializeResult {
  const result: InitializeResult = {
    capabilities: {
      textDocumentSync: TextDocumentSyncKind.Incremental,
      completionProvider: {
        resolveProvider: true,
      },
      hoverProvider: true,
    },
  };
  return result;
}

connection.onInitialize(handleInitialization);

connection.onCompletion(handleCompletion);

connection.onCompletionResolve(handleCompletionResolve);

connection.onHover((params: HoverParams) => handleHover(documents, params));

documents.listen(connection);

connection.listen();
