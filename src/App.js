import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';


class App extends Component {

  getDetails(e){
    e.preventDefault();
  
      const projectname=this.refs.inputprojectname.value;
      const clientname=this.refs.inputclientname.value;
      console.log(projectname, clientname);
  }


  render() {
    return (
      <div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header title={<span><span style={{ color: '#ddd' }}><strong>ManageMint</strong> </span></span>}>
            <Navigation>
                <a href="/">Logout</a>
                
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
<div className="container">
    <form className="form-horizontal" id="createProject" align="center" onSubmit={this.onSubmit} method="get" action="">
           <legend> PROJECT DETAILS </legend>
              <fieldset >
                <label >Project Name</label>
                <div className="form-group" align="center">
                     <input type="text"
                      className="form-control" 
                      id="projectName" 
                      name="Project Name"
                      placeholder="Project Name" 
                      ref="inputprojectname"
                       />
                  </div>
                  <label >Client name</label>
                    <div className="form-group" align="center">
                    
                      <input type="text"
                       className="form-control"   
                       id="client" 
                       name="Client Name" 
                       placeholder="Client Name"
                       ref="inputclientname"
                          />
                  </div>
                    
                  </fieldset> 
                  <fieldset>
          <div className="createproject-button">
        <button type="submit" className="btn-primary" id="createproject-button"  onClick={this.getDetails.bind(this)} >
          Create Project
        </button>
      </div>
    </fieldset> 
  </form>
 </div>

  </div>
    )

    }  
}

export default App;
