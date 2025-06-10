
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Clock, Award, Brain, Eye } from "lucide-react";

export const DepartmentAnalytics = () => {
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

  const handleViewDetails = (cardType: string) => {
    console.log(`Viewing details for: ${cardType}`);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-pink-200 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-pink-800">
              <Clock className="w-5 h-5" />
              Average Learning Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Engineering</span>
                <span className="font-bold text-pink-700">52h</span>
              </div>
              <Progress value={85} className="h-2" />
              <div className="flex justify-between">
                <span>Marketing</span>
                <span className="font-bold text-pink-700">38h</span>
              </div>
              <Progress value={62} className="h-2" />
              <div className="flex justify-between">
                <span>Sales</span>
                <span className="font-bold text-pink-700">45h</span>
              </div>
              <Progress value={73} className="h-2" />
            </div>
            <Button 
              size="sm" 
              className="w-full mt-4 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white"
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
                <CartesianGrid strokeDasharray="3 3" stroke="#ddd6fe" />
                <XAxis dataKey="department" angle={-45} textAnchor="end" height={80} stroke="#a855f7" />
                <YAxis stroke="#a855f7" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fae8ff', 
                    border: '1px solid #a855f7',
                    borderRadius: '8px'
                  }} 
                />
                <Bar dataKey="score" fill="url(#purpleBarGradient)" />
                <defs>
                  <linearGradient id="purpleBarGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#c084fc" stopOpacity={0.7}/>
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
            <Button 
              size="sm" 
              className="w-full mt-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white"
              onClick={() => handleViewDetails('department-scores')}
            >
              <Eye className="w-3 h-3 mr-1" />
              Detailed Analysis
            </Button>
          </CardContent>
        </Card>

        <Card className="border-sky-200 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sky-800">
              <Brain className="w-5 h-5" />
              Skills Acquired
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">AI/ML Fundamentals</span>
                <Badge variant="secondary" className="bg-sky-100 text-sky-700">+23</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Data Analysis</span>
                <Badge variant="secondary" className="bg-sky-100 text-sky-700">+18</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Leadership</span>
                <Badge variant="secondary" className="bg-sky-100 text-sky-700">+15</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Cloud Computing</span>
                <Badge variant="secondary" className="bg-sky-100 text-sky-700">+12</Badge>
              </div>
            </div>
            <Button 
              size="sm" 
              className="w-full mt-4 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white"
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

        <Card className="border-sky-200 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-sky-800">Skill Gaps Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={skillGapsData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="#bae6fd" />
                <XAxis type="number" stroke="#38bdf8" />
                <YAxis dataKey="skill" type="category" width={100} stroke="#38bdf8" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#f0f9ff', 
                    border: '1px solid #38bdf8',
                    borderRadius: '8px'
                  }} 
                />
                <Bar dataKey="gap" fill="#38bdf8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="border-pink-200 bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-pink-800">Average Course Completion Time</CardTitle>
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
              <div key={item.dept} className="text-center p-4 border border-pink-200 rounded-lg bg-gradient-to-br from-white to-pink-50">
                <div className="text-sm text-pink-600">{item.dept}</div>
                <div className="text-xl font-bold text-pink-800 mt-1">{item.time}</div>
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
    </div>
  );
};
