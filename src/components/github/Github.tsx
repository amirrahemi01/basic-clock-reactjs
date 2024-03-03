import React from "react";

import { FaGithub } from "react-icons/fa6";

type Props = {};

const Github = (props: Props) => {
  return (
    <a
      target="_blank"
      href="https://github.com/amirrahemi01/basic-clock-reactjs"
      className="text-white text-2xl md:text-4xl absolute top-0 m-12 transition hover:scale-150"
    >
      <FaGithub />
    </a>
  );
};

export default Github;
