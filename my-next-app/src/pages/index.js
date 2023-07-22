import RootLayout from "@/components/layouts/RootLayout";
import Head from "next/head";
import Image from "next/image";
import downloadedImage from "@/assets/download.jpg";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Main home page</title>
        <meta name="description" content="this is the home page" />
      </Head>
      <Image
        src={downloadedImage}
        width={200}
        height={200}
        layout="responsive"
        alt=""
      />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
