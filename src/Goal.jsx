function MissedGoal(){
    return <h1>Goal is missed</h1>
  }
  
function MadeGoal(){
    return <h1>Goal is made</h1> 
}


const Goal = (prop) => {
    if(prop.isGoal){
        return <MissedGoal/>
    } else {
        return <MadeGoal/>
    }
}

export default Goal;
