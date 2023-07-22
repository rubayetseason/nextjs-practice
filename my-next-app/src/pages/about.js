import RootLayout from "@/components/layouts/RootLayout";

const About = () => {
  return <div>this is about page</div>;
};

export default About;

About.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
