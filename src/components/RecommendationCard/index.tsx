import React from 'react';
import {Icon} from "@iconify/react";
import Badge from "../Badge";
import ValueScore from "../ValueScore";
import {Recommendation} from "../../types";
import ProviderIcon from "../ProviderIcon";

interface IProps {
  onClick?: () => void
  archived?: boolean
  data: Recommendation
}

function RecommendationCard({onClick, archived, data}: IProps) {
  return (
    <button
      onClick={onClick}
      className="text-left flex gap-4 shadow hover:shadow-xl apply-transition bg-white rounded-xl overflow-hidden items-stretch"
    >
      <div>
        <div
          className={`${archived ? "bg-slate-300" : "bg-primary"} text-white flex items-center justify-center h-full w-12 md:w-36`}>
          <Icon icon="octicon:package-16" width="32" height="32"/>
        </div>
      </div>
      <div className="flex-1 py-4">
        <div className="flex items-center">
          <h5 className="font-semibold flex-1 line-clamp-2 h6 md:h5">{data.title}</h5>
          <div className="flex flex-wrap gap-2 text-slate-500">
            {
              data.provider.map((provider, idx) => (
                <ProviderIcon key={idx} cloudProvider={provider}/>
              ))
            }
          </div>
        </div>
        <p className="line-clamp-3">
          {data.description}
        </p>
        <div className="flex gap-2 flex-wrap mt-4">
          {
            data.frameworks.map((framework, idx) => (
              <Badge key={`framework-${idx}`} text={framework.name}/>
            ))
          }
        </div>
      </div>
      <div className="p-3">
        <div className="bg-zinc-100 rounded-md text-center p-3 md:p-5 h-full flex flex-col justify-center max-w-[150px] md:max-w-none">
          <h6 className="font-semibold p md:h6">Impact assessment</h6>
          <p className="text-slate-500">~{data.impactAssessment.totalViolations} violations /
            month</p>
          <hr className='my-3'/>
          <div className="flex flex-wrap flex-col md:flex-row gap-3 justify-center items-center">
            <p className="font-semibold">Value score</p>
            <ValueScore score={Math.floor(data.score / 100 * 4)}/>
          </div>
        </div>
      </div>
    </button>
  );
}

export default RecommendationCard;
