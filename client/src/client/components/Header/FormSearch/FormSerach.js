import React from 'react';

import SearchPayload from './SerachPayload';
import { onSearchQuestions } from '../../../../controllers/askController';
import Notify from '../../Notify';

class FormSerach extends React.Component {

    state = {
        toggleSearch: false,
        questions: [],
        message: ""
    }

    handleToggleSearch = () => {
        let { toggleSearch } = this.state;
        if (!toggleSearch) {
            document.querySelector(".s-input").style.display = "block";
        } else {
            document.querySelector(".s-input").style.display = "none";
        }

        this.setState(function (prevState, props) {
            return { toggleSearch: !prevState.toggleSearch }
        })
    }

    clearMess = (mes) => {
        this.setState({ message: mes });
    }


    handleSearch = async (e) => {
        e.preventDefault();
        let querySearch = document.getElementById("query-search").value;
        if (querySearch) {
            const response = await onSearchQuestions(querySearch);
            console.log(response)
            if (response && !response.error) {
                this.setState({ questions: response.payload, message: response.message })
                document.getElementById("root").addEventListener("click", this.closeSearch)
            }
        }
    }

    closeSearch = () => {
        this.setState({ questions: [] })
        document.getElementById("root").removeEventListener("click", this.closeSearch)
    }


    render() {
        const { questions, message } = this.state;
        return (
            <form action="#search" onSubmit={this.handleSearch}>
                <Notify />
                {message !== "" && <Notify class="on" text={message} clearMess={this.clearMess} />}
                <div className="ps-relative">
                    <input
                        type="text" name="q" placeholder="Search..." maxLength="240" className="s-input s-input__search js-search-field w-100" id="query-search" autoComplete="off"
                    />
                    <svg aria-hidden="true" className="svg-icon s-input-icon s-input-icon__search iconSearch" width="18" height="18" viewBox="0 0 18 18"><path d="M18 16.5l-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0z"></path></svg>
                    <svg
                        aria-hidden="false" className="svg-icon s-input-icon s-input-icon__search iconSearch d-none" width="18" height="18" viewBox="0 0 18 18"
                        onClick={this.handleToggleSearch}
                    >
                        <path d="M18 16.5l-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0z"></path>
                    </svg>
                    
                    <SearchPayload questions={questions} />
                </div>
            </form>
        )
    }
}

export default FormSerach;