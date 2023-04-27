import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";
import React from "react";

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

function ActionButton({children, setSelectedPage}: Props) {
  return (
    <AnchorLink
    className="rounded-md bg-primary-500 text-white px-10 py-2  hover:bg-gray-100 hover:text-black"
    onClick={() => setSelectedPage(SelectedPage.Contato)}
    href={`#${SelectedPage.Contato}`}>
        {children}
    </AnchorLink>
  )
}

export default ActionButton