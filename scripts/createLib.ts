import * as readline from 'readline';
import * as fs from 'fs/promises';
import * as path from 'path';
import AdmZip from 'adm-zip';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const zipPath = path.join(import.meta.dirname, './template/template.zip');

interface PackageJson {
  name?: string;
  description?: string;
  author?: { name: string; email: string };
}

async function getNonEmptyInput(prompt: string): Promise<string> {
  let input: string;
  do {
    input = await new Promise<string>((resolve) => {
      rl.question(prompt, (answer) => {
        resolve(answer.trim());
      });
    });

    if (!input) {
      console.log('Required. Please try again.');
    }
  } while (!input);
  return input;
}

async function main() {
  try {
    const projectName = await getNonEmptyInput('Project name: ');
    const projectDescription = await getNonEmptyInput('Description: ');
    const authorName = await getNonEmptyInput('Author name: ');
    const email = await getNonEmptyInput('Email: ');

    const unzipPath = path.join('packages', projectName);

    if (await fs.stat(unzipPath).catch(() => false)) {
      console.log(`Directory ${unzipPath} already exists. Choose another name.`);
      return;
    }

    const zip = new AdmZip(zipPath);
    zip.extractAllTo(unzipPath, true);

    const packageJsonPath = path.join(unzipPath, 'package.json');
    const data = await fs.readFile(packageJsonPath, 'utf8');
    let packageJson: PackageJson = JSON.parse(data);
    delete packageJson.name;
    delete packageJson.description;
    delete packageJson.author;

    packageJson = {
      name: projectName,
      description: projectDescription,
      author: { name: authorName, email: email },
      ...packageJson
    };

    const newPackageJsonData = JSON.stringify(packageJson, null, 2) + '\n';
    await fs.writeFile(packageJsonPath, newPackageJsonData, 'utf8');

    console.info(`Success: ${unzipPath}`);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    rl.close();
  }
}

main();
