import { Document, Packer, Paragraph, TextRun, HeadingLevel } from 'docx';
import { AWLWord } from '../types';

export const generateDocxStudyGuide = async (words: AWLWord[]) => {
    const children: Paragraph[] = [
        new Paragraph({
            text: "Bí Kíp Thỉnh Kinh - Tây Du Ký AWL",
            heading: HeadingLevel.HEADING_1,
            spacing: { after: 400 },
        }),
        new Paragraph({
            text: "Danh sách từ vựng cần tập trung ôn luyện:",
            spacing: { after: 200 },
        }),
    ];

    words.forEach((w) => {
        children.push(
            new Paragraph({
                heading: HeadingLevel.HEADING_3,
                spacing: { before: 200, after: 100 },
                children: [
                    new TextRun({ text: `${w.word} `, bold: true, size: 28 }),
                    new TextRun({ text: `(${w.pos})`, italics: true, size: 24 }),
                ],
            })
        );
        children.push(
            new Paragraph({
                children: [
                    new TextRun({ text: "Nghĩa: ", bold: true }),
                    new TextRun({ text: w.meaningVi }),
                ],
            })
        );
        children.push(
            new Paragraph({
                children: [
                    new TextRun({ text: "Phiên âm: ", bold: true }),
                    new TextRun({ text: w.phonetic }),
                ],
                spacing: { after: 100 },
            })
        );
    });

    const doc = new Document({
        sections: [
            {
                children: children,
            },
        ],
    });

    const blob = await Packer.toBlob(doc);
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Bi_Kip_On_Tap_${new Date().toLocaleDateString('vi-VN').replace(/\//g, '-')}.docx`;
    a.click();
    window.URL.revokeObjectURL(url);
};
