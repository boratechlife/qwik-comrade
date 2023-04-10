import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Star from "~/components/common/icons/Star";
import { clients } from "~/data/data";

export default component$(() => {
  const swiperRef = useSignal<HTMLDivElement>();
  const swiperRef2 = useSignal<HTMLDivElement>();
  const swiperRef3 = useSignal<HTMLDivElement>();



  useVisibleTask$(() => {
    const swiper = new Swiper(swiperRef.value!, {
      autoplay: {
        delay: 500,
      },
      slidesPerView: 4,
      speed: 400,
      loop: true,
      spaceBetween: 100,

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
    const swiper2 = new Swiper(swiperRef2.value!, {
      autoplay: {
        delay: 500,
      },
      slidesPerView: 1,
      speed: 400,
      loop: true,
      spaceBetween: 100,

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 4,
        },
      },
    });
        const swiper3 = new Swiper(swiperRef3.value!, {
      autoplay: {
        delay: 500,
      },
      slidesPerView: 1,
      speed: 400,
      loop: true,
      spaceBetween: 100,

      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 8,
          spaceBetween: 4,
        },
      },
    });
    return () => {
    swiper.destroy();
    swiper2.destroy();
    swiper3.destroy();


    };
  });

  return (
    <main>
      <section class="pt-[120px] md:pb-[60px] flex flex-col bg-white">
        <div class="container max-w-[1140px] px-[15px] relative">
          <div class="max-w-[700px]">
            <p class="text-[#585858] font-montserrat text-xs md:text-base font-bold uppercase mb-5 leading-[1.25] tracking-[.16rem]">
              Who we serve
            </p>
            <h1 class="text-[28px] md:text-[2rem] text-[#191919] font-bold leading-[1.3] md:leading-[1.2] my-[.67em] font-montserrat">
              Reach your goals with our high-performance web design &amp;
              digital marketing
            </h1>
          </div>
        </div>
      </section>
      <section
        id="who-we-serve"
        class=" py-[60px] lg:py-[88px] bg-black text-white"
      >
        <div class="container  max-w-[1140px]  px-[15px]">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-[30px] md:mb-20 ">
            <div>
              <div class="text-[#828181] font-montserrat text-base font-bold uppercase leading-[1.25] tracking-[.16rem]  mb-5">
                WHO WE WORK WITH
              </div>
              <h2 class="font-montserrat font-bold leading-[1.2] text-2xl lg:text-[40px]">
                Different industries. Same challenges.
              </h2>
            </div>
            <div class="lg:pl-[60px]">
              <p class="text-sm lg:text-lg text-white/80 leading-[1.7] lg:leading-[1.7]">
                For more than 300 successful projects and 12 years, we've been
                helping clients from a diverse range of sectors overcome their
                most pressing challenges. Comrade generates tangible conversion
                and revenue growth via best-in-class web development and inbound
                marketing solutions. Over these many years, while we've worked
                with clients in a vast array of fields, we feel especially
                confident delivering results for those in the following
                industries:
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-[70px] md:gap-y-[120px]">
            {clients.map((client, i) => (
              <div
                key={i}
                class={`lg:h-[426px]  group ${
                  i + 1 == 3 || i + 1 == 7 ? "lg:pr-[60px]" : ""
                } ${i + 1 == 2 || i + 1 == 6 ? "lg:pl-[60px]" : ""}`}
              >
                <div
                  class={`relative    group ${
                    i + 1 == 2 || i + 1 == 3 || i + 1 == 6 || i + 1 == 7
                      ? "lg:h-[calc(100%_-_46px)]"
                      : "lg:h-full"
                  }`}
                >
                  <a
                    class="h-[310px] md:h-[300px] lg:h-full lg:absolute top-0 left-0 w-full block after:z-[1] after:w-full after:absolute after:top-0 after:left-0 after:h-full after:content-[''] after:bg-black/40 after:hidden text-white"
                    href="#"
                    rel="nofollow"
                  >
                    <img
                      src={client.image}
                      class=" h-full left-0 top-0 lg:absolute w-full z-0 object-cover "
                      alt="Ecommerce"
                      decoding="async"
                      loading="eager"
                    />
                  </a>
                  <h3 class="group-hover:opacity-0 group-hover:-translate-y-[15px] text-white font-montserrat text-[26px] capitalize transition-all duration-200 z-[2] lg:absolute w-full mt-6 mb-4 lg:my-0  lg:p-8 left-0 bottom-0">
                    <a
                      href="#"
                      class="transition-all duration-200 font-bold"
                      rel="follow"
                    >
                      {client.field}
                    </a>
                  </h3>
                  <a
                    class="lg:absolute z-[3] top-0 left-0 w-full h-full lg:group-hover:[&>*]:translate-y-0 lg:[&>*]:translate-y-4  lg:p-8 overflow-auto group-hover:opacity-100 lg:opacity-0 bg-black/60 flex flex-col gap-2.5 transition-all duration-200"
                    href="#"
                  >
                    <div class="hidden lg:block transition-all duration-200   font-montserrat  font-bold uppercase leading-[1.25] tracking-[.16rem] text-base">
                      {client.field}
                    </div>
                    <div class="text-sm text-[#b3b3b3] lg:text-white lg:text-base leading-[1.7] transition-all duration-200 ">
                      {client.content}
                    </div>
                    {client.stats && (
                      <div class=" transition-all duration-200 mt-auto">
                        <div class="max-w-[160px]">
                          <div class="text-[26px] md:text-[40px] -tracking-[.015rem] mb-1 leading-[1.2] font-bold font-montserrat ">
                            {client.stats?.rate}
                          </div>
                          <span class="font-bold uppercase trackinf-[.08rem] text-xs lg:text-sm font-montserrat ">
                            {client.stats?.remark}
                          </span>
                        </div>
                      </div>
                    )}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="achievemants" class=" py-[60px] bg-white">
        <div class="container max-w-[1140px]  px-[15px]">
          <h2 class="my-[.83rem] max-w-[580px] text-[26px] text-[#191919] font-montserrat font-bold leading-[1.2]">
            Recognized as a leading Digital Marketing Agency
          </h2>

<div class="flex flex-wrap lg:flex-nowrap">
  <div class="w-full lg:w-[60%]">
          <div class="flex flex-col gap-[14px] flex-wrap justify-between  ">
            <div class="pr-10 w-full overflow-hidden relative">
              <p class="text-sm text-black mb-[15px] py-[15px] font-montserrat  uppercase font-bold tracking-[.16rem] leading-[1.25] mt-4">
                Reviews
              </p>

              <div ref={swiperRef} class="swiper w-full ">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="achievement">
                      <a
                        class="flex flex-col p-4"
                        href="#"
                        rel="noopener"
                        target="_blank"
                      >
                        <img
                          src="https://comradeweb.com/wp-content/uploads/2020/10/clutch-rate.svg"
                          class="h-[30px]"
                          alt="Clutch reviews"
                          decoding="async"
                          loading="eager"
                          width="auto"
                          height="auto"
                        />
                        <div class="achievement-rating flex items-center group font-montserrat mt-4 gap-2">
                          <Star classes="group-hover:stroke-[#106bd2] group-hover:fill-[#106bd2]" />
                          <Star classes="group-hover:stroke-[#106bd2] group-hover:fill-[#106bd2]" />
                          <Star classes="group-hover:stroke-[#106bd2] group-hover:fill-[#106bd2]" />
                          <Star classes="group-hover:stroke-[#106bd2] group-hover:fill-[#106bd2]" />
                          <Star classes="group-hover:stroke-[#106bd2] group-hover:fill-[#106bd2]" />

                          <div class=" text-black font-bold text-sm uppercase tracking-[.05rem]">
                            4.9
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="achievement">
                      <a
                        class="flex flex-col p-4"
                        href="#"
                        rel="noopener"
                        target="_blank"
                      >
                        <img
                          src="https://comradeweb.com/wp-content/uploads/2020/10/clutch-rate.svg"
                          class="h-[30px]"
                          alt="Clutch reviews"
                          decoding="async"
                          loading="eager"
                          width="auto"
                          height="auto"
                        />
                        <div class="achievement-rating flex items-center group font-montserrat mt-4 gap-2">
                          <Star classes="group-hover:stroke-[#106bd2] group-hover:fill-[#106bd2]" />
                          <Star classes="group-hover:stroke-[#106bd2] group-hover:fill-[#106bd2]" />
                          <Star classes="group-hover:stroke-[#106bd2] group-hover:fill-[#106bd2]" />
                          <Star classes="group-hover:stroke-[#106bd2] group-hover:fill-[#106bd2]" />
                          <Star classes="group-hover:stroke-[#106bd2] group-hover:fill-[#106bd2]" />

                          <div class=" text-black font-bold text-sm uppercase tracking-[.05rem]">
                            4.9
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="achievement">
                      <a
                        class="flex flex-col p-4"
                        href="#"
                        rel="noopener"
                        target="_blank"
                      >
                        <img
                          src="https://comradeweb.com/wp-content/uploads/2020/10/clutch-rate.svg"
                          class="h-[30px]"
                          alt="Clutch reviews"
                          decoding="async"
                          loading="eager"
                          width="auto"
                          height="auto"
                        />
                        <div class="achievement-rating flex items-center group font-montserrat mt-4 gap-2">
                          <Star classes="group-hover:stroke-[#106bd2] group-hover:fill-[#106bd2]" />
                          <Star classes="group-hover:stroke-[#106bd2] group-hover:fill-[#106bd2]" />
                          <Star classes="group-hover:stroke-[#106bd2] group-hover:fill-[#106bd2]" />
                          <Star classes="group-hover:stroke-[#106bd2] group-hover:fill-[#106bd2]" />
                          <Star classes="group-hover:stroke-[#106bd2] group-hover:fill-[#106bd2]" />

                          <div class=" text-black font-bold text-sm uppercase tracking-[.05rem]">
                            4.9
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="achievement">
                      <a
                        class="flex flex-col p-4"
                        href="#"
                        rel="noopener"
                        target="_blank"
                      >
                        <img
                          src="https://comradeweb.com/wp-content/uploads/2020/10/clutch-rate.svg"
                          class="h-[30px]"
                          alt="Clutch reviews"
                          decoding="async"
                          loading="eager"
                          width="auto"
                          height="auto"
                        />
                        <div class="achievement-rating flex items-center group font-montserrat mt-4 gap-2">
                          <Star classes="group-hover:stroke-[#106bd2] group-hover:fill-[#106bd2]" />
                          <Star classes="group-hover:stroke-[#106bd2] group-hover:fill-[#106bd2]" />
                          <Star classes="group-hover:stroke-[#106bd2] group-hover:fill-[#106bd2]" />
                          <Star classes="group-hover:stroke-[#106bd2] group-hover:fill-[#106bd2]" />
                          <Star classes="group-hover:stroke-[#106bd2] group-hover:fill-[#106bd2]" />

                          <div class=" text-black font-bold text-sm uppercase tracking-[.05rem]">
                            4.9
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-scrollbar"></div>
              </div>
            </div>
          </div>
  </div>
  <div class="w-full lg:w-[40%]">
              <div class="flex flex-col gap-[14px] flex-wrap justify-between  ">
            <div class="pr-10 w-full overflow-hidden relative">
              <p class="text-sm text-black mb-[15px] py-[15px] font-montserrat  uppercase font-bold tracking-[.16rem] leading-[1.25] mt-4">
                PARTNERS:
              </p>

              <div ref={swiperRef2} class="swiper w-full h-32">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="achievement">
                      <a
                        class="flex flex-col p-4"
                        href="#"
                        rel="noopener"
                        target="_blank"
                      >
                        <img
                          src="https://comradeweb.com/wp-content/uploads/2020/10/google-partner.svg"
                          class="h-[30px]"
                          alt="Clutch reviews"
                          decoding="async"
                          loading="eager"
                          width="auto"
                          height="auto"
                        />
                        
                      </a>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="achievement">
                      <a
                        class="flex flex-col p-4"
                        href="#"
                        rel="noopener"
                        target="_blank"
                      >
                        <img
                          src="https://comradeweb.com/wp-content/uploads/2020/10/shopify-partner.svg"
                          class="h-[30px]"
                          alt="Clutch reviews"
                          decoding="async"
                          loading="eager"
                          width="auto"
                          height="auto"
                        />

                      </a>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="achievement">
                      <a
                        class="flex flex-col p-4"
                        href="#"
                        rel="noopener"
                        target="_blank"
                      >
                        <img
                          src="https://comradeweb.com/wp-content/uploads/2020/10/hubspot-partner.svg"
                          class="h-[30px]"
                          alt="Clutch reviews"
                          decoding="async"
                          loading="eager"
                          width="auto"
                          height="auto"
                        />
                      </a>
                    </div>
                  </div>

                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-scrollbar"></div>
              </div>
            </div>
          </div>
  </div>
</div>

  <div class="w-full">
              <div class="flex flex-col gap-[14px] flex-wrap justify-between  ">
            <div class="pr-10 w-full overflow-hidden relative">
              <p class="text-sm text-black mb-[15px] py-[15px] font-montserrat  uppercase font-bold tracking-[.16rem] leading-[1.25] mt-4">
                AWARDS:
              </p>

              <div ref={swiperRef3} class="swiper w-full h-32">
                <div class="swiper-wrapper">
                  <div class="swiper-slide flex items-center justify-center">
                    <div class="achievement flex items-center justify-center">
                      <a
                        class="flex flex-col p-4 h-[78px] items-center justify-center"
                        href="#"
                        rel="noopener"
                        target="_blank"
                      >
                        <img
                          src="https://comradeweb.com/wp-content/uploads/2020/10/awwwards.svg"
                          class="h-[88px] object-contain"
                          alt="Clutch reviews"
                          decoding="async"
                          loading="eager"
                          width="auto"
                          height="40"
                        />
                        
                      </a>
                    </div>
                  </div>
                  <div class="swiper-slide flex items-center justify-center">
                    <div class="achievement">
                      <a
                        class="flex flex-col p-4 items-center justify-center"
                        href="#"
                        rel="noopener"
                        target="_blank"
                      >
                        <img
                          src="https://comradeweb.com/wp-content/uploads/2020/10/fwa.svg"
                          class="h-[88px] object-contain"
                          alt="Clutch reviews"
                          decoding="async"
                          loading="eager"
                          width="auto"
                          height="auto"
                        />

                      </a>
                    </div>
                  </div>
                  <div class="swiper-slide flex items-center justify-center">
                    <div class="achievement ">
                      <a
                        class="flex flex-col p-4"
                        href="#"
                        rel="noopener"
                        target="_blank"
                      >
                        <img
                          src="https://comradeweb.com/wp-content/uploads/2020/10/hermes.svg"
                          class="h-[88px] object-contain"
                          alt="Clutch reviews"
                          decoding="async"
                          loading="eager"
                          width="auto"
                          height="auto"
                        />
                      </a>
                    </div>
                  </div>
                  <div class="swiper-slide flex items-center justify-center">
                    <div class="achievement">
                      <a
                        class="flex flex-col p-4"
                        href="#"
                        rel="noopener"
                        target="_blank"
                      >
                        <img
                          src="https://comradeweb.com/wp-content/uploads/2020/10/davey-awards.svg"
                          class="h-[88px]"
                          alt="Clutch reviews"
                          decoding="async"
                          loading="eager"
                          width="auto"
                          height="auto"
                        />

                      </a>
                    </div>
                  </div>
                                    <div class="swiper-slide flex items-center justify-center">
                    <div class="achievement">
                      <a
                        class="flex flex-col p-4"
                        href="#"
                        rel="noopener"
                        target="_blank"
                      >
                        <img
                          src="https://comradeweb.com/wp-content/uploads/2020/10/clutch-2.svg"
                          class="h-[88px]"
                          alt="Clutch reviews"
                          decoding="async"
                          loading="eager"
                          width="auto"
                          height="auto"
                        />

                      </a>
                    </div>
                  </div>
                                    <div class="swiper-slide flex items-center justify-center">
                    <div class="achievement">
                      <a
                        class="flex flex-col p-4"
                        href="#"
                        rel="noopener"
                        target="_blank"
                      >
                        <img
                          src="https://comradeweb.com/wp-content/uploads/2020/10/top-seo-services.svg"
                          class="h-[88px]"
                          alt="Clutch reviews"
                          decoding="async"
                          loading="eager"
                          width="auto"
                          height="auto"
                        />

                      </a>
                    </div>
                  </div>
                                    <div class="swiper-slide flex items-center justify-center">
                    <div class="achievement">
                      <a
                        class="flex flex-col p-4"
                        href="#"
                        rel="noopener"
                        target="_blank"
                      >
                        <img
                          src="https://comradeweb.com/wp-content/uploads/2020/10/top-local-agency.svg"
                          class="h-[88px]"
                          alt="Clutch reviews"
                          decoding="async"
                          loading="eager"
                          width="auto"
                          height="auto"
                        />

                      </a>
                    </div>
                  </div>
                                    <div class="swiper-slide flex items-center justify-center">
                    <div class="achievement">
                      <a
                        class="flex flex-col p-4"
                        href="#"
                        rel="noopener"
                        target="_blank"
                      >
                        <img
                          src="https://comradeweb.com/wp-content/uploads/2020/10/expertise.svg"
                          class="h-[88px]"
                          alt="Clutch reviews"
                          decoding="async"
                          loading="eager"
                          width="auto"
                          height="auto"
                        />

                      </a>
                    </div>
                  </div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-scrollbar"></div>
              </div>
            </div>
          </div>
  </div>


        </div>
      </section>

      <section
        id="contact"
        class="bg-[#ebf2f8] py-[100px] relative before:absolute before:top-0 before:right-0 before:content-[''] before:z-10  before:border-r-[20px]  before:border-t-[20px] before:border-t-white before:block before:border-r-white  before:border-[20px] before:border-transparent"
      >
        <div class="container flex flex-col md:flex-row md:flex-start flex-wrap px-[15px] relative max-w-[1140px]">
          <div class="w-full text-[#585858] font-montserrat mb-5 uppercase leading-[1.25] tracking-[.16em] font-bold text-xs md:text-base ">
            On average, clients achieve a 4.5x ROI
          </div>

          <div class="text-[#636363] w-full md:w-1/2 md:pr-[64px] mb-2 md:mb-0">
            <div class=" text-3xl md:text-[40px] font-bold text-[#191919] font-montserrat leading-[1.2]">
              Request a Quote
            </div>
            <div class=" ">
              <p class="text-lg leading-[1.7] my-4 ">
                Request a fully complimentary marketing assessment that will
                examine the following key factors related to your business
                marketing:
              </p>
              <ul class="md:ml-6 text-lg leading-[1.8] text-[#636363]">
                <li class="before:h-2 before:w-2 before:rounded-full before:absolute before:top-4 before:block before:content-[''] before:bg-[#106bd2]  py-[5px] pl-[25px] relative before:left-0">
                  Website load speed (if you have an existing site)
                </li>
                <li class="before:h-2 before:w-2 before:rounded-full before:absolute before:top-4 before:block before:content-[''] before:bg-[#106bd2]  py-[5px] pl-[25px] relative before:left-0">
                  Backlink and Google penalty audit
                </li>
                <li class="before:h-2 before:w-2 before:rounded-full before:absolute before:top-4 before:block before:content-[''] before:bg-[#106bd2]  py-[5px] pl-[25px] relative before:left-0">
                  Multi-point SEO viability check
                </li>
                <li class="before:h-2 before:w-2 before:rounded-full before:absolute before:top-4 before:block before:content-[''] before:bg-[#106bd2]  py-[5px] pl-[25px] relative before:left-0">
                  Inbound content review
                </li>
                <li class="before:h-2 before:w-2 before:rounded-full before:absolute before:top-4 before:block before:content-[''] before:bg-[#106bd2]  py-[5px] pl-[25px] relative before:left-0">
                  Qualified lead and conversion rate metrics
                </li>
              </ul>
              <p class="text-lg leading-[1.7] my-4 ">
                Every marketing assessment will conclude with a tailored growth
                strategy unique to your business landscape and revenue goals.
              </p>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <form action="" class="flex flex-col gap-5 md:px-5">
              <div class="input-row grid grid-cols-2 gap-5 ">
                <input
                  required
                  type="text"
                  name="firstname"
                  placeholder="First Name *"
                  class="focus:border-[#1c78df] placeholder:text-[#777] text-base block outline-none px-3 py-2.5 h-[50px] w-full  font-montserrat bg-white border border-[#eee] text-black"
                  value=""
                />

                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name *"
                  required
                  class="focus:border-[#1c78df] placeholder:text-[#777] text-base block outline-none px-3 py-2.5 h-[50px] w-full  font-montserrat bg-white border border-[#eee] text-black"
                  value=""
                />
              </div>

              <input
                required
                type="email"
                name="email"
                placeholder="Email *"
                class="focus:border-[#1c78df] placeholder:text-[#777] text-base block outline-none px-3 py-2.5 h-[50px] w-full  font-montserrat bg-white border border-[#eee] text-black"
                value=""
              />

              <input
                required
                type="text"
                name="phone"
                placeholder="Phone *"
                class="focus:border-[#1c78df] placeholder:text-[#777] text-base block outline-none px-3 py-2.5 h-[50px] w-full  font-montserrat bg-white border border-[#eee] text-black"
                value=""
              />

              <input
                required
                type="text"
                name="company"
                placeholder="Company Name *"
                class="focus:border-[#1c78df] placeholder:text-[#777] text-base block outline-none px-3 py-2.5 h-[50px] w-full  font-montserrat bg-white border border-[#eee] text-black"
                value=""
              />

              <select
                name="industry_select"
                class="  focus:border-[#1c78df] placeholder:text-[#777] text-base block outline-none px-3 py-2.5 h-[50px] w-full  font-montserrat bg-white border border-[#eee] text-black"
                required
              >
                <option value="" disabled selected>
                  Industry *
                </option>
                <option value="Legal">Legal</option>
                <option value="Construction">
                  Construction &amp; Home Improvement
                </option>
                <option value="eCommerce">Ecommerce</option>
                <option value="Small Businesses">Small Businesses</option>
                <option value="Healthcare / Fitness / Nutrition">
                  Healthcare
                </option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Senior Living Facility">
                  Senior Living Facilities
                </option>
                <option value="Real Estate">Real Estate</option>
                <option value="B2B Services &amp; SAAS">
                  B2B Services &amp; SAAS
                </option>
                <option value="Other">Other</option>
              </select>

              <select
                name="what_can_we_help_you_with_"
                class="focus:border-[#1c78df] placeholder:text-[#777] text-base block outline-none px-3 py-2.5 h-[50px] w-full  font-montserrat bg-white border border-[#eee] text-black"
              >
                <option value="" disabled selected>
                  What can we help you with?
                </option>
                <option value="Need more visitors, leads and/or sales">
                  Need more visitors, leads and/or sales
                </option>
                <option value="Need to redesign current website">
                  Need to redesign current website
                </option>
                <option value="Need to design and build a new website/app">
                  Need to design and build a new website/app
                </option>
                <option value="Need to create branding">
                  Need to create branding
                </option>
                <option value="Seeking Partnership or Employment">
                  Seeking Partnership or Employment
                </option>
                <option value="Other">Other</option>
              </select>
              <textarea
                name="message"
                placeholder="Please, tell us your project information"
                rows={10}
                class=" focus:border-[#1c78df] placeholder:text-[#777] text-base block outline-none px-3 py-2.5 h-[200px] w-full resize-none font-montserrat bg-white border border-[#eee] text-black "
              ></textarea>

              <div>
                <button
                  type="submit"
                  name="submit"
                  class="inline-block font-montserrat tracking-[1px] transition-all duration-200 ease-in py-[1.225em] px-6 text-center text-sm font-bold uppercase rounded text-white bg-[#106bd2] [box-shadow:inset_0_-4px_2px_#225997] hover:bg-[#636363] hover:[box-shadow:inset_0_-4px_2px_#4f4f4f]"
                >
                  Submit Your Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Who We Serve | Comrade Digital Marketing Agency",
  meta: [
    {
      name: "description",
      content:
        "Achieve your business goals with our web design & digital marketing services",
    },
  ],
};
