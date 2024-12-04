import React from 'react';
import Container from "../../components/Container";
import {Link} from "react-router-dom";
import {Button} from "../../components/ui/button";

interface IProps {
  title: string;
}

function DashboardPage({title}: IProps) {
  return (
    <Container>
      <h2>{title}</h2>

      <div className="mt-6">
        <Button size="lg" asChild>
          <Link to="/recommendations">
            See all recommendations
          </Link>
        </Button>
      </div>
    </Container>
  );
}

export default DashboardPage;
