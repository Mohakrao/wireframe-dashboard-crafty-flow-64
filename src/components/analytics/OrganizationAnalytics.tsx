
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Users, BookOpen, Clock, Award, Eye } from "lucide-react";

export const OrganizationAnalytics = () => {
  const courseCompletionData = [
    { month: "Jan", completed: 45 },
    { month: "Feb", completed: 52 },
    { month: "Mar", completed: 61 },
    { month: "Apr", completed: 58 },
    { month: "May", completed: 67 },
    { month: "Jun", completed: 73 },
  ];

  const engagementData = [
    { name: "High", value: 45, color: "#ec4899" },
    { name: "Medium", value: 35, color: "#a855f7" },
    { name: "Low", value: 20, color: "#38bdf8" },
  ];

  const handleViewDetails = (cardType: string) => {
    console.log(`Viewing details for: ${cardType}`);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="hover:shadow-2xl transition-all duration-300 border-pink-200 bg-gradient-to-br from-white to-pink-50 hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-pink-800">Total Employees</CardTitle>
            <div className="p-2 bg-pink-100 rounded-lg">
              <Users className="h-4 w-4 text-pink-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-pink-900 mb-2">1,247</div>
            <p className="text-xs text-muted-foreground mb-3">
              <span className="text-green-500 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                +12% from last month
              </span>
            </p>
            <Button 
              size="sm" 
              className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white shadow-md"
              onClick={() => handleViewDetails('total-employees')}
            >
              <Eye className="w-3 h-3 mr-1" />
              View Details
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-2xl transition-all duration-300 border-purple-200 bg-gradient-to-br from-white to-purple-50 hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-800">Active Learners</CardTitle>
            <div className="p-2 bg-purple-100 rounded-lg">
              <BookOpen className="h-4 w-4 text-purple-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-900 mb-2">892</div>
            <p className="text-xs text-muted-foreground mb-3">
              <span className="text-green-500 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                71.5% engagement rate
              </span>
            </p>
            <Button 
              size="sm" 
              className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-md"
              onClick={() => handleViewDetails('active-learners')}
            >
              <Eye className="w-3 h-3 mr-1" />
              View Details
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-2xl transition-all duration-300 border-sky-200 bg-gradient-to-br from-white to-sky-50 hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-sky-800">Avg Learning Hours</CardTitle>
            <div className="p-2 bg-sky-100 rounded-lg">
              <Clock className="h-4 w-4 text-sky-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-sky-900 mb-2">48.2h</div>
            <p className="text-xs text-muted-foreground mb-3">
              <span className="text-sky-600">Monthly average</span>
            </p>
            <Button 
              size="sm" 
              className="w-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white shadow-md"
              onClick={() => handleViewDetails('learning-hours')}
            >
              <Eye className="w-3 h-3 mr-1" />
              View Details
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-2xl transition-all duration-300 border-pink-200 bg-gradient-to-br from-white to-pink-50 hover:scale-105">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-pink-800">Completion Rate</CardTitle>
            <div className="p-2 bg-pink-100 rounded-lg">
              <Award className="h-4 w-4 text-pink-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-pink-900 mb-2">84.3%</div>
            <p className="text-xs text-muted-foreground mb-3">
              <span className="text-green-500 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                +5.2% from last quarter
              </span>
            </p>
            <Button 
              size="sm" 
              className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white shadow-md"
              onClick={() => handleViewDetails('completion-rate')}
            >
              <Eye className="w-3 h-3 mr-1" />
              View Details
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-purple-200 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-purple-800 text-xl">Course Completion Trends</CardTitle>
            <CardDescription className="text-purple-600">Monthly course completion statistics</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={courseCompletionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ddd6fe" />
                <XAxis dataKey="month" stroke="#a855f7" />
                <YAxis stroke="#a855f7" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fae8ff', 
                    border: '1px solid #a855f7',
                    borderRadius: '8px'
                  }} 
                />
                <Area type="monotone" dataKey="completed" stroke="#a855f7" fill="url(#colorGradient)" fillOpacity={0.6} />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-sky-200 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-sky-800 text-xl">Learning Engagement</CardTitle>
            <CardDescription className="text-sky-600">Employee engagement distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={engagementData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {engagementData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#f0f9ff', 
                    border: '1px solid #38bdf8',
                    borderRadius: '8px'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-4">
              {engagementData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-sky-700 font-medium">{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
