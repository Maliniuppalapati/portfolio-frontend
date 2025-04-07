import React, { useState, useEffect } from "react";
import "./projects.css";
import Header from "./header"; // Importing Header

const Projects = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({ Name: "", Domain: "", Duration: "", Date: "", GitHub: "" });
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("projects")) || [];
    setEntries(savedEntries);
  }, []);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(entries));
  }, [entries]);

  const handleChange = (e) => {
    setNewEntry({ ...newEntry, [e.target.name]: e.target.value });
  };

  const addEntry = () => {
    if (Object.values(newEntry).some((val) => val.trim() === "")) return;

    if (editIndex !== null) {
      const updatedEntries = [...entries];
      updatedEntries[editIndex] = newEntry;
      setEntries(updatedEntries);
      setEditIndex(null);
    } else {
      setEntries([...entries, newEntry]);
    }

    setNewEntry({ Name: "", Domain: "", Duration: "", Date: "", GitHub: "" });
    setSuccessMessage("Entry saved successfully!");
    setTimeout(() => setSuccessMessage(""), 2000);
  };

  const removeEntry = (index) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  const editEntry = (index) => {
    setNewEntry(entries[index]);
    setEditIndex(index);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const sortEntries = (key) => {
    setSortBy(key);
    const sortedEntries = [...entries].sort((a, b) => a[key].localeCompare(b[key]));
    setEntries(sortedEntries);
  };

  const filteredEntries = entries.filter((entry) =>
    Object.values(entry).some((val) => val.toLowerCase().includes(search))
  );

  return (
    <div>
      <Header />
      <div className="container">
        <h1>Projects</h1>

        {successMessage && <div className="success-message">{successMessage}</div>}

        <input
          type="text"
          placeholder="Search Projects"
          onChange={handleSearch}
          className="search-input"
        />

        <div className="sort-buttons">
          <button onClick={() => sortEntries("Name")}>Sort by Name</button>
          <button onClick={() => sortEntries("Domain")}>Sort by Domain</button>
        </div>

        <div className="form-container">
          {Object.keys(newEntry).map((field) => (
            <input
              key={field}
              name={field}
              placeholder={field}
              value={newEntry[field]}
              onChange={handleChange}
              className="input-field"
            />
          ))}
          <button onClick={addEntry} className="add-btn">
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>

        <div className="entries-container">
          {filteredEntries.map((entry, index) => (
            <div key={index} className="entry">
              {Object.keys(entry).map((field) => (
                <p key={field}><strong>{field}:</strong> {entry[field]}</p>
              ))}
              <button onClick={() => editEntry(index)} className="edit-btn">Edit</button>
              <button onClick={() => removeEntry(index)} className="delete-btn">Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
