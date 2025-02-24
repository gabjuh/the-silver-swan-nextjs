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
          <div className="flex lg:flex-row my-10 relative lg:gap-10 lg:mb-32 mb-16" key={index}>
            <div className="relative">
              {/* Title */}
              <h3 className="text-4xl mb-5">{item.title}</h3>

              {/* FaceBook icon */}
              {item.facebook && 
                <div className="absolute right-0 top-0 cursor-pointer transition-all ease-in-out duration-150 hover:translate-y-[-3px]">
                  <a href={item.facebook} target="_blank">
                    <FacebookIco />
                  </a>
                </div>
              }

              {/* Concert details */}
              <div>
                <MarkdownText text={item.concertDetails ?? ''} classes="text-lg"/>
              </div>

              {/* Image on Mobile/Tablet */}
              <div className="w-full lg:w-[40%] max-w-[400px] mb-8 mt-6 mx-auto">
              {item.fileName && 
                <Image 
                  src={`https://${process.env.NEXT_PUBLIC_BACKEND_API}/img/${item.fileName}`}
                  // placeholder="blur"
                  width="500"
                  height="100"
                  alt={item.imgAlt ?? ''}
                  className={`lg:max-w-[700px] w-full lg:w-[350px] lg:max-h-[800px] rounded-md drop-shadow-xl object-cover lg:hidden block`}
                />
              }
            </div>

              {/* Description */}
              <div>
                <MarkdownText text={item.description ?? ''} classes="text-justify"/>
              </div>
            </div>

            {/* <div className="flex-col-reverse mt-5 mb-20 gap-8 justify-center w-full border border-green-700"> */}
              
            {/* Image on Desktop */}
            <div className="">
              {item.fileName && 
                <Image 
                  src={`https://${process.env.NEXT_PUBLIC_BACKEND_API}/img/${item.fileName}`}
                  // placeholder="blur"
                  width="500"
                  height="100"
                  alt={item.imgAlt ?? ''}
                  className={`lg:max-w-[700px] w-full lg:w-[350px] lg:max-h-[800px] rounded-md drop-shadow-xl object-cover hidden lg:block`}
                />
              }
            </div>
          </div>
        );
      })}
    </main>
  );
}
