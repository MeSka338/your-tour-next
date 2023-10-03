import Head from "next/head";
import { Inter } from "next/font/google";
import HomePage from "../components/pages/HomePage";
import Layout from "../components/common/Layout";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <main>
          <HomePage />
        </main>
      </Layout>
    </>
  );
}
