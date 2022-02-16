import { useEffect } from "react";
import download from 'downloadjs';

export function usePdf() {
    let head: HTMLHeadElement;
    
    useEffect(() => {
        head = document.querySelector('head');
    }, []);

    const getContent = () => {
        const iframe = document.querySelector('iframe');
        const template = iframe.contentDocument.body.querySelector('.resumeCanvas');
        return template;
    };
    
    const savePdf = () => {
        const template = getContent();
        const completeHTML = `<html>${head.outerHTML}<body>${template.outerHTML}</body></html>`;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: completeHTML })
        };
        fetch('http://localhost:3333/generate-pdf', requestOptions)
            .then(res => res.blob())
            .then(blob => {
            download(blob, 'resume.pdf');
            });
    }
    return { savePdf };
}