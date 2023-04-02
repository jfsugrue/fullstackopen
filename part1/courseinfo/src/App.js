const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.courseName}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
  <div>
    <p>
      {props.name} {props.exercises}
    </p>
  </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part name={props.content[0].name} exercises={props.content[0].exercises} />
      <Part name={props.content[1].name} exercises={props.content[1].exercises} />
      <Part name={props.content[2].name} exercises={props.content[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const content = [
    part1, part2, part3
  ]

  return (
    <div>
      <Header courseName={course}/>
      <Content content={content} />
      <Total total={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )  
}

export default App;
