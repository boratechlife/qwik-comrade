import { component$, useContext } from "@builder.io/qwik";
import { SlideNavContext } from "~/routes/layout";
import Close from "./icons/Close";
import Phone from "./icons/Phone";

const SlideNav = component$(() => {
  const showSlideNav = useContext(SlideNavContext);
  return (
    <div
      class={`main-menu  fixed inset-0 right-auto z-[1000] max-w-full flex flex-col bg-[#106bd2] px-[15px] md:px-10 md:py-8 pt-5 pb-[30px] w-full md:w-[490px] transition-all duration-200 ${
        showSlideNav.value ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div class=" flex justify-between items-center">
        <a class="main-menu__logo" href="/" rel="no-follow" aria-label="logo">
          <svg
            class="w-[50px] h-auto"
            enable-background="new 0 0 800 800"
            viewBox="0 0 800 800"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="400" cy="400" fill="#fff" r="400"></circle>
            <path d="m404.7 285.3c50.8 0 90.8 34.1 104.2 83.3l72.1-23.2c-24-81.9-96.2-131.1-176.3-131.1-105.6 0-185.7 81.9-185.7 185.7 0 106.5 84.2 185.7 185.7 185.7 82.8 0 155-51.9 176.3-131.1l-72.1-23.2c-13.4 50.5-53.4 83.3-104.2 83.3-64.1 0-106.9-53.3-106.9-116.1s44.1-113.3 106.9-113.3z"></path>
          </svg>
        </a>
        <button
          class="  opacity-60"
          onClick$={() => (showSlideNav.value = false)}
        >
          <Close />
        </button>
      </div>
      <div class="my-[5vh] flex-grow w-full relative md:pr-2.5 overflow-auto flex flex-col gap-[25px]">
        <div class="flex flex-wrap text-white text-[22px] tracking-[1px] capitalize opacity-70 md:mr-2.5 font-bold font-montserrat">
          <a href="https://comradeweb.com/services/digital-marketing/">
            Digital Marketing
          </a>
        </div>
        <div class="flex flex-wrap text-white text-[22px] tracking-[1px] capitalize opacity-70 md:mr-2.5 font-bold font-montserrat">
          <a href="https://comradeweb.com/services/seo/">SEO</a>
        </div>
        <div class="flex flex-wrap text-white text-[22px] tracking-[1px] capitalize opacity-70 md:mr-2.5 font-bold font-montserrat">
          <a href="https://comradeweb.com/services/digital-marketing/paid-ads-retargeting/">
            PPC
          </a>
        </div>
        <div class="flex flex-wrap text-white text-[22px] tracking-[1px] capitalize opacity-70 md:mr-2.5 font-bold font-montserrat">
          <a href="https://comradeweb.com/services/web-design/">Web Design</a>
        </div>
        <div class="flex flex-wrap text-white  tracking-[1px] capitalize opacity-70 md:mr-2.5 font-bold font-montserrat text-lg">
          <a href="https://comradeweb.com/who-we-serve/">Who We Serve</a>
        </div>
        <div class="flex flex-wrap text-white  tracking-[1px] capitalize opacity-70 md:mr-2.5 font-bold font-montserrat text-lg">
          <a href="https://comradeweb.com/about-us/">About Us</a>
        </div>
        <div class="flex flex-wrap text-white  tracking-[1px] capitalize opacity-70 md:mr-2.5 font-bold font-montserrat text-lg">
          <a href="https://comradeweb.com/portfolio/">Portfolio</a>
        </div>
        <div class="flex flex-wrap text-white  tracking-[1px] capitalize opacity-70 md:mr-2.5 font-bold font-montserrat text-lg">
          <a href="https://comradeweb.com/blog/">Blog</a>
        </div>
      </div>
      <div class=" flex flex-col md:flex-row md:items-center gap-5 md:gap-12">
        <a
          class="text-[#106bd2] [box-shadow:inset_0_-4px_2px_#b7b7b7] px-[2em] py-[1.55em] bg-white rounded inline-block font-montserrat text-sm font-bold uppercase tracking-[1px] w-max"
          href="/contact-us/"
        >
          Contact Us
        </a>
        <a
          class="flex items-center gap-2.5 font-montserrat font-bold tracking-[.5px] whitespace-nowrap text-center text-lg text-white"
          aria-label="Navigation Phone"
          href="tel:+13122650580"
        >
          <Phone />
          (312) 265-0580
        </a>
      </div>
    </div>
  );
});

export default SlideNav;
