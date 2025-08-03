import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Machine Learning Automation: Build Self-Improving Systems That Generate $100K+/Month | IImagined.ai',
  description: 'Master automated ML pipelines that train, deploy, and optimize models without human intervention. Learn AutoML, MLOps, and production deployment strategies.',
  keywords: [
    'machine learning automation',
    'ml automation',
    'automl pipeline',
    'automated machine learning',
    'mlops automation',
    'ml pipeline automation',
    'self training models',
    'automated model deployment',
    'ml automation tools',
    'machine learning ops',
    'ml workflow automation',
    'automated feature engineering',
    'model training automation',
    'ml deployment automation',
    'machine learning pipelines'
  ],
  openGraph: {
    title: 'Machine Learning Automation: Build Self-Improving Systems That Generate $100K+/Month',
    description: 'Master automated ML pipelines for training, deploying, and optimizing models without human intervention.',
    type: 'article',
    publishedTime: '2024-11-10T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Machine Learning', 'ML Automation', 'AutoML', 'MLOps', 'AI Systems'],
    images: [
      {
        url: 'https://iimagined.ai/blog/machine-learning-automation/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Machine Learning Automation - Self-Improving AI Systems'
      }
    ]
  }
}

export default function MLAutomationLayout({ children }: { children: React.ReactNode }) {
  return children
}
