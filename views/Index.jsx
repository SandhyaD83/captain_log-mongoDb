import React, { Component } from 'react'

export default class Index extends Component {
    render() {
        const logs = this.props.logs
        return (
            <div>
                <nav>
                    <a href=''>Add a new Log</a>
                </nav>
                <ul>
                    {logs.map((log, i) => {
                        return (
                            <li>
                                <a href={`/log/${log.id}`}>{log.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
