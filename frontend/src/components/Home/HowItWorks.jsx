
import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobZee Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
              Sign up and create your account to unlock opportunities and connect with potential employers or candidates.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
              Discover available job opportunities or advertise openings that match your needs. Whether you're searching for a new role or looking to hire, find the perfect match here.

              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
              Apply for jobs that align with your skills and career goals. Or, if you're an employer, recruit suitable candidates who meet your requirements and fit your company culture.

</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
