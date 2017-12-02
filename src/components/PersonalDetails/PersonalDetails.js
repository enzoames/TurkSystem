import React, { Component } from 'react';
import { RenderInput, RenderSubmitButton, RenderTextBox } from '../RenderForm/RenderForm';
import { createValidatorNew } from '../../utils/validation';
import { Link } from 'react-router';

export default class PersonalDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resume: "",
      technicalSkills: "",
      projectExperience: "",
      interests: "",
      recentWork: "", //Developer
      businessCredential: "", //Client
      didSubmit: false
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = () => {
    const result = {
      user_id: this.props.auth.user.id,
      resume: this.state.resume,
      technical_skills: this.state.technicalSkills,
      project_experience: this.state.projectExperience,
      interests: this.state.interests,
      recent_work: this.state.recentWork,
      business_credential: this.state.businessCredential
    }

    console.log('RESULT', result);
    this.props.updateUserProfile(result);
    this.setState({didSubmit: true})
    console.log('\n\nSuccess!!!');    
  }

  render() {
    const { auth } = this.props;
    const user = auth.user;
    // console.log('PersonalDetails STATE: ', this.state);
    // console.log(' === PersonalDetails PROPS: ', this.props);

    const outerGroupClassName = 'col-sm-12 col-md-12 ';
    const labelClassName = 'col-sm-12 col-md-12';
    const inputGroupClassName = 'col-sm-12 col-md-12';

    const renderCurrentPersonalDetails = <div>
      <h4 className="text-primary"><u>Resume</u></h4>
      <span>{user.resume}</span>

      { user.credential === 'developer' &&
      <div>
        <h4 className="text-primary"><u>Technical Skills</u></h4>
        <span>{user.technical_skills}</span>
        <h4 className="text-primary"><u>Project Experience</u></h4>
        <span>{user.project_experience}</span>
      </div>
      } 

      <h4 className="text-primary"><u>Interests</u></h4>
      <span>{user.interests}</span>
      <h4 className="text-primary"><u>Recent Work</u></h4>
      <span>{user.recent_work}</span>

      { user.credential === 'client' &&
      <div>
        <h4 className="text-primary"><u>Business Credential</u></h4>  
        <span>{user.business_credential}</span>
      </div>
      }

    </div>

    const renderPersonalDetails = <div>
        <RenderTextBox label="Resume" value={this.state.resume} name="resume" placeholder="" rows={3}  onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} textAreaClassName={labelClassName}/>
        { user.credential === 'developer' &&
        <div>
          <RenderTextBox label="Technical Skills" value={this.state.technicalSkills} name="technicalSkills" placeholder="" rows={3}  onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} textAreaClassName={labelClassName}/>
          <RenderTextBox label="Project Experience" value={this.state.projectExperience} name="projectExperience" placeholder="" rows={3}  onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} textAreaClassName={labelClassName}/>
        </div>
        }
        <RenderTextBox label="Interests" value={this.state.interests} name="interests" placeholder="" rows={3}  onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} textAreaClassName={labelClassName}/>
        <RenderTextBox label="Recent Work" value={this.state.recentWork} name="recentWork" placeholder="" rows={3}  onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} textAreaClassName={labelClassName}/>
        {user.credential === 'client' &&
          <RenderTextBox label="Business Credential" value={this.state.businessCredential} name="businessCredential" placeholder="" rows={3}  onChange={this.handleChange} outerGroupClassName={outerGroupClassName} labelClassName={labelClassName} textAreaClassName={labelClassName}/>
        }
        <RenderSubmitButton outerGroupClassName={outerGroupClassName} buttonClassName="" onClick={this.handleSubmit} label="Submit" />
      </div>;
    
    return (
      <div className="personal-details">

        <div className="col-md-12">
          <h1 className="bg-primary text-center">Personal Details</h1>
          
          <div className="col-md-12 panel panel-default">
            {renderCurrentPersonalDetails}
          </div>

          <h4 className="text-warning">Please fill out as many of the fields as you want</h4>
          {this.state.didSubmit ? (<h4 className="text-success">Thank you for editing your profile. I detailed profile will garantee more success in the platform</h4>) :
            (renderPersonalDetails)
          }
        </div>

      </div>
    );
  }
}




