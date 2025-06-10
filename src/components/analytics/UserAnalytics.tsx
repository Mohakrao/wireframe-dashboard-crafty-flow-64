import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { Calendar, Award, Brain } from "lucide-react";

export const UserAnalytics = () => {
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

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-sky-200 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-sky-800">Time Spent on Learning</CardTitle>
            <CardDescription>Daily, weekly, monthly, and yearly breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={learningTimeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#bae6fd" />
                <XAxis dataKey="period" stroke="#38bdf8" />
                <YAxis stroke="#38bdf8" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#f0f9ff', 
                    border: '1px solid #38bdf8',
                    borderRadius: '8px'
                  }} 
                />
                <Bar dataKey="hours" fill="#38bdf8" />
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
        <Card className="border-sky-200 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sky-800">
              <Calendar className="w-5 h-5" />
              Deadlines Tracking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Met on Time</span>
                <Badge variant="default" className="bg-sky-600">18</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Exceeded Duration</span>
                <Badge variant="secondary" className="bg-sky-100 text-sky-700">3</Badge>
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

      <Card className="border-sky-200 bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-sky-800">Learning Progress Timeline</CardTitle>
          <CardDescription>Your learning journey over the past 6 months</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={courseCompletionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#bae6fd" />
              <XAxis dataKey="month" stroke="#38bdf8" />
              <YAxis stroke="#38bdf8" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#f0f9ff', 
                  border: '1px solid #38bdf8',
                  borderRadius: '8px'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="completed" 
                stroke="#38bdf8" 
                strokeWidth={3}
                dot={{ fill: '#38bdf8', strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};
