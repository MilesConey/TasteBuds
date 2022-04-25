import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Alert } from 'reactstrap';

import { useAppSelector } from 'app/config/store';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <Row>
      <Col md="9">
        {account?.login ? (
          <div>
            <Alert color="success">Hey, {account.login}!</Alert>
          </div>
        ) : (
          <div className="card text-white bg-warning mb-3">
            <Alert color="warning">
              Click 
              <span>&nbsp;</span>
              <Link to="/login" className="alert-link">
              here
              </Link>
              {' '}
              to sign in.
            </Alert>

            <Alert color="warning">
              Don&apos;t have an account yet? Create one&nbsp; 
              <Link to="/account/register" className="alert-link">
                here!
              </Link>
            </Alert>
          </div>
        )}
      </Col>
      <Col md="3" className="pad">
      </Col>
    </Row>
  );
};

export default Home;
