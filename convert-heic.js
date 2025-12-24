const fs = require('fs');
const path = require('path');
const heicConvert = require('heic-convert');
const { promisify } = require('util');

const directoryPath = path.join(__dirname, 'public', 'images', 'products', 'real');

async function convertHeicToJpg() {
    try {
        const files = await fs.promises.readdir(directoryPath);
        const heicFiles = files.filter(file =>
            path.extname(file).toLowerCase() === '.heic'
        );

        if (heicFiles.length === 0) {
            console.log('No HEIC files found.');
            return;
        }

        console.log(`Found ${heicFiles.length} HEIC files. Starting conversion...`);

        for (const file of heicFiles) {
            const inputPath = path.join(directoryPath, file);
            const outputFilename = path.basename(file, path.extname(file)) + '.jpg';
            const outputPath = path.join(directoryPath, outputFilename);

            // Skip if JPG already exists
            if (fs.existsSync(outputPath)) {
                console.log(`Skipping ${file} -> ${outputFilename} (already exists)`);
                continue;
            }

            console.log(`Converting ${file} -> ${outputFilename}...`);

            const inputBuffer = await fs.promises.readFile(inputPath);
            const outputBuffer = await heicConvert({
                buffer: inputBuffer, // the HEIC file buffer
                format: 'JPEG',      // output format
                quality: 0.8         // the jpeg compression quality, between 0 and 1
            });

            await fs.promises.writeFile(outputPath, outputBuffer);
            console.log(`Success: ${outputFilename}`);
        }

        console.log('All conversions complete!');

    } catch (err) {
        console.error('Error during conversion:', err);
    }
}

convertHeicToJpg();
