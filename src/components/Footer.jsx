import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className="flex md:flex-row flex-col justify-start items-center mb-8 w-full">
        <div className="flex flex-1 flex-col justify-start mr-10">
          <img
            src={logo}
            alt="logo"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={` ${styles.paragraph} mt-4 max-w-[312px] `}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex flex-[1.5] flex-row flex-warp w-full justify-between md:mt-0 mt-10">
          {footerLinks.map((item, index) => (
            <div
              key={index}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {item.title}
              </h4>
              <ul className="list-none mt-4">
                {item.links.map((link, index) => (
                  <li
                    key={index}
                    className={`font-poppins font-normal text-[16px] leading-6 text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== item.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full border-t-[1px] border-t-[#3F3E45] pt-6">
        <p className={` ${styles.paragraph} `}>
          Copyright &copy; 2021 HooBank. All Rights Reserved.{" "}
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={index}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain ${
                index !== socialMedia.length ? "mr-6" : "mr-0"
              } cursor-pointer`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
