import React from 'react';
import Badge from "../../components/Badge";
import {Icon} from "@iconify/react";
import Button from "../../components/Button";
import ValueScore from "../../components/ValueScore";

interface IProps {
}

function RecommendationDetail(props: IProps) {
  return (
    <div className="flex flex-col h-screen">
      <div className="p-10 flex-1 overflow-y-auto">
        <div className="flex gap-4 items-center">
          <div>
            <div
              className="h-16 w-16 bg-primary text-white flex items-center justify-center p-5 rounded-md">
              <Icon icon="tabler:packages" width="32" height="32"/>
            </div>
          </div>
          <div className="flex-1">
            <h5 className="font-semibold">Linux VMs best practices</h5>
            <div className="flex items-center gap-5">
              <div className="inline-flex gap-3 items-center">
                <p className="font-semibold">Value score</p>
                <ValueScore score={3}/>
              </div>

              <div className="inline-flex gap-1 items-center">
                <Icon icon="lineicons:azure" width="24" height="24"/>
                <p className="font-semibold">Azure Environment</p>
              </div>

            </div>
          </div>
          <div className="self-start">
            <Button variant="GHOST">
              <Icon icon="ic:sharp-close" width={24} height={24}/>
            </Button>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap mt-4">
          <Badge text="CIS Cloud"/>
          <Badge text="CIS Cloud"/>
          <Badge text="CIS Cloud"/>
          <Badge text="CIS Cloud"/>
          <Badge text="+5"/>
        </div>

        <hr className="my-5"/>

        <p>
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

        <div className="mt-6">
          <div className="flex items-center gap-2">
            <Icon icon="octicon:package-16" width={20} height={20}/>
            <h6 className="font-semibold">Resources enforced by policy</h6>
          </div>
          <div className="flex gap-2 flex-wrap mt-2">
            <Badge text="CIS Cloud"/>
            <Badge text="CIS Cloud"/>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-2">
            <Icon icon="octicon:package-16" width={20} height={20}/>
            <h6 className="font-semibold">Reasons</h6>
          </div>
          <div className="flex gap-2 flex-wrap mt-2">
            <Badge text="CIS Cloud"/>
            <Badge text="CIS Cloud"/>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-2 mb-2">
            <Icon icon="fe:bar-chart" width={20} height={20}/>
            <h6 className="font-semibold">Impact Assessment</h6>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-slate-200 bg-slate-100 rounded-lg p-5">
              <div className="flex items-center justify-between">
                <p>Overall</p>
                <Icon icon="ph:seal-warning" width={20} height={20}/>
              </div>
              <div className="flex items-center justify-between font-semibold mt-2">
                <h6>Violations</h6>
                <h6>210</h6>
              </div>
            </div>
            <div className="border border-slate-200 bg-slate-100 rounded-lg p-5">
              <div className="flex items-center justify-between">
                <p>Most impacted scope</p>
                <Icon icon="ph:seal-warning" width={20} height={20}/>
              </div>
              <div className="flex items-center justify-between font-semibold mt-2">
                <div>
                  <h6>Frontend</h6>
                  <p className="leading-none font-normal small text-slate-500">(Subscription)</p>
                </div>
                <h6>204</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-2 mb-2">
            <Icon icon="ph:book-open" width={20} height={20}/>
            <h6 className="font-semibold">Further Reading</h6>
          </div>
          <p>
            <a href="/" target="_blank" className="inline-flex items-center gap-3">
              <span>cisecurity.org</span>
              <Icon icon="heroicons-outline:external-link" width={18} height={18}/>
            </a>
          </p>
        </div>
      </div>

      <hr/>

      <div className="flex justify-end items-center gap-4 p-5">
        <Button variant="GHOST">
          <Icon icon="f7:archivebox" width={20} height={20}/>
          <span>Archive</span>
        </Button>
        <Button>Configure Policy</Button>
      </div>
    </div>
  );
}

export default RecommendationDetail;
