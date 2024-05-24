import classNames from 'classnames';

const MyComponent = () => {

    let result = '';
    result = classNames('one', 'two');              console.log(result);    
    result = classNames('one', {two: true});        console.log(result); 
    result = classNames('one', {two: false});       console.log(result); 
    result = classNames('one', ['two', 'three']);   console.log(result); 

    const myClass = 'hello';
    result = classNames('one', myClass, {myCondition: true}); console.log(result); 

    return (
        <div>안녕</div>
    )
}

export default MyComponent;