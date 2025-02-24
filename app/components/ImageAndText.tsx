import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import IImageAndText from '@/interfaces/IImageAndText';

import ImageForText from './ImageForText';
import MarkdownText from './MarkdownText';
import Title from './Title';

const ImageAndText: React.FC<IImageAndText> = ({
  title,
  driveId,
  fileName,
  alt,
  classNameForImg,
  imageLeft,
  text,
  textAlign,
  buttonText
}) => {

  const isJustified = true;

  const newTabString = '{newtab}'

  const isNewTab = (paragraph: string) => paragraph.includes(newTabString);

  return (
    <>
      <div className={`image-and-text flex ${imageLeft ? 'flex-col' : 'flex-col-reverse'} md:flex-row mt-[100px] hyphens-auto`}>
        {imageLeft && <ImageForText fileName={fileName || ''} alt={alt || 'image'} classNameForImg={classNameForImg} driveId={""} />}
        <div className={`w-full md:w-[60%] flex flex-col ${!imageLeft ? 'items-end' : ''} justify-center`}>
          <div className={`${imageLeft ? `${isJustified ? 'md:text-justify' : 'md:text-left'} md:ml-0 lg:ml-5` : `${isJustified ? 'md:text-justify' : 'md:text-right'} md:mr-0 lg:mr-5`} ${imageLeft !== undefined ? 'md:text-justify' : ''} text-justify leading-8`}>
            <MarkdownText 
              text={text} 
              classes="hyphens-auto lg:text-justify"             
            />
          </div>
        </div>
        {!imageLeft && 
          <ImageForText 
            fileName={fileName || ''} 
            alt={alt || ''} 
            classNameForImg={classNameForImg} 
            driveId={""} 
          />}
      </div>

    </>
  );
};

export default ImageAndText;