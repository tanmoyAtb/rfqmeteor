import React, {Component, PropTypes} from "react";

class Not extends Component {
    constructor(props) {
        super(props);
    }

    gotoRFQ(e) {
        e.preventDefault();
        FlowRouter.go('/Note/' + this.props.notification.RFQ_id);
    }

    render() {
        return (
            <li className="dropdown dropdown-notification">
                <a href="#notifications-panel" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-bell notification-icon"></i>
                    <span className="label label-warning">8</span>
                    <b className="caret"></b></a>
                <div className="dropdown-container">
                    <div className="dropdown-toolbar">
                        <h3 className="dropdown-toolbar-title">Notificans</h3>
                    </div>

                    <ul className="dropdown-menu pull-right alert-dropdown col-md=12">
                        <li className="notification">
                            <div className="media">
                                <a href="#" className="notification col-md-12 ">
                                    <div className="media-left">
                                        <div className="media-object">
                                            <img id="profile" src="/profile.jpg" alt="User Image"/>
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <p><strong>Anjan Basak Tanmoy</strong> Asked for verification ChahidaPotro</p>
                                        <p id="noti">7 March, 2017 at 8:30 am </p>
                                    </div>

                                </a>
                                <a href="#" className="notification col-md-12 ">
                                    <div className="media-left">
                                        <div className="media-object">
                                            <img id="profile" src="/profile.jpg" alt="User Image"/>
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <p><strong>Anjan Basak Tanmoy</strong> Asked to verify RFQ Chahida Potro</p>
                                        <p id="noti">7 March, 2017 at 8:30 am </p>
                                    </div>

                                </a>
                                <a href="#" className="notification col-md-12 ">
                                    <div className="media-left">
                                        <div className="media-object">
                                            <img id="profile" src="/profile.jpg" alt="User Image"/>
                                        </div>
                                    </div>
                                    <div className="media-body">
                                        <p><strong>Laurine Hadima</strong> Asked for verification</p>
                                        <p id="noti">7 March, 2017 at 8:30 am </p>
                                    </div>

                                </a>

                            </div>
                        </li>

                    </ul>
                </div>
            </li>

        );
    }
}


Not.propTypes = {
    nots: PropTypes.array.isRequired
};

export default createContainer(() => {
    return {
        nots: Notifications.find().fetch()
    };
}, Not);