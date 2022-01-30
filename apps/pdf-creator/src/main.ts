import * as puppeteer from 'puppeteer';
import { createWriteStream } from 'fs';

async function generate() {
    const path = process.argv[2];
    if (!path) {
        console.error('Pass path as arguement with --args=\'/path/to/test.pdf\'');
        return;
    }
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:4201'); 
    const pdfBuffer = await page.pdf();

    
    await page.close();
    await browser.close();
    createWriteStream(path).write(pdfBuffer, (err) => {
        if (err) {
            console.error('Write unsuccesful: ', err);
        } else {
            console.log('Write successful');
        }
    });
    return pdfBuffer;
}

generate();
