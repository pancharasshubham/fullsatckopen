//Let's move forward to using objects in our application. Modify the variable definitions of the App component as follows and also refactor the application so that it still works:

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

// Content Component (Renders three Part components)
const Content = ({ parts }) => {
  return (
    <div>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
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
  
  // Updated variable definitions using objects
  const part1 = { name: 'Fundamentals of React', exercises: 10 };
  const part2 = { name: 'Using props to pass data', exercises: 7 };
  const part3 = { name: 'State of a component', exercises: 14 };

  const parts = [part1, part2, part3];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
