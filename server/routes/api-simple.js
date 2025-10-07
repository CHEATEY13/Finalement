const express = require('express');
const router = express.Router();

// @route   GET /api/health
// @desc    Health check endpoint
// @access  Public
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'CodeClarity API is running',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// @route   GET /api/languages
// @desc    Get supported programming languages
// @access  Public
router.get('/languages', (req, res) => {
  const languages = [
    'JavaScript',
    'Python',
    'Java',
    'C++',
    'C#',
    'Go',
    'Rust',
    'Kotlin',
    'TypeScript',
    'HTML',
    'CSS',
    'SQL',
    'R',
    'MATLAB',
    'Scala',
    'Perl',
    'Lua'
  ];

  res.json({
    success: true,
    data: languages
  });
});

// @route   POST /api/analyze
// @desc    Basic code analysis (demo mode)
// @access  Public
router.post('/analyze', (req, res) => {
  try {
    const { code, language } = req.body;

    if (!code || !language) {
      return res.status(400).json({
        success: false,
        message: 'Code and language are required'
      });
    }

    // Basic demo analysis
    const result = {
      language: language,
      overview: `This ${language} code contains ${code.split('\n').length} lines and appears to be a code snippet for analysis.`,
      lineByLineAnalysis: code.split('\n').slice(0, 5).map((line, index) => ({
        line: line.trim() || `Line ${index + 1}`,
        explanation: `This line contains ${language} syntax.`
      })),
      output: "Demo mode - add API keys for detailed analysis",
      summary: `Basic ${language} code analysis completed in demo mode.`,
      suggestions: [
        "Add OpenAI API key for detailed analysis",
        "Consider code formatting and best practices",
        "Review for potential optimizations"
      ]
    };

    res.json({
      success: true,
      data: result
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to analyze code'
    });
  }
});

// @route   POST /api/translate
// @desc    Basic code translation (demo mode)
// @access  Public
router.post('/translate', (req, res) => {
  try {
    const { code, language, targetLanguage } = req.body;

    if (!code || !language || !targetLanguage) {
      return res.status(400).json({
        success: false,
        message: 'Code, source language, and target language are required'
      });
    }

    // Basic demo translation
    const result = {
      language: targetLanguage,
      translatedCode: `# Translated from ${language} to ${targetLanguage}\n# Demo mode - add API keys for real translation\n\n${code}`,
      dependencies: [`${targetLanguage.toLowerCase()}-demo-package`],
      notes: `Demo translation from ${language} to ${targetLanguage}. Add API keys for actual translation.`
    };

    res.json({
      success: true,
      data: result
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to translate code'
    });
  }
});

// @route   POST /api/debug
// @desc    Basic code debugging (demo mode)
// @access  Public
router.post('/debug', (req, res) => {
  try {
    const { code, language } = req.body;

    if (!code || !language) {
      return res.status(400).json({
        success: false,
        message: 'Code and language are required'
      });
    }

    // Basic demo debugging
    const result = {
      language: language,
      issues: [
        {
          type: "demo",
          severity: "low",
          line: "1",
          description: "Demo mode active - add API keys for real debugging",
          suggestion: "Add Gemini API key for comprehensive code analysis"
        }
      ],
      suggestions: [
        "Add API keys for detailed debugging",
        "Consider error handling",
        "Review code structure"
      ],
      fixedCode: `// Demo fixed code\n${code}`,
      summary: `Demo debugging analysis for ${language} code completed.`
    };

    res.json({
      success: true,
      data: result
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to debug code'
    });
  }
});

module.exports = router;
