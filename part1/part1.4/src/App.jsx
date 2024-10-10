//Place the objects into an array. Modify the variable definitions of App and modify the other parts of the application accordingly:

// Header Component
const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

// Part Component (Renders name and exercises of each part)
const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

// Content Component (Renders each Part component)
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} part={part} />
      ))}
    </div>
  );
};

// Total Component (Calculates total exercises)
const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p>Number of exercises {totalExercises}</p>;
};

// Main App Component
const App = () => {
  const course = 'Half Stack application development';
  
  // Updated definition: parts array
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 }
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
