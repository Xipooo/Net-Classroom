import React from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';

function saveRepos(repos) {
    return { type: "SAVE_REPOS", payload: repos }
}

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { repos: this.props.repos, search: this.props.search }
    }

    searchGithub = (searchString) => {
        fetch("https://api.github.com/search/repositories?q=" + searchString)
            .then(resp => resp.json())
            .then(respJson => {
                this.props.dispatch(saveRepos(respJson.items));
            });
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("Next State: ", nextState);
        console.log("Current State: ", this.state);
        return true;
    }

    render() {
        return (
            <div className="container">
                <Header title="Search" />
                <form onSubmit={(e) => { e.preventDefault(); this.searchGithub(this.state.search); }}>
                    <input
                        type="text"
                        placeholder="search"
                        value={this.state.search}
                        onChange={e => this.setState({ search: e.target.value })} />
                    <input type="submit" value="Submit" />
                </form>
                <ul>
                    {console.log(this.state.repos)}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    console.log("Map: ", state.repos);
    return { repos: state.repos, search: state.search }
}
const mapDispatchToProps = (dispatch) => {
    return { dispatch: dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);