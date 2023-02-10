import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import Herosection from './herosection';
import HerosectionNew from './herosectionNew';
import validPageNumbers from '../public/ct_id_valid_page_numbers.json';
import { s3_root_dir } from './contracts_list';
import { URLListBuilder } from './contracts_list';

export default function Home() {
  let img_list = URLListBuilder(s3_root_dir, 'ct_327', validPageNumbers['ct_327']);
  return (
    <div>
      <Head>
        <title>Contract 327</title>
        <meta name="Contract 327" content="Generated by create next app" />
      </Head>
      <HerosectionNew img_list={img_list} />
      <Footer />
    </div>
  );
}
