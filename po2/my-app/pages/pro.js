import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import axios from 'axios';
import { useState } from "react";
import img from "../public/image/1.png"
import img1 from "../public/image/callbg.jpg"
import img2 from "../public/image/call.jpg"


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    // async function getgun() {
    //     const config = {
    //         headers: { "content-type": "multipart/form-data" },
    //     };
    //     await axios.get("http://localhost:8080/bpo2/d.php",config).then((response) => {
    //         var datax = response.data;
    //         if (datax.status == "success") {
    //             console.log(datax)
    //         } else {
    //             alert("fail")
    //             console.log(datax)
    //         }

    //     });
    // }
    const axios = require('axios');
    var FormData = require('form-data');
    // http://localhost:8080/bpo2/d.php
    // https://www.imgen.site/shop/DB/Api.php?FN=GET_CATEGORYS
    axios.post('http://localhost:8080/bpo2/d.php', {x: 1, buf: new Buffer(10)}, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(({data}) => console.log(data));
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

    const card = [
        {
            image: img,
            title: '(data.categorys_name)',
            text: "dhjshdjshdjk",
            dow: "download"
        },
        {
            image: img2,
            title: "Card title",
            text: "dhjshdjshdjk",
            dow: "download"
        }
        , {
            image: img,
            title: "Card title",
            text: "dhjshdjshdjk",
            dow: "download"
        }
        , {
            image: img,
            title: "Card title",
            text: "dhjshdjshdjk",
            dow: "download"
        }


    ]



    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            {/* head */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Image src={img2} alt="" width="60" height="34" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/pro">productgun</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>


            <div className='container'>
                <div className='row row-cols-2 row-cols-lg-5 g-2 g-lg-3'>
                    {card.map((item, index) => (
                        <div className="col">
                            <div className="card" >
                                <Image width={245} height={200} src={item.image}
                                    className="card-Image-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.text}</p>
                                    <a href="#" className="btn btn-primary">{item.dow}</a>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>



        </>
    )
}
