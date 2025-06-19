
import JSZip from 'jszip';
import { Button } from '@/components/ui/button';
import { Download, Code } from 'lucide-react';

export const BackendCodeExport = () => {
  const generateBackendZip = async () => {
    const zip = new JSZip();

    // Package.json
    const packageJson = {
      "name": "analytics-dashboard-backend",
      "version": "1.0.0",
      "description": "Backend API for Analytics Dashboard with Supabase integration",
      "main": "server.js",
      "scripts": {
        "start": "node server.js",
        "dev": "nodemon server.js",
        "test": "jest"
      },
      "dependencies": {
        "express": "^4.18.2",
        "@supabase/supabase-js": "^2.50.0",
        "cors": "^2.8.5",
        "dotenv": "^16.3.1",
        "helmet": "^7.1.0",
        "express-rate-limit": "^7.1.5"
      },
      "devDependencies": {
        "nodemon": "^3.0.2",
        "jest": "^29.7.0"
      },
      "keywords": ["analytics", "api", "supabase", "dashboard"],
      "author": "Analytics Dashboard Team",
      "license": "MIT"
    };

    // Environment variables template
    const envTemplate = `# Supabase Configuration
SUPABASE_URL=https://dosxkpummvyibqgpnetn.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvc3hrcHVtbXZ5aWJxZ3BuZXRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyMzI1OTQsImV4cCI6MjA2NTgwODU5NH0.EzKSR2uPLNXX1NUG0jZRbG_95QVh5hvzWDR_rgG4up0

# Server Configuration
PORT=3000
NODE_ENV=development

# CORS Configuration
CORS_ORIGIN=http://localhost:5173
`;

    // Main server file
    const serverJs = `const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const analyticsRoutes = require('./routes/analytics');
const metricsRoutes = require('./routes/metrics');
const trendsRoutes = require('./routes/trends');
const distributionsRoutes = require('./routes/distributions');
const performanceRoutes = require('./routes/performance');
const progressRoutes = require('./routes/progress');

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api/analytics', analyticsRoutes);
app.use('/api/metrics', metricsRoutes);
app.use('/api/trends', trendsRoutes);
app.use('/api/distributions', distributionsRoutes);
app.use('/api/performance', performanceRoutes);
app.use('/api/progress', progressRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(\`Analytics Dashboard Backend running on port \${PORT}\`);
  console.log(\`Environment: \${process.env.NODE_ENV}\`);
});

module.exports = app;
`;

    // Supabase client configuration
    const supabaseConfig = `const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
`;

    // Analytics routes
    const analyticsRoutes = `const express = require('express');
const router = express.Router();
const supabase = require('../config/supabase');

// GET /api/analytics/overview - Get comprehensive analytics overview
router.get('/overview', async (req, res) => {
  try {
    const { scope = 'org', department, user_id } = req.query;
    
    let query = supabase
      .from('analytics_metrics')
      .select('*')
      .eq('scope', scope);
    
    if (department) query = query.eq('department', department);
    if (user_id) query = query.eq('user_id', user_id);
    
    const { data, error } = await query;
    
    if (error) throw error;
    
    // Transform data into overview format
    const overview = {
      employees: data.find(d => d.metric_type === 'employees')?.value || 0,
      activeLearners: data.find(d => d.metric_type === 'learners')?.value || 0,
      averageHours: data.find(d => d.metric_type === 'hours')?.value || 0,
      completionRate: data.find(d => d.metric_type === 'completion')?.value || 0,
      lastUpdated: new Date().toISOString()
    };
    
    res.json(overview);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/analytics/summary - Get analytics summary by scope
router.get('/summary', async (req, res) => {
  try {
    const { scope, timeframe = '30d' } = req.query;
    
    const { data, error } = await supabase
      .from('analytics_metrics')
      .select('*')
      .eq('scope', scope || 'org')
      .gte('created_at', new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString());
    
    if (error) throw error;
    
    res.json({ summary: data, timeframe });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
`;

    // Metrics routes
    const metricsRoutes = `const express = require('express');
const router = express.Router();
const supabase = require('../config/supabase');

// GET /api/metrics - Get all metrics with filtering
router.get('/', async (req, res) => {
  try {
    const { scope, metric_type, department, user_id, limit = 100 } = req.query;
    
    let query = supabase
      .from('analytics_metrics')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(parseInt(limit));
    
    if (scope) query = query.eq('scope', scope);
    if (metric_type) query = query.eq('metric_type', metric_type);
    if (department) query = query.eq('department', department);
    if (user_id) query = query.eq('user_id', user_id);
    
    const { data, error } = await query;
    
    if (error) throw error;
    
    res.json({ metrics: data, count: data.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/metrics - Create new metric
router.post('/', async (req, res) => {
  try {
    const { scope, metric_type, value, department, user_id, metadata = {} } = req.body;
    
    if (!scope || !metric_type || value === undefined) {
      return res.status(400).json({ error: 'Missing required fields: scope, metric_type, value' });
    }
    
    const { data, error } = await supabase
      .from('analytics_metrics')
      .insert([{
        scope,
        metric_type,
        value: parseFloat(value),
        department,
        user_id,
        metadata
      }])
      .select();
    
    if (error) throw error;
    
    res.status(201).json({ metric: data[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT /api/metrics/:id - Update metric
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    const { data, error } = await supabase
      .from('analytics_metrics')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select();
    
    if (error) throw error;
    
    if (data.length === 0) {
      return res.status(404).json({ error: 'Metric not found' });
    }
    
    res.json({ metric: data[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE /api/metrics/:id - Delete metric
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const { data, error } = await supabase
      .from('analytics_metrics')
      .delete()
      .eq('id', id)
      .select();
    
    if (error) throw error;
    
    if (data.length === 0) {
      return res.status(404).json({ error: 'Metric not found' });
    }
    
    res.json({ message: 'Metric deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
`;

    // Trends routes
    const trendsRoutes = `const express = require('express');
const router = express.Router();
const supabase = require('../config/supabase');

// GET /api/trends - Get trend data for charts
router.get('/', async (req, res) => {
  try {
    const { scope, chart_type, period_start, period_end, department, user_id } = req.query;
    
    let query = supabase
      .from('analytics_trends')
      .select('*')
      .order('period', { ascending: true });
    
    if (scope) query = query.eq('scope', scope);
    if (chart_type) query = query.eq('chart_type', chart_type);
    if (department) query = query.eq('department', department);
    if (user_id) query = query.eq('user_id', user_id);
    if (period_start) query = query.gte('period', period_start);
    if (period_end) query = query.lte('period', period_end);
    
    const { data, error } = await query;
    
    if (error) throw error;
    
    res.json({ trends: data, count: data.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/trends/completion - Get completion trends
router.get('/completion', async (req, res) => {
  try {
    const { scope = 'org', months = 6 } = req.query;
    
    const { data, error } = await supabase
      .from('analytics_trends')
      .select('*')
      .eq('scope', scope)
      .eq('chart_type', 'completion')
      .gte('created_at', new Date(Date.now() - months * 30 * 24 * 60 * 60 * 1000).toISOString())
      .order('period', { ascending: true });
    
    if (error) throw error;
    
    res.json({ completionTrends: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/trends/engagement - Get engagement trends
router.get('/engagement', async (req, res) => {
  try {
    const { scope = 'org', months = 6 } = req.query;
    
    const { data, error } = await supabase
      .from('analytics_trends')
      .select('*')
      .eq('scope', scope)
      .eq('chart_type', 'engagement')
      .gte('created_at', new Date(Date.now() - months * 30 * 24 * 60 * 60 * 1000).toISOString())
      .order('period', { ascending: true });
    
    if (error) throw error;
    
    res.json({ engagementTrends: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/trends - Create new trend data
router.post('/', async (req, res) => {
  try {
    const { scope, chart_type, period, value, department, user_id, metadata = {} } = req.body;
    
    if (!scope || !chart_type || !period || value === undefined) {
      return res.status(400).json({ error: 'Missing required fields: scope, chart_type, period, value' });
    }
    
    const { data, error } = await supabase
      .from('analytics_trends')
      .insert([{
        scope,
        chart_type,
        period,
        value: parseFloat(value),
        department,
        user_id,
        metadata
      }])
      .select();
    
    if (error) throw error;
    
    res.status(201).json({ trend: data[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
`;

    // Distributions routes
    const distributionsRoutes = `const express = require('express');
const router = express.Router();
const supabase = require('../config/supabase');

// GET /api/distributions - Get distribution data
router.get('/', async (req, res) => {
  try {
    const { scope, distribution_type, department, user_id } = req.query;
    
    let query = supabase
      .from('analytics_distributions')
      .select('*')
      .order('value', { ascending: false });
    
    if (scope) query = query.eq('scope', scope);
    if (distribution_type) query = query.eq('distribution_type', distribution_type);
    if (department) query = query.eq('department', department);
    if (user_id) query = query.eq('user_id', user_id);
    
    const { data, error } = await query;
    
    if (error) throw error;
    
    res.json({ distributions: data, count: data.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/distributions/engagement - Get engagement distribution
router.get('/engagement', async (req, res) => {
  try {
    const { scope = 'org' } = req.query;
    
    const { data, error } = await supabase
      .from('analytics_distributions')
      .select('*')
      .eq('scope', scope)
      .eq('distribution_type', 'engagement')
      .order('value', { ascending: false });
    
    if (error) throw error;
    
    res.json({ engagementDistribution: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/distributions/skills - Get skills distribution
router.get('/skills', async (req, res) => {
  try {
    const { scope = 'org' } = req.query;
    
    const { data, error } = await supabase
      .from('analytics_distributions')
      .select('*')
      .eq('scope', scope)
      .eq('distribution_type', 'skills')
      .order('value', { ascending: false });
    
    if (error) throw error;
    
    res.json({ skillsDistribution: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/distributions - Create new distribution data
router.post('/', async (req, res) => {
  try {
    const { scope, distribution_type, category, value, department, user_id, metadata = {} } = req.body;
    
    if (!scope || !distribution_type || !category || value === undefined) {
      return res.status(400).json({ error: 'Missing required fields: scope, distribution_type, category, value' });
    }
    
    const { data, error } = await supabase
      .from('analytics_distributions')
      .insert([{
        scope,
        distribution_type,
        category,
        value: parseFloat(value),
        department,
        user_id,
        metadata
      }])
      .select();
    
    if (error) throw error;
    
    res.status(201).json({ distribution: data[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
`;

    // Performance routes
    const performanceRoutes = `const express = require('express');
const router = express.Router();
const supabase = require('../config/supabase');

// GET /api/performance - Get performance data
router.get('/', async (req, res) => {
  try {
    const { scope, performance_metric, department, user_id } = req.query;
    
    let query = supabase
      .from('analytics_performance')
      .select('*')
      .order('score', { ascending: false });
    
    if (scope) query = query.eq('scope', scope);
    if (performance_metric) query = query.eq('performance_metric', performance_metric);
    if (department) query = query.eq('department', department);
    if (user_id) query = query.eq('user_id', user_id);
    
    const { data, error } = await query;
    
    if (error) throw error;
    
    res.json({ performance: data, count: data.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/performance/scores - Get performance scores with benchmarks
router.get('/scores', async (req, res) => {
  try {
    const { scope = 'org', department } = req.query;
    
    let query = supabase
      .from('analytics_performance')
      .select('*')
      .eq('scope', scope)
      .order('score', { ascending: false });
    
    if (department) query = query.eq('department', department);
    
    const { data, error } = await query;
    
    if (error) throw error;
    
    // Calculate average score for benchmarking
    const avgScore = data.reduce((sum, item) => sum + parseFloat(item.score), 0) / data.length;
    
    res.json({ 
      performanceScores: data,
      benchmark: avgScore,
      count: data.length
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/performance/rankings - Get performance rankings
router.get('/rankings', async (req, res) => {
  try {
    const { scope = 'dept', limit = 10 } = req.query;
    
    const { data, error } = await supabase
      .from('analytics_performance')
      .select('*')
      .eq('scope', scope)
      .order('score', { ascending: false })
      .limit(parseInt(limit));
    
    if (error) throw error;
    
    // Add ranking information
    const rankings = data.map((item, index) => ({
      ...item,
      rank: index + 1
    }));
    
    res.json({ rankings });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/performance - Create new performance data
router.post('/', async (req, res) => {
  try {
    const { 
      scope, 
      performance_metric, 
      score, 
      benchmark, 
      percentile, 
      trend, 
      department, 
      user_id, 
      metadata = {} 
    } = req.body;
    
    if (!scope || !performance_metric || score === undefined) {
      return res.status(400).json({ error: 'Missing required fields: scope, performance_metric, score' });
    }
    
    const { data, error } = await supabase
      .from('analytics_performance')
      .insert([{
        scope,
        performance_metric,
        score: parseFloat(score),
        benchmark: benchmark ? parseFloat(benchmark) : null,
        percentile: percentile ? parseFloat(percentile) : null,
        trend,
        department,
        user_id,
        metadata
      }])
      .select();
    
    if (error) throw error;
    
    res.status(201).json({ performance: data[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
`;

    // Progress routes
    const progressRoutes = `const express = require('express');
const router = express.Router();
const supabase = require('../config/supabase');

// GET /api/progress - Get progress data
router.get('/', async (req, res) => {
  try {
    const { scope, progress_type, department, user_id } = req.query;
    
    let query = supabase
      .from('analytics_progress')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (scope) query = query.eq('scope', scope);
    if (progress_type) query = query.eq('progress_type', progress_type);
    if (department) query = query.eq('department', department);
    if (user_id) query = query.eq('user_id', user_id);
    
    const { data, error } = await query;
    
    if (error) throw error;
    
    // Calculate completion percentages
    const progressWithPercentages = data.map(item => ({
      ...item,
      completionPercentage: item.total > 0 ? (item.completed / item.total) * 100 : 0
    }));
    
    res.json({ progress: progressWithPercentages, count: data.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/progress/courses - Get course progress
router.get('/courses', async (req, res) => {
  try {
    const { scope = 'user', user_id, department } = req.query;
    
    let query = supabase
      .from('analytics_progress')
      .select('*')
      .eq('scope', scope)
      .eq('progress_type', 'courses')
      .order('updated_at', { ascending: false });
    
    if (user_id) query = query.eq('user_id', user_id);
    if (department) query = query.eq('department', department);
    
    const { data, error } = await query;
    
    if (error) throw error;
    
    res.json({ courseProgress: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/progress/streaks - Get learning streaks
router.get('/streaks', async (req, res) => {
  try {
    const { scope = 'user', user_id, department } = req.query;
    
    let query = supabase
      .from('analytics_progress')
      .select('*')
      .eq('scope', scope)
      .eq('progress_type', 'streaks')
      .order('streak', { ascending: false });
    
    if (user_id) query = query.eq('user_id', user_id);
    if (department) query = query.eq('department', department);
    
    const { data, error } = await query;
    
    if (error) throw error;
    
    res.json({ streaks: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/progress/achievements - Get achievements
router.get('/achievements', async (req, res) => {
  try {
    const { user_id, department } = req.query;
    
    let query = supabase
      .from('analytics_progress')
      .select('achievements, user_id, department, created_at')
      .not('achievements', 'eq', '[]')
      .order('created_at', { ascending: false });
    
    if (user_id) query = query.eq('user_id', user_id);
    if (department) query = query.eq('department', department);
    
    const { data, error } = await query;
    
    if (error) throw error;
    
    // Flatten achievements
    const allAchievements = data.flatMap(item => 
      item.achievements.map(achievement => ({
        ...achievement,
        user_id: item.user_id,
        department: item.department,
        earned_at: item.created_at
      }))
    );
    
    res.json({ achievements: allAchievements });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/progress - Create new progress data
router.post('/', async (req, res) => {
  try {
    const { 
      scope, 
      progress_type, 
      completed, 
      total, 
      streak = 0, 
      achievements = [], 
      department, 
      user_id, 
      metadata = {} 
    } = req.body;
    
    if (!scope || !progress_type || completed === undefined || total === undefined) {
      return res.status(400).json({ error: 'Missing required fields: scope, progress_type, completed, total' });
    }
    
    const { data, error } = await supabase
      .from('analytics_progress')
      .insert([{
        scope,
        progress_type,
        completed: parseInt(completed),
        total: parseInt(total),
        streak: parseInt(streak),
        achievements,
        department,
        user_id,
        metadata
      }])
      .select();
    
    if (error) throw error;
    
    res.status(201).json({ progress: data[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT /api/progress/:id - Update progress
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    const { data, error } = await supabase
      .from('analytics_progress')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select();
    
    if (error) throw error;
    
    if (data.length === 0) {
      return res.status(404).json({ error: 'Progress record not found' });
    }
    
    res.json({ progress: data[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
`;

    // README file
    const readme = `# Analytics Dashboard Backend API

A complete Node.js/Express backend API for the Analytics Dashboard with Supabase integration.

## Features

- **RESTful API** with Express.js
- **Supabase Integration** for data persistence
- **Security** with Helmet, CORS, and rate limiting
- **Analytics Endpoints** for metrics, trends, distributions, performance, and progress
- **Error Handling** and validation
- **Environment Configuration** for easy deployment

## Quick Start

### 1. Installation

\`\`\`bash
npm install
\`\`\`

### 2. Environment Setup

Copy \`.env.example\` to \`.env\` and update the configuration:

\`\`\`env
SUPABASE_URL=https://dosxkpummvyibqgpnetn.supabase.co
SUPABASE_ANON_KEY=your_supabase_anon_key
PORT=3000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
\`\`\`

### 3. Run the Server

\`\`\`bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
\`\`\`

The API will be available at \`http://localhost:3000\`

## API Endpoints

### Analytics Overview
- \`GET /api/analytics/overview\` - Comprehensive analytics overview
- \`GET /api/analytics/summary\` - Analytics summary by scope

### Metrics
- \`GET /api/metrics\` - Get all metrics with filtering
- \`POST /api/metrics\` - Create new metric
- \`PUT /api/metrics/:id\` - Update metric
- \`DELETE /api/metrics/:id\` - Delete metric

### Trends
- \`GET /api/trends\` - Get trend data for charts
- \`GET /api/trends/completion\` - Get completion trends
- \`GET /api/trends/engagement\` - Get engagement trends
- \`POST /api/trends\` - Create new trend data

### Distributions
- \`GET /api/distributions\` - Get distribution data
- \`GET /api/distributions/engagement\` - Get engagement distribution
- \`GET /api/distributions/skills\` - Get skills distribution
- \`POST /api/distributions\` - Create new distribution data

### Performance
- \`GET /api/performance\` - Get performance data
- \`GET /api/performance/scores\` - Get performance scores with benchmarks
- \`GET /api/performance/rankings\` - Get performance rankings
- \`POST /api/performance\` - Create new performance data

### Progress
- \`GET /api/progress\` - Get progress data
- \`GET /api/progress/courses\` - Get course progress
- \`GET /api/progress/streaks\` - Get learning streaks
- \`GET /api/progress/achievements\` - Get achievements
- \`POST /api/progress\` - Create new progress data
- \`PUT /api/progress/:id\` - Update progress

### Health Check
- \`GET /health\` - Server health status

## Query Parameters

Most GET endpoints support the following query parameters:

- \`scope\` - Filter by scope (org/dept/user)
- \`department\` - Filter by department
- \`user_id\` - Filter by user ID
- \`limit\` - Limit number of results
- \`timeframe\` - Time range filter

### Example Requests

\`\`\`bash
# Get organization metrics
curl "http://localhost:3000/api/metrics?scope=org&metric_type=employees"

# Get department performance
curl "http://localhost:3000/api/performance?scope=dept&department=engineering"

# Get user progress
curl "http://localhost:3000/api/progress/courses?user_id=123"

# Create new metric
curl -X POST "http://localhost:3000/api/metrics" \\
  -H "Content-Type: application/json" \\
  -d '{"scope":"org","metric_type":"employees","value":1247}'
\`\`\`

## Project Structure

\`\`\`
├── server.js              # Main server file
├── config/
│   └── supabase.js        # Supabase client configuration
├── routes/
│   ├── analytics.js       # Analytics overview routes
│   ├── metrics.js         # Metrics CRUD routes
│   ├── trends.js          # Trends data routes
│   ├── distributions.js   # Distribution data routes
│   ├── performance.js     # Performance data routes
│   └── progress.js        # Progress tracking routes
├── package.json
├── .env.example
└── README.md
\`\`\`

## Security Features

- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Rate Limiting** - Request rate limiting
- **Input Validation** - Request validation
- **Error Handling** - Comprehensive error handling

## Deployment

### Heroku
1. Create a Heroku app
2. Set environment variables in Heroku dashboard
3. Deploy using Git or GitHub integration

### Railway
1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically

### Docker
\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

## Development

\`\`\`bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Run tests
npm test
\`\`\`

## Support

For questions or issues, please check the API documentation or contact the development team.
`;

    // .env.example file
    const envExample = `# Supabase Configuration
SUPABASE_URL=https://dosxkpummvyibqgpnetn.supabase.co
SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Server Configuration
PORT=3000
NODE_ENV=development

# CORS Configuration
CORS_ORIGIN=http://localhost:5173
`;

    // .gitignore file
    const gitignore = `# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
logs
*.log

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/

# nyc test coverage
.nyc_output

# Dependency directories
node_modules/
jspm_packages/

# Optional npm cache directory
.npm

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db
`;

    // Add all files to the zip
    zip.file("package.json", JSON.stringify(packageJson, null, 2));
    zip.file(".env.example", envExample);
    zip.file("server.js", serverJs);
    zip.file("README.md", readme);
    zip.file(".gitignore", gitignore);
    
    // Config folder
    zip.file("config/supabase.js", supabaseConfig);
    
    // Routes folder
    zip.file("routes/analytics.js", analyticsRoutes);
    zip.file("routes/metrics.js", metricsRoutes);
    zip.file("routes/trends.js", trendsRoutes);
    zip.file("routes/distributions.js", distributionsRoutes);
    zip.file("routes/performance.js", performanceRoutes);
    zip.file("routes/progress.js", progressRoutes);

    // Generate and download the zip file
    const content = await zip.generateAsync({ type: "blob" });
    const url = window.URL.createObjectURL(content);
    const link = document.createElement("a");
    link.href = url;
    link.download = "analytics-dashboard-backend.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <Button 
      onClick={generateBackendZip}
      className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-md"
    >
      <Download className="w-4 h-4 mr-2" />
      Download Backend Code
    </Button>
  );
};
