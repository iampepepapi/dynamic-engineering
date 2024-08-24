import React from "react";
import { cn } from "@/lib/utils"; // Adjust the import based on your project structure
import { SmileIcon } from "lucide-react";
import { SimpleIcon } from "../lib/SimpleIcon"; // Adjust the import based on your project structure
import { siFacebook, siX, siInstagram, siLinkedin } from "simple-icons/icons";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-100 py-4 text-gray-500 before:blur-md before:backdrop-blur-md dark:bg-background">
      <div className="container mx-auto px-4 pt-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between text-black dark:text-gray-100">
          {/* Company Info */}
          <div className="mb-6 w-full md:mb-0 md:w-1/3">
            <h5 className="mb-4 text-lg font-bold">Company</h5>
            <p className="pr-4">
              Core competence in design and project delivery of automated
              process plants and machines within offshore/maritime and the
              industry sector.
            </p>
          </div>
          {/* Navigation Links */}
          <div className="mb-6 w-full md:mb-4 md:w-1/3">
            <h5 className="mb-4 text-lg font-bold">Quick Links</h5>
            <ul className="grid grid-flow-row grid-cols-2 gap-y-2">
              <li className="flex flex-col-reverse border-b border-t border-accent">
                <Link
                  href="https://dynamic-fisheye.no/#/"
                  className="w-fit text-nowrap transition-colors duration-300 hover:text-primary"
                  target="_blank"
                >
                  Dynamic FishEye
                </Link>
                {/* <span className="w-fit">
                  <div className="relative">
                    {" "}
                    <p className="text animate-pulse rounded-md bg-primary px-1 py-[2px] text-[16px] text-secondary">
                      Coming soon
                    </p>
                  </div>
                </span> */}
              </li>
              <li>
                <Link
                  href="#"
                  className="hidden transition-colors duration-300 hover:text-primary"
                >
                  some space really hehe 😊. update
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors duration-300 hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors duration-300 hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors duration-300 hover:text-primary"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors duration-300 hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Social Media */}
          <div className="w-full md:w-1/3">
            <h5 className="mb-4 text-lg font-bold">Contact Us</h5>
            <ul className="text-cyan-700 dark:text-cyan-400">
              <li className="mb-2 flex">
                <p className="hover:text-primary">
                  {" "}
                  <strong className="text-black dark:text-white">
                    Email:
                  </strong>{" "}
                  post@d-eng.no
                </p>
              </li>
              <li className="mb-2 flex">
                <p className="hover:text-primary">
                  {" "}
                  <strong className="text-black dark:text-white">
                    Phone:
                  </strong>{" "}
                  902 58 045
                </p>
              </li>
              <li className="mb-2 flex">
                <p className="hover:text-primary">
                  {" "}
                  <strong className="text-black dark:text-white">
                    Adress:
                  </strong>{" "}
                  Gråterudveien 20, Drammen, Norway
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-4 md:mt-4">
          <Link
            href="https://www.facebook.com/DynamicEngNo/"
            target="_blank"
            className={cn("group")}
          >
            <SimpleIcon
              icon={siFacebook}
              className="h-6 w-6 fill-slate-400 transition-colors duration-300 group-hover:fill-cyan-700 dark:group-hover:fill-cyan-300"
            />
          </Link>
          <Link
            href="https://no.linkedin.com/company/dynamic-engineering-as"
            target="_blank"
            className={cn("group")}
          >
            <SimpleIcon
              icon={siLinkedin}
              className="h-6 w-6 fill-slate-400 transition-colors duration-300 group-hover:fill-cyan-700 dark:group-hover:fill-cyan-300"
            />
          </Link>
        </div>
        <div className="mt-4 text-center text-sm text-gray-500 md:mt-8">
          &copy; 2024{" "}
          <span className="font- font-bold">Dynamic Engineering</span>. All
          rights reserved. 😊
        </div>
      </div>
    </footer>
  );
}

export default Footer;
