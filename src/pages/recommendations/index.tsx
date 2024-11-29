import React, {useState} from 'react';
import Container from "../../components/Container";
import RecommendationCard from "../../components/RecommendationCard";
import Modal from "../../components/Modal";
import RecommendationDetail from "./detail";

interface IProps {
}

function RecommendationsPage(props: IProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <Container>
      <h3>Recommendations</h3>

      <div className="grid gap-4">
        <RecommendationCard onClick={() => setModalIsOpen(true)}/>
        <RecommendationCard/>
        <RecommendationCard archived/>
        <RecommendationCard/>
      </div>
      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <RecommendationDetail/>
      </Modal>
    </Container>
  );
}

export default RecommendationsPage;
