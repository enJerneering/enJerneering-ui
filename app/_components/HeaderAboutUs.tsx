import React from "react";
import ModalVideo from "./ModalVideo";
import VideoThumb from "../../public/img/video-thumb.png";

interface HeaderAboutUsProps {
  headerTitle: string;
  headerSubtitle: string;
  videoUrl: string;
}

const HeaderAboutUs: React.FC<HeaderAboutUsProps> = ({
  headerTitle,
  headerSubtitle,
  videoUrl,
}) => {
  return (
    <div className="mb-20">
      <div className="mx-auto max-w-screen-xl text-center px-6 gap-10 md:flex lg:items-center lg:justify-between lg:gap-16">
        <div className="flex flex-col flex-1 gap-4">
          <h1 className="text-5xl whitespace-pre-line">{headerTitle}</h1>
          <h2 className="text-gray-500 font-normal mb-12 whitespace-pre-line">
            {headerSubtitle}
          </h2>
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={804}
            thumbHeight={460}
            thumbAlt="Modal video thumbnail"
            video={videoUrl}
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderAboutUs;
