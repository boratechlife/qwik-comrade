interface IClients {
  image: string;
  field: string;
  content: string;
  stats: {
    rate: string;
    remark: string;
  } | null;
}

export const clients: IClients[] = [
  {
    image:
      "https://comradeweb.com/wp-content/uploads/2019/08/shutterstock_1387577570-1.jpg",
    field: "Ecommerce",
    content: `Selling products online is one of the most difficult
    businesses nowadays. You compete not only with companies
    like yours, but also with huge marketplaces like Amazon,
    Google, and E-bay. To achieve the results you want, you
    need a stellar website and multi-channel, a results-driven
    marketing approach that will put your products in front of
    the right audience.`,
    stats: {
      rate: "2.5X",
      remark: "Average Increase in SEO Traffic",
    },
  },
  {
    image:
      "https://comradeweb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/02/romain-v-nMDp15T4lJ0-unsplash-1-1-768x591.jpg.webp",
    field: "Law Firms",
    content: `With a diverse array of practice areas and geographic locations, law firms require truly specialized marketing efforts. Luckily, legal practices comprise a large portion of our marketing clients and our expert content and strategies have helped each of them grow substantially, even in highly competitive markets.`,
    stats: {
      rate: "70%",
      remark: "Average Increase in Qualified Leads",
    },
  },
  {
    image:
      "https://comradeweb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/09/shutterstock_539932939-1-768x591.jpg.webp",
    field: "Manufacturing",
    content: `We help you leverage the power of thought leadership, innovation, and SEO to make your company stand-out in the manufacturing industry.`,
    stats: {
      rate: "89%",
      remark: "Average Increase in Qualified Orders",
    },
  },
  {
    image:
      "https://comradeweb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/02/shutterstock_644446420-1-768x595.jpg.webp",
    field: "Construction and Home Improvement Companies",
    content: `The home services industry is more competitive today than ever before. We've been helping clients in the home improvement and services sector running and substantially increasing their qualified leads and revenue.`,
    stats: {
      rate: "184%",
      remark: "Average Increase in Qualified Leads",
    },
  },
  {
    image:
      "https://comradeweb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/09/shutterstock_645695308-1-768x591.jpg.webp",
    field: "Home Care &amp; Senior Living Facilities",
    content: `There is no nobler a profession than assisting our elderly. Allowing your home care or senior living facility to shine is our primary goal. Leveraging our industry expertise, we'll help your facility or service stand apart from others in this sector, making it easier for seniors to choose wisely and access the highest standards of care.`,
    stats: {
      rate: "2X",
      remark: "Average Increase in Patients",
    },
  },
  {
    image:
      "https://comradeweb.com/wp-content/uploads/2019/08/shutterstock_750849310-1-768x591.jpg",
    field: "Small Businesses",
    content: `According to recent statistics, only about 40% of small businesses survive 5 years or more. It should be easier — you’re the backbone of the economy — and yet it’s hard. To truly make it, you need to invest in marketing tools that generate sales while you’re sleeping and, ultimately, build a brand that stands out.`,
    stats: {
      rate: "210%",
      remark: "Average Increase in SEO Traffic",
    },
  },
  {
    image:
      "https://comradeweb.com/wp-content/uploads/2020/08/Best-medical-websites-768x497.jpg",
    field: "Healthcare",
    content: `From private medical practices to clinics, hospitals, medical device companies, and beyond, we're versed in how to grow practices in the healthcare industry so they can focus on what they do best: providing excellent patient care.`,
    stats: {
      rate: "210%",
      remark: "Average Increase in SEO Traffic",
    },
  },
  {
    image:
      "https://comradeweb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/03/real-estate-768x574.jpg.webp",
    field: "Real Estate",
    content: `Real estate service providers operate in a competitive field. Working with a digital marketing agency skilled in the real estate industry is imperative in helping our clients rise above their competition.`,
    stats: {
      rate: "4X",
      remark: "Average Increase in SEO Traffic",
    },
  },
  {
    image:
      "https://comradeweb.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/03/b2b-768x591.jpg.webp",
    field: "B2B Services &amp; SAAS",
    content: `Comrade has been working with various SAAS companies and organizations specializing in B2B sales since its inception, honing new and trusted digital marketing strategies to grow revenue, year after year.`,
    stats: null,
  },
];
