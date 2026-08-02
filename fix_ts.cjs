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
    code = code.replace(/=== params\?\.id/g, '=== (params ? params.id : "")');
    fs.writeFileSync(f, code);
  }
});
