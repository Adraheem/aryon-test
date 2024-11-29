import React, {useMemo, useState} from 'react';
import Container from "../../components/Container";
import RecommendationCard from "../../components/RecommendationCard";
import Modal from "../../components/Modal";
import RecommendationDetail from "./detail";
import recommendationService from "../../services/recommendation.service";
import {Recommendation, RecommendationsDataResponse} from "../../types";
import Button from "../../components/Button";
import {Icon} from "@iconify/react";
import {Link} from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import {InfiniteData, useInfiniteQuery} from "@tanstack/react-query";
import TextInput from "../../components/TextInput";

interface IProps {
  archived?: boolean;
}

function RecommendationsPage({archived}: IProps) {
  const [search, setSearch] = useState("");
  const [activeRecommendation, setActiveRecommendation] = useState<Recommendation | undefined>();

  const {
    data, fetchNextPage, hasNextPage
  } = useInfiniteQuery<RecommendationsDataResponse, Error, InfiniteData<RecommendationsDataResponse, unknown>, string[], string>({
      queryKey: ["recommendations", (archived ? "archived" : "unarchived"), search],
      queryFn: ({pageParam}) => recommendationService.getRecommendations({
        archive: archived,
        cursor: pageParam,
        search,
      }),
      retry: 0,
      refetchInterval: false,
      refetchOnWindowFocus: false,
      getNextPageParam: (lastPage) => lastPage.pagination.cursor.next ?? undefined,
      initialPageParam: "",
    }
  );

  const flatData = useMemo(() => {
    if (data) {
      return data.pages.reduce<Recommendation[]>((newArr, p) => newArr.concat(p.data.slice(1)), []);
    }
    return [];
  }, [data]);

  const closeModal = () => {
    setActiveRecommendation(undefined);
  }

  return (
    <Container>
      <div className="flex items-center mb-10">
        <h4>Recommendations</h4>
        {
          !archived && (
            <div className="ml-auto">
              <Link to="/recommendations/archive">
                <Button variant="GHOST" type="button">
                  <Icon icon="f7:archivebox" width={20} height={20}/>
                  <span>Archive</span>
                </Button>
              </Link>
            </div>
          )
        }
      </div>

      <div className="my-10 flex justify-between flex-wrap items-center">
        <div className="w-full max-w-sm">
          <TextInput
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search"
          />
        </div>
        <p className="text-slate-500">
          Showing {flatData.length} of {data?.pages[0]?.pagination.totalItems ?? 0}
        </p>
      </div>

      <InfiniteScroll
        dataLength={data?.pages[0]?.pagination.totalItems ?? 0}
        next={fetchNextPage}
        hasMore={hasNextPage ?? false}
        scrollThreshold="600px"
        loader={<p className="small text-center mt-8 text-slate-500">Loading...</p>}
        endMessage={
          <p className="small text-center mt-8 text-slate-500">No more recommendations</p>
        }
      >
        <div className="grid gap-4">
          {
            flatData.map(recommendation => (
              <RecommendationCard
                key={recommendation.recommendationId}
                data={recommendation}
                onClick={() => setActiveRecommendation(recommendation)}
                archived={archived}
              />
            ))
          }
        </div>
      </InfiniteScroll>
      <Modal isOpen={!!activeRecommendation} onClose={closeModal}>
        <RecommendationDetail data={activeRecommendation} onClose={closeModal} archived={archived}/>
      </Modal>
    </Container>
  );
}

export default RecommendationsPage;
