import React from 'react';
import { Link } from 'react-router-dom';

const SearchPayload = props => {
    return (
        <div className="search-questions-payload">
            {
                props.questions.map((ques, i) => {
                    return (
                        <div class="list-sumary w-100" key={i}>
                            <h3>
                                <Link className="hyper-link" to={`/questions/ask/${ques._id}`}>{ques.title}</Link>
                            </h3>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SearchPayload;