import Head from "next/head";
import Image from "next/image";
import { Layout, Meta, Header,How, Creators } from "../components";

export default function Home() {
  return (
    <Layout>
      <Meta title="Vid-Shop" />
      <Header />
      <How />
      <Creators />
    </Layout>
  );
}
