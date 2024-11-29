import React, {useEffect, useState} from 'react';
import Container from "../../components/Container";
import RecommendationCard from "../../components/RecommendationCard";
import Modal from "../../components/Modal";
import RecommendationDetail from "./detail";
import recommendationService from "../../services/recommendation.service";
import {Recommendation} from "../../types";
import Button from "../../components/Button";
import {Icon} from "@iconify/react";
import {Link} from "react-router-dom";

interface IProps {
  archived?: boolean;
}

function RecommendationsPage({archived}: IProps) {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [activeRecommendation, setActiveRecommendation] = useState<Recommendation | undefined>();

  const closeModal = () => {
    setActiveRecommendation(undefined);
  }

  useEffect(() => {
    recommendationService.getRecommendations({archive: archived})
      .then(res => {
        setRecommendations(res.data);
      })
      .catch(err => {
      })
  }, [archived]);

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

      <div className="grid gap-4">
        {
          recommendations.map(recommendation => (
            <RecommendationCard
              key={recommendation.recommendationId}
              data={recommendation}
              onClick={() => setActiveRecommendation(recommendation)}
              archived={archived}
            />
          ))
        }
      </div>
      <Modal isOpen={!!activeRecommendation} onClose={closeModal}>
        <RecommendationDetail data={activeRecommendation} onClose={closeModal} archived={archived}/>
      </Modal>
    </Container>
  );
}

export default RecommendationsPage;
