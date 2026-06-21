const fs = require('fs');
const { PDFDocument } = require('pdf-lib');

(async () => {
  try {
    const pdfBytes = fs.readFileSync('output.pdf');
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const pageCount = pdfDoc.getPageCount();
    console.log(`Verification: output.pdf has ${pageCount} pages.`);
    if (pageCount === 75) {
      console.log('SUCCESS: Page count matches exactly 75.');
    } else {
      console.error('ERROR: Page count is incorrect.');
    }
  } catch (err) {
    console.error('Failed to verify PDF:', err);
  }
})();
