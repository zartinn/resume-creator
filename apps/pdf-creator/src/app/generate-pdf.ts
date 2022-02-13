import * as puppeteer from 'puppeteer';
import { createWriteStream, writeFileSync, unlinkSync } from 'fs';

export async function generatePDF(html: string): Promise<string> {
  const assetPath = __dirname + '/assets';
  html = html.replace('<base href="/">', '<base href="./">');
  writeFileSync(assetPath + '/temp.html', html);
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file://' + assetPath + '/temp.html');
  const pdfBuffer = await page.pdf({ format: 'a4' });
  unlinkSync(assetPath + '/temp.html');
  await page.close();
  await browser.close();
  const pdfPath = assetPath + '/test.pdf';
  await writeStream(pdfPath, pdfBuffer);
  return pdfPath;
}

function writeStream(path, buffer): Promise<void> {
  return new Promise((resolve, reject) => {
    createWriteStream(path).write(buffer, (err) => {
      if (err) {
        reject();
      } else {
        resolve();
      }
    });
  });
}
