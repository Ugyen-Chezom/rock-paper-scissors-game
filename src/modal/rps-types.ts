export type ModalProps = {
  show: boolean;
  setShow: (show: boolean) => void;
  ping: boolean;
  setPing: (ping: boolean) => void;
  userName?: string;
  computerOpt?: number;
  playerOpt?: number;
  result?: string;
};

export const Options = [
  { value: 0, label: "Rock" },
  { value: 1, label: "Paper" },
  { value: 2, label: "Scissors" },
];
