import React, {useEffect, useState} from 'react';
import Tippy from "@tippyjs/react";
import FilterTags from "./filterTags";
import {Input} from "../../components/ui/input";
import {Button} from "../../components/ui/button";

interface IProps {
  setDebouncedTerm: (e: string) => void
}

function RecommendationsFilter({setDebouncedTerm}: IProps) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(search);
    }, 3000);

    return () => clearTimeout(timer);
  }, [search, setDebouncedTerm]);

  return (
    <div className="flex-1 flex gap-4 items-center">
      <div className="w-full max-w-sm">
        <Input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search"
        />
      </div>
      <div>
        <Tippy
          content={<FilterTags/>}
          theme="dark"
          placement="bottom-start"
          role="dropdown"
          className=""
          interactive={true}
          animation="shift-toward"
          trigger="click"
        >
          <Button variant="default">Filter</Button>
        </Tippy>
      </div>
    </div>
  );
}

export default RecommendationsFilter;
