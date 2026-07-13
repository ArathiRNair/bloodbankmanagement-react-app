import React from 'react'
import NavigationBar from './NavigationBar'

const Home = () => {
  return (
    <div>
        <NavigationBar/>
    <div className="container mt-5">
      <div className="row">
        <div className="col col-12 text-center">
          <h1 className="text-danger">Blood Donation Management System</h1>
          <p className="lead">
            Donate Blood, Save Lives.
          </p>
          <hr />
        </div>
      </div>

      <div className="row mt-4 g-4">
        <div className="col col-12 col-md-4">
          <div className="card shadow">
            <div className="card-body text-center">
              <h4 className="card-title text-primary">Add Donor</h4>
              <p className="card-text">
                Register a new blood donor with personal and blood group details.
              </p>
            </div>
          </div>
        </div>

        <div className="col col-12 col-md-4">
          <div className="card shadow">
            <div className="card-body text-center">
              <h4 className="card-title text-success">View Donors</h4>
              <p className="card-text">
                View the list of registered donors and their information.
              </p>
            </div>
          </div>
        </div>

        <div className="col col-12 col-md-4">
          <div className="card shadow">
            <div className="card-body text-center">
              <h4 className="card-title text-warning">Search Blood</h4>
              <p className="card-text">
                Find donors based on blood group and location quickly.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col col-12 text-center">
          <h5 className="text-secondary">
            Every blood donor is a lifesaver ❤️
          </h5>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home