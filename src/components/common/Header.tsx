import {
  $,
  component$,
  useContext,
  useOnWindow,
  useSignal,
} from "@builder.io/qwik";
import { SlideNavContext } from "~/routes/layout";
// import Close from "./icons/Close";
import Hamburger from "./icons/Hamburger";
import Logo from "./icons/Logo";
import Phone from "./icons/Phone";

const Header = component$(() => {
  const showSlideNav = useContext(SlideNavContext);

  const isScrolled = useSignal(false);

  useOnWindow(
    "scroll",
    $((ev) => {
      const scroll = window.scrollY;

      isScrolled.value = scroll > 90;
    })
  );

  return (
    <header class=" transition-[top] duration-200 fixed text-[#191919] top-0 left-0 z-20 w-full">
      <div
        class={`transition-[height] duration-200  lg:max-w-[1240px] flex items-center mx-auto  md:justify-between px-[15px] relative ${
          isScrolled.value ? "h-[70px] bg-white" : "h-[90px]"
        }`}
      >
        <button
          onClick$={() => (showSlideNav.value = true)}
          class=" ml-[15px] md:ml-0 order-4 md:order-1 cursor-pointer lg:hidden block"
        >
          <Hamburger />
        </button>
        <a
          class="mr-auto order-1 md:order-2 flex items-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 lg:translate-x-0 lg:translate-y-0 lg:static text-black [&>svg]:pb-0.5"
          aria-label="logo"
          href="/"
          rel="no-follow"
        >
          <Logo />
        </a>
        <nav class="md:order-3 hidden mr-8 pr-8 border-r border-[#191919] lg:flex justify-center pl-20 items-center ml-auto">
          <div class="main-navigator__link main-navigator__link--sub   border-b border-transparent hover:border-b-[#106bd2] after:border-transparent after:w-0 after:h-0 after:left-1/2 after:content-[''] after:-bottom-[22px] after:border-[10px] after:border-t-0 after:border-b-[#0a1928]/90 after:absolute after:opacity-0 hover:after:opacity-100 after:-ml-2.5 group  relative pt-1 pb-0.5 font-bold font-montserrat -tracking-[.015em] mr-[44px] transition-[border-bottom-color] duration-200">
            <a
              href="https://comradeweb.com/who-we-serve/"
              class="flex items-center relative has-caret"
            >
              Who We Serve
            </a>
            <div class="main-nav-sub pointer-events-none group-hover:pointer-events-auto before:absolute before:top-5 before:left-0 before:w-full before:content-[''] before:bottom-0 before:rounded-[5px] before:bg-[#0a1928]/95 px-[60px] pt-[75px] pb-[50px] flex gap-10 absolute top-full transition-[opacity] duration-200 opacity-0 group-hover:opacity-100">
              <ul class="flex flex-col gap-4 w-full z-[2]">
                <li class=" ">
                  <a
                    class="text-white leading-[1.7] transition-all duration-200  whitespace-nowrap"
                    href="https://comradeweb.com/who-we-serve/law-firms/"
                  >
                    Law Firms
                  </a>
                </li>
                <li class=" ">
                  <a
                    class=" text-white leading-[1.7] transition-all duration-200  whitespace-nowrap"
                    href="https://comradeweb.com/who-we-serve/ecommerce/"
                  >
                    E-commerce
                  </a>
                </li>
                <li class=" ">
                  <a
                    class="text-white leading-[1.7] transition-all duration-200 whitespace-nowrap"
                    href="https://comradeweb.com/who-we-serve/healthcare/"
                  >
                    Healthcare
                  </a>
                </li>
                <li class="  w-[190px]">
                  <a
                    class="text-white leading-[1.7] transition-all duration-200 whitespace-nowrap"
                    href="https://comradeweb.com/who-we-serve/home-improvement/"
                  >
                    Home Improvements &amp; Construction
                  </a>
                </li>
              </ul>

              <ul class="flex flex-col gap-4  w-full z-[2]">
                <li class="">
                  <a
                    class="text-white leading-[1.7] transition-all duration-200 whitespace-nowrap "
                    href="https://comradeweb.com/who-we-serve/manufacturing/"
                  >
                    Manufacturing
                  </a>
                </li>
                <li class="">
                  <a
                    class=" text-white leading-[1.7] transition-all duration-200 whitespace-nowrap"
                    href="https://comradeweb.com/who-we-serve/small-businesses/"
                  >
                    Small Businesses
                  </a>
                </li>
                <li class="">
                  <a
                    class=" text-[#1C78DF] leading-[1.7] transition-all duration-200"
                    href="/who-we-serve/"
                  >
                    View All
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="main-navigator__link main-navigator__link--sub  border-b border-transparent hover:border-b-[#106bd2]  after:border-transparent after:w-0 after:h-0 after:left-1/2 after:content-[''] after:-bottom-[22px] after:border-[10px] after:border-t-0 after:border-b-[#0a1928]/90 after:absolute after:opacity-0 hover:after:opacity-100 after:-ml-2.5       group relative pt-1 pb-0.5 font-bold font-montserrat -tracking-[.015em] mr-[44px] transition-[border-bottom-color] duration-200">
            <a href="#" class="flex items-center relative has-caret">
              Services
            </a>
            <div class="main-nav-sub pointer-events-none group-hover:pointer-events-auto  before:absolute before:top-5 before:left-0 before:w-full before:content-[''] before:bottom-0 before:rounded-[5px] before:bg-[#0a1928]/95 px-[60px] pt-[75px]   flex absolute top-full -left-[318px] transition-[opacity] duration-200 opacity-0 group-hover:opacity-100 w-[945px]  ">
              <ul class="main-nav-sub-ul flex flex-wrap gap-[15px] justify-between z-[2] w-full">
                <li class="min-w-[265px]">
                  <a
                    class=" inline-block text-[#f3f4f5] font-montserrat text-[22px] font-extrabold mb-6"
                    href="https://comradeweb.com/services/digital-marketing/"
                  >
                    Digital Marketing
                  </a>
                  <ul class="flex flex-col gap-[15px]">
                    <li class="sub-submenu__list">
                      <a
                        class="main-nav-sub__link text-[#babec2] font-montserrat font-bold whitespace-nowrap transition-all duration-200 leading-[1.7]"
                        href="https://comradeweb.com/services/digital-marketing/paid-ads-retargeting/"
                      >
                        PPC Management
                      </a>
                    </li>
                    <li class="sub-submenu__list">
                      <a
                        class="main-nav-sub__link text-[#babec2] font-montserrat font-bold whitespace-nowrap transition-all duration-200 leading-[1.7]"
                        href="https://comradeweb.com/services/digital-marketing/inbound-content-marketing/"
                      >
                        Content Marketing
                      </a>
                    </li>

                    <li class="sub-submenu__list">
                      <a
                        class="main-nav-sub__link text-[#babec2] font-montserrat font-bold whitespace-nowrap transition-all duration-200 leading-[1.7]"
                        href="https://comradeweb.com/services/digital-marketing/social-media-marketing/"
                      >
                        Social Media Marketing
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="min-w-[141px]">
                  <a
                    class="inline-block text-[#f3f4f5] font-montserrat text-[22px] font-extrabold mb-6"
                    href="https://comradeweb.com/services/seo/"
                  >
                    SEO
                  </a>
                  <ul class="flex flex-col gap-[15px]">
                    <li class="sub-submenu__list">
                      <a
                        class="main-nav-sub__link text-[#babec2] font-montserrat font-bold whitespace-nowrap transition-all duration-200 leading-[1.7]"
                        href="https://comradeweb.com/services/seo/local-seo/"
                      >
                        Local SEO
                      </a>
                    </li>
                    <li class="sub-submenu__list">
                      <a
                        class="main-nav-sub__link text-[#babec2] font-montserrat font-bold whitespace-nowrap transition-all duration-200 leading-[1.7]"
                        href="https://comradeweb.com/services/seo/seo-audit/"
                      >
                        SEO Audit
                      </a>
                    </li>
                    <li class="sub-submenu__list">
                      <a
                        class="main-nav-sub__link text-[#babec2] font-montserrat font-bold whitespace-nowrap transition-all duration-200 leading-[1.7]"
                        href="https://comradeweb.com/services/seo/seo-packages/"
                      >
                        SEO Packages
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="min-w-[253px]">
                  <a
                    class="inline-block text-[#f3f4f5] font-montserrat text-[22px] font-extrabold mb-6"
                    href="https://comradeweb.com/services/web-development/"
                  >
                    Web Development
                  </a>
                  <ul class="flex flex-col gap-[15px]">
                    <li class="sub-submenu__list">
                      <a
                        class="main-nav-sub__link text-[#babec2] font-montserrat font-bold whitespace-nowrap transition-all duration-200 leading-[1.7]"
                        href="https://comradeweb.com/services/web-design/"
                      >
                        Web Design
                      </a>
                    </li>
                    <li class="sub-submenu__list">
                      <a
                        class="main-nav-sub__link text-[#babec2] font-montserrat font-bold whitespace-nowrap transition-all duration-200 leading-[1.7]"
                        href="https://comradeweb.com/services/web-development/wordpress-website-development/"
                      >
                        WordPress Websites
                      </a>
                    </li>
                    <li class="sub-submenu__list">
                      <a
                        class="main-nav-sub__link text-[#babec2] font-montserrat font-bold whitespace-nowrap transition-all duration-200 leading-[1.7]"
                        href="https://comradeweb.com/services/web-development/ecommerce-website-development/"
                      >
                        Ecommerce Websites
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="main-nav-sub__link--expander w-full h-12 relative">
                  <a
                    class="bg-[#585858] rounded-bl-lg rounded-br-lg items-center flex bottom-0 top-0 -left-[60px] text-sm text-white justify-center tracking-[1px] leading-4 absolute text-center uppercase font-bold -right-[60px]"
                    href="#"
                  >
                    View All +
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="main-navigator__link border-b border-transparent hover:border-b-[#106bd2] pt-1 pb-0.5 font-bold font-montserrat -tracking-[.015em] mr-8 transition-[border-bottom-color] duration-200 whitespace-nowrap">
            <a href="https://comradeweb.com/about-us/">About Us</a>
          </div>
          <div class="main-navigator__link border-b border-transparent hover:border-b-[#106bd2] pt-1 pb-0.5 font-bold font-montserrat -tracking-[.015em] mr-8 transition-[border-bottom-color] duration-200 whitespace-nowrap">
            <a href="https://comradeweb.com/portfolio/">Portfolio</a>
          </div>
          <div class="main-navigator__link border-b border-transparent hover:border-b-[#106bd2] pt-1 pb-0.5 font-bold font-montserrat -tracking-[.015em]   transition-[border-bottom-color] duration-200 whitespace-nowrap">
            <a href="https://comradeweb.com/blog/">Blog</a>
          </div>{" "}
        </nav>

        <div class="  order-3 md:order-4 flex items-center justify-end gap-6">
          <a
            class=" font-montserrat flex items-center text-[.875rem]  gap-2.5 font-bold tracking-[.5px] "
            aria-label="Main Navigation Phone"
            href="tel:+13122650580"
          >
            <Phone classes="h-6 w-auto" />
            <span class="hidden lg:block">(312) 265-0580</span>
          </a>
          <a
            class="hidden md:inline-block font-montserrat tracking-[1px] transition-all duration-200 ease-in py-[1.225em] px-[1.5em] text-center text-sm font-bold uppercase rounded text-white h-max bg-[#106bd2] [box-shadow:inset_0_-4px_2px_#225997] hover:bg-[#636363] hover:[box-shadow:inset_0_-4px_2px_#4f4f4f]"
            href="https://comradeweb.com/contact-us/"
            target=""
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
});

export default Header;
