
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Users, Target } from "lucide-react";
import { OrganizationAnalytics } from "@/components/analytics/OrganizationAnalytics";
import { DepartmentAnalytics } from "@/components/analytics/DepartmentAnalytics";
import { UserAnalytics } from "@/components/analytics/UserAnalytics";

const Index = () => {
  const [activeTab, setActiveTab] = useState("organization");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent">
            Analytics Dashboard
          </h1>
          <p className="text-purple-600 text-lg font-medium">
            Comprehensive learning and development insights across your organization
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 h-14 bg-white border-2 border-purple-200 shadow-lg rounded-xl">
            <TabsTrigger value="organization" className="flex items-center gap-2 text-purple-700 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-purple-700 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300">
              <Activity className="w-4 h-4" />
              Organization Analytics
            </TabsTrigger>
            <TabsTrigger value="department" className="flex items-center gap-2 text-purple-700 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-purple-700 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300">
              <Users className="w-4 h-4" />
              Department Analytics
            </TabsTrigger>
            <TabsTrigger value="user" className="flex items-center gap-2 text-purple-700 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-purple-700 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300">
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
