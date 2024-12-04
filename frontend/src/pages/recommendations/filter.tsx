import React, {useEffect, useState} from 'react';
import FilterTags from "./filterTags";
import {Input} from "../../components/ui/input";
import {Popover, PopoverContent, PopoverTrigger,} from "../../components/ui/popover"
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
        <Popover>
          <PopoverTrigger asChild><Button variant="default">Filter</Button></PopoverTrigger>
          <PopoverContent><FilterTags/></PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

export default RecommendationsFilter;
