"use strict";

var React = require("react");

var AuthorForm = React.createClass({
    render: function() {
        return (
            <form>
                <h1>Manage author</h1>
                <label htmlFor="firstName">First Name</label>
                <input type="text"
                    name="firstName"
                    className="form-control"
                    placeholder="first Name"
                    ref="firstname"
                    onChange={this.props.onChange}
                    value={this.props.firstName} />
                <br />

                <label htmlFor="lastName">First Name</label>
                <input type="text"
                    name="lastName"
                    className="form-control"
                    placeholder="last Name"
                    ref="lastname"
                    onChange={this.props.onChange}
                    value={this.props.lastName} />
                <br />
                
                <input type="submit" value="Save" className="btn btn default" />
            </form>
        );
    }
});

module.exports = AuthorForm;