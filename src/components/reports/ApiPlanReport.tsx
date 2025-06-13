
import { jsPDF } from 'jspdf';
import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';

export const ApiPlanReport = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const margin = 20;
    let yPosition = 20;

    // Title
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('Analytics Dashboard API Plan', margin, yPosition);
    yPosition += 20;

    // Subtitle
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('Comprehensive API documentation for all dashboard features', margin, yPosition);
    yPosition += 20;

    // Organization Analytics Section
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Organization Analytics APIs', margin, yPosition);
    yPosition += 15;

    const orgApis = [
      {
        name: 'GET /api/organization/employee-stats',
        purpose: 'Fetch total employee count and growth metrics',
        feature: 'Total Employees card in Organization Analytics',
        inputs: 'organizationId, timeframe',
        output: 'Employee count, growth percentage, trend data',
        functionality: 'Aggregates employee data from HR systems and calculates month-over-month growth',
        json: '{"totalEmployees": 1247, "growthPercentage": 12, "trend": "up"}'
      },
      {
        name: 'GET /api/organization/active-learners',
        purpose: 'Get active learning participants and engagement rates',
        feature: 'Active Learners card in Organization Analytics',
        inputs: 'organizationId, period',
        output: 'Active learner count, engagement rate, participation metrics',
        functionality: 'Tracks users with learning activity in specified timeframe and calculates engagement',
        json: '{"activeLearners": 892, "engagementRate": 71.5, "totalUsers": 1247}'
      },
      {
        name: 'GET /api/organization/learning-hours',
        purpose: 'Calculate average learning hours across organization',
        feature: 'Avg Learning Hours card in Organization Analytics',
        inputs: 'organizationId, period',
        output: 'Average hours, distribution data, comparison metrics',
        functionality: 'Aggregates all user learning session durations and computes organizational average',
        json: '{"averageHours": 48.2, "distribution": [35, 42, 48, 52, 55]}'
      },
      {
        name: 'GET /api/organization/completion-rate',
        purpose: 'Get overall course completion statistics',
        feature: 'Completion Rate card in Organization Analytics',
        inputs: 'organizationId, timeframe, courseType',
        output: 'Completion percentage, quarterly growth, completion trends',
        functionality: 'Calculates ratio of completed courses to enrolled courses across organization',
        json: '{"completionRate": 84.3, "quarterlyGrowth": 5.2, "completedCourses": 2847}'
      },
      {
        name: 'GET /api/organization/course-trends',
        purpose: 'Retrieve monthly course completion trend data',
        feature: 'Course Completion Trends chart in Organization Analytics',
        inputs: 'organizationId, months',
        output: 'Monthly completion data array for chart visualization',
        functionality: 'Aggregates course completions by month for trend analysis and forecasting',
        json: '[{"month": "Jan", "completed": 45}, {"month": "Feb", "completed": 52}]'
      },
      {
        name: 'GET /api/organization/engagement-distribution',
        purpose: 'Get learning engagement level distribution',
        feature: 'Learning Engagement pie chart in Organization Analytics',
        inputs: 'organizationId, engagementThresholds',
        output: 'Percentage breakdown of engagement levels across users',
        functionality: 'Categorizes users into engagement tiers based on activity metrics and learning patterns',
        json: '[{"name": "High", "value": 45}, {"name": "Medium", "value": 35}]'
      }
    ];

    // Add Organization APIs
    orgApis.forEach((api, index) => {
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
      }

      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text(`${index + 1}. ${api.name}`, margin, yPosition);
      yPosition += 8;

      doc.setFont('helvetica', 'normal');
      doc.text(`Purpose: ${api.purpose}`, margin + 5, yPosition);
      yPosition += 6;
      doc.text(`Feature: ${api.feature}`, margin + 5, yPosition);
      yPosition += 6;
      doc.text(`Inputs: ${api.inputs}`, margin + 5, yPosition);
      yPosition += 6;
      doc.text(`Output: ${api.output}`, margin + 5, yPosition);
      yPosition += 6;
      doc.text(`Functionality: ${api.functionality}`, margin + 5, yPosition);
      yPosition += 6;
      doc.text(`JSON: ${api.json}`, margin + 5, yPosition);
      yPosition += 12;
    });

    // Department Analytics Section
    if (yPosition > 200) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Department Analytics APIs', margin, yPosition);
    yPosition += 15;

    const deptApis = [
      {
        name: 'GET /api/department/learning-hours',
        purpose: 'Fetch department-wise learning hours breakdown',
        feature: 'Average Learning Hours card in Department Analytics',
        inputs: 'organizationId, departmentIds, period',
        output: 'Department names and corresponding total learning hours',
        functionality: 'Aggregates learning session durations by department affiliation for comparative analysis',
        json: '[{"department": "Engineering", "hours": 52}, {"department": "Sales", "hours": 45}]'
      },
      {
        name: 'GET /api/department/scores',
        purpose: 'Get department performance scores',
        feature: 'Department Scores chart in Department Analytics',
        inputs: 'organizationId, scoreType, timeframe',
        output: 'Department-wise average scores and performance metrics',
        functionality: 'Calculates mean scores per department with statistical analysis',
        json: '[{"department": "Engineering", "score": 88}, {"department": "Sales", "score": 82}]'
      },
      {
        name: 'GET /api/department/skills-acquired',
        purpose: 'Track skills gained across departments',
        feature: 'Skills Acquired card in Department Analytics',
        inputs: 'organizationId, skillCategories, timeframe',
        output: 'Skills acquired count by type and department',
        functionality: 'Monitors skill-based learning completions and competency achievements',
        json: '[{"skill": "AI/ML", "count": 23}, {"skill": "Data Analysis", "count": 18}]'
      }
    ];

    // Add Department APIs (showing first 3 for brevity)
    deptApis.forEach((api, index) => {
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
      }

      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text(`${index + 7}. ${api.name}`, margin, yPosition);
      yPosition += 8;

      doc.setFont('helvetica', 'normal');
      doc.text(`Purpose: ${api.purpose}`, margin + 5, yPosition);
      yPosition += 6;
      doc.text(`Feature: ${api.feature}`, margin + 5, yPosition);
      yPosition += 6;
      doc.text(`Inputs: ${api.inputs}`, margin + 5, yPosition);
      yPosition += 6;
      doc.text(`Output: ${api.output}`, margin + 5, yPosition);
      yPosition += 6;
      doc.text(`Functionality: ${api.functionality}`, margin + 5, yPosition);
      yPosition += 6;
      doc.text(`JSON: ${api.json}`, margin + 5, yPosition);
      yPosition += 12;
    });

    // User Analytics Section
    if (yPosition > 200) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('User Analytics APIs', margin, yPosition);
    yPosition += 15;

    const userApis = [
      {
        name: 'GET /api/user/learning-time',
        purpose: 'Get individual user learning time breakdown',
        feature: 'Time Spent on Learning chart in User Analytics',
        inputs: 'userId, granularity',
        output: 'Learning hours across different time periods',
        functionality: 'Aggregates user session data across specified time periods for personal analytics',
        json: '[{"period": "Daily", "hours": 2.5}, {"period": "Weekly", "hours": 12}]'
      },
      {
        name: 'GET /api/user/course-progress',
        purpose: 'Track individual course completion progress',
        feature: 'Course Completion Progress section in User Analytics',
        inputs: 'userId, courseType, includeInProgress',
        output: 'Completed courses, progress percentage, remaining courses',
        functionality: 'Calculates completion status across enrolled courses and tracks learning pathway progress',
        json: '{"completed": 23, "total": 30, "percentage": 76, "thisMonth": 4}'
      }
    ];

    // Add User APIs (showing first 2 for brevity)
    userApis.forEach((api, index) => {
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
      }

      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text(`${index + 22}. ${api.name}`, margin, yPosition);
      yPosition += 8;

      doc.setFont('helvetica', 'normal');
      doc.text(`Purpose: ${api.purpose}`, margin + 5, yPosition);
      yPosition += 6;
      doc.text(`Feature: ${api.feature}`, margin + 5, yPosition);
      yPosition += 6;
      doc.text(`Inputs: ${api.inputs}`, margin + 5, yPosition);
      yPosition += 6;
      doc.text(`Output: ${api.output}`, margin + 5, yPosition);
      yPosition += 6;
      doc.text(`Functionality: ${api.functionality}`, margin + 5, yPosition);
      yPosition += 6;
      doc.text(`JSON: ${api.json}`, margin + 5, yPosition);
      yPosition += 12;
    });

    // Footer
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.text(`Page ${i} of ${pageCount}`, pageWidth - 30, doc.internal.pageSize.height - 10);
      doc.text('Analytics Dashboard API Plan - Generated ' + new Date().toLocaleDateString(), margin, doc.internal.pageSize.height - 10);
    }

    // Save the PDF
    doc.save('analytics-dashboard-api-plan.pdf');
  };

  return (
    <div className="flex gap-2">
      <Button 
        onClick={generatePDF}
        className="bg-gradient-to-r from-sky-500 to-purple-500 hover:from-sky-600 hover:to-purple-600 text-white shadow-md"
      >
        <Download className="w-4 h-4 mr-2" />
        Download API Plan PDF
      </Button>
      <Button 
        variant="outline"
        onClick={generatePDF}
        className="border-sky-300 text-sky-700 hover:bg-sky-50"
      >
        <FileText className="w-4 h-4 mr-2" />
        Generate Report
      </Button>
    </div>
  );
};
