import React from 'react'
import Link from 'next/link'

const JobItem = (props) => (
    <article className="media">
        <figure className="media-left">
        <p className="image is-64x64">
            <img src={ props.image ? props.image : 'https://bulma.io/images/placeholders/128x128.png'} />
        </p>
        </figure>
        <div className="media-content">
            <div className="content">
                <span className="date-content">{props.startDate} to {props.endDate} </span>
                <br />
                <strong className="job-content">{props.title} at {props.company}</strong>
                <div dangerouslySetInnerHTML={{__html: props.description}}>
                </div>
            </div>
        </div>

        <style jsx>{`
            .media {
                margin-right: 1em;
                margin-left: 1em;
            }

            .job-content {
                font-size: 1.3em;
            }

            .date-content {
                font-size: 1em;

            }
        `}</style>
    </article>
  )

  export default JobItem
