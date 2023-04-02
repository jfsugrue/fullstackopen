const Header = (props) => {
  return (
    <div>
      <h1>{props.courseName}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.content[0].name} {props.content[0].exercises}</p>
      <p>{props.content[1].name} {props.content[1].exercises}</p>
      <p>{props.content[2].name} {props.content[2].exercises}</p>
    </div>
  )
}

const Footer = (props) => {
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
      <Footer total={exercises1 + exercises2 + exercises3}/>
    </div>
  )  
}

export default App;
