import Image from "next/image";
import Section1 from "@/public/home/section1.png";
import ContactImage from "@/public/home/contact.png";

import { Hero } from "@/components/Hero";

import { Section } from "@/components/Section";
import Link from "next/link";
import { Gallery } from "@/components/Gallery";

export default function Home() {
  return (
    <div>
      <Hero />
      <Section
        subtitle="ABOUT"
        title="What is 6 Speed Photography?"
        description="At 6 Speed Photography, based in the Bay Area, CA, we offer top-tier photography and videography services tailored to automotive enthusiasts and event organizers. Our services include car photography, event photography, and graphic design to bring your vision to life. With a passion for detail and a commitment to quality, we're here to make your memories stand out. DM us today for inquiries or to book your session!"
        image={Section1}
      />
      <div className="w-full relative max-w-none" style={{
        aspectRatio: ContactImage.width / ContactImage.height,
      }}>
        <div className="mx-[8%] flex flex-col justify-center h-full">
          <p className="uppercase text-saffron-mango-300 text-lg">Contact</p>
          <Link href="/contact">
            <h2 className="pb-5 pt-2 text-4xl font-medium hover:text-saffron-mango-50">
              Let&apos;s work together
            </h2>
          </Link>

          <p className="text-xl max-w-[25ch] text-pretty leading-10">
            We&apos;ll help you reach your goals with our top-tier photography
            and videography services
          </p>
        </div>
        <Image
          src={ContactImage}
          alt="Contact Image"
          className="absolute inset-0 -z-10 w-full object-cover max-h-screen"
        />
      </div>
      <Gallery
        images={[
          "https://images.unsplash.com/photo-1622587815703-58b85a0f5dee",
          "https://images.unsplash.com/photo-1662581791618-d1af0d0c3d4b",
          "https://images.unsplash.com/photo-1662581798363-3a101692dce0",
          "https://images.unsplash.com/photo-1662581791618-d1af0d0c3d4b",
          "https://images.unsplash.com/photo-1622587815703-58b85a0f5dee",
        ]}
      />
    </div>
  );
}
