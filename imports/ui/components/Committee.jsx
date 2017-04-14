import React, {Component, PropTypes} from 'react';
import ReactDOM from "react-dom";
import $ from 'jquery';

var specCommDivRows = [];
var spec_id = [];
export default class Committee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColorComm: "#337ab7",
            commDivShow: false,
            noOfSpecCommMem: 0,
            specCommButtClassRows: [],
            specCommMemAdd: [],
            init: [],
        };

        var ind_id = parseInt(this.props.idx);
        specCommDivRows[ind_id] = [];
        spec_id[ind_id] = 0;
        this.state.init[ind_id] = true;
    }

    commClicked(e){
        var x = !this.state.commDivShow;
        newcommDivShow = x;

        var col = "#337ab7";
        if(x){
            col = "darkred";
        }

        var newBgColorComm = col;
        this.state.specCommButtClassRows = [];
        this.state.specCommButtClassRows.push("btn btn-success btn-add bb");
        var ind_id = parseInt(this.props.idx);
        if(this.state.init[ind_id]){
            this.state.specCommMemAdd[ind_id] = true;
            this.state.init[ind_id] = false;
            specCommDivRows[ind_id] = [];
            spec_id[ind_id] = 0;
        }

        this.setState({
            commDivShow: newcommDivShow,
            bgColorComm: newBgColorComm,
        });

        // console.log("specCommButtClassRows : "+this.state.specCommButtClassRows);


    }

    specCommMemAddButtClick(todo, re){
        var x = parseInt(this.state.noOfSpecCommMem);
        var ind_id = parseInt(this.props.idx);
        if(todo=="add"){
            this.state.specCommMemAdd[ind_id] = true;
            x++;

        }
        else{

            var idx = this.getIdx(re);
            var elm = document.getElementById(re);
            //console.log(elm);
            var newAra = [];
            // console.log("BEFORE");
            // console.log(specCommDivRows);
            for(var i=0;i<specCommDivRows[ind_id].length;i++){
                var r = specCommDivRows[ind_id][i].ref;
                var id = elm.id;
                if(r!=id || specCommDivRows.length==1){
                    newAra.push(specCommDivRows[ind_id][i]);
                    //console.log("DHUKSI");
                }
                //console.log(specCommDivRows[ind_id][i].ref);
                //console.log(elm.id);
            }
            specCommDivRows[ind_id] = [];
            for(var i=0;i<newAra.length;i++){
                specCommDivRows[ind_id].push(newAra[i]);
            }
            // console.log("AFTER");
            // console.log(specCommDivRows);
            x--;


        }

        var a = [];
        for(var i=0;i<x;i++){
            a[i] = "btn btn-danger btn-remove bb";
        }
        a[x] = "btn btn-success btn-add bb";
        this.state.specCommButtClassRows[ind_id] = a;
        this.setState({
            noOfSpecCommMem: x,
        });

    }

    getIdx(re){
        var idx_str = "";
        for(var i=0;i<re.length;i++){
            if(re[i]!='_'){
                idx_str[i] = re[i];
            }
            else{
                break;
            }
        }
        var idx = parseInt(idx_str);
        return idx;
    }

    showHoverText(){
        $('[data-toggle="tooltip"]').tooltip();
    }

    render() {

        var specCommDiv;
        var ind_id = parseInt(this.props.idx);
        if(this.state.commDivShow){
            var x = parseInt(this.state.noOfSpecCommMem);
            var ref_val = spec_id[ind_id].toString() +"_" +  this.props.refVal;
            if(this.state.specCommMemAdd[ind_id]){
                specCommDivRows[ind_id].push(<div key={ref_val} ref={ref_val} id={ref_val} className="row" style={{paddingLeft: "2%", paddingRight: "2%"}}>
                    <div className="control-group" id="fields">
                        <div className="controls">
                            <form role="form" autocomplete="off">
                                <div className="entry input-group col-xs-3">
                                    <input className="form-control" name="fields[]" type="text" placeholder="Type something" />
                                    <span className="input-group-btn">
                                            <button className="btn btn-danger btn-remove bb"
                                                    onClick={this.specCommMemAddButtClick.bind(this, "rmv", ref_val)}
                                                    onmouseover={this.showHoverText.bind(this)}
                                                    data-toggle="tooltip" title="Remove From Committee" type="button">
                                                 <span className="glyphicon glyphicon-minus"></span>
                                             </button>
                                            <button className="btn btn-success btn-add bb"
                                                    onClick={this.specCommMemAddButtClick.bind(this, "add", ref_val)}
                                                    onmouseover={this.showHoverText.bind(this)}
                                                    data-toggle="tooltip" title="Add To Committee" type="button">
                                                <span className="glyphicon glyphicon-plus"></span>
                                            </button>
                                        </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>);
                this.state.specCommMemAdd[ind_id] = false;
                spec_id[ind_id]++;
            }
            console.log("FROM :"+this.props.refVal);
            console.log(specCommDivRows);

        }

        var specCommDivRow2 = [];
        specCommDivRow2[ind_id] = [];
        if(this.state.commDivShow){
            for(var i=0;i<specCommDivRows[ind_id].length;i++){
                specCommDivRow2[ind_id].push(specCommDivRows[ind_id][i]);
            }
        }

        var specCommitte =
            <div>
                <button type="button" className="btn btn-primary"
                        style={{width: "100%", backgroundColor: this.state.bgColorComm}}
                        onClick={this.commClicked.bind(this)}>
                    {this.props.name}
                </button>
                {specCommDivRow2[ind_id]}
            </div>


        return (
            <div  ref={this.props.refVal}>
                {specCommitte}
            </div>
        );
    }
}