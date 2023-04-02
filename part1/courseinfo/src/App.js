const Header = (props) => {
  return (
    <div>
      <h1>{props.courseName}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
  <div>
    <p>
      {props.name} {props.exercises}
    </p>
  </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.content[0].name} exercises={props.content[0].exercises} />
      <Part name={props.content[1].name} exercises={props.content[1].exercises} />
      <Part name={props.content[2].name} exercises={props.content[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const content = [
    { name: part1, exercises: exercises1},
    { name: part2, exercises: exercises2},
    { name: part3, exercises: exercises3}
  ]

  return (
    <div>
      <Header courseName={course}/>
      <Content content={content} />
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )  
}

export default App;
