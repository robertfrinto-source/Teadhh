const fs = require('fs');

const files = [
  'src/features/contacts/ContactDetail.tsx',
  'src/features/projects/ProjectDetail.tsx',
  'src/features/clients/ClientDetail.tsx',
  'src/features/employees/EmployeeDetail.tsx',
  'src/features/rent/RentDetail.tsx'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    let code = fs.readFileSync(f, 'utf8');
    // We can just add ts-ignore or fix the parsing
    code = code.replace(/const (.*?) = (.*?)\.find\((.*?)\);/g, `const pId = params ? params.id : null;\n  const $1 = $2.find(x => x.id === pId);`);
    fs.writeFileSync(f, code);
  }
});
