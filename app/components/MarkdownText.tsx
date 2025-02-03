import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import IMarkdownText from '@/interfaces/IMarkdownText';

const MarkdownText: React.FC<IMarkdownText> = ({ text, classes }) => {
  // Correction: In string replace all \n to \n\n
  const correctedText = text.replace(/\n/g, "\n\n");

  // Create an array of paragraphs on $$
  const paragraphs = correctedText.split("$$");

  return (
    <div className={`markdown-block hyphens-auto ${classes}`}>
      {paragraphs.map((paragraph) => (
        <div className="mb-3">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            children={paragraph ?? ""}
          />
        </div>
      ))}
    </div>
  );
};

export default MarkdownText;
