import Particles from "react-tsparticles";

import {loadSlim} from "tsparticles-slim";
import {useCallback,useMemo} from "react";

const ParticlesComponent =()=>{
    const options = useMemo(() =>{
        return{
            background:{
color:"#00008b",


            },
            number:{
                value:150

            },
            fullScreen:{
enable:true,
 Zindex:-1,
            },
            particles:{
                links:{
                    enable:true,
                },
                move:{
                    enable:true,
                    speed:{min:1,max:3}
                }
            }
        };
    },[]);
    const partticleInit = useCallback((engine) =>{
        loadSlim(engine);
    },[]);
    return <Particles init={partticleInit} options={options}/>


}


export default ParticlesComponent