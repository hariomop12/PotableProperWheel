 import {useRouter} from 'next/router'

const Dynamicpage = () => {
  const router = useRouter()
  
  
  return (
    <div>      
      <h1>This how dynamic route work [username.] page </h1>
    </div>  
  );
};

export default Dynamicpage;