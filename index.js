const exec_start_time = new Date().getSeconds();
const { writeFileSync } = require('fs');
const { execSync } = require('child_process');
const ts_config_file = `{
  "compilerOptions": {
    "target": "es2016",
    "jsx": "react",
    "module": "ES6",
    "moduleResolution": "node",
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "outDir": "./dist",
    "isolatedModules": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": [
    "./src/**/*.ts",
    "./src/**/*.tsx"
  ]
}
`;
const html_file = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="index.css">
  <title></title>
</head>
<body id="root">
  <script src="index.js"></script>
</body>
</html>
`;
const index_tsx_file = `import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

new EventSource('/esbuild').addEventListener('change', () => window.location.reload());

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <br /><br /><br />
    <p>Oi, eu sou o <a target="_blank" href="https://github.com/caiodanielnunessantos/">Caiozinho</a>.</p>
    <p>Edite o arquivo <code>./src/index.tsx</code> para desenvolver.</p>
    <p>Edite o arquivo <code>./src/index.css</code> para escolher cores mais bonitas.</p>
  </React.StrictMode>
);
`;
const colors = [
  'red', 'pink', 'orange', 'yellow', 'blue', 'green', 'magenta', 'lime', 'purple', 'black', 'grey', 'white', 'cyan'
];
const index_css_file = `body {
  background-color: ${colors[(new Date().getMilliseconds() * 17) % colors.length]};
  /* Perdão pelo layout horrível dessa página
     Escolha aqui seus próprios estilos */
}

p {
  color: ${colors[(new Date().getMilliseconds() * 398) % colors.length]};
  font-size: 2rem;
  text-align: center;
}

a {
  color: ${colors[(new Date().getMilliseconds() * 2037) % colors.length]};
}

code {
  color: ${colors[(new Date().getMilliseconds() * 9203) % colors.length]};
}
`;
console.log('Oi, eu sou o Caiozinho (https://github.com/caiodanielnunessantos/)');
console.log('Obrigado por usar meu pacote de inicialização de projetos React.');
console.log('Inicializando o "package.json"...');
execSync('npm init -y');
console.log('Criando diretórios...');
execSync('mkdir www');
execSync('mkdir src');
console.log('Eu não sei escolher cores');
console.log('Escolhendo cores aleatórias...');
console.log('Escrevendo esboços...');
writeFileSync('./www/index.html', html_file);
writeFileSync('./tsconfig.json', ts_config_file);
writeFileSync('./src/index.tsx', index_tsx_file);
writeFileSync('./src/index.css', index_css_file);
console.log('Criando scripts de desenvolvimento...');
const pkg_json = require('./package.json');
pkg_json['scripts'] = {
  build: "esbuild src/index.tsx --bundle --minify --sourcemap --target=firefox110,chrome109 --outfile=bundle.js",
  dev: "esbuild src/index.tsx --bundle --minify --sourcemap --target=firefox110,chrome109 --outdir=www --watch --servedir=www"
};
writeFileSync('./package.json', JSON.stringify(pkg_json, null, 4));
console.log('Instalando o React...');
console.log('Instalando pacotes react, react-dom');
execSync('npm install --save react react-dom');
console.log('Instalando dependências de desenvolvimento...');
console.log('Instalando os pacotes esbuild, typescript, @types/react e @types/react-dom');
execSync('npm install --save-dev esbuild typescript @types/react @types/react-dom');
const duration = new Date().getSeconds() - exec_start_time;
if (duration < 20) {
  console.log(`Template inicializado rapidamente em ${duration} segundos.`);
  console.log('Tente executar "npx create-react-app" e compare o quanto demora');
} else if (duration < 60) {
  console.log(`Template inicializado em ${duration} segundos.`);
} else if (duration < 3600) {
  console.log(`Template inicializado em ${duration / 60} minutos e ${duration % 60} segundos.`);
  console.log('A inicialização do template levou mais tempo do que o esperado.');
} else {
  console.log(`Template inicializado em ${duration / 3600} horas, ${(duration % 3600) / 60} minutos e ${duration % 60} segundos.`);
  console.log('Demorou pra carambaaaa.');
  console.log('Peço perdão por isso.');
}
console.log('Execute "npm run dev" para começar a desenvolver.');
console.log('Desejo um bom dia');
