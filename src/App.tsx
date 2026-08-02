/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { Switch, Route, Redirect } from "wouter";
import { AppLayout } from "./components/layout/AppLayout";
import { I18nProvider } from "./contexts/I18nContext";
import { Dashboard } from "./features/dashboard/Dashboard";
import { Contacts } from "./features/contacts/Contacts";
import { Deals } from "./features/deals/Deals";
import { Reports } from "./features/reports/Reports";
import { Tasks } from "./features/tasks/Tasks";

import { ContactDetail } from "./features/contacts/ContactDetail";
import { ProjectDetail } from "./features/projects/ProjectDetail";
import { RentDetail } from "./features/rent/RentDetail";
import { ClientDetail } from "./features/clients/ClientDetail";
import { EmployeeDetail } from "./features/employees/EmployeeDetail";
import { Settings } from "./features/settings/Settings";
import { DetailPlaceholder } from "./components/layout/DetailPlaceholder";

import { Projects } from "./features/projects/Projects";
import { Resale } from "./features/resale/Resale";
import { Employees } from "./features/employees/Employees";
import { Rent } from "./features/rent/Rent";
import { Clients } from "./features/clients/Clients";
import { Marketplace } from "./features/marketplace/Marketplace";
import { Search } from "./features/search/Search";
import { useStore } from "./store";


export default function App() {
  const fetchData = useStore(state => state.fetchData);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <I18nProvider>
      <AppLayout>
      <Switch>
        <Route path="/" component={() => <Redirect to="/home" />} />
        <Route path="/home" component={Dashboard} />
        
        {/* Pipeline */}
        <Route path="/leads" component={Contacts} />
        <Route path="/leads/kanban" component={Deals} />
        <Route path="/leads/:id" component={ContactDetail} />
        
        {/* Inventory */}
        <Route path="/projects" component={Projects} />
        <Route path="/projects/:id" component={ProjectDetail} />
        <Route path="/resale" component={Resale} />
        <Route path="/rent" component={Rent} />
        <Route path="/rent/:id" component={RentDetail} />
        <Route path="/marketplace" component={Marketplace} />

        {/* Clients */}
        <Route path="/clients" component={Clients} />
        <Route path="/clients/:id" component={ClientDetail} />

        {/* People */}
        <Route path="/employees" component={Employees} />
        <Route path="/employees/pending" component={() => <DetailPlaceholder titleKey="nav.employees" />} />
        <Route path="/employees/:id" component={EmployeeDetail} />

        {/* Tools */}
        <Route path="/search" component={Search} />
        <Route path="/planner" component={Tasks} />
        <Route path="/reports" component={Reports} />
        <Route path="/permissions" component={Settings} />
        
        {/* Profile */}
        <Route path="/profile" component={Settings} />
        
        <Route>
          <div className="flex h-full items-center justify-center text-on-surface-variant font-headline-md">
            404 - Page Not Found
          </div>
        </Route>
      </Switch>
    </AppLayout>
    </I18nProvider>
  );
}
