'use client'

import Link, { LinkProps } from 'next/link';
import React, { AnchorHTMLAttributes, forwardRef, ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { setLinkTargets } from '@/helpers/setLinkTargets';
import IMarkdownText from '@/interfaces/IMarkdownText';

const MarkdownText: React.FC<IMarkdownText> = ({ text, classes }) => {
  // Correction: In string replace all \n to \n\n
  const correctedText = text.replace(/\n/g, "\n\n");

  // Create an array of paragraphs on $$
  const paragraphs = correctedText.split("$$");

  return (
    <div className={`markdown-block hyphens-auto ${classes}`}>
      {paragraphs.map((paragraph, i) => (
        <div className="mb-3" key={i}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            children={paragraph}
            components={{
              a: CustomLink,
            }}
          /> 
        </div>
      ))}
    </div>
  );
};

type CustomLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href?: LinkProps['href'];
  as?: LinkProps['as'];
  children?: ReactNode & ReactNode[];
};

const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(
  ({ as, href = '#', ...otherProps }, ref) => {
    console.log(href);
    return (
      <Link as={as} href={href} {...otherProps} ref={ref} target={setLinkTargets(href)} />
      
    );
  }
);

CustomLink.displayName = 'CustomLink';

export default MarkdownText;
