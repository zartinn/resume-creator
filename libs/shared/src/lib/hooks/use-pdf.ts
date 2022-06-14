import { useEffect } from 'react';
import download from 'downloadjs';

const head = `
<head>
    <meta charset="utf-8">
    <title>ResumeTemplate</title>
    <base href="./">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="stylesheet" href="http://localhost:4201/styles.css"><link rel="stylesheet" href="main.css">
</head>`

export function usePdf() {

    const getContent = () => {
        const content = document.querySelector('.canvasContainer');
        const template = `<html>${head}<body>${content.outerHTML}</body></html>`
        return template;
    };
    
    const savePdf = () => {
        const template = getContent();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: template })
        };
        fetch('http://localhost:3333/generate-pdf', requestOptions)
            .then(res => res.blob())
            .then(blob => {
            download(blob, 'resume.pdf');
            });
    }
    return { savePdf };
}