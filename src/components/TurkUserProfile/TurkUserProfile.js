import React, { Component } from 'react';
import { Link } from 'react-router';

export default class TurkUserProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { turkuser } = this.props;
    const user = turkuser.details;

    console.log(" ====> TURK USER PROFILE PROPS", this.props);
    
    const renderClientTemplate = () => {
      return(
        <div>
          <div className="well col-md-3">
            <h3 className="text-center">Client</h3>
            <h4 className="text-center">{user.name} {user.lastname}</h4>
            <span><strong>Rating:</strong> {user.rating}</span>
          </div>

          <div className="panel panel-default col-md-9">
            <h3 className="text-primary">Bio</h3>
            <blockquote className="blockquote">
              <h4>{user.bio}</h4>
            </blockquote>

            <h3 className="text-primary">Resume</h3>
            <blockquote className="blockquote">
              <h4>{user.resume}</h4>
            </blockquote>
            
            <h3 className="text-primary">Interests</h3>
            <blockquote className="blockquote">
              <h4>{user.interests}</h4>
            </blockquote>

            <h3 className="text-primary">Recent Work</h3>
            <blockquote className="blockquote">
              <h4>{user.recent_work}</h4>
            </blockquote>

            <h3 className="text-primary">Business Credential</h3>
            <blockquote className="blockquote">
              <h4>{user.business_credential}</h4>
            </blockquote>
          </div>

          {/*<div className="col-md-12">
            <div>list what sd is dev working on, list what sd are currently has devs working on for client</div>
          </div>
          */}

        </div>
      );
    }

    const renderDeveloperTemplate = () => {
      return(
        <div>
          <div className="well col-md-3">
            <h3 className="text-center">Developer</h3>
            <h4 className="text-center">{user.name} {user.lastname}</h4>
            <span><strong>Rating:</strong> {user.rating}</span>
          </div>

          <div className="panel panel-default col-md-9">
            <h3 className="text-primary">Bio</h3>
            <blockquote className="blockquote">
              <h4>{user.bio}</h4>
            </blockquote>
            
            <h3 className="text-primary">Resume</h3>
            <blockquote className="blockquote">
              <h4>{user.resume}</h4>
            </blockquote>
            
            <h3 className="text-primary">Technical Skills</h3>
            <blockquote className="blockquote">
              <h4>{user.technical_skills}</h4>
            </blockquote>

            <h3 className="text-primary">Project Experience</h3>
            <blockquote className="blockquote">
              <h4>{user.project_experience}</h4>
            </blockquote>

            <h3 className="text-primary">Interests</h3>
            <blockquote className="blockquote">
              <h4>{user.interests}</h4>
            </blockquote>

            <h3 className="text-primary">Recent Work</h3>
            <blockquote className="blockquote">
              <h4>{user.recent_work}</h4>
            </blockquote>

          </div>

        </div>

      );
    }


    return (
      <div className="turkuser">
        {user.credential === 'client' && renderClientTemplate()}
        {user.credential === 'developer' && renderDeveloperTemplate()}
      </div>
    );
  }
}




