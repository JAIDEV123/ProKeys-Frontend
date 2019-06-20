/* eslint-disable no-unused-vars */
import React from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class Compose extends React.Component {
    constructor(props) {
        super(props);

        if(this.props.ismax) {
            this.state = {
                minimize: false,
                maximize: true,
                minclass: "row d-none",
                maxclass: "row d-block",
            };
        } else {
            this.state = {
                minimize: true,
                maximize: false,
                minclass: "row d-block",
                maxclass: "row d-none",
            };
        }

        this.state["name"] = this.props.name;
        this.state["content"] = this.props.content;
        this.state["id"] = this.props.id;
    }

    minimize() {
        this.setState((state, props) => ({
            minimize: true,
            maximize: false,
            minclass: "row d-block",
            maxclass: "row d-none",
        }));
    }

    maximize() {
        this.setState((state, props) => ({
            minimize: false,
            maximize: true,
            minclass: "row d-none",
            maxclass: "row d-block",
        }));
    }

    updateParent() {
        this.props.updateArray();
    }

    nameChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    contentChange(e) {
        this.setState({
            content: e.target.value
        })
    }

    render() {
        return (
            <div className="light-snippet renable-pointer align-self-end px-5" id={this.props.id}>
                <div className="container-fluid w-130 light-compose float-right">
                    <div className={this.state.minclass} onClick={this.maximize.bind(this)}>
                        <div className="col d-flex align-items-end">
                            <div className="light-compose-mini maximize">
                                <div className="py-2 px-2 text-center text-white">
                                    <span className="font-weight-bold">Snippet</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={this.state.maxclass}>
                        <div className="col">
                            <div className="pl-1 pr-1 pb-2 pt-1 w-100">
                                <div className="light-icons float-right">
                                    <button type="button" className="close p-2" aria-label="Close">
                                        <span aria-hidden="true"><FontAwesomeIcon icon="times" /></span>
                                    </button>
                                    <button type="button" className="close p-2" aria-label="expand">
                                        <span aria-hidden="true"><FontAwesomeIcon icon="expand" /></span>
                                    </button>
                                    <button type="button" className="close p-2 minimize" aria-label="minimize" onClick={this.minimize.bind(this)}>
                                        <span aria-hidden="true"><FontAwesomeIcon icon="minus" /></span>
                                    </button>
                                </div>

                                <form className="pt-3">
                                    <div className="form-group">
                                        <label className="light-compose-title">Snippet Name</label>
                                        <input type="email" className="form-control" placeholder="This will expand into the snippet" value={this.state.name} onChange={this.nameChange.bind(this)}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="light-compose-title d-inline">Snippet Content</label>

                                        <label className="light-switch float-right pb-1">
                                            <input type="checkbox" />
                                            <span className="light-slider round"></span>
                                        </label>
                                        <span className="text-white float-right pb-3 pr-2">Rich Text Editor</span>

                                        <textarea className="form-control" rows="15" value={this.state.content} placeholder="This is the content of your snippet. Toggle the button above to switch between edit modes." onChange={this.contentChange.bind(this)}></textarea>
                                    </div>
                                    <div className="form-group">
                                        <button type="button" className="p-2 remove-button-styling btn light-compose-button">
                                            <span className="px-2">Create!</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
