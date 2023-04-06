import Head from "next/head"
import Image from 'next/image';
import Header1 from "../public/header2";
import TESTFOOT from "./testfoot"
import aaa from "../public/image/aaa.jpg"
import a1 from "../public/image/mu1.jpg"
import a2 from "../public/image/mu11.jpg"
import a3 from "../public/image/mu2.jpg"
import a4 from "../public/image/mu3.jpg"
import a44 from "../public/image/mu33.jpg"
import Link from 'next/link';

export default function multi() {

    return (
        <>
            <Head>
                <title>Call of DUTY®</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header1 />

            <body >
                <div className=" accordion-body">
                    <div className="bggmui">
                        <Image className=" accordion-flush imggmul" src={aaa} height={250} width={400} alt="#" ></Image>
                    </div>
                </div>
                <div className="container accordion-body cam1">
                    <div className="card cam1">
                        <div className="card-body">
                            <h3 className="card-title">MODES</h3>
                            <p className="card-text camtextsm">Infinity Ward is bringing back signature Multiplayer game modes
                                as well as introducing new modes. Leave no one behind in the new Prisoner Rescue mode, secure the bag in the new Knock Out mode and dive into the new third-person playlist coming to MWII.
                            </p>

                        </div>

                        <div class="container coo  ">
                            <Image className="accordion-flush imggmulti " src={a1} height={250} width={400} alt="#" />
                            <Image className="accordion-flush imggmulti " src={a2} height={250} width={400} alt="#" />
                        </div>
                        <hr className="divider" />
                        <div className="card-body">
                            <h3 className="card-title">GUNSMITH</h3>
                            <p className="card-text camtextsm">Further customize your loadout and expand your arsenal like never
                                before with a revamped Gunsmith. With the introduction of weapon platforms, weapon tuning, and a
                                firing range, create a true extension of your personal playstyle while exploring each platform’s
                                strengths.
                            </p>
                        </div>
                        <Image className="accordion-flush imgg " src={a3} height={250} width={400} alt="#" />
                        <hr className="divider" />
                        <div className="card-body">
                            <h3 className="card-title">MAPS</h3>
                            <p className="card-text camtextsm">Get ready to play in a variety of settings from a small bustling
                                marketplace to a modern museum nestled in the foothills of the mountains.
                                Modern Warfare II will hit the ground running on day one, ready to welcome newcomers and fierce competitors alike.
                            </p>
                        </div>
                        <div class="container coo accordion-body ">
                            <div>
                                <Image className="accordion-flush imggg " src={a4} height={250} width={400} alt="#" />
                                <h5 className="card-title text-center">MERCADO LAS ALMAS</h5>
                            </div>
                            <div>
                                <Image className="accordion-flush imggg " src={a44} height={250} width={400} alt="#" />
                                <h5 className="card-title text-center">FARM 18</h5>
                            </div>

                        </div>
                        <div className="row rowcc">
                            <div className="col"></div>

                            <div className="col"> </div>
                            <div className="col"> <Link href="/" className="btnnn text-lg-end">back to home</Link></div>
                        </div>

                    </div>
                </div>

            </body>
            <TESTFOOT />

        </>
    )

}