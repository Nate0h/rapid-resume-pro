import { useState } from "react";
import PersonalDetails from "./components/personalDetails.jsx";
import Education from "./components/education.jsx";
import Experience from "./components/experience.jsx";
import Skills from "./components/skills.jsx";
import Resume from "./components/resume.jsx";
import "./App.css";

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    aboutMe: "",
  });

  const [educationHistory, setEducationHistory] = useState([]);
  const [experienceHistory, setExperienceHistory] = useState([]);
  const [skillsList, setSkillList] = useState([]);
  return (
    <div className="app">
      <header>Rapid Resume Pro</header>
      <main className="mainContent">
        <aside className="editResume">
          <PersonalDetails
            personalDetails={personalDetails}
            setPersonalDetails={setPersonalDetails}
          />
          <Education
            educationHistory={educationHistory}
            setEducationHistory={setEducationHistory}
          />
          <Experience
            experienceHistory={experienceHistory}
            setExperienceHistory={setExperienceHistory}
          />
          <Skills skillsList={skillsList} setSkillList={setSkillList} />
        </aside>

        <div className="Resume">
          <Resume
            personalDetails={personalDetails}
            educationHistory={educationHistory}
            experienceHistory={experienceHistory}
            skillsList={skillsList}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
