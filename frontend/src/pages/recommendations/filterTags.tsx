import React, {useEffect, useMemo, useState} from 'react';
import {AvailableTags} from "../../types";
import recommendationService from "../../services/recommendation.service";
import utils from "../../utils";
import useFilterContext from "../../context/filterContext/hook";
import {Input} from "../../components/ui/input";
import {Button} from "../../components/ui/button";
import {Checkbox} from "../../components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion"


interface IProps {
}

function FilterTags(props: IProps) {
  const [availableTags, setAvailableTags] = useState<AvailableTags>();
  const [search, setSearch] = useState("");
  const {tags: checked, setTags: setChecked} = useFilterContext();

  useEffect(() => {
    if (!availableTags) {
      recommendationService.getRecommendations({limit: 0})
        .then(res => {
          setAvailableTags(res.availableTags)
        })
        .catch(err => {
          utils.handleError(err);
        })
    }
  }, [availableTags]);

  const filteredAvailableTags: AvailableTags | undefined = useMemo(() => {
    if (!!availableTags) {
      if (search.length === 0) {
        return availableTags
      } else {
        const filterValues = (values: string[]) =>
          values.filter((value) =>
            value.toLowerCase().includes(search.toLowerCase())
          );

        return {
          classes: filterValues(availableTags.classes),
          frameworks: filterValues(availableTags.frameworks),
          providers: filterValues(availableTags.providers),
          reasons: filterValues(availableTags.reasons),
        };
      }
    }
    return undefined;
  }, [availableTags, search])

  const toggleCheck = (tag: string) => {
    if (checked.includes(tag)) {
      setChecked(prev => prev.filter(t => t !== tag));
    } else {
      setChecked(prev => [...prev, tag])
    }
  }

  return (
    <div>
      <p className="small">Filter ({checked.length} applied)</p>
      <div className="my-2">
        <Input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder='Search tags'
        />
      </div>

      {
        !!filteredAvailableTags ? (
            <div className="max-h-60 overflow-y-auto">
              <Accordion
                type="multiple"
                defaultValue={Object.keys(filteredAvailableTags).map(t => `entry-${t}`)}
              >
                {Object.entries(filteredAvailableTags).map((entry: [string, string[]]) => (
                  <AccordionItem key={`entry-${entry[0]}`} value={`entry-${entry[0]}`}>
                    <AccordionTrigger
                      className="capitalize p"
                    >
                      {entry[0]} ({entry[1].length})
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid gap-2">
                        {
                          entry[1].map((tag, index) => (
                            <div key={`tag-${entry[0]}-${index}`} data-testid={tag}
                                 className="flex items-center space-x-2">
                              <Checkbox id={`tag-${entry[0]}-${index}`}
                                        checked={checked.includes(tag)}
                                        onCheckedChange={() => toggleCheck(tag)}/>
                              <label
                                htmlFor={`tag-${entry[0]}-${index}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {tag}
                              </label>
                            </div>
                          ))
                        }
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )
          :
          (
            <p>No tags</p>
          )
      }
      <hr className="my-2"/>
      <Button
        className="w-full"
        variant="ghost"
        onClick={() => setChecked([])}
      >
        Clear filters
      </Button>
    </div>
  );
}

export default FilterTags;
