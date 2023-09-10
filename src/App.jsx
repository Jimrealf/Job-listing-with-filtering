import { useState } from "react";
import "./App.css";
import data from "./data.json";
import Listings from "./Listings";
import Filters from "./Filters";
import webBg from "/images/bg-header-desktop.svg";
import mobileBg from "/images/bg-header-mobile.svg";

function App() {
  const [filters, setFilters] = useState([]);
  const [jobs, setJobs] = useState(data);

  const handleClick = (filter) => {
    if (!filters.includes(filter)) {
      setFilters([...filters, filter]);
    }
  };

  const removeFilter = (filterToRemove) => {
    const updatedFilters = filters.filter(
      (filter) => filter !== filterToRemove
    );
    setFilters(updatedFilters);
  };

  const reset = () => {
    setFilters([]);
  };

  const filteredJobs = jobs.filter((job) => {
    return filters.every((filter) => {
      return (
        job.role === filter ||
        job.level === filter ||
        job.languages.includes(filter) ||
        job.tools.includes(filter)
      );
    });
  });

  return (
    <main>
      <div className="container">
        <header>
          <picture>
            <source media="(max-width: 720px)" srcSet={mobileBg} />
            <img className="img-header" src={webBg} alt="header background" />
          </picture>
        </header>
        {filters.length > 0 ? (
          <div className="filters slide-in">
            <Filters
              filters={filters}
              reset={reset}
              removeFilter={removeFilter}
            />
          </div>
        ) : null}

        <section className="content-body">
          <Listings
            data={filteredJobs}
            filters={filters}
            handleClick={handleClick}
          />
        </section>
      </div>
    </main>
  );
}

export default App;
