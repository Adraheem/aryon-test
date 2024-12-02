import React, {useEffect, useState} from 'react';
import TextInput from "../../components/TextInput";
import Tippy from "@tippyjs/react";
import Button from "../../components/Button";
import FilterTags from "./filterTags";

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
        <TextInput
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search"
        />
      </div>
      <div>
        <Tippy
          content={<FilterTags/>}
          theme="light"
          placement="bottom-start"
          role="dropdown"
          className=""
          interactive={true}
          animation="shift-toward"
          trigger="click"
        >
          <Button>Filter</Button>
        </Tippy>
      </div>
    </div>
  );
}

export default RecommendationsFilter;
