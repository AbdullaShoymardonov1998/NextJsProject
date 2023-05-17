import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import { RiTelegramFill } from "react-icons/ri";
import Image from "next/image";
import avatar from "../public/1.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
export default function Home() {
  return (
    <main className="bg-white text-black px-10 md:px-20 lg:px-40">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">Abecom</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-xl " />
            </li>
            <li>
              <a
                href="#"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <div className="text-center p-8">
          <h2 className="text-5xl  py-1 text-teal-500 md:text-6xl font-medium">
            Abdulla Shoymardonov
          </h2>
          <h3 className="text-2xl md:text-3xl py-2">Front End Developer</h3>
          <p className="text-md py-5 leading-5 md:text-xl text-gray-800 max-w-xl mx-auto">
            Lorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet
            consecteturLorem, ipsum dolor sit amet consectetur adipisicing elit.
            Omnis non sequi quibusdam perferendis laboriosam autem natus
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16">
          <AiFillTwitterCircle className="text-blue-400" />
          <AiFillInstagram className="text-red-500" />
          <AiFillGithub />
          <RiTelegramFill className="text-blue-300" />
        </div>

        <div className="mx-auto w-60 mt-20 md:w-70 lg:w-
        80">
          <Image
            src={avatar}
            alt="CreatorDev"
            className="rounded-full object-cover"
          />
        </div>
      </section>

      <section>
        <div>
          <h3 className="text-3xl py-2 pt-5">Services i offer</h3>
          <p className="text-md py-2 leading-8 text-gray-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            adipisci velit blanditiis{" "}
            <span className="text-teal-500">sasasa</span> repellendus
            dignissimos, vero cumque iure nihil{" "}
            <span className="text-teal-500"> necessitatibus </span> aspernatur
            ea quas possimus est illo. Necessitatibus dignissimos aliquid
            explicabo sit!
          </p>

            <p className="text-md py-2 leading-8 text-gray-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            adipisci velit blanditii cabo sit!
          </p>

        </div>
        <div className="md:flex gap-7">
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image className="mx-auto" src={design} alt="123"  width={100} height={100}/>
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful designs</h3>
            <p>Creating a breand new designs for a breand new designs for a breand new designs for  oyur comfort and design theory </p>
            <h4 className="py-4 text-teal-600">Desgn tools i use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">UI/UX</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image className="mx-auto" src={code} alt="123"  width={100} height={100}/>
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful designs</h3>
            <p>Creating a breand new designs for a breand new designs for a breand new designs for  oyur comfort and design theory </p>
            <h4 className="py-4 text-teal-600">Desgn tools i use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">UI/UX</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image className="mx-auto" src={consulting} alt="123"  width={100} height={100}/>
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful designs</h3>
            <p>Creating a breand new designs for a breand new designs for a breand new designs for  oyur comfort and design theory </p>
            <h4 className="py-4 text-teal-600">Desgn tools i use</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
            <p className="text-gray-800 py-1">UI/UX</p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1">Portfolio</h3>
          <p className="text-md py-2 leading-8 text-gray-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            adipisci velit blanditiis{" "}
            <span className="text-teal-500">sasasa</span> repellendus
            dignissimos, vero cumque iure nihil{" "}
            <span className="text-teal-500"> necessitatibus </span> aspernatur
            ea quas possimus est illo. Necessitatibus dignissimos aliquid
            explicabo sit!
          </p>

            <p className="text-md py-2 leading-8 text-gray-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            adipisci velit blanditii cabo sit!
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 md:flex-row md:flex-wrap ">
          <div className="basis-1/3 flex-1">
            <Image src={web1} className="rounded-lg object-cover w-100 h-100" alt="web1"/>
          </div>
          <div className="basis-1/3 flex-1">
            <Image src={web2} className="rounded-lg object-cover w-100 h-100" alt="web1"/>
          </div>
          <div className="basis-1/3 flex-1">
            <Image src={web6} className="rounded-lg object-cover w-100 h-100" alt="web1"/>
          </div>
          <div className="basis-1/3 flex-1">
            <Image src={web4} className="rounded-lg object-cover w-100 h-100" alt="web1"/>
          </div>
          <div className="basis-1/3 flex-1">
            <Image src={web5} className="rounded-lg object-cover w-100 h-100" alt="web1"/>
          </div>
          <div className="basis-1/3 flex-1">
            <Image src={web3} className="rounded-lg object-cover w-100 h-100" alt="web1"/>
          </div>
        </div>
      </section>
    </main>
  );
}
