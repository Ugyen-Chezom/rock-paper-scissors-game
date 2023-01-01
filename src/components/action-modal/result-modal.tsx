import Image from "next/image";
import { type ModalProps } from "../../modal/rps-types";
import congrats from "../../assets/congrats.gif";
import lost from "../../assets/sad.gif";
import { useEffect } from "react";
import { findOptionLabel } from "../../utilities/findOptionValue";
export const ResultModal = (props: ModalProps) => {
  useEffect(() => {
    props.setPing(false);
  }, [props]);

  const closeModal = () => {
    props.setShow(false);
  };
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0">
      <div className="absolute w-full h-full top-0 left-0 right-0 bottom-0 z-10 flex flex-col justify-center items-center m-auto bg-black/50">
        <div className="w-1/3 h-1/2 bg-white flex flex-col justify-evenly items-center rounded-xl drop-shadow-2xl">
          {props.result === "Draw" ? (
            <h3 className="text-2xl p-2 text-black absolute top-6">
              Ohhh!! Try Again...
            </h3>
          ) : props.result === "You Win!" ? (
            <div className="absolute -top-14">
              <Image src={congrats} alt={"win"} width={300} height={100} />
            </div>
          ) : (
            <div className="absolute top-0">
              <Image src={lost} alt={"lost"} width={300} height={100} />
            </div>
          )}
          <div className="absolute bottom-5 w-full flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-4xl p-2 text-gray-800 flex items-center mb-5">
                {props.result}
              </h3>
              <h3 className="text-xl p-2 text-gray-800">
                {props.userName ? props.userName : "Player 1"} :{" "}
                {props.playerOpt !== undefined &&
                  findOptionLabel(props.playerOpt)}
              </h3>
              <h3 className="text-xl p-2 text-gray-800">
                Computer :{" "}
                {props.computerOpt !== undefined &&
                  findOptionLabel(props.computerOpt)}
              </h3>
            </div>
            <div
              className="mt-6 outline-0 rounded bg-purple-700 py-2 px-5 font-bold text-white w-32 text-center hover:cursor-pointer hover:bg-purple-500"
              onClick={closeModal}
            >
              <button type="button">Okay</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
