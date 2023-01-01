import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { type ChangeEvent, useState } from "react";
import { ResultModal } from "../components/action-modal/result-modal";
import rps from "../assets/rps.jpg";
import rock from "../assets/iloveimg-resized/rock.png";
import paper from "../assets/iloveimg-resized/paper.png";
import scissors from "../assets/iloveimg-resized/scissors.png";

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [ping, setPing] = useState(false);
  const [myOpt, setMyOpt] = useState<number | undefined>(undefined);
  const [computerOpt, setComputerOpt] = useState<number | undefined>(undefined);
  const [usrName, setUsrName] = useState("");
  const [result, setResult] = useState("");

  const displayResult = (option: number) => {
    setPing(true);
    setMyOpt(option);
    setTimeout(() => {
      setShowModal(true);
    }, 3000);
    const computerOption = Math.floor(Math.random() * 3);
    setComputerOpt(computerOption);
    if (computerOption === option) {
      setResult("Draw");
    } else if (computerOption === 0) {
      if (option === 1) {
        setResult("You Win!");
      } else if (option === 2) {
        setResult("You lost!");
      }
    } else if (computerOption === 1) {
      if (option === 2) {
        setResult("You Win!");
      } else if (option === 0) {
        setResult("You lost!");
      }
    } else if (computerOption === 2) {
      if (option === 0) {
        setResult("You Win!");
      } else if (option === 1) {
        setResult("You lost!");
      }
    }
  };
  const addName = (event: ChangeEvent<HTMLInputElement>) => {
    setUsrName(event.target.value);
  };
  return (
    <>
      <Head>
        <title>Rock Paper Scissors</title>
      </Head>
      <div className="flex flex-col flex-1 justify-center items-center h-screen w-screen bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
        <h1 className="text-7xl text-white font-extrabold mb-7">Play & WIN</h1>
        <div
          className={` w-56 h-56 rounded-full flex justify-center items-center bg-slate-100 ${
            ping ? "animate-ping" : ""
          }`}
        >
          <div className="animate-spin">
            <Image
              src={rps}
              alt={"rock&paper&scissors"}
              width={150}
              height={150}
            />
          </div>
        </div>
        <div className="flex justify-evenly w-3/4 ">
          <div className="flex flex-col">
            <div></div>
            <h3 className="text-3xl p-2 text-white">Player 1</h3>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="p-1 pl-4 text-lg rounded-md focus:outline-white"
              onChange={(event) => addName(event)}
              value={usrName}
            />
          </div>
          <div>
            <h3 className="text-3xl p-2 text-white">Player 2</h3>
            <input
              type="text"
              value="Computer"
              readOnly
              className="p-1 pl-4 text-lg rounded-md  focus:outline-white"
            />
          </div>
        </div>
        <div className="w-3/4 mt-4">
          <h3 className="text-3xl p-2 mt-5 mb-3 text-white text-center animate-pulse">
            Make Your Choice
          </h3>
          <div className="flex justify-center gap-4">
            <div
              className="border-solid w-1/5 border-white border-2 rounded-lg text-black bg-slate-100 font-bold text-lg pl-2 hover:cursor-pointer hover:text-xl flex justify-evenly"
              onClick={() => displayResult(0)}
            >
              <button type="button">ROCK</button>
              <Image src={rock} alt={"rock"} height={50} />
            </div>
            <div
              className="border-solid w-1/5 border-white border-2 rounded-lg text-black bg-slate-100 font-bold text-lg hover:cursor-pointer hover:text-xl flex justify-evenly"
              onClick={() => displayResult(1)}
            >
              <button type="button">PAPER</button>
              <Image src={paper} alt={"paper"} height={40} />
            </div>
            <div
              className="border-solid w-auto border-white border-2 rounded-lg text-black bg-slate-100 font-bold text-lg hover:cursor-pointer hover:text-xl flex justify-evenly gap-2"
              onClick={() => displayResult(2)}
            >
              <button type="button">SCISSORS</button>
              <Image src={scissors} alt={"scissors"} height={40} />
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <ResultModal
          show={showModal}
          setShow={setShowModal}
          ping={ping}
          setPing={setPing}
          computerOpt={computerOpt}
          playerOpt={myOpt}
          result={result}
          userName={usrName}
        />
      ) : null}
    </>
  );
};

export default Home;
