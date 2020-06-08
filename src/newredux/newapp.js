// JavaScript source code
import React, { Component } from "react"
import { connect } from "react-redux"
import { incline, decline } from "./index"
import { Button, Card } from 'semantic-ui-react'




class NewApp extends Component {


    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>

                <Button onClick={this.props.decline}>-</Button >
                
                <Button onClick={this.props.incline}>+</Button>
                <br />




            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        count: state.numberOfBooks,
        data: state.users
    }
}




const mapDispatchtoProps = (dispatch) => {
    return {

        decline: function () {
            dispatch(decline());
        },

        incline: function () {
            dispatch(incline());
        },



    }
}
export default connect(mapStateToProps, mapDispatchtoProps)(NewApp)