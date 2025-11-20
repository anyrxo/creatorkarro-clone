'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, CheckCircle2, Download } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ModuleContentProps {
    courseId: string;
    moduleId: string;
    title: string;
    readTime?: string;
}

export default function ModuleContent({ courseId, moduleId, title, readTime = '15 min read' }: ModuleContentProps) {
    const [content, setContent] = useState<string>('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load markdown content
        fetch(`/content/modules/${courseId}/${moduleId}.md`)
            .then(res => res.text())
            .then(text => {
                setContent(text);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error loading content:', err);
                setLoading(false);
            });
    }, [courseId, moduleId]);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-purple-400">Loading content...</div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-6">
                    <BookOpen className="w-3 h-3" />
                    Written Content
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                    {title}
                </h1>
                <div className="flex items-center gap-4 text-zinc-400">
                    <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {readTime}
                    </span>
                    <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                    <span>Comprehensive Guide</span>
                </div>
            </motion.div>

            {/* Content */}
            <motion.article
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="prose prose-invert prose-lg max-w-none
          prose-headings:text-white prose-headings:font-bold
          prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-12
          prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-10 prose-h2:border-b prose-h2:border-purple-500/20 prose-h2:pb-3
          prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-8
          prose-h4:text-xl prose-h4:mb-2 prose-h4:mt-6 prose-h4:text-purple-400
          prose-p:text-zinc-300 prose-p:leading-relaxed prose-p:mb-4
          prose-strong:text-white prose-strong:font-bold
          prose-ul:text-zinc-300 prose-ul:my-4
          prose-ol:text-zinc-300 prose-ol:my-4
          prose-li:my-2
          prose-code:text-purple-400 prose-code:bg-purple-500/10 prose-code:px-2 prose-code:py-1 prose-code:rounded
          prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-purple-500/20
          prose-blockquote:border-l-purple-500 prose-blockquote:bg-purple-500/5 prose-blockquote:py-1
          prose-hr:border-purple-500/20 prose-hr:my-8
          prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-300
        "
            >
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {content}
                </ReactMarkdown>
            </motion.article>

            {/* Action Footer */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12 p-8 bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/30 rounded-2xl"
            >
                <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Completed this module?</h3>
                        <p className="text-purple-200/70 mb-4">
                            Make sure you've completed all action items before moving to the next lesson.
                        </p>
                        <button className="px-6 py-3 bg-white text-black hover:bg-zinc-200 rounded-lg font-bold transition-all">
                            Mark as Complete
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
