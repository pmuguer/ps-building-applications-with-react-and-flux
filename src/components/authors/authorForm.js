"use strict";

var React = require("react");

class AuthorForm extends React.Component {
    render() {
        return (
            <form>
                <h1>Manage author</h1>
                <label htmlFor="firstName">First Name</label>
                <input type="text"
                    name="firstName"
                    className="form-control"
                    placeholder="first Name"
                    ref="firstname"
                    value="" />
                <br />

                <label htmlFor="lastName">First Name</label>
                <input type="text"
                    name="lastName"
                    className="form-control"
                    placeholder="last Name"
                    ref="lastname"
                    value="" />
                <br />
                
                <input type="submit" value="Save" className="btn btn default" />
            </form>
        );
    }
}

module.exports = AuthorForm;