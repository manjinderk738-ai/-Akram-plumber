const fs = require('fs');
const { parse } = require('csv-parse/sync');
const puppeteer = require('puppeteer');
const { PDFDocument } = require('pdf-lib');

// 1. Read and parse CSV
const csvData = fs.readFileSync('data.csv', 'utf8');
const records = parse(csvData, {
  columns: true,
  skip_empty_lines: true
});

// Cache base64 images
const imageCache = {};
function getBase64Image(productName) {
  if (!imageCache[productName]) {
    try {
      const imgPath = `/app/assets/products/${productName}.png`;
      const imgBase64 = fs.readFileSync(imgPath).toString('base64');
      imageCache[productName] = `data:image/png;base64,${imgBase64}`;
    } catch (e) {
      console.error(`Failed to load image for ${productName}`);
      imageCache[productName] = '';
    }
  }
  return imageCache[productName];
}

// HTML Template base
const htmlBase = `<!DOCTYPE html>
<html>
<head>
<style>
  body { margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background: #000; color: #fff; }
  .slide { width: 1080px; height: 1920px; position: relative; overflow: hidden; background: #050505; box-sizing: border-box; }
  /* Header */
  .header-bg { position: absolute; top: 0; left: 0; width: 100%; height: 600px; background: linear-gradient(135deg, #18181b 0%, #09090b 100%); clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%); z-index: 1; border-bottom: 1px solid rgba(245, 158, 11, 0.2); }
  .header-dots { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-image: radial-gradient(rgba(245, 158, 11, 0.15) 2px, transparent 2px); background-size: 40px 40px; z-index: 2; }
  .header-content { position: absolute; top: 120px; width: 100%; text-align: center; z-index: 3; font-size: 48px; font-weight: 800; letter-spacing: 4px; color: #F59E0B; text-transform: uppercase; text-shadow: 0 4px 20px rgba(245, 158, 11, 0.4); }

  /* Content */
  .content { position: absolute; width: 100%; padding: 0 80px; box-sizing: border-box; z-index: 4; }

  /* Glass Box */
  .glass-box { background: rgba(24, 24, 27, 0.7); border: 1px solid rgba(245, 158, 11, 0.3); border-radius: 24px; padding: 60px; box-shadow: 0 20px 40px rgba(0,0,0,0.8), inset 0 0 20px rgba(245, 158, 11, 0.05); backdrop-filter: blur(16px); }
  .box-label { color: #FBBF24; font-size: 32px; font-weight: 600; letter-spacing: 2px; margin-bottom: 20px; text-transform: uppercase; }
  .box-text { font-size: 48px; font-weight: 600; line-height: 1.4; color: #e4e4e7; }
  .box-text.gold { color: #F59E0B; }

  /* Down Arrow */
  .down-arrow { text-align: center; color: #F59E0B; font-size: 48px; margin: -10px 0 30px 0; }

  /* Footer Pagination */
  .footer { position: absolute; bottom: 80px; width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 0 80px; box-sizing: border-box; z-index: 4; }
  .footer-product { color: rgba(245, 158, 11, 0.4); font-size: 32px; font-weight: 600; letter-spacing: 4px; text-transform: uppercase; }
  .pagination { display: flex; gap: 16px; }
  .dot { width: 48px; height: 6px; background: rgba(245, 158, 11, 0.2); border-radius: 3px; }
  .dot.active { background: #F59E0B; box-shadow: 0 0 10px rgba(245, 158, 11, 0.5); }

  /* Slide 3 specifics */
  .s3-header { text-align: center; margin-top: 120px; z-index: 4; position: relative; }
  .s3-verified { color: rgba(245, 158, 11, 0.8); font-size: 28px; letter-spacing: 8px; margin-bottom: 16px; }
  .s3-title { font-size: 64px; font-weight: 800; letter-spacing: 4px; text-transform: uppercase; color: #fff; text-shadow: 0 0 20px rgba(255,255,255,0.2); }
  .product-showcase { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 600px; height: 800px; display: flex; justify-content: center; align-items: center; z-index: 3; }
  .product-glow { position: absolute; width: 400px; height: 400px; background: radial-gradient(circle, rgba(245, 158, 11, 0.4) 0%, transparent 70%); opacity: 0.8; z-index: 1; }
  .product-image { position: relative; z-index: 4; max-width: 100%; max-height: 100%; object-fit: contain; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.9)); }
  .s3-cta { position: absolute; bottom: 240px; left: 50%; transform: translateX(-50%); background: linear-gradient(90deg, #F59E0B, #FBBF24); color: #000; font-size: 40px; font-weight: 800; padding: 32px 80px; border-radius: 80px; text-transform: uppercase; z-index: 5; box-shadow: 0 10px 40px rgba(245, 158, 11, 0.4); white-space: nowrap; }
  .s3-footer { position: absolute; bottom: 80px; width: 100%; text-align: center; color: rgba(255,255,255,0.4); font-size: 28px; letter-spacing: 4px; text-transform: uppercase; }

  /* Brackets */
  .bracket { position: absolute; width: 60px; height: 60px; border-color: #F59E0B; border-style: solid; z-index: 10; opacity: 0.6; }
  .tl { top: 60px; left: 60px; border-width: 4px 0 0 4px; }
  .tr { top: 60px; right: 60px; border-width: 4px 4px 0 0; }
  .bl { bottom: 60px; left: 60px; border-width: 0 0 4px 4px; }
  .br { bottom: 60px; right: 60px; border-width: 0 4px 4px 0; }
</style>
</head>
<body>
`;

// 2. HTML Template generator
function generateSlideHTML(record, slideIndex) {
  const product = record['Product'];
  const hookTextRaw = record['Slide 1 Hook'];
  const causeSolutionRaw = record['Slide 2 Cause & Solution'];
  const ctaRaw = record['Slide 3 CTA'];

  const hookParts = hookTextRaw.split('\\n');
  const hookHeader = hookParts[0];
  const hookBody = hookParts[1] || '';

  const csParts = causeSolutionRaw.split('\\n');
  const csHeader = csParts[0];
  const csBodyRaw = csParts[1] || '';

  let causeText = csBodyRaw;
  let fixText = '';
  const fixSplitIndex = csBodyRaw.indexOf('. This');
  if (fixSplitIndex !== -1) {
    causeText = csBodyRaw.substring(0, fixSplitIndex + 1);
    fixText = csBodyRaw.substring(fixSplitIndex + 2);
  } else {
    const splitArr = csBodyRaw.split('. ');
    if (splitArr.length > 1) {
      causeText = splitArr[0] + '.';
      fixText = splitArr.slice(1).join('. ');
    }
  }

  const ctaParts = ctaRaw.split(' [');
  let ctaText = ctaRaw;
  if (ctaParts.length > 1) {
    ctaText = ctaParts[0] + ' ' + ctaParts[1].replace(']', '');
  }

  const imgSrc = getBase64Image(product);

  if (slideIndex === 1) {
    return htmlBase + `
  <div class="slide">
    <div class="header-bg"><div class="header-dots"></div></div>
    <div class="header-content">${hookHeader}</div>
    <div class="content" style="top: 600px;">
      <div class="glass-box" style="margin-top: 200px;">
        <div class="box-text">${hookBody}</div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-product">${product}</div>
      <div class="pagination"><div class="dot active"></div><div class="dot"></div><div class="dot"></div></div>
    </div>
  </div>
</body></html>`;
  } else if (slideIndex === 2) {
    return htmlBase + `
  <div class="slide">
    <div class="header-bg"><div class="header-dots"></div></div>
    <div class="header-content" style="font-size: 40px; margin-top: 130px;">${csHeader}</div>
    <div class="content" style="top: 350px;">
      <div class="glass-box" style="margin-bottom: 40px;">
        <div class="box-label">— ROOT CAUSE</div>
        <div class="box-text">${causeText}</div>
      </div>
      <div class="down-arrow">↓</div>
      <div class="glass-box">
        <div class="box-label">— THE FIX</div>
        <div class="box-text gold">${fixText}</div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-product">${product}</div>
      <div class="pagination"><div class="dot"></div><div class="dot active"></div><div class="dot"></div></div>
    </div>
  </div>
</body></html>`;
  } else if (slideIndex === 3) {
    return htmlBase + `
  <div class="slide">
    <div class="bracket tl"></div><div class="bracket tr"></div>
    <div class="bracket bl"></div><div class="bracket br"></div>
    <div class="s3-header">
      <div class="s3-verified">OFFICIAL • VERIFIED</div>
      <div class="s3-title">${product}</div>
    </div>
    <div class="product-showcase">
      <div class="product-glow"></div>
      <img src="${imgSrc}" class="product-image">
    </div>
    <div class="s3-cta">${ctaText}</div>
    <div class="s3-footer">${product} • LIMITED STOCK</div>
  </div>
</body></html>`;
  }
}

// 3. Main script
(async () => {
  console.log(`Processing ${records.length} records...`);

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1920 });

  const finalPdf = await PDFDocument.create();

  for (let i = 0; i < records.length; i++) {
    const record = records[i];
    console.log(`Generating row ${i+1}/${records.length} (${record['Product']})`);

    for (let slideNum = 1; slideNum <= 3; slideNum++) {
      const html = generateSlideHTML(record, slideNum);

      await page.setContent(html, { waitUntil: 'load' });
      const pdfBytes = await page.pdf({
        width: '1080px',
        height: '1920px',
        printBackground: true,
        pageRanges: '1'
      });

      const slideDoc = await PDFDocument.load(pdfBytes);
      const [copiedPage] = await finalPdf.copyPages(slideDoc, [0]);
      finalPdf.addPage(copiedPage);
    }
  }

  await browser.close();

  const finalPdfBytes = await finalPdf.save();
  fs.writeFileSync('slides.pdf', finalPdfBytes);
  console.log('Successfully generated slides.pdf!');

})();
