import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Machine Learning Automation: Build AI Systems That Learn & Improve Automatically | IImagined.ai',
  description: 'Master ML automation with model training, deployment, and monitoring pipelines. Build self-improving AI systems that automate complex decision-making processes.',
  keywords: [
    'machine learning automation',
    'ml automation pipeline',
    'automated machine learning',
    'mlops automation',
    'model training automation',
    'ai model deployment automation',
    'automated feature engineering',
    'ml monitoring automation',
    'automated model optimization',
    'machine learning workflow automation',
    'ai automation systems',
    'automated data science',
    'ml model automation',
    'predictive analytics automation'
  ],
  openGraph: {
    title: 'Machine Learning Automation: Build AI Systems That Learn & Improve Automatically',
    description: 'Advanced ML automation with model training, deployment, and monitoring for self-improving AI systems.',
    type: 'article',
    publishedTime: '2024-05-05T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Machine Learning', 'AI Automation', 'MLOps', 'Model Deployment', 'Data Science'],
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

export default function MachineLearningLayout({ children }: { children: React.ReactNode }) {
  return children
}