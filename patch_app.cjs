const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(/import \{ DetailPlaceholder \} from "\.\/components\/layout\/DetailPlaceholder";/, '');

const imports = `
import { ContactDetail } from "./features/contacts/ContactDetail";
import { ProjectDetail } from "./features/projects/ProjectDetail";
import { RentDetail } from "./features/rent/RentDetail";
import { ClientDetail } from "./features/clients/ClientDetail";
import { EmployeeDetail } from "./features/employees/EmployeeDetail";
import { Settings } from "./features/settings/Settings";
import { DetailPlaceholder } from "./components/layout/DetailPlaceholder";
`;
code = code.replace(/import \{ Settings \} from "\.\/features\/settings\/Settings";/, imports);

code = code.replace(/<Route path="\/leads\/:id" component=\{\(\) => <DetailPlaceholder titleKey="nav.leads" \/>\} \/>/, '<Route path="/leads/:id" component={ContactDetail} />');
code = code.replace(/<Route path="\/projects\/:id" component=\{\(\) => <DetailPlaceholder titleKey="nav.projects" \/>\} \/>/, '<Route path="/projects/:id" component={ProjectDetail} />');
code = code.replace(/<Route path="\/rent\/:id" component=\{\(\) => <DetailPlaceholder titleKey="nav.rent" \/>\} \/>/, '<Route path="/rent/:id" component={RentDetail} />');
code = code.replace(/<Route path="\/clients\/:id" component=\{\(\) => <DetailPlaceholder titleKey="nav.clients" \/>\} \/>/, '<Route path="/clients/:id" component={ClientDetail} />');
code = code.replace(/<Route path="\/employees\/:id" component=\{\(\) => <DetailPlaceholder titleKey="nav.employees" \/>\} \/>/, '<Route path="/employees/:id" component={EmployeeDetail} />');
code = code.replace(/<Route path="\/profile" component=\{\(\) => <DetailPlaceholder titleKey="settings.profile" \/>\} \/>/, '<Route path="/profile" component={Settings} />');

fs.writeFileSync('src/App.tsx', code);
