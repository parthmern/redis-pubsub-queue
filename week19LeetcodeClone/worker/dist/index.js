"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const client = (0, redis_1.createClient)();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        while (1) {
            const res = yield client.brPop("problems", 0);
            console.log(res);
        }
    });
}
main();
// import { createClient } from "redis";
// const client = createClient();
// async function processSubmission(submission: string) {
//     const { problemId, code, language } = JSON.parse(submission);
//     console.log(`Processing submission for problemId ${problemId}...`);
//     console.log(`Code: ${code}`);
//     console.log(`Language: ${language}`);
//     // Here you would add your actual processing logic
//     // Simulate processing delay
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     console.log(`Finished processing submission for problemId ${problemId}.`);
// }
// async function startWorker() {
//     try {
//         await client.connect();
//         console.log("Worker connected to Redis.");
//         // Main loop 
//         // infinite checking that IS there anything in queue ?
//         while (true) {
//             try {
//                 const submission = await client.brPop("problems", 0);
//                 // @ts-ignore
//                 await processSubmission(submission.element);
//             } catch (error) {
//                 console.error("Error processing submission:", error);
//                 // Implement your error handling logic here. For example, you might want to push
//                 // the submission back onto the queue or log the error to a file.
//             }
//         }
//     } catch (error) {
//         console.error("Failed to connect to Redis", error);
//     }
// }
// startWorker();
