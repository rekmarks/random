import { promises as fs } from 'fs';

const raw = await fs.readFile('./input.csv', 'utf8');
const parsed = {};

raw.split('\n').forEach((line) => {
  if (line.startsWith('FIRST')) return;

  const tokens = line.split(',');
  const name = tokens[0].trim();

  if (tokens[1] === '-') {
    parsed[name] = [];
  } else if (tokens[1].startsWith('"')) {
    const dependencies = [tokens[1].substring(1).trim()];

    let i = 2;
    while (!tokens[i].endsWith('"')) {
      dependencies.push(tokens[i].trim());
      i++;
    }
    dependencies.push(tokens[i].replace('"', '').trim());
    parsed[name] = dependencies;
  } else if (/\w/ui.test(tokens[1])) {
    parsed[name] = [tokens[1].trim()];
  } else {
    throw new Error('parse failure');
  }
})

const graphComponents = Object.entries(parsed)
  .sort(([nameA], [nameB]) => {
    return nameA.localeCompare(nameB);
  })
  .sort(([_nameA, depsA], [_nameB, depsB]) => {
    return depsA.length - depsB.length;
  })
  .map(([controller, dependencies]) => {
    if (dependencies.length === 0) {
      return controller;
    }

    return dependencies.map((dependency) => `${controller} --> ${dependency}`)
  })
  .flat();

await fs.writeFile('graph.md', `
\`\`\`mermaid
graph TB
  ${graphComponents.join('\n  ')}
\`\`\`
`)

await fs.writeFile('graph.json', JSON.stringify(parsed, null, 2));

await fs.writeFile('graph.js', 'const rawGraph = ' + JSON.stringify(parsed, null, 2));
