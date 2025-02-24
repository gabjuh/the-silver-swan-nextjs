import Image from 'next/image';
import Link from 'next/link';

import FacebookIco from '@/assets/icos/FacebookIco';
import convertStringToUrlFriendly from '@/helpers/convertStringToUrlFriendly';
import IData from '@/interfaces/IData';

import ImageAndText from '../components/ImageAndText';
import MarkdownText from '../components/MarkdownText';
import Title from '../components/Title';

export default async function HomePage() {
  const apiUrl = `https://${process.env.NEXT_PUBLIC_BACKEND_API}`;
  const maxLength = 60;

  async function getData() {
    const res = await fetch(`${apiUrl}/data.json`, { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }

  const data: IData = await getData();

  return (
    <main className={`container mx-auto px-4 py-10 w-full`}>
      <Title title={data.concerts[0].pageTitle} />

      {data.concerts.map((item, index) => {
        if (item.active === '0') {
          return (
            <div key={index}></div>
          );
        }
        return (
          <div className="my-10 relative" key={index}>
            <h3 className="text-3xl my-2">{item.title}</h3>
            {item.facebook && 
              <div className="absolute right-0 top-0 cursor-pointer transition-all ease-in-out duration-150 hover:translate-y-[-3px]">
                <a href={item.facebook} target="_blank">
                  <FacebookIco />
                </a>
              </div>
            }
            <div className="">
              <MarkdownText text={item.concertDetails ?? ''} classes="text-lg"/>
              {/* <p className="text-xl">{item.date}, {item.time}, {item.locationLink ? <a href={item.locationLink} target="_blank" className="link link-secondary">{item.location}</a>: item.location}</p>
              <p className="text-xl my-1"><strong>{item.band}</strong>, {item.artists}</p> */}

            </div>
            <div className="flex lg:flex-row flex-col-reverse mt-5 mb-20 gap-8 justify-center w-full">
              <div className="">
                <MarkdownText text={item.description ?? ''} classes="text-justify"/>
              </div>
              {item.fileName && 
              <Image 
                src={`https://${process.env.NEXT_PUBLIC_BACKEND_API}/img/${item.fileName}`}
                // placeholder="blur"
                width="500"
                height="100"
                alt={item.imgAlt ?? ''}
                className={`lg:max-w-[700px] w-full lg:w-[350px] lg:max-h-[800px] rounded-md drop-shadow-xl object-cover`}
              />
            }
            </div>
          </div>
        );
      })}
    </main>
  );
}
