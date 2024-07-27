import Head from "next/head";
import Header from "./ui/header";
import Banner from "./ui/banner"


export default function Page() {
    return (
    <div className="">
        <Head>
            <title>QASHA</title>
        </Head>

       <Header/>
        {/* Banner */}
        <Banner/>


    </div>
    )
  }