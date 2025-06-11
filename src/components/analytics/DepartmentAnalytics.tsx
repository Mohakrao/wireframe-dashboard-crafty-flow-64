import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { Clock, Award, Brain, Eye, TrendingUp, Users, Target, Zap, BookOpen, Trophy, Settings } from "lucide-react";

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

  // New data for additional features
  const learningHoursData = [
    { department: "Engineering", hours: 52, target: 60 },
    { department: "Marketing", hours: 38, target: 45 },
    { department: "Sales", hours: 45, target: 50 },
    { department: "HR", hours: 41, target: 48 },
    { department: "Finance", hours: 47, target: 55 },
  ];

  const assignmentScoresData = [
    { department: "Engineering", score: 87, assignments: 24 },
    { department: "Marketing", score: 76, assignments: 18 },
    { department: "Sales", score: 82, assignments: 21 },
    { department: "HR", score: 79, assignments: 15 },
    { department: "Finance", score: 85, assignments: 19 },
  ];

  const aiAptitudeData = [
    { department: "Engineering", aptitude: 92 },
    { department: "Marketing", aptitude: 68 },
    { department: "Sales", aptitude: 74 },
    { department: "HR", aptitude: 71 },
    { department: "Finance", aptitude: 83 },
  ];

  const completionTimeData = [
    { department: "Engineering", time: 3.2, efficiency: "high" },
    { department: "Marketing", time: 4.1, efficiency: "medium" },
    { department: "Sales", time: 3.8, efficiency: "medium" },
    { department: "HR", time: 4.5, efficiency: "low" },
    { department: "Finance", time: 3.5, efficiency: "high" },
  ];

  const performanceInsightsData = [
    { department: "Engineering", performance: 94, productivity: 88, roi: 145 },
    { department: "Marketing", performance: 82, productivity: 79, roi: 112 },
    { department: "Sales", performance: 89, productivity: 85, roi: 128 },
    { department: "HR", performance: 84, productivity: 81, roi: 108 },
    { department: "Finance", performance: 91, productivity: 87, roi: 135 },
  ];

  const skillDistributionData = [
    { skill: "Technical", Engineering: 95, Marketing: 45, Sales: 55, HR: 40, Finance: 75 },
    { skill: "Communication", Engineering: 70, Marketing: 92, Sales: 88, HR: 95, Finance: 78 },
    { skill: "Leadership", Engineering: 65, Marketing: 75, Sales: 82, HR: 90, Finance: 80 },
    { skill: "Analytics", Engineering: 88, Marketing: 70, Sales: 60, HR: 55, Finance: 92 },
  ];

  const engagementRetentionData = [
    { department: "Engineering", participation: 87, dropout: 8, upskilling: 45, satisfaction: 89 },
    { department: "Marketing", participation: 74, dropout: 15, upskilling: 32, satisfaction: 78 },
    { department: "Sales", participation: 81, dropout: 12, upskilling: 38, satisfaction: 82 },
    { department: "HR", participation: 78, dropout: 14, upskilling: 28, satisfaction: 85 },
    { department: "Finance", participation: 85, dropout: 9, upskilling: 41, satisfaction: 87 },
  ];

  const aiInteractionData = [
    { department: "Engineering", brainstorming: 156, suggestions: 89, creative: 45, analytical: 78 },
    { department: "Marketing", brainstorming: 98, suggestions: 76, creative: 68, analytical: 35 },
    { department: "Sales", brainstorming: 112, suggestions: 82, creative: 52, analytical: 48 },
    { department: "HR", brainstorming: 87, suggestions: 71, creative: 38, analytical: 42 },
    { department: "Finance", brainstorming: 134, suggestions: 85, creative: 28, analytical: 89 },
  ];

  const topLearners = [
    { name: "Alex Chen", department: "Engineering", score: 95, hours: 68 },
    { name: "Sarah Wilson", department: "Marketing", score: 89, hours: 52 },
    { name: "Mike Johnson", department: "Sales", score: 92, hours: 58 },
    { name: "Emma Davis", department: "HR", score: 87, hours: 48 },
    { name: "David Lee", department: "Finance", score: 91, hours: 62 },
  ];

  const handleViewDetails = (cardType: string) => {
    console.log(`Viewing details for: ${cardType}`);
  };

  return (
    <div className="space-y-6">
      {/* First Row - Basic Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-sky-200 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sky-800">
              <Clock className="w-5 h-5" />
              Average Learning Hours
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Engineering</span>
                <span className="font-bold text-sky-700">52h</span>
              </div>
              <Progress value={85} className="h-2" />
              <div className="flex justify-between">
                <span>Marketing</span>
                <span className="font-bold text-sky-700">38h</span>
              </div>
              <Progress value={62} className="h-2" />
              <div className="flex justify-between">
                <span>Sales</span>
                <span className="font-bold text-sky-700">45h</span>
              </div>
              <Progress value={73} className="h-2" />
            </div>
            <Button 
              size="sm" 
              className="w-full mt-4 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white"
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

      {/* Second Row - Course/Assignment Scores and AI Aptitude */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-purple-200 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-800">
              <BookOpen className="w-5 h-5" />
              Course/Assignment Aggregate Scores
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={assignmentScoresData}>
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
                <Bar dataKey="score" fill="#a855f7" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-sky-200 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sky-800">
              <Brain className="w-5 h-5" />
              AI Brainstorming Aptitude
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {aiAptitudeData.map((item) => (
                <div key={item.department} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-sky-700">{item.department}</span>
                  <div className="flex items-center gap-2">
                    <Progress value={item.aptitude} className="w-20 h-2" />
                    <span className="text-sm text-sky-600">{item.aptitude}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Third Row - Performance & Productivity Insights */}
      <Card className="border-purple-200 bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-800">
            <TrendingUp className="w-5 h-5" />
            Performance & Productivity Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-purple-700 mb-3">Top-Performing Teams</h4>
              <div className="space-y-2">
                {performanceInsightsData
                  .sort((a, b) => b.performance - a.performance)
                  .slice(0, 3)
                  .map((item, index) => (
                    <div key={item.department} className="flex items-center justify-between p-2 bg-purple-50 rounded">
                      <span className="text-sm text-purple-700">#{index + 1} {item.department}</span>
                      <span className="text-sm font-bold text-purple-800">{item.performance}%</span>
                    </div>
                  ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-purple-700 mb-3">Completion Rate</h4>
              <ResponsiveContainer width="100%" height={120}>
                <BarChart data={performanceInsightsData}>
                  <Bar dataKey="productivity" fill="#a855f7" />
                  <Tooltip />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-purple-700 mb-3">Learning ROI</h4>
              <div className="space-y-2">
                {performanceInsightsData.map((item) => (
                  <div key={item.department} className="flex items-center justify-between">
                    <span className="text-xs text-purple-600">{item.department}</span>
                    <Badge 
                      variant={item.roi > 130 ? 'default' : item.roi > 110 ? 'secondary' : 'destructive'}
                      className="text-xs"
                    >
                      {item.roi}%
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Fourth Row - Skill Intelligence */}
      <Card className="border-sky-200 bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sky-800">
            <Brain className="w-5 h-5" />
            Skill Intelligence
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-sky-700 mb-3">Skill Distribution Heatmap</h4>
              <ResponsiveContainer width="100%" height={200}>
                <RadarChart data={skillDistributionData}>
                  <PolarGrid stroke="#bae6fd" />
                  <PolarAngleAxis dataKey="skill" className="text-xs" />
                  <PolarRadiusAxis domain={[0, 100]} tick={false} />
                  <Radar name="Engineering" dataKey="Engineering" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.1} />
                  <Radar name="Marketing" dataKey="Marketing" stroke="#a855f7" fill="#a855f7" fillOpacity={0.1} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-sky-700 mb-2">Critical Skills Coverage</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-sky-600">Technical Skills</span>
                    <div className="flex items-center gap-2">
                      <Progress value={78} className="w-16 h-2" />
                      <span className="text-xs text-sky-700">78%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-sky-600">Leadership</span>
                    <div className="flex items-center gap-2">
                      <Progress value={65} className="w-16 h-2" />
                      <span className="text-xs text-sky-700">65%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-sky-600">Communication</span>
                    <div className="flex items-center gap-2">
                      <Progress value={82} className="w-16 h-2" />
                      <span className="text-xs text-sky-700">82%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-sky-700 mb-2">Cross-functional Overlap</h4>
                <div className="text-xs text-sky-600">
                  <p>Engineering ↔ Finance: 68% overlap</p>
                  <p>Marketing ↔ Sales: 74% overlap</p>
                  <p>HR ↔ All Departments: 52% avg</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Fifth Row - Employee Engagement & AI Interaction */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-purple-200 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-800">
              <Users className="w-5 h-5" />
              Employee Engagement & Retention
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-purple-700 mb-2">Participation Rate</h4>
                <div className="space-y-2">
                  {engagementRetentionData.map((item) => (
                    <div key={item.department} className="flex items-center justify-between">
                      <span className="text-xs text-purple-600">{item.department}</span>
                      <div className="flex items-center gap-2">
                        <Progress value={item.participation} className="w-16 h-2" />
                        <span className="text-xs text-purple-700">{item.participation}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-semibold text-purple-700 mb-2">Dropout Rate</h4>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-800">11.6%</div>
                    <div className="text-xs text-purple-600">Average</div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-purple-700 mb-2">Upskilling Rate</h4>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-800">36.8%</div>
                    <div className="text-xs text-purple-600">Voluntary</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-sky-200 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sky-800">
              <Zap className="w-5 h-5" />
              AI Interaction & Innovation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={aiInteractionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#bae6fd" />
                <XAxis dataKey="department" angle={-45} textAnchor="end" height={80} stroke="#0ea5e9" />
                <YAxis stroke="#0ea5e9" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#f0f9ff', 
                    border: '1px solid #0ea5e9',
                    borderRadius: '8px'
                  }} 
                />
                <Bar dataKey="brainstorming" fill="#0ea5e9" />
                <Bar dataKey="creative" fill="#38bdf8" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-3 grid grid-cols-2 gap-4 text-xs">
              <div className="text-center">
                <div className="font-semibold text-sky-700">Creative vs Analytical</div>
                <div className="text-sky-600">65% Creative, 35% Analytical</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-sky-700">Project Impact</div>
                <div className="text-sky-600">+23% Success Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sixth Row - Goal Tracking and Recognition */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-purple-200 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-800">
              <Target className="w-5 h-5" />
              Goal Tracking & Milestones
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-purple-700 mb-2">Department Goals Progress</h4>
                <div className="space-y-2">
                  {learningHoursData.map((item) => (
                    <div key={item.department} className="flex items-center justify-between">
                      <span className="text-xs text-purple-600">{item.department}</span>
                      <div className="flex items-center gap-2">
                        <Progress value={(item.hours / item.target) * 100} className="w-16 h-2" />
                        <span className="text-xs text-purple-700">{item.hours}/{item.target}h</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-xl font-bold text-purple-800">127</div>
                  <div className="text-xs text-purple-600">Certifications Earned</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-purple-800">15</div>
                  <div className="text-xs text-purple-600">Milestones Achieved</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-sky-200 bg-white shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sky-800">
              <Trophy className="w-5 h-5" />
              Recognition & Benchmarking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <h4 className="text-sm font-semibold text-sky-700 mb-3">Top Learners of the Month</h4>
              <div className="space-y-2">
                {topLearners.slice(0, 3).map((learner, index) => (
                  <div key={learner.name} className="flex items-center justify-between p-2 bg-sky-50 rounded">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-sky-200 flex items-center justify-center text-xs font-bold text-sky-700">
                        {index + 1}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-sky-800">{learner.name}</div>
                        <div className="text-xs text-sky-600">{learner.department}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-sky-700">{learner.score}%</div>
                      <div className="text-xs text-sky-600">{learner.hours}h</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-sky-700 mb-2">Comparative Performance</h4>
                <div className="text-xs text-sky-600">
                  <p>Engineering leads with 94% avg performance</p>
                  <p>Finance shows highest ROI at 135%</p>
                  <p>Marketing has most creative AI usage</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Seventh Row - Operational Metrics */}
      <Card className="border-purple-200 bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-800">
            <Settings className="w-5 h-5" />
            Operational Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-purple-700 mb-3">Learning Resource Usage</h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-purple-600">Videos</span>
                  <span className="text-xs font-bold text-purple-700">45%</span>
                </div>
                <Progress value={45} className="h-2" />
                <div className="flex justify-between items-center">
                  <span className="text-xs text-purple-600">Interactive</span>
                  <span className="text-xs font-bold text-purple-700">32%</span>
                </div>
                <Progress value={32} className="h-2" />
                <div className="flex justify-between items-center">
                  <span className="text-xs text-purple-600">Documents</span>
                  <span className="text-xs font-bold text-purple-700">23%</span>
                </div>
                <Progress value={23} className="h-2" />
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-purple-700 mb-3">Support Queries</h4>
              <div className="space-y-2">
                {['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'].map((dept, index) => {
                  const queries = [12, 18, 15, 9, 11];
                  return (
                    <div key={dept} className="flex justify-between items-center">
                      <span className="text-xs text-purple-600">{dept}</span>
                      <Badge variant="secondary" className="text-xs">{queries[index]}</Badge>
                    </div>
                  );
                })}
              </div>
              <div className="text-center mt-3">
                <div className="text-lg font-bold text-purple-800">13</div>
                <div className="text-xs text-purple-600">Avg per team</div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-purple-700 mb-3">Technical Issues</h4>
              <div className="space-y-2">
                <div className="p-2 bg-purple-50 rounded">
                  <div className="text-xs font-medium text-purple-700">Course Access</div>
                  <div className="text-xs text-purple-600">3 reported issues</div>
                </div>
                <div className="p-2 bg-purple-50 rounded">
                  <div className="text-xs font-medium text-purple-700">Video Playback</div>
                  <div className="text-xs text-purple-600">1 reported issue</div>
                </div>
                <div className="p-2 bg-purple-50 rounded">
                  <div className="text-xs font-medium text-purple-700">Login Problems</div>
                  <div className="text-xs text-purple-600">2 reported issues</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Keep existing engagement levels and skill gaps analysis */}
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

      {/* Keep existing course completion time card */}
      <Card className="border-sky-200 bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-sky-800">Average Course Completion Time</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {completionTimeData.map((item) => (
              <div key={item.department} className="text-center p-4 border border-sky-200 rounded-lg bg-gradient-to-br from-white to-sky-50">
                <div className="text-sm text-sky-600">{item.department}</div>
                <div className="text-xl font-bold text-sky-800 mt-1">{item.time} weeks</div>
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
