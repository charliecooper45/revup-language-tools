import * as fs from 'fs';
import * as path from 'path';
import { window, workspace, Uri } from 'vscode';
import { getWorkspacePath } from '../utils';

async function getFileName(): Promise<string> {
  const input = await window.showInputBox({
    title: 'Enter filename below (exclusive of file extension)',
    value: 'default',
  });
  return `${input}.rev`;
}

export async function createFileHandler() {
  const workspacePath = getWorkspacePath();

  try {
    const fileName = await getFileName();
    const pathName = path.resolve(workspacePath, fileName);

    if (fs.existsSync(pathName)) {
      window.showErrorMessage(`File ${fileName} already exists.`);
      return;
    }

    fs.writeFileSync(
      pathName,
      '// Generated revup file -> enter your commands below:'
    );

    window.showInformationMessage(`Revup file ${fileName} created!`);

    const openPath = Uri.file(pathName);
    const doc = await workspace.openTextDocument(openPath);
    await window.showTextDocument(doc);
  } catch (err) {
    window.showErrorMessage('Error creating revup file');
  }
}
