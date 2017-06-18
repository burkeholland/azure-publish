// exports.runOperation = ({ operation, inProgressMessage, finishedMessage }) => {
//     return new Promise((resolve, reject) => {
//         const spinner = new Spinner(inProgressMessage);
//         spinner.setSpinnerString(18);
//         spinner.start();

//         try {
//             const result = operation();
//             if (result && result.then) {
//                 result.then(stopSpinner, reject);
//             } else {
//                 stopSpinner(result);
//             }
//         }
//         catch (error) {
//             reject(error);
//         }

//         function stopSpinner(value) {
//             spinner.stop(true);
//             exports.logCompletedOperation(finishedMessage);
//             resolve(value);
//         }
//     });
// };