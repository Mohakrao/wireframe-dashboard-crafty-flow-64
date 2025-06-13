
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
    doc.text('Optimized Analytics Dashboard API Plan', margin, yPosition);
    yPosition += 20;

    // Subtitle
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('Streamlined API documentation with consolidated endpoints', margin, yPosition);
    yPosition += 20;

    // Core Analytics APIs Section
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Core Analytics APIs (Consolidated)', margin, yPosition);
    yPosition += 15;

    const coreApis = [
      {
        name: 'GET /api/analytics/metrics',
        purpose: 'Universal endpoint for all analytics metrics with flexible filtering',
        features: 'All dashboard cards (employees, learners, hours, completion rates)',
        inputs: 'scope (org/dept/user), metric_types[], timeframe, filters{}',
        output: 'Unified metrics object with requested data points',
        functionality: 'Single endpoint that handles organization, department, and user metrics based on scope parameter',
        json: '{"employees": 1247, "activeLearners": 892, "avgHours": 48.2, "completionRate": 84.3}'
      },
      {
        name: 'GET /api/analytics/trends',
        purpose: 'Time-series data for all trending visualizations',
        features: 'Course completion trends, engagement over time, learning progress charts',
        inputs: 'scope, chart_type, period, granularity (daily/weekly/monthly)',
        output: 'Time-series arrays for chart rendering',
        functionality: 'Consolidates all trend data into configurable time-series format',
        json: '[{"period": "Jan", "completions": 45, "engagement": 78, "hours": 52}]'
      },
      {
        name: 'GET /api/analytics/distributions',
        purpose: 'All distribution and breakdown data for pie charts and comparative analysis',
        features: 'Engagement levels, skill gaps, department comparisons, user rankings',
        inputs: 'scope, distribution_type, categories[], comparison_basis',
        output: 'Categorized data arrays for distribution visualizations',
        functionality: 'Handles all categorical breakdowns and comparative distributions',
        json: '[{"category": "High Engagement", "value": 45, "department": "Engineering"}]'
      },
      {
        name: 'GET /api/analytics/performance',
        purpose: 'Performance scores, benchmarks, and comparative analytics',
        features: 'Department scores, peer comparisons, AI aptitude, skill intelligence',
        inputs: 'scope, performance_metrics[], benchmark_type, comparison_group',
        output: 'Performance data with contextual benchmarks and rankings',
        functionality: 'Unified performance calculation with flexible benchmarking',
        json: '{"score": 88, "percentile": 92, "benchmark": 73, "trend": "improving"}'
      },
      {
        name: 'GET /api/analytics/progress',
        purpose: 'Progress tracking for courses, goals, streaks, and achievements',
        features: 'Course progress, learning streaks, goal tracking, milestone achievements',
        inputs: 'scope, progress_types[], include_history, goal_definitions',
        output: 'Progress status with completion percentages and achievement data',
        functionality: 'Tracks all forms of progress with configurable goal definitions',
        json: '{"completed": 23, "total": 30, "streak": 14, "achievements": ["7-day"]}'
      }
    ];

    // Add Core APIs
    coreApis.forEach((api, index) => {
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
      doc.text(`Features: ${api.features}`, margin + 5, yPosition);
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

    // Specialized APIs Section
    if (yPosition > 200) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Specialized APIs', margin, yPosition);
    yPosition += 15;

    const specializedApis = [
      {
        name: 'GET /api/user/interactions',
        purpose: 'AI interactions, support tickets, and user activity patterns',
        features: 'AI interaction metrics, support tracking, usage patterns',
        inputs: 'user_id, interaction_types[], timeframe, include_support',
        output: 'User interaction data with AI usage patterns and support history',
        functionality: 'Consolidates all user interaction data including AI tools and support',
        json: '{"aiQueries": 12, "supportTickets": 3, "satisfaction": 4.8, "patterns": {}}'
      },
      {
        name: 'GET /api/admin/operations',
        purpose: 'Operational metrics, system health, and platform analytics',
        features: 'Resource usage, platform health, administrative insights',
        inputs: 'metric_categories[], system_components[], timeframe',
        output: 'Operational data for platform monitoring and resource planning',
        functionality: 'Aggregates operational metrics for system administrators',
        json: '{"resourceUsage": {"videos": 45}, "systemHealth": 98, "activeUsers": 1247}'
      },
      {
        name: 'GET /api/recognition/leaderboards',
        purpose: 'Recognition data, top performers, and achievement highlights',
        features: 'Leaderboards, top performers, recognition systems',
        inputs: 'scope, leaderboard_type, period, achievement_categories[]',
        output: 'Ranked lists and recognition data for gamification',
        functionality: 'Handles all recognition and leaderboard functionality',
        json: '[{"rank": 1, "name": "Alex Chen", "score": 95, "achievements": 12}]'
      }
    ];

    // Add Specialized APIs
    specializedApis.forEach((api, index) => {
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
      }

      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text(`${index + 6}. ${api.name}`, margin, yPosition);
      yPosition += 8;

      doc.setFont('helvetica', 'normal');
      doc.text(`Purpose: ${api.purpose}`, margin + 5, yPosition);
      yPosition += 6;
      doc.text(`Features: ${api.features}`, margin + 5, yPosition);
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

    // API Consolidation Benefits Section
    if (yPosition > 200) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('API Consolidation Benefits', margin, yPosition);
    yPosition += 15;

    const benefits = [
      'Reduced from 29 APIs to 8 streamlined endpoints (72% reduction)',
      'Single /metrics endpoint handles org, dept, and user analytics with scope parameter',
      'Flexible filtering eliminates need for separate endpoints per feature',
      'Consistent response formats across all analytics data',
      'Easier maintenance and testing with fewer endpoints',
      'Better caching strategies with consolidated data fetching',
      'Reduced API surface area improves security and monitoring'
    ];

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    benefits.forEach((benefit, index) => {
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 20;
      }
      doc.text(`• ${benefit}`, margin, yPosition);
      yPosition += 8;
    });

    // Example Usage Section
    if (yPosition > 200) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Example API Usage', margin, yPosition);
    yPosition += 15;

    const examples = [
      {
        title: 'Organization Total Employees:',
        call: 'GET /api/analytics/metrics?scope=org&metric_types[]=employees&timeframe=current'
      },
      {
        title: 'Department Learning Hours:',
        call: 'GET /api/analytics/metrics?scope=dept&metric_types[]=hours&filters[dept]=engineering'
      },
      {
        title: 'User Course Progress:',
        call: 'GET /api/analytics/progress?scope=user&progress_types[]=courses&user_id=123'
      },
      {
        title: 'Engagement Trends:',
        call: 'GET /api/analytics/trends?scope=org&chart_type=engagement&period=6months&granularity=monthly'
      }
    ];

    doc.setFontSize(10);
    examples.forEach((example, index) => {
      if (yPosition > 260) {
        doc.addPage();
        yPosition = 20;
      }
      doc.setFont('helvetica', 'bold');
      doc.text(example.title, margin, yPosition);
      yPosition += 6;
      doc.setFont('helvetica', 'normal');
      doc.text(example.call, margin + 5, yPosition);
      yPosition += 12;
    });

    // Footer
    const pageCount = (doc as any).internal.pages.length - 1;
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.text(`Page ${i} of ${pageCount}`, pageWidth - 30, doc.internal.pageSize.height - 10);
      doc.text('Optimized Analytics API Plan - Generated ' + new Date().toLocaleDateString(), margin, doc.internal.pageSize.height - 10);
    }

    // Save the PDF
    doc.save('optimized-analytics-api-plan.pdf');
  };

  return (
    <div className="flex gap-2">
      <Button 
        onClick={generatePDF}
        className="bg-gradient-to-r from-sky-500 to-purple-500 hover:from-sky-600 hover:to-purple-600 text-white shadow-md"
      >
        <Download className="w-4 h-4 mr-2" />
        Download Optimized API Plan
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
