import Head from "next/head"
import Image from 'next/image';
import cam1 from "../public/image/cam1.jpg"
import Header1 from "../public/header2";

export default function cam() {
    return (
        <>
            <Head>
                <title>Call of DUTY®</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header1 />
            <body>
                <div className="container accordion-body cam1">
                    <div class="card cam1">
                        <Image className=" accordion-flush imgg" src={cam1} height={500} width={1200} alt="#" ></Image>
                        <div class="card-body">
                            <h4 class="card-title">CALL OF DUTY®: MODERN WARFARE® II CAMPAIGN REWARDS: EARN DURING EARLY ACCESS FOR A HEAD START AT LAUNCH</h4>
                            <p class="card-text">Text</p>
                        </div>
                    </div>

                </div>
            </body>
        </>
    )
}