import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("constructor");
  }

  componentDidMount() {
    // This is the best place to make API calls
    console.log("Component is Mounted");
  }

  render() {
    console.log("render");
    return (
      <>
        <div>
          <h2>This is Profile Class Section </h2>
          <p>Name here is : {this.props.naam} </p>
          <p>Count of Class is : {this.state.count}</p>
          <button
            onClick={() => {
              if (this.state.count === 0) this.setState({ count: 1 });
              if (this.state.count === 1) this.setState({ count: 0 });
            }}
          >
            Change Count
          </button>
        </div>
        <br />
        <br />
      </>
    );
  }
}

export default ProfileClass;
