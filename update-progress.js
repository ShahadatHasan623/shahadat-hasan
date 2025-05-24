const fs = require('fs');
const path = require('path');

const readmePath = path.join(__dirname, 'README.md');

// তোমার প্রগ্রেস আপডেট করো এখানে
const progress = {
  react: 65,
  node: 50,
  mongodb: 40,
};

function createProgressBar(percentage) {
  const totalBlocks = 20;
  const filledBlocks = Math.round((percentage / 100) * totalBlocks);
  const emptyBlocks = totalBlocks - filledBlocks;
  return '█'.repeat(filledBlocks) + '░'.repeat(emptyBlocks);
}

function updateProgressSection() {
  const readme = fs.readFileSync(readmePath, 'utf-8');

  const progressText = `
[${createProgressBar(progress.react)}] ${progress.react}%
[${createProgressBar(progress.node)}] ${progress.node}%
[${createProgressBar(progress.mongodb)}] ${progress.mongodb}%
`;

  const updatedReadme = readme.replace(
    /<!-- PROGRESS-BAR-START -->[\s\S]*<!-- PROGRESS-BAR-END -->/,
    `<!-- PROGRESS-BAR-START -->\n${progressText}\n<!-- PROGRESS-BAR-END -->`
  );

  fs.writeFileSync(readmePath, updatedReadme, 'utf-8');
  console.log('✅ README.md updated with latest progress!');
}

updateProgressSection();
