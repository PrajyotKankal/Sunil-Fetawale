const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function optimizeImage(inputPath, outputDir, filename) {
    try {
        const outputPath = path.join(outputDir, filename);

        // Resize and optimize for web use
        await sharp(inputPath)
            .resize(1200, 1200, {
                fit: 'inside',
                withoutEnlargement: true
            })
            .jpeg({
                quality: 85,
                progressive: true
            })
            .toFile(outputPath);

        const inputStats = fs.statSync(inputPath);
        const outputStats = fs.statSync(outputPath);
        const reduction = ((inputStats.size - outputStats.size) / inputStats.size * 100).toFixed(1);

        console.log(`✓ ${filename}: ${(inputStats.size / 1024 / 1024).toFixed(2)}MB → ${(outputStats.size / 1024 / 1024).toFixed(2)}MB (${reduction}% reduction)`);
        return true;
    } catch (error) {
        console.error(`✗ Error optimizing ${filename}:`, error.message);
        return false;
    }
}

async function optimizeAllImages() {
    // Source directories
    const convertedDir = path.join(__dirname, '../temp_photos/converted');
    const jpgDir = path.join(__dirname, '../temp_photos');

    // Output directory
    const outputDir = path.join(__dirname, '../temp_photos/optimized');

    // Create output directory
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log('\n📸 Starting image optimization...\n');

    let successCount = 0;
    let totalCount = 0;

    // Process converted HEIC -> JPG files
    console.log('Processing converted images:');
    const convertedFiles = fs.readdirSync(convertedDir).filter(f => f.toLowerCase().endsWith('.jpg'));
    for (const file of convertedFiles) {
        totalCount++;
        const inputPath = path.join(convertedDir, file);
        const success = await optimizeImage(inputPath, outputDir, file);
        if (success) successCount++;
    }

    console.log('\nProcessing original JPG files:');
    // Process original JPG files
    const jpgFiles = fs.readdirSync(jpgDir).filter(f =>
        f.toLowerCase().endsWith('.jpg') &&
        !f.startsWith('.')
    );
    for (const file of jpgFiles) {
        totalCount++;
        const inputPath = path.join(jpgDir, file);
        const outputFilename = `original-${file}`;
        const success = await optimizeImage(inputPath, outputDir, outputFilename);
        if (success) successCount++;
    }

    console.log(`\n✅ Optimization complete!`);
    console.log(`   Success: ${successCount}/${totalCount}`);
    console.log(`   Output: ${outputDir}\n`);
}

optimizeAllImages().catch(console.error);
