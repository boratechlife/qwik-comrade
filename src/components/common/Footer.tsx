import { $, component$, useOnWindow, useSignal } from "@builder.io/qwik";

const Footer = component$(() => {
  const showSearch = useSignal<boolean>(false);
  const formInputRef = useSignal<HTMLInputElement>();

  const toggleSearch = $(() => {
    showSearch.value = !showSearch.value;
  });

  useOnWindow(
    "click",
    $((ev) => {
      if (ev.target != formInputRef.value) {
        showSearch.value = false;
      }
    })
  );
  return (
    <footer>
      <div class="bg-black py-[55px] text-white">
        <div class="container  flex flex-col lg:flex-row relative px-[15px]">
          <div class=" w-full lg:w-[35%]">
            <img
              src="/icons/comrade-small-logo.svg"
              class="mb-6 w-10"
              alt="Footer Logotype"
              decoding="async"
              loading="eager"
              cwa-lazy="done"
              style=""
              width="auto"
              height="auto"
            />
            <p class="my-4 text-base leading-[1.7]">
              Comrade is an established, full service web design and digital
              marketing agency in Chicago, Miami, Los Angeles and Austin with
              the mission to achieve big returns for our clients.
            </p>
            <div class=" flex items-center gap-2 [&>a]:text-[#a9a9a9] [&>a]:transition-all [&>a]:duration-200 hover:[&>a]:text-white [&>a]:py-2 [&>a]:pr-4">
              <a
                target="_blank"
                href="https://www.instagram.com/comradeweb/"
                rel="noopener"
                aria-label="instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M16 7a1 1 0 1 1 2 0a1 1 0 0 1-2 0Z"
                  />
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M12 7.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5ZM8.75 12a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0Z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M17.258 2.833a47.721 47.721 0 0 0-10.516 0c-2.012.225-3.637 1.81-3.873 3.832a45.922 45.922 0 0 0 0 10.67c.236 2.022 1.86 3.607 3.873 3.832a47.77 47.77 0 0 0 10.516 0c2.012-.225 3.637-1.81 3.873-3.832a45.914 45.914 0 0 0 0-10.67c-.236-2.022-1.86-3.607-3.873-3.832Zm-10.35 1.49a46.22 46.22 0 0 1 10.184 0c1.33.15 2.395 1.199 2.55 2.517a44.421 44.421 0 0 1 0 10.32a2.89 2.89 0 0 1-2.55 2.516a46.217 46.217 0 0 1-10.184 0a2.89 2.89 0 0 1-2.55-2.516a44.421 44.421 0 0 1 0-10.32a2.89 2.89 0 0 1 2.55-2.516Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCPuwprh8cjcCxDl55lDXBPQ"
                rel="noopener"
                aria-label="youtube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <g clip-path="url(#akarIconsYoutubeFill0)">
                      <path
                        fill="currentColor"
                        d="M23.5 6.507a2.786 2.786 0 0 0-.766-1.27a3.05 3.05 0 0 0-1.338-.742C19.518 4 11.994 4 11.994 4a76.624 76.624 0 0 0-9.39.47a3.16 3.16 0 0 0-1.338.76c-.37.356-.638.795-.778 1.276A29.09 29.09 0 0 0 0 12c-.012 1.841.151 3.68.488 5.494c.137.479.404.916.775 1.269c.371.353.833.608 1.341.743c1.903.494 9.39.494 9.39.494a76.8 76.8 0 0 0 9.402-.47a3.05 3.05 0 0 0 1.338-.742a2.78 2.78 0 0 0 .765-1.27A28.38 28.38 0 0 0 24 12.023a26.579 26.579 0 0 0-.5-5.517ZM9.602 15.424V8.577l6.26 3.424l-6.26 3.423Z"
                      />
                    </g>
                    <defs>
                      <clipPath id="akarIconsYoutubeFill0">
                        <path fill="#fff" d="M0 0h24v24H0z" />
                      </clipPath>
                    </defs>
                  </g>
                </svg>
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/ComradeWeb"
                rel="noopener"
                aria-label="facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.05.28-1.73 1.76-1.73Z"
                  />
                </svg>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/comrade-web-studios"
                rel="noopener"
                aria-label="linkedin"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4.75 1.875a2.125 2.125 0 1 0 0 4.25a2.125 2.125 0 0 0 0-4.25Zm-2 6A.125.125 0 0 0 2.625 8v13c0 .069.056.125.125.125h4A.125.125 0 0 0 6.875 21V8a.125.125 0 0 0-.125-.125h-4Zm6.5 0A.125.125 0 0 0 9.125 8v13c0 .069.056.125.125.125h4a.125.125 0 0 0 .125-.125v-7a1.875 1.875 0 1 1 3.75 0v7c0 .069.056.125.125.125h4a.125.125 0 0 0 .125-.125v-8.62c0-2.427-2.11-4.325-4.525-4.106a7.168 7.168 0 0 0-2.169.548l-1.306.56V8a.125.125 0 0 0-.125-.125h-4Z"
                  />
                </svg>
              </a>
              <a
                target="_blank"
                href="https://www.yelp.com/biz/comrade-digital-marketing-agency-chicago"
                rel="noopener"
                aria-label="yelp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="m12.538 12.471l4.523 1.466s.647.119.64.552c-.004.305-.197.652-.197.652l-1.91 2.756s-.341.286-.686.286c-.344 0-.741-.537-.741-.537l-2.417-4.073s-.272-.594.05-.921c.295-.3.738-.181.738-.181zM11.57 10.6c.231.396.87.281.87.281l4.513-1.331s.615-.253.703-.589c.086-.337-.102-.743-.102-.743l-2.157-2.564s-.187-.324-.575-.357c-.428-.037-.691.486-.691.486l-2.55 4.05c.001-.001-.224.402-.011.767zM9.438 9.021c.531-.132.616-.911.616-.911l-.036-6.485s-.08-.8-.436-1.017c-.559-.342-.724-.164-.884-.14L4.951 1.873s-.367.123-.558.432c-.273.437.277 1.079.277 1.079l3.894 5.358s.385.401.874.279zm-.925 2.624c.013-.5-.595-.801-.595-.801L3.89 8.791s-.597-.248-.887-.075c-.221.132-.418.372-.437.583l-.262 3.259s-.039.565.106.822c.205.364.881.111.881.111l4.702-1.049c.182-.124.502-.136.52-.797zm1.169 1.759c-.404-.209-.887.224-.887.224l-3.148 3.498s-.393.535-.293.863c.094.308.25.461.47.569l3.162 1.007s.383.08.674-.005c.412-.121.336-.772.336-.772l.071-4.736c0 .001-.016-.455-.385-.648z"
                  />
                </svg>
              </a>
            </div>
            <div>
              <div class="mt-8 text-sm font-bold mb-6 uppercase tracking-[.05em] font-montserrat">
                Our Locations
              </div>
              <div class="text-[#a9a9a9] flex flex-col leading-[1.5] font-light gap-2">
                <a
                  class="inline-block tracking-[.02rem] py-[3px]  relative transition-all duration-200 hover:text-white"
                  href="#"
                >
                  Miami Digital Marketing Agency
                </a>

                <a
                  class="inline-block tracking-[.02rem] py-[3px]  relative transition-all duration-200 hover:text-white"
                  href="#"
                >
                  Los Angeles Digital Marketing Agency
                </a>

                <a
                  class="inline-block tracking-[.02rem] py-[3px]  relative transition-all duration-200 hover:text-white"
                  href="#"
                >
                  Austin Digital Marketing Agency
                </a>

                <a
                  class="inline-block tracking-[.02rem] py-[3px]  relative transition-all duration-200 hover:text-white"
                  href="#"
                >
                  Denver Digital Marketing Agency
                </a>

                <a
                  class="inline-block tracking-[.02rem] py-[3px]  relative transition-all duration-200 hover:text-white"
                  href="#"
                >
                  Milwaukee Digital Marketing Agency
                </a>

                <a
                  class="inline-block tracking-[.02rem] py-[3px]  relative transition-all duration-200 hover:text-white"
                  href="#"
                >
                  Dallas Digital Marketing Agency
                </a>

                <a
                  class="inline-block tracking-[.02rem] py-[3px]  relative transition-all duration-200 hover:text-white"
                  href="#"
                >
                  San Diego Digital Marketing Agency
                </a>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-[65%] mt-12 md:mt-0 grid grid-cols-1 md:grid-cols-3 lg:pl-[10%] gap-y-12 gap-x-6">
            <div>
              <div class="text-sm font-bold mb-6 uppercase tracking-[.05em] font-montserrat">
                Headquarters
              </div>
              <div class="footer-content__value">
                <div>
                  <a
                    rel="noopener"
                    href="https://www.google.com/maps?cid=6311646262308078252"
                    target="_blank"
                    class="text-[#a9a9a9] inline-block tracking-[.02rem] py-[3px]  relative transition-all duration-200 hover:text-white"
                  >
                    770 N Halsted Street, Suite 106
                    <br /> Chicago, IL 60642
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div class="text-sm font-bold mb-6 uppercase tracking-[.05em] font-montserrat">
                Hours
              </div>
              <div class="text-[#a9a9a9] inline-block tracking-[.02rem] py-[3px]  relative transition-all duration-200 hover:text-white">
                MON-FR: 9AM-5PM
              </div>
            </div>
            <div>
              <div class="text-sm font-bold mb-6 uppercase tracking-[.05em] font-montserrat">
                Say Hello
              </div>
              <div class="footer-content__value">
                <div>
                  {" "}
                  <a
                    href="tel:+13122650580"
                    class="text-[#a9a9a9] inline-block tracking-[.02rem] py-[3px]  relative transition-all duration-200 hover:text-white"
                  >
                    (312) 265-0580
                  </a>
                </div>
                <div>
                  {" "}
                  <a
                    class="text-[#a9a9a9] inline-block tracking-[.02rem] py-[3px]  relative transition-all duration-200 hover:text-white"
                    href="mailto:info@comradeweb.com"
                    target="_blank"
                  >
                    info@comradeweb.com
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div class="text-sm font-bold mb-6 uppercase tracking-[.05em] font-montserrat">
                Solutions
              </div>
              <div class="footer-content__value">
                <div>
                  <a
                    href="/services/digital-marketing/"
                    class="text-[#a9a9a9] inline-block tracking-[.02rem] py-[3px]  relative transition-all duration-200 hover:text-white"
                  >
                    Digital Marketing
                  </a>
                </div>
                <div>
                  <a
                    href="/services/web-design/"
                    class="text-[#a9a9a9] inline-block tracking-[.02rem] py-[3px]  relative transition-all duration-200 hover:text-white"
                  >
                    Web Design
                  </a>
                </div>
                <div>
                  <a
                    class="text-[#a9a9a9] inline-block tracking-[.02rem] py-[3px]  relative transition-all duration-200 hover:text-white"
                    href="https://comradeweb.com/services/seo/"
                  >
                    SEO Services
                  </a>
                </div>
                <div>
                  <a
                    class="text-[#a9a9a9] inline-block tracking-[.02rem] py-[3px]  relative transition-all duration-200 hover:text-white"
                    href="https://comradeweb.com/services/seo/local-seo/"
                  >
                    Local SEO
                  </a>
                </div>
                <div>
                  <a
                    class="text-[#a9a9a9] inline-block tracking-[.02rem] py-[3px]  relative transition-all duration-200 hover:text-white"
                    href="https://comradeweb.com/services/seo/seo-audit/"
                  >
                    SEO Audit
                  </a>
                </div>
                <div>
                  <a
                    class="text-[#a9a9a9] inline-block tracking-[.02rem] py-[3px]  relative transition-all duration-200 hover:text-white"
                    href="https://comradeweb.com/services/seo/seo-packages/"
                  >
                    SEO Packages
                  </a>
                </div>
                <div>
                  <a
                    class="text-[#a9a9a9] inline-block tracking-[.02rem] py-[3px]  relative transition-all duration-200 hover:text-white"
                    href="/services/digital-marketing/paid-ads-retargeting/"
                  >
                    PPC Management
                  </a>
                </div>
                <div>
                  <a
                    class="text-[#a9a9a9] inline-block tracking-[.02rem] py-[3px]  relative transition-all duration-200 hover:text-white"
                    href="/services/digital-marketing/inbound-content-marketing/"
                  >
                    Content Marketing
                  </a>
                </div>
                <div>
                  <a
                    class="text-[#a9a9a9] inline-block tracking-[.02rem] py-[3px]  relative transition-all duration-200 hover:text-white"
                    href="https://comradeweb.com/services/digital-marketing/social-media-marketing/"
                  >
                    Social Media Marketing
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div class="text-sm font-bold mb-6 uppercase tracking-[.05em] font-montserrat">
                Who we serve
              </div>
              <div class="footer-content__value">
                <div>
                  <a
                    class="text-[#a9a9a9] inline-block tracking-[.02rem] py-[3px]  relative transition-all duration-200 hover:text-white"
                    href="/who-we-serve/ecommerce/"
                  >
                    E-commerce
                  </a>
                </div>
                <div>
                  <a
                    class="text-[#a9a9a9] inline-block tracking-[.02rem] py-[3px]  relative transition-all duration-200 hover:text-white"
                    href="/who-we-serve/law-firms/"
                  >
                    Law Firms
                  </a>
                </div>
                <div>
                  <a
                    class="text-[#a9a9a9] inline-block tracking-[.02rem] py-[3px]  relative transition-all duration-200 hover:text-white"
                    href="/who-we-serve/manufacturing/"
                  >
                    Manufacturing
                  </a>
                </div>
                <div>
                  <a
                    class="text-[#a9a9a9] inline-block tracking-[.02rem] py-[3px]  relative transition-all duration-200 hover:text-white"
                    href="/who-we-serve/small-businesses/"
                  >
                    Small Businesses
                  </a>
                </div>
                <div>
                  <a
                    class="text-[#a9a9a9] inline-block tracking-[.02rem] py-[3px]  relative transition-all duration-200 hover:text-white"
                    href="https://comradeweb.com/who-we-serve/home-improvement/"
                  >
                    Home Improvements &amp; Construction
                  </a>
                </div>
                <div>
                  <a
                    class="text-[#a9a9a9] inline-block tracking-[.02rem] py-[3px]  relative transition-all duration-200 hover:text-white"
                    href="https://comradeweb.com/who-we-serve/healthcare/"
                  >
                    Healthcare
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div class="text-sm font-bold mb-6 uppercase tracking-[.05em] font-montserrat">
                Inside Comrade
              </div>
              <div class="footer-content__value">
                <div>
                  <a
                    class="text-[#a9a9a9] inline-block tracking-[.02rem] py-[3px]  relative transition-all duration-200 hover:text-white"
                    href="https://comradeweb.com/about-us/"
                  >
                    About Us
                  </a>
                </div>
                <div>
                  <a
                    class="text-[#a9a9a9] inline-block tracking-[.02rem] py-[3px]  relative transition-all duration-200 hover:text-white"
                    href="/portfolio/"
                  >
                    Portfolio
                  </a>
                </div>
                <div>
                  <a
                    class="text-[#a9a9a9] inline-block tracking-[.02rem] py-[3px]  relative transition-all duration-200 hover:text-white"
                    href="/blog/"
                  >
                    Blog
                  </a>
                </div>
                <div>
                  <a
                    class="text-[#a9a9a9] inline-block tracking-[.02rem] py-[3px]  relative transition-all duration-200 hover:text-white"
                    href="/contact-us/"
                  >
                    Contact Us
                  </a>
                </div>
                <div>
                  <a
                    class="text-[#a9a9a9] inline-block tracking-[.02rem] py-[3px]  relative transition-all duration-200 hover:text-white"
                    href="/careers/"
                  >
                    Careers
                  </a>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      <div class="relative flex  flex-wrap md:justify-center py-5 text-sm bg-white  items-center text-[#636363]  px-4">
        <form
          id="searchForm"
          role="search"
          method="GET"
          class={`[box-shadow:0_-1px_44px_rgba(0,0,0,.1)] transition-all duration-200 absolute left-1/2 -translate-x-1/2 -translate-y-full w-4/5 md:w-[465px] z-[2] bg-white ] top-0 ${
            showSearch.value
              ? "-translate-y-full opacity-100"
              : "translate-y-0 opacity-0"
          }`}
        >
          <input
            ref={formInputRef}
            type="text"
            value=""
            name="s"
            id="s"
            class="px-4 py-[18px] w-full outline-none font-montserrat text-[#333]"
            placeholder="Type your search request and hit enter..."
          />
        </form>
        <span class="text-sm md:text-base w-full md:mr-2">
          © 2023 Comrade Digital Marketing Agency
        </span>
        <a
          class=" text-xs md:text-base mr-2 md:mx-2"
          href="/privacy-policy/"
          rel="nofollow"
        >
          Privacy Policy
        </a>
        <span class="separat ml-2.5 md:mr-2"> | </span>
        <a
          class="mx-2  text-xs md:text-base"
          href="/terms-of-use/"
          rel="nofollow"
        >
          Terms of Use
        </a>
        <span class="separat ml-2.5 md:mr-2"> | </span>
        <a class="mx-2 text-xs md:text-base " href="/sitemap/">
          Sitemap
        </a>{" "}
        <span class="separat ml-2.5 md:mr-2"> | </span>
        <button onClick$={() => toggleSearch()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
            />
          </svg>
        </button>
      </div>
    </footer>
  );
});

export default Footer;
