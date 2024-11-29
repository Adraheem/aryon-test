import React from 'react';
import Container from "../../components/Container";
import RecommendationCard from "../../components/RecommendationCard";

interface IProps {
}

function RecommendationsPage(props: IProps) {
  return (
    <Container>
      <h3>Recommendations</h3>

      <div className="grid gap-4">
        <RecommendationCard/>
        <RecommendationCard/>
        <RecommendationCard/>
        <RecommendationCard/>
      </div>
    </Container>
  );
}

export default RecommendationsPage;
