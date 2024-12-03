import React from 'react';
import Container from "../../components/Container";
import {Link} from "react-router-dom";
import Button from "../../components/Button";

interface IProps {
  title: string;
}

function DashboardPage({title}: IProps) {
  return (
    <Container>
      <h2>{title}</h2>

      <div className="mt-6">
        <Link to="/recommendations">
          <Button>
            See all recommendations
          </Button>
        </Link>
      </div>
    </Container>
  );
}

export default DashboardPage;
