import { commands, ExtensionContext } from 'vscode';
import { createFileHandler } from './create-file';
import { runFileHandler } from './run-file';
import { Commands } from './types';

export function addCommands(context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand(Commands.CREATE_FILE, createFileHandler),
    commands.registerCommand(Commands.RUN_FILE, runFileHandler)
  );
}
