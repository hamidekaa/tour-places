
import Card from 'react-bootstrap/Card';





function BasicExample(props) {
    
    
    const {image,title} = props

  return (
    <Card className='card'>
      
      <Card.Title className='title'>  {title} </Card.Title>
      <Card.Img className='cardImg' variant="top" src={image} />
      
      
    </Card>
   
  );
}

export default BasicExample;