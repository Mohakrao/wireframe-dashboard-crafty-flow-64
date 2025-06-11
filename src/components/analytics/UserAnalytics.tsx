import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { Calendar, Award, Brain, Heart, Users, Flag, Shield, Clock, Book, Star, MessageSquare, User, BookOpen } from "lucide-react";

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

  const learningMediumData = [
    { name: "Video", value: 45, color: "#38bdf8" },
    { name: "Text", value: 30, color: "#a855f7" },
    { name: "Quizzes", value: 25, color: "#06b6d4" }
  ];

  const progressTrendData = [
    { month: "Jan", progress: 65, improvement: 68 },
    { month: "Feb", progress: 72, improvement: 74 },
    { month: "Mar", progress: 78, improvement: 81 },
    { month: "Apr", progress: 82, improvement: 85 },
    { month: "May", progress: 87, improvement: 89 },
    { month: "Jun", progress: 91, improvement: 93 },
  ];

  const peerComparisonData = [
    { metric: "Course Completion", user: 87, peer: 73 },
    { metric: "Learning Hours", user: 48, peer: 35 },
    { metric: "Quiz Scores", user: 91, peer: 78 },
    { metric: "Engagement", user: 89, peer: 82 },
  ];

  return (
    <div className="space-y-8">
      {/* Learning Behavior & Engagement Section */}
      <div>
        <h2 className="text-2xl font-bold text-purple-800 mb-4 flex items-center gap-2">
          <Heart className="w-6 h-6" />
          Learning Behavior & Engagement
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-sky-200 bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-sky-800">Learning Streaks</CardTitle>
              <CardDescription>Consecutive days active</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-700">14</div>
                <div className="text-sm text-muted-foreground">Current Streak</div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Best Streak</span>
                  <span className="font-semibold text-sky-700">28 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">This Month</span>
                  <span className="font-semibold text-sky-700">89% active</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-purple-800">Active Learning Time</CardTitle>
              <CardDescription>Peak learning hours</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Morning (6-12)</span>
                  <Badge variant="default" className="bg-purple-600">35%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Afternoon (12-18)</span>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">25%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Evening (18-24)</span>
                  <Badge variant="default" className="bg-purple-600">40%</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-sky-200 bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-sky-800">Learning Medium</CardTitle>
              <CardDescription>Preferred content types</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={150}>
                <PieChart>
                  <Pie
                    data={learningMediumData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    fill="#8884d8"
                  >
                    {learningMediumData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Progress & Performance Section */}
      <div>
        <h2 className="text-2xl font-bold text-sky-800 mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6" />
          Progress & Performance
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-purple-200 bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-purple-800">Progress & Improvement Trend</CardTitle>
              <CardDescription>Score changes over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={progressTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ddd6fe" />
                  <XAxis dataKey="month" stroke="#7c3aed" />
                  <YAxis stroke="#7c3aed" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#faf5ff', 
                      border: '1px solid #7c3aed',
                      borderRadius: '8px'
                    }} 
                  />
                  <Line type="monotone" dataKey="progress" stroke="#7c3aed" strokeWidth={3} name="Progress Rate" />
                  <Line type="monotone" dataKey="improvement" stroke="#a855f7" strokeWidth={3} name="Improvement" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-sky-200 bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-sky-800">Course Drop-off Analysis</CardTitle>
              <CardDescription>Engagement patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Completed Courses</span>
                  <span className="font-semibold text-green-600">23</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">In Progress</span>
                  <span className="font-semibold text-blue-600">5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Dropped</span>
                  <span className="font-semibold text-red-600">2</span>
                </div>
                <div className="mt-4">
                  <div className="text-sm text-muted-foreground">Completion Rate</div>
                  <div className="text-2xl font-bold text-green-600">92%</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* AI Interaction & Achievements Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-purple-800 mb-4 flex items-center gap-2">
            <Brain className="w-6 h-6" />
            AI Interaction Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-purple-200 bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-purple-800">AI Usage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Daily Queries</span>
                    <span className="font-semibold text-purple-700">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Creative Queries</span>
                    <span className="font-semibold text-purple-700">45%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Problem-Solving</span>
                    <span className="font-semibold text-purple-700">35%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Factual</span>
                    <span className="font-semibold text-purple-700">20%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-purple-800">Content Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-700">85%</div>
                  <div className="text-sm text-muted-foreground">AI content used</div>
                </div>
                <div className="mt-4">
                  <Progress value={85} className="h-3" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-sky-800 mb-4 flex items-center gap-2">
            <Award className="w-6 h-6" />
            Achievements & Gamification
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-sky-200 bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-sky-800">Badges & Milestones</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Badges Earned</span>
                    <Badge variant="default" className="bg-sky-600">12</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">7-day Streak</span>
                    <Badge variant="default" className="bg-green-600">✓</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Top Scorer</span>
                    <Badge variant="default" className="bg-yellow-600">★</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">10 Hours Learning</span>
                    <Badge variant="default" className="bg-purple-600">✓</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-sky-200 bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-sky-800">Leaderboard</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Global Rank</span>
                    <span className="font-semibold text-sky-700">#47</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Local Rank</span>
                    <span className="font-semibold text-sky-700">#3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Personal Best</span>
                    <span className="font-semibold text-green-600">96%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Personal & Peer Comparison Section */}
      <div>
        <h2 className="text-2xl font-bold text-purple-800 mb-4 flex items-center gap-2">
          <Users className="w-6 h-6" />
          Personal & Peer Comparison
        </h2>
        <Card className="border-purple-200 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-purple-800">Peer Benchmark Scores</CardTitle>
            <CardDescription>How you compare to similar learners</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={peerComparisonData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ddd6fe" />
                <XAxis dataKey="metric" stroke="#7c3aed" />
                <YAxis stroke="#7c3aed" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#faf5ff', 
                    border: '1px solid #7c3aed',
                    borderRadius: '8px'
                  }} 
                />
                <Bar dataKey="user" fill="#7c3aed" name="Your Score" />
                <Bar dataKey="peer" fill="#a855f7" name="Peer Average" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Support & Feedback and User Preferences Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-sky-800 mb-4 flex items-center gap-2">
            <MessageSquare className="w-6 h-6" />
            Support & Feedback
          </h2>
          <div className="space-y-4">
            <Card className="border-sky-200 bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-sky-800">Support Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Support Tickets</span>
                    <span className="font-semibold text-sky-700">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Avg Response Time</span>
                    <span className="font-semibold text-sky-700">2.4 hrs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Satisfaction Rating</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-sky-700">4.8</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-sky-200 bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-sky-800">Course Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Feedback Given</span>
                    <span className="font-semibold text-sky-700">18</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Suggestions Implemented</span>
                    <span className="font-semibold text-green-600">12</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-purple-800 mb-4 flex items-center gap-2">
            <User className="w-6 h-6" />
            User Account & Preferences
          </h2>
          <div className="space-y-4">
            <Card className="border-purple-200 bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-purple-800">Account Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Preferred Language</span>
                    <span className="font-semibold text-purple-700">English</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Accessibility Mode</span>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-700">Enabled</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Platform Usage</span>
                    <span className="font-semibold text-purple-700">Web 70% | Mobile 30%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-purple-800">Login Patterns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Login Frequency</span>
                    <span className="font-semibold text-purple-700">Daily</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Avg Session Time</span>
                    <span className="font-semibold text-purple-700">45 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Time Gaps</span>
                    <span className="font-semibold text-purple-700">2-3 hrs</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Original sections - keeping existing charts */}
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
