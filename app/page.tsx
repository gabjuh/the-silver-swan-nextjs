import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import convertStringToUrlFriendly from '@/helpers/convertStringToUrlFriendly';
import IData from '@/interfaces/IData';

import MarkdownText from './components/MarkdownText';
import Title from './components/Title';
import YoutubeVideo from './components/YoutubeVideo';

export default async function HomePage() {
  const apiUrl = `https://${process.env.NEXT_PUBLIC_BACKEND_API}`;

  async function getData() {
    const res = await fetch(`${apiUrl}/data.json`, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }

  //\n - new line
  // $$ new paragraph

  const data: IData = await getData();

  return (
    <main className={`container mx-auto md:px-10 px-5 py-4 w-full`}>
      {/* Block with image + text 1 */}
      <Title title={data.home[0].pageTitle} />
      <h2 className="text-4xl mb-10 mt-16 text-center">
        {data.home[0].blockTitle}
      </h2>
      <div className="flex lg:flex-row flex-col mt-10 gap-8 justify-center w-full">
        <Image
          className="lg:max-w-[500px] w-full h-auto rounded-md drop-shadow-xl object-cover"
          src={`${apiUrl}/img/${convertStringToUrlFriendly(
            data.home[0].fileName
          )}`}
          alt={data.home[0].imgAlt}
          width={400}
          height={200}
          priority={true}
        />
        <div className="lg:w-[50%]">
          <MarkdownText
            text={data.home[0].text ?? ""}
            classes="hyphens-auto lg:text-justify"
          />
          {data.home[0].buttonText && (
            <div className="mx-auto mt-10 lg:text-left text-center">
              <Link
                href={data.home[0].link}
                className="btn btn-secondary text-white mx-auto"
                // onClick={() => handleClick(0)}
              >
                {data.home[0].buttonText}
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Blue block */}
      <div className="my-32 bg-secondary text-white lg:px-20 md:py-10 mx-py-24 py-7 shadow-lg rounded-xl">
        <h2 className="text-4xl mb-10 text-center mx-3">
          {data.home[1].blockTitle}
        </h2>
        <div className="flex lg:flex-row flex-col mt-10 gap-8 justify-center w-full">
          <MarkdownText
            text={data.home[1].text ?? ""}
            classes="text-justify lg:w-[80%] mx-3 md:mx-10 lg:mx-0 mx-auto"
          />
          <Image
            className="lg:max-w-[300px] max-w-[80%] mx-auto h-auto rounded-md drop-shadow-xl object-cover"
            src={`${apiUrl}/img/${convertStringToUrlFriendly(
              data.home[3].fileName
            )}`}
            alt={data.home[3].imgAlt}
            width={300}
            height={200}
            priority={true}
          />
        </div>
      </div>

      {/* Block with image + text 2 */}
      <h2 className="text-4xl mb-10 mt-16 text-center">
        {data.home[2].blockTitle}
      </h2>
      <div className="flex xl:flex-row flex-col-reverse mt-10 mb-20 gap-8 justify-center w-full">
        <div className="xl:w-[50%] w-full">
          <MarkdownText text={data.home[2].text ?? ""} classes="text-justify" />
          {data.home[2].buttonText && (
            <div className="mx-auto w-full mt-10 text-center">
              <Link
                href={`/${data.home[2].link}`}
                className="btn btn-secondary text-white xl:float-right mx-auto"
                // onClick={() => handleClick(0)}
              >
                {data.home[2].buttonText}
              </Link>
            </div>
          )}
        </div>
        <Image
          className="xl:max-w-[700px] w-full max-h-[500px] rounded-md drop-shadow-xl object-cover"
          src={`${apiUrl}/img/${convertStringToUrlFriendly(
            data.home[2].fileName
          )}`}
          alt={data.home[2].imgAlt}
          width={400}
          height={200}
          priority={true}
        />
      </div>

      {/* Youtube Video */}
      {/* <div className="w-full mt-32 mb-24">
        <h2 className="text-4xl mb-10 mt-16 text-center">{ data.home[3].blockTitle }</h2>
        <YoutubeVideo 
          youtubeId={ data.home[3].youtubeLink }
          quality='high'
          classes='mx-auto w-full h-[300px] lg:w-[80%] lg:h-[400px] max-w-[700px] mb-36'
        />
      </div> */}

      {/* Images */}
      {/* <h2 className="text-4xl mb-10 mt-24 text-center">Provident accusamus nulla dolor deserunt deleniti at quaerat</h2>
      <div className="carousel carousel-center bg-neutral rounded-box  space-x-4 p-4">
        <div className="carousel-item">
          <Image
            className="lg:max-w-[500px] w-full h-auto rounded-md drop-shadow-xl object-cover"
            src={`${apiUrl}/img/${convertStringToUrlFriendly(data.home[0].fileName)}`}
            alt={data.home[0].imgAlt}
            width={400}
            height={200}
            priority={true}
          />
        </div>
        <div className="carousel-item">
          <Image
            className="lg:max-w-[500px] w-full h-auto rounded-md drop-shadow-xl object-cover"
            src={`${apiUrl}/img/${convertStringToUrlFriendly(data.home[0].fileName)}`}
            alt={data.home[0].imgAlt}
            width={400}
            height={200}
            priority={true}
          />
        </div>
        <div className="carousel-item">
          <Image
            className="lg:max-w-[500px] w-full h-auto rounded-md drop-shadow-xl object-cover"
            src={`${apiUrl}/img/${convertStringToUrlFriendly(data.home[0].fileName)}`}
            alt={data.home[0].imgAlt}
            width={400}
            height={200}
            priority={true}
          />
        </div>
        <div className="carousel-item">
          <Image
            className="lg:max-w-[500px] w-full h-auto rounded-md drop-shadow-xl object-cover"
            src={`${apiUrl}/img/${convertStringToUrlFriendly(data.home[0].fileName)}`}
            alt={data.home[0].imgAlt}
            width={400}
            height={200}
            priority={true}
          />
        </div>
        <div className="carousel-item">
          <Image
            className="lg:max-w-[500px] w-full h-auto rounded-md drop-shadow-xl object-cover"
            src={`${apiUrl}/img/${convertStringToUrlFriendly(data.home[0].fileName)}`}
            alt={data.home[0].imgAlt}
            width={400}
            height={200}
            priority={true}
          />
        </div>
        <div className="carousel-item">
          <Image
            className="lg:max-w-[500px] w-full h-auto rounded-md drop-shadow-xl object-cover"
            src={`${apiUrl}/img/${convertStringToUrlFriendly(data.home[0].fileName)}`}
            alt={data.home[0].imgAlt}
            width={400}
            height={200}
            priority={true}
          />
        </div>
        <div className="carousel-item">
          <Image
            className="lg:max-w-[500px] w-full h-auto rounded-md drop-shadow-xl object-cover"
            src={`${apiUrl}/img/${convertStringToUrlFriendly(data.home[0].fileName)}`}
            alt={data.home[0].imgAlt}
            width={400}
            height={200}
            priority={true}
          />
        </div>
      </div> */}

      <div className="w-full mt-24 text-center"></div>
    </main>
  );
}
