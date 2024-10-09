//**********************Part 1*************************/
// const App = () => {
//   const friends = [
//     { name: 'Peter', age: 4 },
//     { name: 'Maya', age: 10 },
//   ]

//   return (
//     <div>
//       <p>{friends[0].name} {friends[0].age}</p>
//       <p>{friends[1].name} {friends[1].age}</p>
//     </div>
//  )
// }


// export default App

//**********************part 1.1*************************/
// // Header Component
// const Header = ({ course }) => {
//   return <h1>{course}</h1>;
// };

// // Part Component (to be used inside Content)
// const Part = ({ part, exercises}) => {
//   return (
//     <p>
//       {part} {exercises}
//     </p>
//   );
// };

// // Content Component
// const Content = ({ parts }) => {
//   return (
//     <div>
//       {parts.map((part, index) => (
//         <Part key={index} part={part.name} exercises={part.exercises} />
//       ))}
//     </div>
//   );
// };

// // Total Component
// const Total = ({ parts }) => {
//   const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
//   return <p>Number of exercises {totalExercises}</p>;
// };

// // Main App Component
// const App = () => {
//   const course = 'Half Stack application development';
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10,
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7,
//     },
//     {
//       name: 'State of a component',
//       exercises: 14,
//     },
//   ];

// return (
//   <div>
//     <Header course={course} />
//     <Content parts={parts} />
//     <Total parts={parts} />
//   </div>
// );
// };

// export default App


//**********************part 1.2*************************/
// Header Component
const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

// Part Component (Renders name and exercises of each part)
const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

// Content Component (Renders three Part components)
const Content = ({ parts }) => {
  return (
    <div>
      <Part part={parts[0].name} exercises={parts[0].exercises} />
      <Part part={parts[1].name} exercises={parts[1].exercises} />
      <Part part={parts[2].name} exercises={parts[2].exercises} />
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
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 },
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

