import { useState } from "react";

function Skills({ skillsList, setSkillList }) {
  const [showForm, setShowForm] = useState(false);
  const [id, setId] = useState(0);
  const [editId, setEditId] = useState(-1);

  const [skill, setAddSkill] = useState({
    skill: "",
  });

  const [editSkill, setEditSkill] = useState({
    skill: "",
  });

  const handleAddSkill = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("id");
    const fieldValue = event.target.value;

    const newSkill = { ...skill };
    newSkill[fieldName] = fieldValue;
    setAddSkill(newSkill);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("id");
    const fieldValue = event.target.value;

    const newSkill = { ...editSkill };
    newSkill[fieldName] = fieldValue;
    setEditSkill(newSkill);
  };

  const handleAddSkillSubmit = (event) => {
    event.preventDefault();
    setShowForm(!showForm);
    const newSkillEntry = {
      id: id,
      skill: skill.skill,
    };

    setSkillList([...skillsList, newSkillEntry]);
    setId(id + 1);
  };

  const handleEditClick = (event, skill) => {
    event.preventDefault();
    setEditId(skill.id);

    const editSkill = {
      skill: skill.skill,
    };

    setEditSkill(editSkill);
  };
  const handleEditFormSave = (event) => {
    event.preventDefault();
    const editedSkill = {
      id: editId,
      skill: editSkill.skill,
    };
    const editSkillList = [...skillsList];
    const index = skillsList.findIndex((skill) => skill.id === editId);

    editSkillList[index] = editedSkill;
    setSkillList(editSkillList);
    setEditId(-1);
  };
  const handleDeleteClick = (id) => {
    setSkillList(skillsList.filter((skill) => skill.id !== id));
  };

  const handleCancelClick = () => {
    setEditId(-1);
  };

  return (
    <div>
      <h2>Skills and Technologies</h2>
      <button onClick={() => setShowForm(!showForm)}> Add Skill </button>
      {showForm && (
        <SkillForm
          show={showForm}
          setShow={setShowForm}
          skill={handleAddSkill}
          submitSkill={handleAddSkillSubmit}
        />
      )}

      {skillsList.map((skill) => {
        return (
          <div key={skill.id}>
            {skill.id === editId ? (
              <form onSubmit={handleEditFormSave}>
                <EditEntry
                  cancelEdit={handleCancelClick}
                  editSkill={editSkill}
                  editFormChange={handleEditFormChange}
                />
              </form>
            ) : (
              <SkillEntry
                skill={skill}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function SkillForm({ show, setShow, skill, submitSkill }) {
  return (
    <div>
      <form onSubmit={submitSkill}>
        <label htmlFor="skill">Skill</label>
        <input
          onChange={skill}
          type="text"
          id="skill"
          placeholder="e.g ReactJS"
        />

        <div>
          <button onClick={() => setShow(!show)}> Cancel </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

function SkillEntry({ skill, handleEditClick, handleDeleteClick }) {
  return (
    <>
      <div>{skill.skill}</div>

      <div>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, skill)}
        >
          {" "}
          Edit{" "}
        </button>

        <button type="button" onClick={() => handleDeleteClick(skill.id)}>
          {" "}
          Delete{" "}
        </button>
      </div>
    </>
  );
}

function EditEntry({ cancelEdit, editSkill, editFormChange }) {
  return (
    <>
      <div>
        <input
          type="text"
          id="skill"
          value={editSkill.skill}
          onChange={editFormChange}
        />
      </div>

      <div>
        <button onClick={cancelEdit}>Cancel</button>

        <button type="submit">Save</button>
      </div>
    </>
  );
}
export default Skills;
