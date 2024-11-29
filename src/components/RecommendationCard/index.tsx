import React from 'react';
import {Icon} from "@iconify/react";
import Badge from "../Badge";
import ValueScore from "../ValueScore";

interface IProps {
  onClick?: () => void
  archived?: boolean
}

function RecommendationCard({onClick, archived}: IProps) {
  return (
    <button
      onClick={onClick}
      className="text-left flex gap-4 shadow hover:shadow-xl apply-transition bg-white rounded-xl overflow-hidden items-stretch"
    >
      <div>
        <div
          className={`${archived ? "bg-slate-300" : "bg-primary"} text-white flex items-center justify-center h-full w-36`}>
          <Icon icon="octicon:package-16" width="32" height="32"/>
        </div>
      </div>
      <div className="flex-1 p-4">
        <div className="flex items-center">
          <h5 className="font-semibold flex-1">Linux VMs best practices</h5>
          <div className="flex flex-wrap gap-2 text-slate-500">
            <Icon icon="bxl:google-cloud" width="24" height="24"/>
            <Icon icon="mdi:aws" width="24" height="24"/>
            <Icon icon="lineicons:azure" width="24" height="24"/>
          </div>
        </div>
        <p className="line-clamp-3">
          Duis luctus non eros sed aliquam. Phasellus imperdiet aliquet suscipit. Suspendisse
          pellentesque tellus vel enim consequat pulvinar. Fusce faucibus aliquet nulla non
          dignissim. Quisque tincidunt nec nulla vel tristique. Cras rutrum massa elementum ligula
          laoreet, at faucibus neque imperdiet. Morbi rhoncus porta velit non finibus. Sed enim
          purus, aliquet vel justo sed, pulvinar ultrices enim. Donec non mollis nisl, vitae
          accumsan nunc. Nunc pharetra aliquet turpis, sed pretium mi viverra sit amet. Nulla
          lobortis, turpis non fermentum convallis, quam nibh mattis nisl, eget sodales justo orci
          ut orci. Cras eget eros lobortis nibh ultricies ultrices id in odio. Proin blandit
          ullamcorper sem. Praesent sed tristique elit. Maecenas efficitur nec orci ac malesuada.
        </p>
        <div className="flex gap-2 flex-wrap mt-4">
          <Badge text="CIS Cloud"/>
          <Badge text="CIS Cloud"/>
          <Badge text="CIS Cloud"/>
          <Badge text="CIS Cloud"/>
          <Badge text="+5"/>
        </div>
      </div>
      <div className="p-3">
        <div className="bg-zinc-100 rounded-md text-center p-5 h-full flex flex-col justify-center">
          <h6 className="font-semibold">Impact assessment</h6>
          <p className="text-slate-500">~115 violations / month</p>
          <hr className='my-3'/>
          <div className="flex gap-3 justify-center items-center">
            <p className="font-semibold">Value score</p>
            <ValueScore score={3}/>
          </div>
        </div>
      </div>
    </button>
  );
}

export default RecommendationCard;
