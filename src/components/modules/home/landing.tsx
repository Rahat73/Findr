import { Input } from "@nextui-org/input";
import React from "react";
import { SearchIcon } from "../../icons";

const Landing = () => {
  return (
    <div className="bg-[url('/lost-wallet.webp')] h-screen bg-cover">
      <div className="pt-32 max-w-xl flex-1 mx-auto">
        <form className="flex-1">
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-default-100",
              input: "text-sm",
            }}
            placeholder="Search..."
            size="lg"
            startContent={
              <SearchIcon className="pointer-events-none flex-shrink-0 text-base text-default-400" />
            }
            type="text"
          />
        </form>
      </div>
    </div>
  );
};

export default Landing;
