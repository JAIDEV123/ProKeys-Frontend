import React from 'react';

export default class Navbar extends React.Component {
	render() {
		return (
		    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-bottom h-md-10">
		      <a className="navbar-brand" href="#">ProKeys</a>
		      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		        <span className="navbar-toggler-icon"></span>
		      </button>

		      <div className="collapse navbar-collapse" id="navbarSupportedContent">
		        <ul className="navbar-nav mr-auto">
		          <li className="nav-item active">
		            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
		          </li>
		          <li className="nav-item">
		            <a className="nav-link" href="#">How to Use</a>
		          </li>
		          <li className="nav-item">
		            <a className="nav-link" href="#">Help</a>
		          </li>
		        </ul>
		      </div>
		    </nav>
		);
	}
}