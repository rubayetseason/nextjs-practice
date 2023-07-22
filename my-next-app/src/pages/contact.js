import RootLayout from "@/components/layouts/RootLayout";

const ContactPage = () => {
  return <div>this is contact page</div>;
};

export default ContactPage;

ContactPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
