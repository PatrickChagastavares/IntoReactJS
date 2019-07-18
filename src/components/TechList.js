import React, { Component } from "react";

import TechItem from "./TechItem";

class TechList extends Component {
  state = {
    NewTech: "",
    techs: ["node.js", "ReactJS", "React Native"]
  };

  handleInputChange = e => {
    this.setState({ NewTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      techs: [...this.state.techs, this.state.NewTech],
      NewTech: ""
    });
  };

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(Tec => Tec !== tech) });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.NewTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;
