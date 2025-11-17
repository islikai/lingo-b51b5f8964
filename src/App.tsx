import React from 'react';
import Circle from './components/Circle';
import Square from './components/Square';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center space-x-8">
      <Circle />
      <Square />
    </div>
  );
};

export default App;