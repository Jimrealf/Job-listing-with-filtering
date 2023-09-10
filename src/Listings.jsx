import React from "react";

export default function Listings({ data, filters, handleClick }) {
  return (
    <div>
      {data.map((item, index) => (
        <List
          key={item.id}
          data={item}
          filters={filters}
          handleClick={handleClick}
          className={index < 2 ? "first-two-items" : ""}
        />
      ))}
    </div>
  );
}

function List({ data, filters, handleClick }) {
  const {
    company,
    logo,
    new: isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = data;

  return (
    <div className="list">
      <div className="left">
        <img className="logo" src={logo} alt={company} />
        <div className="list-content">
          <div className="top-left">
            <h1>{company}</h1>
            {isNew ? <p className="is-new"> New!</p> : null}
            {featured ? <p className="feature">Featured</p> : null}
          </div>
          <div className="middle-left">
            <h2>{position}</h2>
          </div>
          <div className="bottom-left">
            <p>{postedAt}</p>
            <p className="dot"></p>
            <p>{contract}</p>
            <p className="dot"></p>
            <p>{location}</p>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="middle-right">
          <button onClick={() => handleClick(role)}>{role}</button>
          <button onClick={() => handleClick(level)}>{level}</button>
          <p className="languages">
            {languages.map((language, index) => (
              <button key={index} onClick={() => handleClick(language)}>
                {language}
              </button>
            ))}
          </p>
          {tools.length > 0 ? (
            <p className="tools">
              {tools.map((tool, index) => (
                <button key={index} onClick={() => handleClick(tool)}>
                  {tool}
                </button>
              ))}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
