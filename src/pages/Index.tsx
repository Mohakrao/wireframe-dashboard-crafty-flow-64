import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from "recharts";
import { TrendingUp, TrendingDown, Users, BookOpen, Clock, Award, Brain, Target, Activity, Calendar, Eye } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("organization");

  // Sample data for charts with purple color scheme
  const learningTimeData = [
    { period: "Daily", hours: 2.5 },
    { period: "Weekly", hours: 12 },
    { period: "Monthly", hours: 48 },
    { period: "Yearly", hours: 580 },
  ];

  const courseCompletionData = [
    { month: "Jan", completed: 45 },
    { month: "Feb", completed: 52 },
    { month: "Mar", completed: 61 },
    { month: "Apr", completed: 58 },
    { month: "May", completed: 67 },
    { month: "Jun", completed: 73 },
  ];

  const departmentScoresData = [
    { department: "Engineering", score: 88 },
    { department: "Marketing", score: 76 },
    { department: "Sales", score: 82 },
    { department: "HR", score: 79 },
    { department: "Finance", score: 85 },
  ];

  const skillGapsData = [
    { skill: "AI/ML", gap: 45 },
    { skill: "Data Analysis", gap: 32 },
    { skill: "Cloud Computing", gap: 28 },
    { skill: "Digital Marketing", gap: 38 },
  ];

  const engagementData = [
    { name: "High", value: 45, color: "#8b5cf6" },
    { name: "Medium", value: 35, color: "#a855f7" },
    { name: "Low", value: 20, color: "#c084fc" },
  ];

  const handleViewDetails = (cardType: string) => {
    console.log(`Viewing details for: ${cardType}`);
    // Here you would typically navigate to a detailed page or open a modal
  };

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

          <TabsContent value="organization" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-2xl transition-all duration-300 border-purple-200 bg-gradient-to-br from-white to-purple-50 hover:scale-105">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-purple-800">Total Employees</CardTitle>
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Users className="h-4 w-4 text-purple-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-900 mb-2">1,247</div>
                  <p className="text-xs text-muted-foreground mb-3">
                    <span className="text-green-500 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      +12% from last month
                    </span>
                  </p>
                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-md"
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
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-md"
                    onClick={() => handleViewDetails('active-learners')}
                  >
                    <Eye className="w-3 h-3 mr-1" />
                    View Details
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl transition-all duration-300 border-purple-200 bg-gradient-to-br from-white to-purple-50 hover:scale-105">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-purple-800">Avg Learning Hours</CardTitle>
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Clock className="h-4 w-4 text-purple-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-900 mb-2">48.2h</div>
                  <p className="text-xs text-muted-foreground mb-3">
                    <span className="text-purple-600">Monthly average</span>
                  </p>
                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-md"
                    onClick={() => handleViewDetails('learning-hours')}
                  >
                    <Eye className="w-3 h-3 mr-1" />
                    View Details
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl transition-all duration-300 border-purple-200 bg-gradient-to-br from-white to-purple-50 hover:scale-105">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-purple-800">Completion Rate</CardTitle>
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Award className="h-4 w-4 text-purple-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-900 mb-2">84.3%</div>
                  <p className="text-xs text-muted-foreground mb-3">
                    <span className="text-green-500 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      +5.2% from last quarter
                    </span>
                  </p>
                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-md"
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
                      <CartesianGrid strokeDasharray="3 3" stroke="#e9d5ff" />
                      <XAxis dataKey="month" stroke="#8b5cf6" />
                      <YAxis stroke="#8b5cf6" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#f3e8ff', 
                          border: '1px solid #8b5cf6',
                          borderRadius: '8px'
                        }} 
                      />
                      <Area type="monotone" dataKey="completed" stroke="#8b5cf6" fill="url(#colorGradient)" fillOpacity={0.6} />
                      <defs>
                        <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-purple-800 text-xl">Learning Engagement</CardTitle>
                  <CardDescription className="text-purple-600">Employee engagement distribution</CardDescription>
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
                          backgroundColor: '#f3e8ff', 
                          border: '1px solid #8b5cf6',
                          borderRadius: '8px'
                        }} 
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex justify-center gap-4 mt-4">
                    {engagementData.map((item) => (
                      <div key={item.name} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-sm text-purple-700 font-medium">{item.name}: {item.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="department" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-purple-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-800">
                    <Clock className="w-5 h-5" />
                    Average Learning Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Engineering</span>
                      <span className="font-bold text-purple-700">52h</span>
                    </div>
                    <Progress value={85} className="h-2" />
                    <div className="flex justify-between">
                      <span>Marketing</span>
                      <span className="font-bold text-purple-700">38h</span>
                    </div>
                    <Progress value={62} className="h-2" />
                    <div className="flex justify-between">
                      <span>Sales</span>
                      <span className="font-bold text-purple-700">45h</span>
                    </div>
                    <Progress value={73} className="h-2" />
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full mt-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white"
                    onClick={() => handleViewDetails('department-hours')}
                  >
                    <Eye className="w-3 h-3 mr-1" />
                    View All Departments
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-800">
                    <Award className="w-5 h-5" />
                    Department Scores
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={departmentScoresData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e9d5ff" />
                      <XAxis dataKey="department" angle={-45} textAnchor="end" height={80} stroke="#8b5cf6" />
                      <YAxis stroke="#8b5cf6" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#f3e8ff', 
                          border: '1px solid #8b5cf6',
                          borderRadius: '8px'
                        }} 
                      />
                      <Bar dataKey="score" fill="url(#barGradient)" />
                      <defs>
                        <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.9}/>
                          <stop offset="95%" stopColor="#a855f7" stopOpacity={0.7}/>
                        </linearGradient>
                      </defs>
                    </BarChart>
                  </ResponsiveContainer>
                  <Button 
                    size="sm" 
                    className="w-full mt-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white"
                    onClick={() => handleViewDetails('department-scores')}
                  >
                    <Eye className="w-3 h-3 mr-1" />
                    Detailed Analysis
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-800">
                    <Brain className="w-5 h-5" />
                    Skills Acquired
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">AI/ML Fundamentals</span>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-700">+23</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Data Analysis</span>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-700">+18</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Leadership</span>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-700">+15</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Cloud Computing</span>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-700">+12</Badge>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full mt-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white"
                    onClick={() => handleViewDetails('skills-acquired')}
                  >
                    <Eye className="w-3 h-3 mr-1" />
                    View All Skills
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-purple-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-purple-800">Engagement Levels by Department</CardTitle>
                  <CardDescription>Overall aptitude assessment results</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'].map((dept, index) => {
                      const scores = [92, 78, 85, 81, 88];
                      return (
                        <div key={dept} className="flex items-center justify-between">
                          <span className="text-sm font-medium text-purple-700">{dept}</span>
                          <div className="flex items-center gap-2">
                            <Progress value={scores[index]} className="w-20 h-2" />
                            <span className="text-sm text-purple-600">{scores[index]}%</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-purple-800">Skill Gaps Analysis</CardTitle>
                  <CardDescription>Areas requiring focused development</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={skillGapsData} layout="horizontal">
                      <CartesianGrid strokeDasharray="3 3" stroke="#e9d5ff" />
                      <XAxis type="number" stroke="#8b5cf6" />
                      <YAxis dataKey="skill" type="category" width={100} stroke="#8b5cf6" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#f3e8ff', 
                          border: '1px solid #8b5cf6',
                          borderRadius: '8px'
                        }} 
                      />
                      <Bar dataKey="gap" fill="#a855f7" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card className="border-purple-200 bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-purple-800">Average Course Completion Time</CardTitle>
                <CardDescription>Time efficiency across departments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {[
                    { dept: 'Engineering', time: '3.2 weeks', efficiency: 'high' },
                    { dept: 'Marketing', time: '4.1 weeks', efficiency: 'medium' },
                    { dept: 'Sales', time: '3.8 weeks', efficiency: 'medium' },
                    { dept: 'HR', time: '4.5 weeks', efficiency: 'low' },
                    { dept: 'Finance', time: '3.5 weeks', efficiency: 'high' },
                  ].map((item) => (
                    <div key={item.dept} className="text-center p-4 border border-purple-200 rounded-lg bg-gradient-to-br from-white to-purple-50">
                      <div className="text-sm text-purple-600">{item.dept}</div>
                      <div className="text-xl font-bold text-purple-800 mt-1">{item.time}</div>
                      <Badge 
                        variant={item.efficiency === 'high' ? 'default' : item.efficiency === 'medium' ? 'secondary' : 'destructive'}
                        className="mt-2"
                      >
                        {item.efficiency}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="user" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-purple-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-purple-800">Time Spent on Learning</CardTitle>
                  <CardDescription>Daily, weekly, monthly, and yearly breakdown</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={learningTimeData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e9d5ff" />
                      <XAxis dataKey="period" stroke="#8b5cf6" />
                      <YAxis stroke="#8b5cf6" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#f3e8ff', 
                          border: '1px solid #8b5cf6',
                          borderRadius: '8px'
                        }} 
                      />
                      <Bar dataKey="hours" fill="#8b5cf6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-purple-800">Course Completion Progress</CardTitle>
                  <CardDescription>Number of courses completed over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-700">23</div>
                      <div className="text-sm text-muted-foreground">Courses Completed</div>
                    </div>
                    <Progress value={76} className="h-3" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Progress: 76%</span>
                      <span>7 remaining</span>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">This Month</span>
                      <span className="font-semibold text-purple-700">4 completed</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">This Quarter</span>
                      <span className="font-semibold text-purple-700">11 completed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-purple-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-800">
                    <Calendar className="w-5 h-5" />
                    Deadlines Tracking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Met on Time</span>
                      <Badge variant="default" className="bg-purple-600">18</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Exceeded Duration</span>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-700">3</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Missed Deadlines</span>
                      <Badge variant="destructive">2</Badge>
                    </div>
                    <div className="mt-4">
                      <div className="text-sm text-muted-foreground">Success Rate</div>
                      <div className="text-2xl font-bold text-green-600">78%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-800">
                    <Award className="w-5 h-5" />
                    Assignment Scores
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-700">87.5</div>
                      <div className="text-sm text-muted-foreground">Average Score</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Highest Score</span>
                        <span className="font-semibold text-purple-700">96</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Lowest Score</span>
                        <span className="font-semibold text-purple-700">72</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Improvement</span>
                        <span className="font-semibold text-green-600">+5.2%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-purple-800">
                    <Brain className="w-5 h-5" />
                    AI Brainstorming
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-purple-800">Analytical Thinker</div>
                      <div className="text-sm text-muted-foreground">Based on interaction patterns</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Sessions</span>
                        <span className="font-semibold text-purple-700">47</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Avg Duration</span>
                        <span className="font-semibold text-purple-700">24 min</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Problem Solving</span>
                        <Badge variant="default" className="bg-purple-600">Advanced</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-purple-200 bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-purple-800">Learning Progress Timeline</CardTitle>
                <CardDescription>Your learning journey over the past 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={courseCompletionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e9d5ff" />
                    <XAxis dataKey="month" stroke="#8b5cf6" />
                    <YAxis stroke="#8b5cf6" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#f3e8ff', 
                        border: '1px solid #8b5cf6',
                        borderRadius: '8px'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="completed" 
                      stroke="#8b5cf6" 
                      strokeWidth={3}
                      dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;

</initial_code>
