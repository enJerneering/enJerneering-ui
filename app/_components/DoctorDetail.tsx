/* eslint-disable @next/next/no-img-element */
import {
  CheckBadgeIcon,
  StarIcon,
  PhoneArrowUpRightIcon,
  BookOpenIcon,
  BriefcaseIcon,
  ShieldCheckIcon,
} from "@heroicons/react/20/solid";

type Content = {
  subTitle: string;
  description?: string;
  isEmail?: boolean;
};

type Information = {
  icon: React.ReactNode;
  title: string;
  content: Content[];
};

export default function DoctorDetail() {
  const leftInformation: Information[] = [
    {
      icon: (
        <CheckBadgeIcon
          className="h-8 w-8 text-primary-700"
          aria-hidden="true"
        />
      ),
      title: "Certifications",
      content: [
        {
          subTitle: "Certification in General Surgery",
          description: "American Board of Surgery: 2016 - 2026",
        },
      ],
    },
    {
      icon: (
        <StarIcon className="h-8 w-8 text-primary-700" aria-hidden="true" />
      ),
      title: "Leadership Roles",
      content: [
        {
          subTitle: "Medical Director, Metabolic and Bariatric Surgery",
          description: "January 2019 - May 2020",
        },
        {
          subTitle: "Vice Chair, Department of Surgery",
          description: "November 2018 - May 2020",
        },
      ],
    },
    {
      icon: (
        <PhoneArrowUpRightIcon
          className="h-8 w-8 text-primary-700"
          aria-hidden="true"
        />
      ),
      title: "Contact Info",
      content: [
        {
          subTitle: "(765) 372-8187",
        },
        {
          subTitle: "michaelthorpemd@gmail.com",
          isEmail: true,
        },
        {
          subTitle: "1714 W Royale Dr, Muncie, IN 47304",
        },
      ],
    },
  ];

  const education: Information[] = [
    {
      icon: (
        <BookOpenIcon className="h-8 w-8 text-primary-700" aria-hidden="true" />
      ),
      title: "Education",
      content: [
        {
          subTitle: "Doctorate of Medicine",
          description:
            "University of Toledo College of Medicine, Toledo, OH: August 2005 - June 2009",
        },
        {
          subTitle: "Bachelor's of Science in Biochemistry",
          description:
            "The Ohio State University, Columbus, OH: September 2001 - June 2004",
        },
        {
          subTitle: "Associate of Science",
          description:
            "Edison State Community College, Piqua, OH: September 1996 - June 1998",
        },
        {
          subTitle: "High School Diploma",
          description: "Sidney High School, Sidney, OH",
        },
      ],
    },
  ];

  const rightInformation: Information[] = [
    {
      icon: (
        <BriefcaseIcon
          className="h-8 w-8 text-primary-700"
          aria-hidden="true"
        />
      ),
      title: "Graduate Medical Training",
      content: [
        {
          subTitle: "Fellowship in Minimally Invasive and Bariatric Surgery",
          description:
            "St Johns Providence, Grosse Pointe: July 2015 - June 2016",
        },
        {
          subTitle: "General Surgical Residency",
          description: "Saint Louis University Hospital: July 2010 - June 2015",
        },
        {
          subTitle: "Surgical Internship",
          description:
            "Temple University, Philadelphia, PA: June 2009 - June 2010",
        },
      ],
    },
    {
      icon: (
        <ShieldCheckIcon
          className="h-8 w-8 text-primary-700"
          aria-hidden="true"
        />
      ),
      title: "Professional Affiliations",
      content: [
        {
          subTitle: "Professional Affiliations",
        },
        {
          subTitle: "American Vein and Lymphatic Society",
        },
        {
          subTitle:
            "Society of American Gastrointestinal Endoscopic Surgery (SAGES)",
        },
        {
          subTitle: "American Society of Metabolic and Bariatric Surgery",
        },
        {
          subTitle: "American Foregut Society",
        },
        {
          subTitle: "Chest Wall Injury Society",
        },
      ],
    },
  ];

  const BackgroundBox = (): JSX.Element => (
    <div
      className="w-full h-[224px] absolute top-0 left-0 right-0 z-0"
      style={{
        background:
          "radial-gradient(559.34% 141.42% at 0% 0%, #D2EAEF 0%, #E6F3F9 0.01%, #88C6E3 100%);",
      }}
    />
  );

  const renderInfo = (items: Information[]): JSX.Element => (
    <>
      {items.map((info: Information, index: number) => (
        <div key={index}>
          <div className="flex gap-5 justify-start items-center">
            {info.icon}
            <div className="text-primary-900 font-bold text-[24px] leading-[40px] mb-3">
              {info.title}
            </div>
          </div>
          {info.content.map((content: Content, index: number) => (
            <ul
              key={index}
              className="ml-[70px] list-outside mb-[10px] last-of-type:mb-0"
            >
              <li className="relative">
                {content.isEmail ? (
                  <a
                    className="no-underline font-semibold text-[16px] leading-[32px] text-primary-900"
                    href={`mailto:${content.subTitle}`}
                  >
                    {content.subTitle}
                  </a>
                ) : (
                  <div className="font-semibold text-[16px] leading-[32px] text-primary-900">
                    {content.subTitle}
                  </div>
                )}
                {content.description && (
                  <div className="font-normal text-[16px] leading-[32px] text-primary-900">
                    {content.description}
                  </div>
                )}
                <div className="absolute w-[10px] h-[10px] rounded-[50%] bg-primary-700 top-[12px] left-[-20px]" />
              </li>
            </ul>
          ))}
        </div>
      ))}
    </>
  );

  return (
    <div className="relative">
      <BackgroundBox />
      <div className="mx-auto max-w-screen-xl p-6 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-[80px] relative z-2">
        <div className="order-1 flex justify-center">
          <div className="max-w-[600px] max-h-[680px] rounded-2xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/img/doctor.png"
              alt="doctor"
            />
          </div>
        </div>
        <div className="order-2">
          <div className="mb-2 font-bold text-[36px] leading-[50px] xl:text-[40px] xl:leading-[56px] text-primary-900">
            Dr. Michael Thorpe, MD
          </div>
          <div className="text-primary-900 font-bold text-[20px] leading-[32px] mb-[80px]">
            Vice Chair, Department of Surgery
          </div>
          <div className="text-primary-900 font-bold text-[24px] leading-[40px] mb-6">
            Professional Journey
          </div>
          {renderInfo(education)}
        </div>
        <div className="grid grid-cols-1 gap-10 order-3 lg:order-4 mt-[-40px]">
          {renderInfo(rightInformation)}
        </div>
        <div className="grid grid-cols-1 gap-10 order-4 lg:order-3 mt-[-40px] lg:pb-[180px] xl:pb-[75px]">
          {renderInfo(leftInformation)}
        </div>
      </div>
    </div>
  );
}
