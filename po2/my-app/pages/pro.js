import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import axios from 'axios';
import { useState } from "react";
import { useEffect } from 'react';
import omage from "../public/image/1.png"
import img1 from "../public/image/callbg.jpg"
import img2 from "../public/image/call.jpg"
import img3 from "../public/image/3.jpg"
import img4 from "../public/image/w2.jpg"
import Header1 from "../public/header2"
import header from "../public/image/header.jpg"
import boat from "../public/image/boat.jpg"
import DENIED from "../public/image/DENIED.jpg"
import LOW from "../public/image/LOW.jpg"
import zaya from "../public/image/zaya.jpg"
import wzon from "../public/image/wzon.jpg"
import one from "../public/image/11.png"
import two from "../public/image/22.png"
import ooo from "../public/image/33.png"
import oooo from "../public/image/44.png"
import ooooo from "../public/image/55.png"
import Sidebar1 from "../public/image/Sidebar"


// import styles from '@/styles/globals.css'




// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    // async function getgun() {
    //     const config = {
    //         headers: { "content-type": "multipart/form-data" },
    //     };
    //     await axios.get("https://www.imgen.site/imgen2/api_male/api.php",config).then((response) => {
    //         var datax = response.data;
    //         if (datax.status == "success") {
    //             console.log(datax)
    //         } else {
    //             alert("fail")
    //             console.log(datax)
    //         }

    //     });
    // }


    //    const [gunlist,setgunlist] = useState([]) ;
    //    const getgun = () =>{
    //     axios.post('https://www.imgen.site/imgen2/api_male/api.php').than ((response)=>{
    //     setgunlist(response.data);    
    //     });
    //    }

    //     axios.post('https://www.imgen.site/imgen2/api_male/api.php', {x: 1, buf: new Buffer(10)}, {
    //       headers: {
    //         'Content-Type': 'multipart/form-data'
    //       }
    //     }).then(({data}) => console.log(data));




    // async function getcategory() {
    //     if ((pageLoaded2) != true) {
    //         const config = {
    //             headers: { "content-type": "multipart/form-data" },
    //         };
    //         await axios.get("https://www.imgen.site/shop/DB/Api.php?FN=GET_CATEGORYS", config)
    //             .then((response) => {
    //                 let datax = response.data;

    //             });
    //     }
    // }
    async function loadfile(event, urls, file_name) {
        event.preventDefault();
        const config = {
            headers: { "content-type": "image/jpeg" },
            responseType: "blob"
        }
        await axios.get(urls, config).then((response) => {
            console.log(response.data)
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute(
                'download',
                file_name
            );
            // Append to html link element page

            document.body.appendChild(link);

            // Start download
            link.click();

            // Clean up and remove the link
            link.parentNode.removeChild(link);

        });

    }
    const [filter, setfilter] = useState("1");
    const [filterdata, setfilterdata] = useState();
    const [sort, setsort] = useState();
    const [search, setsearch] = useState('')
    const [gunlist, setgunlist] = useState();
    const getgunlist = () => {
        axios.get("https://www.imgen.site/imgen2/api_male/api type.php").then((response) => {
            setgunlist(response.data);
            setfilterdata(response.data);
            // setsort(response.data);
        });
    };
    getgunlist()
    useEffect(() => {
        // setdata()
        getgunlist()
    }, [])

    function setup(x) {
        setfilter(x)
        filtertype(x)

    }

    function filtertype(x) {
        console.log(x)
        let y = new Array;
        if (x == 0) {
            setfilterdata(gunlist);
        } else {
            gunlist.forEach(element => {
                if (element['id_type'] == x) {
                    y.push(element)
                    // console.log(element);
                }
            });
            setfilterdata(y);
        }
    }




    // const card = [
    //     {
    //         image: Image,
    //         title: '11111',
    //         text: "dhjshdjshdjk",
    //         dow: "download"
    //     },
    //     {
    //         image: img2,
    //         title: "2222",
    //         text: "dhjshdjshdjk",
    //         dow: "download"
    //     }
    //     , {
    //         image: Image,
    //         title: "Card title",
    //         text: "dhjshdjshdjk",
    //         dow: "download"
    //     }
    //     , {
    //         image: Image,
    //         title: "Card title",
    //         text: "dhjshdjshdjk",
    //         dow: "download"
    //     }, {
    //         image: Image,
    //         title: "Card title",
    //         text: "dhjshdjshdjk",
    //         dow: "download"
    //     }



    // ]


    return (
        <>
            <Head>
                <title>Call of DUTY®</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>





            {/* head */}

            <Header1 />

            <form class="d-none d-md-flex input-group w-auto my-auto">
                <input
                    autocomplete="off"
                    type="search"
                    class="form-control rounded"
                    placeholder='Search'
                    onChange={(event) => {
                        setsearch(event.target.value)
                    }}
                // style="min-width: 225px;"
                />

            </form>

            <div className='row'>
                <select className='col-12 col-sm-1' onChange={(event) => {
                    setup(event.target.value)
                }}>
                    <option value={0}>ALL</option>
                    <option value={1}>gun</option>
                    <option value={2}>character</option>
                    <option value={3}>car</option>

                </select>
                {/* {/* <select className='col-12 col-sm-1' onChange={(event) => {
                        tysort(event.target.value)
                    }}>
                        <option value={0} >ALL</option>
                        <option value={1}>a</option>
                        <option value={2} >z</option>
                    </select> */}
            </div>

         
            <div className='container text-center my-5 ' style={{ overflowX: 'f' }}>
                <div className='row row-cols-2 row-cols-lg-5 g-2 g-lg-3'>
                    {filterdata?.filter((item) => {
                        if (search == "") {
                            return item
                        } else if (item.file_name.toLowerCase().includes(search.toLowerCase())) {
                            return item
                        }
                    }).map((item, index) => {
                        return (
                            <div key={index} className="col">
                                <div className="card" data-bs-toggle="modal" data-bs-target={"#exampleModal" + item.id_data}>
                                    <Image width={245} height={200} src={item.path}
                                        className="card-Image-top " alt="..." />
                                    <div className="card-body">
                                        <h5 className="itemm">{(item.file_name).replace(".jpg", '')}</h5>




                                        <div className="modal fade p-0 " id={"exampleModal" + item.id_data} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog ">

                                                <div className="modal-content  text-center  ">
                                                    <Image className="card" width={500} height={350} src={item.path}
                                                        alt="..." />
                                                    <div className="modal-body itemm">
                                                        {(item.file_name).replace(".jpg", '')}
                                                    </div>

                                                    <div className="modal-footer  border border-0 footer">
                                                        <button onClick={(e) => { loadfile(e, item.path, item.file_name) }} className="btn btn-primary">download</button>

                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>

            </div>


            {/* <Sidebar1/> */}
            <div className='row'>
                <div className='col-2'></div>
                <div className='col-10'>

                    <div className="card text-center" >
                        <div className="card text-center">
                            <Image src={header} className="img-fluid" alt="..." />
                        </div>
                    </div>

                    <div className="card text-center">

                        <div className="card-body hh">
                            <p className="card-text hh">
                                Call of Duty Modern Warfare II Logo
                                THE ULTIMATE WEAPON IS TEAM.

                                Squad up and fight alongside the iconic operators of Task Force 141 with the return of Modern Warfare®.
                            </p>
                        </div>
                        <div className="card-footer text-muted hh">
                            NEW GAMEPLAY INNOVATIONS. ALL-NEW GUN HANDLING. ADVANCED AI. MODERN WARFARE® II BRINGS YOU A GLOBAL CAMPAIGN, IMMERSIVE MULTIPLAYER COMBAT AND NARRATIVE-DRIVEN SPECIAL OPS.
                        </div>
                    </div>


                    <div className="row row-cols-1 row-cols-md-2 g-4 my-5">
                        <div className="col">
                            <div className="card">

                                <Image className="img-fluid" src={boat} alt="..." />

                                <div className="card-body">
                                    <h5 className="card-title h55 ">HIGH GROUND</h5>
                                    <p className="card-text hh">Squad up and fight alongside Task Force 141 in a globe-trotting single-player campaign.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <Image src={DENIED} className="img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title h55">DENIED AREA</h5>
                                    <p className="card-text hh">Play lone-wolf or rally with your team in immersive multiplayer combat, complete with new locales and ways to play.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <Image src={LOW} className="img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title h55">LOW PROFILE</h5>
                                    <p className="card-text hh">Expect a massive calendar of free content post-launch featuring evolving gameplay with new maps, modes, seasonal events, community celebrations and more.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <Image src={zaya} className="img-fluid" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title h55">DEFENDER: MT ZAYA</h5>
                                    <p className="card-text hh">Join your team for an evolved Cooperative game mode featuring tactical co-op gameplay across multiple missions and introducing new Raid missions that will continue the story of the Campaign.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card ">
                        <div className="card-body">
                            <h5 className="card-title h55">MODES</h5>
                            <p className="card-text hh">Infinity Ward is bringing back signature Multiplayer game modes as well as introducing new modes. Leave no one behind in the new Prisoner Rescue mode, secure the bag in the new Knock Ou the new third-person playlist coming to MWII.</p>

                        </div>
                        <Image src={wzon} className="rounded mx-auto d-block" alt="..." />
                    </div>





                    <p className=' my-5 h11'>WELCOME TO TASK FORCE 141</p>
                    <div className="card-group my-5">
                        <div className="card">
                            <Image src={one} className="card-Image-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title hh">John &quot;Soap&quot; MacTavish</h5>


                            </div>
                        </div>
                        <div className="card">
                            <Image src={two} className="card-Image-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title hh ">Simon &quot;Ghost&quot; Riley. Modern</h5>


                            </div>
                        </div>
                        <div className="card">
                            <Image src={ooo} className="card-Image-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title hh ">Kyle &quot;Gaz&quot; Garrick</h5>


                            </div>
                        </div>


                        <div className="card">
                            <Image src={oooo} className="card-Image-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title hh ">Captain John Price</h5>


                            </div>
                        </div>
                        <div className="card">
                            <Image src={ooooo} className="card-Image-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title hh">Colonel Alejandro Vargas</h5>
                            </div>

                        </div>




                    </div>





                </div>
            </div>






        </>
    )
}
