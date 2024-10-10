//Refactor code : consists of three new components: Header, Content, and Total. All data still resides in the App component, which passes the necessary data to each component using props. Header takes care of rendering the name of the course, Content renders the parts and their number of exercises and Total renders the total number of exercises.

// Header Component
const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

// Part Component (to be used inside Content)
const Part = ({ part, exercises}) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

// Content Component
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

// Total Component
const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p>Number of exercises {totalExercises}</p>;
};

// Main App Component
const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    },
  ];

return (
  <div>
    <Header course={course} />
    <Content parts={parts} />
    <Total parts={parts} />
  </div>
);
};

export default App
