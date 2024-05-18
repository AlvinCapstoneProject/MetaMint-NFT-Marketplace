import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../styles/aboutus.module.css";
import { Brand } from "../components/componentsindex";
import images from "../img";

const aboutus = () => {
  const founderArray = [
    {
      name: "Alvin Ong",
      position: "Founder",
      images: images.founder2,
    },
  ];

  const factsArray = [
    {
      title: "100k",
      info: "Articles have been public around the world as of June. 30, 2024",
    },
    {
      title: "50,000",
      info: "Registered users account as of June. 30, 2024",
    },
    {
      title: "80",
      info: "Countries and regions have our presence as of June. 30, 2024",
    },
  ];
  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>About Us</h1>
            <p>
            Welcome to MetaMint, where creativity meets blockchain innovation. 
            As a pioneering NFT marketplace, our mission is to empower artists, creators, 
            and collectors by providing a secure, transparent, and user-friendly platform to buy, sell, 
            and explore unique digital assets.
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
            <Image src={images.hero2} />
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>Our Team</h2>
          <p>
          
          </p>
        </div>

        <div className={Style.aboutus_box_founder}>
          <div className={Style.aboutus_box_founder_box}>
            {founderArray.map((el, i) => (
              <div className={Style.aboutus_box_founder_box_img}>
                <Image
                  src={el.images}
                  alt={el.name}
                  width={500}
                  height={500}
                  className={Style.aboutus_box_founder_box_img_img}
                />
                <h3>{el.name}</h3>
                <p>{el.position}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>🚀 Our Vision</h2>
          <p>
          We believe in the power of blockchain technology to transform the art world, 
          making it more democratic, inclusive, and vibrant. 
          The platform is built on the principles of transparency, security, and community, 
          aiming to be the go-to destination for NFT enthusiasts around the globe.
          </p>
        </div>

        <div className={Style.aboutus_box_facts}>
          <div className={Style.aboutus_box_facts_box}>
            {factsArray.map((el, i) => (
              <div className={Style.aboutus_box_facts_box_info}>
                <h3>{el.title}</h3>
                <p>{el.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brand />
    </div>
  );
};

export default aboutus;
