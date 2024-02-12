function Student(props){
   
    return(
        <div style={{backgroundColor:"skyblue",textAlign:"center"}}> 
            <h1>Hello {props.name}</h1>
            <h2>Email Id: {props.email}</h2>
            <h2> Address: {props.other.address}</h2>
        </div>
    );
}

export default Student;