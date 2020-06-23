import React, {Component} from "react";

class ChatBot extends Component {
    render() {
        return (
            <div>
                ChatBot is working
                <div className='chatbot'
                     data-pega-gadgetname='PegaGadget'
                     data-pega-action='createNewWork'
                     data-pega-action-param-classname='Work-Channel-Chat'
                     data-pega-action-param-flowname='pyStartCase'
                     data-pega-isdeferloaded='false'
                     data-pega-applicationname='Investment'
                     data-pega-threadname='STANDARD'
                     data-pega-resizetype='fixed'
                     data-pega-url='https://172.16.135.144:8443/prweb/PRChat/app/Investment_6465/'
                     data-pega-action-param-parameters='{"channelId":"bot916a7d9722bd4784a14dafbcde4c2a5e"}'></div>

            </div>
        );
    }
}

export default ChatBot
