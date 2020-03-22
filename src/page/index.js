import React from 'react';
import actions from "./store/actions";
import {connect} from "react-redux";
import FurnitureFinder from "./furniture-container/furniture-item";
import FilterBar from "./filter-bar/filter-bar";

function App() {

    return (
        <div className="App">
            <div className="row full-width header m--0 p--0 bc--soft-brown c--white">
                <div className="col-md-10 offset-1">
                    <div className="row">
                        <div className="col-md-2">
                            <h3 className="p--20 brand bc--bold-chocolate c--white m--0">Furniture.</h3>
                        </div>
                        <div className="col-md-10">
                            <FilterBar/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row  full-width bc--chocolate">
                <div className="col-md-10 offset-1 box-container m__t--50">
                    <FurnitureFinder/>
                </div>
            </div>
        </div>
    );
}

const mapState = ({}) => ({
})
const mapActions = actions

export default connect(mapState, mapActions)(App);
