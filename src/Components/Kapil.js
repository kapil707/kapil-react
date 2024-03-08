import React,{Component} from 'react';
import "./Mycss.css";

class Kapil extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            name:"kamal",
            todolist:[{
                name:"kamal",
            },{
                name:"kapil",
            },{
                name:"kavita",
            },{
                name:"raman",
            },{
                name:"vedant",
            },{
                name:"naina",
            },{
                name:"pradeep",
            },{
                name:"umika",
            }]
        }
    }
    mybtnclick(){
        this.setState({
            name:"kapil",
        });
    }
    render(){
        let mydt;
        mydt = this.state.todolist.map((row)=>{
            return <>{row.name}<br /></>
        });
        return (
            <>
            {mydt}
            <h2 className='hello'>{this.props.name}</h2>
            <button type='button' onClick={this.mybtnclick.bind(this)}>click me</button>
            </>
        );
    }
}

export default Kapil;