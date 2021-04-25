import React, {Component} from 'react';


class YouTubeDebugger extends Component {

    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
    }

    changeBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    changeReso = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render() {

        return(
            <div>
                <button className='bitrate' onClick={this.changeBitrate}>bitrate</button>
                <button className='resolution' onClick={this.changeReso}>resolution</button>
            </div>
        )
    }
}

export default YouTubeDebugger