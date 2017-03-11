import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import SideNote from "./SideNote";


class Note extends Component {
    constructor(props) {
        super(props);
    }
    genSignBlock(signfor, userId, signed) {
        if (signed) {
            return (
                <div className="col-md-6 center-block">
                    <img src="/sign1.png" className="img-circle" alt="User Image"/>
                    <p id="signLabel"><strong>{signfor}</strong></p>
                </div>
            )
        }
        else {
            return (
                <div className="col-md-6 center-block">
                    <p id="unsignLabel"><strong>{signfor}</strong></p>
                </div>
            )
        }
    }
    render() {
        if(this.props.RFQ && this.props.ini) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 jumbotron text-center">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="title-top col-md-12">
                                        <img src="../dricmlogo.jpg" className="center-block"/>
                                        <h3> ডেজিগনেটেড রেফারেন্স ইনস্টিটিউট ফর কেমিক্যাল মেজারমেন্টস </h3>
                                        <h3> বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ </h3>
                                        <hr/>
                                    </div>
                                </div>
                            </div>

                            <p className="text">
                                ১। বাংলাদেশ বিজ্ঞান ও শিল্প গবেষণা পরিষদ (বিসিএসআইআর)-এর আওতাধীন ডেজিগনেটেড
                                রেফারেন্স ইনস্টিটিউট ফর কেমিক্যাল মেজারমেন্টস- এর বৈজ্ঞানিক কর্মকর্তা <strong>{this.props.ini.username}</strong>- এর কাছ
                                থেকে প্রাপ্ত চাহিদার (কপি সংযুক্ত) আলোকে গবেষণার জন্য <strong>{this.props.chahida.title}</strong> ক্রয় করা প্রয়োজন। কাজটি
                                জরুরী বিধায় স্থানীয় সরবরাহকারী প্রতিষ্ঠানের সাথে যোগাযোগ করে তুলনামূলক প্রতিযোগী
                                দরদাতা দ্বারা PPR-২০০৮ এর তফসীল-২-এর বিধি ৯(২)(ক) অনুসরণে RFQ পদ্ধতিতে সংগ্রহ করা
                                যেতে পারে।
                            </p>

                            <p className="text"> ২। সদয় অনুমোদনের জন্য নথি উপস্থাপন করা হলো </p>

                            {this.genSignBlock("হিসাবরক্ষক", this.props.chahida.accountant.user_id, this.props.chahida.accountant.signed)}
                            {this.genSignBlock("অনুমোদনকারী", this.props.chahida.director.user_id, this.props.chahida.director.signed)}

                            <p className="text"> ৩। নোটানুচ্ছেদ ০১ এর অনুমোদনের আলোকে গবেষণাগারের প্রয়োজনের নিরীখে
                                ……………….. এর Specification প্রস্তুত করার দায়িত্ব বাজারমূল্য নির্ধারন ও স্পেসিফিকেশন
                                প্রস্তুতকরন কমিটিকে দেয়া যেতে পারে।
                            </p>

                            <div className="row">
                                <div className="col-md-6">
                                    <p className="verify"> নিবেদক </p>
                                    <div className="boxed"> Image & Signature</div>
                                </div>
                                <div className="col-md-6">
                                    <p className="verify"> জাছাইকারি </p>
                                    <div className="boxed"> Image & Signature</div>
                                </div>
                            </div>

                            <p className="text"> ৪। নোটানুচ্ছেদ ০৩ এর মাধ্যমে প্রাপ্ত আদেশের আলোকে প্রয়োজনীয় …………..
                                সমূহের
                                Specification ও বাজারমূল্য নির্ধারনকৃত হয়েছে(কপি সংযুক্ত)। প্রস্তুতকৃত Specification
                                ও বাজারমূল্যের আলোকে প্রয়োজনীয় ……………… ক্রয় করা যেতে পারে।

                            </p>

                            <div className="row">
                                <div className="col-md-6">
                                    <p className="verify"> নিবেদক </p>
                                    <div className="boxed"> Image & Signature</div>
                                </div>
                                <div className="col-md-6">
                                    <p className="verify"> জাছাইকারি </p>
                                    <div className="boxed"> Image & Signature</div>
                                </div>
                            </div>

                        </div>
                        <SideNote RFQ={this.props.RFQ} ini={this.props.ini}/>
                    </div>
                </div>



            );
        }else{
            return (
                <div>
                    Loading
                </div>
            )
        }
    }
}


Note.propTypes = {
    RFQ: PropTypes.object,
    ini: PropTypes.object,
    chahida: PropTypes.object
};

export default createContainer( props => {
    var RFQ= RFQDetails.findOne(props.id);
    var ini,chahida;
    if(RFQ){
        ini = Meteor.users.findOne(RFQ.initiator);
        chahida= Chahida_Potro.findOne(RFQ.chahida_id);
    }
    return {
        RFQ: RFQDetails.findOne(props.id),
        ini: ini,
        chahida: chahida
    };
}, Note);
