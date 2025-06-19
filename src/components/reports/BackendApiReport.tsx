
import { jsPDF } from 'jspdf';
import { Button } from '@/components/ui/button';
import { Download, Database } from 'lucide-react';

export const BackendApiReport = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const margin = 20;
    let yPosition = 20;

    // Title
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('Analytics Dashboard Backend API Documentation', margin, yPosition);
    yPosition += 20;

    // Subtitle
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('Complete API reference for analytics data management', margin, yPosition);
    yPosition += 20;

    // Database Tables Section
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Database Tables Overview', margin, yPosition);
    yPosition += 15;

    const tables = [
      {
        name: 'analytics_metrics',
        description: 'Core metrics data for organization, department, and user analytics',
        columns: [
          'id (uuid, primary key)',
          'scope (varchar) - org/dept/user',
          'metric_type (varchar) - employees/learners/hours/completion',
          'value (numeric) - metric value',
          'department (varchar, nullable)',
          'user_id (uuid, nullable)',
          'metadata (jsonb)',
          'created_at (timestamp)',
          'updated_at (timestamp)'
        ]
      },
      {
        name: 'analytics_trends',
        description: 'Time-series data for trending visualizations and charts',
        columns: [
          'id (uuid, primary key)',
          'scope (varchar) - org/dept/user',
          'chart_type (varchar) - completion/engagement/progress',
          'period (varchar) - date/month identifier',
          'value (numeric) - trend value',
          'department (varchar, nullable)',
          'user_id (uuid, nullable)',
          'metadata (jsonb)',
          'created_at (timestamp)'
        ]
      },
      {
        name: 'analytics_distributions',
        description: 'Distribution data for pie charts and categorical breakdowns',
        columns: [
          'id (uuid, primary key)',
          'scope (varchar) - org/dept/user',
          'distribution_type (varchar) - engagement/skills/departments',
          'category (varchar) - category name',
          'value (numeric) - distribution value',
          'department (varchar, nullable)',
          'user_id (uuid, nullable)',
          'metadata (jsonb)',
          'created_at (timestamp)'
        ]
      },
      {
        name: 'analytics_performance',
        description: 'Performance scores, benchmarks, and comparative analytics',
        columns: [
          'id (uuid, primary key)',
          'scope (varchar) - org/dept/user',
          'performance_metric (varchar) - score type',
          'score (numeric) - performance score',
          'benchmark (numeric, nullable) - comparison benchmark',
          'percentile (numeric, nullable) - percentile ranking',
          'trend (varchar, nullable) - improving/declining/stable',
          'department (varchar, nullable)',
          'user_id (uuid, nullable)',
          'metadata (jsonb)',
          'created_at (timestamp)'
        ]
      },
      {
        name: 'analytics_progress',
        description: 'Progress tracking for courses, goals, streaks, and achievements',
        columns: [
          'id (uuid, primary key)',
          'scope (varchar) - org/dept/user',
          'progress_type (varchar) - courses/goals/streaks',
          'completed (integer) - completed items',
          'total (integer) - total items',
          'streak (integer) - current streak',
          'achievements (jsonb) - achievement array',
          'department (varchar, nullable)',
          'user_id (uuid, nullable)',
          'metadata (jsonb)',
          'created_at (timestamp)',
          'updated_at (timestamp)'
        ]
      }
    ];

    // Add table details
    tables.forEach((table, index) => {
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
      }

      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text(`${index + 1}. ${table.name}`, margin, yPosition);
      yPosition += 8;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.text(`Description: ${table.description}`, margin + 5, yPosition);
      yPosition += 8;

      doc.text('Columns:', margin + 5, yPosition);
      yPosition += 6;

      table.columns.forEach((column) => {
        if (yPosition > 280) {
          doc.addPage();
          yPosition = 20;
        }
        doc.text(`  • ${column}`, margin + 10, yPosition);
        yPosition += 5;
      });
      yPosition += 8;
    });

    // API Endpoints Section
    if (yPosition > 200) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Supabase API Endpoints', margin, yPosition);
    yPosition += 15;

    const apiEndpoints = [
      {
        method: 'GET',
        endpoint: '/rest/v1/analytics_metrics',
        description: 'Retrieve analytics metrics with filtering',
        parameters: [
          'scope=eq.org|dept|user - Filter by scope',
          'metric_type=eq.employees|learners|hours|completion - Filter by type',
          'department=eq.engineering - Filter by department',
          'user_id=eq.uuid - Filter by user',
          'select=* - Select specific columns',
          'order=created_at.desc - Order results'
        ],
        example: 'GET /rest/v1/analytics_metrics?scope=eq.org&metric_type=eq.employees'
      },
      {
        method: 'POST',
        endpoint: '/rest/v1/analytics_metrics',
        description: 'Create new analytics metric',
        body: {
          scope: 'org',
          metric_type: 'employees',
          value: 1247,
          department: 'engineering',
          metadata: {}
        }
      },
      {
        method: 'GET',
        endpoint: '/rest/v1/analytics_trends',
        description: 'Retrieve trend data for charts',
        parameters: [
          'scope=eq.org|dept|user - Filter by scope',
          'chart_type=eq.completion|engagement|progress - Chart type',
          'period=gte.2024-01-01 - Date range filtering',
          'order=period.asc - Order by period'
        ],
        example: 'GET /rest/v1/analytics_trends?scope=eq.org&chart_type=eq.completion'
      },
      {
        method: 'GET',
        endpoint: '/rest/v1/analytics_distributions',
        description: 'Retrieve distribution data for pie charts',
        parameters: [
          'scope=eq.org|dept|user - Filter by scope',
          'distribution_type=eq.engagement|skills|departments - Type',
          'category=eq.High Engagement - Filter by category'
        ],
        example: 'GET /rest/v1/analytics_distributions?distribution_type=eq.engagement'
      },
      {
        method: 'GET',
        endpoint: '/rest/v1/analytics_performance',
        description: 'Retrieve performance scores and benchmarks',
        parameters: [
          'scope=eq.org|dept|user - Filter by scope',
          'performance_metric=eq.overall|skill|aptitude - Metric type',
          'department=eq.engineering - Filter by department'
        ],
        example: 'GET /rest/v1/analytics_performance?scope=eq.dept&department=eq.engineering'
      },
      {
        method: 'GET',
        endpoint: '/rest/v1/analytics_progress',
        description: 'Retrieve progress tracking data',
        parameters: [
          'scope=eq.org|dept|user - Filter by scope',
          'progress_type=eq.courses|goals|streaks - Progress type',
          'user_id=eq.uuid - Filter by user'
        ],
        example: 'GET /rest/v1/analytics_progress?progress_type=eq.courses'
      }
    ];

    // Add API endpoint details
    apiEndpoints.forEach((api, index) => {
      if (yPosition > 220) {
        doc.addPage();
        yPosition = 20;
      }

      doc.setFontSize(11);
      doc.setFont('helvetica', 'bold');
      doc.text(`${api.method} ${api.endpoint}`, margin, yPosition);
      yPosition += 8;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.text(`Description: ${api.description}`, margin + 5, yPosition);
      yPosition += 6;

      if (api.parameters) {
        doc.text('Parameters:', margin + 5, yPosition);
        yPosition += 5;
        api.parameters.forEach((param) => {
          if (yPosition > 280) {
            doc.addPage();
            yPosition = 20;
          }
          doc.text(`  • ${param}`, margin + 10, yPosition);
          yPosition += 4;
        });
      }

      if (api.body) {
        doc.text('Request Body:', margin + 5, yPosition);
        yPosition += 5;
        doc.text(JSON.stringify(api.body, null, 2), margin + 10, yPosition);
        yPosition += 15;
      }

      if (api.example) {
        doc.text(`Example: ${api.example}`, margin + 5, yPosition);
        yPosition += 8;
      }

      yPosition += 5;
    });

    // Authentication Section
    if (yPosition > 200) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Authentication & Configuration', margin, yPosition);
    yPosition += 15;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Supabase URL: https://dosxkpummvyibqgpnetn.supabase.co', margin, yPosition);
    yPosition += 8;
    doc.text('Anon Key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvc3hrcHVtbXZ5aWJxZ3BuZXRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzI1OTQsImV4cCI6MjA2NTgwODU5NH0.EzKSR2uPLNXX1NUG0jZRbG_95QVh5hvzWDR_rgG4up0', margin, yPosition);
    yPosition += 15;

    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Required Headers', margin, yPosition);
    yPosition += 8;

    const headers = [
      'apikey: [SUPABASE_ANON_KEY]',
      'Authorization: Bearer [SUPABASE_ANON_KEY]',
      'Content-Type: application/json',
      'Prefer: return=representation (for POST/PATCH requests)'
    ];

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    headers.forEach((header) => {
      doc.text(`• ${header}`, margin + 5, yPosition);
      yPosition += 6;
    });

    // Query Examples Section
    if (yPosition > 200) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Common Query Examples', margin, yPosition);
    yPosition += 15;

    const queryExamples = [
      {
        title: 'Get Organization Total Employees',
        query: "GET /rest/v1/analytics_metrics?scope=eq.org&metric_type=eq.employees&select=value"
      },
      {
        title: 'Get Department Learning Hours',
        query: "GET /rest/v1/analytics_metrics?scope=eq.dept&metric_type=eq.hours&department=eq.engineering"
      },
      {
        title: 'Get Completion Trends (Last 6 months)',
        query: "GET /rest/v1/analytics_trends?chart_type=eq.completion&period=gte.2024-01-01&order=period.asc"
      },
      {
        title: 'Get Engagement Distribution',
        query: "GET /rest/v1/analytics_distributions?distribution_type=eq.engagement&scope=eq.org"
      },
      {
        title: 'Get User Course Progress',
        query: "GET /rest/v1/analytics_progress?progress_type=eq.courses&user_id=eq.user-uuid-here"
      },
      {
        title: 'Get Performance Scores by Department',
        query: "GET /rest/v1/analytics_performance?scope=eq.dept&performance_metric=eq.overall&order=score.desc"
      }
    ];

    doc.setFontSize(10);
    queryExamples.forEach((example, index) => {
      if (yPosition > 260) {
        doc.addPage();
        yPosition = 20;
      }

      doc.setFont('helvetica', 'bold');
      doc.text(`${index + 1}. ${example.title}`, margin, yPosition);
      yPosition += 6;

      doc.setFont('helvetica', 'normal');
      doc.text(example.query, margin + 5, yPosition);
      yPosition += 12;
    });

    // Footer
    const pageCount = (doc as any).internal.pages.length - 1;
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.text(`Page ${i} of ${pageCount}`, pageWidth - 30, doc.internal.pageSize.height - 10);
      doc.text('Analytics Dashboard Backend API - Generated ' + new Date().toLocaleDateString(), margin, doc.internal.pageSize.height - 10);
    }

    // Save the PDF
    doc.save('analytics-dashboard-backend-api.pdf');
  };

  return (
    <div className="flex gap-2">
      <Button 
        onClick={generatePDF}
        className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white shadow-md"
      >
        <Download className="w-4 h-4 mr-2" />
        Download Backend API Docs
      </Button>
      <Button 
        variant="outline"
        onClick={generatePDF}
        className="border-blue-300 text-blue-700 hover:bg-blue-50"
      >
        <Database className="w-4 h-4 mr-2" />
        Generate API Reference
      </Button>
    </div>
  );
};
