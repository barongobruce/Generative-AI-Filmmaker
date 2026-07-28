const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const imageDir = path.join(__dirname, "../src/images");

async function optimizeImages() {
  const files = fs.readdirSync(imageDir);

  for (const file of files) {
    const filePath = path.join(imageDir, file);
    const ext = path.extname(file).toLowerCase();

    if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;

    try {
      const image = sharp(filePath);
      const metadata = await image.metadata();

      let width = metadata.width;

      // Resize based on filename
      if (file.includes("desktop")) {
        width = Math.min(width, 1600);
      } else if (file.includes("mobile")) {
        width = Math.min(width, 700);
      } else if (file === "bruce.png") {
        width = Math.min(width, 900);
      } else {
        width = Math.min(width, 1200);
      }

      const buffer = await image
        .resize({
          width,
          withoutEnlargement: true,
        })
        .png({
          quality: 80,
          compressionLevel: 9,
        })
        .toBuffer();

      fs.writeFileSync(filePath, buffer);

      const sizeKB = (buffer.length / 1024).toFixed(0);

      console.log(`✓ ${file} → ${sizeKB} KB`);
    } catch (err) {
      console.log(`✗ ${file}: ${err.message}`);
    }
  }

  console.log("\nDone optimizing images!");
}

optimizeImages();