import {useNavigate} from 'react-router-dom';
export default function Navigate(props){
    const Nav = useNavigate();
    const handlenav=()=>{
        console.log('====================================');
        console.log("nav");
        console.log('====================================');
        return Nav("/dashboard");
    }
    return(
        {handlenav}
    );
}