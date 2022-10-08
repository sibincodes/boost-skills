import './App.css';

const App = () => {
  const getResults = () => {
    const mynum = [23,45,77,12];
    const [a,b,c,d] = mynum;
    const mynames={z:'sibin',x:'biju',y:'ramesh'};
    const {y,...z} = mynames;
    console.log(z);
    return y;
  };
  return (
  <div className='home'> {getResults()} </div>
  )
}

export default App