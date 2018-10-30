import React from 'react';
import axios from "axios";

class Note extends React.Component {
constructor(props){
    super(props);
    this.state={
        activeNote:[]
    }
}
    
componentDidMount() {
    axios.get(`http://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
    .then(
        
        response => 
        this.setState({ 
      activeNote: response.data
    })
    )
}

getNoteById = () => {
    axios.get(`http://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
    .then(response => this.setState({
      ...this.state, 
      activeNote: [this.state.notes.filter(note=>note._id===response.data)]
    }))
  }

render(){

 return(
 <div className="note-full-view">
    <h3 className="note-title">{this.state.activeNote.title}</h3>
<h4 className="note-text">{this.state.activeNote.textBody}</h4>
    </div>
 )
}
}

export default Note;