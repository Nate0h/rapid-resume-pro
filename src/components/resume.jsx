import { useState } from "react";
import "../Resume.css";
import email from "../assets/email.png";
import phone from "../assets/phone.png";
import address from "../assets/address.png";

function Resume({
  personalDetails,
  educationHistory,
  experienceHistory,
  skillsList,
}) {
  return (
    <div className="displayResume">
      <div className="header">
        <h1>{personalDetails.fullName}</h1>
        <div className="contactDetails">
          <div className="contactInfo">
            <img src={email} alt="" />
            <div>{personalDetails.email}</div>
          </div>

          <div className="contactInfo">
            <img src={phone} alt="" />
            <span>{personalDetails.phone}</span>
          </div>
          <div className="contactInfo">
            <img src={address} alt="" />
            <span>{personalDetails.address}</span>
          </div>
        </div>
      </div>
      <h2 className="sectionHeader">About Me</h2>
      <div className="aboutMeContainer">
        <p className="aboutMeText">{personalDetails.aboutMe}</p>
      </div>
      <h2 className="sectionHeader">Education</h2>
      {educationHistory.map((education) => {
        return (
          <div key={education.id}>
            <DisplayEducation education={education} />
          </div>
        );
      })}
      <h2 className="sectionHeader">Experience</h2>
      {experienceHistory.map((experience) => {
        return (
          <div key={experience.id}>
            <DisplayExperience experience={experience} />
          </div>
        );
      })}
      <h2 className="sectionHeader">Skills and Technologies</h2>
      <div className="skillSection">
        {skillsList.map((skill) => {
          return (
            <div className="skill" key={skill.id}>
              {skill.skill}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function DisplayEducation({ education }) {
  return (
    <>
      <div className="educationContainer">
        <div>
          <div>
            {education.start} - {education.end}
          </div>
          <div>{education.location}</div>
        </div>

        <div>
          <div>
            <b>{education.school}</b>
          </div>
          <div>
            <i>{education.degree}</i>
          </div>
        </div>
      </div>
    </>
  );
}

function DisplayExperience({ experience }) {
  return (
    <>
      <div className="experienceContainer">
        <div>
          <div>
            {experience.start} - {experience.end}
          </div>
          <div>{experience.location}</div>
        </div>

        <div className="experienceContent">
          <div>
            <b>{experience.company}</b>
          </div>
          <div>
            <i>{experience.position}</i>
          </div>
          <div>{experience.description}</div>
        </div>
      </div>
    </>
  );
}

export default Resume;
