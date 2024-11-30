import React, {useCallback} from 'react';
import Badge from "../../components/Badge";
import {Icon} from "@iconify/react";
import Button from "../../components/Button";
import ValueScore from "../../components/ValueScore";
import {Recommendation} from "../../types";
import ProviderIcon from "../../components/ProviderIcon";
import recommendationService from "../../services/recommendation.service";
import toast from "react-hot-toast";
import {providers} from "../../assets/data";

interface IProps {
  data?: Recommendation;
  onClose?: () => void;
  archived?: boolean;
}

function RecommendationDetail({data, onClose, archived}: IProps) {
  const toggleArchive = useCallback(() => {
    if (!data?.recommendationId) return;

    const action = archived ? recommendationService.unarchive : recommendationService.archive;
    action(data?.recommendationId)
      .then(res => {
        toast.success(archived ? "Post unarchived successfully" : "Post archived successfully");
        onClose && onClose();
      })
      .catch(err => {
        toast.error(err?.response?.data?.error ?? err?.message ?? "An error occurred")
      })
  }, [archived, data?.recommendationId, onClose]);

  if (!data) return null;

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
            <h5 className="font-semibold">{data.title}</h5>
            <div className="flex items-center gap-5">
              <div className="inline-flex gap-3 items-center">
                <p className="font-semibold">Value score</p>
                <ValueScore score={Math.floor(data.score / 100 * 4)}/>
              </div>

              {
                data.provider.map((provider, idx) => (
                  <div key={idx} className="inline-flex gap-1 items-center">
                    <ProviderIcon cloudProvider={provider}/>
                    <p className="font-semibold">{providers.get(provider)}</p>
                  </div>
                ))
              }

            </div>
          </div>
          <div className="self-start">
            <Button variant="GHOST" onClick={onClose}>
              <Icon icon="ic:sharp-close" width={24} height={24}/>
            </Button>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap mt-4">
          {
            data.frameworks.map((framework, idx) => (
              <Badge key={`framework-${idx}`} text={framework.name}/>
            ))
          }
        </div>

        <hr className="my-5"/>

        <p>
          {data.description}
        </p>

        <div className="mt-6">
          <div className="flex items-center gap-2">
            <Icon icon="octicon:package-16" width={20} height={20}/>
            <h6 className="font-semibold">Resources enforced by policy</h6>
          </div>
          <div className="flex gap-2 flex-wrap mt-2">
            {
              data.affectedResources.map((resource, idx) => (
                <Badge key={`resource-${idx}`} text={resource.name}/>
              ))
            }
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-2">
            <Icon icon="octicon:package-16" width={20} height={20}/>
            <h6 className="font-semibold">Reasons</h6>
          </div>
          <div className="flex gap-2 flex-wrap mt-2">
            {
              data.reasons.map((reason, idx) => (
                <Badge key={`reason-${idx}`} text={reason}/>
              ))
            }
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
                <h6>{data.totalHistoricalViolations}</h6>
              </div>
            </div>
            <div className="border border-slate-200 bg-slate-100 rounded-lg p-5">
              <div className="flex items-center justify-between">
                <p>Most impacted scope</p>
                <Icon icon="ph:seal-warning" width={20} height={20}/>
              </div>
              <div className="flex items-center justify-between font-semibold mt-2">
                <div>
                  <h6>{data.impactAssessment.mostImpactedScope.name}</h6>
                  <p
                    className="leading-none font-normal small text-slate-500">({data.impactAssessment.mostImpactedScope.type})</p>
                </div>
                <h6>{data.impactAssessment.mostImpactedScope.count}</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-2 mb-2">
            <Icon icon="ph:book-open" width={20} height={20}/>
            <h6 className="font-semibold">Further Reading</h6>
          </div>
          {
            data.furtherReading.map((reading, idx) => (
              <p key={idx}>
                <a
                  href={reading.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3"
                >
                  <span>{reading.name}</span>
                  <Icon icon="heroicons-outline:external-link" width={18} height={18}/>
                </a>
              </p>
            ))
          }
        </div>
      </div>

      <hr/>

      <div className="flex justify-end items-center gap-4 p-5">
        <Button variant="GHOST" type="button" onClick={toggleArchive}>
          <Icon icon="f7:archivebox" width={20} height={20}/>
          <span>{archived ? "Unarchive" : "Archive"}</span>
        </Button>
        <Button>Configure Policy</Button>
      </div>
    </div>
  );
}

export default RecommendationDetail;
