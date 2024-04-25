import React, { useCallback, useState } from 'react'
import Title from './Title';
import Display from './Display';
import Button from '../UnderstandingContext/Button';

const Home = () => {
    const [age, setAge] = useState(30);
    const [salary, setSalary] = useState(30000);

    const incrementAge = useCallback(() => {
        setAge(35);
    }, [age]);

    const incrementSalary = useCallback(() => {
        setSalary(35000);
    }, [salary]);

  return (
    <div>
        <Title title="useCallback Hooks"/>
        <Display text="age" displayValue={age}/>
        <Button onBtnClick={incrementAge}>Update  Age</Button>
        <Display text="salary" displayValue={salary}/>
        <Button onBtnClick={incrementSalary}>Update Salary</Button>
    </div>
  )
}

export default Home