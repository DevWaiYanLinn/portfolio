"use client";
import Button from "../_utils/components/common/Button";
import { useEffect, useState } from "react";
import Typography from "../_utils/components/common/Typography";

const Svg = ({ shape }: { shape: number | null }) => {
  if (shape === null) return null;
  return shape === 1 ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className="w-16 h-16 text-green-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      className="w-16 h-16 text-red-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

export default function Page() {
  const [player, setPlayer] = useState<null | number>(null);
  const [score, setScore] = useState([0, 0]);
  const initialState = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  const [data, setData] = useState(initialState);

  const createData = (field: string, player: number | null) => {
    const [index1, index2]: number[] = field.split("-").map((a) => Number(a));
    if (data[index1][index2] !== null) {
      return;
    }
    setData((prev) => {
      return prev.map((a: any, i) => {
        if (i === index1) {
          a[index2] = player;
        }
        return a;
      });
    });
  };

  const startGame = () => {
    setPlayer(1);
  };

  const isWin = (pattern: number) => {
    if (
      data[0].every((a) => a === pattern) ||
      data[1].every((a) => a === pattern) ||
      data[2].every((a) => a === pattern)
    ) {
      return true;
    }

    if (
      data[0][0] === pattern &&
      data[1][0] === pattern &&
      data[2][0] === pattern
    ) {
      return true;
    }

    if (
      data[0][1] === pattern &&
      data[1][1] === pattern &&
      data[2][1] === pattern
    ) {
      return true;
    }
    if (
      data[0][2] === pattern &&
      data[1][2] === pattern &&
      data[2][2] === pattern
    ) {
      return true;
    }

    if (
      data[0][0] === pattern &&
      data[1][1] === pattern &&
      data[2][2] === pattern
    ) {
      return true;
    }

    if (
      data[0][2] === pattern &&
      data[1][1] === pattern &&
      data[2][0] === pattern
    ) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (player !== null) {
      if (isWin(player)) {
        alert(`${player ? 1 : 2} is winner.`);
        setData(initialState);
        setPlayer(null);
      } else {
        setPlayer(player === 1 ? 2 : 1);
      }
    }
  }, [data]);

  return (
    <div>
      <Typography element="h2">Tic Ta Toe</Typography>
      <div className="flex [&>*]:w-1/2 gap-2 mt-5">
        <Button>
          <span className={`${player === 1 ? "text-green-500" : "text-white"}`}>
            Player 1 : {score[0]}
          </span>
        </Button>
        <Button>
          <span className={`${player === 2 ? "text-green-500" : "text-white"}`}>
            Player 2 : {score[1]}
          </span>
        </Button>
      </div>
      <div className="flex flex-wrap  border mt-5">
        <div
          onClick={() => {
            createData("0-0", player);
          }}
          className="h-[100px] flex justify-center items-center text-white w-1/3 border"
        >
          <Svg shape={data[0][0]} />
        </div>
        <div
          onClick={() => {
            createData("0-1", player);
          }}
          className="h-[100px] flex justify-center items-center w-1/3 border"
        >
          <Svg shape={data[0][1]} />
        </div>
        <div
          onClick={() => {
            createData("0-2", player);
          }}
          className="h-[100px] flex justify-center items-center w-1/3 border"
        >
          <Svg shape={data[0][2]} />
        </div>
        <div
          onClick={() => {
            createData("1-0", player);
          }}
          className="h-[100px] flex justify-center items-center w-1/3 border"
        >
          <Svg shape={data[1][0]} />
        </div>
        <div
          onClick={() => {
            createData("1-1", player);
          }}
          className="h-[100px] flex justify-center items-center w-1/3 border"
        >
          <Svg shape={data[1][1]} />
        </div>
        <div
          onClick={() => {
            createData("1-2", player);
          }}
          className="h-[100px] flex justify-center items-center w-1/3 border"
        >
          <Svg shape={data[1][2]} />
        </div>
        <div
          onClick={() => {
            createData("2-0", player);
          }}
          className="h-[100px] flex justify-center items-center w-1/3 border"
        >
          <Svg shape={data[2][0]} />
        </div>
        <div
          onClick={() => {
            createData("2-1", player);
          }}
          className="h-[100px] flex justify-center items-center w-1/3 border"
        >
          <Svg shape={data[2][1]} />
        </div>
        <div
          onClick={() => {
            createData("2-2", player);
          }}
          className="h-[100px] flex justify-center items-center w-1/3 border"
        >
          <Svg shape={data[2][2]} />
        </div>
      </div>
      <div className="flex [&>*]:w-1/2 gap-2 mt-5">
        <Button onClick={startGame}>Start Game</Button>
        <Button onClick={startGame}>Restart Game</Button>
      </div>
    </div>
  );
}
