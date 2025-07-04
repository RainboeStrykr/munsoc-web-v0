/* eslint-disable @next/next/no-img-element */
import React from "react";
import Heading from "../Typography/heading";
import Paragraph from "../Typography/paragraph";
import Image from "next/image";
import Link from "next/link";

function Sponsors({ eventSponsors, financialSponsor }) {
  //eventSponsors,financialSponsor = [{image: 'url', websiteUrl: 'url' , className: 'string'}] //className for additional styling if needed
  return (
    <div
      className="sponsor-bg container text-center"
      data-test="sponsor-section"
    >
      <div className="py-[80px] flex flex-col items-center">
        <div className="max-w-3xl sm:w-full">
          <Paragraph className="mt-[40px]" textColor="text-white">
            We proudly present the sponsors of SRM MUN 2025—visionaries who empower dialogue, diplomacy, and dynamic youth leadership.
            Their support fuels our mission, turning meaningful discussions into impactful actions on the global stage.
          </Paragraph>
        </div>
        <Heading typeStyle='heading-md' className='text-gray-800 mt-10 sm:text-2xl sm:mt-5'>Event Sponsors</Heading>
        <div className="flex justify-center  w-[650px] sm:w-full flex-col  items-center">
          {eventSponsors &&
            eventSponsors.map((sponsor) => (
              <div
                key={sponsor.image}
                className={`w-[300px] h-[150px] flex flex-col justify-center items-center ${sponsor.className ? sponsor.className : ""}`}
              >
                <Link href={sponsor.websiteUrl} target="_blank">
                  <Image
                    src={sponsor.image}
                    alt={sponsor.image}
                    height={230}
                    width={280}
                  />
                </Link>
              </div>
            ))}
        </div>
        <div className=" flex space-y-2 flex-col items-center justify-center text-white text-2xl font-bold">
          <div className="flex flex-col space-y-6">
            {financialSponsor && (
              <div>
              <Heading typeStyle='heading-md' className='text-gray-800 mb-12 sm:text-2xl'>Financial Sponsor</Heading>
                {financialSponsor.map((sponsor) => (
                  <div
                    key={sponsor.image}
                    className={`${sponsor.className ? sponsor.className : ""}`}
                  >
                    <Link href={sponsor.websiteUrl} target="_blank">
                      <Image
                        src={sponsor.image}
                        alt={sponsor.image}
                        height={300}
                        width={300}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
