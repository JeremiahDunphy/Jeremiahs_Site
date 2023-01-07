import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description, description1, description2, description3, description4, description5, description6, aboutItems} = aboutData;
  return (
    <Section className="bg-orange-50 dark:bg-slate-900" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-4': !!profileImageSrc})}>
        {!!profileImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
              <Image alt="about-me-image" layout="fill" objectFit="cover" src={profileImageSrc} />
            </div>
          </div>
        )}
        <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!profileImageSrc})}>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-black dark:text-white">About me</h2>
            <p className=" text-black dark:text-gray-300 ">{description}</p>
            <p className=" text-black dark:text-gray-300 ">{description1}</p>
            <p className=" text-black dark:text-gray-300 ">{description2}</p>
            <p className=" text-black dark:text-gray-300 ">{description3}</p>
            <p className=" text-black dark:text-gray-300 ">{description4}</p>
            <p className=" text-black dark:text-gray-300 ">{description5}</p>
            <p className=" text-black dark:text-gray-300 ">{description6}</p>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
                {Icon && <Icon className="h-5 w-5 text-black dark:text-white" />}
                <span className="text-sm font-bold text-black dark:text-white">{label}:</span>
                <span className=" text-sm text-black dark:text-gray-300">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
