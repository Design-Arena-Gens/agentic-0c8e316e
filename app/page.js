'use client'

import { useState } from 'react'

const strategies = [
  {
    id: 1,
    title: "AI Content Creation & Monetization",
    revenue: "$500-800/month",
    difficulty: "Beginner",
    timeToFirstDollar: "2-4 weeks",
    freeTools: [
      { name: "Claude (Anthropic)", use: "Long-form content, research, editing", url: "claude.ai" },
      { name: "ChatGPT Free", use: "Blog posts, social media content", url: "chat.openai.com" },
      { name: "Perplexity AI", use: "Research and fact-checking", url: "perplexity.ai" },
      { name: "Canva Free", use: "Graphics and thumbnails", url: "canva.com" },
      { name: "Medium", use: "Publishing platform (Partner Program)", url: "medium.com" }
    ],
    steps: [
      "Week 1: Create Medium account, join Partner Program",
      "Week 1-2: Use Claude/ChatGPT to research trending topics in 3 profitable niches (tech, finance, self-improvement)",
      "Week 2-3: Write 10 high-quality articles (use AI for drafts, human editing for authenticity)",
      "Week 3-4: Cross-post to LinkedIn Articles, Dev.to, Hashnode",
      "Month 2: Scale to 20+ articles, optimize headlines with AI",
      "Month 3: Build email list using free Substack, repurpose content"
    ],
    moneyMaking: [
      "Medium Partner Program: $200-400/month (after 500+ followers)",
      "Affiliate links in content: $100-200/month",
      "Sponsored content (after 5k followers): $200-300/month"
    ],
    tips: [
      "Use AI to generate outlines, but add personal stories",
      "Publish 3-4x per week for algorithm boost",
      "Use Perplexity for current stats and citations",
      "Engage with comments to boost distribution"
    ]
  },
  {
    id: 2,
    title: "AI-Powered Social Media Growth & Services",
    revenue: "$600-1000/month",
    difficulty: "Beginner-Intermediate",
    timeToFirstDollar: "3-6 weeks",
    freeTools: [
      { name: "ChatGPT", use: "Content calendars, post ideas, captions", url: "chat.openai.com" },
      { name: "Claude", use: "Thread writing, engagement strategies", url: "claude.ai" },
      { name: "Canva Free", use: "Social media graphics", url: "canva.com" },
      { name: "Buffer Free", use: "Scheduling (10 posts)", url: "buffer.com" },
      { name: "CapCut Free", use: "Video editing", url: "capcut.com" },
      { name: "Ideogram Free", use: "AI image generation", url: "ideogram.ai" }
    ],
    steps: [
      "Week 1: Choose niche (business tips, productivity, AI tools, etc.)",
      "Week 2: Create Twitter/X + LinkedIn accounts, optimize with AI-generated bios",
      "Week 3-4: Post 3x daily on Twitter, 1x daily on LinkedIn using AI-generated content",
      "Week 5-6: Use AI to analyze top-performing posts, double down on what works",
      "Week 7-8: Reach 1,000 followers, start offering social media management services",
      "Month 3-4: Build portfolio, get 3-5 clients at $150-250/month each"
    ],
    moneyMaking: [
      "Social media management: $450-750/month (3 clients @ $150-250)",
      "Twitter ghostwriting: $300-500/month (1-2 clients)",
      "Affiliate commissions: $100-200/month"
    ],
    tips: [
      "Use AI to batch-create 30 days of content in 2 hours",
      "Engage authentically - AI for content, human for relationships",
      "Offer free 1-week trial to land first clients",
      "Document your growth journey for credibility"
    ]
  },
  {
    id: 3,
    title: "AI Automation & No-Code Solutions",
    revenue: "$700-1200/month",
    difficulty: "Intermediate",
    timeToFirstDollar: "4-8 weeks",
    freeTools: [
      { name: "ChatGPT Code Interpreter", use: "Python scripts, data analysis", url: "chat.openai.com" },
      { name: "Claude", use: "Workflow design, documentation", url: "claude.ai" },
      { name: "Make.com Free", use: "Automation workflows (1000 ops/month)", url: "make.com" },
      { name: "Zapier Free", use: "Simple automations (100 tasks/month)", url: "zapier.com" },
      { name: "Airtable Free", use: "Database and CRM", url: "airtable.com" },
      { name: "Google Apps Script", use: "Sheets/Docs automation", url: "script.google.com" }
    ],
    steps: [
      "Week 1-2: Learn automation basics using AI tutoring (ask ChatGPT to teach you)",
      "Week 3-4: Build 5 automation templates (lead generation, data entry, email workflows)",
      "Week 5-6: Create free portfolio site showcasing automations",
      "Week 7-8: Offer services on freelance platforms (Upwork, Fiverr, Twitter)",
      "Month 3: Land 2-3 automation projects at $250-400 each",
      "Month 4: Build recurring automation maintenance packages"
    ],
    moneyMaking: [
      "Automation projects: $500-800/month (2-3 projects)",
      "Maintenance packages: $200-300/month (recurring)",
      "Template sales on Gumroad: $100-200/month"
    ],
    tips: [
      "Use AI to generate automation code - test thoroughly",
      "Target small businesses who need simple automations",
      "Create video walkthroughs using free Loom",
      "Specialize in one platform (e.g., Make.com) to become expert"
    ]
  },
  {
    id: 4,
    title: "AI-Assisted Freelance Services",
    revenue: "$800-1500/month",
    difficulty: "Intermediate",
    timeToFirstDollar: "2-6 weeks",
    freeTools: [
      { name: "ChatGPT", use: "Writing, brainstorming, editing", url: "chat.openai.com" },
      { name: "Claude", use: "Technical writing, code review", url: "claude.ai" },
      { name: "Grammarly Free", use: "Grammar and tone checking", url: "grammarly.com" },
      { name: "Gemini", use: "Research and analysis", url: "gemini.google.com" },
      { name: "QuillBot Free", use: "Paraphrasing and summarization", url: "quillbot.com" }
    ],
    steps: [
      "Week 1: Choose high-demand service (copywriting, technical writing, data entry enhanced with AI)",
      "Week 2: Create profiles on Upwork, Fiverr, Contra",
      "Week 3-4: Apply to 20+ jobs daily, use AI to customize proposals",
      "Week 4-6: Land first 3-5 clients, over-deliver using AI efficiency",
      "Month 2-3: Build 5-star reviews, raise rates by 50%",
      "Month 3-4: Focus on repeat clients and referrals"
    ],
    moneyMaking: [
      "Copywriting: $400-700/month (4-7 projects at $100-150)",
      "Technical documentation: $300-500/month (2-3 projects)",
      "Data analysis reports: $200-400/month (1-2 projects)"
    ],
    tips: [
      "Use AI to work 3-5x faster, price competitively at first",
      "Always add human touch - edit AI outputs extensively",
      "Specialize to stand out (e.g., SaaS copywriting)",
      "Use AI to analyze client feedback and improve"
    ]
  },
  {
    id: 5,
    title: "AI-Generated Digital Products",
    revenue: "$400-800/month",
    difficulty: "Beginner-Intermediate",
    timeToFirstDollar: "3-8 weeks",
    freeTools: [
      { name: "ChatGPT", use: "Ebooks, guides, templates", url: "chat.openai.com" },
      { name: "Claude", use: "Long-form content creation", url: "claude.ai" },
      { name: "Canva Free", use: "Ebook covers, worksheets", url: "canva.com" },
      { name: "Gumroad", use: "Selling platform (free tier)", url: "gumroad.com" },
      { name: "Notion Free", use: "Template creation", url: "notion.so" }
    ],
    steps: [
      "Week 1-2: Research profitable niches using AI (productivity, business, health)",
      "Week 3-4: Create 3 digital products: ebook, Notion template, resource guide",
      "Week 5-6: Design covers and landing pages with Canva",
      "Week 7-8: Launch on Gumroad, promote on social media",
      "Month 3: Create bundle packages, run promotions",
      "Month 4: Build email list, launch new products monthly"
    ],
    moneyMaking: [
      "Ebook sales: $200-400/month (20-40 @ $10-15)",
      "Notion templates: $100-200/month (10-20 @ $10-15)",
      "Resource bundles: $100-200/month"
    ],
    tips: [
      "Use AI to create content, but validate with real expertise",
      "Create lead magnets (free mini-versions) to build audience",
      "Cross-promote products in each resource",
      "Use customer feedback to improve and create new products"
    ]
  },
  {
    id: 6,
    title: "AI-Powered YouTube/TikTok Content",
    revenue: "$300-700/month",
    difficulty: "Intermediate",
    timeToFirstDollar: "8-16 weeks",
    freeTools: [
      { name: "ChatGPT", use: "Scripts, video ideas, SEO", url: "chat.openai.com" },
      { name: "Claude", use: "Long-form scripts, research", url: "claude.ai" },
      { name: "CapCut Free", use: "Video editing", url: "capcut.com" },
      { name: "Canva Free", use: "Thumbnails and graphics", url: "canva.com" },
      { name: "OBS Studio", use: "Screen recording", url: "obsproject.com" },
      { name: "ElevenLabs Free", use: "AI voiceover (limited)", url: "elevenlabs.io" }
    ],
    steps: [
      "Week 1-2: Choose niche (AI tutorials, productivity, finance tips)",
      "Week 3-4: Use AI to generate 50 video ideas, script first 10 videos",
      "Week 5-8: Produce and post 2-3 videos per week",
      "Week 9-12: Optimize based on analytics, double down on top performers",
      "Month 4-6: Reach monetization threshold (1K subs + 4K watch hours)",
      "Month 6+: Diversify with sponsorships and affiliate marketing"
    ],
    moneyMaking: [
      "YouTube ad revenue: $100-300/month (after monetization)",
      "Affiliate links: $100-200/month",
      "Sponsorships: $200-400/month (after 5K+ subscribers)"
    ],
    tips: [
      "Faceless channels work: screen recordings + AI voice",
      "Use AI to analyze trending topics daily",
      "Batch-create content: 10 scripts in one AI session",
      "TikTok can drive YouTube growth - repurpose content"
    ]
  }
]

export default function Home() {
  const [expandedStrategy, setExpandedStrategy] = useState(null)
  const [selectedStrategies, setSelectedStrategies] = useState([])

  const toggleStrategy = (id) => {
    setExpandedStrategy(expandedStrategy === id ? null : id)
  }

  const toggleSelection = (id) => {
    setSelectedStrategies(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    )
  }

  const calculateTotal = () => {
    return selectedStrategies.reduce((total, id) => {
      const strategy = strategies.find(s => s.id === id)
      const avg = parseInt(strategy.revenue.match(/\$(\d+)/)[1])
      return total + avg
    }, 0)
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', color: 'white', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '16px', fontWeight: '800' }}>
            🎯 $2000/Month Challenge
          </h1>
          <h2 style={{ fontSize: '24px', marginBottom: '24px', fontWeight: '400', opacity: 0.95 }}>
            Using 100% Free AI Tools
          </h2>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            padding: '20px',
            borderRadius: '12px',
            backdropFilter: 'blur(10px)'
          }}>
            <p style={{ fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
              A complete, precision roadmap to achieve consistent monthly income using only free AI tools.
              Select strategies below to build your personalized income plan.
            </p>
          </div>
        </div>

        {/* Calculator */}
        {selectedStrategies.length > 0 && (
          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '16px',
            marginBottom: '30px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
          }}>
            <h3 style={{ fontSize: '24px', marginBottom: '16px', color: '#333' }}>
              📊 Your Custom Income Plan
            </h3>
            <div style={{ fontSize: '48px', fontWeight: '800', color: '#667eea', marginBottom: '16px' }}>
              ${calculateTotal()}/month
            </div>
            <p style={{ color: '#666', fontSize: '16px' }}>
              Selected {selectedStrategies.length} strateg{selectedStrategies.length === 1 ? 'y' : 'ies'}.
              {calculateTotal() >= 2000 ? ' ✅ Goal achieved!' : ` Add $${2000 - calculateTotal()} more to reach $2000.`}
            </p>
          </div>
        )}

        {/* Strategies */}
        <div style={{ display: 'grid', gap: '24px' }}>
          {strategies.map(strategy => (
            <div key={strategy.id} style={{
              background: 'white',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
              transition: 'transform 0.2s',
              cursor: 'pointer',
              border: selectedStrategies.includes(strategy.id) ? '3px solid #667eea' : 'none'
            }}>
              {/* Header */}
              <div
                onClick={() => toggleStrategy(strategy.id)}
                style={{
                  padding: '24px',
                  background: selectedStrategies.includes(strategy.id) ? '#667eea' : '#f7fafc',
                  color: selectedStrategies.includes(strategy.id) ? 'white' : '#333'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '24px', marginBottom: '8px', fontWeight: '700' }}>
                      {strategy.title}
                    </h3>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', fontSize: '14px' }}>
                      <span style={{
                        background: selectedStrategies.includes(strategy.id) ? 'rgba(255,255,255,0.2)' : '#e6f7ff',
                        color: selectedStrategies.includes(strategy.id) ? 'white' : '#1890ff',
                        padding: '4px 12px',
                        borderRadius: '12px'
                      }}>
                        {strategy.revenue}
                      </span>
                      <span style={{
                        background: selectedStrategies.includes(strategy.id) ? 'rgba(255,255,255,0.2)' : '#f0f5ff',
                        color: selectedStrategies.includes(strategy.id) ? 'white' : '#5856d6',
                        padding: '4px 12px',
                        borderRadius: '12px'
                      }}>
                        {strategy.difficulty}
                      </span>
                      <span style={{
                        background: selectedStrategies.includes(strategy.id) ? 'rgba(255,255,255,0.2)' : '#fff7e6',
                        color: selectedStrategies.includes(strategy.id) ? 'white' : '#fa8c16',
                        padding: '4px 12px',
                        borderRadius: '12px'
                      }}>
                        ⚡ {strategy.timeToFirstDollar}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleSelection(strategy.id)
                    }}
                    style={{
                      padding: '8px 20px',
                      background: selectedStrategies.includes(strategy.id) ? 'white' : '#667eea',
                      color: selectedStrategies.includes(strategy.id) ? '#667eea' : 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '14px'
                    }}
                  >
                    {selectedStrategies.includes(strategy.id) ? '✓ Selected' : 'Select'}
                  </button>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedStrategy === strategy.id && (
                <div style={{ padding: '24px' }}>
                  {/* Free Tools */}
                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{ fontSize: '18px', marginBottom: '12px', color: '#333', fontWeight: '600' }}>
                      🛠️ Free Tools You'll Use
                    </h4>
                    <div style={{ display: 'grid', gap: '8px' }}>
                      {strategy.freeTools.map((tool, idx) => (
                        <div key={idx} style={{
                          padding: '12px',
                          background: '#f7fafc',
                          borderRadius: '8px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}>
                          <div>
                            <strong style={{ color: '#667eea' }}>{tool.name}</strong>
                            <span style={{ color: '#666', marginLeft: '8px' }}>- {tool.use}</span>
                          </div>
                          <span style={{ color: '#999', fontSize: '14px' }}>{tool.url}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Steps */}
                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{ fontSize: '18px', marginBottom: '12px', color: '#333', fontWeight: '600' }}>
                      📋 Step-by-Step Timeline
                    </h4>
                    <div style={{ display: 'grid', gap: '8px' }}>
                      {strategy.steps.map((step, idx) => (
                        <div key={idx} style={{
                          padding: '12px',
                          background: '#f0f9ff',
                          borderRadius: '8px',
                          borderLeft: '4px solid #667eea'
                        }}>
                          <span style={{ fontWeight: '600', color: '#667eea' }}>Step {idx + 1}:</span>
                          <span style={{ marginLeft: '8px', color: '#333' }}>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Money Making */}
                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{ fontSize: '18px', marginBottom: '12px', color: '#333', fontWeight: '600' }}>
                      💰 Revenue Breakdown
                    </h4>
                    <div style={{ display: 'grid', gap: '8px' }}>
                      {strategy.moneyMaking.map((revenue, idx) => (
                        <div key={idx} style={{
                          padding: '12px',
                          background: '#f0fdf4',
                          borderRadius: '8px',
                          borderLeft: '4px solid #10b981'
                        }}>
                          {revenue}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tips */}
                  <div>
                    <h4 style={{ fontSize: '18px', marginBottom: '12px', color: '#333', fontWeight: '600' }}>
                      💡 Pro Tips
                    </h4>
                    <div style={{ display: 'grid', gap: '8px' }}>
                      {strategy.tips.map((tip, idx) => (
                        <div key={idx} style={{
                          padding: '12px',
                          background: '#fef3c7',
                          borderRadius: '8px',
                          borderLeft: '4px solid #f59e0b'
                        }}>
                          {tip}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Plan */}
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '16px',
          marginTop: '40px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
        }}>
          <h3 style={{ fontSize: '28px', marginBottom: '24px', color: '#333', textAlign: 'center' }}>
            🚀 Your 90-Day Action Plan
          </h3>

          <div style={{ display: 'grid', gap: '20px', marginBottom: '32px' }}>
            <div style={{ padding: '20px', background: '#f0f9ff', borderRadius: '12px' }}>
              <h4 style={{ color: '#667eea', marginBottom: '12px', fontSize: '20px' }}>Month 1: Foundation</h4>
              <ul style={{ color: '#333', lineHeight: '1.8', margin: 0 }}>
                <li>Choose 2-3 strategies that match your skills</li>
                <li>Set up all free tool accounts</li>
                <li>Create profiles on relevant platforms</li>
                <li>Start execution on easiest strategy first</li>
                <li>Goal: First $200-500</li>
              </ul>
            </div>

            <div style={{ padding: '20px', background: '#f0fdf4', borderRadius: '12px' }}>
              <h4 style={{ color: '#10b981', marginBottom: '12px', fontSize: '20px' }}>Month 2: Optimization</h4>
              <ul style={{ color: '#333', lineHeight: '1.8', margin: 0 }}>
                <li>Double down on what's working</li>
                <li>Eliminate or pivot on what's not</li>
                <li>Increase output by 50%</li>
                <li>Build systems with AI automation</li>
                <li>Goal: Reach $800-1200</li>
              </ul>
            </div>

            <div style={{ padding: '20px', background: '#fef3c7', borderRadius: '12px' }}>
              <h4 style={{ color: '#f59e0b', marginBottom: '12px', fontSize: '20px' }}>Month 3: Scaling</h4>
              <ul style={{ color: '#333', lineHeight: '1.8', margin: 0 }}>
                <li>Systematize your top performers</li>
                <li>Raise your rates/prices</li>
                <li>Add 1-2 new income streams</li>
                <li>Build recurring revenue sources</li>
                <li>Goal: Hit $2000+ consistently</li>
              </ul>
            </div>
          </div>

          <div style={{
            padding: '24px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '12px',
            color: 'white'
          }}>
            <h4 style={{ marginBottom: '16px', fontSize: '20px' }}>⚡ Critical Success Factors</h4>
            <ul style={{ lineHeight: '1.8', margin: 0 }}>
              <li><strong>Consistency over perfection:</strong> Ship daily, improve weekly</li>
              <li><strong>AI is your co-pilot:</strong> Use it to 10x your output, not replace your judgment</li>
              <li><strong>Start before you're ready:</strong> You'll learn faster by doing</li>
              <li><strong>Track everything:</strong> What gets measured gets improved</li>
              <li><strong>Compound your efforts:</strong> Every piece of content/work builds your reputation</li>
              <li><strong>Reinvest early wins:</strong> First $500 can unlock paid tools to accelerate further</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', marginTop: '40px', color: 'white', opacity: 0.9 }}>
          <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
            This roadmap is designed to be executed with discipline and adaptability.
            <br />
            Your results will vary based on effort, consistency, and market conditions.
            <br />
            <strong>Start today. Adjust tomorrow. Succeed within 90 days.</strong>
          </p>
        </div>
      </div>
    </div>
  )
}
