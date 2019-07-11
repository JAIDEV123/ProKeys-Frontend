import React from 'react';

export default class Placeholders extends React.Component {
	render() {
		return (
			<React.Fragment>
	        
				<div className="progress w-75 mx-auto" style={{height: "5%"}}>
				  <div className="progress-bar" Role="progressbar" style={{ width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
				</div>

		        <div className="container-fluid h-75 pt-5">
		        	<div className="row h-100">
		        		<div className="col d-flex align-self-center justify-content-center">
		        			<div className="container-fluid ">
		        				<div className="row ">
		        					<div className="col">
		        						<h1 className="font-weight-bold">Dynamic Forms!</h1>
		        						<p className="pt-2 pb-3">Want to send the same mail with a personalised name tag and more? ProKeys lets you do that!</p>

		        						<i className="text-muted">For example:</i> <mark>form</mark> expands to <code>Dear | _&nbsp;_&nbsp;_&nbsp;,</code>

		        						<br/><br/>

		        						The cursor is placed at the desired location AUTOMATICALLY!. <br/><br/>

		        						Press <kbd>Tab</kbd> to cycle among the placeholders. 
		        					</div>
		        				</div>
		        			</div>
		        		</div>
						<div className="col">
							<div class="card w-100">
									<ul class="list-group list-group-flush text-left">
									<li class="list-group-item bg-danger text-right text-white font-weight-bold">Compose Mail</li>
									<li class="list-group-item">To:&nbsp;&nbsp;<span className="text-muted">email@fancy.email.com</span></li>
									<li class="list-group-item">Subject:&nbsp;&nbsp;<span className="text-muted">ProKeys Placeholder Demo</span></li>
									<div class="card-body">
										<h5 class="card-title font-weight-bold py-2">Try it out here!</h5>
										<p class="card-text">Use the snippet <mark>form</mark></p>
										<div className="form-group">
											<textarea className="form-control" rows="5" placeholder="Type text here">
											</textarea>
										</div>
									</div>
								</ul>
							</div>
						</div>
		        	</div>
		        </div>
	        </React.Fragment>
		);
	}
}