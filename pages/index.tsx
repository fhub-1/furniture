import Head from "next/head";
import { Logo } from "../components/logo";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-indigo-300">
      <Head>
        <title>E-commerce F</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      {/* header comonponents */}
      <Logo />
      {/* banner section */}
      {/* product section */}s
    </div>
  );
}
