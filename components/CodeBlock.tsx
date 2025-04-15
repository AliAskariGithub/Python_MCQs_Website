'use client';

import { useEffect, useRef, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-bash';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/themes/prism-tomorrow.css';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
  title?: string;
}

const CodeBlock = ({
  code,
  language = 'python',
  showLineNumbers = true,
  className = '',
  title = '',
}: CodeBlockProps) => {
  const codeRef = useRef<HTMLElement>(null);
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true on mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  // Re-highlight when component mounts to ensure proper rendering
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (codeRef.current) {
        Prism.highlightElement(codeRef.current);
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const languageClass = `language-${language}`;
  // Only include the language class on the client side
  const preClassName = isClient 
    ? `${showLineNumbers ? 'line-numbers' : ''} ${languageClass}`
    : `${showLineNumbers ? 'line-numbers' : ''}`;

  // Create a display name for the language
  const displayLanguage = {
    'python': 'Python',
    'typescript': 'TypeScript',
    'javascript': 'JavaScript',
    'jsx': 'React JSX',
    'bash': 'Bash/Shell'
  }[language] || language;

  return (
    <div className={`code-block-wrapper ${className}`}>
      <div className="code-block-header p-2 sm:p-3">
        <div className="flex items-center">
          <div className="window-controls mr-2 sm:mr-3 hidden sm:flex">
            <span className="window-control close"></span>
            <span className="window-control minimize"></span>
            <span className="window-control maximize"></span>
          </div>
          <span className="language-badge font-medium text-xs sm:text-sm">
            {title || displayLanguage}
          </span>
        </div>
        <div className="text-[10px] sm:text-xs text-zinc-400 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded bg-zinc-800/50">
          {showLineNumbers ? 'line-numbers' : ''}
        </div>
      </div>
      <div className="overflow-x-auto">
        <pre className={preClassName} style={{ margin: 0, padding: '0.75rem 1rem', fontSize: 'clamp(12px, 2.5vw, 14px)' }}>
          <code ref={codeRef} className={languageClass}>
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock; 