'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// let deploy = (linux) => {
//     return runOperation({
//         inProgressMessage: "Deploying code",
//         finishedMessage: "Deployed code",
//         operation: () => {
//             return this.createConfig(linux).then((clearConfig) => {
//                 return this.kuduClient.uploadZip().then(clearConfig);
//             });
//         }
//     });
// }

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "publish-to-azure" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.publish', () => {
        // The code you place here will be executed every time your command is executed

        let thenable: Promise<any> = new Promise((reject, resolve) => {
            console.log("this is the promise")
        });

        // Display a message box to the user
        vscode.window.setStatusBarMessage("Publishing...", 2000);
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}