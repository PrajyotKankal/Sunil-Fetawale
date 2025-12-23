const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const convert = require('heic-convert');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

async function convertHeicToJpg(inputPath, outputPath) {
    try {
        const inputBuffer = await readFile(inputPath);

        const outputBuffer = await convert({
            buffer: inputBuffer,
            format: 'JPEG',
            quality: 0.9
        });

        await writeFile(outputPath, outputBuffer);
        console.log(`✓ Converted: ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
        return true;
    } catch (error) {
        console.error(`✗ Error converting ${path.basename(inputPath)}:`, error.message);
        return false;
    }
}

async function convertAllHeicFiles() {
    const sourceDir = path.join(__dirname, '../temp_photos');
    const outputDir = path.join(__dirname, '../temp_photos/converted');

    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Get all HEIC files
    const files = fs.readdirSync(sourceDir);
    const heicFiles = files.filter(file =>
        file.toLowerCase().endsWith('.heic')
    );

    console.log(`\nFound ${heicFiles.length} HEIC files to convert...\n`);

    let successCount = 0;
    let failCount = 0;

    // Convert each file
    for (const file of heicFiles) {
        const inputPath = path.join(sourceDir, file);
        const outputFilename = file.replace(/\.heic$/i, '.jpg');
        const outputPath = path.join(outputDir, outputFilename);

        const success = await convertHeicToJpg(inputPath, outputPath);
        if (success) {
            successCount++;
        } else {
            failCount++;
        }
    }

    console.log(`\n✓ Conversion complete!`);
    console.log(`  Success: ${successCount}`);
    console.log(`  Failed: ${failCount}`);
    console.log(`\nConverted files saved to: ${outputDir}`);
}

convertAllHeicFiles().catch(console.error);
