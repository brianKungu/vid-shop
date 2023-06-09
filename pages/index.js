import Head from "next/head";
import Image from "next/image";
import {
  Layout,
  Meta,
  Header,
  How,
  Feedback,
  Feedback2,
  Feedback3,
  Waitlist,
  ContactUs,
  Experience,
  VideoSec,
  VidshopQuote,
  Goodbye,
} from "../components";

export default function Home() {
  return (
    <Layout>
      <Meta title="Vid-Shop" />
      <Header />
      <Feedback />
      <How />
      <Waitlist />
      <Experience />
      <Feedback2 />
      <Goodbye />
      <Feedback3 />
      <VideoSec />
      <VidshopQuote />
      <ContactUs />
    </Layout>
  );
}
