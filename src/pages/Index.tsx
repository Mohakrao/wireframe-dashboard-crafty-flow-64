import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Users, Target } from "lucide-react";
import { OrganizationAnalytics } from "@/components/analytics/OrganizationAnalytics";
import { DepartmentAnalytics } from "@/components/analytics/DepartmentAnalytics";
import { UserAnalytics } from "@/components/analytics/UserAnalytics";
import { ApiPlanReport } from "@/components/reports/ApiPlanReport";
import { BackendApiReport } from "@/components/reports/BackendApiReport";
import { BackendCodeExport } from "@/components/reports/BackendCodeExport";

const Index = () => {
  const [activeTab, setActiveTab] = useState("organization");

  return (
    <div className="min-h-screen gradient-sky-purple">
      <div className="container mx-auto p-6">
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-sky-600 via-purple-600 to-sky-600 bg-clip-text text-transparent">
              Analytics Dashboard
            </h1>
            <p className="text-purple-700 text-lg font-medium">
              Comprehensive learning and development insights across your organization
            </p>
          </div>
          <div className="flex gap-2">
            <ApiPlanReport />
            <BackendApiReport />
            <BackendCodeExport />
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 h-14 bg-white border-2 border-sky-200 shadow-lg rounded-xl">
            <TabsTrigger value="organization" className="flex items-center gap-2 text-sky-700 data-[state=active]:bg-gradient-to-r data-[state=active]:from-sky-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300">
              <Activity className="w-4 h-4" />
              Organization Analytics
            </TabsTrigger>
            <TabsTrigger value="department" className="flex items-center gap-2 text-purple-700 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-sky-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300">
              <Users className="w-4 h-4" />
              Department Analytics
            </TabsTrigger>
            <TabsTrigger value="user" className="flex items-center gap-2 text-sky-700 data-[state=active]:bg-gradient-to-r data-[state=active]:from-sky-500 data-[state=active]:to-purple-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300">
              <Target className="w-4 h-4" />
              User Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="organization">
            <OrganizationAnalytics />
          </TabsContent>

          <TabsContent value="department">
            <DepartmentAnalytics />
          </TabsContent>

          <TabsContent value="user">
            <UserAnalytics />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
